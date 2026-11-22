import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channel', '/channel/:ChannelName', keyArgs] as const
}

export function getChannelChannelNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelChannelNameQueryKey>
  >({
    queryKey: getChannelChannelNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel[':ChannelName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelChannelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelChannelNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChannelChannelNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChannelChannelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelChannelNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChannelChannelNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSourceLocationSourceLocationNameLiveSourceLiveSourceName<
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getPrefetchSchedulePlaybackConfigurationNameNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPrefetchSchedulePlaybackConfigurationNameNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPrefetchSchedulePlaybackConfigurationNameNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPrefetchSchedulePlaybackConfigurationNameNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePrefetchSchedulePlaybackConfigurationNameName<
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
  args: InferRequestType<
    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPrefetchSchedulePlaybackConfigurationNameNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['channel', '/channel/:ChannelName/program/:ProgramName', keyArgs] as const
}

export function getChannelChannelNameProgramProgramNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelChannelNameProgramProgramNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel[':ChannelName'].program[':ProgramName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelChannelNameProgramProgramNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getChannelChannelNameProgramProgramNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelChannelNameProgramProgramName<
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
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getChannelChannelNameProgramProgramNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getChannelChannelNameProgramProgramNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sourceLocation', '/sourceLocation/:SourceLocationName', keyArgs] as const
}

export function getSourceLocationSourceLocationNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourceLocationSourceLocationNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourceLocationSourceLocationNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSourceLocationSourceLocationNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSourceLocationSourceLocationName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSourceLocationSourceLocationNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSourceLocationSourceLocationNameVodSourceVodSourceName<
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channel', '/channel/:ChannelName/policy', keyArgs] as const
}

export function getChannelChannelNamePolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelChannelNamePolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel[':ChannelName'].policy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelChannelNamePolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getChannelChannelNamePolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelChannelNamePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getChannelChannelNamePolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['playbackConfiguration', '/playbackConfiguration/:Name', keyArgs] as const
}

export function getPlaybackConfigurationNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlaybackConfigurationNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playbackConfiguration[':Name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlaybackConfigurationNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlaybackConfigurationNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlaybackConfigurationName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlaybackConfigurationNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channel', '/channel/:ChannelName/schedule', keyArgs] as const
}

export function getChannelChannelNameScheduleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channel)[':ChannelName']['schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelChannelNameScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel[':ChannelName'].schedule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelChannelNameScheduleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getChannelChannelNameScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelChannelNameSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channel)[':ChannelName']['schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getChannelChannelNameScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAlertsResourceArnQueryKey(
  args: InferRequestType<(typeof client)['alerts#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alerts#resourceArn', '/alerts#resourceArn', keyArgs] as const
}

export function getAlertsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alerts#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsResourceArnQueryKey>
  >({
    queryKey: getAlertsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['alerts#resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAlertsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alerts#resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlertsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAlertsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAlertsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alerts#resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlertsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAlertsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChannelsQueryKey(args: InferRequestType<typeof client.channels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels', keyArgs] as const
}

export function getChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >({
    queryKey: getChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSourceLocationSourceLocationNameLiveSourcesQueryKey(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sourceLocation', '/sourceLocation/:SourceLocationName/liveSources', keyArgs] as const
}

export function getSourceLocationSourceLocationNameLiveSourcesQueryOptions<
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourceLocationSourceLocationNameLiveSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].liveSources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourceLocationSourceLocationNameLiveSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSourceLocationSourceLocationNameLiveSourcesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSourceLocationSourceLocationNameLiveSources<
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSourceLocationSourceLocationNameLiveSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSourceLocationSourceLocationNameLiveSourcesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlaybackConfigurationsQueryKey(
  args: InferRequestType<typeof client.playbackConfigurations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['playbackConfigurations', '/playbackConfigurations', keyArgs] as const
}

export function getPlaybackConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.playbackConfigurations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaybackConfigurationsQueryKey>
  >({
    queryKey: getPlaybackConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playbackConfigurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlaybackConfigurations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.playbackConfigurations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaybackConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlaybackConfigurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlaybackConfigurations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.playbackConfigurations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaybackConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlaybackConfigurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<typeof client.sourceLocations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['sourceLocations', '/sourceLocations', keyArgs] as const
}

export function getSourceLocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sourceLocations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSourceLocationsQueryKey>
  >({
    queryKey: getSourceLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sourceLocations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSourceLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sourceLocations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSourceLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSourceLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSourceLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sourceLocations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSourceLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSourceLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sourceLocation', '/sourceLocation/:SourceLocationName/vodSources', keyArgs] as const
}

export function getSourceLocationSourceLocationNameVodSourcesQueryOptions<
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourceLocationSourceLocationNameVodSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].vodSources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourceLocationSourceLocationNameVodSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSourceLocationSourceLocationNameVodSourcesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSourceLocationSourceLocationNameVodSources<
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
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSourceLocationSourceLocationNameVodSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSourceLocationSourceLocationNameVodSourcesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
