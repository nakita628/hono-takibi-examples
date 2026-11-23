import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAgentsKey() {
  return ['agents'] as const
}

export function getAssistantsKey() {
  return ['assistants'] as const
}

export function getAudioKey() {
  return ['audio'] as const
}

export function getBatchesKey() {
  return ['batches'] as const
}

export function getChatKey() {
  return ['chat'] as const
}

export function getChatkitKey() {
  return ['chatkit'] as const
}

export function getCompletionsKey() {
  return ['completions'] as const
}

export function getContainersKey() {
  return ['containers'] as const
}

export function getContentProvenanceChecksKey() {
  return ['content_provenance_checks'] as const
}

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getDecisionsKey() {
  return ['decisions'] as const
}

export function getEmbeddingsKey() {
  return ['embeddings'] as const
}

export function getEvalsKey() {
  return ['evals'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getFineTuningKey() {
  return ['fine_tuning'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getLiveKey() {
  return ['live'] as const
}

export function getModelsKey() {
  return ['models'] as const
}

export function getModerationsKey() {
  return ['moderations'] as const
}

export function getOrganizationKey() {
  return ['organization'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getRealtimeKey() {
  return ['realtime'] as const
}

export function getResponsesKey() {
  return ['responses'] as const
}

export function getResponsesBetaTrueKey() {
  return ['responses?beta=true'] as const
}

export function getSafetyKey() {
  return ['safety'] as const
}

export function getSkillsKey() {
  return ['skills'] as const
}

export function getThreadsKey() {
  return ['threads'] as const
}

export function getUploadsKey() {
  return ['uploads'] as const
}

export function getVaultsKey() {
  return ['vaults'] as const
}

export function getVectorStoresKey() {
  return ['vector_stores'] as const
}

export function getVideosKey() {
  return ['videos'] as const
}

export function getWebhookEndpointsKey() {
  return ['webhook_endpoints'] as const
}

export function getWebhookEventTypesKey() {
  return ['webhook_event_types'] as const
}

export function getGetAssistantsKey(args: InferRequestType<typeof client.assistants.$get>) {
  return ['assistants', '/assistants', args] as const
}

export function useGetAssistants<TError = unknown>(
  args: InferRequestType<typeof client.assistants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssistantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assistants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssistants<TError = unknown>(
  args: InferRequestType<typeof client.assistants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssistantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assistants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAssistantsKey() {
  return ['assistants', '/assistants', 'POST'] as const
}

export function usePostAssistants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.assistants.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssistantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assistants.$post> }) =>
        parseResponse(client.assistants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssistantsAssistantIdKey(
  args: InferRequestType<(typeof client.assistants)[':assistant_id']['$get']>,
) {
  return ['assistants', '/assistants/:assistant_id', args] as const
}

export function useGetAssistantsAssistantId<TError = unknown>(
  args: InferRequestType<(typeof client.assistants)[':assistant_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssistantsAssistantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assistants[':assistant_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssistantsAssistantId<TError = unknown>(
  args: InferRequestType<(typeof client.assistants)[':assistant_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssistantsAssistantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assistants[':assistant_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAssistantsAssistantIdKey() {
  return ['assistants', '/assistants/:assistant_id', 'POST'] as const
}

export function usePostAssistantsAssistantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assistants)[':assistant_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssistantsAssistantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assistants)[':assistant_id']['$post']> },
      ) => parseResponse(client.assistants[':assistant_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAssistantsAssistantIdKey() {
  return ['assistants', '/assistants/:assistant_id', 'DELETE'] as const
}

export function useDeleteAssistantsAssistantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assistants)[':assistant_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssistantsAssistantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assistants)[':assistant_id']['$delete']> },
      ) => parseResponse(client.assistants[':assistant_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAudioSpeechKey() {
  return ['audio', '/audio/speech', 'POST'] as const
}

export function usePostAudioSpeech<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.speech.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.audio.speech.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudioSpeechKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audio.speech.$post> }) =>
        parseResponse(client.audio.speech.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAudioTranscriptionsKey() {
  return ['audio', '/audio/transcriptions', 'POST'] as const
}

export function usePostAudioTranscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audio.transcriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.audio.transcriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudioTranscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.audio.transcriptions.$post> },
      ) => parseResponse(client.audio.transcriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAudioTranslationsKey() {
  return ['audio', '/audio/translations', 'POST'] as const
}

export function usePostAudioTranslations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.translations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.audio.translations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudioTranslationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audio.translations.$post> }) =>
        parseResponse(client.audio.translations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAudioVoiceConsentsKey(
  args: InferRequestType<typeof client.audio.voice_consents.$get>,
) {
  return ['audio', '/audio/voice_consents', args] as const
}

export function useGetAudioVoiceConsents<TError = unknown>(
  args: InferRequestType<typeof client.audio.voice_consents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAudioVoiceConsentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audio.voice_consents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioVoiceConsents<TError = unknown>(
  args: InferRequestType<typeof client.audio.voice_consents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAudioVoiceConsentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audio.voice_consents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAudioVoiceConsentsKey() {
  return ['audio', '/audio/voice_consents', 'POST'] as const
}

export function usePostAudioVoiceConsents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.audio.voice_consents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudioVoiceConsentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.audio.voice_consents.$post> },
      ) => parseResponse(client.audio.voice_consents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAudioVoiceConsentsConsentIdKey(
  args: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$get']>,
) {
  return ['audio', '/audio/voice_consents/:consent_id', args] as const
}

export function useGetAudioVoiceConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAudioVoiceConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audio.voice_consents[':consent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioVoiceConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAudioVoiceConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audio.voice_consents[':consent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAudioVoiceConsentsConsentIdKey() {
  return ['audio', '/audio/voice_consents/:consent_id', 'POST'] as const
}

export function usePostAudioVoiceConsentsConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudioVoiceConsentsConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$post']> },
      ) => parseResponse(client.audio.voice_consents[':consent_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAudioVoiceConsentsConsentIdKey() {
  return ['audio', '/audio/voice_consents/:consent_id', 'DELETE'] as const
}

export function useDeleteAudioVoiceConsentsConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAudioVoiceConsentsConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$delete']>
        },
      ) => parseResponse(client.audio.voice_consents[':consent_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAudioVoicesKey() {
  return ['audio', '/audio/voices', 'POST'] as const
}

export function usePostAudioVoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.voices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.audio.voices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudioVoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audio.voices.$post> }) =>
        parseResponse(client.audio.voices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAudioVoicesVoiceIdKey() {
  return ['audio', '/audio/voices/:voice_id', 'DELETE'] as const
}

export function useDeleteAudioVoicesVoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audio.voices)[':voice_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audio.voices)[':voice_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAudioVoicesVoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.audio.voices)[':voice_id']['$delete']> },
      ) => parseResponse(client.audio.voices[':voice_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBatchesKey(args: InferRequestType<typeof client.batches.$get>) {
  return ['batches', '/batches', args] as const
}

export function useGetBatches<TError = unknown>(
  args: InferRequestType<typeof client.batches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.batches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBatches<TError = unknown>(
  args: InferRequestType<typeof client.batches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.batches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostBatchesKey() {
  return ['batches', '/batches', 'POST'] as const
}

export function usePostBatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.batches.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.batches.$post> }) =>
        parseResponse(client.batches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBatchesBatchIdKey(
  args: InferRequestType<(typeof client.batches)[':batch_id']['$get']>,
) {
  return ['batches', '/batches/:batch_id', args] as const
}

export function useGetBatchesBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.batches)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchesBatchIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.batches[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBatchesBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.batches)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchesBatchIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.batches[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBatchesBatchIdCancelKey() {
  return ['batches', '/batches/:batch_id/cancel', 'POST'] as const
}

export function usePostBatchesBatchIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.batches)[':batch_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.batches)[':batch_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchesBatchIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.batches)[':batch_id']['cancel']['$post']> },
      ) => parseResponse(client.batches[':batch_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatCompletionsKey(
  args: InferRequestType<typeof client.chat.completions.$get>,
) {
  return ['chat', '/chat/completions', args] as const
}

export function useGetChatCompletions<TError = unknown>(
  args: InferRequestType<typeof client.chat.completions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChatCompletionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.completions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatCompletions<TError = unknown>(
  args: InferRequestType<typeof client.chat.completions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChatCompletionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.completions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChatCompletionsKey() {
  return ['chat', '/chat/completions', 'POST'] as const
}

export function usePostChatCompletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chat.completions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatCompletionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.completions.$post> }) =>
        parseResponse(client.chat.completions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatCompletionsCompletionIdKey(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['$get']>,
) {
  return ['chat', '/chat/completions/:completion_id', args] as const
}

export function useGetChatCompletionsCompletionId<TError = unknown>(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChatCompletionsCompletionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chat.completions[':completion_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatCompletionsCompletionId<TError = unknown>(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChatCompletionsCompletionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chat.completions[':completion_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChatCompletionsCompletionIdKey() {
  return ['chat', '/chat/completions/:completion_id', 'POST'] as const
}

export function usePostChatCompletionsCompletionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.chat.completions)[':completion_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatCompletionsCompletionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.chat.completions)[':completion_id']['$post']> },
      ) => parseResponse(client.chat.completions[':completion_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChatCompletionsCompletionIdKey() {
  return ['chat', '/chat/completions/:completion_id', 'DELETE'] as const
}

export function useDeleteChatCompletionsCompletionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.chat.completions)[':completion_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChatCompletionsCompletionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.chat.completions)[':completion_id']['$delete']> },
      ) => parseResponse(client.chat.completions[':completion_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatCompletionsCompletionIdMessagesKey(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>,
) {
  return ['chat', '/chat/completions/:completion_id/messages', args] as const
}

export function useGetChatCompletionsCompletionIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>
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
        ? getGetChatCompletionsCompletionIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chat.completions[':completion_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatCompletionsCompletionIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>
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
        ? getGetChatCompletionsCompletionIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chat.completions[':completion_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompletionsKey() {
  return ['completions', '/completions', 'POST'] as const
}

export function usePostCompletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.completions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.completions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompletionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.completions.$post> }) =>
        parseResponse(client.completions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContainersKey(args: InferRequestType<typeof client.containers.$get>) {
  return ['containers', '/containers', args] as const
}

export function useGetContainers<TError = unknown>(
  args: InferRequestType<typeof client.containers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContainersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.containers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContainers<TError = unknown>(
  args: InferRequestType<typeof client.containers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContainersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.containers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContainersKey() {
  return ['containers', '/containers', 'POST'] as const
}

export function usePostContainers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.containers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContainersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.containers.$post> }) =>
        parseResponse(client.containers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContainersContainerIdKey(
  args: InferRequestType<(typeof client.containers)[':container_id']['$get']>,
) {
  return ['containers', '/containers/:container_id', args] as const
}

export function useGetContainersContainerId<TError = unknown>(
  args: InferRequestType<(typeof client.containers)[':container_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.containers)[':container_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContainersContainerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.containers)[':container_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.containers[':container_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContainersContainerId<TError = unknown>(
  args: InferRequestType<(typeof client.containers)[':container_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.containers)[':container_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContainersContainerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.containers)[':container_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.containers[':container_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteContainersContainerIdKey() {
  return ['containers', '/containers/:container_id', 'DELETE'] as const
}

export function useDeleteContainersContainerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.containers)[':container_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.containers)[':container_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContainersContainerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.containers)[':container_id']['$delete']> },
      ) => parseResponse(client.containers[':container_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContainersContainerIdFilesKey(
  args: InferRequestType<(typeof client.containers)[':container_id']['files']['$get']>,
) {
  return ['containers', '/containers/:container_id/files', args] as const
}

export function useGetContainersContainerIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.containers)[':container_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContainersContainerIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.containers[':container_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContainersContainerIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.containers)[':container_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContainersContainerIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.containers[':container_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContainersContainerIdFilesKey() {
  return ['containers', '/containers/:container_id/files', 'POST'] as const
}

export function usePostContainersContainerIdFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.containers)[':container_id']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContainersContainerIdFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.containers)[':container_id']['files']['$post']> },
      ) => parseResponse(client.containers[':container_id'].files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContainersContainerIdFilesFileIdKey(
  args: InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>,
) {
  return ['containers', '/containers/:container_id/files/:file_id', args] as const
}

export function useGetContainersContainerIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>
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
        ? getGetContainersContainerIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.containers[':container_id'].files[':file_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContainersContainerIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>
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
        ? getGetContainersContainerIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.containers[':container_id'].files[':file_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteContainersContainerIdFilesFileIdKey() {
  return ['containers', '/containers/:container_id/files/:file_id', 'DELETE'] as const
}

export function useDeleteContainersContainerIdFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.containers)[':container_id']['files'][':file_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContainersContainerIdFilesFileIdKey()
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
            (typeof client.containers)[':container_id']['files'][':file_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.containers[':container_id'].files[':file_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContainersContainerIdFilesFileIdContentKey(
  args: InferRequestType<
    (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
  >,
) {
  return ['containers', '/containers/:container_id/files/:file_id/content', args] as const
}

export function useGetContainersContainerIdFilesFileIdContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
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
        ? getGetContainersContainerIdFilesFileIdContentKey(args)
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
                (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
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
          client.containers[':container_id'].files[':file_id'].content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContainersContainerIdFilesFileIdContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
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
        ? getGetContainersContainerIdFilesFileIdContentKey(args)
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
                (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
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
          client.containers[':container_id'].files[':file_id'].content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConversationIdItemsKey(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$get']>,
) {
  return ['conversations', '/conversations/:conversation_id/items', args] as const
}

export function useGetConversationsConversationIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsConversationIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':conversation_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversationIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsConversationIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':conversation_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsConversationIdItemsKey() {
  return ['conversations', '/conversations/:conversation_id/items', 'POST'] as const
}

export function usePostConversationsConversationIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$post']>
        },
      ) => parseResponse(client.conversations[':conversation_id'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConversationIdItemsItemIdKey(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
  >,
) {
  return ['conversations', '/conversations/:conversation_id/items/:item_id', args] as const
}

export function useGetConversationsConversationIdItemsItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
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
        ? getGetConversationsConversationIdItemsItemIdKey(args)
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
                (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
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
          client.conversations[':conversation_id'].items[':item_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversationIdItemsItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
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
        ? getGetConversationsConversationIdItemsItemIdKey(args)
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
                (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
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
          client.conversations[':conversation_id'].items[':item_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteConversationsConversationIdItemsItemIdKey() {
  return ['conversations', '/conversations/:conversation_id/items/:item_id', 'DELETE'] as const
}

export function useDeleteConversationsConversationIdItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)[':conversation_id']['items'][':item_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)[':conversation_id']['items'][':item_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConversationIdItemsItemIdKey()
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
            (typeof client.conversations)[':conversation_id']['items'][':item_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':conversation_id'].items[':item_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEmbeddingsKey() {
  return ['embeddings', '/embeddings', 'POST'] as const
}

export function usePostEmbeddings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.embeddings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.embeddings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmbeddingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.embeddings.$post> }) =>
        parseResponse(client.embeddings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalsKey(args: InferRequestType<typeof client.evals.$get>) {
  return ['evals', '/evals', args] as const
}

export function useGetEvals<TError = unknown>(
  args: InferRequestType<typeof client.evals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.evals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvals<TError = unknown>(
  args: InferRequestType<typeof client.evals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.evals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostEvalsKey() {
  return ['evals', '/evals', 'POST'] as const
}

export function usePostEvals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.evals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.evals.$post> }) =>
        parseResponse(client.evals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalsEvalIdKey(
  args: InferRequestType<(typeof client.evals)[':eval_id']['$get']>,
) {
  return ['evals', '/evals/:eval_id', args] as const
}

export function useGetEvalsEvalId<TError = unknown>(
  args: InferRequestType<(typeof client.evals)[':eval_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalsEvalIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evals[':eval_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalsEvalId<TError = unknown>(
  args: InferRequestType<(typeof client.evals)[':eval_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvalsEvalIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evals[':eval_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEvalsEvalIdKey() {
  return ['evals', '/evals/:eval_id', 'POST'] as const
}

export function usePostEvalsEvalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.evals)[':eval_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalsEvalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.evals)[':eval_id']['$post']> },
      ) => parseResponse(client.evals[':eval_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEvalsEvalIdKey() {
  return ['evals', '/evals/:eval_id', 'DELETE'] as const
}

export function useDeleteEvalsEvalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.evals)[':eval_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEvalsEvalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.evals)[':eval_id']['$delete']> },
      ) => parseResponse(client.evals[':eval_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalsEvalIdRunsKey(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs']['$get']>,
) {
  return ['evals', '/evals/:eval_id/runs', args] as const
}

export function useGetEvalsEvalIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalsEvalIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evals[':eval_id'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalsEvalIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalsEvalIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evals[':eval_id'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEvalsEvalIdRunsKey() {
  return ['evals', '/evals/:eval_id/runs', 'POST'] as const
}

export function usePostEvalsEvalIdRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.evals)[':eval_id']['runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalsEvalIdRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.evals)[':eval_id']['runs']['$post']> },
      ) => parseResponse(client.evals[':eval_id'].runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalsEvalIdRunsRunIdKey(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>,
) {
  return ['evals', '/evals/:eval_id/runs/:run_id', args] as const
}

export function useGetEvalsEvalIdRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalsEvalIdRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evals[':eval_id'].runs[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalsEvalIdRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvalsEvalIdRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evals[':eval_id'].runs[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEvalsEvalIdRunsRunIdKey() {
  return ['evals', '/evals/:eval_id/runs/:run_id', 'DELETE'] as const
}

export function useDeleteEvalsEvalIdRunsRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEvalsEvalIdRunsRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$delete']>
        },
      ) => parseResponse(client.evals[':eval_id'].runs[':run_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEvalsEvalIdRunsRunIdCancelKey() {
  return ['evals', '/evals/:eval_id/runs/:run_id/cancel', 'POST'] as const
}

export function usePostEvalsEvalIdRunsRunIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvalsEvalIdRunsRunIdCancelKey()
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
            (typeof client.evals)[':eval_id']['runs'][':run_id']['cancel']['$post']
          >
        },
      ) => parseResponse(client.evals[':eval_id'].runs[':run_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvalsEvalIdRunsRunIdOutputItemsKey(
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
  >,
) {
  return ['evals', '/evals/:eval_id/runs/:run_id/output_items', args] as const
}

export function useGetEvalsEvalIdRunsRunIdOutputItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
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
        ? getGetEvalsEvalIdRunsRunIdOutputItemsKey(args)
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
                (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
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
          client.evals[':eval_id'].runs[':run_id'].output_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalsEvalIdRunsRunIdOutputItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
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
        ? getGetEvalsEvalIdRunsRunIdOutputItemsKey(args)
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
                (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
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
          client.evals[':eval_id'].runs[':run_id'].output_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEvalsEvalIdRunsRunIdOutputItemsOutputItemIdKey(
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
  >,
) {
  return ['evals', '/evals/:eval_id/runs/:run_id/output_items/:output_item_id', args] as const
}

export function useGetEvalsEvalIdRunsRunIdOutputItemsOutputItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
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
        ? getGetEvalsEvalIdRunsRunIdOutputItemsOutputItemIdKey(args)
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
                (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
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
          client.evals[':eval_id'].runs[':run_id'].output_items[':output_item_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvalsEvalIdRunsRunIdOutputItemsOutputItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
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
        ? getGetEvalsEvalIdRunsRunIdOutputItemsOutputItemIdKey(args)
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
                (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
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
          client.evals[':eval_id'].runs[':run_id'].output_items[':output_item_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFilesKey(args: InferRequestType<typeof client.files.$get>) {
  return ['files', '/files', args] as const
}

export function useGetFiles<TError = unknown>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFiles<TError = unknown>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFilesKey() {
  return ['files', '/files', 'POST'] as const
}

export function usePostFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.files.$post> }) =>
        parseResponse(client.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdKey(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
) {
  return ['files', '/files/:file_id', args] as const
}

export function useGetFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFilesFileIdKey() {
  return ['files', '/files/:file_id', 'DELETE'] as const
}

export function useDeleteFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':file_id']['$delete']> },
      ) => parseResponse(client.files[':file_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdContentKey(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
) {
  return ['files', '/files/:file_id/content', args] as const
}

export function useGetFilesFileIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFineTuningAlphaGradersRunKey() {
  return ['fine_tuning', '/fine_tuning/alpha/graders/run', 'POST'] as const
}

export function usePostFineTuningAlphaGradersRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.alpha.graders.run.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.fine_tuning.alpha.graders.run.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFineTuningAlphaGradersRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.fine_tuning.alpha.graders.run.$post> },
      ) => parseResponse(client.fine_tuning.alpha.graders.run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFineTuningAlphaGradersValidateKey() {
  return ['fine_tuning', '/fine_tuning/alpha/graders/validate', 'POST'] as const
}

export function usePostFineTuningAlphaGradersValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.fine_tuning.alpha.graders.validate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.fine_tuning.alpha.graders.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFineTuningAlphaGradersValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.fine_tuning.alpha.graders.validate.$post> },
      ) => parseResponse(client.fine_tuning.alpha.graders.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFineTuningCheckpointsFineTunedModelCheckpointPermissionsKey(
  args: InferRequestType<
    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
  >,
) {
  return [
    'fine_tuning',
    '/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions',
    args,
  ] as const
}

export function useGetFineTuningCheckpointsFineTunedModelCheckpointPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
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
        ? getGetFineTuningCheckpointsFineTunedModelCheckpointPermissionsKey(args)
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
                (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
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
          client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFineTuningCheckpointsFineTunedModelCheckpointPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
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
        ? getGetFineTuningCheckpointsFineTunedModelCheckpointPermissionsKey(args)
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
                (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
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
          client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostFineTuningCheckpointsFineTunedModelCheckpointPermissionsKey() {
  return [
    'fine_tuning',
    '/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions',
    'POST',
  ] as const
}

export function usePostFineTuningCheckpointsFineTunedModelCheckpointPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFineTuningCheckpointsFineTunedModelCheckpointPermissionsKey()
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
            (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionIdKey() {
  return [
    'fine_tuning',
    '/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions/:permission_id',
    'DELETE',
  ] as const
}

export function useDeleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions'][':permission_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions'][':permission_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionIdKey()
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
            (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions'][':permission_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions[
            ':permission_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFineTuningJobsKey(
  args: InferRequestType<typeof client.fine_tuning.jobs.$get>,
) {
  return ['fine_tuning', '/fine_tuning/jobs', args] as const
}

export function useGetFineTuningJobs<TError = unknown>(
  args: InferRequestType<typeof client.fine_tuning.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFineTuningJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fine_tuning.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFineTuningJobs<TError = unknown>(
  args: InferRequestType<typeof client.fine_tuning.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFineTuningJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fine_tuning.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFineTuningJobsKey() {
  return ['fine_tuning', '/fine_tuning/jobs', 'POST'] as const
}

export function usePostFineTuningJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fine_tuning.jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFineTuningJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fine_tuning.jobs.$post> }) =>
        parseResponse(client.fine_tuning.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFineTuningJobsFineTuningJobIdKey(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>,
) {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id', args] as const
}

export function useGetFineTuningJobsFineTuningJobId<TError = unknown>(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFineTuningJobsFineTuningJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fine_tuning.jobs[':fine_tuning_job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFineTuningJobsFineTuningJobId<TError = unknown>(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFineTuningJobsFineTuningJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fine_tuning.jobs[':fine_tuning_job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFineTuningJobsFineTuningJobIdCancelKey() {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/cancel', 'POST'] as const
}

export function usePostFineTuningJobsFineTuningJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFineTuningJobsFineTuningJobIdCancelKey()
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
            (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.fine_tuning.jobs[':fine_tuning_job_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFineTuningJobsFineTuningJobIdCheckpointsKey(
  args: InferRequestType<
    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
  >,
) {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/checkpoints', args] as const
}

export function useGetFineTuningJobsFineTuningJobIdCheckpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
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
        ? getGetFineTuningJobsFineTuningJobIdCheckpointsKey(args)
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
                (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
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
          client.fine_tuning.jobs[':fine_tuning_job_id'].checkpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFineTuningJobsFineTuningJobIdCheckpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
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
        ? getGetFineTuningJobsFineTuningJobIdCheckpointsKey(args)
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
                (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
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
          client.fine_tuning.jobs[':fine_tuning_job_id'].checkpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFineTuningJobsFineTuningJobIdEventsKey(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>,
) {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/events', args] as const
}

export function useGetFineTuningJobsFineTuningJobIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>
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
        ? getGetFineTuningJobsFineTuningJobIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.fine_tuning.jobs[':fine_tuning_job_id'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFineTuningJobsFineTuningJobIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>
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
        ? getGetFineTuningJobsFineTuningJobIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.fine_tuning.jobs[':fine_tuning_job_id'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostFineTuningJobsFineTuningJobIdPauseKey() {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/pause', 'POST'] as const
}

export function usePostFineTuningJobsFineTuningJobIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['pause']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFineTuningJobsFineTuningJobIdPauseKey()
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
            (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.fine_tuning.jobs[':fine_tuning_job_id'].pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFineTuningJobsFineTuningJobIdResumeKey() {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/resume', 'POST'] as const
}

export function usePostFineTuningJobsFineTuningJobIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['resume']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFineTuningJobsFineTuningJobIdResumeKey()
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
            (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['resume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.fine_tuning.jobs[':fine_tuning_job_id'].resume.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostImagesEditsKey() {
  return ['images', '/images/edits', 'POST'] as const
}

export function usePostImagesEdits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.edits.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.images.edits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImagesEditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.images.edits.$post> }) =>
        parseResponse(client.images.edits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImagesGenerationsKey() {
  return ['images', '/images/generations', 'POST'] as const
}

export function usePostImagesGenerations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.generations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.images.generations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImagesGenerationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.images.generations.$post> }) =>
        parseResponse(client.images.generations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImagesVariationsKey() {
  return ['images', '/images/variations', 'POST'] as const
}

export function usePostImagesVariations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.variations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.images.variations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImagesVariationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.images.variations.$post> }) =>
        parseResponse(client.images.variations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiveSessionsKey() {
  return ['live', '/live/sessions', 'POST'] as const
}

export function usePostLiveSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.live.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.live.sessions.$post> }) =>
        parseResponse(client.live.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiveSessionsSessionIdAcceptKey() {
  return ['live', '/live/sessions/:session_id/accept', 'POST'] as const
}

export function usePostLiveSessionsSessionIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.live.sessions)[':session_id']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveSessionsSessionIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.live.sessions)[':session_id']['accept']['$post']>
        },
      ) => parseResponse(client.live.sessions[':session_id'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiveSessionsSessionIdForkKey() {
  return ['live', '/live/sessions/:session_id/fork', 'POST'] as const
}

export function usePostLiveSessionsSessionIdFork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['fork']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.live.sessions)[':session_id']['fork']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveSessionsSessionIdForkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.live.sessions)[':session_id']['fork']['$post']> },
      ) => parseResponse(client.live.sessions[':session_id'].fork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiveSessionsSessionIdHangupKey() {
  return ['live', '/live/sessions/:session_id/hangup', 'POST'] as const
}

export function usePostLiveSessionsSessionIdHangup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['hangup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.live.sessions)[':session_id']['hangup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveSessionsSessionIdHangupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.live.sessions)[':session_id']['hangup']['$post']>
        },
      ) => parseResponse(client.live.sessions[':session_id'].hangup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiveSessionsSessionIdReferKey() {
  return ['live', '/live/sessions/:session_id/refer', 'POST'] as const
}

export function usePostLiveSessionsSessionIdRefer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['refer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.live.sessions)[':session_id']['refer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveSessionsSessionIdReferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.live.sessions)[':session_id']['refer']['$post']>
        },
      ) => parseResponse(client.live.sessions[':session_id'].refer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiveSessionsSessionIdRejectKey() {
  return ['live', '/live/sessions/:session_id/reject', 'POST'] as const
}

export function usePostLiveSessionsSessionIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['reject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.live.sessions)[':session_id']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveSessionsSessionIdRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.live.sessions)[':session_id']['reject']['$post']>
        },
      ) => parseResponse(client.live.sessions[':session_id'].reject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModelsKey() {
  return ['models', '/models'] as const
}

export function useGetModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetModelsModelKey(
  args: InferRequestType<(typeof client.models)[':model']['$get']>,
) {
  return ['models', '/models/:model', args] as const
}

export function useGetModelsModel<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':model']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsModelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':model'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModelsModel<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':model']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsModelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':model'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteModelsModelKey() {
  return ['models', '/models/:model', 'DELETE'] as const
}

export function useDeleteModelsModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':model']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModelsModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.models)[':model']['$delete']> },
      ) => parseResponse(client.models[':model'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModerationsKey() {
  return ['moderations', '/moderations', 'POST'] as const
}

export function usePostModerations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.moderations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModerationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.moderations.$post> }) =>
        parseResponse(client.moderations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationAdminApiKeysKey(
  args: InferRequestType<typeof client.organization.admin_api_keys.$get>,
) {
  return ['organization', '/organization/admin_api_keys', args] as const
}

export function useGetOrganizationAdminApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.organization.admin_api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationAdminApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.admin_api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationAdminApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.organization.admin_api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationAdminApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.admin_api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationAdminApiKeysKey() {
  return ['organization', '/organization/admin_api_keys', 'POST'] as const
}

export function usePostOrganizationAdminApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.admin_api_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationAdminApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.admin_api_keys.$post> },
      ) => parseResponse(client.organization.admin_api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationAdminApiKeysKeyIdKey(
  args: InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>,
) {
  return ['organization', '/organization/admin_api_keys/:key_id', args] as const
}

export function useGetOrganizationAdminApiKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationAdminApiKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.admin_api_keys[':key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationAdminApiKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationAdminApiKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.admin_api_keys[':key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationAdminApiKeysKeyIdKey() {
  return ['organization', '/organization/admin_api_keys/:key_id', 'DELETE'] as const
}

export function useDeleteOrganizationAdminApiKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationAdminApiKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$delete']>
        },
      ) => parseResponse(client.organization.admin_api_keys[':key_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationAuditLogsKey(
  args: InferRequestType<typeof client.organization.audit_logs.$get>,
) {
  return ['organization', '/organization/audit_logs', args] as const
}

export function useGetOrganizationAuditLogs<TError = unknown>(
  args: InferRequestType<typeof client.organization.audit_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.audit_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationAuditLogs<TError = unknown>(
  args: InferRequestType<typeof client.organization.audit_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.audit_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationCertificatesKey(
  args: InferRequestType<typeof client.organization.certificates.$get>,
) {
  return ['organization', '/organization/certificates', args] as const
}

export function useGetOrganizationCertificates<TError = unknown>(
  args: InferRequestType<typeof client.organization.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationCertificates<TError = unknown>(
  args: InferRequestType<typeof client.organization.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationCertificatesKey() {
  return ['organization', '/organization/certificates', 'POST'] as const
}

export function usePostOrganizationCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.certificates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.certificates.$post> },
      ) => parseResponse(client.organization.certificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationCertificatesActivateKey() {
  return ['organization', '/organization/certificates/activate', 'POST'] as const
}

export function usePostOrganizationCertificatesActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organization.certificates.activate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.certificates.activate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationCertificatesActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.certificates.activate.$post> },
      ) => parseResponse(client.organization.certificates.activate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationCertificatesDeactivateKey() {
  return ['organization', '/organization/certificates/deactivate', 'POST'] as const
}

export function usePostOrganizationCertificatesDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organization.certificates.deactivate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.certificates.deactivate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationCertificatesDeactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.organization.certificates.deactivate.$post> },
      ) => parseResponse(client.organization.certificates.deactivate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationCertificatesCertificateIdKey(
  args: InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$get']>,
) {
  return ['organization', '/organization/certificates/:certificate_id', args] as const
}

export function useGetOrganizationCertificatesCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.certificates)[':certificate_id']['$get']>
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
        ? getGetOrganizationCertificatesCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.certificates)[':certificate_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization.certificates[':certificate_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationCertificatesCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.certificates)[':certificate_id']['$get']>
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
        ? getGetOrganizationCertificatesCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.certificates)[':certificate_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization.certificates[':certificate_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationCertificatesCertificateIdKey() {
  return ['organization', '/organization/certificates/:certificate_id', 'POST'] as const
}

export function usePostOrganizationCertificatesCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.certificates)[':certificate_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationCertificatesCertificateIdKey()
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
            (typeof client.organization.certificates)[':certificate_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.certificates[':certificate_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationCertificatesCertificateIdKey() {
  return ['organization', '/organization/certificates/:certificate_id', 'DELETE'] as const
}

export function useDeleteOrganizationCertificatesCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organization.certificates)[':certificate_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationCertificatesCertificateIdKey()
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
            (typeof client.organization.certificates)[':certificate_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.certificates[':certificate_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationCostsKey(
  args: InferRequestType<typeof client.organization.costs.$get>,
) {
  return ['organization', '/organization/costs', args] as const
}

export function useGetOrganizationCosts<TError = unknown>(
  args: InferRequestType<typeof client.organization.costs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationCostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.costs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationCosts<TError = unknown>(
  args: InferRequestType<typeof client.organization.costs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationCostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.costs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationDataRetentionKey() {
  return ['organization', '/organization/data_retention'] as const
}

export function useGetOrganizationDataRetention<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$get>>>
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
        ? getGetOrganizationDataRetentionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.data_retention.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationDataRetention<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$get>>>
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
        ? getGetOrganizationDataRetentionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.data_retention.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationDataRetentionKey() {
  return ['organization', '/organization/data_retention', 'POST'] as const
}

export function usePostOrganizationDataRetention<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.data_retention.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationDataRetentionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.data_retention.$post> },
      ) => parseResponse(client.organization.data_retention.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationGroupsKey(
  args: InferRequestType<typeof client.organization.groups.$get>,
) {
  return ['organization', '/organization/groups', args] as const
}

export function useGetOrganizationGroups<TError = unknown>(
  args: InferRequestType<typeof client.organization.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationGroups<TError = unknown>(
  args: InferRequestType<typeof client.organization.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationGroupsKey() {
  return ['organization', '/organization/groups', 'POST'] as const
}

export function usePostOrganizationGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organization.groups.$post> }) =>
        parseResponse(client.organization.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationGroupsGroupIdKey(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['$get']>,
) {
  return ['organization', '/organization/groups/:group_id', args] as const
}

export function useGetOrganizationGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationGroupsGroupIdKey() {
  return ['organization', '/organization/groups/:group_id', 'POST'] as const
}

export function usePostOrganizationGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.groups)[':group_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organization.groups)[':group_id']['$post']> },
      ) => parseResponse(client.organization.groups[':group_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationGroupsGroupIdKey() {
  return ['organization', '/organization/groups/:group_id', 'DELETE'] as const
}

export function useDeleteOrganizationGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.groups)[':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organization.groups)[':group_id']['$delete']> },
      ) => parseResponse(client.organization.groups[':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationGroupsGroupIdRolesKey(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$get']>,
) {
  return ['organization', '/organization/groups/:group_id/roles', args] as const
}

export function useGetOrganizationGroupsGroupIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationGroupsGroupIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.groups[':group_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationGroupsGroupIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationGroupsGroupIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.groups[':group_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationGroupsGroupIdRolesKey() {
  return ['organization', '/organization/groups/:group_id/roles', 'POST'] as const
}

export function usePostOrganizationGroupsGroupIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationGroupsGroupIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$post']>
        },
      ) => parseResponse(client.organization.groups[':group_id'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationGroupsGroupIdRolesRoleIdKey(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
  >,
) {
  return ['organization', '/organization/groups/:group_id/roles/:role_id', args] as const
}

export function useGetOrganizationGroupsGroupIdRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
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
        ? getGetOrganizationGroupsGroupIdRolesRoleIdKey(args)
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
                (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
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
          client.organization.groups[':group_id'].roles[':role_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationGroupsGroupIdRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
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
        ? getGetOrganizationGroupsGroupIdRolesRoleIdKey(args)
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
                (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
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
          client.organization.groups[':group_id'].roles[':role_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationGroupsGroupIdRolesRoleIdKey() {
  return ['organization', '/organization/groups/:group_id/roles/:role_id', 'DELETE'] as const
}

export function useDeleteOrganizationGroupsGroupIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationGroupsGroupIdRolesRoleIdKey()
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
            (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.groups[':group_id'].roles[':role_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationGroupsGroupIdUsersKey(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$get']>,
) {
  return ['organization', '/organization/groups/:group_id/users', args] as const
}

export function useGetOrganizationGroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationGroupsGroupIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.groups[':group_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationGroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationGroupsGroupIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.groups[':group_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationGroupsGroupIdUsersKey() {
  return ['organization', '/organization/groups/:group_id/users', 'POST'] as const
}

export function usePostOrganizationGroupsGroupIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationGroupsGroupIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$post']>
        },
      ) => parseResponse(client.organization.groups[':group_id'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationGroupsGroupIdUsersUserIdKey(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
  >,
) {
  return ['organization', '/organization/groups/:group_id/users/:user_id', args] as const
}

export function useGetOrganizationGroupsGroupIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
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
        ? getGetOrganizationGroupsGroupIdUsersUserIdKey(args)
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
                (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
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
          client.organization.groups[':group_id'].users[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationGroupsGroupIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
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
        ? getGetOrganizationGroupsGroupIdUsersUserIdKey(args)
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
                (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
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
          client.organization.groups[':group_id'].users[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationGroupsGroupIdUsersUserIdKey() {
  return ['organization', '/organization/groups/:group_id/users/:user_id', 'DELETE'] as const
}

export function useDeleteOrganizationGroupsGroupIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.groups)[':group_id']['users'][':user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.groups)[':group_id']['users'][':user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationGroupsGroupIdUsersUserIdKey()
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
            (typeof client.organization.groups)[':group_id']['users'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.groups[':group_id'].users[':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationInvitesKey(
  args: InferRequestType<typeof client.organization.invites.$get>,
) {
  return ['organization', '/organization/invites', args] as const
}

export function useGetOrganizationInvites<TError = unknown>(
  args: InferRequestType<typeof client.organization.invites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationInvites<TError = unknown>(
  args: InferRequestType<typeof client.organization.invites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationInvitesKey() {
  return ['organization', '/organization/invites', 'POST'] as const
}

export function usePostOrganizationInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.invites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.invites.$post> },
      ) => parseResponse(client.organization.invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationInvitesInviteIdKey(
  args: InferRequestType<(typeof client.organization.invites)[':invite_id']['$get']>,
) {
  return ['organization', '/organization/invites/:invite_id', args] as const
}

export function useGetOrganizationInvitesInviteId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.invites)[':invite_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationInvitesInviteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.invites[':invite_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationInvitesInviteId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.invites)[':invite_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationInvitesInviteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.invites[':invite_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationInvitesInviteIdKey() {
  return ['organization', '/organization/invites/:invite_id', 'DELETE'] as const
}

export function useDeleteOrganizationInvitesInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.invites)[':invite_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationInvitesInviteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organization.invites)[':invite_id']['$delete']> },
      ) => parseResponse(client.organization.invites[':invite_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsKey(
  args: InferRequestType<typeof client.organization.projects.$get>,
) {
  return ['organization', '/organization/projects', args] as const
}

export function useGetOrganizationProjects<TError = unknown>(
  args: InferRequestType<typeof client.organization.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjects<TError = unknown>(
  args: InferRequestType<typeof client.organization.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsKey() {
  return ['organization', '/organization/projects', 'POST'] as const
}

export function usePostOrganizationProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.projects.$post> },
      ) => parseResponse(client.organization.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdKey(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['$get']>,
) {
  return ['organization', '/organization/projects/:project_id', args] as const
}

export function useGetOrganizationProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdKey() {
  return ['organization', '/organization/projects/:project_id', 'POST'] as const
}

export function usePostOrganizationProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.projects)[':project_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organization.projects)[':project_id']['$post']> },
      ) => parseResponse(client.organization.projects[':project_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdApiKeysKey(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>,
) {
  return ['organization', '/organization/projects/:project_id/api_keys', args] as const
}

export function useGetOrganizationProjectsProjectIdApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>
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
        ? getGetOrganizationProjectsProjectIdApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization.projects[':project_id'].api_keys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>
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
        ? getGetOrganizationProjectsProjectIdApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization.projects[':project_id'].api_keys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdApiKeysApiKeyIdKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/api_keys/:api_key_id', args] as const
}

export function useGetOrganizationProjectsProjectIdApiKeysApiKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
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
        ? getGetOrganizationProjectsProjectIdApiKeysApiKeyIdKey(args)
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
                (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
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
          client.organization.projects[':project_id'].api_keys[':api_key_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdApiKeysApiKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
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
        ? getGetOrganizationProjectsProjectIdApiKeysApiKeyIdKey(args)
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
                (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
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
          client.organization.projects[':project_id'].api_keys[':api_key_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdApiKeysApiKeyIdKey() {
  return [
    'organization',
    '/organization/projects/:project_id/api_keys/:api_key_id',
    'POST',
  ] as const
}

export function usePostOrganizationProjectsProjectIdApiKeysApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdApiKeysApiKeyIdKey()
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
            (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].api_keys[':api_key_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationProjectsProjectIdApiKeysApiKeyIdKey() {
  return [
    'organization',
    '/organization/projects/:project_id/api_keys/:api_key_id',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationProjectsProjectIdApiKeysApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationProjectsProjectIdApiKeysApiKeyIdKey()
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
            (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].api_keys[':api_key_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdArchiveKey() {
  return ['organization', '/organization/projects/:project_id/archive', 'POST'] as const
}

export function usePostOrganizationProjectsProjectIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organization.projects)[':project_id']['archive']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.projects)[':project_id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdArchiveKey()
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
            (typeof client.organization.projects)[':project_id']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdCertificatesKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['certificates']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/certificates', args] as const
}

export function useGetOrganizationProjectsProjectIdCertificates<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['certificates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['certificates']['$get']
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
        ? getGetOrganizationProjectsProjectIdCertificatesKey(args)
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
                (typeof client.organization.projects)[':project_id']['certificates']['$get']
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
          client.organization.projects[':project_id'].certificates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdCertificates<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['certificates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['certificates']['$get']
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
        ? getGetOrganizationProjectsProjectIdCertificatesKey(args)
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
                (typeof client.organization.projects)[':project_id']['certificates']['$get']
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
          client.organization.projects[':project_id'].certificates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdCertificatesActivateKey() {
  return [
    'organization',
    '/organization/projects/:project_id/certificates/activate',
    'POST',
  ] as const
}

export function usePostOrganizationProjectsProjectIdCertificatesActivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['certificates']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['certificates']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdCertificatesActivateKey()
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
            (typeof client.organization.projects)[':project_id']['certificates']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].certificates.activate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdCertificatesDeactivateKey() {
  return [
    'organization',
    '/organization/projects/:project_id/certificates/deactivate',
    'POST',
  ] as const
}

export function usePostOrganizationProjectsProjectIdCertificatesDeactivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['certificates']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['certificates']['deactivate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdCertificatesDeactivateKey()
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
            (typeof client.organization.projects)[':project_id']['certificates']['deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].certificates.deactivate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdDataRetentionKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['data_retention']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/data_retention', args] as const
}

export function useGetOrganizationProjectsProjectIdDataRetention<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['data_retention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['data_retention']['$get']
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
        ? getGetOrganizationProjectsProjectIdDataRetentionKey(args)
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
                (typeof client.organization.projects)[':project_id']['data_retention']['$get']
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
          client.organization.projects[':project_id'].data_retention.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdDataRetention<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['data_retention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['data_retention']['$get']
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
        ? getGetOrganizationProjectsProjectIdDataRetentionKey(args)
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
                (typeof client.organization.projects)[':project_id']['data_retention']['$get']
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
          client.organization.projects[':project_id'].data_retention.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdDataRetentionKey() {
  return ['organization', '/organization/projects/:project_id/data_retention', 'POST'] as const
}

export function usePostOrganizationProjectsProjectIdDataRetention<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['data_retention']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['data_retention']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdDataRetentionKey()
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
            (typeof client.organization.projects)[':project_id']['data_retention']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].data_retention.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdGroupsKey(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$get']>,
) {
  return ['organization', '/organization/projects/:project_id/groups', args] as const
}

export function useGetOrganizationProjectsProjectIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$get']>
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
        ? getGetOrganizationProjectsProjectIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.projects[':project_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$get']>
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
        ? getGetOrganizationProjectsProjectIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.projects[':project_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdGroupsKey() {
  return ['organization', '/organization/projects/:project_id/groups', 'POST'] as const
}

export function usePostOrganizationProjectsProjectIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdGroupsKey()
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
            (typeof client.organization.projects)[':project_id']['groups']['$post']
          >
        },
      ) =>
        parseResponse(client.organization.projects[':project_id'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdGroupsGroupIdKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/groups/:group_id', args] as const
}

export function useGetOrganizationProjectsProjectIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
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
        ? getGetOrganizationProjectsProjectIdGroupsGroupIdKey(args)
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
                (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
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
          client.organization.projects[':project_id'].groups[':group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
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
        ? getGetOrganizationProjectsProjectIdGroupsGroupIdKey(args)
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
                (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
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
          client.organization.projects[':project_id'].groups[':group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationProjectsProjectIdGroupsGroupIdKey() {
  return ['organization', '/organization/projects/:project_id/groups/:group_id', 'DELETE'] as const
}

export function useDeleteOrganizationProjectsProjectIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationProjectsProjectIdGroupsGroupIdKey()
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
            (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].groups[':group_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdHostedToolPermissionsKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/hosted_tool_permissions',
    args,
  ] as const
}

export function useGetOrganizationProjectsProjectIdHostedToolPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
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
        ? getGetOrganizationProjectsProjectIdHostedToolPermissionsKey(args)
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
                (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
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
          client.organization.projects[':project_id'].hosted_tool_permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdHostedToolPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
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
        ? getGetOrganizationProjectsProjectIdHostedToolPermissionsKey(args)
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
                (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
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
          client.organization.projects[':project_id'].hosted_tool_permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdHostedToolPermissionsKey() {
  return [
    'organization',
    '/organization/projects/:project_id/hosted_tool_permissions',
    'POST',
  ] as const
}

export function usePostOrganizationProjectsProjectIdHostedToolPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdHostedToolPermissionsKey()
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
            (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].hosted_tool_permissions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdModelPermissionsKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/model_permissions', args] as const
}

export function useGetOrganizationProjectsProjectIdModelPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
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
        ? getGetOrganizationProjectsProjectIdModelPermissionsKey(args)
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
                (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
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
          client.organization.projects[':project_id'].model_permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdModelPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
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
        ? getGetOrganizationProjectsProjectIdModelPermissionsKey(args)
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
                (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
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
          client.organization.projects[':project_id'].model_permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdModelPermissionsKey() {
  return ['organization', '/organization/projects/:project_id/model_permissions', 'POST'] as const
}

export function usePostOrganizationProjectsProjectIdModelPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['model_permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['model_permissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdModelPermissionsKey()
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
            (typeof client.organization.projects)[':project_id']['model_permissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].model_permissions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationProjectsProjectIdModelPermissionsKey() {
  return ['organization', '/organization/projects/:project_id/model_permissions', 'DELETE'] as const
}

export function useDeleteOrganizationProjectsProjectIdModelPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['model_permissions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['model_permissions']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationProjectsProjectIdModelPermissionsKey()
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
            (typeof client.organization.projects)[':project_id']['model_permissions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].model_permissions.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdRateLimitsKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/rate_limits', args] as const
}

export function useGetOrganizationProjectsProjectIdRateLimits<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
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
        ? getGetOrganizationProjectsProjectIdRateLimitsKey(args)
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
                (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
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
          client.organization.projects[':project_id'].rate_limits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdRateLimits<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
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
        ? getGetOrganizationProjectsProjectIdRateLimitsKey(args)
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
                (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
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
          client.organization.projects[':project_id'].rate_limits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdRateLimitsRateLimitIdKey() {
  return [
    'organization',
    '/organization/projects/:project_id/rate_limits/:rate_limit_id',
    'POST',
  ] as const
}

export function usePostOrganizationProjectsProjectIdRateLimitsRateLimitId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['rate_limits'][':rate_limit_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['rate_limits'][':rate_limit_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdRateLimitsRateLimitIdKey()
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
            (typeof client.organization.projects)[':project_id']['rate_limits'][':rate_limit_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].rate_limits[':rate_limit_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdServiceAccountsKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/service_accounts', args] as const
}

export function useGetOrganizationProjectsProjectIdServiceAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
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
        ? getGetOrganizationProjectsProjectIdServiceAccountsKey(args)
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
                (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
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
          client.organization.projects[':project_id'].service_accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdServiceAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
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
        ? getGetOrganizationProjectsProjectIdServiceAccountsKey(args)
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
                (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
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
          client.organization.projects[':project_id'].service_accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdServiceAccountsKey() {
  return ['organization', '/organization/projects/:project_id/service_accounts', 'POST'] as const
}

export function usePostOrganizationProjectsProjectIdServiceAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['service_accounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdServiceAccountsKey()
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
            (typeof client.organization.projects)[':project_id']['service_accounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].service_accounts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdServiceAccountsServiceAccountIdKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/service_accounts/:service_account_id',
    args,
  ] as const
}

export function useGetOrganizationProjectsProjectIdServiceAccountsServiceAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
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
        ? getGetOrganizationProjectsProjectIdServiceAccountsServiceAccountIdKey(args)
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
                (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
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
          client.organization.projects[':project_id'].service_accounts[':service_account_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdServiceAccountsServiceAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
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
        ? getGetOrganizationProjectsProjectIdServiceAccountsServiceAccountIdKey(args)
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
                (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
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
          client.organization.projects[':project_id'].service_accounts[':service_account_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdKey() {
  return [
    'organization',
    '/organization/projects/:project_id/service_accounts/:service_account_id',
    'POST',
  ] as const
}

export function usePostOrganizationProjectsProjectIdServiceAccountsServiceAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdKey()
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
            (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].service_accounts[':service_account_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdKey() {
  return [
    'organization',
    '/organization/projects/:project_id/service_accounts/:service_account_id',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationProjectsProjectIdServiceAccountsServiceAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdKey()
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
            (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].service_accounts[
            ':service_account_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdSpendAlertsKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/spend_alerts', args] as const
}

export function useGetOrganizationProjectsProjectIdSpendAlerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
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
        ? getGetOrganizationProjectsProjectIdSpendAlertsKey(args)
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
                (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
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
          client.organization.projects[':project_id'].spend_alerts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdSpendAlerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
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
        ? getGetOrganizationProjectsProjectIdSpendAlertsKey(args)
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
                (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
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
          client.organization.projects[':project_id'].spend_alerts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdSpendAlertsKey() {
  return ['organization', '/organization/projects/:project_id/spend_alerts', 'POST'] as const
}

export function usePostOrganizationProjectsProjectIdSpendAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['spend_alerts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_alerts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdSpendAlertsKey()
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
            (typeof client.organization.projects)[':project_id']['spend_alerts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].spend_alerts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdSpendAlertsAlertIdKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/spend_alerts/:alert_id',
    args,
  ] as const
}

export function useGetOrganizationProjectsProjectIdSpendAlertsAlertId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
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
        ? getGetOrganizationProjectsProjectIdSpendAlertsAlertIdKey(args)
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
                (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
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
          client.organization.projects[':project_id'].spend_alerts[':alert_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdSpendAlertsAlertId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
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
        ? getGetOrganizationProjectsProjectIdSpendAlertsAlertIdKey(args)
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
                (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
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
          client.organization.projects[':project_id'].spend_alerts[':alert_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdSpendAlertsAlertIdKey() {
  return [
    'organization',
    '/organization/projects/:project_id/spend_alerts/:alert_id',
    'POST',
  ] as const
}

export function usePostOrganizationProjectsProjectIdSpendAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdSpendAlertsAlertIdKey()
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
            (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].spend_alerts[':alert_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationProjectsProjectIdSpendAlertsAlertIdKey() {
  return [
    'organization',
    '/organization/projects/:project_id/spend_alerts/:alert_id',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationProjectsProjectIdSpendAlertsAlertId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationProjectsProjectIdSpendAlertsAlertIdKey()
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
            (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].spend_alerts[':alert_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdUsersKey(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$get']>,
) {
  return ['organization', '/organization/projects/:project_id/users', args] as const
}

export function useGetOrganizationProjectsProjectIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['users']['$get']>
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
        ? getGetOrganizationProjectsProjectIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.projects[':project_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['users']['$get']>
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
        ? getGetOrganizationProjectsProjectIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.projects)[':project_id']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.projects[':project_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdUsersKey() {
  return ['organization', '/organization/projects/:project_id/users', 'POST'] as const
}

export function usePostOrganizationProjectsProjectIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organization.projects)[':project_id']['users']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdUsersKey()
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
            (typeof client.organization.projects)[':project_id']['users']['$post']
          >
        },
      ) =>
        parseResponse(client.organization.projects[':project_id'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdUsersUserIdKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/users/:user_id', args] as const
}

export function useGetOrganizationProjectsProjectIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
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
        ? getGetOrganizationProjectsProjectIdUsersUserIdKey(args)
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
                (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
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
          client.organization.projects[':project_id'].users[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
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
        ? getGetOrganizationProjectsProjectIdUsersUserIdKey(args)
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
                (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
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
          client.organization.projects[':project_id'].users[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdUsersUserIdKey() {
  return ['organization', '/organization/projects/:project_id/users/:user_id', 'POST'] as const
}

export function usePostOrganizationProjectsProjectIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['users'][':user_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['users'][':user_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdUsersUserIdKey()
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
            (typeof client.organization.projects)[':project_id']['users'][':user_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].users[':user_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationProjectsProjectIdUsersUserIdKey() {
  return ['organization', '/organization/projects/:project_id/users/:user_id', 'DELETE'] as const
}

export function useDeleteOrganizationProjectsProjectIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['users'][':user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['users'][':user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationProjectsProjectIdUsersUserIdKey()
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
            (typeof client.organization.projects)[':project_id']['users'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].users[':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationRolesKey(
  args: InferRequestType<typeof client.organization.roles.$get>,
) {
  return ['organization', '/organization/roles', args] as const
}

export function useGetOrganizationRoles<TError = unknown>(
  args: InferRequestType<typeof client.organization.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationRoles<TError = unknown>(
  args: InferRequestType<typeof client.organization.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationRolesKey() {
  return ['organization', '/organization/roles', 'POST'] as const
}

export function usePostOrganizationRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.roles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organization.roles.$post> }) =>
        parseResponse(client.organization.roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationRolesRoleIdKey(
  args: InferRequestType<(typeof client.organization.roles)[':role_id']['$get']>,
) {
  return ['organization', '/organization/roles/:role_id', args] as const
}

export function useGetOrganizationRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.roles)[':role_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.roles[':role_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.roles)[':role_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.roles[':role_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationRolesRoleIdKey() {
  return ['organization', '/organization/roles/:role_id', 'POST'] as const
}

export function usePostOrganizationRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.roles)[':role_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organization.roles)[':role_id']['$post']> },
      ) => parseResponse(client.organization.roles[':role_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationRolesRoleIdKey() {
  return ['organization', '/organization/roles/:role_id', 'DELETE'] as const
}

export function useDeleteOrganizationRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.roles)[':role_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organization.roles)[':role_id']['$delete']> },
      ) => parseResponse(client.organization.roles[':role_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationSpendAlertsKey(
  args: InferRequestType<typeof client.organization.spend_alerts.$get>,
) {
  return ['organization', '/organization/spend_alerts', args] as const
}

export function useGetOrganizationSpendAlerts<TError = unknown>(
  args: InferRequestType<typeof client.organization.spend_alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationSpendAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.spend_alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationSpendAlerts<TError = unknown>(
  args: InferRequestType<typeof client.organization.spend_alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationSpendAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.spend_alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationSpendAlertsKey() {
  return ['organization', '/organization/spend_alerts', 'POST'] as const
}

export function usePostOrganizationSpendAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.spend_alerts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationSpendAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.spend_alerts.$post> },
      ) => parseResponse(client.organization.spend_alerts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationSpendAlertsAlertIdKey(
  args: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>,
) {
  return ['organization', '/organization/spend_alerts/:alert_id', args] as const
}

export function useGetOrganizationSpendAlertsAlertId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationSpendAlertsAlertIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.spend_alerts[':alert_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationSpendAlertsAlertId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationSpendAlertsAlertIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.spend_alerts[':alert_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationSpendAlertsAlertIdKey() {
  return ['organization', '/organization/spend_alerts/:alert_id', 'POST'] as const
}

export function usePostOrganizationSpendAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationSpendAlertsAlertIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$post']>
        },
      ) => parseResponse(client.organization.spend_alerts[':alert_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationSpendAlertsAlertIdKey() {
  return ['organization', '/organization/spend_alerts/:alert_id', 'DELETE'] as const
}

export function useDeleteOrganizationSpendAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationSpendAlertsAlertIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$delete']>
        },
      ) => parseResponse(client.organization.spend_alerts[':alert_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationUsageAudioSpeechesKey(
  args: InferRequestType<typeof client.organization.usage.audio_speeches.$get>,
) {
  return ['organization', '/organization/usage/audio_speeches', args] as const
}

export function useGetOrganizationUsageAudioSpeeches<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.audio_speeches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.audio_speeches.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageAudioSpeechesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.audio_speeches.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.audio_speeches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageAudioSpeeches<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.audio_speeches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.audio_speeches.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageAudioSpeechesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.audio_speeches.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.audio_speeches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsageAudioTranscriptionsKey(
  args: InferRequestType<typeof client.organization.usage.audio_transcriptions.$get>,
) {
  return ['organization', '/organization/usage/audio_transcriptions', args] as const
}

export function useGetOrganizationUsageAudioTranscriptions<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.audio_transcriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.audio_transcriptions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageAudioTranscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.audio_transcriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.usage.audio_transcriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageAudioTranscriptions<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.audio_transcriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.audio_transcriptions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageAudioTranscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.audio_transcriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.usage.audio_transcriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsageCodeInterpreterSessionsKey(
  args: InferRequestType<typeof client.organization.usage.code_interpreter_sessions.$get>,
) {
  return ['organization', '/organization/usage/code_interpreter_sessions', args] as const
}

export function useGetOrganizationUsageCodeInterpreterSessions<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.code_interpreter_sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.code_interpreter_sessions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageCodeInterpreterSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.code_interpreter_sessions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization.usage.code_interpreter_sessions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageCodeInterpreterSessions<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.code_interpreter_sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.code_interpreter_sessions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageCodeInterpreterSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.code_interpreter_sessions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization.usage.code_interpreter_sessions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsageCompletionsKey(
  args: InferRequestType<typeof client.organization.usage.completions.$get>,
) {
  return ['organization', '/organization/usage/completions', args] as const
}

export function useGetOrganizationUsageCompletions<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.completions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.completions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageCompletionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.completions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.completions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageCompletions<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.completions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.completions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageCompletionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.completions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.completions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsageEmbeddingsKey(
  args: InferRequestType<typeof client.organization.usage.embeddings.$get>,
) {
  return ['organization', '/organization/usage/embeddings', args] as const
}

export function useGetOrganizationUsageEmbeddings<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.embeddings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageEmbeddingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.embeddings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageEmbeddings<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.embeddings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageEmbeddingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.embeddings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsageFileSearchCallsKey(
  args: InferRequestType<typeof client.organization.usage.file_search_calls.$get>,
) {
  return ['organization', '/organization/usage/file_search_calls', args] as const
}

export function useGetOrganizationUsageFileSearchCalls<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.file_search_calls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.file_search_calls.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageFileSearchCallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.file_search_calls.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.usage.file_search_calls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageFileSearchCalls<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.file_search_calls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.file_search_calls.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageFileSearchCallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.file_search_calls.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.usage.file_search_calls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsageImagesKey(
  args: InferRequestType<typeof client.organization.usage.images.$get>,
) {
  return ['organization', '/organization/usage/images', args] as const
}

export function useGetOrganizationUsageImages<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.images.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.images.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageImages<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.images.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.images.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsageModerationsKey(
  args: InferRequestType<typeof client.organization.usage.moderations.$get>,
) {
  return ['organization', '/organization/usage/moderations', args] as const
}

export function useGetOrganizationUsageModerations<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.moderations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageModerationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.moderations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageModerations<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.moderations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageModerationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.moderations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsageVectorStoresKey(
  args: InferRequestType<typeof client.organization.usage.vector_stores.$get>,
) {
  return ['organization', '/organization/usage/vector_stores', args] as const
}

export function useGetOrganizationUsageVectorStores<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.vector_stores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.vector_stores.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageVectorStoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.vector_stores.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.vector_stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageVectorStores<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.vector_stores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.vector_stores.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageVectorStoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.vector_stores.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.vector_stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsageWebSearchCallsKey(
  args: InferRequestType<typeof client.organization.usage.web_search_calls.$get>,
) {
  return ['organization', '/organization/usage/web_search_calls', args] as const
}

export function useGetOrganizationUsageWebSearchCalls<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.web_search_calls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.web_search_calls.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageWebSearchCallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.web_search_calls.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.usage.web_search_calls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageWebSearchCalls<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.web_search_calls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.web_search_calls.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageWebSearchCallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.usage.web_search_calls.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.usage.web_search_calls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsersKey(
  args: InferRequestType<typeof client.organization.users.$get>,
) {
  return ['organization', '/organization/users', args] as const
}

export function useGetOrganizationUsers<TError = unknown>(
  args: InferRequestType<typeof client.organization.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsers<TError = unknown>(
  args: InferRequestType<typeof client.organization.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationUsersUserIdKey(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['$get']>,
) {
  return ['organization', '/organization/users/:user_id', args] as const
}

export function useGetOrganizationUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationUsersUserIdKey() {
  return ['organization', '/organization/users/:user_id', 'POST'] as const
}

export function usePostOrganizationUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.users)[':user_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organization.users)[':user_id']['$post']> },
      ) => parseResponse(client.organization.users[':user_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationUsersUserIdKey() {
  return ['organization', '/organization/users/:user_id', 'DELETE'] as const
}

export function useDeleteOrganizationUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organization.users)[':user_id']['$delete']> },
      ) => parseResponse(client.organization.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationUsersUserIdRolesKey(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$get']>,
) {
  return ['organization', '/organization/users/:user_id/roles', args] as const
}

export function useGetOrganizationUsersUserIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsersUserIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.users[':user_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsersUserIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsersUserIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.users[':user_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationUsersUserIdRolesKey() {
  return ['organization', '/organization/users/:user_id/roles', 'POST'] as const
}

export function usePostOrganizationUsersUserIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationUsersUserIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$post']>
        },
      ) => parseResponse(client.organization.users[':user_id'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationUsersUserIdRolesRoleIdKey(
  args: InferRequestType<
    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
  >,
) {
  return ['organization', '/organization/users/:user_id/roles/:role_id', args] as const
}

export function useGetOrganizationUsersUserIdRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
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
        ? getGetOrganizationUsersUserIdRolesRoleIdKey(args)
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
                (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
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
          client.organization.users[':user_id'].roles[':role_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsersUserIdRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
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
        ? getGetOrganizationUsersUserIdRolesRoleIdKey(args)
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
                (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
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
          client.organization.users[':user_id'].roles[':role_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationUsersUserIdRolesRoleIdKey() {
  return ['organization', '/organization/users/:user_id/roles/:role_id', 'DELETE'] as const
}

export function useDeleteOrganizationUsersUserIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.users)[':user_id']['roles'][':role_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.users)[':user_id']['roles'][':role_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationUsersUserIdRolesRoleIdKey()
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
            (typeof client.organization.users)[':user_id']['roles'][':role_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.users[':user_id'].roles[':role_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdGroupsGroupIdRolesKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/groups/:group_id/roles', args] as const
}

export function useGetProjectsProjectIdGroupsGroupIdRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
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
        ? getGetProjectsProjectIdGroupsGroupIdRolesKey(args)
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
                (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
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
          client.projects[':project_id'].groups[':group_id'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdGroupsGroupIdRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
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
        ? getGetProjectsProjectIdGroupsGroupIdRolesKey(args)
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
                (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
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
          client.projects[':project_id'].groups[':group_id'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdGroupsGroupIdRolesKey() {
  return ['projects', '/projects/:project_id/groups/:group_id/roles', 'POST'] as const
}

export function usePostProjectsProjectIdGroupsGroupIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdGroupsGroupIdRolesKey()
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
            (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_id'].groups[':group_id'].roles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdGroupsGroupIdRolesRoleIdKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/groups/:group_id/roles/:role_id', args] as const
}

export function useGetProjectsProjectIdGroupsGroupIdRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
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
        ? getGetProjectsProjectIdGroupsGroupIdRolesRoleIdKey(args)
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
                (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
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
          client.projects[':project_id'].groups[':group_id'].roles[':role_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdGroupsGroupIdRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
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
        ? getGetProjectsProjectIdGroupsGroupIdRolesRoleIdKey(args)
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
                (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
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
          client.projects[':project_id'].groups[':group_id'].roles[':role_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdGroupsGroupIdRolesRoleIdKey() {
  return ['projects', '/projects/:project_id/groups/:group_id/roles/:role_id', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdGroupsGroupIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdGroupsGroupIdRolesRoleIdKey()
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
            (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_id'].groups[':group_id'].roles[':role_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdRolesKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles']['$get']>,
) {
  return ['projects', '/projects/:project_id/roles', args] as const
}

export function useGetProjectsProjectIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdRolesKey() {
  return ['projects', '/projects/:project_id/roles', 'POST'] as const
}

export function usePostProjectsProjectIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_id']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)[':project_id']['roles']['$post']> },
      ) => parseResponse(client.projects[':project_id'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdRolesRoleIdKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>,
) {
  return ['projects', '/projects/:project_id/roles/:role_id', args] as const
}

export function useGetProjectsProjectIdRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>
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
        ? getGetProjectsProjectIdRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':project_id'].roles[':role_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>
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
        ? getGetProjectsProjectIdRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':project_id'].roles[':role_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdRolesRoleIdKey() {
  return ['projects', '/projects/:project_id/roles/:role_id', 'POST'] as const
}

export function usePostProjectsProjectIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdRolesRoleIdKey()
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
            (typeof client.projects)[':project_id']['roles'][':role_id']['$post']
          >
        },
      ) =>
        parseResponse(client.projects[':project_id'].roles[':role_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdRolesRoleIdKey() {
  return ['projects', '/projects/:project_id/roles/:role_id', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdRolesRoleIdKey()
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
            (typeof client.projects)[':project_id']['roles'][':role_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.projects[':project_id'].roles[':role_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdUsersUserIdRolesKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/users/:user_id/roles', args] as const
}

export function useGetProjectsProjectIdUsersUserIdRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
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
        ? getGetProjectsProjectIdUsersUserIdRolesKey(args)
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
                (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
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
          client.projects[':project_id'].users[':user_id'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdUsersUserIdRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
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
        ? getGetProjectsProjectIdUsersUserIdRolesKey(args)
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
                (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
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
          client.projects[':project_id'].users[':user_id'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdUsersUserIdRolesKey() {
  return ['projects', '/projects/:project_id/users/:user_id/roles', 'POST'] as const
}

export function usePostProjectsProjectIdUsersUserIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_id']['users'][':user_id']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdUsersUserIdRolesKey()
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
            (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_id'].users[':user_id'].roles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdUsersUserIdRolesRoleIdKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/users/:user_id/roles/:role_id', args] as const
}

export function useGetProjectsProjectIdUsersUserIdRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
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
        ? getGetProjectsProjectIdUsersUserIdRolesRoleIdKey(args)
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
                (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
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
          client.projects[':project_id'].users[':user_id'].roles[':role_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdUsersUserIdRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
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
        ? getGetProjectsProjectIdUsersUserIdRolesRoleIdKey(args)
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
                (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
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
          client.projects[':project_id'].users[':user_id'].roles[':role_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdUsersUserIdRolesRoleIdKey() {
  return ['projects', '/projects/:project_id/users/:user_id/roles/:role_id', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdUsersUserIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdUsersUserIdRolesRoleIdKey()
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
            (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_id'].users[':user_id'].roles[':role_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealtimeCallsKey() {
  return ['realtime', '/realtime/calls', 'POST'] as const
}

export function usePostRealtimeCalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realtime.calls.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.realtime.calls.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealtimeCallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.realtime.calls.$post> }) =>
        parseResponse(client.realtime.calls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealtimeCallsCallIdAcceptKey() {
  return ['realtime', '/realtime/calls/:call_id/accept', 'POST'] as const
}

export function usePostRealtimeCallsCallIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realtime.calls)[':call_id']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealtimeCallsCallIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.realtime.calls)[':call_id']['accept']['$post']> },
      ) => parseResponse(client.realtime.calls[':call_id'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealtimeCallsCallIdHangupKey() {
  return ['realtime', '/realtime/calls/:call_id/hangup', 'POST'] as const
}

export function usePostRealtimeCallsCallIdHangup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['hangup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realtime.calls)[':call_id']['hangup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealtimeCallsCallIdHangupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.realtime.calls)[':call_id']['hangup']['$post']> },
      ) => parseResponse(client.realtime.calls[':call_id'].hangup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealtimeCallsCallIdReferKey() {
  return ['realtime', '/realtime/calls/:call_id/refer', 'POST'] as const
}

export function usePostRealtimeCallsCallIdRefer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['refer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realtime.calls)[':call_id']['refer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealtimeCallsCallIdReferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.realtime.calls)[':call_id']['refer']['$post']> },
      ) => parseResponse(client.realtime.calls[':call_id'].refer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealtimeCallsCallIdRejectKey() {
  return ['realtime', '/realtime/calls/:call_id/reject', 'POST'] as const
}

export function usePostRealtimeCallsCallIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['reject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realtime.calls)[':call_id']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealtimeCallsCallIdRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.realtime.calls)[':call_id']['reject']['$post']> },
      ) => parseResponse(client.realtime.calls[':call_id'].reject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealtimeClientSecretsKey() {
  return ['realtime', '/realtime/client_secrets', 'POST'] as const
}

export function usePostRealtimeClientSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.realtime.client_secrets.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.realtime.client_secrets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealtimeClientSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.realtime.client_secrets.$post> },
      ) => parseResponse(client.realtime.client_secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealtimeSessionsKey() {
  return ['realtime', '/realtime/sessions', 'POST'] as const
}

export function usePostRealtimeSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realtime.sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.realtime.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealtimeSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.realtime.sessions.$post> }) =>
        parseResponse(client.realtime.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealtimeTranscriptionSessionsKey() {
  return ['realtime', '/realtime/transcription_sessions', 'POST'] as const
}

export function usePostRealtimeTranscriptionSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.realtime.transcription_sessions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.realtime.transcription_sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealtimeTranscriptionSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.realtime.transcription_sessions.$post> },
      ) => parseResponse(client.realtime.transcription_sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealtimeTranslationsClientSecretsKey() {
  return ['realtime', '/realtime/translations/client_secrets', 'POST'] as const
}

export function usePostRealtimeTranslationsClientSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.realtime.translations.client_secrets.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.realtime.translations.client_secrets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealtimeTranslationsClientSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.realtime.translations.client_secrets.$post> },
      ) => parseResponse(client.realtime.translations.client_secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResponsesKey() {
  return ['responses', '/responses', 'POST'] as const
}

export function usePostResponses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responses.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.responses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResponsesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.responses.$post> }) =>
        parseResponse(client.responses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResponsesResponseIdKey(
  args: InferRequestType<(typeof client.responses)[':response_id']['$get']>,
) {
  return ['responses', '/responses/:response_id', args] as const
}

export function useGetResponsesResponseId<TError = unknown>(
  args: InferRequestType<(typeof client.responses)[':response_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResponsesResponseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.responses[':response_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResponsesResponseId<TError = unknown>(
  args: InferRequestType<(typeof client.responses)[':response_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResponsesResponseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.responses[':response_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteResponsesResponseIdKey() {
  return ['responses', '/responses/:response_id', 'DELETE'] as const
}

export function useDeleteResponsesResponseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.responses)[':response_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.responses)[':response_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteResponsesResponseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.responses)[':response_id']['$delete']> },
      ) => parseResponse(client.responses[':response_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResponsesResponseIdCancelKey() {
  return ['responses', '/responses/:response_id/cancel', 'POST'] as const
}

export function usePostResponsesResponseIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.responses)[':response_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.responses)[':response_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResponsesResponseIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.responses)[':response_id']['cancel']['$post']> },
      ) => parseResponse(client.responses[':response_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResponsesResponseIdInputItemsKey(
  args: InferRequestType<(typeof client.responses)[':response_id']['input_items']['$get']>,
) {
  return ['responses', '/responses/:response_id/input_items', args] as const
}

export function useGetResponsesResponseIdInputItems<TError = unknown>(
  args: InferRequestType<(typeof client.responses)[':response_id']['input_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id']['input_items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResponsesResponseIdInputItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id']['input_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.responses[':response_id'].input_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResponsesResponseIdInputItems<TError = unknown>(
  args: InferRequestType<(typeof client.responses)[':response_id']['input_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id']['input_items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResponsesResponseIdInputItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id']['input_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.responses[':response_id'].input_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThreadsKey() {
  return ['threads', '/threads', 'POST'] as const
}

export function usePostThreads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threads.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.threads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThreadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.threads.$post> }) =>
        parseResponse(client.threads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostThreadsRunsKey() {
  return ['threads', '/threads/runs', 'POST'] as const
}

export function usePostThreadsRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threads.runs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.threads.runs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThreadsRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.threads.runs.$post> }) =>
        parseResponse(client.threads.runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetThreadsThreadIdKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['$get']>,
) {
  return ['threads', '/threads/:thread_id', args] as const
}

export function useGetThreadsThreadId<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThreadsThreadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.threads[':thread_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThreadsThreadId<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThreadsThreadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.threads[':thread_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThreadsThreadIdKey() {
  return ['threads', '/threads/:thread_id', 'POST'] as const
}

export function usePostThreadsThreadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.threads)[':thread_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThreadsThreadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.threads)[':thread_id']['$post']> },
      ) => parseResponse(client.threads[':thread_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteThreadsThreadIdKey() {
  return ['threads', '/threads/:thread_id', 'DELETE'] as const
}

export function useDeleteThreadsThreadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.threads)[':thread_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteThreadsThreadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.threads)[':thread_id']['$delete']> },
      ) => parseResponse(client.threads[':thread_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetThreadsThreadIdMessagesKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages']['$get']>,
) {
  return ['threads', '/threads/:thread_id/messages', args] as const
}

export function useGetThreadsThreadIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThreadsThreadIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.threads[':thread_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThreadsThreadIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThreadsThreadIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.threads[':thread_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThreadsThreadIdMessagesKey() {
  return ['threads', '/threads/:thread_id/messages', 'POST'] as const
}

export function usePostThreadsThreadIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.threads)[':thread_id']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThreadsThreadIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.threads)[':thread_id']['messages']['$post']> },
      ) => parseResponse(client.threads[':thread_id'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetThreadsThreadIdMessagesMessageIdKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>,
) {
  return ['threads', '/threads/:thread_id/messages/:message_id', args] as const
}

export function useGetThreadsThreadIdMessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>
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
        ? getGetThreadsThreadIdMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.threads[':thread_id'].messages[':message_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThreadsThreadIdMessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>
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
        ? getGetThreadsThreadIdMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.threads[':thread_id'].messages[':message_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostThreadsThreadIdMessagesMessageIdKey() {
  return ['threads', '/threads/:thread_id/messages/:message_id', 'POST'] as const
}

export function usePostThreadsThreadIdMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThreadsThreadIdMessagesMessageIdKey()
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
            (typeof client.threads)[':thread_id']['messages'][':message_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.threads[':thread_id'].messages[':message_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteThreadsThreadIdMessagesMessageIdKey() {
  return ['threads', '/threads/:thread_id/messages/:message_id', 'DELETE'] as const
}

export function useDeleteThreadsThreadIdMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteThreadsThreadIdMessagesMessageIdKey()
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
            (typeof client.threads)[':thread_id']['messages'][':message_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.threads[':thread_id'].messages[':message_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetThreadsThreadIdRunsKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs']['$get']>,
) {
  return ['threads', '/threads/:thread_id/runs', args] as const
}

export function useGetThreadsThreadIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThreadsThreadIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.threads[':thread_id'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThreadsThreadIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThreadsThreadIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.threads[':thread_id'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThreadsThreadIdRunsKey() {
  return ['threads', '/threads/:thread_id/runs', 'POST'] as const
}

export function usePostThreadsThreadIdRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.threads)[':thread_id']['runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThreadsThreadIdRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.threads)[':thread_id']['runs']['$post']> },
      ) => parseResponse(client.threads[':thread_id'].runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetThreadsThreadIdRunsRunIdKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>,
) {
  return ['threads', '/threads/:thread_id/runs/:run_id', args] as const
}

export function useGetThreadsThreadIdRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThreadsThreadIdRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.threads[':thread_id'].runs[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThreadsThreadIdRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThreadsThreadIdRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.threads[':thread_id'].runs[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThreadsThreadIdRunsRunIdKey() {
  return ['threads', '/threads/:thread_id/runs/:run_id', 'POST'] as const
}

export function usePostThreadsThreadIdRunsRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThreadsThreadIdRunsRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$post']>
        },
      ) => parseResponse(client.threads[':thread_id'].runs[':run_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostThreadsThreadIdRunsRunIdCancelKey() {
  return ['threads', '/threads/:thread_id/runs/:run_id/cancel', 'POST'] as const
}

export function usePostThreadsThreadIdRunsRunIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThreadsThreadIdRunsRunIdCancelKey()
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
            (typeof client.threads)[':thread_id']['runs'][':run_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.threads[':thread_id'].runs[':run_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetThreadsThreadIdRunsRunIdStepsKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>,
) {
  return ['threads', '/threads/:thread_id/runs/:run_id/steps', args] as const
}

export function useGetThreadsThreadIdRunsRunIdSteps<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>
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
        ? getGetThreadsThreadIdRunsRunIdStepsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.threads[':thread_id'].runs[':run_id'].steps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThreadsThreadIdRunsRunIdSteps<TError = unknown>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>
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
        ? getGetThreadsThreadIdRunsRunIdStepsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.threads[':thread_id'].runs[':run_id'].steps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThreadsThreadIdRunsRunIdStepsStepIdKey(
  args: InferRequestType<
    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
  >,
) {
  return ['threads', '/threads/:thread_id/runs/:run_id/steps/:step_id', args] as const
}

export function useGetThreadsThreadIdRunsRunIdStepsStepId<TError = unknown>(
  args: InferRequestType<
    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
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
        ? getGetThreadsThreadIdRunsRunIdStepsStepIdKey(args)
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
                (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
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
          client.threads[':thread_id'].runs[':run_id'].steps[':step_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThreadsThreadIdRunsRunIdStepsStepId<TError = unknown>(
  args: InferRequestType<
    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
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
        ? getGetThreadsThreadIdRunsRunIdStepsStepIdKey(args)
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
                (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
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
          client.threads[':thread_id'].runs[':run_id'].steps[':step_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostThreadsThreadIdRunsRunIdSubmitToolOutputsKey() {
  return ['threads', '/threads/:thread_id/runs/:run_id/submit_tool_outputs', 'POST'] as const
}

export function usePostThreadsThreadIdRunsRunIdSubmitToolOutputs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.threads)[':thread_id']['runs'][':run_id']['submit_tool_outputs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.threads)[':thread_id']['runs'][':run_id']['submit_tool_outputs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThreadsThreadIdRunsRunIdSubmitToolOutputsKey()
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
            (typeof client.threads)[':thread_id']['runs'][':run_id']['submit_tool_outputs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.threads[':thread_id'].runs[':run_id'].submit_tool_outputs.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsKey() {
  return ['uploads', '/uploads', 'POST'] as const
}

export function usePostUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.uploads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.uploads.$post> }) =>
        parseResponse(client.uploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsUploadIdCancelKey() {
  return ['uploads', '/uploads/:upload_id/cancel', 'POST'] as const
}

export function usePostUploadsUploadIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)[':upload_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)[':upload_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsUploadIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.uploads)[':upload_id']['cancel']['$post']> },
      ) => parseResponse(client.uploads[':upload_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsUploadIdCompleteKey() {
  return ['uploads', '/uploads/:upload_id/complete', 'POST'] as const
}

export function usePostUploadsUploadIdComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)[':upload_id']['complete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)[':upload_id']['complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsUploadIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.uploads)[':upload_id']['complete']['$post']> },
      ) => parseResponse(client.uploads[':upload_id'].complete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsUploadIdPartsKey() {
  return ['uploads', '/uploads/:upload_id/parts', 'POST'] as const
}

export function usePostUploadsUploadIdParts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)[':upload_id']['parts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)[':upload_id']['parts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsUploadIdPartsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.uploads)[':upload_id']['parts']['$post']> },
      ) => parseResponse(client.uploads[':upload_id'].parts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVectorStoresKey(args: InferRequestType<typeof client.vector_stores.$get>) {
  return ['vector_stores', '/vector_stores', args] as const
}

export function useGetVectorStores<TError = unknown>(
  args: InferRequestType<typeof client.vector_stores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVectorStoresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vector_stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVectorStores<TError = unknown>(
  args: InferRequestType<typeof client.vector_stores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVectorStoresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vector_stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVectorStoresKey() {
  return ['vector_stores', '/vector_stores', 'POST'] as const
}

export function usePostVectorStores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vector_stores.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorStoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vector_stores.$post> }) =>
        parseResponse(client.vector_stores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVectorStoresVectorStoreIdKey(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$get']>,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id', args] as const
}

export function useGetVectorStoresVectorStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVectorStoresVectorStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vector_stores[':vector_store_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVectorStoresVectorStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVectorStoresVectorStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vector_stores[':vector_store_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVectorStoresVectorStoreIdKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id', 'POST'] as const
}

export function usePostVectorStoresVectorStoreId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorStoresVectorStoreIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$post']> },
      ) => parseResponse(client.vector_stores[':vector_store_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVectorStoresVectorStoreIdKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id', 'DELETE'] as const
}

export function useDeleteVectorStoresVectorStoreId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVectorStoresVectorStoreIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$delete']> },
      ) => parseResponse(client.vector_stores[':vector_store_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVectorStoresVectorStoreIdFileBatchesKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id/file_batches', 'POST'] as const
}

export function usePostVectorStoresVectorStoreIdFileBatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vector_stores)[':vector_store_id']['file_batches']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['file_batches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorStoresVectorStoreIdFileBatchesKey()
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
            (typeof client.vector_stores)[':vector_store_id']['file_batches']['$post']
          >
        },
      ) =>
        parseResponse(
          client.vector_stores[':vector_store_id'].file_batches.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVectorStoresVectorStoreIdFileBatchesBatchIdKey(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
  >,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id/file_batches/:batch_id', args] as const
}

export function useGetVectorStoresVectorStoreIdFileBatchesBatchId<TError = unknown>(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
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
        ? getGetVectorStoresVectorStoreIdFileBatchesBatchIdKey(args)
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
                (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
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
          client.vector_stores[':vector_store_id'].file_batches[':batch_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVectorStoresVectorStoreIdFileBatchesBatchId<TError = unknown>(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
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
        ? getGetVectorStoresVectorStoreIdFileBatchesBatchIdKey(args)
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
                (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
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
          client.vector_stores[':vector_store_id'].file_batches[':batch_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVectorStoresVectorStoreIdFileBatchesBatchIdCancelKey() {
  return [
    'vector_stores',
    '/vector_stores/:vector_store_id/file_batches/:batch_id/cancel',
    'POST',
  ] as const
}

export function usePostVectorStoresVectorStoreIdFileBatchesBatchIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorStoresVectorStoreIdFileBatchesBatchIdCancelKey()
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
            (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.vector_stores[':vector_store_id'].file_batches[':batch_id'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVectorStoresVectorStoreIdFileBatchesBatchIdFilesKey(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
  >,
) {
  return [
    'vector_stores',
    '/vector_stores/:vector_store_id/file_batches/:batch_id/files',
    args,
  ] as const
}

export function useGetVectorStoresVectorStoreIdFileBatchesBatchIdFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
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
        ? getGetVectorStoresVectorStoreIdFileBatchesBatchIdFilesKey(args)
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
                (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
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
          client.vector_stores[':vector_store_id'].file_batches[':batch_id'].files.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVectorStoresVectorStoreIdFileBatchesBatchIdFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
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
        ? getGetVectorStoresVectorStoreIdFileBatchesBatchIdFilesKey(args)
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
                (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
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
          client.vector_stores[':vector_store_id'].file_batches[':batch_id'].files.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVectorStoresVectorStoreIdFilesKey(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id/files', args] as const
}

export function useGetVectorStoresVectorStoreIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVectorStoresVectorStoreIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vector_stores[':vector_store_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVectorStoresVectorStoreIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVectorStoresVectorStoreIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vector_stores[':vector_store_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVectorStoresVectorStoreIdFilesKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id/files', 'POST'] as const
}

export function usePostVectorStoresVectorStoreIdFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorStoresVectorStoreIdFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$post']>
        },
      ) => parseResponse(client.vector_stores[':vector_store_id'].files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVectorStoresVectorStoreIdFilesFileIdKey(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
  >,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id/files/:file_id', args] as const
}

export function useGetVectorStoresVectorStoreIdFilesFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
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
        ? getGetVectorStoresVectorStoreIdFilesFileIdKey(args)
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
                (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
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
          client.vector_stores[':vector_store_id'].files[':file_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVectorStoresVectorStoreIdFilesFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
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
        ? getGetVectorStoresVectorStoreIdFilesFileIdKey(args)
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
                (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
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
          client.vector_stores[':vector_store_id'].files[':file_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVectorStoresVectorStoreIdFilesFileIdKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id/files/:file_id', 'POST'] as const
}

export function usePostVectorStoresVectorStoreIdFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorStoresVectorStoreIdFilesFileIdKey()
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
            (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.vector_stores[':vector_store_id'].files[':file_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVectorStoresVectorStoreIdFilesFileIdKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id/files/:file_id', 'DELETE'] as const
}

export function useDeleteVectorStoresVectorStoreIdFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVectorStoresVectorStoreIdFilesFileIdKey()
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
            (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.vector_stores[':vector_store_id'].files[':file_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVectorStoresVectorStoreIdFilesFileIdContentKey(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
  >,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id/files/:file_id/content', args] as const
}

export function useGetVectorStoresVectorStoreIdFilesFileIdContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
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
        ? getGetVectorStoresVectorStoreIdFilesFileIdContentKey(args)
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
                (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
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
          client.vector_stores[':vector_store_id'].files[':file_id'].content.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVectorStoresVectorStoreIdFilesFileIdContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
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
        ? getGetVectorStoresVectorStoreIdFilesFileIdContentKey(args)
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
                (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
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
          client.vector_stores[':vector_store_id'].files[':file_id'].content.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVectorStoresVectorStoreIdSearchKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id/search', 'POST'] as const
}

export function usePostVectorStoresVectorStoreIdSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorStoresVectorStoreIdSearchKey()
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
            (typeof client.vector_stores)[':vector_store_id']['search']['$post']
          >
        },
      ) => parseResponse(client.vector_stores[':vector_store_id'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsKey() {
  return ['conversations', '/conversations', 'POST'] as const
}

export function usePostConversations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.conversations.$post> }) =>
        parseResponse(client.conversations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConversationIdKey(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
) {
  return ['conversations', '/conversations/:conversation_id', args] as const
}

export function useGetConversationsConversationId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsConversationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':conversation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversationId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsConversationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':conversation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsConversationIdKey() {
  return ['conversations', '/conversations/:conversation_id', 'POST'] as const
}

export function usePostConversationsConversationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':conversation_id']['$post']> },
      ) => parseResponse(client.conversations[':conversation_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConversationIdKey() {
  return ['conversations', '/conversations/:conversation_id', 'DELETE'] as const
}

export function useDeleteConversationsConversationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConversationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']> },
      ) => parseResponse(client.conversations[':conversation_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSafetyCasesIdKey(
  args: InferRequestType<(typeof client.safety.cases)[':id']['$get']>,
) {
  return ['safety', '/safety/cases/:id', args] as const
}

export function useGetSafetyCasesId<TError = unknown>(
  args: InferRequestType<(typeof client.safety.cases)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSafetyCasesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.safety.cases[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSafetyCasesId<TError = unknown>(
  args: InferRequestType<(typeof client.safety.cases)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSafetyCasesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.safety.cases[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSafetyAlertsIdKey(
  args: InferRequestType<(typeof client.safety.alerts)[':id']['$get']>,
) {
  return ['safety', '/safety/alerts/:id', args] as const
}

export function useGetSafetyAlertsId<TError = unknown>(
  args: InferRequestType<(typeof client.safety.alerts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSafetyAlertsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.safety.alerts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSafetyAlertsId<TError = unknown>(
  args: InferRequestType<(typeof client.safety.alerts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSafetyAlertsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.safety.alerts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationExternalKeysKey(
  args: InferRequestType<typeof client.organization.external_keys.$get>,
) {
  return ['organization', '/organization/external_keys', args] as const
}

export function useGetOrganizationExternalKeys<TError = unknown>(
  args: InferRequestType<typeof client.organization.external_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationExternalKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.external_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationExternalKeys<TError = unknown>(
  args: InferRequestType<typeof client.organization.external_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationExternalKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.external_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationExternalKeysKey() {
  return ['organization', '/organization/external_keys', 'POST'] as const
}

export function usePostOrganizationExternalKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.external_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationExternalKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.external_keys.$post> },
      ) => parseResponse(client.organization.external_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationExternalKeysExternalKeyIdKey(
  args: InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$get']>,
) {
  return ['organization', '/organization/external_keys/:external_key_id', args] as const
}

export function useGetOrganizationExternalKeysExternalKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$get']>
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
        ? getGetOrganizationExternalKeysExternalKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization.external_keys[':external_key_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationExternalKeysExternalKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$get']>
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
        ? getGetOrganizationExternalKeysExternalKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization.external_keys[':external_key_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationExternalKeysExternalKeyIdKey() {
  return ['organization', '/organization/external_keys/:external_key_id', 'DELETE'] as const
}

export function useDeleteOrganizationExternalKeysExternalKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationExternalKeysExternalKeyIdKey()
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
            (typeof client.organization.external_keys)[':external_key_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.external_keys[':external_key_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationExternalKeysExternalKeyIdValidateKey() {
  return ['organization', '/organization/external_keys/:external_key_id/validate', 'POST'] as const
}

export function usePostOrganizationExternalKeysExternalKeyIdValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.external_keys)[':external_key_id']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.external_keys)[':external_key_id']['validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationExternalKeysExternalKeyIdValidateKey()
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
            (typeof client.organization.external_keys)[':external_key_id']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.external_keys[':external_key_id'].validate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLiveSessionsSessionIdContentKey(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['content']['$get']>,
) {
  return ['live', '/live/sessions/:session_id/content', args] as const
}

export function useGetLiveSessionsSessionIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiveSessionsSessionIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.live.sessions[':session_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveSessionsSessionIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiveSessionsSessionIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.live.sessions[':session_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationWorkloadIdentityProvidersKey(
  args: InferRequestType<typeof client.organization.workload_identity_providers.$get>,
) {
  return ['organization', '/organization/workload_identity_providers', args] as const
}

export function useGetOrganizationWorkloadIdentityProviders<TError = unknown>(
  args: InferRequestType<typeof client.organization.workload_identity_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.workload_identity_providers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationWorkloadIdentityProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.workload_identity_providers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.workload_identity_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationWorkloadIdentityProviders<TError = unknown>(
  args: InferRequestType<typeof client.organization.workload_identity_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.workload_identity_providers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationWorkloadIdentityProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.workload_identity_providers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.workload_identity_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationWorkloadIdentityProvidersKey() {
  return ['organization', '/organization/workload_identity_providers', 'POST'] as const
}

export function usePostOrganizationWorkloadIdentityProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organization.workload_identity_providers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.workload_identity_providers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationWorkloadIdentityProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.organization.workload_identity_providers.$post> },
      ) => parseResponse(client.organization.workload_identity_providers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdKey(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
  >,
) {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id',
    args,
  ] as const
}

export function useGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
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
        ? getGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdKey(args)
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
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
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
          client.organization.workload_identity_providers[':workload_identity_provider_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
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
        ? getGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdKey(args)
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
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
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
          client.organization.workload_identity_providers[':workload_identity_provider_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdKey() {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id',
    'POST',
  ] as const
}

export function usePostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdKey()
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
            (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.workload_identity_providers[':workload_identity_provider_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdKey() {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdKey()
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
            (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.workload_identity_providers[':workload_identity_provider_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesKey(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
  >,
) {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules',
    args,
  ] as const
}

export function useGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRules<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
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
        ? getGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesKey(
            args,
          )
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
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
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
          client.organization.workload_identity_providers[
            ':workload_identity_provider_id'
          ].federation_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRules<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
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
        ? getGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesKey(
            args,
          )
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
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
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
          client.organization.workload_identity_providers[
            ':workload_identity_provider_id'
          ].federation_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesKey() {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules',
    'POST',
  ] as const
}

export function usePostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesKey()
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
            (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.workload_identity_providers[
            ':workload_identity_provider_id'
          ].federation_rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdKey(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
  >,
) {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules/:workload_identity_federation_rule_id',
    args,
  ] as const
}

export function useGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
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
        ? getGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdKey(
            args,
          )
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
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
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
          client.organization.workload_identity_providers[
            ':workload_identity_provider_id'
          ].federation_rules[':workload_identity_federation_rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
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
        ? getGetOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdKey(
            args,
          )
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
                (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
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
          client.organization.workload_identity_providers[
            ':workload_identity_provider_id'
          ].federation_rules[':workload_identity_federation_rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdKey() {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules/:workload_identity_federation_rule_id',
    'POST',
  ] as const
}

export function usePostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdKey()
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
            (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.workload_identity_providers[
            ':workload_identity_provider_id'
          ].federation_rules[':workload_identity_federation_rule_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdKey() {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules/:workload_identity_federation_rule_id',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdKey()
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
            (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.workload_identity_providers[
            ':workload_identity_provider_id'
          ].federation_rules[':workload_identity_federation_rule_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationUsageDecisionsKey(
  args: InferRequestType<typeof client.organization.usage.decisions.$get>,
) {
  return ['organization', '/organization/usage/decisions', args] as const
}

export function useGetOrganizationUsageDecisions<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.decisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageDecisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.decisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUsageDecisions<TError = unknown>(
  args: InferRequestType<typeof client.organization.usage.decisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationUsageDecisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.usage.decisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationExternalStorageKey(
  args: InferRequestType<typeof client.organization.external_storage.$get>,
) {
  return ['organization', '/organization/external_storage', args] as const
}

export function useGetOrganizationExternalStorage<TError = unknown>(
  args: InferRequestType<typeof client.organization.external_storage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.external_storage.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationExternalStorageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.external_storage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.external_storage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationExternalStorage<TError = unknown>(
  args: InferRequestType<typeof client.organization.external_storage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.external_storage.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationExternalStorageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organization.external_storage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.external_storage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationExternalStorageKey() {
  return ['organization', '/organization/external_storage', 'POST'] as const
}

export function usePostOrganizationExternalStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_storage.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.external_storage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationExternalStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.external_storage.$post> },
      ) => parseResponse(client.organization.external_storage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationExternalStorageExternalStorageIdKey(
  args: InferRequestType<
    (typeof client.organization.external_storage)[':external_storage_id']['$get']
  >,
) {
  return ['organization', '/organization/external_storage/:external_storage_id', args] as const
}

export function useGetOrganizationExternalStorageExternalStorageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.external_storage)[':external_storage_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.external_storage)[':external_storage_id']['$get']
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
        ? getGetOrganizationExternalStorageExternalStorageIdKey(args)
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
                (typeof client.organization.external_storage)[':external_storage_id']['$get']
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
          client.organization.external_storage[':external_storage_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationExternalStorageExternalStorageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.external_storage)[':external_storage_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.external_storage)[':external_storage_id']['$get']
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
        ? getGetOrganizationExternalStorageExternalStorageIdKey(args)
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
                (typeof client.organization.external_storage)[':external_storage_id']['$get']
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
          client.organization.external_storage[':external_storage_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationExternalStorageExternalStorageIdKey() {
  return ['organization', '/organization/external_storage/:external_storage_id', 'DELETE'] as const
}

export function useDeleteOrganizationExternalStorageExternalStorageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.external_storage)[':external_storage_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.external_storage)[':external_storage_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationExternalStorageExternalStorageIdKey()
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
            (typeof client.organization.external_storage)[':external_storage_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.external_storage[':external_storage_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationExternalStorageExternalStorageIdValidateKey() {
  return [
    'organization',
    '/organization/external_storage/:external_storage_id/validate',
    'POST',
  ] as const
}

export function usePostOrganizationExternalStorageExternalStorageIdValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.external_storage)[':external_storage_id']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.external_storage)[':external_storage_id']['validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationExternalStorageExternalStorageIdValidateKey()
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
            (typeof client.organization.external_storage)[':external_storage_id']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.external_storage[':external_storage_id'].validate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationSpendLimitKey() {
  return ['organization', '/organization/spend_limit'] as const
}

export function useGetOrganizationSpendLimit<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
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
        ? getGetOrganizationSpendLimitKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.spend_limit.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationSpendLimit<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
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
        ? getGetOrganizationSpendLimitKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.spend_limit.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationSpendLimitKey() {
  return ['organization', '/organization/spend_limit', 'POST'] as const
}

export function usePostOrganizationSpendLimit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.spend_limit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationSpendLimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.spend_limit.$post> },
      ) => parseResponse(client.organization.spend_limit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationSpendLimitKey() {
  return ['organization', '/organization/spend_limit', 'DELETE'] as const
}

export function useDeleteOrganizationSpendLimit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$delete>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationSpendLimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.organization.spend_limit.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdSpendLimitKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/spend_limit', args] as const
}

export function useGetOrganizationProjectsProjectIdSpendLimit<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
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
        ? getGetOrganizationProjectsProjectIdSpendLimitKey(args)
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
                (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
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
          client.organization.projects[':project_id'].spend_limit.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdSpendLimit<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
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
        ? getGetOrganizationProjectsProjectIdSpendLimitKey(args)
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
                (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
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
          client.organization.projects[':project_id'].spend_limit.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdSpendLimitKey() {
  return ['organization', '/organization/projects/:project_id/spend_limit', 'POST'] as const
}

export function usePostOrganizationProjectsProjectIdSpendLimit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organization.projects)[':project_id']['spend_limit']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_limit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdSpendLimitKey()
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
            (typeof client.organization.projects)[':project_id']['spend_limit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].spend_limit.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationProjectsProjectIdSpendLimitKey() {
  return ['organization', '/organization/projects/:project_id/spend_limit', 'DELETE'] as const
}

export function useDeleteOrganizationProjectsProjectIdSpendLimit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['spend_limit']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_limit']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationProjectsProjectIdSpendLimitKey()
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
            (typeof client.organization.projects)[':project_id']['spend_limit']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].spend_limit.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationProjectsProjectIdServiceTierSettingsKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/service_tier_settings', args] as const
}

export function useGetOrganizationProjectsProjectIdServiceTierSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
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
        ? getGetOrganizationProjectsProjectIdServiceTierSettingsKey(args)
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
                (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
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
          client.organization.projects[':project_id'].service_tier_settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationProjectsProjectIdServiceTierSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
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
        ? getGetOrganizationProjectsProjectIdServiceTierSettingsKey(args)
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
                (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
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
          client.organization.projects[':project_id'].service_tier_settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdServiceTierSettingsKey() {
  return [
    'organization',
    '/organization/projects/:project_id/service_tier_settings',
    'POST',
  ] as const
}

export function usePostOrganizationProjectsProjectIdServiceTierSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['service_tier_settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_tier_settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationProjectsProjectIdServiceTierSettingsKey()
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
            (typeof client.organization.projects)[':project_id']['service_tier_settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].service_tier_settings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysKey() {
  return [
    'organization',
    '/organization/projects/:project_id/service_accounts/:service_account_id/api_keys',
    'POST',
  ] as const
}

export function usePostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeys<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['api_keys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['api_keys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysKey()
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
            (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['api_keys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization.projects[':project_id'].service_accounts[
            ':service_account_id'
          ].api_keys.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContentProvenanceChecksKey() {
  return ['content_provenance_checks', '/content_provenance_checks', 'POST'] as const
}

export function usePostContentProvenanceChecks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.content_provenance_checks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.content_provenance_checks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContentProvenanceChecksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.content_provenance_checks.$post> },
      ) => parseResponse(client.content_provenance_checks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosKey(args: InferRequestType<typeof client.videos.$get>) {
  return ['videos', '/videos', args] as const
}

export function useGetVideos<TError = unknown>(
  args: InferRequestType<typeof client.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.videos.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVideos<TError = unknown>(
  args: InferRequestType<typeof client.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.videos.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVideosKey() {
  return ['videos', '/videos', 'POST'] as const
}

export function usePostVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.videos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.videos.$post> }) =>
        parseResponse(client.videos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVideosCharactersKey() {
  return ['videos', '/videos/characters', 'POST'] as const
}

export function usePostVideosCharacters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.characters.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.videos.characters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosCharactersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.videos.characters.$post> }) =>
        parseResponse(client.videos.characters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosCharactersCharacterIdKey(
  args: InferRequestType<(typeof client.videos.characters)[':character_id']['$get']>,
) {
  return ['videos', '/videos/characters/:character_id', args] as const
}

export function useGetVideosCharactersCharacterId<TError = unknown>(
  args: InferRequestType<(typeof client.videos.characters)[':character_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos.characters)[':character_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideosCharactersCharacterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos.characters)[':character_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos.characters[':character_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosCharactersCharacterId<TError = unknown>(
  args: InferRequestType<(typeof client.videos.characters)[':character_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos.characters)[':character_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideosCharactersCharacterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos.characters)[':character_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos.characters[':character_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideosEditsKey() {
  return ['videos', '/videos/edits', 'POST'] as const
}

export function usePostVideosEdits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.edits.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.videos.edits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosEditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.videos.edits.$post> }) =>
        parseResponse(client.videos.edits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVideosExtensionsKey() {
  return ['videos', '/videos/extensions', 'POST'] as const
}

export function usePostVideosExtensions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.extensions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.videos.extensions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosExtensionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.videos.extensions.$post> }) =>
        parseResponse(client.videos.extensions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
) {
  return ['videos', '/videos/:video_id', args] as const
}

export function useGetVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideosVideoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideosVideoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVideosVideoIdKey() {
  return ['videos', '/videos/:video_id', 'DELETE'] as const
}

export function useDeleteVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.videos)[':video_id']['$delete']> },
      ) => parseResponse(client.videos[':video_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdContentKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['content']['$get']>,
) {
  return ['videos', '/videos/:video_id/content', args] as const
}

export function useGetVideosVideoIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideosVideoIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideosVideoIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideosVideoIdRemixKey() {
  return ['videos', '/videos/:video_id/remix', 'POST'] as const
}

export function usePostVideosVideoIdRemix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['remix']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['remix']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdRemixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.videos)[':video_id']['remix']['$post']> },
      ) => parseResponse(client.videos[':video_id'].remix.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResponsesInputTokensKey() {
  return ['responses', '/responses/input_tokens', 'POST'] as const
}

export function usePostResponsesInputTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.responses.input_tokens.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.responses.input_tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResponsesInputTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.responses.input_tokens.$post> },
      ) => parseResponse(client.responses.input_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResponsesCompactKey() {
  return ['responses', '/responses/compact', 'POST'] as const
}

export function usePostResponsesCompact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responses.compact.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.responses.compact.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResponsesCompactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.responses.compact.$post> }) =>
        parseResponse(client.responses.compact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSkillsKey(args: InferRequestType<typeof client.skills.$get>) {
  return ['skills', '/skills', args] as const
}

export function useGetSkills<TError = unknown>(
  args: InferRequestType<typeof client.skills.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSkillsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.skills.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSkills<TError = unknown>(
  args: InferRequestType<typeof client.skills.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSkillsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.skills.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSkillsKey() {
  return ['skills', '/skills', 'POST'] as const
}

export function usePostSkills<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.skills.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkillsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.skills.$post> }) =>
        parseResponse(client.skills.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSkillsSkillIdKey(
  args: InferRequestType<(typeof client.skills)[':skill_id']['$get']>,
) {
  return ['skills', '/skills/:skill_id', args] as const
}

export function useGetSkillsSkillId<TError = unknown>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSkillsSkillIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.skills[':skill_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkillsSkillId<TError = unknown>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSkillsSkillIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.skills[':skill_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSkillsSkillIdKey() {
  return ['skills', '/skills/:skill_id', 'POST'] as const
}

export function usePostSkillsSkillId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.skills)[':skill_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkillsSkillIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.skills)[':skill_id']['$post']> },
      ) => parseResponse(client.skills[':skill_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSkillsSkillIdKey() {
  return ['skills', '/skills/:skill_id', 'DELETE'] as const
}

export function useDeleteSkillsSkillId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.skills)[':skill_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSkillsSkillIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.skills)[':skill_id']['$delete']> },
      ) => parseResponse(client.skills[':skill_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSkillsSkillIdContentKey(
  args: InferRequestType<(typeof client.skills)[':skill_id']['content']['$get']>,
) {
  return ['skills', '/skills/:skill_id/content', args] as const
}

export function useGetSkillsSkillIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSkillsSkillIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.skills[':skill_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkillsSkillIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSkillsSkillIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.skills[':skill_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSkillsSkillIdVersionsKey(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions']['$get']>,
) {
  return ['skills', '/skills/:skill_id/versions', args] as const
}

export function useGetSkillsSkillIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSkillsSkillIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.skills[':skill_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkillsSkillIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSkillsSkillIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.skills[':skill_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSkillsSkillIdVersionsKey() {
  return ['skills', '/skills/:skill_id/versions', 'POST'] as const
}

export function usePostSkillsSkillIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.skills)[':skill_id']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkillsSkillIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.skills)[':skill_id']['versions']['$post']> },
      ) => parseResponse(client.skills[':skill_id'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSkillsSkillIdVersionsVersionKey(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>,
) {
  return ['skills', '/skills/:skill_id/versions/:version', args] as const
}

export function useGetSkillsSkillIdVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSkillsSkillIdVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.skills[':skill_id'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkillsSkillIdVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSkillsSkillIdVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.skills[':skill_id'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSkillsSkillIdVersionsVersionKey() {
  return ['skills', '/skills/:skill_id/versions/:version', 'DELETE'] as const
}

export function useDeleteSkillsSkillIdVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSkillsSkillIdVersionsVersionKey()
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
            (typeof client.skills)[':skill_id']['versions'][':version']['$delete']
          >
        },
      ) =>
        parseResponse(client.skills[':skill_id'].versions[':version'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSkillsSkillIdVersionsVersionContentKey(
  args: InferRequestType<
    (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
  >,
) {
  return ['skills', '/skills/:skill_id/versions/:version/content', args] as const
}

export function useGetSkillsSkillIdVersionsVersionContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
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
        ? getGetSkillsSkillIdVersionsVersionContentKey(args)
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
                (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
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
          client.skills[':skill_id'].versions[':version'].content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkillsSkillIdVersionsVersionContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
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
        ? getGetSkillsSkillIdVersionsVersionContentKey(args)
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
                (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
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
          client.skills[':skill_id'].versions[':version'].content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostChatkitSessionsSessionIdCancelKey() {
  return ['chatkit', '/chatkit/sessions/:session_id/cancel', 'POST'] as const
}

export function usePostChatkitSessionsSessionIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chatkit.sessions)[':session_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.chatkit.sessions)[':session_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatkitSessionsSessionIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.chatkit.sessions)[':session_id']['cancel']['$post']>
        },
      ) => parseResponse(client.chatkit.sessions[':session_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatkitSessionsKey() {
  return ['chatkit', '/chatkit/sessions', 'POST'] as const
}

export function usePostChatkitSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chatkit.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatkitSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chatkit.sessions.$post> }) =>
        parseResponse(client.chatkit.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatkitThreadsThreadIdItemsKey(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>,
) {
  return ['chatkit', '/chatkit/threads/:thread_id/items', args] as const
}

export function useGetChatkitThreadsThreadIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChatkitThreadsThreadIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chatkit.threads[':thread_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatkitThreadsThreadIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChatkitThreadsThreadIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chatkit.threads[':thread_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatkitThreadsThreadIdKey(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$get']>,
) {
  return ['chatkit', '/chatkit/threads/:thread_id', args] as const
}

export function useGetChatkitThreadsThreadId<TError = unknown>(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChatkitThreadsThreadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chatkit.threads[':thread_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatkitThreadsThreadId<TError = unknown>(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChatkitThreadsThreadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chatkit.threads[':thread_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteChatkitThreadsThreadIdKey() {
  return ['chatkit', '/chatkit/threads/:thread_id', 'DELETE'] as const
}

export function useDeleteChatkitThreadsThreadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChatkitThreadsThreadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$delete']> },
      ) => parseResponse(client.chatkit.threads[':thread_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatkitThreadsKey(
  args: InferRequestType<typeof client.chatkit.threads.$get>,
) {
  return ['chatkit', '/chatkit/threads', args] as const
}

export function useGetChatkitThreads<TError = unknown>(
  args: InferRequestType<typeof client.chatkit.threads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatkitThreadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chatkit.threads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatkitThreads<TError = unknown>(
  args: InferRequestType<typeof client.chatkit.threads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatkitThreadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chatkit.threads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDecisionsKey() {
  return ['decisions', '/decisions', 'POST'] as const
}

export function usePostDecisions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.decisions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.decisions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDecisionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.decisions.$post> }) =>
        parseResponse(client.decisions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsAutomationsKey(
  args: InferRequestType<typeof client.agents.automations.$get>,
) {
  return ['agents', '/agents/automations', args] as const
}

export function useGetAgentsAutomations<TError = unknown>(
  args: InferRequestType<typeof client.agents.automations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsAutomationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.automations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsAutomations<TError = unknown>(
  args: InferRequestType<typeof client.agents.automations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsAutomationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.automations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsAutomationsKey() {
  return ['agents', '/agents/automations', 'POST'] as const
}

export function usePostAgentsAutomations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.agents.automations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsAutomationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.agents.automations.$post> }) =>
        parseResponse(client.agents.automations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsAutomationsAutomationIdKey(
  args: InferRequestType<(typeof client.agents.automations)[':automation_id']['$get']>,
) {
  return ['agents', '/agents/automations/:automation_id', args] as const
}

export function useGetAgentsAutomationsAutomationId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.automations)[':automation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsAutomationsAutomationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.automations[':automation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsAutomationsAutomationId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.automations)[':automation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsAutomationsAutomationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.automations[':automation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsAutomationsAutomationIdKey() {
  return ['agents', '/agents/automations/:automation_id', 'POST'] as const
}

export function usePostAgentsAutomationsAutomationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.automations)[':automation_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsAutomationsAutomationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.agents.automations)[':automation_id']['$post']> },
      ) => parseResponse(client.agents.automations[':automation_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAgentsAutomationsAutomationIdKey() {
  return ['agents', '/agents/automations/:automation_id', 'DELETE'] as const
}

export function useDeleteAgentsAutomationsAutomationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.automations)[':automation_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentsAutomationsAutomationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.agents.automations)[':automation_id']['$delete']>
        },
      ) => parseResponse(client.agents.automations[':automation_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAgentsAutomationsAutomationIdPauseKey() {
  return ['agents', '/agents/automations/:automation_id/pause', 'POST'] as const
}

export function usePostAgentsAutomationsAutomationIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.agents.automations)[':automation_id']['pause']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.automations)[':automation_id']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsAutomationsAutomationIdPauseKey()
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
            (typeof client.agents.automations)[':automation_id']['pause']['$post']
          >
        },
      ) =>
        parseResponse(client.agents.automations[':automation_id'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAgentsAutomationsAutomationIdResumeKey() {
  return ['agents', '/agents/automations/:automation_id/resume', 'POST'] as const
}

export function usePostAgentsAutomationsAutomationIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.agents.automations)[':automation_id']['resume']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.automations)[':automation_id']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsAutomationsAutomationIdResumeKey()
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
            (typeof client.agents.automations)[':automation_id']['resume']['$post']
          >
        },
      ) =>
        parseResponse(client.agents.automations[':automation_id'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsAutomationsAutomationIdInvocationsKey(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations']['$get']
  >,
) {
  return ['agents', '/agents/automations/:automation_id/invocations', args] as const
}

export function useGetAgentsAutomationsAutomationIdInvocations<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.automations)[':automation_id']['invocations']['$get']
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
        ? getGetAgentsAutomationsAutomationIdInvocationsKey(args)
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
                (typeof client.agents.automations)[':automation_id']['invocations']['$get']
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
          client.agents.automations[':automation_id'].invocations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsAutomationsAutomationIdInvocations<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.automations)[':automation_id']['invocations']['$get']
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
        ? getGetAgentsAutomationsAutomationIdInvocationsKey(args)
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
                (typeof client.agents.automations)[':automation_id']['invocations']['$get']
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
          client.agents.automations[':automation_id'].invocations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsAutomationsAutomationIdInvocationsKey() {
  return ['agents', '/agents/automations/:automation_id/invocations', 'POST'] as const
}

export function usePostAgentsAutomationsAutomationIdInvocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.agents.automations)[':automation_id']['invocations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.automations)[':automation_id']['invocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsAutomationsAutomationIdInvocationsKey()
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
            (typeof client.agents.automations)[':automation_id']['invocations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.agents.automations[':automation_id'].invocations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsAutomationsAutomationIdInvocationsInvocationIdKey(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
  >,
) {
  return ['agents', '/agents/automations/:automation_id/invocations/:invocation_id', args] as const
}

export function useGetAgentsAutomationsAutomationIdInvocationsInvocationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
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
        ? getGetAgentsAutomationsAutomationIdInvocationsInvocationIdKey(args)
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
                (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
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
          client.agents.automations[':automation_id'].invocations[':invocation_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsAutomationsAutomationIdInvocationsInvocationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
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
        ? getGetAgentsAutomationsAutomationIdInvocationsInvocationIdKey(args)
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
                (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
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
          client.agents.automations[':automation_id'].invocations[':invocation_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsEnvironmentsKey(
  args: InferRequestType<typeof client.agents.environments.$get>,
) {
  return ['agents', '/agents/environments', args] as const
}

export function useGetAgentsEnvironments<TError = unknown>(
  args: InferRequestType<typeof client.agents.environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsEnvironments<TError = unknown>(
  args: InferRequestType<typeof client.agents.environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsEnvironmentsKey() {
  return ['agents', '/agents/environments', 'POST'] as const
}

export function usePostAgentsEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.agents.environments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsEnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.agents.environments.$post> }) =>
        parseResponse(client.agents.environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsEnvironmentsEnvironmentIdKey(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['$get']>,
) {
  return ['agents', '/agents/environments/:environment_id', args] as const
}

export function useGetAgentsEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsEnvironmentsEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.environments[':environment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsEnvironmentsEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.environments[':environment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsEnvironmentsEnvironmentIdFilesKey(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$get']>,
) {
  return ['agents', '/agents/environments/:environment_id/files', args] as const
}

export function useGetAgentsEnvironmentsEnvironmentIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agents.environments)[':environment_id']['files']['$get']>
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
        ? getGetAgentsEnvironmentsEnvironmentIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agents.environments)[':environment_id']['files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.agents.environments[':environment_id'].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsEnvironmentsEnvironmentIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agents.environments)[':environment_id']['files']['$get']>
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
        ? getGetAgentsEnvironmentsEnvironmentIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agents.environments)[':environment_id']['files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.agents.environments[':environment_id'].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsEnvironmentsEnvironmentIdFilesKey() {
  return ['agents', '/agents/environments/:environment_id/files', 'POST'] as const
}

export function usePostAgentsEnvironmentsEnvironmentIdFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.agents.environments)[':environment_id']['files']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsEnvironmentsEnvironmentIdFilesKey()
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
            (typeof client.agents.environments)[':environment_id']['files']['$post']
          >
        },
      ) =>
        parseResponse(
          client.agents.environments[':environment_id'].files.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdSubagentsKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/subagents', args] as const
}

export function useGetAgentsSessionsSessionIdSubagents<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdSubagentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].subagents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdSubagents<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdSubagentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].subagents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdSubagentsSubagentIdKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/subagents/:subagent_id', args] as const
}

export function useGetAgentsSessionsSessionIdSubagentsSubagentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
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
        ? getGetAgentsSessionsSessionIdSubagentsSubagentIdKey(args)
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
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
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
          client.agents.sessions[':session_id'].subagents[':subagent_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdSubagentsSubagentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
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
        ? getGetAgentsSessionsSessionIdSubagentsSubagentIdKey(args)
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
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
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
          client.agents.sessions[':session_id'].subagents[':subagent_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdSubagentsSubagentIdItemsKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/subagents/:subagent_id/items', args] as const
}

export function useGetAgentsSessionsSessionIdSubagentsSubagentIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
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
        ? getGetAgentsSessionsSessionIdSubagentsSubagentIdItemsKey(args)
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
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
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
          client.agents.sessions[':session_id'].subagents[':subagent_id'].items.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdSubagentsSubagentIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
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
        ? getGetAgentsSessionsSessionIdSubagentsSubagentIdItemsKey(args)
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
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
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
          client.agents.sessions[':session_id'].subagents[':subagent_id'].items.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/subagents/:subagent_id/turns', args] as const
}

export function useGetAgentsSessionsSessionIdSubagentsSubagentIdTurns<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
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
        ? getGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsKey(args)
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
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
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
          client.agents.sessions[':session_id'].subagents[':subagent_id'].turns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdSubagentsSubagentIdTurns<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
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
        ? getGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsKey(args)
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
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
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
          client.agents.sessions[':session_id'].subagents[':subagent_id'].turns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
  >,
) {
  return [
    'agents',
    '/agents/sessions/:session_id/subagents/:subagent_id/turns/:turn_id',
    args,
  ] as const
}

export function useGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
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
        ? getGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdKey(args)
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
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
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
          client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[':turn_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
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
        ? getGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdKey(args)
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
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
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
          client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[':turn_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
  >,
) {
  return [
    'agents',
    '/agents/sessions/:session_id/subagents/:subagent_id/turns/:turn_id/items',
    args,
  ] as const
}

export function useGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
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
        ? getGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsKey(args)
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
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
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
          client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[
            ':turn_id'
          ].items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItems<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
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
        ? getGetAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsKey(args)
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
                (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
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
          client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[
            ':turn_id'
          ].items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsKey(args: InferRequestType<typeof client.agents.$get>) {
  return ['agents', '/agents', args] as const
}

export function useGetAgents<TError = unknown>(
  args: InferRequestType<typeof client.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.agents.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAgents<TError = unknown>(
  args: InferRequestType<typeof client.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.agents.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAgentsKey() {
  return ['agents', '/agents', 'POST'] as const
}

export function usePostAgents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.agents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.agents.$post> }) =>
        parseResponse(client.agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsAgentIdKey(
  args: InferRequestType<(typeof client.agents)[':agent_id']['$get']>,
) {
  return ['agents', '/agents/:agent_id', args] as const
}

export function useGetAgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.agents)[':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentsAgentIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents[':agent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.agents)[':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentsAgentIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents[':agent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsAgentIdKey() {
  return ['agents', '/agents/:agent_id', 'POST'] as const
}

export function usePostAgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents)[':agent_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.agents)[':agent_id']['$post']> },
      ) => parseResponse(client.agents[':agent_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAgentsAgentIdKey() {
  return ['agents', '/agents/:agent_id', 'DELETE'] as const
}

export function useDeleteAgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents)[':agent_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentsAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.agents)[':agent_id']['$delete']> },
      ) => parseResponse(client.agents[':agent_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsEnvironmentsTemplatesKey(
  args: InferRequestType<typeof client.agents.environments.templates.$get>,
) {
  return ['agents', '/agents/environments/templates', args] as const
}

export function useGetAgentsEnvironmentsTemplates<TError = unknown>(
  args: InferRequestType<typeof client.agents.environments.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.agents.environments.templates.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsEnvironmentsTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.agents.environments.templates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.environments.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsEnvironmentsTemplates<TError = unknown>(
  args: InferRequestType<typeof client.agents.environments.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.agents.environments.templates.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsEnvironmentsTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.agents.environments.templates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.environments.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsEnvironmentsTemplatesKey() {
  return ['agents', '/agents/environments/templates', 'POST'] as const
}

export function usePostAgentsEnvironmentsTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.templates.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.agents.environments.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsEnvironmentsTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.agents.environments.templates.$post> },
      ) => parseResponse(client.agents.environments.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsEnvironmentsTemplatesEnvironmentTemplateIdKey(
  args: InferRequestType<
    (typeof client.agents.environments.templates)[':environment_template_id']['$get']
  >,
) {
  return ['agents', '/agents/environments/templates/:environment_template_id', args] as const
}

export function useGetAgentsEnvironmentsTemplatesEnvironmentTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.environments.templates)[':environment_template_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.environments.templates)[':environment_template_id']['$get']
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
        ? getGetAgentsEnvironmentsTemplatesEnvironmentTemplateIdKey(args)
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
                (typeof client.agents.environments.templates)[':environment_template_id']['$get']
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
          client.agents.environments.templates[':environment_template_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsEnvironmentsTemplatesEnvironmentTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.environments.templates)[':environment_template_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.environments.templates)[':environment_template_id']['$get']
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
        ? getGetAgentsEnvironmentsTemplatesEnvironmentTemplateIdKey(args)
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
                (typeof client.agents.environments.templates)[':environment_template_id']['$get']
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
          client.agents.environments.templates[':environment_template_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsEnvironmentsTemplatesEnvironmentTemplateIdKey() {
  return ['agents', '/agents/environments/templates/:environment_template_id', 'POST'] as const
}

export function usePostAgentsEnvironmentsTemplatesEnvironmentTemplateId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agents.environments.templates)[':environment_template_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.agents.environments.templates)[':environment_template_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsEnvironmentsTemplatesEnvironmentTemplateIdKey()
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
            (typeof client.agents.environments.templates)[':environment_template_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.agents.environments.templates[':environment_template_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAgentsEnvironmentsTemplatesEnvironmentTemplateIdKey() {
  return ['agents', '/agents/environments/templates/:environment_template_id', 'DELETE'] as const
}

export function useDeleteAgentsEnvironmentsTemplatesEnvironmentTemplateId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agents.environments.templates)[':environment_template_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.agents.environments.templates)[':environment_template_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentsEnvironmentsTemplatesEnvironmentTemplateIdKey()
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
            (typeof client.agents.environments.templates)[':environment_template_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.agents.environments.templates[':environment_template_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsSessionsKey(
  args: InferRequestType<typeof client.agents.sessions.$get>,
) {
  return ['agents', '/agents/sessions', args] as const
}

export function useGetAgentsSessions<TError = unknown>(
  args: InferRequestType<typeof client.agents.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentsSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessions<TError = unknown>(
  args: InferRequestType<typeof client.agents.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentsSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsSessionsKey() {
  return ['agents', '/agents/sessions', 'POST'] as const
}

export function usePostAgentsSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.agents.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.agents.sessions.$post> }) =>
        parseResponse(client.agents.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id', args] as const
}

export function useGetAgentsSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsSessionsSessionIdKey() {
  return ['agents', '/agents/sessions/:session_id', 'POST'] as const
}

export function usePostAgentsSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.sessions)[':session_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.agents.sessions)[':session_id']['$post']> },
      ) => parseResponse(client.agents.sessions[':session_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAgentsSessionsSessionIdKey() {
  return ['agents', '/agents/sessions/:session_id', 'DELETE'] as const
}

export function useDeleteAgentsSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.sessions)[':session_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentsSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.agents.sessions)[':session_id']['$delete']> },
      ) => parseResponse(client.agents.sessions[':session_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdArtifactsKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/artifacts', args] as const
}

export function useGetAgentsSessionsSessionIdArtifacts<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdArtifactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].artifacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdArtifacts<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdArtifactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].artifacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdArtifactsArtifactIdKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/artifacts/:artifact_id', args] as const
}

export function useGetAgentsSessionsSessionIdArtifactsArtifactId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
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
        ? getGetAgentsSessionsSessionIdArtifactsArtifactIdKey(args)
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
                (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
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
          client.agents.sessions[':session_id'].artifacts[':artifact_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdArtifactsArtifactId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
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
        ? getGetAgentsSessionsSessionIdArtifactsArtifactIdKey(args)
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
                (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
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
          client.agents.sessions[':session_id'].artifacts[':artifact_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAgentsSessionsSessionIdArtifactsArtifactIdKey() {
  return ['agents', '/agents/sessions/:session_id/artifacts/:artifact_id', 'DELETE'] as const
}

export function useDeleteAgentsSessionsSessionIdArtifactsArtifactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentsSessionsSessionIdArtifactsArtifactIdKey()
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
            (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.agents.sessions[':session_id'].artifacts[':artifact_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdArtifactsArtifactIdContentKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/artifacts/:artifact_id/content', args] as const
}

export function useGetAgentsSessionsSessionIdArtifactsArtifactIdContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
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
        ? getGetAgentsSessionsSessionIdArtifactsArtifactIdContentKey(args)
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
                (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
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
          client.agents.sessions[':session_id'].artifacts[':artifact_id'].content.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdArtifactsArtifactIdContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
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
        ? getGetAgentsSessionsSessionIdArtifactsArtifactIdContentKey(args)
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
                (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
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
          client.agents.sessions[':session_id'].artifacts[':artifact_id'].content.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdEventsKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/events', args] as const
}

export function useGetAgentsSessionsSessionIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsSessionsSessionIdEventsKey() {
  return ['agents', '/agents/sessions/:session_id/events', 'POST'] as const
}

export function usePostAgentsSessionsSessionIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsSessionsSessionIdEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$post']>
        },
      ) => parseResponse(client.agents.sessions[':session_id'].events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdItemsKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['items']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/items', args] as const
}

export function useGetAgentsSessionsSessionIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdTracesKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/traces', args] as const
}

export function useGetAgentsSessionsSessionIdTraces<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdTraces<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdTurnsKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/turns', args] as const
}

export function useGetAgentsSessionsSessionIdTurns<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdTurnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].turns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdTurns<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsSessionIdTurnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.sessions[':session_id'].turns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdTurnsTurnIdKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/turns/:turn_id', args] as const
}

export function useGetAgentsSessionsSessionIdTurnsTurnId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
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
        ? getGetAgentsSessionsSessionIdTurnsTurnIdKey(args)
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
                (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
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
          client.agents.sessions[':session_id'].turns[':turn_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdTurnsTurnId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
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
        ? getGetAgentsSessionsSessionIdTurnsTurnIdKey(args)
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
                (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
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
          client.agents.sessions[':session_id'].turns[':turn_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsSessionIdTurnsTurnIdItemsKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/turns/:turn_id/items', args] as const
}

export function useGetAgentsSessionsSessionIdTurnsTurnIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
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
        ? getGetAgentsSessionsSessionIdTurnsTurnIdItemsKey(args)
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
                (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
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
          client.agents.sessions[':session_id'].turns[':turn_id'].items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsSessionIdTurnsTurnIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
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
        ? getGetAgentsSessionsSessionIdTurnsTurnIdItemsKey(args)
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
                (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
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
          client.agents.sessions[':session_id'].turns[':turn_id'].items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVaultsKey(args: InferRequestType<typeof client.vaults.$get>) {
  return ['vaults', '/vaults', args] as const
}

export function useGetVaults<TError = unknown>(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vaults.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVaults<TError = unknown>(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vaults.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVaultsKey() {
  return ['vaults', '/vaults', 'POST'] as const
}

export function usePostVaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.vaults.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vaults.$post> }) =>
        parseResponse(client.vaults.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultsVaultIdKey(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['$get']>,
) {
  return ['vaults', '/vaults/:vault_id', args] as const
}

export function useGetVaultsVaultId<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultsVaultIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vaults[':vault_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultsVaultId<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultsVaultIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vaults[':vault_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVaultsVaultIdKey() {
  return ['vaults', '/vaults/:vault_id', 'POST'] as const
}

export function usePostVaultsVaultId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vault_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultsVaultIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vaults)[':vault_id']['$post']> },
      ) => parseResponse(client.vaults[':vault_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVaultsVaultIdKey() {
  return ['vaults', '/vaults/:vault_id', 'DELETE'] as const
}

export function useDeleteVaultsVaultId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vault_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVaultsVaultIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vaults)[':vault_id']['$delete']> },
      ) => parseResponse(client.vaults[':vault_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultsVaultIdCredentialsKey(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$get']>,
) {
  return ['vaults', '/vaults/:vault_id/credentials', args] as const
}

export function useGetVaultsVaultIdCredentials<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultsVaultIdCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vaults[':vault_id'].credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultsVaultIdCredentials<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultsVaultIdCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vaults[':vault_id'].credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVaultsVaultIdCredentialsKey() {
  return ['vaults', '/vaults/:vault_id/credentials', 'POST'] as const
}

export function usePostVaultsVaultIdCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultsVaultIdCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$post']> },
      ) => parseResponse(client.vaults[':vault_id'].credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultsVaultIdCredentialsCredentialIdKey(
  args: InferRequestType<
    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
  >,
) {
  return ['vaults', '/vaults/:vault_id/credentials/:credential_id', args] as const
}

export function useGetVaultsVaultIdCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
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
        ? getGetVaultsVaultIdCredentialsCredentialIdKey(args)
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
                (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
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
          client.vaults[':vault_id'].credentials[':credential_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultsVaultIdCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
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
        ? getGetVaultsVaultIdCredentialsCredentialIdKey(args)
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
                (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
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
          client.vaults[':vault_id'].credentials[':credential_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVaultsVaultIdCredentialsCredentialIdKey() {
  return ['vaults', '/vaults/:vault_id/credentials/:credential_id', 'POST'] as const
}

export function usePostVaultsVaultIdCredentialsCredentialId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultsVaultIdCredentialsCredentialIdKey()
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
            (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.vaults[':vault_id'].credentials[':credential_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVaultsVaultIdCredentialsCredentialIdKey() {
  return ['vaults', '/vaults/:vault_id/credentials/:credential_id', 'DELETE'] as const
}

export function useDeleteVaultsVaultIdCredentialsCredentialId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVaultsVaultIdCredentialsCredentialIdKey()
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
            (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.vaults[':vault_id'].credentials[':credential_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookEndpointsKey(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
) {
  return ['webhook_endpoints', '/webhook_endpoints', args] as const
}

export function useGetWebhookEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookEndpointsKey() {
  return ['webhook_endpoints', '/webhook_endpoints', 'POST'] as const
}

export function usePostWebhookEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhook_endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhook_endpoints.$post> }) =>
        parseResponse(client.webhook_endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookEndpointsWebhookEndpointIdKey(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>,
) {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook_endpoint_id', args] as const
}

export function useGetWebhookEndpointsWebhookEndpointId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsWebhookEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhook_endpoints[':webhook_endpoint_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookEndpointsWebhookEndpointId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsWebhookEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhook_endpoints[':webhook_endpoint_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookEndpointsWebhookEndpointIdKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook_endpoint_id', 'POST'] as const
}

export function usePostWebhookEndpointsWebhookEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookEndpointsWebhookEndpointIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$post']>
        },
      ) =>
        parseResponse(client.webhook_endpoints[':webhook_endpoint_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhookEndpointsWebhookEndpointIdKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook_endpoint_id', 'DELETE'] as const
}

export function useDeleteWebhookEndpointsWebhookEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhookEndpointsWebhookEndpointIdKey()
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
            (typeof client.webhook_endpoints)[':webhook_endpoint_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.webhook_endpoints[':webhook_endpoint_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookEndpointsWebhookEndpointIdRotateSecretKey() {
  return [
    'webhook_endpoints',
    '/webhook_endpoints/:webhook_endpoint_id/rotate_secret',
    'POST',
  ] as const
}

export function usePostWebhookEndpointsWebhookEndpointIdRotateSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhook_endpoints)[':webhook_endpoint_id']['rotate_secret']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.webhook_endpoints)[':webhook_endpoint_id']['rotate_secret']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookEndpointsWebhookEndpointIdRotateSecretKey()
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
            (typeof client.webhook_endpoints)[':webhook_endpoint_id']['rotate_secret']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhook_endpoints[':webhook_endpoint_id'].rotate_secret.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookEndpointsWebhookEndpointIdTestKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook_endpoint_id/test', 'POST'] as const
}

export function usePostWebhookEndpointsWebhookEndpointIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['test']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookEndpointsWebhookEndpointIdTestKey()
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
            (typeof client.webhook_endpoints)[':webhook_endpoint_id']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhook_endpoints[':webhook_endpoint_id'].test.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookEventTypesKey() {
  return ['webhook_event_types', '/webhook_event_types'] as const
}

export function useGetWebhookEventTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhookEventTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_event_types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookEventTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhookEventTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_event_types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostResponsesBetaTrueKey() {
  return ['responses?beta=true', '/responses?beta=true', 'POST'] as const
}

export function usePostResponsesBetaTrue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['responses?beta=true']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['responses?beta=true']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResponsesBetaTrueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['responses?beta=true']['$post']> },
      ) => parseResponse(client['responses?beta=true'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResponsesResponseIdBetaTrueKey(
  args: InferRequestType<(typeof client.responses)[':response_id?beta=true']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['responses', '/responses/:response_id?beta=true', keyArgs] as const
}

export function useGetResponsesResponseIdBetaTrue<TError = unknown>(
  args: InferRequestType<(typeof client.responses)[':response_id?beta=true']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResponsesResponseIdBetaTrueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.responses[':response_id?beta=true'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResponsesResponseIdBetaTrue<TError = unknown>(
  args: InferRequestType<(typeof client.responses)[':response_id?beta=true']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResponsesResponseIdBetaTrueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.responses[':response_id?beta=true'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteResponsesResponseIdBetaTrueKey() {
  return ['responses', '/responses/:response_id?beta=true', 'DELETE'] as const
}

export function useDeleteResponsesResponseIdBetaTrue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.responses)[':response_id?beta=true']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteResponsesResponseIdBetaTrueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.responses)[':response_id?beta=true']['$delete']>
        },
      ) => parseResponse(client.responses[':response_id?beta=true'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResponsesResponseIdCancelBetaTrueKey() {
  return ['responses', '/responses/:response_id/cancel?beta=true', 'POST'] as const
}

export function usePostResponsesResponseIdCancelBetaTrue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.responses)[':response_id']['cancel?beta=true']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.responses)[':response_id']['cancel?beta=true']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResponsesResponseIdCancelBetaTrueKey()
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
            (typeof client.responses)[':response_id']['cancel?beta=true']['$post']
          >
        },
      ) =>
        parseResponse(
          client.responses[':response_id']['cancel?beta=true'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostResponsesCompactBetaTrueKey() {
  return ['responses', '/responses/compact?beta=true', 'POST'] as const
}

export function usePostResponsesCompactBetaTrue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.responses)['compact?beta=true']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.responses)['compact?beta=true']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResponsesCompactBetaTrueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.responses)['compact?beta=true']['$post']> },
      ) => parseResponse(client.responses['compact?beta=true'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResponsesResponseIdInputItemsBetaTrueKey(
  args: InferRequestType<
    (typeof client.responses)[':response_id']['input_items?beta=true']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['responses', '/responses/:response_id/input_items?beta=true', keyArgs] as const
}

export function useGetResponsesResponseIdInputItemsBetaTrue<TError = unknown>(
  args: InferRequestType<
    (typeof client.responses)[':response_id']['input_items?beta=true']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.responses)[':response_id']['input_items?beta=true']['$get']>
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
        ? getGetResponsesResponseIdInputItemsBetaTrueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.responses)[':response_id']['input_items?beta=true']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.responses[':response_id']['input_items?beta=true'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResponsesResponseIdInputItemsBetaTrue<TError = unknown>(
  args: InferRequestType<
    (typeof client.responses)[':response_id']['input_items?beta=true']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.responses)[':response_id']['input_items?beta=true']['$get']>
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
        ? getGetResponsesResponseIdInputItemsBetaTrueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.responses)[':response_id']['input_items?beta=true']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.responses[':response_id']['input_items?beta=true'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostResponsesInputTokensBetaTrueKey() {
  return ['responses', '/responses/input_tokens?beta=true', 'POST'] as const
}

export function usePostResponsesInputTokensBetaTrue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.responses)['input_tokens?beta=true']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.responses)['input_tokens?beta=true']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResponsesInputTokensBetaTrueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.responses)['input_tokens?beta=true']['$post']> },
      ) => parseResponse(client.responses['input_tokens?beta=true'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
