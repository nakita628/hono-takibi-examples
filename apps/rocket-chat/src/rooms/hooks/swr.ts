import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiV1ChannelsCreateKey() {
  return ['api', '/api/v1/channels.create', 'POST'] as const
}

export function usePostApiV1ChannelsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.create']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.create']['$post']> },
      ) => parseResponse(client.api.v1['channels.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsAddAllKey() {
  return ['api', '/api/v1/channels.addAll', 'POST'] as const
}

export function usePostApiV1ChannelsAddAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addAll']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.addAll']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsAddAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.addAll']['$post']> },
      ) => parseResponse(client.api.v1['channels.addAll'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsAddLeaderKey() {
  return ['api', '/api/v1/channels.addLeader', 'POST'] as const
}

export function usePostApiV1ChannelsAddLeader<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addLeader']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.addLeader']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsAddLeaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.addLeader']['$post']> },
      ) => parseResponse(client.api.v1['channels.addLeader'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsAddModeratorKey() {
  return ['api', '/api/v1/channels.addModerator', 'POST'] as const
}

export function usePostApiV1ChannelsAddModerator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addModerator']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.addModerator']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsAddModeratorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['channels.addModerator']['$post']> },
      ) => parseResponse(client.api.v1['channels.addModerator'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsAddOwnerKey() {
  return ['api', '/api/v1/channels.addOwner', 'POST'] as const
}

export function usePostApiV1ChannelsAddOwner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addOwner']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.addOwner']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsAddOwnerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.addOwner']['$post']> },
      ) => parseResponse(client.api.v1['channels.addOwner'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ChannelsAnonymousreadKey(
  args: InferRequestType<(typeof client.api.v1)['channels.anonymousread']['$get']>,
) {
  return ['api', '/api/v1/channels.anonymousread', args] as const
}

export function useGetApiV1ChannelsAnonymousread<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.anonymousread']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
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
        ? getGetApiV1ChannelsAnonymousreadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.anonymousread'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsAnonymousread<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.anonymousread']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
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
        ? getGetApiV1ChannelsAnonymousreadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.anonymousread'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ChannelsArchiveKey() {
  return ['api', '/api/v1/channels.archive', 'POST'] as const
}

export function usePostApiV1ChannelsArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.archive']['$post']> },
      ) => parseResponse(client.api.v1['channels.archive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsCloseKey() {
  return ['api', '/api/v1/channels.close', 'POST'] as const
}

export function usePostApiV1ChannelsClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.close']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.close']['$post']> },
      ) => parseResponse(client.api.v1['channels.close'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ChannelsCountersKey(
  args: InferRequestType<(typeof client.api.v1)['channels.counters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.counters', keyArgs] as const
}

export function useGetApiV1ChannelsCounters<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.counters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>
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
        ? getGetApiV1ChannelsCountersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.counters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsCounters<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.counters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>
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
        ? getGetApiV1ChannelsCountersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.counters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ChannelsDeleteKey() {
  return ['api', '/api/v1/channels.delete', 'POST'] as const
}

export function usePostApiV1ChannelsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.delete']['$post']> },
      ) => parseResponse(client.api.v1['channels.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ChannelsFilesKey(
  args: InferRequestType<(typeof client.api.v1)['channels.files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.files', keyArgs] as const
}

export function useGetApiV1ChannelsFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>
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
        ? getGetApiV1ChannelsFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.files'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>
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
        ? getGetApiV1ChannelsFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.files'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChannelsHistoryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.history', keyArgs] as const
}

export function useGetApiV1ChannelsHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>
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
        ? getGetApiV1ChannelsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>
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
        ? getGetApiV1ChannelsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChannelsInfoKey(
  args: InferRequestType<(typeof client.api.v1)['channels.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.info', keyArgs] as const
}

export function useGetApiV1ChannelsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>>
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
        ? getGetApiV1ChannelsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>>
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
        ? getGetApiV1ChannelsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ChannelsInviteKey() {
  return ['api', '/api/v1/channels.invite', 'POST'] as const
}

export function usePostApiV1ChannelsInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.invite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.invite']['$post']> },
      ) => parseResponse(client.api.v1['channels.invite'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsJoinKey() {
  return ['api', '/api/v1/channels.join', 'POST'] as const
}

export function usePostApiV1ChannelsJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.join']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.join']['$post']> },
      ) => parseResponse(client.api.v1['channels.join'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsKickKey() {
  return ['api', '/api/v1/channels.kick', 'POST'] as const
}

export function usePostApiV1ChannelsKick<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.kick']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.kick']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsKickKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.kick']['$post']> },
      ) => parseResponse(client.api.v1['channels.kick'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsLeaveKey() {
  return ['api', '/api/v1/channels.leave', 'POST'] as const
}

export function usePostApiV1ChannelsLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.leave']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.leave']['$post']> },
      ) => parseResponse(client.api.v1['channels.leave'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ChannelsListJoinedKey(
  args: InferRequestType<(typeof client.api.v1)['channels.list.joined']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.list.joined', keyArgs] as const
}

export function useGetApiV1ChannelsListJoined<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.list.joined']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
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
        ? getGetApiV1ChannelsListJoinedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.list.joined'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsListJoined<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.list.joined']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
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
        ? getGetApiV1ChannelsListJoinedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.list.joined'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChannelsListKey(
  args: InferRequestType<(typeof client.api.v1)['channels.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.list', keyArgs] as const
}

export function useGetApiV1ChannelsList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>>
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
        ? getGetApiV1ChannelsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>>
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
        ? getGetApiV1ChannelsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChannelsMembersKey(
  args: InferRequestType<(typeof client.api.v1)['channels.members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.members', keyArgs] as const
}

export function useGetApiV1ChannelsMembers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>
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
        ? getGetApiV1ChannelsMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsMembers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>
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
        ? getGetApiV1ChannelsMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChannelsMessagesKey(
  args: InferRequestType<(typeof client.api.v1)['channels.messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.messages', keyArgs] as const
}

export function useGetApiV1ChannelsMessages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>
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
        ? getGetApiV1ChannelsMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.messages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsMessages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>
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
        ? getGetApiV1ChannelsMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.messages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChannelsModeratorsKey(
  args: InferRequestType<(typeof client.api.v1)['channels.moderators']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.moderators', keyArgs] as const
}

