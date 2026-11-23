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

export function getProdKey() {
  return ['prod'] as const
}

export function getPostProdInputDevicesInputDeviceIdAcceptMutationKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId/accept', 'POST'] as const
}

export function getPostProdInputDevicesInputDeviceIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['accept']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdInputDevicesInputDeviceIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prod.inputDevices)[':inputDeviceId']['accept']['$post']
      >,
    ) {
      return parseResponse(client.prod.inputDevices[':inputDeviceId'].accept.$post(args, options))
    },
  })
}

export function usePostProdInputDevicesInputDeviceIdAccept<
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
                ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['accept']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdInputDevicesInputDeviceIdAcceptMutationOptions<
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

export function getPostProdBatchDeleteMutationKey() {
  return ['prod', '/prod/batch/delete', 'POST'] as const
}

export function getPostProdBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.batch.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.prod.batch.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProdBatchDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prod.batch.delete.$post>) {
      return parseResponse(client.prod.batch.delete.$post(args, options))
    },
  })
}

export function usePostProdBatchDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.batch.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.prod.batch.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdBatchDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostProdBatchStartMutationKey() {
  return ['prod', '/prod/batch/start', 'POST'] as const
}

export function getPostProdBatchStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.batch.start.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.prod.batch.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProdBatchStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prod.batch.start.$post>) {
      return parseResponse(client.prod.batch.start.$post(args, options))
    },
  })
}

export function usePostProdBatchStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.batch.start.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.prod.batch.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdBatchStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostProdBatchStopMutationKey() {
  return ['prod', '/prod/batch/stop', 'POST'] as const
}

export function getPostProdBatchStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.batch.stop.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.prod.batch.stop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProdBatchStopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prod.batch.stop.$post>) {
      return parseResponse(client.prod.batch.stop.$post(args, options))
    },
  })
}

export function usePostProdBatchStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.batch.stop.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.prod.batch.stop.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdBatchStopMutationOptions<TError, TOnMutateResult>(
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

export function getProdChannelsChannelIdScheduleQueryKey(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/channels/:channelId/schedule', keyArgs] as const
}

export function getProdChannelsChannelIdScheduleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdChannelsChannelIdScheduleQueryKey>
  >({
    queryKey: getProdChannelsChannelIdScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.channels[':channelId'].schedule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdChannelsChannelIdSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdChannelsChannelIdScheduleQueryKey>
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
      ...getProdChannelsChannelIdScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdChannelsChannelIdSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdChannelsChannelIdScheduleQueryKey>
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
      ...getProdChannelsChannelIdScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutProdChannelsChannelIdScheduleMutationKey() {
  return ['prod', '/prod/channels/:channelId/schedule', 'PUT'] as const
}

export function getPutProdChannelsChannelIdScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProdChannelsChannelIdScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$put']>,
    ) {
      return parseResponse(client.prod.channels[':channelId'].schedule.$put(args, options))
    },
  })
}

export function usePutProdChannelsChannelIdSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProdChannelsChannelIdScheduleMutationOptions<
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

export function getDeleteProdChannelsChannelIdScheduleMutationKey() {
  return ['prod', '/prod/channels/:channelId/schedule', 'DELETE'] as const
}

export function getDeleteProdChannelsChannelIdScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProdChannelsChannelIdScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$delete']>,
    ) {
      return parseResponse(client.prod.channels[':channelId'].schedule.$delete(args, options))
    },
  })
}

export function useDeleteProdChannelsChannelIdSchedule<
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
                ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProdChannelsChannelIdScheduleMutationOptions<
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

export function getPostProdInputDevicesInputDeviceIdCancelMutationKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId/cancel', 'POST'] as const
}

export function getPostProdInputDevicesInputDeviceIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdInputDevicesInputDeviceIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prod.inputDevices)[':inputDeviceId']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.prod.inputDevices[':inputDeviceId'].cancel.$post(args, options))
    },
  })
}

export function usePostProdInputDevicesInputDeviceIdCancel<
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
                ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdInputDevicesInputDeviceIdCancelMutationOptions<
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

