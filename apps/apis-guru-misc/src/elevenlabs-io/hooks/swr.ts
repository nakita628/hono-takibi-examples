import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1HistoryKey(args: InferRequestType<typeof client.v1.history.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/history', keyArgs] as const
}

export function useGetV1History<TError = unknown>(
  args: InferRequestType<typeof client.v1.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1History<TError = unknown>(
  args: InferRequestType<typeof client.v1.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1HistoryDeleteKey() {
  return ['v1', '/v1/history/delete', 'POST'] as const
}

export function usePostV1HistoryDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.history.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HistoryDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.history.delete.$post> }) =>
        parseResponse(client.v1.history.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HistoryDownloadKey() {
  return ['v1', '/v1/history/download', 'POST'] as const
}

export function usePostV1HistoryDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.download.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.history.download.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HistoryDownloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.history.download.$post> }) =>
        parseResponse(client.v1.history.download.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1HistoryHistoryItemIdKey() {
  return ['v1', '/v1/history/:history_item_id', 'DELETE'] as const
}

export function useDeleteV1HistoryHistoryItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.history)[':history_item_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1HistoryHistoryItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.history)[':history_item_id']['$delete']> },
      ) => parseResponse(client.v1.history[':history_item_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1HistoryHistoryItemIdAudioKey(
  args: InferRequestType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/history/:history_item_id/audio', keyArgs] as const
}

export function useGetV1HistoryHistoryItemIdAudio<TError = unknown>(
  args: InferRequestType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HistoryHistoryItemIdAudioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.history[':history_item_id'].audio.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HistoryHistoryItemIdAudio<TError = unknown>(
  args: InferRequestType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HistoryHistoryItemIdAudioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.history[':history_item_id'].audio.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TextToSpeechVoiceIdKey() {
  return ['v1', '/v1/text-to-speech/:voice_id', 'POST'] as const
}

export function usePostV1TextToSpeechVoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['text-to-speech'][':voice_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TextToSpeechVoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['$post']> },
      ) => parseResponse(client.v1['text-to-speech'][':voice_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TextToSpeechVoiceIdStreamKey() {
  return ['v1', '/v1/text-to-speech/:voice_id/stream', 'POST'] as const
}

export function usePostV1TextToSpeechVoiceIdStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['text-to-speech'][':voice_id']['stream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['stream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TextToSpeechVoiceIdStreamKey()
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
            (typeof client.v1)['text-to-speech'][':voice_id']['stream']['$post']
          >
        },
      ) => parseResponse(client.v1['text-to-speech'][':voice_id'].stream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UserKey(args: InferRequestType<typeof client.v1.user.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/user', keyArgs] as const
}

export function useGetV1User<TError = unknown>(
  args: InferRequestType<typeof client.v1.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.user.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1User<TError = unknown>(
  args: InferRequestType<typeof client.v1.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.user.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV1UserSubscriptionKey(
  args: InferRequestType<typeof client.v1.user.subscription.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/user/subscription', keyArgs] as const
}

export function useGetV1UserSubscription<TError = unknown>(
  args: InferRequestType<typeof client.v1.user.subscription.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.subscription.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UserSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.subscription.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.user.subscription.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserSubscription<TError = unknown>(
  args: InferRequestType<typeof client.v1.user.subscription.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.subscription.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UserSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.subscription.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.user.subscription.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1VoicesKey(args: InferRequestType<typeof client.v1.voices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/voices', keyArgs] as const
}

export function useGetV1Voices<TError = unknown>(
  args: InferRequestType<typeof client.v1.voices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1VoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.voices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Voices<TError = unknown>(
  args: InferRequestType<typeof client.v1.voices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1VoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.voices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1VoicesAddKey() {
  return ['v1', '/v1/voices/add', 'POST'] as const
}

export function usePostV1VoicesAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.voices.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VoicesAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.voices.add.$post> }) =>
        parseResponse(client.v1.voices.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1VoicesSettingsDefaultKey() {
  return ['v1', '/v1/voices/settings/default'] as const
}

export function useGetV1VoicesSettingsDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.settings.default.$get>>>
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
        ? getGetV1VoicesSettingsDefaultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.settings.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.voices.settings.default.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VoicesSettingsDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.settings.default.$get>>>
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
        ? getGetV1VoicesSettingsDefaultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.settings.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.voices.settings.default.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1VoicesVoiceIdKey(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/voices/:voice_id', keyArgs] as const
}

export function useGetV1VoicesVoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1VoicesVoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.voices[':voice_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VoicesVoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1VoicesVoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.voices[':voice_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1VoicesVoiceIdKey() {
  return ['v1', '/v1/voices/:voice_id', 'DELETE'] as const
}

export function useDeleteV1VoicesVoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.voices)[':voice_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1VoicesVoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.voices)[':voice_id']['$delete']> },
      ) => parseResponse(client.v1.voices[':voice_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1VoicesVoiceIdEditKey() {
  return ['v1', '/v1/voices/:voice_id/edit', 'POST'] as const
}

export function usePostV1VoicesVoiceIdEdit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['edit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.voices)[':voice_id']['edit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VoicesVoiceIdEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.voices)[':voice_id']['edit']['$post']> },
      ) => parseResponse(client.v1.voices[':voice_id'].edit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1VoicesVoiceIdSamplesSampleIdKey() {
  return ['v1', '/v1/voices/:voice_id/samples/:sample_id', 'DELETE'] as const
}

export function useDeleteV1VoicesVoiceIdSamplesSampleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1VoicesVoiceIdSamplesSampleIdKey()
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
            (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.voices[':voice_id'].samples[':sample_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1VoicesVoiceIdSamplesSampleIdAudioKey(
  args: InferRequestType<
    (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/voices/:voice_id/samples/:sample_id/audio', keyArgs] as const
}

export function useGetV1VoicesVoiceIdSamplesSampleIdAudio<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
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
        ? getGetV1VoicesVoiceIdSamplesSampleIdAudioKey(args)
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
                (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
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
          client.v1.voices[':voice_id'].samples[':sample_id'].audio.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VoicesVoiceIdSamplesSampleIdAudio<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
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
        ? getGetV1VoicesVoiceIdSamplesSampleIdAudioKey(args)
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
                (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
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
          client.v1.voices[':voice_id'].samples[':sample_id'].audio.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VoicesVoiceIdSettingsKey(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/voices/:voice_id/settings', keyArgs] as const
}

export function useGetV1VoicesVoiceIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1VoicesVoiceIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.voices[':voice_id'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VoicesVoiceIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1VoicesVoiceIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.voices[':voice_id'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1VoicesVoiceIdSettingsEditKey() {
  return ['v1', '/v1/voices/:voice_id/settings/edit', 'POST'] as const
}

export function usePostV1VoicesVoiceIdSettingsEdit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['edit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['edit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VoicesVoiceIdSettingsEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['edit']['$post']>
        },
      ) => parseResponse(client.v1.voices[':voice_id'].settings.edit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