export function useGetApiV1ChannelsModerators<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.moderators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
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
        ? getGetApiV1ChannelsModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.moderators'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsModerators<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.moderators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
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
        ? getGetApiV1ChannelsModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.moderators'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChannelsOnlineKey(
  args: InferRequestType<(typeof client.api.v1)['channels.online']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.online', keyArgs] as const
}

export function useGetApiV1ChannelsOnline<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.online']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>
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
        ? getGetApiV1ChannelsOnlineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.online'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsOnline<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.online']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>
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
        ? getGetApiV1ChannelsOnlineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.online'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ChannelsOpenKey() {
  return ['api', '/api/v1/channels.open', 'POST'] as const
}

export function usePostApiV1ChannelsOpen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.open']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.open']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsOpenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.open']['$post']> },
      ) => parseResponse(client.api.v1['channels.open'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsRemoveLeaderKey() {
  return ['api', '/api/v1/channels.removeLeader', 'POST'] as const
}

export function usePostApiV1ChannelsRemoveLeader<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.removeLeader']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.removeLeader']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsRemoveLeaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['channels.removeLeader']['$post']> },
      ) => parseResponse(client.api.v1['channels.removeLeader'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsRemoveModeratorKey() {
  return ['api', '/api/v1/channels.removeModerator', 'POST'] as const
}

export function usePostApiV1ChannelsRemoveModerator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.removeModerator']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.removeModerator']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsRemoveModeratorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['channels.removeModerator']['$post']> },
      ) => parseResponse(client.api.v1['channels.removeModerator'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsRemoveOwnerKey() {
  return ['api', '/api/v1/channels.removeOwner', 'POST'] as const
}

export function usePostApiV1ChannelsRemoveOwner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.removeOwner']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.removeOwner']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsRemoveOwnerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.removeOwner']['$post']> },
      ) => parseResponse(client.api.v1['channels.removeOwner'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsRenameKey() {
  return ['api', '/api/v1/channels.rename', 'POST'] as const
}

export function usePostApiV1ChannelsRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.rename']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.rename']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsRenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.rename']['$post']> },
      ) => parseResponse(client.api.v1['channels.rename'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ChannelsRolesKey(
  args: InferRequestType<(typeof client.api.v1)['channels.roles']['$get']>,
) {
  return ['api', '/api/v1/channels.roles', args] as const
}

export function useGetApiV1ChannelsRoles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>
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
        ? getGetApiV1ChannelsRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.roles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsRoles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>
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
        ? getGetApiV1ChannelsRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['channels.roles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ChannelsSetAnnouncementKey() {
  return ['api', '/api/v1/channels.setAnnouncement', 'POST'] as const
}

export function usePostApiV1ChannelsSetAnnouncement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsSetAnnouncementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['channels.setAnnouncement']['$post']> },
      ) => parseResponse(client.api.v1['channels.setAnnouncement'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsSetCustomFieldsKey() {
  return ['api', '/api/v1/channels.setCustomFields', 'POST'] as const
}

export function usePostApiV1ChannelsSetCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setCustomFields']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.setCustomFields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsSetCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['channels.setCustomFields']['$post']> },
      ) => parseResponse(client.api.v1['channels.setCustomFields'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsSetDefaultKey() {
  return ['api', '/api/v1/channels.setDefault', 'POST'] as const
}

export function usePostApiV1ChannelsSetDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setDefault']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.setDefault']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsSetDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.setDefault']['$post']> },
      ) => parseResponse(client.api.v1['channels.setDefault'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsSetDescriptionKey() {
  return ['api', '/api/v1/channels.setDescription', 'POST'] as const
}

export function usePostApiV1ChannelsSetDescription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setDescription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.setDescription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsSetDescriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['channels.setDescription']['$post']> },
      ) => parseResponse(client.api.v1['channels.setDescription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsSetJoinCodeKey() {
  return ['api', '/api/v1/channels.setJoinCode', 'POST'] as const
}

export function usePostApiV1ChannelsSetJoinCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setJoinCode']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.setJoinCode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsSetJoinCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.setJoinCode']['$post']> },
      ) => parseResponse(client.api.v1['channels.setJoinCode'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsSetPurposeKey() {
  return ['api', '/api/v1/channels.setPurpose', 'POST'] as const
}

export function usePostApiV1ChannelsSetPurpose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setPurpose']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.setPurpose']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsSetPurposeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.setPurpose']['$post']> },
      ) => parseResponse(client.api.v1['channels.setPurpose'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsSetReadOnlyKey() {
  return ['api', '/api/v1/channels.setReadOnly', 'POST'] as const
}

export function usePostApiV1ChannelsSetReadOnly<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setReadOnly']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.setReadOnly']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsSetReadOnlyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.setReadOnly']['$post']> },
      ) => parseResponse(client.api.v1['channels.setReadOnly'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsSetTopicKey() {
  return ['api', '/api/v1/channels.setTopic', 'POST'] as const
}

export function usePostApiV1ChannelsSetTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setTopic']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.setTopic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsSetTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.setTopic']['$post']> },
      ) => parseResponse(client.api.v1['channels.setTopic'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsSetTypeKey() {
  return ['api', '/api/v1/channels.setType', 'POST'] as const
}

export function usePostApiV1ChannelsSetType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setType']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.setType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsSetTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.setType']['$post']> },
      ) => parseResponse(client.api.v1['channels.setType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChannelsUnarchiveKey() {
  return ['api', '/api/v1/channels.unarchive', 'POST'] as const
}

export function usePostApiV1ChannelsUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.unarchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['channels.unarchive']['$post']> },
      ) => parseResponse(client.api.v1['channels.unarchive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ChannelsGetAllUserMentionsByChannelKey(
  args: InferRequestType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.getAllUserMentionsByChannel', keyArgs] as const
}

export function useGetApiV1ChannelsGetAllUserMentionsByChannel<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
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
        ? getGetApiV1ChannelsGetAllUserMentionsByChannelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['channels.getAllUserMentionsByChannel'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsGetAllUserMentionsByChannel<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
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
        ? getGetApiV1ChannelsGetAllUserMentionsByChannelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['channels.getAllUserMentionsByChannel'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChannelsGetIntegrationsKey(
  args: InferRequestType<(typeof client.api.v1)['channels.getIntegrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.getIntegrations', keyArgs] as const
}

export function useGetApiV1ChannelsGetIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.getIntegrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
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
        ? getGetApiV1ChannelsGetIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['channels.getIntegrations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChannelsGetIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['channels.getIntegrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
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
        ? getGetApiV1ChannelsGetIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['channels.getIntegrations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ChannelsConvertToTeamKey() {
  return ['api', '/api/v1/channels.convertToTeam', 'POST'] as const
}

export function usePostApiV1ChannelsConvertToTeam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.convertToTeam']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['channels.convertToTeam']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChannelsConvertToTeamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['channels.convertToTeam']['$post']> },
      ) => parseResponse(client.api.v1['channels.convertToTeam'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsSaveNotificationKey() {
  return ['api', '/api/v1/rooms.saveNotification', 'POST'] as const
}

export function usePostApiV1RoomsSaveNotification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.saveNotification']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.saveNotification']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsSaveNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['rooms.saveNotification']['$post']> },
      ) => parseResponse(client.api.v1['rooms.saveNotification'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsSaveDraftKey() {
  return ['api', '/api/v1/rooms.saveDraft', 'POST'] as const
}

export function usePostApiV1RoomsSaveDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.saveDraft']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.saveDraft']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsSaveDraftKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.saveDraft']['$post']> },
      ) => parseResponse(client.api.v1['rooms.saveDraft'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RoomsAdminRoomsKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.adminRooms', keyArgs] as const
}

export function useGetApiV1RoomsAdminRooms<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>
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
        ? getGetApiV1RoomsAdminRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.adminRooms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsAdminRooms<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>
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
        ? getGetApiV1RoomsAdminRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.adminRooms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RoomsCleanHistoryKey() {
  return ['api', '/api/v1/rooms.cleanHistory', 'POST'] as const
}

export function usePostApiV1RoomsCleanHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsCleanHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.cleanHistory']['$post']> },
      ) => parseResponse(client.api.v1['rooms.cleanHistory'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RoomsHistoryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.history', keyArgs] as const
}

export function useGetApiV1RoomsHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>>
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
        ? getGetApiV1RoomsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>>
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
        ? getGetApiV1RoomsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RoomsInfoKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.info', keyArgs] as const
}

export function useGetApiV1RoomsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1RoomsInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1RoomsInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RoomsGetDiscussionsKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.getDiscussions', keyArgs] as const
}

export function useGetApiV1RoomsGetDiscussions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
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
        ? getGetApiV1RoomsGetDiscussionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.getDiscussions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsGetDiscussions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
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
        ? getGetApiV1RoomsGetDiscussionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.getDiscussions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RoomsGetKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.get', keyArgs] as const
}