export function getPostProdClaimDeviceMutationKey() {
  return ['prod', '/prod/claimDevice', 'POST'] as const
}

export function getPostProdClaimDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.claimDevice.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.prod.claimDevice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProdClaimDeviceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prod.claimDevice.$post>) {
      return parseResponse(client.prod.claimDevice.$post(args, options))
    },
  })
}

export function usePostProdClaimDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.claimDevice.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.prod.claimDevice.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdClaimDeviceMutationOptions<TError, TOnMutateResult>(
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

export function getProdChannelsQueryKey(args: InferRequestType<typeof client.prod.channels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/channels', keyArgs] as const
}

export function getProdChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.prod.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProdChannelsQueryKey>
  >({
    queryKey: getProdChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProdChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.channels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProdChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProdChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProdChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.channels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProdChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProdChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProdChannelsMutationKey() {
  return ['prod', '/prod/channels', 'POST'] as const
}

export function getPostProdChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.prod.channels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProdChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prod.channels.$post>) {
      return parseResponse(client.prod.channels.$post(args, options))
    },
  })
}

export function usePostProdChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.prod.channels.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdChannelsMutationOptions<TError, TOnMutateResult>(
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

export function getProdInputsQueryKey(args: InferRequestType<typeof client.prod.inputs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputs', keyArgs] as const
}

export function getProdInputsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.prod.inputs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProdInputsQueryKey>
  >({
    queryKey: getProdInputsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.inputs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProdInputs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.inputs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProdInputsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProdInputs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.inputs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProdInputsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProdInputsMutationKey() {
  return ['prod', '/prod/inputs', 'POST'] as const
}

export function getPostProdInputsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$post>>>>>,
    TError,
    InferRequestType<typeof client.prod.inputs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProdInputsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prod.inputs.$post>) {
      return parseResponse(client.prod.inputs.$post(args, options))
    },
  })
}

export function usePostProdInputs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.prod.inputs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdInputsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProdInputSecurityGroupsQueryKey(
  args: InferRequestType<typeof client.prod.inputSecurityGroups.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputSecurityGroups', keyArgs] as const
}

export function getProdInputSecurityGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.inputSecurityGroups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdInputSecurityGroupsQueryKey>
  >({
    queryKey: getProdInputSecurityGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.inputSecurityGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdInputSecurityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.inputSecurityGroups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputSecurityGroupsQueryKey>
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
      ...getProdInputSecurityGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdInputSecurityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.inputSecurityGroups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputSecurityGroupsQueryKey>
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
      ...getProdInputSecurityGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProdInputSecurityGroupsMutationKey() {
  return ['prod', '/prod/inputSecurityGroups', 'POST'] as const
}

export function getPostProdInputSecurityGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.prod.inputSecurityGroups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProdInputSecurityGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prod.inputSecurityGroups.$post>) {
      return parseResponse(client.prod.inputSecurityGroups.$post(args, options))
    },
  })
}

export function usePostProdInputSecurityGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.prod.inputSecurityGroups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdInputSecurityGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getProdMultiplexesQueryKey(
  args: InferRequestType<typeof client.prod.multiplexes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/multiplexes', keyArgs] as const
}

export function getProdMultiplexesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.prod.multiplexes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProdMultiplexesQueryKey>
  >({
    queryKey: getProdMultiplexesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.multiplexes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProdMultiplexes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.multiplexes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProdMultiplexesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProdMultiplexesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProdMultiplexes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.multiplexes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProdMultiplexesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProdMultiplexesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProdMultiplexesMutationKey() {
  return ['prod', '/prod/multiplexes', 'POST'] as const
}

export function getPostProdMultiplexesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.prod.multiplexes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProdMultiplexesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prod.multiplexes.$post>) {
      return parseResponse(client.prod.multiplexes.$post(args, options))
    },
  })
}

