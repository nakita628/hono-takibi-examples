import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChannelsKey() {
  return ['channels'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getPushKey() {
  return ['push'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getTimeKey() {
  return ['time'] as const
}

export function getGetChannelsChannelIdMessagesKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channel_id/messages', keyArgs] as const
}

export function useGetChannelsChannelIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
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
        ? getGetChannelsChannelIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
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
        ? getGetChannelsChannelIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelIdMessagesKey() {
  return ['channels', '/channels/:channel_id/messages', 'POST'] as const
}

export function usePostChannelsChannelIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']> },
      ) => parseResponse(client.channels[':channel_id'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdPresenceKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channel_id/presence', keyArgs] as const
}

export function useGetChannelsChannelIdPresence<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
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
        ? getGetChannelsChannelIdPresenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].presence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdPresence<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
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
        ? getGetChannelsChannelIdPresenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].presence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelIdPresenceHistoryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channel_id/presence/history', keyArgs] as const
}

export function useGetChannelsChannelIdPresenceHistory<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
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
        ? getGetChannelsChannelIdPresenceHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].presence.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdPresenceHistory<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
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
        ? getGetChannelsChannelIdPresenceHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].presence.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelIdKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channel_id', keyArgs] as const
}

export function useGetChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
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
        ? getGetChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
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
        ? getGetChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].$get(args, clientOptions)),
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

export function getGetPushDeviceRegistrationsKey(
  args: InferRequestType<typeof client.push.deviceRegistrations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['push', '/push/deviceRegistrations', keyArgs] as const
}

export function useGetPushDeviceRegistrations<TError = unknown>(
  args: InferRequestType<typeof client.push.deviceRegistrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
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
        ? getGetPushDeviceRegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.push.deviceRegistrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPushDeviceRegistrations<TError = unknown>(
  args: InferRequestType<typeof client.push.deviceRegistrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
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
        ? getGetPushDeviceRegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.push.deviceRegistrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPushDeviceRegistrationsKey() {
  return ['push', '/push/deviceRegistrations', 'POST'] as const
}

export function usePostPushDeviceRegistrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.push.deviceRegistrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPushDeviceRegistrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.push.deviceRegistrations.$post> },
      ) => parseResponse(client.push.deviceRegistrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePushDeviceRegistrationsKey() {
  return ['push', '/push/deviceRegistrations', 'DELETE'] as const
}

export function useDeletePushDeviceRegistrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.push.deviceRegistrations.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePushDeviceRegistrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.push.deviceRegistrations.$delete> },
      ) => parseResponse(client.push.deviceRegistrations.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPushDeviceRegistrationsDeviceIdKey(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['push', '/push/deviceRegistrations/:device_id', keyArgs] as const
}

export function useGetPushDeviceRegistrationsDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
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
        ? getGetPushDeviceRegistrationsDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.push.deviceRegistrations[':device_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPushDeviceRegistrationsDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
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
        ? getGetPushDeviceRegistrationsDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.push.deviceRegistrations[':device_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPushDeviceRegistrationsDeviceIdKey() {
  return ['push', '/push/deviceRegistrations/:device_id', 'PUT'] as const
}

export function usePutPushDeviceRegistrationsDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPushDeviceRegistrationsDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$put']>
        },
      ) => parseResponse(client.push.deviceRegistrations[':device_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePushDeviceRegistrationsDeviceIdKey() {
  return ['push', '/push/deviceRegistrations/:device_id', 'DELETE'] as const
}

export function useDeletePushDeviceRegistrationsDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePushDeviceRegistrationsDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>
        },
      ) => parseResponse(client.push.deviceRegistrations[':device_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPushDeviceRegistrationsDeviceIdKey() {
  return ['push', '/push/deviceRegistrations/:device_id', 'PATCH'] as const
}

export function usePatchPushDeviceRegistrationsDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPushDeviceRegistrationsDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>
        },
      ) => parseResponse(client.push.deviceRegistrations[':device_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPushDeviceRegistrationsDeviceIdResetUpdateTokenKey(
  args: InferRequestType<
    (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['push', '/push/deviceRegistrations/:device_id/resetUpdateToken', keyArgs] as const
}

export function useGetPushDeviceRegistrationsDeviceIdResetUpdateToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
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
        ? getGetPushDeviceRegistrationsDeviceIdResetUpdateTokenKey(args)
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
                (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
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
          client.push.deviceRegistrations[':device_id'].resetUpdateToken.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPushDeviceRegistrationsDeviceIdResetUpdateToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
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
        ? getGetPushDeviceRegistrationsDeviceIdResetUpdateTokenKey(args)
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
                (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
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
          client.push.deviceRegistrations[':device_id'].resetUpdateToken.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPushChannelSubscriptionsKey(
  args: InferRequestType<typeof client.push.channelSubscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['push', '/push/channelSubscriptions', keyArgs] as const
}

export function useGetPushChannelSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.push.channelSubscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
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
        ? getGetPushChannelSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.push.channelSubscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPushChannelSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.push.channelSubscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
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
        ? getGetPushChannelSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.push.channelSubscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPushChannelSubscriptionsKey() {
  return ['push', '/push/channelSubscriptions', 'POST'] as const
}

export function usePostPushChannelSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.push.channelSubscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPushChannelSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.push.channelSubscriptions.$post> },
      ) => parseResponse(client.push.channelSubscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePushChannelSubscriptionsKey() {
  return ['push', '/push/channelSubscriptions', 'DELETE'] as const
}

export function useDeletePushChannelSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.push.channelSubscriptions.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePushChannelSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.push.channelSubscriptions.$delete> },
      ) => parseResponse(client.push.channelSubscriptions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPushChannelsKey(args: InferRequestType<typeof client.push.channels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['push', '/push/channels', keyArgs] as const
}

export function useGetPushChannels<TError = unknown>(
  args: InferRequestType<typeof client.push.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPushChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.push.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPushChannels<TError = unknown>(
  args: InferRequestType<typeof client.push.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPushChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.push.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPushPublishKey() {
  return ['push', '/push/publish', 'POST'] as const
}

export function usePostPushPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.publish.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.push.publish.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPushPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.push.publish.$post> }) =>
        parseResponse(client.push.publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKeysKeyNameRequestTokenKey() {
  return ['keys', '/keys/:keyName/requestToken', 'POST'] as const
}

export function usePostKeysKeyNameRequestToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':keyName']['requestToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':keyName']['requestToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeysKeyNameRequestTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.keys)[':keyName']['requestToken']['$post']> },
      ) => parseResponse(client.keys[':keyName'].requestToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatsKey(args: InferRequestType<typeof client.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['stats', '/stats', keyArgs] as const
}

export function useGetStats<TError = unknown>(
  args: InferRequestType<typeof client.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stats.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStats<TError = unknown>(
  args: InferRequestType<typeof client.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stats.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTimeKey(args: InferRequestType<typeof client.time.$get>) {
  const { header: _, ...keyArgs } = args
  return ['time', '/time', keyArgs] as const
}

export function useGetTime<TError = unknown>(
  args: InferRequestType<typeof client.time.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.time.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTime<TError = unknown>(
  args: InferRequestType<typeof client.time.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.time.$get(args, clientOptions)), restSwrOptions),
  }
}