export function useGetApiV1RoomsGet<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1RoomsGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsGet<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1RoomsGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RoomsJoinKey() {
  return ['api', '/api/v1/rooms.join', 'POST'] as const
}

export function usePostApiV1RoomsJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.join']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.join']['$post']> },
      ) => parseResponse(client.api.v1['rooms.join'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsLeaveKey() {
  return ['api', '/api/v1/rooms.leave', 'POST'] as const
}

export function usePostApiV1RoomsLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.leave']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.leave']['$post']> },
      ) => parseResponse(client.api.v1['rooms.leave'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsDeleteKey() {
  return ['api', '/api/v1/rooms.delete', 'POST'] as const
}

export function usePostApiV1RoomsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.delete']['$post']> },
      ) => parseResponse(client.api.v1['rooms.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsFavoriteKey() {
  return ['api', '/api/v1/rooms.favorite', 'POST'] as const
}

export function usePostApiV1RoomsFavorite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.favorite']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.favorite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsFavoriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.favorite']['$post']> },
      ) => parseResponse(client.api.v1['rooms.favorite'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RoomsAutocompleteAvailableForTeamsKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.autocomplete.availableForTeams', keyArgs] as const
}

export function useGetApiV1RoomsAutocompleteAvailableForTeams<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
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
        ? getGetApiV1RoomsAutocompleteAvailableForTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['rooms.autocomplete.availableForTeams'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsAutocompleteAvailableForTeams<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
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
        ? getGetApiV1RoomsAutocompleteAvailableForTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['rooms.autocomplete.availableForTeams'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RoomsAutocompleteChannelAndPrivateKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.autocomplete.channelAndPrivate', keyArgs] as const
}

export function useGetApiV1RoomsAutocompleteChannelAndPrivate<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
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
        ? getGetApiV1RoomsAutocompleteChannelAndPrivateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['rooms.autocomplete.channelAndPrivate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsAutocompleteChannelAndPrivate<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
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
        ? getGetApiV1RoomsAutocompleteChannelAndPrivateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['rooms.autocomplete.channelAndPrivate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RoomsAutocompleteAdminRoomsKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.autocomplete.adminRooms', keyArgs] as const
}

export function useGetApiV1RoomsAutocompleteAdminRooms<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
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
        ? getGetApiV1RoomsAutocompleteAdminRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['rooms.autocomplete.adminRooms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsAutocompleteAdminRooms<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
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
        ? getGetApiV1RoomsAutocompleteAdminRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['rooms.autocomplete.adminRooms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RoomsAdminRoomsGetRoomKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.adminRooms.getRoom', keyArgs] as const
}

export function useGetApiV1RoomsAdminRoomsGetRoom<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
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
        ? getGetApiV1RoomsAdminRoomsGetRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['rooms.adminRooms.getRoom'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsAdminRoomsGetRoom<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
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
        ? getGetApiV1RoomsAdminRoomsGetRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['rooms.adminRooms.getRoom'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RoomsSaveRoomSettingsKey() {
  return ['api', '/api/v1/rooms.saveRoomSettings', 'POST'] as const
}

export function usePostApiV1RoomsSaveRoomSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsSaveRoomSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']> },
      ) => parseResponse(client.api.v1['rooms.saveRoomSettings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RoomsNameExistsKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.nameExists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.nameExists', keyArgs] as const
}

export function useGetApiV1RoomsNameExists<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.nameExists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>
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
        ? getGetApiV1RoomsNameExistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.nameExists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsNameExists<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.nameExists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>
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
        ? getGetApiV1RoomsNameExistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.nameExists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RoomsChangeArchivationStateKey() {
  return ['api', '/api/v1/rooms.changeArchivationState', 'POST'] as const
}

export function usePostApiV1RoomsChangeArchivationState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsChangeArchivationStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>
        },
      ) => parseResponse(client.api.v1['rooms.changeArchivationState'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsExportKey() {
  return ['api', '/api/v1/rooms.export', 'POST'] as const
}

export function usePostApiV1RoomsExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.export']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.export']['$post']> },
      ) => parseResponse(client.api.v1['rooms.export'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsMuteUserKey() {
  return ['api', '/api/v1/rooms.muteUser', 'POST'] as const
}

export function usePostApiV1RoomsMuteUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.muteUser']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.muteUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsMuteUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.muteUser']['$post']> },
      ) => parseResponse(client.api.v1['rooms.muteUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsUnmuteUserKey() {
  return ['api', '/api/v1/rooms.unmuteUser', 'POST'] as const
}

export function usePostApiV1RoomsUnmuteUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsUnmuteUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.unmuteUser']['$post']> },
      ) => parseResponse(client.api.v1['rooms.unmuteUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsCreateDiscussionKey() {
  return ['api', '/api/v1/rooms.createDiscussion', 'POST'] as const
}

export function usePostApiV1RoomsCreateDiscussion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsCreateDiscussionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['rooms.createDiscussion']['$post']> },
      ) => parseResponse(client.api.v1['rooms.createDiscussion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RoomsImagesKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.images']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.images', keyArgs] as const
}