export function usePostProdMultiplexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.prod.multiplexes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdMultiplexesMutationOptions<TError, TOnMutateResult>(
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

export function getProdMultiplexesMultiplexIdProgramsQueryKey(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/multiplexes/:multiplexId/programs', keyArgs] as const
}

export function getProdMultiplexesMultiplexIdProgramsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdMultiplexesMultiplexIdProgramsQueryKey>
  >({
    queryKey: getProdMultiplexesMultiplexIdProgramsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.multiplexes[':multiplexId'].programs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdMultiplexesMultiplexIdPrograms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdMultiplexesMultiplexIdProgramsQueryKey>
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
      ...getProdMultiplexesMultiplexIdProgramsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdMultiplexesMultiplexIdPrograms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdMultiplexesMultiplexIdProgramsQueryKey>
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
      ...getProdMultiplexesMultiplexIdProgramsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProdMultiplexesMultiplexIdProgramsMutationKey() {
  return ['prod', '/prod/multiplexes/:multiplexId/programs', 'POST'] as const
}

export function getPostProdMultiplexesMultiplexIdProgramsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdMultiplexesMultiplexIdProgramsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$post']>,
    ) {
      return parseResponse(client.prod.multiplexes[':multiplexId'].programs.$post(args, options))
    },
  })
}

export function usePostProdMultiplexesMultiplexIdPrograms<
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
                ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdMultiplexesMultiplexIdProgramsMutationOptions<
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

export function getPostProdInputsInputIdPartnersMutationKey() {
  return ['prod', '/prod/inputs/:inputId/partners', 'POST'] as const
}

export function getPostProdInputsInputIdPartnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['partners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputs)[':inputId']['partners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdInputsInputIdPartnersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.inputs)[':inputId']['partners']['$post']>,
    ) {
      return parseResponse(client.prod.inputs[':inputId'].partners.$post(args, options))
    },
  })
}

export function usePostProdInputsInputIdPartners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['partners']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.inputs)[':inputId']['partners']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdInputsInputIdPartnersMutationOptions<TError, TOnMutateResult>(
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

export function getProdTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/tags/:resource-arn', keyArgs] as const
}

export function getProdTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdTagsResourceArnQueryKey>
  >({
    queryKey: getProdTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.tags[':resource-arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProdTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProdTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProdTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProdTagsResourceArnMutationKey() {
  return ['prod', '/prod/tags/:resource-arn', 'POST'] as const
}

export function getPostProdTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.prod.tags)[':resource-arn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$post']>) {
      return parseResponse(client.prod.tags[':resource-arn'].$post(args, options))
    },
  })
}

export function usePostProdTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.prod.tags)[':resource-arn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getProdChannelsChannelIdQueryKey(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/channels/:channelId', keyArgs] as const
}

export function getProdChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdChannelsChannelIdQueryKey>
  >({
    queryKey: getProdChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.channels[':channelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdChannelsChannelIdQueryKey>
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
      ...getProdChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdChannelsChannelIdQueryKey>
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
      ...getProdChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutProdChannelsChannelIdMutationKey() {
  return ['prod', '/prod/channels/:channelId', 'PUT'] as const
}

export function getPutProdChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.channels)[':channelId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProdChannelsChannelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.prod.channels)[':channelId']['$put']>) {
      return parseResponse(client.prod.channels[':channelId'].$put(args, options))
    },
  })
}

export function usePutProdChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.channels)[':channelId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProdChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProdChannelsChannelIdMutationKey() {
  return ['prod', '/prod/channels/:channelId', 'DELETE'] as const
}

export function getDeleteProdChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.channels)[':channelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProdChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.channels)[':channelId']['$delete']>,
    ) {
      return parseResponse(client.prod.channels[':channelId'].$delete(args, options))
    },
  })
}

