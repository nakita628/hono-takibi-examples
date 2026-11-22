import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getProdKey() {
  return ['prod'] as const
}

export function getPostProdInputDevicesInputDeviceIdAcceptKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId/accept', 'POST'] as const
}

export function usePostProdInputDevicesInputDeviceIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdInputDevicesInputDeviceIdAcceptKey()
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
            (typeof client.prod.inputDevices)[':inputDeviceId']['accept']['$post']
          >
        },
      ) =>
        parseResponse(client.prod.inputDevices[':inputDeviceId'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdBatchDeleteKey() {
  return ['prod', '/prod/batch/delete', 'POST'] as const
}

export function usePostProdBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.batch.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.prod.batch.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.prod.batch.delete.$post> }) =>
        parseResponse(client.prod.batch.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdBatchStartKey() {
  return ['prod', '/prod/batch/start', 'POST'] as const
}

export function usePostProdBatchStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.batch.start.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.prod.batch.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdBatchStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.prod.batch.start.$post> }) =>
        parseResponse(client.prod.batch.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdBatchStopKey() {
  return ['prod', '/prod/batch/stop', 'POST'] as const
}

export function usePostProdBatchStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.batch.stop.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.prod.batch.stop.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdBatchStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.prod.batch.stop.$post> }) =>
        parseResponse(client.prod.batch.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdChannelsChannelIdScheduleKey(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/channels/:channelId/schedule', keyArgs] as const
}

export function useGetProdChannelsChannelIdSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>>
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
        ? getGetProdChannelsChannelIdScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.prod.channels[':channelId'].schedule.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdChannelsChannelIdSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>>
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
        ? getGetProdChannelsChannelIdScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.prod.channels[':channelId'].schedule.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProdChannelsChannelIdScheduleKey() {
  return ['prod', '/prod/channels/:channelId/schedule', 'PUT'] as const
}

export function usePutProdChannelsChannelIdSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProdChannelsChannelIdScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$put']>
        },
      ) => parseResponse(client.prod.channels[':channelId'].schedule.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProdChannelsChannelIdScheduleKey() {
  return ['prod', '/prod/channels/:channelId/schedule', 'DELETE'] as const
}

export function useDeleteProdChannelsChannelIdSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['schedule']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProdChannelsChannelIdScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$delete']>
        },
      ) => parseResponse(client.prod.channels[':channelId'].schedule.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdInputDevicesInputDeviceIdCancelKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId/cancel', 'POST'] as const
}

export function usePostProdInputDevicesInputDeviceIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdInputDevicesInputDeviceIdCancelKey()
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
            (typeof client.prod.inputDevices)[':inputDeviceId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(client.prod.inputDevices[':inputDeviceId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdClaimDeviceKey() {
  return ['prod', '/prod/claimDevice', 'POST'] as const
}

export function usePostProdClaimDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.claimDevice.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.prod.claimDevice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdClaimDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.prod.claimDevice.$post> }) =>
        parseResponse(client.prod.claimDevice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdChannelsKey(args: InferRequestType<typeof client.prod.channels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/channels', keyArgs] as const
}

export function useGetProdChannels<TError = unknown>(
  args: InferRequestType<typeof client.prod.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProdChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdChannels<TError = unknown>(
  args: InferRequestType<typeof client.prod.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProdChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProdChannelsKey() {
  return ['prod', '/prod/channels', 'POST'] as const
}

export function usePostProdChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.channels.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.prod.channels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.prod.channels.$post> }) =>
        parseResponse(client.prod.channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdInputsKey(args: InferRequestType<typeof client.prod.inputs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputs', keyArgs] as const
}

export function useGetProdInputs<TError = unknown>(
  args: InferRequestType<typeof client.prod.inputs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProdInputsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.inputs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdInputs<TError = unknown>(
  args: InferRequestType<typeof client.prod.inputs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProdInputsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.inputs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProdInputsKey() {
  return ['prod', '/prod/inputs', 'POST'] as const
}

export function usePostProdInputs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.prod.inputs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdInputsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.prod.inputs.$post> }) =>
        parseResponse(client.prod.inputs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdInputSecurityGroupsKey(
  args: InferRequestType<typeof client.prod.inputSecurityGroups.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputSecurityGroups', keyArgs] as const
}

export function useGetProdInputSecurityGroups<TError = unknown>(
  args: InferRequestType<typeof client.prod.inputSecurityGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$get>>>
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
        ? getGetProdInputSecurityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.inputSecurityGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdInputSecurityGroups<TError = unknown>(
  args: InferRequestType<typeof client.prod.inputSecurityGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$get>>>
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
        ? getGetProdInputSecurityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.inputSecurityGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProdInputSecurityGroupsKey() {
  return ['prod', '/prod/inputSecurityGroups', 'POST'] as const
}

export function usePostProdInputSecurityGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputSecurityGroups.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.prod.inputSecurityGroups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdInputSecurityGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.prod.inputSecurityGroups.$post> },
      ) => parseResponse(client.prod.inputSecurityGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdMultiplexesKey(
  args: InferRequestType<typeof client.prod.multiplexes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/multiplexes', keyArgs] as const
}

export function useGetProdMultiplexes<TError = unknown>(
  args: InferRequestType<typeof client.prod.multiplexes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$get>>>>
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
        ? getGetProdMultiplexesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.multiplexes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdMultiplexes<TError = unknown>(
  args: InferRequestType<typeof client.prod.multiplexes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$get>>>>
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
        ? getGetProdMultiplexesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.multiplexes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProdMultiplexesKey() {
  return ['prod', '/prod/multiplexes', 'POST'] as const
}

export function usePostProdMultiplexes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.multiplexes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.prod.multiplexes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdMultiplexesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.prod.multiplexes.$post> }) =>
        parseResponse(client.prod.multiplexes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdMultiplexesMultiplexIdProgramsKey(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/multiplexes/:multiplexId/programs', keyArgs] as const
}

export function useGetProdMultiplexesMultiplexIdPrograms<TError = unknown>(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>
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
        ? getGetProdMultiplexesMultiplexIdProgramsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.prod.multiplexes[':multiplexId'].programs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdMultiplexesMultiplexIdPrograms<TError = unknown>(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>
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
        ? getGetProdMultiplexesMultiplexIdProgramsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.prod.multiplexes[':multiplexId'].programs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProdMultiplexesMultiplexIdProgramsKey() {
  return ['prod', '/prod/multiplexes/:multiplexId/programs', 'POST'] as const
}

export function usePostProdMultiplexesMultiplexIdPrograms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdMultiplexesMultiplexIdProgramsKey()
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
            (typeof client.prod.multiplexes)[':multiplexId']['programs']['$post']
          >
        },
      ) =>
        parseResponse(client.prod.multiplexes[':multiplexId'].programs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdInputsInputIdPartnersKey() {
  return ['prod', '/prod/inputs/:inputId/partners', 'POST'] as const
}

export function usePostProdInputsInputIdPartners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['partners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.inputs)[':inputId']['partners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdInputsInputIdPartnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.prod.inputs)[':inputId']['partners']['$post']> },
      ) => parseResponse(client.prod.inputs[':inputId'].partners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdTagsResourceArnKey(
  args: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/tags/:resource-arn', keyArgs] as const
}

export function useGetProdTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$get']>>
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
        ? getGetProdTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$get']>>
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
        ? getGetProdTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProdTagsResourceArnKey() {
  return ['prod', '/prod/tags/:resource-arn', 'POST'] as const
}

export function usePostProdTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.prod.tags)[':resource-arn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$post']> },
      ) => parseResponse(client.prod.tags[':resource-arn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdChannelsChannelIdKey(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/channels/:channelId', keyArgs] as const
}

export function useGetProdChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$get']>>
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
        ? getGetProdChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.channels[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$get']>>
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
        ? getGetProdChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.channels[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProdChannelsChannelIdKey() {
  return ['prod', '/prod/channels/:channelId', 'PUT'] as const
}

export function usePutProdChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.channels)[':channelId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProdChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.prod.channels)[':channelId']['$put']> },
      ) => parseResponse(client.prod.channels[':channelId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProdChannelsChannelIdKey() {
  return ['prod', '/prod/channels/:channelId', 'DELETE'] as const
}

export function useDeleteProdChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.channels)[':channelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProdChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.prod.channels)[':channelId']['$delete']> },
      ) => parseResponse(client.prod.channels[':channelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdInputsInputIdKey(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputs/:inputId', keyArgs] as const
}

export function useGetProdInputsInputId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$get']>>>
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
        ? getGetProdInputsInputIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.inputs[':inputId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdInputsInputId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$get']>>>
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
        ? getGetProdInputsInputIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.inputs[':inputId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProdInputsInputIdKey() {
  return ['prod', '/prod/inputs/:inputId', 'PUT'] as const
}

export function usePutProdInputsInputId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.inputs)[':inputId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProdInputsInputIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.prod.inputs)[':inputId']['$put']> },
      ) => parseResponse(client.prod.inputs[':inputId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProdInputsInputIdKey() {
  return ['prod', '/prod/inputs/:inputId', 'DELETE'] as const
}

export function useDeleteProdInputsInputId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.inputs)[':inputId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.inputs)[':inputId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProdInputsInputIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.prod.inputs)[':inputId']['$delete']> },
      ) => parseResponse(client.prod.inputs[':inputId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdInputSecurityGroupsInputSecurityGroupIdKey(
  args: InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputSecurityGroups/:inputSecurityGroupId', keyArgs] as const
}

export function useGetProdInputSecurityGroupsInputSecurityGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>
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
        ? getGetProdInputSecurityGroupsInputSecurityGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.prod.inputSecurityGroups[':inputSecurityGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdInputSecurityGroupsInputSecurityGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>
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
        ? getGetProdInputSecurityGroupsInputSecurityGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.prod.inputSecurityGroups[':inputSecurityGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProdInputSecurityGroupsInputSecurityGroupIdKey() {
  return ['prod', '/prod/inputSecurityGroups/:inputSecurityGroupId', 'PUT'] as const
}

export function usePutProdInputSecurityGroupsInputSecurityGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProdInputSecurityGroupsInputSecurityGroupIdKey()
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
            (typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.prod.inputSecurityGroups[':inputSecurityGroupId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProdInputSecurityGroupsInputSecurityGroupIdKey() {
  return ['prod', '/prod/inputSecurityGroups/:inputSecurityGroupId', 'DELETE'] as const
}

export function useDeleteProdInputSecurityGroupsInputSecurityGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProdInputSecurityGroupsInputSecurityGroupIdKey()
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
            (typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.prod.inputSecurityGroups[':inputSecurityGroupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProdMultiplexesMultiplexIdKey(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/multiplexes/:multiplexId', keyArgs] as const
}

export function useGetProdMultiplexesMultiplexId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>>
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
        ? getGetProdMultiplexesMultiplexIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.multiplexes[':multiplexId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdMultiplexesMultiplexId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>>
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
        ? getGetProdMultiplexesMultiplexIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.multiplexes[':multiplexId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProdMultiplexesMultiplexIdKey() {
  return ['prod', '/prod/multiplexes/:multiplexId', 'PUT'] as const
}

export function usePutProdMultiplexesMultiplexId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProdMultiplexesMultiplexIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$put']> },
      ) => parseResponse(client.prod.multiplexes[':multiplexId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProdMultiplexesMultiplexIdKey() {
  return ['prod', '/prod/multiplexes/:multiplexId', 'DELETE'] as const
}

export function useDeleteProdMultiplexesMultiplexId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProdMultiplexesMultiplexIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$delete']> },
      ) => parseResponse(client.prod.multiplexes[':multiplexId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdMultiplexesMultiplexIdProgramsProgramNameKey(
  args: InferRequestType<
    (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/multiplexes/:multiplexId/programs/:programName', keyArgs] as const
}

export function useGetProdMultiplexesMultiplexIdProgramsProgramName<TError = unknown>(
  args: InferRequestType<
    (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProdMultiplexesMultiplexIdProgramsProgramNameKey(args)
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
                (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
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
          client.prod.multiplexes[':multiplexId'].programs[':programName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdMultiplexesMultiplexIdProgramsProgramName<TError = unknown>(
  args: InferRequestType<
    (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProdMultiplexesMultiplexIdProgramsProgramNameKey(args)
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
                (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
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
          client.prod.multiplexes[':multiplexId'].programs[':programName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProdMultiplexesMultiplexIdProgramsProgramNameKey() {
  return ['prod', '/prod/multiplexes/:multiplexId/programs/:programName', 'PUT'] as const
}

export function usePutProdMultiplexesMultiplexIdProgramsProgramName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProdMultiplexesMultiplexIdProgramsProgramNameKey()
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
            (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.prod.multiplexes[':multiplexId'].programs[':programName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProdMultiplexesMultiplexIdProgramsProgramNameKey() {
  return ['prod', '/prod/multiplexes/:multiplexId/programs/:programName', 'DELETE'] as const
}

export function useDeleteProdMultiplexesMultiplexIdProgramsProgramName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProdMultiplexesMultiplexIdProgramsProgramNameKey()
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
            (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.prod.multiplexes[':multiplexId'].programs[':programName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProdReservationsReservationIdKey(
  args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/reservations/:reservationId', keyArgs] as const
}

export function useGetProdReservationsReservationId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$get']>>
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
        ? getGetProdReservationsReservationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.prod.reservations[':reservationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdReservationsReservationId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$get']>>
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
        ? getGetProdReservationsReservationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.prod.reservations[':reservationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProdReservationsReservationIdKey() {
  return ['prod', '/prod/reservations/:reservationId', 'PUT'] as const
}

export function usePutProdReservationsReservationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.reservations)[':reservationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProdReservationsReservationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$put']> },
      ) => parseResponse(client.prod.reservations[':reservationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProdReservationsReservationIdKey() {
  return ['prod', '/prod/reservations/:reservationId', 'DELETE'] as const
}

export function useDeleteProdReservationsReservationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.reservations)[':reservationId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.reservations)[':reservationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProdReservationsReservationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$delete']>
        },
      ) => parseResponse(client.prod.reservations[':reservationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProdTagsResourceArnTagKeysKey() {
  return ['prod', '/prod/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function useDeleteProdTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.prod.tags)[':resource-arn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProdTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.prod.tags)[':resource-arn#tagKeys']['$delete']> },
      ) => parseResponse(client.prod.tags[':resource-arn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdInputDevicesInputDeviceIdKey(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputDevices/:inputDeviceId', keyArgs] as const
}

export function useGetProdInputDevicesInputDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>>
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
        ? getGetProdInputDevicesInputDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.prod.inputDevices[':inputDeviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdInputDevicesInputDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>>
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
        ? getGetProdInputDevicesInputDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.prod.inputDevices[':inputDeviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProdInputDevicesInputDeviceIdKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId', 'PUT'] as const
}

export function usePutProdInputDevicesInputDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.inputDevices)[':inputDeviceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProdInputDevicesInputDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$put']> },
      ) => parseResponse(client.prod.inputDevices[':inputDeviceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProdInputDevicesInputDeviceIdThumbnailDataAcceptKey(
  args: InferRequestType<
    (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputDevices/:inputDeviceId/thumbnailData#accept', keyArgs] as const
}

export function useGetProdInputDevicesInputDeviceIdThumbnailDataAccept<TError = unknown>(
  args: InferRequestType<
    (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProdInputDevicesInputDeviceIdThumbnailDataAcceptKey(args)
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
                (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
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
          client.prod.inputDevices[':inputDeviceId']['thumbnailData#accept'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdInputDevicesInputDeviceIdThumbnailDataAccept<TError = unknown>(
  args: InferRequestType<
    (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProdInputDevicesInputDeviceIdThumbnailDataAcceptKey(args)
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
                (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
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
          client.prod.inputDevices[':inputDeviceId']['thumbnailData#accept'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProdOfferingsOfferingIdKey(
  args: InferRequestType<(typeof client.prod.offerings)[':offeringId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/offerings/:offeringId', keyArgs] as const
}

export function useGetProdOfferingsOfferingId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.offerings)[':offeringId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['$get']>>
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
        ? getGetProdOfferingsOfferingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.offerings[':offeringId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdOfferingsOfferingId<TError = unknown>(
  args: InferRequestType<(typeof client.prod.offerings)[':offeringId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['$get']>>
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
        ? getGetProdOfferingsOfferingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.offerings[':offeringId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProdInputDeviceTransfersTransferTypeKey(
  args: InferRequestType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputDeviceTransfers#transferType', keyArgs] as const
}

export function useGetProdInputDeviceTransfersTransferType<TError = unknown>(
  args: InferRequestType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>>
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
        ? getGetProdInputDeviceTransfersTransferTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.prod['inputDeviceTransfers#transferType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdInputDeviceTransfersTransferType<TError = unknown>(
  args: InferRequestType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>>
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
        ? getGetProdInputDeviceTransfersTransferTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.prod['inputDeviceTransfers#transferType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProdInputDevicesKey(
  args: InferRequestType<typeof client.prod.inputDevices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/inputDevices', keyArgs] as const
}

export function useGetProdInputDevices<TError = unknown>(
  args: InferRequestType<typeof client.prod.inputDevices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputDevices.$get>>>>
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
        ? getGetProdInputDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputDevices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.inputDevices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdInputDevices<TError = unknown>(
  args: InferRequestType<typeof client.prod.inputDevices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputDevices.$get>>>>
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
        ? getGetProdInputDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.inputDevices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.inputDevices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProdOfferingsKey(args: InferRequestType<typeof client.prod.offerings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/offerings', keyArgs] as const
}

export function useGetProdOfferings<TError = unknown>(
  args: InferRequestType<typeof client.prod.offerings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.offerings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProdOfferingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.offerings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.offerings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdOfferings<TError = unknown>(
  args: InferRequestType<typeof client.prod.offerings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.offerings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProdOfferingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.offerings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.offerings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProdReservationsKey(
  args: InferRequestType<typeof client.prod.reservations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['prod', '/prod/reservations', keyArgs] as const
}

export function useGetProdReservations<TError = unknown>(
  args: InferRequestType<typeof client.prod.reservations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.reservations.$get>>>>
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
        ? getGetProdReservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.reservations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.reservations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProdReservations<TError = unknown>(
  args: InferRequestType<typeof client.prod.reservations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.reservations.$get>>>>
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
        ? getGetProdReservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prod.reservations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.prod.reservations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProdOfferingsOfferingIdPurchaseKey() {
  return ['prod', '/prod/offerings/:offeringId/purchase', 'POST'] as const
}

export function usePostProdOfferingsOfferingIdPurchase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.offerings)[':offeringId']['purchase']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.offerings)[':offeringId']['purchase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdOfferingsOfferingIdPurchaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.prod.offerings)[':offeringId']['purchase']['$post']>
        },
      ) => parseResponse(client.prod.offerings[':offeringId'].purchase.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdInputDevicesInputDeviceIdRebootKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId/reboot', 'POST'] as const
}

export function usePostProdInputDevicesInputDeviceIdReboot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['reboot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdInputDevicesInputDeviceIdRebootKey()
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
            (typeof client.prod.inputDevices)[':inputDeviceId']['reboot']['$post']
          >
        },
      ) =>
        parseResponse(client.prod.inputDevices[':inputDeviceId'].reboot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdInputDevicesInputDeviceIdRejectKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId/reject', 'POST'] as const
}

export function usePostProdInputDevicesInputDeviceIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdInputDevicesInputDeviceIdRejectKey()
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
            (typeof client.prod.inputDevices)[':inputDeviceId']['reject']['$post']
          >
        },
      ) =>
        parseResponse(client.prod.inputDevices[':inputDeviceId'].reject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdChannelsChannelIdStartKey() {
  return ['prod', '/prod/channels/:channelId/start', 'POST'] as const
}

export function usePostProdChannelsChannelIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.channels)[':channelId']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdChannelsChannelIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.prod.channels)[':channelId']['start']['$post']> },
      ) => parseResponse(client.prod.channels[':channelId'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowKey() {
  return [
    'prod',
    '/prod/inputDevices/:inputDeviceId/startInputDeviceMaintenanceWindow',
    'POST',
  ] as const
}

export function usePostProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindow<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.prod.inputDevices)[':inputDeviceId']['startInputDeviceMaintenanceWindow']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowKey()
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
            (typeof client.prod.inputDevices)[':inputDeviceId']['startInputDeviceMaintenanceWindow']['$post']
          >
        },
      ) =>
        parseResponse(
          client.prod.inputDevices[':inputDeviceId'].startInputDeviceMaintenanceWindow.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProdMultiplexesMultiplexIdStartKey() {
  return ['prod', '/prod/multiplexes/:multiplexId/start', 'POST'] as const
}

export function usePostProdMultiplexesMultiplexIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdMultiplexesMultiplexIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['start']['$post']>
        },
      ) => parseResponse(client.prod.multiplexes[':multiplexId'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdChannelsChannelIdStopKey() {
  return ['prod', '/prod/channels/:channelId/stop', 'POST'] as const
}

export function usePostProdChannelsChannelIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.channels)[':channelId']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdChannelsChannelIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.prod.channels)[':channelId']['stop']['$post']> },
      ) => parseResponse(client.prod.channels[':channelId'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdMultiplexesMultiplexIdStopKey() {
  return ['prod', '/prod/multiplexes/:multiplexId/stop', 'POST'] as const
}

export function usePostProdMultiplexesMultiplexIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.multiplexes)[':multiplexId']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdMultiplexesMultiplexIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['stop']['$post']>
        },
      ) => parseResponse(client.prod.multiplexes[':multiplexId'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProdInputDevicesInputDeviceIdTransferKey() {
  return ['prod', '/prod/inputDevices/:inputDeviceId/transfer', 'POST'] as const
}

export function usePostProdInputDevicesInputDeviceIdTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProdInputDevicesInputDeviceIdTransferKey()
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
            (typeof client.prod.inputDevices)[':inputDeviceId']['transfer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.prod.inputDevices[':inputDeviceId'].transfer.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutProdChannelsChannelIdChannelClassKey() {
  return ['prod', '/prod/channels/:channelId/channelClass', 'PUT'] as const
}

export function usePutProdChannelsChannelIdChannelClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.prod.channels)[':channelId']['channelClass']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prod.channels)[':channelId']['channelClass']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProdChannelsChannelIdChannelClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.prod.channels)[':channelId']['channelClass']['$put']>
        },
      ) => parseResponse(client.prod.channels[':channelId'].channelClass.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