export function useGetApiV1RoomsImages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>>
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
        ? getGetApiV1RoomsImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.images'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsImages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>>
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
        ? getGetApiV1RoomsImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.images'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AuditRoomsMembersKey(
  args: InferRequestType<(typeof client.api.v1.audit)['rooms.members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/audit/rooms.members', keyArgs] as const
}

export function useGetApiV1AuditRoomsMembers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.audit)['rooms.members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
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
        ? getGetApiV1AuditRoomsMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.audit['rooms.members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AuditRoomsMembers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.audit)['rooms.members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
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
        ? getGetApiV1AuditRoomsMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.audit['rooms.members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RoomsMembersOrderedByRoleKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.membersOrderedByRole', keyArgs] as const
}

export function useGetApiV1RoomsMembersOrderedByRole<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
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
        ? getGetApiV1RoomsMembersOrderedByRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['rooms.membersOrderedByRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsMembersOrderedByRole<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
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
        ? getGetApiV1RoomsMembersOrderedByRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['rooms.membersOrderedByRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TeamsCreateKey() {
  return ['api', '/api/v1/teams.create', 'POST'] as const
}

export function usePostApiV1TeamsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['teams.create']['$post']> },
      ) => parseResponse(client.api.v1['teams.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TeamsListAllKey(
  args: InferRequestType<(typeof client.api.v1)['teams.listAll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.listAll', keyArgs] as const
}

export function useGetApiV1TeamsListAll<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.listAll']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>>
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
        ? getGetApiV1TeamsListAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.listAll'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TeamsListAll<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.listAll']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>>
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
        ? getGetApiV1TeamsListAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.listAll'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TeamsListKey(
  args: InferRequestType<(typeof client.api.v1)['teams.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.list', keyArgs] as const
}

export function useGetApiV1TeamsList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1TeamsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TeamsList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1TeamsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TeamsInfoKey(
  args: InferRequestType<(typeof client.api.v1)['teams.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.info', keyArgs] as const
}

export function useGetApiV1TeamsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1TeamsInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TeamsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1TeamsInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TeamsUpdateKey() {
  return ['api', '/api/v1/teams.update', 'POST'] as const
}