export function useDeleteProdChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.channels)[':channelId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProdChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
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

export function getProdInputsInputIdQueryKey(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputs/:inputId', keyArgs] as const
}

export function getProdInputsInputIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdInputsInputIdQueryKey>
  >({
    queryKey: getProdInputsInputIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.inputs[':inputId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdInputsInputId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputsInputIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProdInputsInputIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProdInputsInputId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputsInputIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProdInputsInputIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutProdInputsInputIdMutationKey() {
  return ['prod', '/prod/inputs/:inputId', 'PUT'] as const
}

export function getPutProdInputsInputIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputs)[':inputId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProdInputsInputIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$put']>) {
      return parseResponse(client.prod.inputs[':inputId'].$put(args, options))
    },
  })
}

export function usePutProdInputsInputId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.inputs)[':inputId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProdInputsInputIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProdInputsInputIdMutationKey() {
  return ['prod', '/prod/inputs/:inputId', 'DELETE'] as const
}

export function getDeleteProdInputsInputIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputs)[':inputId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProdInputsInputIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$delete']>) {
      return parseResponse(client.prod.inputs[':inputId'].$delete(args, options))
    },
  })
}

export function useDeleteProdInputsInputId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.inputs)[':inputId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProdInputsInputIdMutationOptions<TError, TOnMutateResult>(
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

export function getProdInputSecurityGroupsInputSecurityGroupIdQueryKey(
  args: InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputSecurityGroups/:inputSecurityGroupId', keyArgs] as const
}

export function getProdInputSecurityGroupsInputSecurityGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdInputSecurityGroupsInputSecurityGroupIdQueryKey>
  >({
    queryKey: getProdInputSecurityGroupsInputSecurityGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.inputSecurityGroups[':inputSecurityGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdInputSecurityGroupsInputSecurityGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputSecurityGroupsInputSecurityGroupIdQueryKey>
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
      ...getProdInputSecurityGroupsInputSecurityGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdInputSecurityGroupsInputSecurityGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputSecurityGroupsInputSecurityGroupIdQueryKey>
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
      ...getProdInputSecurityGroupsInputSecurityGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutProdInputSecurityGroupsInputSecurityGroupIdMutationKey() {
  return ['prod', '/prod/inputSecurityGroups/:inputSecurityGroupId', 'PUT'] as const
}

export function getPutProdInputSecurityGroupsInputSecurityGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProdInputSecurityGroupsInputSecurityGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$put']
      >,
    ) {
      return parseResponse(
        client.prod.inputSecurityGroups[':inputSecurityGroupId'].$put(args, options),
      )
    },
  })
}

export function usePutProdInputSecurityGroupsInputSecurityGroupId<
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
                  (typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProdInputSecurityGroupsInputSecurityGroupIdMutationOptions<
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

export function getDeleteProdInputSecurityGroupsInputSecurityGroupIdMutationKey() {
  return ['prod', '/prod/inputSecurityGroups/:inputSecurityGroupId', 'DELETE'] as const
}

export function getDeleteProdInputSecurityGroupsInputSecurityGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProdInputSecurityGroupsInputSecurityGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.prod.inputSecurityGroups[':inputSecurityGroupId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProdInputSecurityGroupsInputSecurityGroupId<
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
                  (typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$delete']
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
  const mutationDefaults = getDeleteProdInputSecurityGroupsInputSecurityGroupIdMutationOptions<
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

export function getProdMultiplexesMultiplexIdQueryKey(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/multiplexes/:multiplexId', keyArgs] as const
}

export function getProdMultiplexesMultiplexIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdMultiplexesMultiplexIdQueryKey>
  >({
    queryKey: getProdMultiplexesMultiplexIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.multiplexes[':multiplexId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdMultiplexesMultiplexId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdMultiplexesMultiplexIdQueryKey>
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
      ...getProdMultiplexesMultiplexIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdMultiplexesMultiplexId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdMultiplexesMultiplexIdQueryKey>
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
      ...getProdMultiplexesMultiplexIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutProdMultiplexesMultiplexIdMutationKey() {
  return ['prod', '/prod/multiplexes/:multiplexId', 'PUT'] as const
}

export function getPutProdMultiplexesMultiplexIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProdMultiplexesMultiplexIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$put']>,
    ) {
      return parseResponse(client.prod.multiplexes[':multiplexId'].$put(args, options))
    },
  })
}

export function usePutProdMultiplexesMultiplexId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProdMultiplexesMultiplexIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProdMultiplexesMultiplexIdMutationKey() {
  return ['prod', '/prod/multiplexes/:multiplexId', 'DELETE'] as const
}

export function getDeleteProdMultiplexesMultiplexIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProdMultiplexesMultiplexIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$delete']>,
    ) {
      return parseResponse(client.prod.multiplexes[':multiplexId'].$delete(args, options))
    },
  })
}

