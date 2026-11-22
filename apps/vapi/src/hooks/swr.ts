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

export function getAssistantKey() {
  return ['assistant'] as const
}

export function getCallKey() {
  return ['call'] as const
}

export function getCampaignKey() {
  return ['campaign'] as const
}

export function getChatKey() {
  return ['chat'] as const
}

export function getEvalKey() {
  return ['eval'] as const
}

export function getFileKey() {
  return ['file'] as const
}

export function getObservabilityKey() {
  return ['observability'] as const
}

export function getPhoneNumberKey() {
  return ['phone-number'] as const
}

export function getProviderKey() {
  return ['provider'] as const
}

export function getReportingKey() {
  return ['reporting'] as const
}

export function getSessionKey() {
  return ['session'] as const
}

export function getSquadKey() {
  return ['squad'] as const
}

export function getStructuredOutputKey() {
  return ['structured-output'] as const
}

export function getToolKey() {
  return ['tool'] as const
}

export function getTrafficAllocationsKey() {
  return ['traffic-allocations'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getGetAssistantKey(args: InferRequestType<typeof client.assistant.$get>) {
  return ['assistant', '/assistant', args] as const
}

export function useGetAssistant<TError = unknown>(
  args: InferRequestType<typeof client.assistant.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssistantKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assistant.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssistant<TError = unknown>(
  args: InferRequestType<typeof client.assistant.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssistantKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assistant.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAssistantKey() {
  return ['assistant', '/assistant', 'POST'] as const
}

export function usePostAssistant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.assistant.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssistantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assistant.$post> }) =>
        parseResponse(client.assistant.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssistantIdKey(
  args: InferRequestType<(typeof client.assistant)[':id']['$get']>,
) {
  return ['assistant', '/assistant/:id', args] as const
}

export function useGetAssistantId<TError = unknown>(
  args: InferRequestType<(typeof client.assistant)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssistantIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assistant[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssistantId<TError = unknown>(
  args: InferRequestType<(typeof client.assistant)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssistantIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assistant[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAssistantIdKey() {
  return ['assistant', '/assistant/:id', 'DELETE'] as const
}

export function useDeleteAssistantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assistant)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssistantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assistant)[':id']['$delete']> },
      ) => parseResponse(client.assistant[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAssistantIdKey() {
  return ['assistant', '/assistant/:id', 'PATCH'] as const
}

export function usePatchAssistantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assistant)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAssistantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assistant)[':id']['$patch']> },
      ) => parseResponse(client.assistant[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSquadKey(args: InferRequestType<typeof client.squad.$get>) {
  return ['squad', '/squad', args] as const
}

export function useGetSquad<TError = unknown>(
  args: InferRequestType<typeof client.squad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSquadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.squad.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSquad<TError = unknown>(
  args: InferRequestType<typeof client.squad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSquadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.squad.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSquadKey() {
  return ['squad', '/squad', 'POST'] as const
}

export function usePostSquad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.squad.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSquadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.squad.$post> }) =>
        parseResponse(client.squad.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSquadIdKey(args: InferRequestType<(typeof client.squad)[':id']['$get']>) {
  return ['squad', '/squad/:id', args] as const
}

export function useGetSquadId<TError = unknown>(
  args: InferRequestType<(typeof client.squad)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSquadIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.squad[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSquadId<TError = unknown>(
  args: InferRequestType<(typeof client.squad)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSquadIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.squad[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSquadIdKey() {
  return ['squad', '/squad/:id', 'DELETE'] as const
}

export function useDeleteSquadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.squad)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSquadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.squad)[':id']['$delete']> }) =>
        parseResponse(client.squad[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSquadIdKey() {
  return ['squad', '/squad/:id', 'PATCH'] as const
}

export function usePatchSquadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.squad)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSquadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.squad)[':id']['$patch']> }) =>
        parseResponse(client.squad[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallKey(args: InferRequestType<typeof client.call.$get>) {
  return ['call', '/call', args] as const
}

export function useGetCall<TError = unknown>(
  args: InferRequestType<typeof client.call.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.call.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCall<TError = unknown>(
  args: InferRequestType<typeof client.call.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.call.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCallKey() {
  return ['call', '/call', 'POST'] as const
}

export function usePostCall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.call.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.call.$post> }) =>
        parseResponse(client.call.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallIdKey(args: InferRequestType<(typeof client.call)[':id']['$get']>) {
  return ['call', '/call/:id', args] as const
}

export function useGetCallId<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallId<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCallIdKey() {
  return ['call', '/call/:id', 'DELETE'] as const
}

export function useDeleteCallId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.call)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCallIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.call)[':id']['$delete']> }) =>
        parseResponse(client.call[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCallIdKey() {
  return ['call', '/call/:id', 'PATCH'] as const
}

export function usePatchCallId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.call)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCallIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.call)[':id']['$patch']> }) =>
        parseResponse(client.call[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallIdMonoRecordingKey(
  args: InferRequestType<(typeof client.call)[':id']['mono-recording']['$get']>,
) {
  return ['call', '/call/:id/mono-recording', args] as const
}

export function useGetCallIdMonoRecording<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['mono-recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['mono-recording']['$get']>>
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
        ? getGetCallIdMonoRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['mono-recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id']['mono-recording'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallIdMonoRecording<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['mono-recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['mono-recording']['$get']>>
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
        ? getGetCallIdMonoRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['mono-recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id']['mono-recording'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCallIdStereoRecordingKey(
  args: InferRequestType<(typeof client.call)[':id']['stereo-recording']['$get']>,
) {
  return ['call', '/call/:id/stereo-recording', args] as const
}

export function useGetCallIdStereoRecording<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['stereo-recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['stereo-recording']['$get']>>
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
        ? getGetCallIdStereoRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['stereo-recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id']['stereo-recording'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallIdStereoRecording<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['stereo-recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['stereo-recording']['$get']>>
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
        ? getGetCallIdStereoRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['stereo-recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id']['stereo-recording'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCallIdVideoRecordingKey(
  args: InferRequestType<(typeof client.call)[':id']['video-recording']['$get']>,
) {
  return ['call', '/call/:id/video-recording', args] as const
}

export function useGetCallIdVideoRecording<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['video-recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['video-recording']['$get']>>
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
        ? getGetCallIdVideoRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['video-recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id']['video-recording'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallIdVideoRecording<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['video-recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['video-recording']['$get']>>
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
        ? getGetCallIdVideoRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['video-recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id']['video-recording'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCallIdCustomerRecordingKey(
  args: InferRequestType<(typeof client.call)[':id']['customer-recording']['$get']>,
) {
  return ['call', '/call/:id/customer-recording', args] as const
}

export function useGetCallIdCustomerRecording<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['customer-recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['customer-recording']['$get']>>
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
        ? getGetCallIdCustomerRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['customer-recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id']['customer-recording'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallIdCustomerRecording<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['customer-recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['customer-recording']['$get']>>
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
        ? getGetCallIdCustomerRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['customer-recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id']['customer-recording'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCallIdAssistantRecordingKey(
  args: InferRequestType<(typeof client.call)[':id']['assistant-recording']['$get']>,
) {
  return ['call', '/call/:id/assistant-recording', args] as const
}

export function useGetCallIdAssistantRecording<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['assistant-recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['assistant-recording']['$get']>>
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
        ? getGetCallIdAssistantRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['assistant-recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.call[':id']['assistant-recording'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallIdAssistantRecording<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['assistant-recording']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['assistant-recording']['$get']>>
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
        ? getGetCallIdAssistantRecordingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['assistant-recording']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.call[':id']['assistant-recording'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCallIdPcapKey(
  args: InferRequestType<(typeof client.call)[':id']['pcap']['$get']>,
) {
  return ['call', '/call/:id/pcap', args] as const
}

export function useGetCallIdPcap<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['pcap']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallIdPcapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id'].pcap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallIdPcap<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['pcap']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallIdPcapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id'].pcap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCallIdCallLogsKey(
  args: InferRequestType<(typeof client.call)[':id']['call-logs']['$get']>,
) {
  return ['call', '/call/:id/call-logs', args] as const
}

export function useGetCallIdCallLogs<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['call-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetCallIdCallLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id']['call-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallIdCallLogs<TError = unknown>(
  args: InferRequestType<(typeof client.call)[':id']['call-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetCallIdCallLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.call[':id']['call-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatKey(args: InferRequestType<typeof client.chat.$get>) {
  return ['chat', '/chat', args] as const
}

export function useGetChat<TError = unknown>(
  args: InferRequestType<typeof client.chat.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.chat.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChat<TError = unknown>(
  args: InferRequestType<typeof client.chat.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.chat.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostChatKey() {
  return ['chat', '/chat', 'POST'] as const
}

export function usePostChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.chat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.$post> }) =>
        parseResponse(client.chat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatIdKey(args: InferRequestType<(typeof client.chat)[':id']['$get']>) {
  return ['chat', '/chat/:id', args] as const
}

export function useGetChatId<TError = unknown>(
  args: InferRequestType<(typeof client.chat)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatId<TError = unknown>(
  args: InferRequestType<(typeof client.chat)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteChatIdKey() {
  return ['chat', '/chat/:id', 'DELETE'] as const
}

export function useDeleteChatId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.chat)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChatIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.chat)[':id']['$delete']> }) =>
        parseResponse(client.chat[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatResponsesKey() {
  return ['chat', '/chat/responses', 'POST'] as const
}

export function usePostChatResponses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.responses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chat.responses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatResponsesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.responses.$post> }) =>
        parseResponse(client.chat.responses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCampaignKey(args: InferRequestType<typeof client.campaign.$get>) {
  return ['campaign', '/campaign', args] as const
}

export function useGetCampaign<TError = unknown>(
  args: InferRequestType<typeof client.campaign.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.campaign.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCampaign<TError = unknown>(
  args: InferRequestType<typeof client.campaign.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.campaign.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCampaignKey() {
  return ['campaign', '/campaign', 'POST'] as const
}

export function usePostCampaign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.campaign.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCampaignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.campaign.$post> }) =>
        parseResponse(client.campaign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CampaignKey(args: InferRequestType<typeof client.v2.campaign.$get>) {
  return ['v2', '/v2/campaign', args] as const
}

export function useGetV2Campaign<TError = unknown>(
  args: InferRequestType<typeof client.v2.campaign.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CampaignKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.campaign.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Campaign<TError = unknown>(
  args: InferRequestType<typeof client.v2.campaign.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CampaignKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.campaign.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CampaignKey() {
  return ['v2', '/v2/campaign', 'POST'] as const
}

export function usePostV2Campaign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.campaign.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CampaignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.campaign.$post> }) =>
        parseResponse(client.v2.campaign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CampaignIdKey(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['$get']>,
) {
  return ['v2', '/v2/campaign/:id', args] as const
}

export function useGetV2CampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CampaignIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.campaign[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CampaignIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.campaign[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CampaignIdKey() {
  return ['v2', '/v2/campaign/:id', 'DELETE'] as const
}

export function useDeleteV2CampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.campaign)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.campaign)[':id']['$delete']> },
      ) => parseResponse(client.v2.campaign[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2CampaignIdKey() {
  return ['v2', '/v2/campaign/:id', 'PATCH'] as const
}

export function usePatchV2CampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.campaign)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.campaign)[':id']['$patch']> },
      ) => parseResponse(client.v2.campaign[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCampaignIdKey(
  args: InferRequestType<(typeof client.campaign)[':id']['$get']>,
) {
  return ['campaign', '/campaign/:id', args] as const
}

export function useGetCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.campaign)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaign[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.campaign)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaign[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCampaignIdKey() {
  return ['campaign', '/campaign/:id', 'DELETE'] as const
}

export function useDeleteCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.campaign)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.campaign)[':id']['$delete']> },
      ) => parseResponse(client.campaign[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCampaignIdKey() {
  return ['campaign', '/campaign/:id', 'PATCH'] as const
}

export function usePatchCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.campaign)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.campaign)[':id']['$patch']> },
      ) => parseResponse(client.campaign[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CampaignIdContactsKey(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['contacts']['$get']>,
) {
  return ['v2', '/v2/campaign/:id/contacts', args] as const
}

export function useGetV2CampaignIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>
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
        ? getGetV2CampaignIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.campaign[':id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CampaignIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>
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
        ? getGetV2CampaignIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.campaign[':id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSessionKey(args: InferRequestType<typeof client.session.$get>) {
  return ['session', '/session', args] as const
}

export function useGetSession<TError = unknown>(
  args: InferRequestType<typeof client.session.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.session.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSession<TError = unknown>(
  args: InferRequestType<typeof client.session.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.session.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSessionKey() {
  return ['session', '/session', 'POST'] as const
}

export function usePostSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.session.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.session.$post> }) =>
        parseResponse(client.session.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSessionIdKey(args: InferRequestType<(typeof client.session)[':id']['$get']>) {
  return ['session', '/session/:id', args] as const
}

export function useGetSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.session)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.session[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.session)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.session[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSessionIdKey() {
  return ['session', '/session/:id', 'DELETE'] as const
}

export function useDeleteSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.session)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.session)[':id']['$delete']> },
      ) => parseResponse(client.session[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSessionIdKey() {
  return ['session', '/session/:id', 'PATCH'] as const
}

export function usePatchSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.session)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.session)[':id']['$patch']> },
      ) => parseResponse(client.session[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrafficAllocationsKey(
  args: InferRequestType<(typeof client)['traffic-allocations']['$get']>,
) {
  return ['traffic-allocations', '/traffic-allocations', args] as const
}

export function useGetTrafficAllocations<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrafficAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-allocations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrafficAllocations<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrafficAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-allocations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTrafficAllocationsKey() {
  return ['traffic-allocations', '/traffic-allocations', 'POST'] as const
}

export function usePostTrafficAllocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['traffic-allocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrafficAllocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['traffic-allocations']['$post']> },
      ) => parseResponse(client['traffic-allocations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrafficAllocationsLatestKey(
  args: InferRequestType<(typeof client)['traffic-allocations']['latest']['$get']>,
) {
  return ['traffic-allocations', '/traffic-allocations/latest', args] as const
}

export function useGetTrafficAllocationsLatest<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-allocations']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations']['latest']['$get']>>
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
        ? getGetTrafficAllocationsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-allocations'].latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrafficAllocationsLatest<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-allocations']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations']['latest']['$get']>>
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
        ? getGetTrafficAllocationsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-allocations'].latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrafficAllocationsMetricsKey(
  args: InferRequestType<(typeof client)['traffic-allocations']['metrics']['$get']>,
) {
  return ['traffic-allocations', '/traffic-allocations/metrics', args] as const
}

export function useGetTrafficAllocationsMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-allocations']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations']['metrics']['$get']>>
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
        ? getGetTrafficAllocationsMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-allocations'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrafficAllocationsMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-allocations']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations']['metrics']['$get']>>
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
        ? getGetTrafficAllocationsMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-allocations'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrafficAllocationsIdKey(
  args: InferRequestType<(typeof client)['traffic-allocations'][':id']['$get']>,
) {
  return ['traffic-allocations', '/traffic-allocations/:id', args] as const
}

export function useGetTrafficAllocationsId<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-allocations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations'][':id']['$get']>>
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
        ? getGetTrafficAllocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-allocations'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrafficAllocationsId<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-allocations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations'][':id']['$get']>>
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
        ? getGetTrafficAllocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-allocations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-allocations'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumberKey(
  args: InferRequestType<(typeof client)['phone-number']['$get']>,
) {
  return ['phone-number', '/phone-number', args] as const
}

export function useGetPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumberKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumberKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneNumberKey() {
  return ['phone-number', '/phone-number', 'POST'] as const
}

export function usePostPhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-number']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['phone-number']['$post']> },
      ) => parseResponse(client['phone-number'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PhoneNumberKey(
  args: InferRequestType<(typeof client.v2)['phone-number']['$get']>,
) {
  return ['v2', '/v2/phone-number', args] as const
}

export function useGetV2PhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['phone-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PhoneNumberKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['phone-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['phone-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PhoneNumberKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['phone-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumberIdKey(
  args: InferRequestType<(typeof client)['phone-number'][':id']['$get']>,
) {
  return ['phone-number', '/phone-number/:id', args] as const
}

export function useGetPhoneNumberId<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumberIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-number'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumberId<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumberIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-number'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneNumberIdKey() {
  return ['phone-number', '/phone-number/:id', 'DELETE'] as const
}

export function useDeletePhoneNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-number'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneNumberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['phone-number'][':id']['$delete']> },
      ) => parseResponse(client['phone-number'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneNumberIdKey() {
  return ['phone-number', '/phone-number/:id', 'PATCH'] as const
}

export function usePatchPhoneNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-number'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneNumberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['phone-number'][':id']['$patch']> },
      ) => parseResponse(client['phone-number'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolKey(args: InferRequestType<typeof client.tool.$get>) {
  return ['tool', '/tool', args] as const
}

export function useGetTool<TError = unknown>(
  args: InferRequestType<typeof client.tool.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tool.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTool<TError = unknown>(
  args: InferRequestType<typeof client.tool.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tool.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostToolKey() {
  return ['tool', '/tool', 'POST'] as const
}

export function usePostTool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tool.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tool.$post> }) =>
        parseResponse(client.tool.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolIdKey(args: InferRequestType<(typeof client.tool)[':id']['$get']>) {
  return ['tool', '/tool/:id', args] as const
}

export function useGetToolId<TError = unknown>(
  args: InferRequestType<(typeof client.tool)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tool[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolId<TError = unknown>(
  args: InferRequestType<(typeof client.tool)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tool[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteToolIdKey() {
  return ['tool', '/tool/:id', 'DELETE'] as const
}

export function useDeleteToolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tool)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteToolIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.tool)[':id']['$delete']> }) =>
        parseResponse(client.tool[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchToolIdKey() {
  return ['tool', '/tool/:id', 'PATCH'] as const
}

export function usePatchToolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tool)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchToolIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.tool)[':id']['$patch']> }) =>
        parseResponse(client.tool[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileKey(args: InferRequestType<typeof client.file.$get>) {
  return ['file', '/file', args] as const
}

export function useGetFile<TError = unknown>(
  args: InferRequestType<typeof client.file.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.file.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFile<TError = unknown>(
  args: InferRequestType<typeof client.file.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.file.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFileKey() {
  return ['file', '/file', 'POST'] as const
}

export function usePostFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.file.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.file.$post> }) =>
        parseResponse(client.file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileIdKey(args: InferRequestType<(typeof client.file)[':id']['$get']>) {
  return ['file', '/file/:id', args] as const
}

export function useGetFileId<TError = unknown>(
  args: InferRequestType<(typeof client.file)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileId<TError = unknown>(
  args: InferRequestType<(typeof client.file)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFileIdKey() {
  return ['file', '/file/:id', 'DELETE'] as const
}

export function useDeleteFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.file)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.file)[':id']['$delete']> }) =>
        parseResponse(client.file[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFileIdKey() {
  return ['file', '/file/:id', 'PATCH'] as const
}

export function usePatchFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.file)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.file)[':id']['$patch']> }) =>
        parseResponse(client.file[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2KnowledgeBaseKey(
  args: InferRequestType<(typeof client.v2)['knowledge-base']['$get']>,
) {
  return ['v2', '/v2/knowledge-base', args] as const
}

export function useGetV2KnowledgeBase<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['knowledge-base']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2KnowledgeBaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['knowledge-base'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KnowledgeBase<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['knowledge-base']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2KnowledgeBaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['knowledge-base'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2KnowledgeBaseKey() {
  return ['v2', '/v2/knowledge-base', 'POST'] as const
}

export function usePostV2KnowledgeBase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['knowledge-base']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KnowledgeBaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['knowledge-base']['$post']> },
      ) => parseResponse(client.v2['knowledge-base'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2KnowledgeBaseIdFileKey(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>,
) {
  return ['v2', '/v2/knowledge-base/:id/file', args] as const
}

export function useGetV2KnowledgeBaseIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>>
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
        ? getGetV2KnowledgeBaseIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['knowledge-base'][':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KnowledgeBaseIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>>
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
        ? getGetV2KnowledgeBaseIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['knowledge-base'][':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2KnowledgeBaseIdFileKey() {
  return ['v2', '/v2/knowledge-base/:id/file', 'POST'] as const
}

export function usePostV2KnowledgeBaseIdFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KnowledgeBaseIdFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$post']> },
      ) => parseResponse(client.v2['knowledge-base'][':id'].file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2KnowledgeBaseIdFileFileIdKey() {
  return ['v2', '/v2/knowledge-base/:id/file/:fileId', 'DELETE'] as const
}

export function useDeleteV2KnowledgeBaseIdFileFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2KnowledgeBaseIdFileFileIdKey()
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
            (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2['knowledge-base'][':id'].file[':fileId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2KnowledgeBaseIdFileFileIdRetryKey() {
  return ['v2', '/v2/knowledge-base/:id/file/:fileId/retry', 'POST'] as const
}

export function usePostV2KnowledgeBaseIdFileFileIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['retry']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KnowledgeBaseIdFileFileIdRetryKey()
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
            (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['retry']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['knowledge-base'][':id'].file[':fileId'].retry.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2KnowledgeBaseIdKey(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$get']>,
) {
  return ['v2', '/v2/knowledge-base/:id', args] as const
}

export function useGetV2KnowledgeBaseId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$get']>>
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
        ? getGetV2KnowledgeBaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['knowledge-base'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KnowledgeBaseId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$get']>>
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
        ? getGetV2KnowledgeBaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['knowledge-base'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2KnowledgeBaseIdKey() {
  return ['v2', '/v2/knowledge-base/:id', 'DELETE'] as const
}

export function useDeleteV2KnowledgeBaseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2KnowledgeBaseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$delete']> },
      ) => parseResponse(client.v2['knowledge-base'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2KnowledgeBaseIdKey() {
  return ['v2', '/v2/knowledge-base/:id', 'PATCH'] as const
}

export function usePatchV2KnowledgeBaseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2KnowledgeBaseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$patch']> },
      ) => parseResponse(client.v2['knowledge-base'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStructuredOutputKey(
  args: InferRequestType<(typeof client)['structured-output']['$get']>,
) {
  return ['structured-output', '/structured-output', args] as const
}

export function useGetStructuredOutput<TError = unknown>(
  args: InferRequestType<(typeof client)['structured-output']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStructuredOutputKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['structured-output'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStructuredOutput<TError = unknown>(
  args: InferRequestType<(typeof client)['structured-output']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStructuredOutputKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['structured-output'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStructuredOutputKey() {
  return ['structured-output', '/structured-output', 'POST'] as const
}

export function usePostStructuredOutput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['structured-output']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStructuredOutputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['structured-output']['$post']> },
      ) => parseResponse(client['structured-output'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStructuredOutputIdKey(
  args: InferRequestType<(typeof client)['structured-output'][':id']['$get']>,
) {
  return ['structured-output', '/structured-output/:id', args] as const
}

export function useGetStructuredOutputId<TError = unknown>(
  args: InferRequestType<(typeof client)['structured-output'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['structured-output'][':id']['$get']>>
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
        ? getGetStructuredOutputIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['structured-output'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['structured-output'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStructuredOutputId<TError = unknown>(
  args: InferRequestType<(typeof client)['structured-output'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['structured-output'][':id']['$get']>>
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
        ? getGetStructuredOutputIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['structured-output'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['structured-output'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteStructuredOutputIdKey() {
  return ['structured-output', '/structured-output/:id', 'DELETE'] as const
}

export function useDeleteStructuredOutputId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['structured-output'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['structured-output'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStructuredOutputIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['structured-output'][':id']['$delete']> },
      ) => parseResponse(client['structured-output'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchStructuredOutputIdKey() {
  return ['structured-output', '/structured-output/:id', 'PATCH'] as const
}

export function usePatchStructuredOutputId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['structured-output'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['structured-output'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchStructuredOutputIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['structured-output'][':id']['$patch']> },
      ) => parseResponse(client['structured-output'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStructuredOutputRunKey() {
  return ['structured-output', '/structured-output/run', 'POST'] as const
}

export function usePostStructuredOutputRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['structured-output']['run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['structured-output']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStructuredOutputRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['structured-output']['run']['$post']> },
      ) => parseResponse(client['structured-output'].run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationPersonalityKey(
  args: InferRequestType<typeof client.eval.simulation.personality.$get>,
) {
  return ['eval', '/eval/simulation/personality', args] as const
}

export function useGetEvalSimulationPersonality<TError = unknown>(
  args: InferRequestType<typeof client.eval.simulation.personality.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalSimulationPersonalityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.personality.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationPersonality<TError = unknown>(
  args: InferRequestType<typeof client.eval.simulation.personality.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalSimulationPersonalityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.personality.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEvalSimulationPersonalityKey() {
  return ['eval', '/eval/simulation/personality', 'POST'] as const
}

export function usePostEvalSimulationPersonality<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eval.simulation.personality.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalSimulationPersonalityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eval.simulation.personality.$post> },
      ) => parseResponse(client.eval.simulation.personality.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationPersonalityIdKey(
  args: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$get']>,
) {
  return ['eval', '/eval/simulation/personality/:id', args] as const
}

export function useGetEvalSimulationPersonalityId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$get']>>
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
        ? getGetEvalSimulationPersonalityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eval.simulation.personality[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationPersonalityId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$get']>>
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
        ? getGetEvalSimulationPersonalityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eval.simulation.personality[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEvalSimulationPersonalityIdKey() {
  return ['eval', '/eval/simulation/personality/:id', 'DELETE'] as const
}

export function useDeleteEvalSimulationPersonalityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation.personality)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEvalSimulationPersonalityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$delete']> },
      ) => parseResponse(client.eval.simulation.personality[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEvalSimulationPersonalityIdKey() {
  return ['eval', '/eval/simulation/personality/:id', 'PATCH'] as const
}

export function usePatchEvalSimulationPersonalityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation.personality)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEvalSimulationPersonalityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$patch']> },
      ) => parseResponse(client.eval.simulation.personality[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationScenarioKey(
  args: InferRequestType<typeof client.eval.simulation.scenario.$get>,
) {
  return ['eval', '/eval/simulation/scenario', args] as const
}

export function useGetEvalSimulationScenario<TError = unknown>(
  args: InferRequestType<typeof client.eval.simulation.scenario.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalSimulationScenarioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.scenario.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationScenario<TError = unknown>(
  args: InferRequestType<typeof client.eval.simulation.scenario.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalSimulationScenarioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.scenario.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEvalSimulationScenarioKey() {
  return ['eval', '/eval/simulation/scenario', 'POST'] as const
}

export function usePostEvalSimulationScenario<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eval.simulation.scenario.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalSimulationScenarioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eval.simulation.scenario.$post> },
      ) => parseResponse(client.eval.simulation.scenario.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationScenarioIdKey(
  args: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$get']>,
) {
  return ['eval', '/eval/simulation/scenario/:id', args] as const
}

export function useGetEvalSimulationScenarioId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$get']>>
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
        ? getGetEvalSimulationScenarioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.scenario[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationScenarioId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$get']>>
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
        ? getGetEvalSimulationScenarioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.scenario[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEvalSimulationScenarioIdKey() {
  return ['eval', '/eval/simulation/scenario/:id', 'DELETE'] as const
}

export function useDeleteEvalSimulationScenarioId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEvalSimulationScenarioIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$delete']> },
      ) => parseResponse(client.eval.simulation.scenario[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEvalSimulationScenarioIdKey() {
  return ['eval', '/eval/simulation/scenario/:id', 'PATCH'] as const
}

export function usePatchEvalSimulationScenarioId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEvalSimulationScenarioIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$patch']> },
      ) => parseResponse(client.eval.simulation.scenario[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationRunKey(
  args: InferRequestType<typeof client.eval.simulation.run.$get>,
) {
  return ['eval', '/eval/simulation/run', args] as const
}

export function useGetEvalSimulationRun<TError = unknown>(
  args: InferRequestType<typeof client.eval.simulation.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalSimulationRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationRun<TError = unknown>(
  args: InferRequestType<typeof client.eval.simulation.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalSimulationRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEvalSimulationRunKey() {
  return ['eval', '/eval/simulation/run', 'POST'] as const
}

export function usePostEvalSimulationRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.eval.simulation.run.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalSimulationRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.eval.simulation.run.$post> }) =>
        parseResponse(client.eval.simulation.run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationRunIdKey(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['$get']>,
) {
  return ['eval', '/eval/simulation/run/:id', args] as const
}

export function useGetEvalSimulationRunId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$get']>>
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
        ? getGetEvalSimulationRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.run[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationRunId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$get']>>
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
        ? getGetEvalSimulationRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.run[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchEvalSimulationRunIdKey() {
  return ['eval', '/eval/simulation/run/:id', 'PATCH'] as const
}

export function usePatchEvalSimulationRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation.run)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEvalSimulationRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.eval.simulation.run)[':id']['$patch']> },
      ) => parseResponse(client.eval.simulation.run[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationRunIdItemKey(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item']['$get']>,
) {
  return ['eval', '/eval/simulation/run/:id/item', args] as const
}

export function useGetEvalSimulationRunIdItem<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item']['$get']>>
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
        ? getGetEvalSimulationRunIdItemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.run[':id'].item.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationRunIdItem<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item']['$get']>>
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
        ? getGetEvalSimulationRunIdItemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.run[':id'].item.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEvalSimulationRunIdItemItemIdKey(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>,
) {
  return ['eval', '/eval/simulation/run/:id/item/:itemId', args] as const
}

export function useGetEvalSimulationRunIdItemItemId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>
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
        ? getGetEvalSimulationRunIdItemItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eval.simulation.run[':id'].item[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationRunIdItemItemId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>
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
        ? getGetEvalSimulationRunIdItemItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eval.simulation.run[':id'].item[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchEvalSimulationRunIdItemItemIdKey() {
  return ['eval', '/eval/simulation/run/:id/item/:itemId', 'PATCH'] as const
}

export function usePatchEvalSimulationRunIdItemItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEvalSimulationRunIdItemItemIdKey()
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
            (typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']
          >
        },
      ) =>
        parseResponse(client.eval.simulation.run[':id'].item[':itemId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEvalSimulationRunIdItemItemIdGenerateKey() {
  return ['eval', '/eval/simulation/run/:id/item/:itemId/generate', 'POST'] as const
}

export function usePostEvalSimulationRunIdItemItemIdGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eval.simulation.run)[':id']['item'][':itemId']['generate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.eval.simulation.run)[':id']['item'][':itemId']['generate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalSimulationRunIdItemItemIdGenerateKey()
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
            (typeof client.eval.simulation.run)[':id']['item'][':itemId']['generate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.eval.simulation.run[':id'].item[':itemId'].generate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationSuiteKey(
  args: InferRequestType<typeof client.eval.simulation.suite.$get>,
) {
  return ['eval', '/eval/simulation/suite', args] as const
}

export function useGetEvalSimulationSuite<TError = unknown>(
  args: InferRequestType<typeof client.eval.simulation.suite.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalSimulationSuiteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.suite.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationSuite<TError = unknown>(
  args: InferRequestType<typeof client.eval.simulation.suite.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalSimulationSuiteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.suite.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEvalSimulationSuiteKey() {
  return ['eval', '/eval/simulation/suite', 'POST'] as const
}

export function usePostEvalSimulationSuite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eval.simulation.suite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalSimulationSuiteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eval.simulation.suite.$post> },
      ) => parseResponse(client.eval.simulation.suite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEvalSimulationSuiteIdDuplicateKey() {
  return ['eval', '/eval/simulation/suite/:id/duplicate', 'POST'] as const
}

export function usePostEvalSimulationSuiteIdDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalSimulationSuiteIdDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>
        },
      ) => parseResponse(client.eval.simulation.suite[':id'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationSuiteIdKey(
  args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$get']>,
) {
  return ['eval', '/eval/simulation/suite/:id', args] as const
}

export function useGetEvalSimulationSuiteId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$get']>>
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
        ? getGetEvalSimulationSuiteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.suite[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationSuiteId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$get']>>
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
        ? getGetEvalSimulationSuiteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.suite[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEvalSimulationSuiteIdKey() {
  return ['eval', '/eval/simulation/suite/:id', 'DELETE'] as const
}

export function useDeleteEvalSimulationSuiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation.suite)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEvalSimulationSuiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$delete']> },
      ) => parseResponse(client.eval.simulation.suite[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEvalSimulationSuiteIdKey() {
  return ['eval', '/eval/simulation/suite/:id', 'PATCH'] as const
}

export function usePatchEvalSimulationSuiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation.suite)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEvalSimulationSuiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$patch']> },
      ) => parseResponse(client.eval.simulation.suite[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEvalSimulationOnboardingRequirementsKey() {
  return ['eval', '/eval/simulation/onboarding/requirements', 'POST'] as const
}

export function usePostEvalSimulationOnboardingRequirements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eval.simulation.onboarding.requirements.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eval.simulation.onboarding.requirements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalSimulationOnboardingRequirementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eval.simulation.onboarding.requirements.$post> },
      ) => parseResponse(client.eval.simulation.onboarding.requirements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEvalSimulationOnboardingSuiteKey() {
  return ['eval', '/eval/simulation/onboarding/suite', 'POST'] as const
}

export function usePostEvalSimulationOnboardingSuite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eval.simulation.onboarding.suite.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eval.simulation.onboarding.suite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalSimulationOnboardingSuiteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eval.simulation.onboarding.suite.$post> },
      ) => parseResponse(client.eval.simulation.onboarding.suite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEvalSimulationOnboardingSuiteSuiteIdKey() {
  return ['eval', '/eval/simulation/onboarding/suite/:suiteId', 'PATCH'] as const
}

export function usePatchEvalSimulationOnboardingSuiteSuiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEvalSimulationOnboardingSuiteSuiteIdKey()
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
            (typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.eval.simulation.onboarding.suite[':suiteId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationKey(
  args: InferRequestType<typeof client.eval.simulation.$get>,
) {
  return ['eval', '/eval/simulation', args] as const
}

export function useGetEvalSimulation<TError = unknown>(
  args: InferRequestType<typeof client.eval.simulation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalSimulationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulation<TError = unknown>(
  args: InferRequestType<typeof client.eval.simulation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalSimulationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEvalSimulationKey() {
  return ['eval', '/eval/simulation', 'POST'] as const
}

export function usePostEvalSimulation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.eval.simulation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalSimulationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.eval.simulation.$post> }) =>
        parseResponse(client.eval.simulation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalSimulationConcurrencyKey() {
  return ['eval', '/eval/simulation/concurrency'] as const
}

export function useGetEvalSimulationConcurrency<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>>
      >
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
        ? getGetEvalSimulationConcurrencyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.concurrency.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationConcurrency<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>>
      >
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
        ? getGetEvalSimulationConcurrencyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation.concurrency.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEvalSimulationIdKey(
  args: InferRequestType<(typeof client.eval.simulation)[':id']['$get']>,
) {
  return ['eval', '/eval/simulation/:id', args] as const
}

export function useGetEvalSimulationId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalSimulationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalSimulationId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.simulation)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalSimulationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.simulation[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEvalSimulationIdKey() {
  return ['eval', '/eval/simulation/:id', 'DELETE'] as const
}

export function useDeleteEvalSimulationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEvalSimulationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.eval.simulation)[':id']['$delete']> },
      ) => parseResponse(client.eval.simulation[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEvalSimulationIdKey() {
  return ['eval', '/eval/simulation/:id', 'PATCH'] as const
}

export function usePatchEvalSimulationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.simulation)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEvalSimulationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.eval.simulation)[':id']['$patch']> },
      ) => parseResponse(client.eval.simulation[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportingInsightKey(
  args: InferRequestType<typeof client.reporting.insight.$get>,
) {
  return ['reporting', '/reporting/insight', args] as const
}

export function useGetReportingInsight<TError = unknown>(
  args: InferRequestType<typeof client.reporting.insight.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportingInsightKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reporting.insight.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportingInsight<TError = unknown>(
  args: InferRequestType<typeof client.reporting.insight.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportingInsightKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reporting.insight.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportingInsightKey() {
  return ['reporting', '/reporting/insight', 'POST'] as const
}

export function usePostReportingInsight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reporting.insight.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingInsightKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reporting.insight.$post> }) =>
        parseResponse(client.reporting.insight.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportingInsightIdKey(
  args: InferRequestType<(typeof client.reporting.insight)[':id']['$get']>,
) {
  return ['reporting', '/reporting/insight/:id', args] as const
}

export function useGetReportingInsightId<TError = unknown>(
  args: InferRequestType<(typeof client.reporting.insight)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>
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
        ? getGetReportingInsightIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reporting.insight[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportingInsightId<TError = unknown>(
  args: InferRequestType<(typeof client.reporting.insight)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>
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
        ? getGetReportingInsightIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reporting.insight[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteReportingInsightIdKey() {
  return ['reporting', '/reporting/insight/:id', 'DELETE'] as const
}

export function useDeleteReportingInsightId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reporting.insight)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReportingInsightIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reporting.insight)[':id']['$delete']> },
      ) => parseResponse(client.reporting.insight[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchReportingInsightIdKey() {
  return ['reporting', '/reporting/insight/:id', 'PATCH'] as const
}

export function usePatchReportingInsightId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reporting.insight)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchReportingInsightIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reporting.insight)[':id']['$patch']> },
      ) => parseResponse(client.reporting.insight[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportingInsightIdRunKey() {
  return ['reporting', '/reporting/insight/:id/run', 'POST'] as const
}

export function usePostReportingInsightIdRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reporting.insight)[':id']['run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reporting.insight)[':id']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingInsightIdRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.reporting.insight)[':id']['run']['$post']> },
      ) => parseResponse(client.reporting.insight[':id'].run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportingInsightPreviewKey() {
  return ['reporting', '/reporting/insight/preview', 'POST'] as const
}

export function usePostReportingInsightPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.reporting.insight.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingInsightPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.reporting.insight.preview.$post> },
      ) => parseResponse(client.reporting.insight.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportingBoardKey(
  args: InferRequestType<typeof client.reporting.board.$get>,
) {
  return ['reporting', '/reporting/board', args] as const
}

export function useGetReportingBoard<TError = unknown>(
  args: InferRequestType<typeof client.reporting.board.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportingBoardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reporting.board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportingBoard<TError = unknown>(
  args: InferRequestType<typeof client.reporting.board.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportingBoardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reporting.board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportingBoardKey() {
  return ['reporting', '/reporting/board', 'POST'] as const
}

export function usePostReportingBoard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reporting.board.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingBoardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reporting.board.$post> }) =>
        parseResponse(client.reporting.board.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportingBoardDefaultMetricsOverviewKey() {
  return ['reporting', '/reporting/board/default/metrics-overview'] as const
}

export function useGetReportingBoardDefaultMetricsOverview<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reporting.board.default)['metrics-overview']['$get']>>
        >
      >
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
        ? getGetReportingBoardDefaultMetricsOverviewKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reporting.board.default)['metrics-overview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.reporting.board.default['metrics-overview'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportingBoardDefaultMetricsOverview<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reporting.board.default)['metrics-overview']['$get']>>
        >
      >
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
        ? getGetReportingBoardDefaultMetricsOverviewKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reporting.board.default)['metrics-overview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.reporting.board.default['metrics-overview'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetReportingBoardIdKey(
  args: InferRequestType<(typeof client.reporting.board)[':id']['$get']>,
) {
  return ['reporting', '/reporting/board/:id', args] as const
}

export function useGetReportingBoardId<TError = unknown>(
  args: InferRequestType<(typeof client.reporting.board)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportingBoardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reporting.board[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportingBoardId<TError = unknown>(
  args: InferRequestType<(typeof client.reporting.board)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportingBoardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reporting.board[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteReportingBoardIdKey() {
  return ['reporting', '/reporting/board/:id', 'DELETE'] as const
}

export function useDeleteReportingBoardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reporting.board)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReportingBoardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reporting.board)[':id']['$delete']> },
      ) => parseResponse(client.reporting.board[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchReportingBoardIdKey() {
  return ['reporting', '/reporting/board/:id', 'PATCH'] as const
}

export function usePatchReportingBoardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reporting.board)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchReportingBoardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reporting.board)[':id']['$patch']> },
      ) => parseResponse(client.reporting.board[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalKey(args: InferRequestType<typeof client.eval.$get>) {
  return ['eval', '/eval', args] as const
}

export function useGetEval<TError = unknown>(
  args: InferRequestType<typeof client.eval.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.eval.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEval<TError = unknown>(
  args: InferRequestType<typeof client.eval.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.eval.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostEvalKey() {
  return ['eval', '/eval', 'POST'] as const
}

export function usePostEval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.eval.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.eval.$post> }) =>
        parseResponse(client.eval.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalIdKey(args: InferRequestType<(typeof client.eval)[':id']['$get']>) {
  return ['eval', '/eval/:id', args] as const
}

export function useGetEvalId<TError = unknown>(
  args: InferRequestType<(typeof client.eval)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalId<TError = unknown>(
  args: InferRequestType<(typeof client.eval)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEvalIdKey() {
  return ['eval', '/eval/:id', 'DELETE'] as const
}

export function useDeleteEvalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEvalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.eval)[':id']['$delete']> }) =>
        parseResponse(client.eval[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEvalIdKey() {
  return ['eval', '/eval/:id', 'PATCH'] as const
}

export function usePatchEvalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEvalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.eval)[':id']['$patch']> }) =>
        parseResponse(client.eval[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalRunIdKey(
  args: InferRequestType<(typeof client.eval.run)[':id']['$get']>,
) {
  return ['eval', '/eval/run/:id', args] as const
}

export function useGetEvalRunId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.run)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalRunIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.run[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalRunId<TError = unknown>(
  args: InferRequestType<(typeof client.eval.run)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalRunIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eval.run[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEvalRunIdKey() {
  return ['eval', '/eval/run/:id', 'DELETE'] as const
}

export function useDeleteEvalRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eval.run)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEvalRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.eval.run)[':id']['$delete']> },
      ) => parseResponse(client.eval.run[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalRunKey(args: InferRequestType<typeof client.eval.run.$get>) {
  return ['eval', '/eval/run', args] as const
}

export function useGetEvalRun<TError = unknown>(
  args: InferRequestType<typeof client.eval.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalRunKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.eval.run.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvalRun<TError = unknown>(
  args: InferRequestType<typeof client.eval.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalRunKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.eval.run.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostEvalRunKey() {
  return ['eval', '/eval/run', 'POST'] as const
}

export function usePostEvalRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.eval.run.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.eval.run.$post> }) =>
        parseResponse(client.eval.run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObservabilityScorecardIdKey(
  args: InferRequestType<(typeof client.observability.scorecard)[':id']['$get']>,
) {
  return ['observability', '/observability/scorecard/:id', args] as const
}

export function useGetObservabilityScorecardId<TError = unknown>(
  args: InferRequestType<(typeof client.observability.scorecard)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$get']>>
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
        ? getGetObservabilityScorecardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.observability.scorecard[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObservabilityScorecardId<TError = unknown>(
  args: InferRequestType<(typeof client.observability.scorecard)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$get']>>
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
        ? getGetObservabilityScorecardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.observability.scorecard[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteObservabilityScorecardIdKey() {
  return ['observability', '/observability/scorecard/:id', 'DELETE'] as const
}

export function useDeleteObservabilityScorecardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.observability.scorecard)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteObservabilityScorecardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.observability.scorecard)[':id']['$delete']> },
      ) => parseResponse(client.observability.scorecard[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchObservabilityScorecardIdKey() {
  return ['observability', '/observability/scorecard/:id', 'PATCH'] as const
}

export function usePatchObservabilityScorecardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.observability.scorecard)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchObservabilityScorecardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.observability.scorecard)[':id']['$patch']> },
      ) => parseResponse(client.observability.scorecard[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObservabilityScorecardKey(
  args: InferRequestType<typeof client.observability.scorecard.$get>,
) {
  return ['observability', '/observability/scorecard', args] as const
}

export function useGetObservabilityScorecard<TError = unknown>(
  args: InferRequestType<typeof client.observability.scorecard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObservabilityScorecardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.observability.scorecard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObservabilityScorecard<TError = unknown>(
  args: InferRequestType<typeof client.observability.scorecard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObservabilityScorecardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.observability.scorecard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostObservabilityScorecardKey() {
  return ['observability', '/observability/scorecard', 'POST'] as const
}

export function usePostObservabilityScorecard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.observability.scorecard.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObservabilityScorecardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.observability.scorecard.$post> },
      ) => parseResponse(client.observability.scorecard.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProviderProviderResourceNameKey(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$get']>,
) {
  return ['provider', '/provider/:provider/:resourceName', args] as const
}

export function useGetProviderProviderResourceName<TError = unknown>(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$get']>>
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
        ? getGetProviderProviderResourceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.provider[':provider'][':resourceName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProviderProviderResourceName<TError = unknown>(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$get']>>
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
        ? getGetProviderProviderResourceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.provider[':provider'][':resourceName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProviderProviderResourceNameKey() {
  return ['provider', '/provider/:provider/:resourceName', 'POST'] as const
}

export function usePostProviderProviderResourceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProviderProviderResourceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$post']>
        },
      ) => parseResponse(client.provider[':provider'][':resourceName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProviderProviderResourceNameIdKey(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>,
) {
  return ['provider', '/provider/:provider/:resourceName/:id', args] as const
}

export function useGetProviderProviderResourceNameId<TError = unknown>(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>
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
        ? getGetProviderProviderResourceNameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.provider[':provider'][':resourceName'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProviderProviderResourceNameId<TError = unknown>(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>
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
        ? getGetProviderProviderResourceNameIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.provider[':provider'][':resourceName'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProviderProviderResourceNameIdKey() {
  return ['provider', '/provider/:provider/:resourceName/:id', 'DELETE'] as const
}

export function useDeleteProviderProviderResourceNameId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProviderProviderResourceNameIdKey()
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
            (typeof client.provider)[':provider'][':resourceName'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.provider[':provider'][':resourceName'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchProviderProviderResourceNameIdKey() {
  return ['provider', '/provider/:provider/:resourceName/:id', 'PATCH'] as const
}

export function usePatchProviderProviderResourceNameId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProviderProviderResourceNameIdKey()
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
            (typeof client.provider)[':provider'][':resourceName'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.provider[':provider'][':resourceName'][':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsKey() {
  return ['analytics', '/analytics', 'POST'] as const
}

export function usePostAnalytics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.analytics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.analytics.$post> }) =>
        parseResponse(client.analytics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