export function usePostApiV1TeamsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['teams.update']['$post']> },
      ) => parseResponse(client.api.v1['teams.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TeamsAddMembersKey() {
  return ['api', '/api/v1/teams.addMembers', 'POST'] as const
}

export function usePostApiV1TeamsAddMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.addMembers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.addMembers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsAddMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['teams.addMembers']['$post']> },
      ) => parseResponse(client.api.v1['teams.addMembers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TeamsUpdateMemberKey() {
  return ['api', '/api/v1/teams.updateMember', 'POST'] as const
}

export function usePostApiV1TeamsUpdateMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.updateMember']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.updateMember']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsUpdateMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['teams.updateMember']['$post']> },
      ) => parseResponse(client.api.v1['teams.updateMember'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TeamsMembersKey(
  args: InferRequestType<(typeof client.api.v1)['teams.members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.members', keyArgs] as const
}

export function useGetApiV1TeamsMembers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>>
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
        ? getGetApiV1TeamsMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TeamsMembers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>>
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
        ? getGetApiV1TeamsMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TeamsLeaveKey() {
  return ['api', '/api/v1/teams.leave', 'POST'] as const
}

export function usePostApiV1TeamsLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.leave']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['teams.leave']['$post']> },
      ) => parseResponse(client.api.v1['teams.leave'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TeamsRemoveMemberKey() {
  return ['api', '/api/v1/teams.removeMember', 'POST'] as const
}

export function usePostApiV1TeamsRemoveMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.removeMember']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.removeMember']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsRemoveMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['teams.removeMember']['$post']> },
      ) => parseResponse(client.api.v1['teams.removeMember'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TeamsDeleteKey() {
  return ['api', '/api/v1/teams.delete', 'POST'] as const
}

export function usePostApiV1TeamsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['teams.delete']['$post']> },
      ) => parseResponse(client.api.v1['teams.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TeamsAutocompleteKey(
  args: InferRequestType<(typeof client.api.v1)['teams.autocomplete']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.autocomplete', keyArgs] as const
}

export function useGetApiV1TeamsAutocomplete<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.autocomplete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
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
        ? getGetApiV1TeamsAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.autocomplete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TeamsAutocomplete<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.autocomplete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
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
        ? getGetApiV1TeamsAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.autocomplete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TeamsConvertToChannelKey() {
  return ['api', '/api/v1/teams.convertToChannel', 'POST'] as const
}

export function usePostApiV1TeamsConvertToChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.convertToChannel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.convertToChannel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsConvertToChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['teams.convertToChannel']['$post']> },
      ) => parseResponse(client.api.v1['teams.convertToChannel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TeamsAddRoomsKey() {
  return ['api', '/api/v1/teams.addRooms', 'POST'] as const
}

export function usePostApiV1TeamsAddRooms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.addRooms']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.addRooms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsAddRoomsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['teams.addRooms']['$post']> },
      ) => parseResponse(client.api.v1['teams.addRooms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TeamsRemoveRoomKey() {
  return ['api', '/api/v1/teams.removeRoom', 'POST'] as const
}

export function usePostApiV1TeamsRemoveRoom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.removeRoom']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.removeRoom']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsRemoveRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['teams.removeRoom']['$post']> },
      ) => parseResponse(client.api.v1['teams.removeRoom'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TeamsUpdateRoomKey() {
  return ['api', '/api/v1/teams.updateRoom', 'POST'] as const
}

export function usePostApiV1TeamsUpdateRoom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.updateRoom']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['teams.updateRoom']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TeamsUpdateRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['teams.updateRoom']['$post']> },
      ) => parseResponse(client.api.v1['teams.updateRoom'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TeamsListRoomsKey(
  args: InferRequestType<(typeof client.api.v1)['teams.listRooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.listRooms', keyArgs] as const
}

export function useGetApiV1TeamsListRooms<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.listRooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>
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
        ? getGetApiV1TeamsListRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.listRooms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TeamsListRooms<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.listRooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>
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
        ? getGetApiV1TeamsListRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.listRooms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TeamsListRoomsOfUserKey(
  args: InferRequestType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.listRoomsOfUser', keyArgs] as const
}

export function useGetApiV1TeamsListRoomsOfUser<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
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
        ? getGetApiV1TeamsListRoomsOfUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.listRoomsOfUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TeamsListRoomsOfUser<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
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
        ? getGetApiV1TeamsListRoomsOfUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.listRoomsOfUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TeamsListChildrenKey(
  args: InferRequestType<(typeof client.api.v1)['teams.listChildren']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.listChildren', keyArgs] as const
}

export function useGetApiV1TeamsListChildren<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.listChildren']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
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
        ? getGetApiV1TeamsListChildrenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.listChildren'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TeamsListChildren<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['teams.listChildren']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
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
        ? getGetApiV1TeamsListChildrenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['teams.listChildren'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GroupsOnlineKey(
  args: InferRequestType<(typeof client.api.v1)['groups.online']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.online', keyArgs] as const
}

export function useGetApiV1GroupsOnline<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.online']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>>
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
        ? getGetApiV1GroupsOnlineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.online'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsOnline<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.online']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>>
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
        ? getGetApiV1GroupsOnlineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.online'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GroupsGetIntegrationsKey(
  args: InferRequestType<(typeof client.api.v1)['groups.getIntegrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.getIntegrations', keyArgs] as const
}

export function useGetApiV1GroupsGetIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.getIntegrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
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
        ? getGetApiV1GroupsGetIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.getIntegrations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsGetIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.getIntegrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
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
        ? getGetApiV1GroupsGetIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.getIntegrations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1GroupsAddAllKey() {
  return ['api', '/api/v1/groups.addAll', 'POST'] as const
}

export function usePostApiV1GroupsAddAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.addAll']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.addAll']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsAddAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.addAll']['$post']> },
      ) => parseResponse(client.api.v1['groups.addAll'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsAddLeaderKey() {
  return ['api', '/api/v1/groups.addLeader', 'POST'] as const
}

export function usePostApiV1GroupsAddLeader<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.addLeader']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.addLeader']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsAddLeaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.addLeader']['$post']> },
      ) => parseResponse(client.api.v1['groups.addLeader'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsAddModeratorKey() {
  return ['api', '/api/v1/groups.addModerator', 'POST'] as const
}

export function usePostApiV1GroupsAddModerator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.addModerator']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.addModerator']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsAddModeratorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.addModerator']['$post']> },
      ) => parseResponse(client.api.v1['groups.addModerator'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsAddOwnerKey() {
  return ['api', '/api/v1/groups.addOwner', 'POST'] as const
}

export function usePostApiV1GroupsAddOwner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.addOwner']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.addOwner']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsAddOwnerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.addOwner']['$post']> },
      ) => parseResponse(client.api.v1['groups.addOwner'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsArchiveKey() {
  return ['api', '/api/v1/groups.archive', 'POST'] as const
}

export function usePostApiV1GroupsArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.archive']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.archive']['$post']> },
      ) => parseResponse(client.api.v1['groups.archive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsCloseKey() {
  return ['api', '/api/v1/groups.close', 'POST'] as const
}

export function usePostApiV1GroupsClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.close']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.close']['$post']> },
      ) => parseResponse(client.api.v1['groups.close'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GroupsCountersKey(
  args: InferRequestType<(typeof client.api.v1)['groups.counters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.counters', keyArgs] as const
}

export function useGetApiV1GroupsCounters<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.counters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>
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
        ? getGetApiV1GroupsCountersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.counters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsCounters<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.counters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>
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
        ? getGetApiV1GroupsCountersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.counters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1GroupsCreateKey() {
  return ['api', '/api/v1/groups.create', 'POST'] as const
}

export function usePostApiV1GroupsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.create']['$post']> },
      ) => parseResponse(client.api.v1['groups.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsDeleteKey() {
  return ['api', '/api/v1/groups.delete', 'POST'] as const
}

export function usePostApiV1GroupsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.delete']['$post']> },
      ) => parseResponse(client.api.v1['groups.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GroupsHistoryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.history', keyArgs] as const
}

export function useGetApiV1GroupsHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>
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
        ? getGetApiV1GroupsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>
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
        ? getGetApiV1GroupsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GroupsInfoKey(
  args: InferRequestType<(typeof client.api.v1)['groups.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.info', keyArgs] as const
}

export function useGetApiV1GroupsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>>
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
        ? getGetApiV1GroupsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>>
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
        ? getGetApiV1GroupsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1GroupsInviteKey() {
  return ['api', '/api/v1/groups.invite', 'POST'] as const
}

export function usePostApiV1GroupsInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.invite']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.invite']['$post']> },
      ) => parseResponse(client.api.v1['groups.invite'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsKickKey() {
  return ['api', '/api/v1/groups.kick', 'POST'] as const
}

export function usePostApiV1GroupsKick<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.kick']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.kick']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsKickKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.kick']['$post']> },
      ) => parseResponse(client.api.v1['groups.kick'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsLeaveKey() {
  return ['api', '/api/v1/groups.leave', 'POST'] as const
}

export function usePostApiV1GroupsLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.leave']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.leave']['$post']> },
      ) => parseResponse(client.api.v1['groups.leave'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GroupsListAllKey(
  args: InferRequestType<(typeof client.api.v1)['groups.listAll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.listAll', keyArgs] as const
}

export function useGetApiV1GroupsListAll<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.listAll']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>
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
        ? getGetApiV1GroupsListAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.listAll'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsListAll<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.listAll']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>
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
        ? getGetApiV1GroupsListAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.listAll'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GroupsListKey(
  args: InferRequestType<(typeof client.api.v1)['groups.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.list', keyArgs] as const
}