export function useDeleteProdMultiplexesMultiplexId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProdMultiplexesMultiplexIdMutationOptions<
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

export function getProdMultiplexesMultiplexIdProgramsProgramNameQueryKey(
  args: InferRequestType<
    (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/multiplexes/:multiplexId/programs/:programName', keyArgs] as const
}

export function getProdMultiplexesMultiplexIdProgramsProgramNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdMultiplexesMultiplexIdProgramsProgramNameQueryKey>
  >({
    queryKey: getProdMultiplexesMultiplexIdProgramsProgramNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.multiplexes[':multiplexId'].programs[':programName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdMultiplexesMultiplexIdProgramsProgramName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdMultiplexesMultiplexIdProgramsProgramNameQueryKey>
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
      ...getProdMultiplexesMultiplexIdProgramsProgramNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdMultiplexesMultiplexIdProgramsProgramName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdMultiplexesMultiplexIdProgramsProgramNameQueryKey>
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
      ...getProdMultiplexesMultiplexIdProgramsProgramNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutProdMultiplexesMultiplexIdProgramsProgramNameMutationKey() {
  return ['prod', '/prod/multiplexes/:multiplexId/programs/:programName', 'PUT'] as const
}

export function getPutProdMultiplexesMultiplexIdProgramsProgramNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProdMultiplexesMultiplexIdProgramsProgramNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$put']
      >,
    ) {
      return parseResponse(
        client.prod.multiplexes[':multiplexId'].programs[':programName'].$put(args, options),
      )
    },
  })
}

export function usePutProdMultiplexesMultiplexIdProgramsProgramName<
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
                  (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$put']
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
  const mutationDefaults = getPutProdMultiplexesMultiplexIdProgramsProgramNameMutationOptions<
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

export function getDeleteProdMultiplexesMultiplexIdProgramsProgramNameMutationKey() {
  return ['prod', '/prod/multiplexes/:multiplexId/programs/:programName', 'DELETE'] as const
}

export function getDeleteProdMultiplexesMultiplexIdProgramsProgramNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProdMultiplexesMultiplexIdProgramsProgramNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$delete']
      >,
    ) {
      return parseResponse(
        client.prod.multiplexes[':multiplexId'].programs[':programName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProdMultiplexesMultiplexIdProgramsProgramName<
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
                  (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$delete']
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
  const mutationDefaults = getDeleteProdMultiplexesMultiplexIdProgramsProgramNameMutationOptions<
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

export function getProdReservationsReservationIdQueryKey(
  args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/reservations/:reservationId', keyArgs] as const
}

export function getProdReservationsReservationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdReservationsReservationIdQueryKey>
  >({
    queryKey: getProdReservationsReservationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.reservations[':reservationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdReservationsReservationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdReservationsReservationIdQueryKey>
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
      ...getProdReservationsReservationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdReservationsReservationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdReservationsReservationIdQueryKey>
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
      ...getProdReservationsReservationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutProdReservationsReservationIdMutationKey() {
  return ['prod', '/prod/reservations/:reservationId', 'PUT'] as const
}

export function getPutProdReservationsReservationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.reservations)[':reservationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProdReservationsReservationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$put']>,
    ) {
      return parseResponse(client.prod.reservations[':reservationId'].$put(args, options))
    },
  })
}

export function usePutProdReservationsReservationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.reservations)[':reservationId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProdReservationsReservationIdMutationOptions<
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

export function getDeleteProdReservationsReservationIdMutationKey() {
  return ['prod', '/prod/reservations/:reservationId', 'DELETE'] as const
}

export function getDeleteProdReservationsReservationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.reservations)[':reservationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProdReservationsReservationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$delete']>,
    ) {
      return parseResponse(client.prod.reservations[':reservationId'].$delete(args, options))
    },
  })
}

export function useDeleteProdReservationsReservationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.reservations)[':reservationId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProdReservationsReservationIdMutationOptions<
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

export function getDeleteProdTagsResourceArnTagKeysMutationKey() {
  return ['prod', '/prod/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function getDeleteProdTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.prod.tags)[':resource-arn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProdTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.tags)[':resource-arn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.prod.tags[':resource-arn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteProdTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.prod.tags)[':resource-arn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProdTagsResourceArnTagKeysMutationOptions<
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

export function getProdInputDevicesInputDeviceIdQueryKey(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputDevices/:inputDeviceId', keyArgs] as const
}

export function getProdInputDevicesInputDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdInputDevicesInputDeviceIdQueryKey>
  >({
    queryKey: getProdInputDevicesInputDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.inputDevices[':inputDeviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdInputDevicesInputDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputDevicesInputDeviceIdQueryKey>
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
      ...getProdInputDevicesInputDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdInputDevicesInputDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputDevicesInputDeviceIdQueryKey>
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
      ...getProdInputDevicesInputDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutProdInputDevicesInputDeviceIdMutationKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId', 'PUT'] as const
}

export function getPutProdInputDevicesInputDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProdInputDevicesInputDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$put']>,
    ) {
      return parseResponse(client.prod.inputDevices[':inputDeviceId'].$put(args, options))
    },
  })
}

export function usePutProdInputDevicesInputDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProdInputDevicesInputDeviceIdMutationOptions<
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

export function getProdInputDevicesInputDeviceIdThumbnailDataAcceptQueryKey(
  args: InferRequestType<
    (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputDevices/:inputDeviceId/thumbnailData#accept', keyArgs] as const
}

export function getProdInputDevicesInputDeviceIdThumbnailDataAcceptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdInputDevicesInputDeviceIdThumbnailDataAcceptQueryKey>
  >({
    queryKey: getProdInputDevicesInputDeviceIdThumbnailDataAcceptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.inputDevices[':inputDeviceId']['thumbnailData#accept'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdInputDevicesInputDeviceIdThumbnailDataAccept<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputDevicesInputDeviceIdThumbnailDataAcceptQueryKey>
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
      ...getProdInputDevicesInputDeviceIdThumbnailDataAcceptQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdInputDevicesInputDeviceIdThumbnailDataAccept<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputDevicesInputDeviceIdThumbnailDataAcceptQueryKey>
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
      ...getProdInputDevicesInputDeviceIdThumbnailDataAcceptQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProdOfferingsOfferingIdQueryKey(
  args: InferRequestType<(typeof client.prod.offerings)[':offeringId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/offerings/:offeringId', keyArgs] as const
}

export function getProdOfferingsOfferingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.offerings)[':offeringId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdOfferingsOfferingIdQueryKey>
  >({
    queryKey: getProdOfferingsOfferingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.offerings[':offeringId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdOfferingsOfferingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.offerings)[':offeringId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdOfferingsOfferingIdQueryKey>
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
      ...getProdOfferingsOfferingIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdOfferingsOfferingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod.offerings)[':offeringId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdOfferingsOfferingIdQueryKey>
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
      ...getProdOfferingsOfferingIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProdInputDeviceTransfersTransferTypeQueryKey(
  args: InferRequestType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputDeviceTransfers#transferType', keyArgs] as const
}

export function getProdInputDeviceTransfersTransferTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProdInputDeviceTransfersTransferTypeQueryKey>
  >({
    queryKey: getProdInputDeviceTransfersTransferTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod['inputDeviceTransfers#transferType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProdInputDeviceTransfersTransferType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputDeviceTransfersTransferTypeQueryKey>
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
      ...getProdInputDeviceTransfersTransferTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProdInputDeviceTransfersTransferType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputDeviceTransfersTransferTypeQueryKey>
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
      ...getProdInputDeviceTransfersTransferTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProdInputDevicesQueryKey(
  args: InferRequestType<typeof client.prod.inputDevices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputDevices', keyArgs] as const
}

export function getProdInputDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputDevices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.prod.inputDevices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputDevices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProdInputDevicesQueryKey>
  >({
    queryKey: getProdInputDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.inputDevices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProdInputDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputDevices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.inputDevices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputDevices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProdInputDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProdInputDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputDevices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.inputDevices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputDevices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdInputDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProdInputDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProdOfferingsQueryKey(
  args: InferRequestType<typeof client.prod.offerings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/offerings', keyArgs] as const
}

export function getProdOfferingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.offerings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.prod.offerings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.offerings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProdOfferingsQueryKey>
  >({
    queryKey: getProdOfferingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.offerings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProdOfferings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.offerings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.offerings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProdOfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProdOfferingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProdOfferings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.offerings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.offerings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProdOfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProdOfferingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProdReservationsQueryKey(
  args: InferRequestType<typeof client.prod.reservations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/reservations', keyArgs] as const
}

export function getProdReservationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.reservations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.prod.reservations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.reservations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProdReservationsQueryKey>
  >({
    queryKey: getProdReservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.prod.reservations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProdReservations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.reservations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.reservations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.reservations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdReservationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProdReservationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProdReservations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.reservations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.prod.reservations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prod.reservations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProdReservationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProdReservationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProdOfferingsOfferingIdPurchaseMutationKey() {
  return ['prod', '/prod/offerings/:offeringId/purchase', 'POST'] as const
}

export function getPostProdOfferingsOfferingIdPurchaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['purchase']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.offerings)[':offeringId']['purchase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdOfferingsOfferingIdPurchaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.offerings)[':offeringId']['purchase']['$post']>,
    ) {
      return parseResponse(client.prod.offerings[':offeringId'].purchase.$post(args, options))
    },
  })
}

export function usePostProdOfferingsOfferingIdPurchase<
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
                ReturnType<(typeof client.prod.offerings)[':offeringId']['purchase']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.offerings)[':offeringId']['purchase']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdOfferingsOfferingIdPurchaseMutationOptions<
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

export function getPostProdInputDevicesInputDeviceIdRebootMutationKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId/reboot', 'POST'] as const
}

export function getPostProdInputDevicesInputDeviceIdRebootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['reboot']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['reboot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdInputDevicesInputDeviceIdRebootMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prod.inputDevices)[':inputDeviceId']['reboot']['$post']
      >,
    ) {
      return parseResponse(client.prod.inputDevices[':inputDeviceId'].reboot.$post(args, options))
    },
  })
}

export function usePostProdInputDevicesInputDeviceIdReboot<
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
                ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['reboot']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['reboot']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdInputDevicesInputDeviceIdRebootMutationOptions<
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

export function getPostProdInputDevicesInputDeviceIdRejectMutationKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId/reject', 'POST'] as const
}

export function getPostProdInputDevicesInputDeviceIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['reject']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdInputDevicesInputDeviceIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prod.inputDevices)[':inputDeviceId']['reject']['$post']
      >,
    ) {
      return parseResponse(client.prod.inputDevices[':inputDeviceId'].reject.$post(args, options))
    },
  })
}

export function usePostProdInputDevicesInputDeviceIdReject<
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
                ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['reject']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['reject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdInputDevicesInputDeviceIdRejectMutationOptions<
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

export function getPostProdChannelsChannelIdStartMutationKey() {
  return ['prod', '/prod/channels/:channelId/start', 'POST'] as const
}

export function getPostProdChannelsChannelIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.channels)[':channelId']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdChannelsChannelIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.channels)[':channelId']['start']['$post']>,
    ) {
      return parseResponse(client.prod.channels[':channelId'].start.$post(args, options))
    },
  })
}

export function usePostProdChannelsChannelIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['start']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.channels)[':channelId']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdChannelsChannelIdStartMutationOptions<
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

export function getPostProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowMutationKey() {
  return [
    'prod',
    '/prod/inputDevices/:inputDeviceId/startInputDeviceMaintenanceWindow',
    'POST',
  ] as const
}

export function getPostProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.prod.inputDevices)[':inputDeviceId']['startInputDeviceMaintenanceWindow']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.prod.inputDevices)[':inputDeviceId']['startInputDeviceMaintenanceWindow']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prod.inputDevices)[':inputDeviceId']['startInputDeviceMaintenanceWindow']['$post']
      >,
    ) {
      return parseResponse(
        client.prod.inputDevices[':inputDeviceId'].startInputDeviceMaintenanceWindow.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindow<
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
                  (typeof client.prod.inputDevices)[':inputDeviceId']['startInputDeviceMaintenanceWindow']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.prod.inputDevices)[':inputDeviceId']['startInputDeviceMaintenanceWindow']['$post']
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
    getPostProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowMutationOptions<
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

export function getPostProdMultiplexesMultiplexIdStartMutationKey() {
  return ['prod', '/prod/multiplexes/:multiplexId/start', 'POST'] as const
}

export function getPostProdMultiplexesMultiplexIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdMultiplexesMultiplexIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['start']['$post']>,
    ) {
      return parseResponse(client.prod.multiplexes[':multiplexId'].start.$post(args, options))
    },
  })
}