export function useGetApiV1GroupsList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>>
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
        ? getGetApiV1GroupsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>>
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
        ? getGetApiV1GroupsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GroupsMembersKey(
  args: InferRequestType<(typeof client.api.v1)['groups.members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.members', keyArgs] as const
}

export function useGetApiV1GroupsMembers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>
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
        ? getGetApiV1GroupsMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsMembers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>
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
        ? getGetApiV1GroupsMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GroupsMessagesKey(
  args: InferRequestType<(typeof client.api.v1)['groups.messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.messages', keyArgs] as const
}

export function useGetApiV1GroupsMessages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>
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
        ? getGetApiV1GroupsMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.messages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsMessages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>
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
        ? getGetApiV1GroupsMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.messages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GroupsModeratorsKey(
  args: InferRequestType<(typeof client.api.v1)['groups.moderators']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.moderators', keyArgs] as const
}

export function useGetApiV1GroupsModerators<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.moderators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>
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
        ? getGetApiV1GroupsModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.moderators'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsModerators<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.moderators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>
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
        ? getGetApiV1GroupsModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.moderators'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1GroupsOpenKey() {
  return ['api', '/api/v1/groups.open', 'POST'] as const
}

export function usePostApiV1GroupsOpen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.open']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.open']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsOpenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.open']['$post']> },
      ) => parseResponse(client.api.v1['groups.open'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsRemoveLeaderKey() {
  return ['api', '/api/v1/groups.removeLeader', 'POST'] as const
}

export function usePostApiV1GroupsRemoveLeader<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.removeLeader']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.removeLeader']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsRemoveLeaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.removeLeader']['$post']> },
      ) => parseResponse(client.api.v1['groups.removeLeader'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsRemoveModeratorKey() {
  return ['api', '/api/v1/groups.removeModerator', 'POST'] as const
}

export function usePostApiV1GroupsRemoveModerator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.removeModerator']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.removeModerator']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsRemoveModeratorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['groups.removeModerator']['$post']> },
      ) => parseResponse(client.api.v1['groups.removeModerator'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsRemoveOwnerKey() {
  return ['api', '/api/v1/groups.removeOwner', 'POST'] as const
}

export function usePostApiV1GroupsRemoveOwner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.removeOwner']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.removeOwner']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsRemoveOwnerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.removeOwner']['$post']> },
      ) => parseResponse(client.api.v1['groups.removeOwner'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsRenameKey() {
  return ['api', '/api/v1/groups.rename', 'POST'] as const
}

export function usePostApiV1GroupsRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.rename']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.rename']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsRenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.rename']['$post']> },
      ) => parseResponse(client.api.v1['groups.rename'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsSetAnnouncementKey() {
  return ['api', '/api/v1/groups.setAnnouncement', 'POST'] as const
}

export function usePostApiV1GroupsSetAnnouncement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsSetAnnouncementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['groups.setAnnouncement']['$post']> },
      ) => parseResponse(client.api.v1['groups.setAnnouncement'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsSetCustomFieldsKey() {
  return ['api', '/api/v1/groups.setCustomFields', 'POST'] as const
}

export function usePostApiV1GroupsSetCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setCustomFields']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.setCustomFields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsSetCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['groups.setCustomFields']['$post']> },
      ) => parseResponse(client.api.v1['groups.setCustomFields'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsSetDescriptionKey() {
  return ['api', '/api/v1/groups.setDescription', 'POST'] as const
}

export function usePostApiV1GroupsSetDescription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setDescription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.setDescription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsSetDescriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['groups.setDescription']['$post']> },
      ) => parseResponse(client.api.v1['groups.setDescription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsSetPurposeKey() {
  return ['api', '/api/v1/groups.setPurpose', 'POST'] as const
}

export function usePostApiV1GroupsSetPurpose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setPurpose']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.setPurpose']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsSetPurposeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.setPurpose']['$post']> },
      ) => parseResponse(client.api.v1['groups.setPurpose'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsSetReadOnlyKey() {
  return ['api', '/api/v1/groups.setReadOnly', 'POST'] as const
}

export function usePostApiV1GroupsSetReadOnly<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setReadOnly']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.setReadOnly']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsSetReadOnlyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.setReadOnly']['$post']> },
      ) => parseResponse(client.api.v1['groups.setReadOnly'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsSetTopicKey() {
  return ['api', '/api/v1/groups.setTopic', 'POST'] as const
}

export function usePostApiV1GroupsSetTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setTopic']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.setTopic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsSetTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.setTopic']['$post']> },
      ) => parseResponse(client.api.v1['groups.setTopic'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsSetTypeKey() {
  return ['api', '/api/v1/groups.setType', 'POST'] as const
}

export function usePostApiV1GroupsSetType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.setType']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.setType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsSetTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.setType']['$post']> },
      ) => parseResponse(client.api.v1['groups.setType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsUnarchiveKey() {
  return ['api', '/api/v1/groups.unarchive', 'POST'] as const
}

export function usePostApiV1GroupsUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.unarchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.unarchive']['$post']> },
      ) => parseResponse(client.api.v1['groups.unarchive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GroupsFilesKey(
  args: InferRequestType<(typeof client.api.v1)['groups.files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.files', keyArgs] as const
}

export function useGetApiV1GroupsFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>>
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
        ? getGetApiV1GroupsFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.files'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>>
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
        ? getGetApiV1GroupsFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.files'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1GroupsSetEncryptedKey() {
  return ['api', '/api/v1/groups.setEncrypted', 'POST'] as const
}

export function usePostApiV1GroupsSetEncrypted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setEncrypted']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.setEncrypted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsSetEncryptedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.setEncrypted']['$post']> },
      ) => parseResponse(client.api.v1['groups.setEncrypted'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupsConvertToTeamKey() {
  return ['api', '/api/v1/groups.convertToTeam', 'POST'] as const
}

export function usePostApiV1GroupsConvertToTeam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.convertToTeam']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['groups.convertToTeam']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupsConvertToTeamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['groups.convertToTeam']['$post']> },
      ) => parseResponse(client.api.v1['groups.convertToTeam'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GroupsRolesKey(
  args: InferRequestType<(typeof client.api.v1)['groups.roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.roles', keyArgs] as const
}

export function useGetApiV1GroupsRoles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>>
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
        ? getGetApiV1GroupsRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.roles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsRoles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups.roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>>
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
        ? getGetApiV1GroupsRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups.roles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1DirectoryKey(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/directory', keyArgs] as const
}

export function useGetApiV1Directory<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DirectoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.directory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Directory<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DirectoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.directory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RoomsOpenKey() {
  return ['api', '/api/v1/rooms.open', 'POST'] as const
}

export function usePostApiV1RoomsOpen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.open']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.open']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsOpenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.open']['$post']> },
      ) => parseResponse(client.api.v1['rooms.open'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsHideKey() {
  return ['api', '/api/v1/rooms.hide', 'POST'] as const
}

export function usePostApiV1RoomsHide<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.hide']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.hide']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsHideKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.hide']['$post']> },
      ) => parseResponse(client.api.v1['rooms.hide'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1FindOrCreateInviteKey() {
  return ['api', '/api/v1/findOrCreateInvite', 'POST'] as const
}

export function usePostApiV1FindOrCreateInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.findOrCreateInvite.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.findOrCreateInvite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1FindOrCreateInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.findOrCreateInvite.$post> },
      ) => parseResponse(client.api.v1.findOrCreateInvite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RoomsRolesKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.roles', keyArgs] as const
}

export function useGetApiV1RoomsRoles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>>
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
        ? getGetApiV1RoomsRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.roles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsRoles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>>
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
        ? getGetApiV1RoomsRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.roles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RoomsIsMemberKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.isMember']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.isMember', keyArgs] as const
}

export function useGetApiV1RoomsIsMember<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.isMember']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>
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
        ? getGetApiV1RoomsIsMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.isMember'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsIsMember<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['rooms.isMember']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>
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
        ? getGetApiV1RoomsIsMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['rooms.isMember'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RoomsAutocompleteChannelAndPrivateWithPaginationKey(
  args: InferRequestType<
    (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.autocomplete.channelAndPrivate.withPagination', keyArgs] as const
}

export function useGetApiV1RoomsAutocompleteChannelAndPrivateWithPagination<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
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
        ? getGetApiV1RoomsAutocompleteChannelAndPrivateWithPaginationKey(args)
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
                (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
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
          client.api.v1['rooms.autocomplete.channelAndPrivate.withPagination'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RoomsAutocompleteChannelAndPrivateWithPagination<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
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
        ? getGetApiV1RoomsAutocompleteChannelAndPrivateWithPaginationKey(args)
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
                (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
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
          client.api.v1['rooms.autocomplete.channelAndPrivate.withPagination'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RoomsMediaRidKey() {
  return ['api', '/api/v1/rooms.media/:rid', 'POST'] as const
}

export function usePostApiV1RoomsMediaRid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsMediaRidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['rooms.media'][':rid']['$post']> },
      ) => parseResponse(client.api.v1['rooms.media'][':rid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RoomsMediaConfirmRidFileIdKey() {
  return ['api', '/api/v1/rooms.mediaConfirm/:rid/:fileId', 'POST'] as const
}

export function usePostApiV1RoomsMediaConfirmRidFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RoomsMediaConfirmRidFileIdKey()
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
            (typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1['rooms.mediaConfirm'][':rid'][':fileId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1UploadsDeleteKey() {
  return ['api', '/api/v1/uploads.delete', 'POST'] as const
}

export function usePostApiV1UploadsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['uploads.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['uploads.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UploadsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['uploads.delete']['$post']> },
      ) => parseResponse(client.api.v1['uploads.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ListInvitesKey() {
  return ['api', '/api/v1/listInvites'] as const
}

export function useGetApiV1ListInvites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ListInvitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.listInvites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ListInvites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ListInvitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.listInvites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1RemoveInviteIdKey() {
  return ['api', '/api/v1/removeInvite/:_id', 'DELETE'] as const
}

export function useDeleteApiV1RemoveInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1RemoveInviteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.removeInvite)[':_id']['$delete']> },
      ) => parseResponse(client.api.v1.removeInvite[':_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1UseInviteTokenKey() {
  return ['api', '/api/v1/useInviteToken', 'POST'] as const
}

export function usePostApiV1UseInviteToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.useInviteToken.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.useInviteToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UseInviteTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.useInviteToken.$post> },
      ) => parseResponse(client.api.v1.useInviteToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AbacRoomsRidAttributesKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes', 'POST'] as const
}

export function usePostApiV1AbacRoomsRidAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AbacRoomsRidAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>
        },
      ) => parseResponse(client.api.v1.abac.rooms[':rid'].attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AbacRoomsRidAttributesKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes', 'DELETE'] as const
}

export function useDeleteApiV1AbacRoomsRidAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AbacRoomsRidAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>
        },
      ) => parseResponse(client.api.v1.abac.rooms[':rid'].attributes.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1AbacRoomsRidAttributesKeyKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes/:key', 'PUT'] as const
}

export function usePutApiV1AbacRoomsRidAttributesKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AbacRoomsRidAttributesKeyKey()
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
            (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']
          >
        },
      ) =>
        parseResponse(client.api.v1.abac.rooms[':rid'].attributes[':key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AbacRoomsRidAttributesKeyKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes/:key', 'POST'] as const
}