export function usePostProdMultiplexesMultiplexIdStart<
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
                ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['start']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdMultiplexesMultiplexIdStartMutationOptions<
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

export function getPostProdChannelsChannelIdStopMutationKey() {
  return ['prod', '/prod/channels/:channelId/stop', 'POST'] as const
}

export function getPostProdChannelsChannelIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.channels)[':channelId']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdChannelsChannelIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.channels)[':channelId']['stop']['$post']>,
    ) {
      return parseResponse(client.prod.channels[':channelId'].stop.$post(args, options))
    },
  })
}

export function usePostProdChannelsChannelIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['stop']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.channels)[':channelId']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdChannelsChannelIdStopMutationOptions<TError, TOnMutateResult>(
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

export function getPostProdMultiplexesMultiplexIdStopMutationKey() {
  return ['prod', '/prod/multiplexes/:multiplexId/stop', 'POST'] as const
}

export function getPostProdMultiplexesMultiplexIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdMultiplexesMultiplexIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['stop']['$post']>,
    ) {
      return parseResponse(client.prod.multiplexes[':multiplexId'].stop.$post(args, options))
    },
  })
}

export function usePostProdMultiplexesMultiplexIdStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['stop']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdMultiplexesMultiplexIdStopMutationOptions<
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

export function getPostProdInputDevicesInputDeviceIdTransferMutationKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId/transfer', 'POST'] as const
}

export function getPostProdInputDevicesInputDeviceIdTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['transfer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProdInputDevicesInputDeviceIdTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prod.inputDevices)[':inputDeviceId']['transfer']['$post']
      >,
    ) {
      return parseResponse(client.prod.inputDevices[':inputDeviceId'].transfer.$post(args, options))
    },
  })
}

export function usePostProdInputDevicesInputDeviceIdTransfer<
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
                ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['transfer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['transfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProdInputDevicesInputDeviceIdTransferMutationOptions<
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

export function getPutProdChannelsChannelIdChannelClassMutationKey() {
  return ['prod', '/prod/channels/:channelId/channelClass', 'PUT'] as const
}

export function getPutProdChannelsChannelIdChannelClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['channelClass']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.prod.channels)[':channelId']['channelClass']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProdChannelsChannelIdChannelClassMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.prod.channels)[':channelId']['channelClass']['$put']>,
    ) {
      return parseResponse(client.prod.channels[':channelId'].channelClass.$put(args, options))
    },
  })
}

export function usePutProdChannelsChannelIdChannelClass<
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
                ReturnType<(typeof client.prod.channels)[':channelId']['channelClass']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.prod.channels)[':channelId']['channelClass']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProdChannelsChannelIdChannelClassMutationOptions<
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