export function usePostApiV1AbacRoomsRidAttributesKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AbacRoomsRidAttributesKeyKey()
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
            (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.abac.rooms[':rid'].attributes[':key'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AbacRoomsRidAttributesKeyKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes/:key', 'DELETE'] as const
}

export function useDeleteApiV1AbacRoomsRidAttributesKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AbacRoomsRidAttributesKeyKey()
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
            (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.abac.rooms[':rid'].attributes[':key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AbacAttributesKey(
  args: InferRequestType<typeof client.api.v1.abac.attributes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/attributes', keyArgs] as const
}

export function useGetApiV1AbacAttributes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.abac.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>
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
        ? getGetApiV1AbacAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.abac.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AbacAttributes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.abac.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>
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
        ? getGetApiV1AbacAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.abac.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AbacAttributesKey() {
  return ['api', '/api/v1/abac/attributes', 'POST'] as const
}

export function usePostApiV1AbacAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.abac.attributes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AbacAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.abac.attributes.$post> },
      ) => parseResponse(client.api.v1.abac.attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AbacUsersSyncKey() {
  return ['api', '/api/v1/abac/users/sync', 'POST'] as const
}

export function usePostApiV1AbacUsersSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.users.sync.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.abac.users.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AbacUsersSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.abac.users.sync.$post> },
      ) => parseResponse(client.api.v1.abac.users.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AbacAttributesIdKey(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/attributes/:_id', keyArgs] as const
}

export function useGetApiV1AbacAttributesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
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
        ? getGetApiV1AbacAttributesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.abac.attributes[':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AbacAttributesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
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
        ? getGetApiV1AbacAttributesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.abac.attributes[':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AbacAttributesIdKey() {
  return ['api', '/api/v1/abac/attributes/:_id', 'PUT'] as const
}

export function usePutApiV1AbacAttributesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AbacAttributesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$put']> },
      ) => parseResponse(client.api.v1.abac.attributes[':_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AbacAttributesIdKey() {
  return ['api', '/api/v1/abac/attributes/:_id', 'DELETE'] as const
}

export function useDeleteApiV1AbacAttributesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AbacAttributesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']> },
      ) => parseResponse(client.api.v1.abac.attributes[':_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AbacAttributesKeyIsInUseKey(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/attributes/:key/is-in-use', keyArgs] as const
}

export function useGetApiV1AbacAttributesKeyIsInUse<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>>
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
        ? getGetApiV1AbacAttributesKeyIsInUseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.abac.attributes[':key']['is-in-use'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AbacAttributesKeyIsInUse<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>>
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
        ? getGetApiV1AbacAttributesKeyIsInUseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.abac.attributes[':key']['is-in-use'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AbacAttributesListKeysKey(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/attributes.listKeys', keyArgs] as const
}

export function useGetApiV1AbacAttributesListKeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
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
        ? getGetApiV1AbacAttributesListKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.abac['attributes.listKeys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AbacAttributesListKeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
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
        ? getGetApiV1AbacAttributesListKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.abac['attributes.listKeys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AbacAttributesListAssignableKey(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/attributes.listAssignable', keyArgs] as const
}

export function useGetApiV1AbacAttributesListAssignable<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>>
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
        ? getGetApiV1AbacAttributesListAssignableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.abac['attributes.listAssignable'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AbacAttributesListAssignable<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>>
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
        ? getGetApiV1AbacAttributesListAssignableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.abac['attributes.listAssignable'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AbacRoomsKey(
  args: InferRequestType<typeof client.api.v1.abac.rooms.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/rooms', keyArgs] as const
}

export function useGetApiV1AbacRooms<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.abac.rooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AbacRoomsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.abac.rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AbacRooms<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.abac.rooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AbacRoomsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.abac.rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AbacRoomsEvaluateMembershipKey() {
  return ['api', '/api/v1/abac/rooms.evaluateMembership', 'POST'] as const
}

export function usePostApiV1AbacRoomsEvaluateMembership<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AbacRoomsEvaluateMembershipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>
        },
      ) => parseResponse(client.api.v1.abac['rooms.evaluateMembership'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AbacAuditKey(
  args: InferRequestType<typeof client.api.v1.abac.audit.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/audit', keyArgs] as const
}

export function useGetApiV1AbacAudit<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.abac.audit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AbacAuditKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.abac.audit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AbacAudit<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.abac.audit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AbacAuditKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.abac.audit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AbacPdpHealthKey(
  args: InferRequestType<typeof client.api.v1.abac.pdp.health.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/pdp/health', keyArgs] as const
}

export function useGetApiV1AbacPdpHealth<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.abac.pdp.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>
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
        ? getGetApiV1AbacPdpHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.abac.pdp.health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AbacPdpHealth<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.abac.pdp.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>
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
        ? getGetApiV1AbacPdpHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.abac.pdp.health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SubscriptionsGetKey(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/subscriptions.get', keyArgs] as const
}

export function useGetApiV1SubscriptionsGet<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>
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
        ? getGetApiV1SubscriptionsGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['subscriptions.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubscriptionsGet<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>
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
        ? getGetApiV1SubscriptionsGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['subscriptions.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SubscriptionsGetOneKey(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.getOne']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/subscriptions.getOne', keyArgs] as const
}

export function useGetApiV1SubscriptionsGetOne<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.getOne']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
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
        ? getGetApiV1SubscriptionsGetOneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['subscriptions.getOne'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubscriptionsGetOne<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.getOne']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
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
        ? getGetApiV1SubscriptionsGetOneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['subscriptions.getOne'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsReadKey() {
  return ['api', '/api/v1/subscriptions.read', 'POST'] as const
}

export function usePostApiV1SubscriptionsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['subscriptions.read']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['subscriptions.read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['subscriptions.read']['$post']> },
      ) => parseResponse(client.api.v1['subscriptions.read'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsUnreadKey() {
  return ['api', '/api/v1/subscriptions.unread', 'POST'] as const
}

export function usePostApiV1SubscriptionsUnread<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['subscriptions.unread']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['subscriptions.unread']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsUnreadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['subscriptions.unread']['$post']> },
      ) => parseResponse(client.api.v1['subscriptions.unread'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
