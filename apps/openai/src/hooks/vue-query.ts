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

export function getAssistantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assistants.$get>>,
) {
  return ['assistants', '/assistants', toValue(args)] as const
}

export function getAssistantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assistants.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssistantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assistants.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssistants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assistants.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>
          >,
          ReturnType<typeof getAssistantsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssistantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssistantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assistants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAssistantsMutationKey() {
  return ['assistants', '/assistants', 'POST'] as const
}

export function getPostAssistantsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$post>>>>>,
    TError,
    InferRequestType<typeof client.assistants.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssistantsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assistants.$post>) {
      return parseResponse(client.assistants.$post(args, options))
    },
  })
}

export function usePostAssistants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.assistants.$post>,
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
  const mutationDefaults = getPostAssistantsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssistantsAssistantIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assistants)[':assistant_id']['$get']>>,
) {
  return ['assistants', '/assistants/:assistant_id', toValue(args)] as const
}

export function getAssistantsAssistantIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assistants)[':assistant_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssistantsAssistantIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assistants[':assistant_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssistantsAssistantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assistants)[':assistant_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssistantsAssistantIdQueryKey>
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
          Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssistantsAssistantIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssistantsAssistantIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assistants[':assistant_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAssistantsAssistantIdMutationKey() {
  return ['assistants', '/assistants/:assistant_id', 'POST'] as const
}

export function getPostAssistantsAssistantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assistants)[':assistant_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssistantsAssistantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assistants)[':assistant_id']['$post']>) {
      return parseResponse(client.assistants[':assistant_id'].$post(args, options))
    },
  })
}

export function usePostAssistantsAssistantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assistants)[':assistant_id']['$post']>,
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
  const mutationDefaults = getPostAssistantsAssistantIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAssistantsAssistantIdMutationKey() {
  return ['assistants', '/assistants/:assistant_id', 'DELETE'] as const
}

export function getDeleteAssistantsAssistantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assistants)[':assistant_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssistantsAssistantIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assistants)[':assistant_id']['$delete']>,
    ) {
      return parseResponse(client.assistants[':assistant_id'].$delete(args, options))
    },
  })
}

export function useDeleteAssistantsAssistantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assistants)[':assistant_id']['$delete']>,
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
  const mutationDefaults = getDeleteAssistantsAssistantIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAudioSpeechMutationKey() {
  return ['audio', '/audio/speech', 'POST'] as const
}

export function getPostAudioSpeechMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.speech.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.audio.speech.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAudioSpeechMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audio.speech.$post>) {
      return parseResponse(client.audio.speech.$post(args, options))
    },
  })
}

export function usePostAudioSpeech<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.speech.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.audio.speech.$post>,
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
  const mutationDefaults = getPostAudioSpeechMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAudioTranscriptionsMutationKey() {
  return ['audio', '/audio/transcriptions', 'POST'] as const
}

export function getPostAudioTranscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audio.transcriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.audio.transcriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAudioTranscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audio.transcriptions.$post>) {
      return parseResponse(client.audio.transcriptions.$post(args, options))
    },
  })
}

export function usePostAudioTranscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audio.transcriptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audio.transcriptions.$post>,
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
  const mutationDefaults = getPostAudioTranscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAudioTranslationsMutationKey() {
  return ['audio', '/audio/translations', 'POST'] as const
}

export function getPostAudioTranslationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.translations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.audio.translations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAudioTranslationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audio.translations.$post>) {
      return parseResponse(client.audio.translations.$post(args, options))
    },
  })
}

export function usePostAudioTranslations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audio.translations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audio.translations.$post>,
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
  const mutationDefaults = getPostAudioTranslationsMutationOptions<TError, TOnMutateResult>(
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

export function getAudioVoiceConsentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audio.voice_consents.$get>>,
) {
  return ['audio', '/audio/voice_consents', toValue(args)] as const
}

export function getAudioVoiceConsentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audio.voice_consents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudioVoiceConsentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audio.voice_consents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudioVoiceConsents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audio.voice_consents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>
            >
          >,
          ReturnType<typeof getAudioVoiceConsentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAudioVoiceConsentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudioVoiceConsentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audio.voice_consents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAudioVoiceConsentsMutationKey() {
  return ['audio', '/audio/voice_consents', 'POST'] as const
}

export function getPostAudioVoiceConsentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.audio.voice_consents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAudioVoiceConsentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audio.voice_consents.$post>) {
      return parseResponse(client.audio.voice_consents.$post(args, options))
    },
  })
}

export function usePostAudioVoiceConsents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audio.voice_consents.$post>,
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
  const mutationDefaults = getPostAudioVoiceConsentsMutationOptions<TError, TOnMutateResult>(
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

export function getAudioVoiceConsentsConsentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$get']>
  >,
) {
  return ['audio', '/audio/voice_consents/:consent_id', toValue(args)] as const
}

export function getAudioVoiceConsentsConsentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudioVoiceConsentsConsentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audio.voice_consents[':consent_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudioVoiceConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAudioVoiceConsentsConsentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioVoiceConsentsConsentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudioVoiceConsentsConsentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audio.voice_consents[':consent_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAudioVoiceConsentsConsentIdMutationKey() {
  return ['audio', '/audio/voice_consents/:consent_id', 'POST'] as const
}

export function getPostAudioVoiceConsentsConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAudioVoiceConsentsConsentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$post']>,
    ) {
      return parseResponse(client.audio.voice_consents[':consent_id'].$post(args, options))
    },
  })
}

export function usePostAudioVoiceConsentsConsentId<
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
                Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$post']>,
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
  const mutationDefaults = getPostAudioVoiceConsentsConsentIdMutationOptions<
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

export function getDeleteAudioVoiceConsentsConsentIdMutationKey() {
  return ['audio', '/audio/voice_consents/:consent_id', 'DELETE'] as const
}

export function getDeleteAudioVoiceConsentsConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAudioVoiceConsentsConsentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$delete']>,
    ) {
      return parseResponse(client.audio.voice_consents[':consent_id'].$delete(args, options))
    },
  })
}

export function useDeleteAudioVoiceConsentsConsentId<
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
                Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$delete']>,
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
  const mutationDefaults = getDeleteAudioVoiceConsentsConsentIdMutationOptions<
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

export function getPostAudioVoicesMutationKey() {
  return ['audio', '/audio/voices', 'POST'] as const
}

export function getPostAudioVoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.voices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.audio.voices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAudioVoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audio.voices.$post>) {
      return parseResponse(client.audio.voices.$post(args, options))
    },
  })
}

export function usePostAudioVoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.voices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.audio.voices.$post>,
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
  const mutationDefaults = getPostAudioVoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAudioVoicesVoiceIdMutationKey() {
  return ['audio', '/audio/voices/:voice_id', 'DELETE'] as const
}

export function getDeleteAudioVoicesVoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audio.voices)[':voice_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audio.voices)[':voice_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAudioVoicesVoiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.audio.voices)[':voice_id']['$delete']>) {
      return parseResponse(client.audio.voices[':voice_id'].$delete(args, options))
    },
  })
}

export function useDeleteAudioVoicesVoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audio.voices)[':voice_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.audio.voices)[':voice_id']['$delete']>,
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
  const mutationDefaults = getDeleteAudioVoicesVoiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getBatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.batches.$get>>,
) {
  return ['batches', '/batches', toValue(args)] as const
}

export function getBatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.batches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.batches.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.batches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
          >,
          ReturnType<typeof getBatchesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.batches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBatchesMutationKey() {
  return ['batches', '/batches', 'POST'] as const
}

export function getPostBatchesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$post>>>>>,
    TError,
    InferRequestType<typeof client.batches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.batches.$post>) {
      return parseResponse(client.batches.$post(args, options))
    },
  })
}

export function usePostBatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.batches.$post>,
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
  const mutationDefaults = getPostBatchesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBatchesBatchIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batches)[':batch_id']['$get']>>,
) {
  return ['batches', '/batches/:batch_id', toValue(args)] as const
}

export function getBatchesBatchIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batches)[':batch_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchesBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.batches[':batch_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBatchesBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batches)[':batch_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBatchesBatchIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchesBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchesBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.batches[':batch_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBatchesBatchIdCancelMutationKey() {
  return ['batches', '/batches/:batch_id/cancel', 'POST'] as const
}

export function getPostBatchesBatchIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.batches)[':batch_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.batches)[':batch_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchesBatchIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.batches)[':batch_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.batches[':batch_id'].cancel.$post(args, options))
    },
  })
}

export function usePostBatchesBatchIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.batches)[':batch_id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.batches)[':batch_id']['cancel']['$post']>,
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
  const mutationDefaults = getPostBatchesBatchIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getChatCompletionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.completions.$get>>,
) {
  return ['chat', '/chat/completions', toValue(args)] as const
}

export function getChatCompletionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.completions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatCompletionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.completions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatCompletions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.completions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>
            >
          >,
          ReturnType<typeof getChatCompletionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatCompletionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatCompletionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.completions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChatCompletionsMutationKey() {
  return ['chat', '/chat/completions', 'POST'] as const
}

export function getPostChatCompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chat.completions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatCompletionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.completions.$post>) {
      return parseResponse(client.chat.completions.$post(args, options))
    },
  })
}

export function usePostChatCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.chat.completions.$post>,
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
  const mutationDefaults = getPostChatCompletionsMutationOptions<TError, TOnMutateResult>(
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

export function getChatCompletionsCompletionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.completions)[':completion_id']['$get']>
  >,
) {
  return ['chat', '/chat/completions/:completion_id', toValue(args)] as const
}

export function getChatCompletionsCompletionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.completions)[':completion_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatCompletionsCompletionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.completions[':completion_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatCompletionsCompletionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.completions)[':completion_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChatCompletionsCompletionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatCompletionsCompletionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatCompletionsCompletionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.completions[':completion_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChatCompletionsCompletionIdMutationKey() {
  return ['chat', '/chat/completions/:completion_id', 'POST'] as const
}

export function getPostChatCompletionsCompletionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.chat.completions)[':completion_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatCompletionsCompletionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.chat.completions)[':completion_id']['$post']>,
    ) {
      return parseResponse(client.chat.completions[':completion_id'].$post(args, options))
    },
  })
}

export function usePostChatCompletionsCompletionId<
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
                Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.chat.completions)[':completion_id']['$post']>,
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
  const mutationDefaults = getPostChatCompletionsCompletionIdMutationOptions<
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

export function getDeleteChatCompletionsCompletionIdMutationKey() {
  return ['chat', '/chat/completions/:completion_id', 'DELETE'] as const
}

export function getDeleteChatCompletionsCompletionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.chat.completions)[':completion_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChatCompletionsCompletionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.chat.completions)[':completion_id']['$delete']>,
    ) {
      return parseResponse(client.chat.completions[':completion_id'].$delete(args, options))
    },
  })
}

export function useDeleteChatCompletionsCompletionId<
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
                Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.chat.completions)[':completion_id']['$delete']>,
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
  const mutationDefaults = getDeleteChatCompletionsCompletionIdMutationOptions<
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

export function getChatCompletionsCompletionIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>
  >,
) {
  return ['chat', '/chat/completions/:completion_id/messages', toValue(args)] as const
}

export function getChatCompletionsCompletionIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatCompletionsCompletionIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.completions[':completion_id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatCompletionsCompletionIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>
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
                  ReturnType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChatCompletionsCompletionIdMessagesQueryKey>
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
            ReturnType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatCompletionsCompletionIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatCompletionsCompletionIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.completions[':completion_id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCompletionsMutationKey() {
  return ['completions', '/completions', 'POST'] as const
}

export function getPostCompletionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.completions.$post>>>>>,
    TError,
    InferRequestType<typeof client.completions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompletionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.completions.$post>) {
      return parseResponse(client.completions.$post(args, options))
    },
  })
}

export function usePostCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.completions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.completions.$post>,
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
  const mutationDefaults = getPostCompletionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContainersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.containers.$get>>,
) {
  return ['containers', '/containers', toValue(args)] as const
}

export function getContainersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.containers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContainersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.containers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContainers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.containers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>
          >,
          ReturnType<typeof getContainersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContainersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContainersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.containers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContainersMutationKey() {
  return ['containers', '/containers', 'POST'] as const
}

export function getPostContainersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$post>>>>>,
    TError,
    InferRequestType<typeof client.containers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContainersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.containers.$post>) {
      return parseResponse(client.containers.$post(args, options))
    },
  })
}

export function usePostContainers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.containers.$post>,
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
  const mutationDefaults = getPostContainersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContainersContainerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.containers)[':container_id']['$get']>>,
) {
  return ['containers', '/containers/:container_id', toValue(args)] as const
}

export function getContainersContainerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.containers)[':container_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContainersContainerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.containers[':container_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContainersContainerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.containers)[':container_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.containers)[':container_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.containers)[':container_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.containers)[':container_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContainersContainerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.containers)[':container_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContainersContainerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContainersContainerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.containers[':container_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteContainersContainerIdMutationKey() {
  return ['containers', '/containers/:container_id', 'DELETE'] as const
}

export function getDeleteContainersContainerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.containers)[':container_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.containers)[':container_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContainersContainerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.containers)[':container_id']['$delete']>,
    ) {
      return parseResponse(client.containers[':container_id'].$delete(args, options))
    },
  })
}

export function useDeleteContainersContainerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.containers)[':container_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.containers)[':container_id']['$delete']>,
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
  const mutationDefaults = getDeleteContainersContainerIdMutationOptions<TError, TOnMutateResult>(
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

export function getContainersContainerIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.containers)[':container_id']['files']['$get']>
  >,
) {
  return ['containers', '/containers/:container_id/files', toValue(args)] as const
}

export function getContainersContainerIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.containers)[':container_id']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContainersContainerIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.containers[':container_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContainersContainerIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.containers)[':container_id']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContainersContainerIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContainersContainerIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContainersContainerIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.containers[':container_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContainersContainerIdFilesMutationKey() {
  return ['containers', '/containers/:container_id/files', 'POST'] as const
}

export function getPostContainersContainerIdFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.containers)[':container_id']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContainersContainerIdFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.containers)[':container_id']['files']['$post']>,
    ) {
      return parseResponse(client.containers[':container_id'].files.$post(args, options))
    },
  })
}

export function usePostContainersContainerIdFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.containers)[':container_id']['files']['$post']>,
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
  const mutationDefaults = getPostContainersContainerIdFilesMutationOptions<
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

export function getContainersContainerIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>
  >,
) {
  return ['containers', '/containers/:container_id/files/:file_id', toValue(args)] as const
}

export function getContainersContainerIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContainersContainerIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.containers[':container_id'].files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContainersContainerIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>
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
                    (typeof client.containers)[':container_id']['files'][':file_id']['$get']
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
                    (typeof client.containers)[':container_id']['files'][':file_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContainersContainerIdFilesFileIdQueryKey>
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
            ReturnType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContainersContainerIdFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContainersContainerIdFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.containers[':container_id'].files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteContainersContainerIdFilesFileIdMutationKey() {
  return ['containers', '/containers/:container_id/files/:file_id', 'DELETE'] as const
}

export function getDeleteContainersContainerIdFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContainersContainerIdFilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.containers)[':container_id']['files'][':file_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.containers[':container_id'].files[':file_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteContainersContainerIdFilesFileId<
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
                    (typeof client.containers)[':container_id']['files'][':file_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.containers)[':container_id']['files'][':file_id']['$delete']
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
  const mutationDefaults = getDeleteContainersContainerIdFilesFileIdMutationOptions<
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

export function getContainersContainerIdFilesFileIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
    >
  >,
) {
  return ['containers', '/containers/:container_id/files/:file_id/content', toValue(args)] as const
}

export function getContainersContainerIdFilesFileIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContainersContainerIdFilesFileIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.containers[':container_id'].files[':file_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContainersContainerIdFilesFileIdContent<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
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
                    (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
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
                    (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContainersContainerIdFilesFileIdContentQueryKey>
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
              (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContainersContainerIdFilesFileIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContainersContainerIdFilesFileIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.containers[':container_id'].files[':file_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConversationIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$get']>
  >,
) {
  return ['conversations', '/conversations/:conversation_id/items', toValue(args)] as const
}

export function getConversationsConversationIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversationIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':conversation_id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConversationIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.conversations)[':conversation_id']['items']['$get']>
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
                  ReturnType<(typeof client.conversations)[':conversation_id']['items']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversationIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversationIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversationIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':conversation_id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsConversationIdItemsMutationKey() {
  return ['conversations', '/conversations/:conversation_id/items', 'POST'] as const
}

export function getPostConversationsConversationIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$post']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].items.$post(args, options))
    },
  })
}

export function usePostConversationsConversationIdItems<
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
                  ReturnType<(typeof client.conversations)[':conversation_id']['items']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$post']>,
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
  const mutationDefaults = getPostConversationsConversationIdItemsMutationOptions<
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

export function getConversationsConversationIdItemsItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']>
  >,
) {
  return ['conversations', '/conversations/:conversation_id/items/:item_id', toValue(args)] as const
}

export function getConversationsConversationIdItemsItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversationIdItemsItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':conversation_id'].items[':item_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConversationIdItemsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']>
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
                    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
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
                    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversationIdItemsItemIdQueryKey>
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
              (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversationIdItemsItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversationIdItemsItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':conversation_id'].items[':item_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteConversationsConversationIdItemsItemIdMutationKey() {
  return ['conversations', '/conversations/:conversation_id/items/:item_id', 'DELETE'] as const
}

export function getDeleteConversationsConversationIdItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.conversations)[':conversation_id']['items'][':item_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConversationIdItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':conversation_id']['items'][':item_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations[':conversation_id'].items[':item_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteConversationsConversationIdItemsItemId<
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
                    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations)[':conversation_id']['items'][':item_id']['$delete']
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
  const mutationDefaults = getDeleteConversationsConversationIdItemsItemIdMutationOptions<
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

export function getPostEmbeddingsMutationKey() {
  return ['embeddings', '/embeddings', 'POST'] as const
}

export function getPostEmbeddingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.embeddings.$post>>>>>,
    TError,
    InferRequestType<typeof client.embeddings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmbeddingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.embeddings.$post>) {
      return parseResponse(client.embeddings.$post(args, options))
    },
  })
}

export function usePostEmbeddings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.embeddings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.embeddings.$post>,
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
  const mutationDefaults = getPostEmbeddingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEvalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.evals.$get>>,
) {
  return ['evals', '/evals', toValue(args)] as const
}

export function getEvalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.evals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.evals.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.evals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
          ReturnType<typeof getEvalsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEvalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.evals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvalsMutationKey() {
  return ['evals', '/evals', 'POST'] as const
}

export function getPostEvalsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$post>>>>>,
    TError,
    InferRequestType<typeof client.evals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.evals.$post>) {
      return parseResponse(client.evals.$post(args, options))
    },
  })
}

export function usePostEvals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$post>>>>>,
          TError,
          InferRequestType<typeof client.evals.$post>,
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
  const mutationDefaults = getPostEvalsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEvalsEvalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evals)[':eval_id']['$get']>>,
) {
  return ['evals', '/evals/:eval_id', toValue(args)] as const
}

export function getEvalsEvalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evals)[':eval_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalsEvalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.evals[':eval_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalsEvalId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evals)[':eval_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>
            >
          >,
          ReturnType<typeof getEvalsEvalIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalsEvalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalsEvalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.evals[':eval_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvalsEvalIdMutationKey() {
  return ['evals', '/evals/:eval_id', 'POST'] as const
}

export function getPostEvalsEvalIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.evals)[':eval_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalsEvalIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.evals)[':eval_id']['$post']>) {
      return parseResponse(client.evals[':eval_id'].$post(args, options))
    },
  })
}

export function usePostEvalsEvalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.evals)[':eval_id']['$post']>,
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
  const mutationDefaults = getPostEvalsEvalIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEvalsEvalIdMutationKey() {
  return ['evals', '/evals/:eval_id', 'DELETE'] as const
}

export function getDeleteEvalsEvalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.evals)[':eval_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEvalsEvalIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.evals)[':eval_id']['$delete']>) {
      return parseResponse(client.evals[':eval_id'].$delete(args, options))
    },
  })
}

export function useDeleteEvalsEvalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evals)[':eval_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.evals)[':eval_id']['$delete']>,
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
  const mutationDefaults = getDeleteEvalsEvalIdMutationOptions<TError, TOnMutateResult>(
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

export function getEvalsEvalIdRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evals)[':eval_id']['runs']['$get']>>,
) {
  return ['evals', '/evals/:eval_id/runs', toValue(args)] as const
}

export function getEvalsEvalIdRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evals)[':eval_id']['runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalsEvalIdRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.evals[':eval_id'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalsEvalIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evals)[':eval_id']['runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvalsEvalIdRunsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalsEvalIdRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalsEvalIdRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.evals[':eval_id'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvalsEvalIdRunsMutationKey() {
  return ['evals', '/evals/:eval_id/runs', 'POST'] as const
}

export function getPostEvalsEvalIdRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.evals)[':eval_id']['runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalsEvalIdRunsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.evals)[':eval_id']['runs']['$post']>) {
      return parseResponse(client.evals[':eval_id'].runs.$post(args, options))
    },
  })
}

export function usePostEvalsEvalIdRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.evals)[':eval_id']['runs']['$post']>,
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
  const mutationDefaults = getPostEvalsEvalIdRunsMutationOptions<TError, TOnMutateResult>(
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

export function getEvalsEvalIdRunsRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>
  >,
) {
  return ['evals', '/evals/:eval_id/runs/:run_id', toValue(args)] as const
}

export function getEvalsEvalIdRunsRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalsEvalIdRunsRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.evals[':eval_id'].runs[':run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalsEvalIdRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvalsEvalIdRunsRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalsEvalIdRunsRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalsEvalIdRunsRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.evals[':eval_id'].runs[':run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEvalsEvalIdRunsRunIdMutationKey() {
  return ['evals', '/evals/:eval_id/runs/:run_id', 'DELETE'] as const
}

export function getDeleteEvalsEvalIdRunsRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEvalsEvalIdRunsRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$delete']>,
    ) {
      return parseResponse(client.evals[':eval_id'].runs[':run_id'].$delete(args, options))
    },
  })
}

export function useDeleteEvalsEvalIdRunsRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$delete']>,
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
  const mutationDefaults = getDeleteEvalsEvalIdRunsRunIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostEvalsEvalIdRunsRunIdCancelMutationKey() {
  return ['evals', '/evals/:eval_id/runs/:run_id/cancel', 'POST'] as const
}

export function getPostEvalsEvalIdRunsRunIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalsEvalIdRunsRunIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.evals)[':eval_id']['runs'][':run_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.evals[':eval_id'].runs[':run_id'].cancel.$post(args, options))
    },
  })
}

export function usePostEvalsEvalIdRunsRunIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.evals)[':eval_id']['runs'][':run_id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['cancel']['$post']>,
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
  const mutationDefaults = getPostEvalsEvalIdRunsRunIdCancelMutationOptions<
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

export function getEvalsEvalIdRunsRunIdOutputItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']>
  >,
) {
  return ['evals', '/evals/:eval_id/runs/:run_id/output_items', toValue(args)] as const
}

export function getEvalsEvalIdRunsRunIdOutputItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalsEvalIdRunsRunIdOutputItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.evals[':eval_id'].runs[':run_id'].output_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalsEvalIdRunsRunIdOutputItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']>
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
                    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
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
                    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEvalsEvalIdRunsRunIdOutputItemsQueryKey>
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
            ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalsEvalIdRunsRunIdOutputItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalsEvalIdRunsRunIdOutputItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.evals[':eval_id'].runs[':run_id'].output_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
    >
  >,
) {
  return [
    'evals',
    '/evals/:eval_id/runs/:run_id/output_items/:output_item_id',
    toValue(args),
  ] as const
}

export function getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.evals[':eval_id'].runs[':run_id'].output_items[':output_item_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useEvalsEvalIdRunsRunIdOutputItemsOutputItemId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
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
                    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
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
                    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdQueryKey>
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
              (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.evals[':eval_id'].runs[':run_id'].output_items[':output_item_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
) {
  return ['files', '/files', toValue(args)] as const
}

export function getFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          ReturnType<typeof getFilesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesMutationKey() {
  return ['files', '/files', 'POST'] as const
}

export function getPostFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.$post>) {
      return parseResponse(client.files.$post(args, options))
    },
  })
}

export function usePostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
          TError,
          InferRequestType<typeof client.files.$post>,
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
  const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
) {
  return ['files', '/files/:file_id', toValue(args)] as const
}

export function getFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
            >
          >,
          ReturnType<typeof getFilesFileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdMutationKey() {
  return ['files', '/files/:file_id', 'DELETE'] as const
}

export function getDeleteFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':file_id']['$delete']>) {
      return parseResponse(client.files[':file_id'].$delete(args, options))
    },
  })
}

export function useDeleteFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':file_id']['$delete']>,
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
  const mutationDefaults = getDeleteFilesFileIdMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdContentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['content']['$get']>>,
) {
  return ['files', '/files/:file_id/content', toValue(args)] as const
}

export function getFilesFileIdContentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['content']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['content']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFineTuningAlphaGradersRunMutationKey() {
  return ['fine_tuning', '/fine_tuning/alpha/graders/run', 'POST'] as const
}

export function getPostFineTuningAlphaGradersRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.alpha.graders.run.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.fine_tuning.alpha.graders.run.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFineTuningAlphaGradersRunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fine_tuning.alpha.graders.run.$post>) {
      return parseResponse(client.fine_tuning.alpha.graders.run.$post(args, options))
    },
  })
}

export function usePostFineTuningAlphaGradersRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.fine_tuning.alpha.graders.run.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.fine_tuning.alpha.graders.run.$post>,
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
  const mutationDefaults = getPostFineTuningAlphaGradersRunMutationOptions<TError, TOnMutateResult>(
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

export function getPostFineTuningAlphaGradersValidateMutationKey() {
  return ['fine_tuning', '/fine_tuning/alpha/graders/validate', 'POST'] as const
}

export function getPostFineTuningAlphaGradersValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.fine_tuning.alpha.graders.validate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.fine_tuning.alpha.graders.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFineTuningAlphaGradersValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.fine_tuning.alpha.graders.validate.$post>,
    ) {
      return parseResponse(client.fine_tuning.alpha.graders.validate.$post(args, options))
    },
  })
}

export function usePostFineTuningAlphaGradersValidate<
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
                Awaited<ReturnType<typeof client.fine_tuning.alpha.graders.validate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.fine_tuning.alpha.graders.validate.$post>,
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
  const mutationDefaults = getPostFineTuningAlphaGradersValidateMutationOptions<
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

export function getFineTuningCheckpointsFineTunedModelCheckpointPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
    >
  >,
) {
  return [
    'fine_tuning',
    '/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions',
    toValue(args),
  ] as const
}

export function getFineTuningCheckpointsFineTunedModelCheckpointPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFineTuningCheckpointsFineTunedModelCheckpointPermissionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFineTuningCheckpointsFineTunedModelCheckpointPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
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
                    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
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
                    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFineTuningCheckpointsFineTunedModelCheckpointPermissionsQueryKey>
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
              (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFineTuningCheckpointsFineTunedModelCheckpointPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFineTuningCheckpointsFineTunedModelCheckpointPermissionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostFineTuningCheckpointsFineTunedModelCheckpointPermissionsMutationKey() {
  return [
    'fine_tuning',
    '/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions',
    'POST',
  ] as const
}

export function getPostFineTuningCheckpointsFineTunedModelCheckpointPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFineTuningCheckpointsFineTunedModelCheckpointPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$post']
      >,
    ) {
      return parseResponse(
        client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostFineTuningCheckpointsFineTunedModelCheckpointPermissions<
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
                    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$post']
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
    getPostFineTuningCheckpointsFineTunedModelCheckpointPermissionsMutationOptions<
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

export function getDeleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionIdMutationKey() {
  return [
    'fine_tuning',
    '/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions/:permission_id',
    'DELETE',
  ] as const
}

export function getDeleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions'][':permission_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions'][':permission_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions[
          ':permission_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionId<
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
                    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions'][':permission_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions'][':permission_id']['$delete']
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
    getDeleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionIdMutationOptions<
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

export function getFineTuningJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fine_tuning.jobs.$get>>,
) {
  return ['fine_tuning', '/fine_tuning/jobs', toValue(args)] as const
}

export function getFineTuningJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fine_tuning.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFineTuningJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fine_tuning.jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFineTuningJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fine_tuning.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>
            >
          >,
          ReturnType<typeof getFineTuningJobsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFineTuningJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFineTuningJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fine_tuning.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFineTuningJobsMutationKey() {
  return ['fine_tuning', '/fine_tuning/jobs', 'POST'] as const
}

export function getPostFineTuningJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fine_tuning.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFineTuningJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fine_tuning.jobs.$post>) {
      return parseResponse(client.fine_tuning.jobs.$post(args, options))
    },
  })
}

export function usePostFineTuningJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.fine_tuning.jobs.$post>,
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
  const mutationDefaults = getPostFineTuningJobsMutationOptions<TError, TOnMutateResult>(
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

export function getFineTuningJobsFineTuningJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>
  >,
) {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id', toValue(args)] as const
}

export function getFineTuningJobsFineTuningJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFineTuningJobsFineTuningJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fine_tuning.jobs[':fine_tuning_job_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFineTuningJobsFineTuningJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFineTuningJobsFineTuningJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFineTuningJobsFineTuningJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFineTuningJobsFineTuningJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fine_tuning.jobs[':fine_tuning_job_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFineTuningJobsFineTuningJobIdCancelMutationKey() {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/cancel', 'POST'] as const
}

export function getPostFineTuningJobsFineTuningJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFineTuningJobsFineTuningJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.fine_tuning.jobs[':fine_tuning_job_id'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostFineTuningJobsFineTuningJobIdCancel<
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
                    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['cancel']['$post']
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
  const mutationDefaults = getPostFineTuningJobsFineTuningJobIdCancelMutationOptions<
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

export function getFineTuningJobsFineTuningJobIdCheckpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']>
  >,
) {
  return [
    'fine_tuning',
    '/fine_tuning/jobs/:fine_tuning_job_id/checkpoints',
    toValue(args),
  ] as const
}

export function getFineTuningJobsFineTuningJobIdCheckpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFineTuningJobsFineTuningJobIdCheckpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fine_tuning.jobs[':fine_tuning_job_id'].checkpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFineTuningJobsFineTuningJobIdCheckpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']>
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
                    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
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
                    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFineTuningJobsFineTuningJobIdCheckpointsQueryKey>
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
              (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFineTuningJobsFineTuningJobIdCheckpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFineTuningJobsFineTuningJobIdCheckpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fine_tuning.jobs[':fine_tuning_job_id'].checkpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFineTuningJobsFineTuningJobIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>
  >,
) {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/events', toValue(args)] as const
}

export function getFineTuningJobsFineTuningJobIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFineTuningJobsFineTuningJobIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fine_tuning.jobs[':fine_tuning_job_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFineTuningJobsFineTuningJobIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>
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
                    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']
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
                    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFineTuningJobsFineTuningJobIdEventsQueryKey>
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
            ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFineTuningJobsFineTuningJobIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFineTuningJobsFineTuningJobIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fine_tuning.jobs[':fine_tuning_job_id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFineTuningJobsFineTuningJobIdPauseMutationKey() {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/pause', 'POST'] as const
}

export function getPostFineTuningJobsFineTuningJobIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFineTuningJobsFineTuningJobIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.fine_tuning.jobs[':fine_tuning_job_id'].pause.$post(args, options),
      )
    },
  })
}

export function usePostFineTuningJobsFineTuningJobIdPause<
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
                    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['pause']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['pause']['$post']
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
  const mutationDefaults = getPostFineTuningJobsFineTuningJobIdPauseMutationOptions<
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

export function getPostFineTuningJobsFineTuningJobIdResumeMutationKey() {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/resume', 'POST'] as const
}

export function getPostFineTuningJobsFineTuningJobIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFineTuningJobsFineTuningJobIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['resume']['$post']
      >,
    ) {
      return parseResponse(
        client.fine_tuning.jobs[':fine_tuning_job_id'].resume.$post(args, options),
      )
    },
  })
}

export function usePostFineTuningJobsFineTuningJobIdResume<
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
                    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['resume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['resume']['$post']
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
  const mutationDefaults = getPostFineTuningJobsFineTuningJobIdResumeMutationOptions<
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

export function getPostImagesEditsMutationKey() {
  return ['images', '/images/edits', 'POST'] as const
}

export function getPostImagesEditsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.edits.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.images.edits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImagesEditsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.images.edits.$post>) {
      return parseResponse(client.images.edits.$post(args, options))
    },
  })
}

export function usePostImagesEdits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.edits.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.images.edits.$post>,
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
  const mutationDefaults = getPostImagesEditsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostImagesGenerationsMutationKey() {
  return ['images', '/images/generations', 'POST'] as const
}

export function getPostImagesGenerationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.generations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.images.generations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImagesGenerationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.images.generations.$post>) {
      return parseResponse(client.images.generations.$post(args, options))
    },
  })
}

export function usePostImagesGenerations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.images.generations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.images.generations.$post>,
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
  const mutationDefaults = getPostImagesGenerationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostImagesVariationsMutationKey() {
  return ['images', '/images/variations', 'POST'] as const
}

export function getPostImagesVariationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.variations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.images.variations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImagesVariationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.images.variations.$post>) {
      return parseResponse(client.images.variations.$post(args, options))
    },
  })
}

export function usePostImagesVariations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.images.variations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.images.variations.$post>,
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
  const mutationDefaults = getPostImagesVariationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostLiveSessionsMutationKey() {
  return ['live', '/live/sessions', 'POST'] as const
}

export function getPostLiveSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.live.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.live.sessions.$post>) {
      return parseResponse(client.live.sessions.$post(args, options))
    },
  })
}

export function usePostLiveSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.sessions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.live.sessions.$post>,
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
  const mutationDefaults = getPostLiveSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostLiveSessionsSessionIdAcceptMutationKey() {
  return ['live', '/live/sessions/:session_id/accept', 'POST'] as const
}

export function getPostLiveSessionsSessionIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.live.sessions)[':session_id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveSessionsSessionIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.live.sessions)[':session_id']['accept']['$post']>,
    ) {
      return parseResponse(client.live.sessions[':session_id'].accept.$post(args, options))
    },
  })
}

export function usePostLiveSessionsSessionIdAccept<
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
                Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['accept']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.live.sessions)[':session_id']['accept']['$post']>,
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
  const mutationDefaults = getPostLiveSessionsSessionIdAcceptMutationOptions<
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

export function getPostLiveSessionsSessionIdForkMutationKey() {
  return ['live', '/live/sessions/:session_id/fork', 'POST'] as const
}

export function getPostLiveSessionsSessionIdForkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['fork']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.live.sessions)[':session_id']['fork']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveSessionsSessionIdForkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.live.sessions)[':session_id']['fork']['$post']>,
    ) {
      return parseResponse(client.live.sessions[':session_id'].fork.$post(args, options))
    },
  })
}

export function usePostLiveSessionsSessionIdFork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['fork']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.live.sessions)[':session_id']['fork']['$post']>,
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
  const mutationDefaults = getPostLiveSessionsSessionIdForkMutationOptions<TError, TOnMutateResult>(
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

export function getPostLiveSessionsSessionIdHangupMutationKey() {
  return ['live', '/live/sessions/:session_id/hangup', 'POST'] as const
}

export function getPostLiveSessionsSessionIdHangupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['hangup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.live.sessions)[':session_id']['hangup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveSessionsSessionIdHangupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.live.sessions)[':session_id']['hangup']['$post']>,
    ) {
      return parseResponse(client.live.sessions[':session_id'].hangup.$post(args, options))
    },
  })
}

export function usePostLiveSessionsSessionIdHangup<
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
                Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['hangup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.live.sessions)[':session_id']['hangup']['$post']>,
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
  const mutationDefaults = getPostLiveSessionsSessionIdHangupMutationOptions<
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

export function getPostLiveSessionsSessionIdReferMutationKey() {
  return ['live', '/live/sessions/:session_id/refer', 'POST'] as const
}

export function getPostLiveSessionsSessionIdReferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['refer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.live.sessions)[':session_id']['refer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveSessionsSessionIdReferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.live.sessions)[':session_id']['refer']['$post']>,
    ) {
      return parseResponse(client.live.sessions[':session_id'].refer.$post(args, options))
    },
  })
}

export function usePostLiveSessionsSessionIdRefer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['refer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.live.sessions)[':session_id']['refer']['$post']>,
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
  const mutationDefaults = getPostLiveSessionsSessionIdReferMutationOptions<
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

export function getPostLiveSessionsSessionIdRejectMutationKey() {
  return ['live', '/live/sessions/:session_id/reject', 'POST'] as const
}

export function getPostLiveSessionsSessionIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['reject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.live.sessions)[':session_id']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveSessionsSessionIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.live.sessions)[':session_id']['reject']['$post']>,
    ) {
      return parseResponse(client.live.sessions[':session_id'].reject.$post(args, options))
    },
  })
}

export function usePostLiveSessionsSessionIdReject<
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
                Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['reject']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.live.sessions)[':session_id']['reject']['$post']>,
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
  const mutationDefaults = getPostLiveSessionsSessionIdRejectMutationOptions<
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

export function getModelsQueryKey() {
  return ['models', '/models'] as const
}

export function getModelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getModelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useModels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
          ReturnType<typeof getModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getModelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.models.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModelsModelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':model']['$get']>>,
) {
  return ['models', '/models/:model', toValue(args)] as const
}

export function getModelsModelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':model']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsModelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':model'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsModel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':model']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>
            >
          >,
          ReturnType<typeof getModelsModelQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsModelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':model'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteModelsModelMutationKey() {
  return ['models', '/models/:model', 'DELETE'] as const
}

export function getDeleteModelsModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':model']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModelsModelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.models)[':model']['$delete']>) {
      return parseResponse(client.models[':model'].$delete(args, options))
    },
  })
}

export function useDeleteModelsModel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.models)[':model']['$delete']>,
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
  const mutationDefaults = getDeleteModelsModelMutationOptions<TError, TOnMutateResult>(
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

export function getPostModerationsMutationKey() {
  return ['moderations', '/moderations', 'POST'] as const
}

export function getPostModerationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderations.$post>>>>>,
    TError,
    InferRequestType<typeof client.moderations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderations.$post>) {
      return parseResponse(client.moderations.$post(args, options))
    },
  })
}

export function usePostModerations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.moderations.$post>,
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
  const mutationDefaults = getPostModerationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationAdminApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.admin_api_keys.$get>>,
) {
  return ['organization', '/organization/admin_api_keys', toValue(args)] as const
}

export function getOrganizationAdminApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.admin_api_keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationAdminApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.admin_api_keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationAdminApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.admin_api_keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationAdminApiKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationAdminApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationAdminApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.admin_api_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationAdminApiKeysMutationKey() {
  return ['organization', '/organization/admin_api_keys', 'POST'] as const
}

export function getPostOrganizationAdminApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.admin_api_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationAdminApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.admin_api_keys.$post>) {
      return parseResponse(client.organization.admin_api_keys.$post(args, options))
    },
  })
}

export function usePostOrganizationAdminApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.admin_api_keys.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.admin_api_keys.$post>,
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
  const mutationDefaults = getPostOrganizationAdminApiKeysMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationAdminApiKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>
  >,
) {
  return ['organization', '/organization/admin_api_keys/:key_id', toValue(args)] as const
}

export function getOrganizationAdminApiKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationAdminApiKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.admin_api_keys[':key_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationAdminApiKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationAdminApiKeysKeyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationAdminApiKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationAdminApiKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.admin_api_keys[':key_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationAdminApiKeysKeyIdMutationKey() {
  return ['organization', '/organization/admin_api_keys/:key_id', 'DELETE'] as const
}

export function getDeleteOrganizationAdminApiKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationAdminApiKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$delete']>,
    ) {
      return parseResponse(client.organization.admin_api_keys[':key_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationAdminApiKeysKeyId<
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
                  ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationAdminApiKeysKeyIdMutationOptions<
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

export function getOrganizationAuditLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.audit_logs.$get>>,
) {
  return ['organization', '/organization/audit_logs', toValue(args)] as const
}

export function getOrganizationAuditLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.audit_logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationAuditLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.audit_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.audit_logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationAuditLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationAuditLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationAuditLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.audit_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationCertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.certificates.$get>>,
) {
  return ['organization', '/organization/certificates', toValue(args)] as const
}

export function getOrganizationCertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.certificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.certificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.certificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.certificates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.certificates.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationCertificatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationCertificatesMutationKey() {
  return ['organization', '/organization/certificates', 'POST'] as const
}

export function getPostOrganizationCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationCertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.certificates.$post>) {
      return parseResponse(client.organization.certificates.$post(args, options))
    },
  })
}

export function usePostOrganizationCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.certificates.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.certificates.$post>,
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
  const mutationDefaults = getPostOrganizationCertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrganizationCertificatesActivateMutationKey() {
  return ['organization', '/organization/certificates/activate', 'POST'] as const
}

export function getPostOrganizationCertificatesActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organization.certificates.activate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.organization.certificates.activate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationCertificatesActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.organization.certificates.activate.$post>,
    ) {
      return parseResponse(client.organization.certificates.activate.$post(args, options))
    },
  })
}

export function usePostOrganizationCertificatesActivate<
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
                Awaited<ReturnType<typeof client.organization.certificates.activate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.certificates.activate.$post>,
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
  const mutationDefaults = getPostOrganizationCertificatesActivateMutationOptions<
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

export function getPostOrganizationCertificatesDeactivateMutationKey() {
  return ['organization', '/organization/certificates/deactivate', 'POST'] as const
}

export function getPostOrganizationCertificatesDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organization.certificates.deactivate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.organization.certificates.deactivate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationCertificatesDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.organization.certificates.deactivate.$post>,
    ) {
      return parseResponse(client.organization.certificates.deactivate.$post(args, options))
    },
  })
}

export function usePostOrganizationCertificatesDeactivate<
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
                Awaited<ReturnType<typeof client.organization.certificates.deactivate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.certificates.deactivate.$post>,
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
  const mutationDefaults = getPostOrganizationCertificatesDeactivateMutationOptions<
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

export function getOrganizationCertificatesCertificateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$get']>
  >,
) {
  return ['organization', '/organization/certificates/:certificate_id', toValue(args)] as const
}

export function getOrganizationCertificatesCertificateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationCertificatesCertificateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.certificates[':certificate_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationCertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.certificates)[':certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organization.certificates)[':certificate_id']['$get']>
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
                  ReturnType<(typeof client.organization.certificates)[':certificate_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationCertificatesCertificateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.certificates)[':certificate_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationCertificatesCertificateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationCertificatesCertificateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.certificates[':certificate_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationCertificatesCertificateIdMutationKey() {
  return ['organization', '/organization/certificates/:certificate_id', 'POST'] as const
}

export function getPostOrganizationCertificatesCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.certificates)[':certificate_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationCertificatesCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$post']>,
    ) {
      return parseResponse(client.organization.certificates[':certificate_id'].$post(args, options))
    },
  })
}

export function usePostOrganizationCertificatesCertificateId<
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
                  ReturnType<(typeof client.organization.certificates)[':certificate_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$post']>,
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
  const mutationDefaults = getPostOrganizationCertificatesCertificateIdMutationOptions<
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

export function getDeleteOrganizationCertificatesCertificateIdMutationKey() {
  return ['organization', '/organization/certificates/:certificate_id', 'DELETE'] as const
}

export function getDeleteOrganizationCertificatesCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationCertificatesCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.certificates)[':certificate_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.certificates[':certificate_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationCertificatesCertificateId<
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
                    (typeof client.organization.certificates)[':certificate_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationCertificatesCertificateIdMutationOptions<
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

export function getOrganizationCostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.costs.$get>>,
) {
  return ['organization', '/organization/costs', toValue(args)] as const
}

export function getOrganizationCostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.costs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationCostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.costs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationCosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.costs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationCostsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationCostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationCostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.costs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationDataRetentionQueryKey() {
  return ['organization', '/organization/data_retention'] as const
}

export function getOrganizationDataRetentionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrganizationDataRetentionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.data_retention.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationDataRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.data_retention.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.data_retention.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationDataRetentionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationDataRetentionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrganizationDataRetentionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.data_retention.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationDataRetentionMutationKey() {
  return ['organization', '/organization/data_retention', 'POST'] as const
}

export function getPostOrganizationDataRetentionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.data_retention.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationDataRetentionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.data_retention.$post>) {
      return parseResponse(client.organization.data_retention.$post(args, options))
    },
  })
}

export function usePostOrganizationDataRetention<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.data_retention.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.data_retention.$post>,
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
  const mutationDefaults = getPostOrganizationDataRetentionMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.groups.$get>>,
) {
  return ['organization', '/organization/groups', toValue(args)] as const
}

export function getOrganizationGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationGroupsMutationKey() {
  return ['organization', '/organization/groups', 'POST'] as const
}

export function getPostOrganizationGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organization.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.groups.$post>) {
      return parseResponse(client.organization.groups.$post(args, options))
    },
  })
}

export function usePostOrganizationGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.organization.groups.$post>,
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
  const mutationDefaults = getPostOrganizationGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['$get']>
  >,
) {
  return ['organization', '/organization/groups/:group_id', toValue(args)] as const
}

export function getOrganizationGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationGroupsGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationGroupsGroupIdMutationKey() {
  return ['organization', '/organization/groups/:group_id', 'POST'] as const
}

export function getPostOrganizationGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.groups)[':group_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.groups)[':group_id']['$post']>,
    ) {
      return parseResponse(client.organization.groups[':group_id'].$post(args, options))
    },
  })
}

export function usePostOrganizationGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.groups)[':group_id']['$post']>,
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
  const mutationDefaults = getPostOrganizationGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationGroupsGroupIdMutationKey() {
  return ['organization', '/organization/groups/:group_id', 'DELETE'] as const
}

export function getDeleteOrganizationGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.groups)[':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.groups)[':group_id']['$delete']>,
    ) {
      return parseResponse(client.organization.groups[':group_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationGroupsGroupId<
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
                Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.groups)[':group_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationGroupsGroupIdMutationOptions<
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

export function getOrganizationGroupsGroupIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$get']>
  >,
) {
  return ['organization', '/organization/groups/:group_id/roles', toValue(args)] as const
}

export function getOrganizationGroupsGroupIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationGroupsGroupIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.groups[':group_id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationGroupsGroupIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$get']>
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
                  ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationGroupsGroupIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationGroupsGroupIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationGroupsGroupIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.groups[':group_id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationGroupsGroupIdRolesMutationKey() {
  return ['organization', '/organization/groups/:group_id/roles', 'POST'] as const
}

export function getPostOrganizationGroupsGroupIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationGroupsGroupIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$post']>,
    ) {
      return parseResponse(client.organization.groups[':group_id'].roles.$post(args, options))
    },
  })
}

export function usePostOrganizationGroupsGroupIdRoles<
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
                  ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$post']>,
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
  const mutationDefaults = getPostOrganizationGroupsGroupIdRolesMutationOptions<
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

export function getOrganizationGroupsGroupIdRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']>
  >,
) {
  return ['organization', '/organization/groups/:group_id/roles/:role_id', toValue(args)] as const
}

export function getOrganizationGroupsGroupIdRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationGroupsGroupIdRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.groups[':group_id'].roles[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationGroupsGroupIdRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']>
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
                    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
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
                    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationGroupsGroupIdRolesRoleIdQueryKey>
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
              (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationGroupsGroupIdRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationGroupsGroupIdRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.groups[':group_id'].roles[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationGroupsGroupIdRolesRoleIdMutationKey() {
  return ['organization', '/organization/groups/:group_id/roles/:role_id', 'DELETE'] as const
}

export function getDeleteOrganizationGroupsGroupIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationGroupsGroupIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.groups[':group_id'].roles[':role_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationGroupsGroupIdRolesRoleId<
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
                    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationGroupsGroupIdRolesRoleIdMutationOptions<
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

export function getOrganizationGroupsGroupIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$get']>
  >,
) {
  return ['organization', '/organization/groups/:group_id/users', toValue(args)] as const
}

export function getOrganizationGroupsGroupIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationGroupsGroupIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.groups[':group_id'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationGroupsGroupIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organization.groups)[':group_id']['users']['$get']>
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
                  ReturnType<(typeof client.organization.groups)[':group_id']['users']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationGroupsGroupIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationGroupsGroupIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationGroupsGroupIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.groups[':group_id'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationGroupsGroupIdUsersMutationKey() {
  return ['organization', '/organization/groups/:group_id/users', 'POST'] as const
}

export function getPostOrganizationGroupsGroupIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationGroupsGroupIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$post']>,
    ) {
      return parseResponse(client.organization.groups[':group_id'].users.$post(args, options))
    },
  })
}

export function usePostOrganizationGroupsGroupIdUsers<
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
                  ReturnType<(typeof client.organization.groups)[':group_id']['users']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$post']>,
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
  const mutationDefaults = getPostOrganizationGroupsGroupIdUsersMutationOptions<
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

export function getOrganizationGroupsGroupIdUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']>
  >,
) {
  return ['organization', '/organization/groups/:group_id/users/:user_id', toValue(args)] as const
}

export function getOrganizationGroupsGroupIdUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationGroupsGroupIdUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.groups[':group_id'].users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationGroupsGroupIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']>
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
                    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
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
                    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationGroupsGroupIdUsersUserIdQueryKey>
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
              (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationGroupsGroupIdUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationGroupsGroupIdUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.groups[':group_id'].users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationGroupsGroupIdUsersUserIdMutationKey() {
  return ['organization', '/organization/groups/:group_id/users/:user_id', 'DELETE'] as const
}

export function getDeleteOrganizationGroupsGroupIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.groups)[':group_id']['users'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationGroupsGroupIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.groups)[':group_id']['users'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.groups[':group_id'].users[':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationGroupsGroupIdUsersUserId<
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
                    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.groups)[':group_id']['users'][':user_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationGroupsGroupIdUsersUserIdMutationOptions<
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

export function getOrganizationInvitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.invites.$get>>,
) {
  return ['organization', '/organization/invites', toValue(args)] as const
}

export function getOrganizationInvitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.invites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.invites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.invites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationInvitesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.invites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationInvitesMutationKey() {
  return ['organization', '/organization/invites', 'POST'] as const
}

export function getPostOrganizationInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.invites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.invites.$post>) {
      return parseResponse(client.organization.invites.$post(args, options))
    },
  })
}

export function usePostOrganizationInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.organization.invites.$post>,
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
  const mutationDefaults = getPostOrganizationInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationInvitesInviteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.invites)[':invite_id']['$get']>
  >,
) {
  return ['organization', '/organization/invites/:invite_id', toValue(args)] as const
}

export function getOrganizationInvitesInviteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.invites)[':invite_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationInvitesInviteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.invites[':invite_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationInvitesInviteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.invites)[':invite_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationInvitesInviteIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationInvitesInviteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationInvitesInviteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.invites[':invite_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationInvitesInviteIdMutationKey() {
  return ['organization', '/organization/invites/:invite_id', 'DELETE'] as const
}

export function getDeleteOrganizationInvitesInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.invites)[':invite_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationInvitesInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.invites)[':invite_id']['$delete']>,
    ) {
      return parseResponse(client.organization.invites[':invite_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationInvitesInviteId<
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
                Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.invites)[':invite_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationInvitesInviteIdMutationOptions<
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

export function getOrganizationProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.projects.$get>>,
) {
  return ['organization', '/organization/projects', toValue(args)] as const
}

export function getOrganizationProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationProjectsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsMutationKey() {
  return ['organization', '/organization/projects', 'POST'] as const
}

export function getPostOrganizationProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.projects.$post>) {
      return parseResponse(client.organization.projects.$post(args, options))
    },
  })
}

export function usePostOrganizationProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.organization.projects.$post>,
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
  const mutationDefaults = getPostOrganizationProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['$get']>
  >,
) {
  return ['organization', '/organization/projects/:project_id', toValue(args)] as const
}

export function getOrganizationProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdMutationKey() {
  return ['organization', '/organization/projects/:project_id', 'POST'] as const
}

export function getPostOrganizationProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.projects)[':project_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.projects)[':project_id']['$post']>,
    ) {
      return parseResponse(client.organization.projects[':project_id'].$post(args, options))
    },
  })
}

export function usePostOrganizationProjectsProjectId<
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
                Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.projects)[':project_id']['$post']>,
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdMutationOptions<
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

export function getOrganizationProjectsProjectIdApiKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>
  >,
) {
  return ['organization', '/organization/projects/:project_id/api_keys', toValue(args)] as const
}

export function getOrganizationProjectsProjectIdApiKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].api_keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>
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
                    (typeof client.organization.projects)[':project_id']['api_keys']['$get']
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
                    (typeof client.organization.projects)[':project_id']['api_keys']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdApiKeysQueryKey>
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
            ReturnType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].api_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationProjectsProjectIdApiKeysApiKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/api_keys/:api_key_id',
    toValue(args),
  ] as const
}

export function getOrganizationProjectsProjectIdApiKeysApiKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdApiKeysApiKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].api_keys[':api_key_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdApiKeysApiKeyId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
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
                    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
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
                    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdApiKeysApiKeyIdQueryKey>
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
              (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdApiKeysApiKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdApiKeysApiKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].api_keys[':api_key_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdApiKeysApiKeyIdMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/api_keys/:api_key_id',
    'POST',
  ] as const
}

export function getPostOrganizationProjectsProjectIdApiKeysApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdApiKeysApiKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].api_keys[':api_key_id'].$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdApiKeysApiKeyId<
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
                    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdApiKeysApiKeyIdMutationOptions<
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

export function getDeleteOrganizationProjectsProjectIdApiKeysApiKeyIdMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/api_keys/:api_key_id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationProjectsProjectIdApiKeysApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationProjectsProjectIdApiKeysApiKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].api_keys[':api_key_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationProjectsProjectIdApiKeysApiKeyId<
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
                    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationProjectsProjectIdApiKeysApiKeyIdMutationOptions<
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

export function getPostOrganizationProjectsProjectIdArchiveMutationKey() {
  return ['organization', '/organization/projects/:project_id/archive', 'POST'] as const
}

export function getPostOrganizationProjectsProjectIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organization.projects)[':project_id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['archive']['$post']
      >,
    ) {
      return parseResponse(client.organization.projects[':project_id'].archive.$post(args, options))
    },
  })
}

export function usePostOrganizationProjectsProjectIdArchive<
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
                    (typeof client.organization.projects)[':project_id']['archive']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['archive']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdArchiveMutationOptions<
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

export function getOrganizationProjectsProjectIdCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['certificates']['$get']>
  >,
) {
  return ['organization', '/organization/projects/:project_id/certificates', toValue(args)] as const
}

export function getOrganizationProjectsProjectIdCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['certificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].certificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization.projects)[':project_id']['certificates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['certificates']['$get']>
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
                    (typeof client.organization.projects)[':project_id']['certificates']['$get']
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
                    (typeof client.organization.projects)[':project_id']['certificates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdCertificatesQueryKey>
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
            ReturnType<(typeof client.organization.projects)[':project_id']['certificates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdCertificatesActivateMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/certificates/activate',
    'POST',
  ] as const
}

export function getPostOrganizationProjectsProjectIdCertificatesActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['certificates']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdCertificatesActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['certificates']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].certificates.activate.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdCertificatesActivate<
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
                    (typeof client.organization.projects)[':project_id']['certificates']['activate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['certificates']['activate']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdCertificatesActivateMutationOptions<
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

export function getPostOrganizationProjectsProjectIdCertificatesDeactivateMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/certificates/deactivate',
    'POST',
  ] as const
}

export function getPostOrganizationProjectsProjectIdCertificatesDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['certificates']['deactivate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdCertificatesDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['certificates']['deactivate']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].certificates.deactivate.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdCertificatesDeactivate<
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
                    (typeof client.organization.projects)[':project_id']['certificates']['deactivate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['certificates']['deactivate']['$post']
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
    getPostOrganizationProjectsProjectIdCertificatesDeactivateMutationOptions<
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

export function getOrganizationProjectsProjectIdDataRetentionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['data_retention']['$get']>
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/data_retention',
    toValue(args),
  ] as const
}

export function getOrganizationProjectsProjectIdDataRetentionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['data_retention']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdDataRetentionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].data_retention.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdDataRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization.projects)[':project_id']['data_retention']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['data_retention']['$get']>
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
                    (typeof client.organization.projects)[':project_id']['data_retention']['$get']
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
                    (typeof client.organization.projects)[':project_id']['data_retention']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdDataRetentionQueryKey>
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
              (typeof client.organization.projects)[':project_id']['data_retention']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdDataRetentionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdDataRetentionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].data_retention.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdDataRetentionMutationKey() {
  return ['organization', '/organization/projects/:project_id/data_retention', 'POST'] as const
}

export function getPostOrganizationProjectsProjectIdDataRetentionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['data_retention']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdDataRetentionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['data_retention']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].data_retention.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdDataRetention<
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
                    (typeof client.organization.projects)[':project_id']['data_retention']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['data_retention']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdDataRetentionMutationOptions<
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

export function getOrganizationProjectsProjectIdGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$get']>
  >,
) {
  return ['organization', '/organization/projects/:project_id/groups', toValue(args)] as const
}

export function getOrganizationProjectsProjectIdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$get']>
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
                  ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdGroupsQueryKey>
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
            ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdGroupsMutationKey() {
  return ['organization', '/organization/projects/:project_id/groups', 'POST'] as const
}

export function getPostOrganizationProjectsProjectIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['groups']['$post']
      >,
    ) {
      return parseResponse(client.organization.projects[':project_id'].groups.$post(args, options))
    },
  })
}

export function usePostOrganizationProjectsProjectIdGroups<
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
                    (typeof client.organization.projects)[':project_id']['groups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$post']>,
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdGroupsMutationOptions<
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

export function getOrganizationProjectsProjectIdGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/groups/:group_id',
    toValue(args),
  ] as const
}

export function getOrganizationProjectsProjectIdGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdGroupsGroupId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
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
                    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
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
                    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdGroupsGroupIdQueryKey>
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
              (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationProjectsProjectIdGroupsGroupIdMutationKey() {
  return ['organization', '/organization/projects/:project_id/groups/:group_id', 'DELETE'] as const
}

export function getDeleteOrganizationProjectsProjectIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationProjectsProjectIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].groups[':group_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationProjectsProjectIdGroupsGroupId<
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
                    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationProjectsProjectIdGroupsGroupIdMutationOptions<
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

export function getOrganizationProjectsProjectIdHostedToolPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/hosted_tool_permissions',
    toValue(args),
  ] as const
}

export function getOrganizationProjectsProjectIdHostedToolPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdHostedToolPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].hosted_tool_permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdHostedToolPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
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
                    (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
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
                    (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdHostedToolPermissionsQueryKey>
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
              (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdHostedToolPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdHostedToolPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].hosted_tool_permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdHostedToolPermissionsMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/hosted_tool_permissions',
    'POST',
  ] as const
}

export function getPostOrganizationProjectsProjectIdHostedToolPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdHostedToolPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].hosted_tool_permissions.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdHostedToolPermissions<
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
                    (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdHostedToolPermissionsMutationOptions<
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

export function getOrganizationProjectsProjectIdModelPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/model_permissions',
    toValue(args),
  ] as const
}

export function getOrganizationProjectsProjectIdModelPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdModelPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].model_permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdModelPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
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
                    (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
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
                    (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdModelPermissionsQueryKey>
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
              (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdModelPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdModelPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].model_permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdModelPermissionsMutationKey() {
  return ['organization', '/organization/projects/:project_id/model_permissions', 'POST'] as const
}

export function getPostOrganizationProjectsProjectIdModelPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['model_permissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdModelPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['model_permissions']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].model_permissions.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdModelPermissions<
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
                    (typeof client.organization.projects)[':project_id']['model_permissions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['model_permissions']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdModelPermissionsMutationOptions<
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

export function getDeleteOrganizationProjectsProjectIdModelPermissionsMutationKey() {
  return ['organization', '/organization/projects/:project_id/model_permissions', 'DELETE'] as const
}

export function getDeleteOrganizationProjectsProjectIdModelPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['model_permissions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationProjectsProjectIdModelPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['model_permissions']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].model_permissions.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationProjectsProjectIdModelPermissions<
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
                    (typeof client.organization.projects)[':project_id']['model_permissions']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['model_permissions']['$delete']
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
  const mutationDefaults = getDeleteOrganizationProjectsProjectIdModelPermissionsMutationOptions<
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

export function getOrganizationProjectsProjectIdRateLimitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['rate_limits']['$get']>
  >,
) {
  return ['organization', '/organization/projects/:project_id/rate_limits', toValue(args)] as const
}

export function getOrganizationProjectsProjectIdRateLimitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['rate_limits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdRateLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].rate_limits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdRateLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization.projects)[':project_id']['rate_limits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['rate_limits']['$get']>
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
                    (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
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
                    (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdRateLimitsQueryKey>
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
            ReturnType<(typeof client.organization.projects)[':project_id']['rate_limits']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdRateLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdRateLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].rate_limits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdRateLimitsRateLimitIdMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/rate_limits/:rate_limit_id',
    'POST',
  ] as const
}

export function getPostOrganizationProjectsProjectIdRateLimitsRateLimitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['rate_limits'][':rate_limit_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdRateLimitsRateLimitIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['rate_limits'][':rate_limit_id']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].rate_limits[':rate_limit_id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdRateLimitsRateLimitId<
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
                    (typeof client.organization.projects)[':project_id']['rate_limits'][':rate_limit_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['rate_limits'][':rate_limit_id']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdRateLimitsRateLimitIdMutationOptions<
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

export function getOrganizationProjectsProjectIdServiceAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/service_accounts',
    toValue(args),
  ] as const
}

export function getOrganizationProjectsProjectIdServiceAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdServiceAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].service_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdServiceAccounts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
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
                    (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
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
                    (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdServiceAccountsQueryKey>
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
              (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdServiceAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdServiceAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].service_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdServiceAccountsMutationKey() {
  return ['organization', '/organization/projects/:project_id/service_accounts', 'POST'] as const
}

export function getPostOrganizationProjectsProjectIdServiceAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdServiceAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['service_accounts']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].service_accounts.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdServiceAccounts<
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
                    (typeof client.organization.projects)[':project_id']['service_accounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['service_accounts']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdServiceAccountsMutationOptions<
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

export function getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/service_accounts/:service_account_id',
    toValue(args),
  ] as const
}

export function getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].service_accounts[':service_account_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdServiceAccountsServiceAccountId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
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
                    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
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
                    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdQueryKey>
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
              (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].service_accounts[':service_account_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/service_accounts/:service_account_id',
    'POST',
  ] as const
}

export function getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].service_accounts[':service_account_id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdServiceAccountsServiceAccountId<
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
                    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$post']
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
    getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdMutationOptions<
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

export function getDeleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/service_accounts/:service_account_id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].service_accounts[':service_account_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganizationProjectsProjectIdServiceAccountsServiceAccountId<
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
                    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$delete']
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
    getDeleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdMutationOptions<
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

export function getOrganizationProjectsProjectIdSpendAlertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_alerts']['$get']>
  >,
) {
  return ['organization', '/organization/projects/:project_id/spend_alerts', toValue(args)] as const
}

export function getOrganizationProjectsProjectIdSpendAlertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_alerts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdSpendAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdSpendAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization.projects)[':project_id']['spend_alerts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_alerts']['$get']>
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
                    (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
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
                    (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdSpendAlertsQueryKey>
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
            ReturnType<(typeof client.organization.projects)[':project_id']['spend_alerts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdSpendAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdSpendAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].spend_alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdSpendAlertsMutationKey() {
  return ['organization', '/organization/projects/:project_id/spend_alerts', 'POST'] as const
}

export function getPostOrganizationProjectsProjectIdSpendAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_alerts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdSpendAlertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['spend_alerts']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_alerts.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdSpendAlerts<
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
                    (typeof client.organization.projects)[':project_id']['spend_alerts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['spend_alerts']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdSpendAlertsMutationOptions<
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

export function getOrganizationProjectsProjectIdSpendAlertsAlertIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/spend_alerts/:alert_id',
    toValue(args),
  ] as const
}

export function getOrganizationProjectsProjectIdSpendAlertsAlertIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdSpendAlertsAlertIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_alerts[':alert_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdSpendAlertsAlertId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
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
                    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
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
                    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdSpendAlertsAlertIdQueryKey>
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
              (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdSpendAlertsAlertIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdSpendAlertsAlertIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].spend_alerts[':alert_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdSpendAlertsAlertIdMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/spend_alerts/:alert_id',
    'POST',
  ] as const
}

export function getPostOrganizationProjectsProjectIdSpendAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdSpendAlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_alerts[':alert_id'].$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdSpendAlertsAlertId<
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
                    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdSpendAlertsAlertIdMutationOptions<
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

export function getDeleteOrganizationProjectsProjectIdSpendAlertsAlertIdMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/spend_alerts/:alert_id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationProjectsProjectIdSpendAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationProjectsProjectIdSpendAlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_alerts[':alert_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganizationProjectsProjectIdSpendAlertsAlertId<
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
                    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationProjectsProjectIdSpendAlertsAlertIdMutationOptions<
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

export function getOrganizationProjectsProjectIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$get']>
  >,
) {
  return ['organization', '/organization/projects/:project_id/users', toValue(args)] as const
}

export function getOrganizationProjectsProjectIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organization.projects)[':project_id']['users']['$get']>
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
                  ReturnType<(typeof client.organization.projects)[':project_id']['users']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdUsersMutationKey() {
  return ['organization', '/organization/projects/:project_id/users', 'POST'] as const
}

export function getPostOrganizationProjectsProjectIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['users']['$post']
      >,
    ) {
      return parseResponse(client.organization.projects[':project_id'].users.$post(args, options))
    },
  })
}

export function usePostOrganizationProjectsProjectIdUsers<
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
                  ReturnType<(typeof client.organization.projects)[':project_id']['users']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$post']>,
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdUsersMutationOptions<
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

export function getOrganizationProjectsProjectIdUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/users/:user_id',
    toValue(args),
  ] as const
}

export function getOrganizationProjectsProjectIdUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdUsersUserId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
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
                    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
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
                    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdUsersUserIdQueryKey>
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
              (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdUsersUserIdMutationKey() {
  return ['organization', '/organization/projects/:project_id/users/:user_id', 'POST'] as const
}

export function getPostOrganizationProjectsProjectIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['users'][':user_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['users'][':user_id']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].users[':user_id'].$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdUsersUserId<
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
                    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['users'][':user_id']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdUsersUserIdMutationOptions<
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

export function getDeleteOrganizationProjectsProjectIdUsersUserIdMutationKey() {
  return ['organization', '/organization/projects/:project_id/users/:user_id', 'DELETE'] as const
}

export function getDeleteOrganizationProjectsProjectIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['users'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationProjectsProjectIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['users'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].users[':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationProjectsProjectIdUsersUserId<
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
                    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['users'][':user_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationProjectsProjectIdUsersUserIdMutationOptions<
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

export function getOrganizationRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.roles.$get>>,
) {
  return ['organization', '/organization/roles', toValue(args)] as const
}

export function getOrganizationRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationRolesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationRolesMutationKey() {
  return ['organization', '/organization/roles', 'POST'] as const
}

export function getPostOrganizationRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organization.roles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.roles.$post>) {
      return parseResponse(client.organization.roles.$post(args, options))
    },
  })
}

export function usePostOrganizationRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.organization.roles.$post>,
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
  const mutationDefaults = getPostOrganizationRolesMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization.roles)[':role_id']['$get']>>,
) {
  return ['organization', '/organization/roles/:role_id', toValue(args)] as const
}

export function getOrganizationRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization.roles)[':role_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.roles[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization.roles)[':role_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationRolesRoleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.roles[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationRolesRoleIdMutationKey() {
  return ['organization', '/organization/roles/:role_id', 'POST'] as const
}

export function getPostOrganizationRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.roles)[':role_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.roles)[':role_id']['$post']>,
    ) {
      return parseResponse(client.organization.roles[':role_id'].$post(args, options))
    },
  })
}

export function usePostOrganizationRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.roles)[':role_id']['$post']>,
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
  const mutationDefaults = getPostOrganizationRolesRoleIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationRolesRoleIdMutationKey() {
  return ['organization', '/organization/roles/:role_id', 'DELETE'] as const
}

export function getDeleteOrganizationRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.roles)[':role_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.roles)[':role_id']['$delete']>,
    ) {
      return parseResponse(client.organization.roles[':role_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.roles)[':role_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationRolesRoleIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationSpendAlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.spend_alerts.$get>>,
) {
  return ['organization', '/organization/spend_alerts', toValue(args)] as const
}

export function getOrganizationSpendAlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.spend_alerts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationSpendAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.spend_alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationSpendAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.spend_alerts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationSpendAlertsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationSpendAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationSpendAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.spend_alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationSpendAlertsMutationKey() {
  return ['organization', '/organization/spend_alerts', 'POST'] as const
}

export function getPostOrganizationSpendAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.spend_alerts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationSpendAlertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.spend_alerts.$post>) {
      return parseResponse(client.organization.spend_alerts.$post(args, options))
    },
  })
}

export function usePostOrganizationSpendAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.spend_alerts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.spend_alerts.$post>,
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
  const mutationDefaults = getPostOrganizationSpendAlertsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationSpendAlertsAlertIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>
  >,
) {
  return ['organization', '/organization/spend_alerts/:alert_id', toValue(args)] as const
}

export function getOrganizationSpendAlertsAlertIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationSpendAlertsAlertIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.spend_alerts[':alert_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationSpendAlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationSpendAlertsAlertIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationSpendAlertsAlertIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationSpendAlertsAlertIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.spend_alerts[':alert_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationSpendAlertsAlertIdMutationKey() {
  return ['organization', '/organization/spend_alerts/:alert_id', 'POST'] as const
}

export function getPostOrganizationSpendAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationSpendAlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$post']>,
    ) {
      return parseResponse(client.organization.spend_alerts[':alert_id'].$post(args, options))
    },
  })
}

export function usePostOrganizationSpendAlertsAlertId<
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
                Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$post']>,
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
  const mutationDefaults = getPostOrganizationSpendAlertsAlertIdMutationOptions<
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

export function getDeleteOrganizationSpendAlertsAlertIdMutationKey() {
  return ['organization', '/organization/spend_alerts/:alert_id', 'DELETE'] as const
}

export function getDeleteOrganizationSpendAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationSpendAlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$delete']>,
    ) {
      return parseResponse(client.organization.spend_alerts[':alert_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationSpendAlertsAlertId<
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
                  ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationSpendAlertsAlertIdMutationOptions<
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

export function getOrganizationUsageAudioSpeechesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.audio_speeches.$get>>,
) {
  return ['organization', '/organization/usage/audio_speeches', toValue(args)] as const
}

export function getOrganizationUsageAudioSpeechesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.audio_speeches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageAudioSpeechesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.audio_speeches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageAudioSpeeches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.audio_speeches.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.audio_speeches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.audio_speeches.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.audio_speeches.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageAudioSpeechesQueryKey>
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
          Awaited<ReturnType<typeof client.organization.usage.audio_speeches.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageAudioSpeechesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageAudioSpeechesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.audio_speeches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsageAudioTranscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.organization.usage.audio_transcriptions.$get>
  >,
) {
  return ['organization', '/organization/usage/audio_transcriptions', toValue(args)] as const
}

export function getOrganizationUsageAudioTranscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.organization.usage.audio_transcriptions.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageAudioTranscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.audio_transcriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageAudioTranscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.audio_transcriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.organization.usage.audio_transcriptions.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.audio_transcriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.audio_transcriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageAudioTranscriptionsQueryKey>
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
          Awaited<ReturnType<typeof client.organization.usage.audio_transcriptions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageAudioTranscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageAudioTranscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.audio_transcriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsageCodeInterpreterSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.organization.usage.code_interpreter_sessions.$get>
  >,
) {
  return ['organization', '/organization/usage/code_interpreter_sessions', toValue(args)] as const
}

export function getOrganizationUsageCodeInterpreterSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.organization.usage.code_interpreter_sessions.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageCodeInterpreterSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.code_interpreter_sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageCodeInterpreterSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.code_interpreter_sessions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.organization.usage.code_interpreter_sessions.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.code_interpreter_sessions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.code_interpreter_sessions.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageCodeInterpreterSessionsQueryKey>
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
          Awaited<ReturnType<typeof client.organization.usage.code_interpreter_sessions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageCodeInterpreterSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageCodeInterpreterSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.code_interpreter_sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsageCompletionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.completions.$get>>,
) {
  return ['organization', '/organization/usage/completions', toValue(args)] as const
}

export function getOrganizationUsageCompletionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.completions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageCompletionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.completions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageCompletions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.completions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.completions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.completions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.completions.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageCompletionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.completions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageCompletionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageCompletionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.completions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsageEmbeddingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.embeddings.$get>>,
) {
  return ['organization', '/organization/usage/embeddings', toValue(args)] as const
}

export function getOrganizationUsageEmbeddingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.embeddings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageEmbeddingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.embeddings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageEmbeddings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.embeddings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageEmbeddingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageEmbeddingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageEmbeddingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.embeddings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsageFileSearchCallsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.file_search_calls.$get>>,
) {
  return ['organization', '/organization/usage/file_search_calls', toValue(args)] as const
}

export function getOrganizationUsageFileSearchCallsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.file_search_calls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageFileSearchCallsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.file_search_calls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageFileSearchCalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.file_search_calls.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.file_search_calls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.file_search_calls.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.file_search_calls.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageFileSearchCallsQueryKey>
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
          Awaited<ReturnType<typeof client.organization.usage.file_search_calls.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageFileSearchCallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageFileSearchCallsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.file_search_calls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsageImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.images.$get>>,
) {
  return ['organization', '/organization/usage/images', toValue(args)] as const
}

export function getOrganizationUsageImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.images.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.images.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.images.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.images.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.images.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageImagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.images.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsageModerationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.moderations.$get>>,
) {
  return ['organization', '/organization/usage/moderations', toValue(args)] as const
}

export function getOrganizationUsageModerationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.moderations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageModerationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.moderations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageModerations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.moderations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageModerationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageModerationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageModerationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.moderations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsageVectorStoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.vector_stores.$get>>,
) {
  return ['organization', '/organization/usage/vector_stores', toValue(args)] as const
}

export function getOrganizationUsageVectorStoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.vector_stores.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageVectorStoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.vector_stores.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageVectorStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.vector_stores.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.vector_stores.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.vector_stores.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.vector_stores.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageVectorStoresQueryKey>
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
          Awaited<ReturnType<typeof client.organization.usage.vector_stores.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageVectorStoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageVectorStoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.vector_stores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsageWebSearchCallsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.web_search_calls.$get>>,
) {
  return ['organization', '/organization/usage/web_search_calls', toValue(args)] as const
}

export function getOrganizationUsageWebSearchCallsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.web_search_calls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageWebSearchCallsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.web_search_calls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageWebSearchCalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.web_search_calls.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.web_search_calls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.web_search_calls.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.web_search_calls.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageWebSearchCallsQueryKey>
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
          Awaited<ReturnType<typeof client.organization.usage.web_search_calls.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageWebSearchCallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageWebSearchCallsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.web_search_calls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.users.$get>>,
) {
  return ['organization', '/organization/users', toValue(args)] as const
}

export function getOrganizationUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization.users)[':user_id']['$get']>>,
) {
  return ['organization', '/organization/users/:user_id', toValue(args)] as const
}

export function getOrganizationUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsersUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationUsersUserIdMutationKey() {
  return ['organization', '/organization/users/:user_id', 'POST'] as const
}

export function getPostOrganizationUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.users)[':user_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.users)[':user_id']['$post']>,
    ) {
      return parseResponse(client.organization.users[':user_id'].$post(args, options))
    },
  })
}

export function usePostOrganizationUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.users)[':user_id']['$post']>,
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
  const mutationDefaults = getPostOrganizationUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationUsersUserIdMutationKey() {
  return ['organization', '/organization/users/:user_id', 'DELETE'] as const
}

export function getDeleteOrganizationUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.users)[':user_id']['$delete']>,
    ) {
      return parseResponse(client.organization.users[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.users)[':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationUsersUserIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$get']>
  >,
) {
  return ['organization', '/organization/users/:user_id/roles', toValue(args)] as const
}

export function getOrganizationUsersUserIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsersUserIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.users[':user_id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsersUserIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsersUserIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsersUserIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsersUserIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.users[':user_id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationUsersUserIdRolesMutationKey() {
  return ['organization', '/organization/users/:user_id/roles', 'POST'] as const
}

export function getPostOrganizationUsersUserIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationUsersUserIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$post']>,
    ) {
      return parseResponse(client.organization.users[':user_id'].roles.$post(args, options))
    },
  })
}

export function usePostOrganizationUsersUserIdRoles<
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
                  ReturnType<(typeof client.organization.users)[':user_id']['roles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$post']>,
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
  const mutationDefaults = getPostOrganizationUsersUserIdRolesMutationOptions<
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

export function getOrganizationUsersUserIdRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']>
  >,
) {
  return ['organization', '/organization/users/:user_id/roles/:role_id', toValue(args)] as const
}

export function getOrganizationUsersUserIdRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsersUserIdRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.users[':user_id'].roles[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsersUserIdRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']>
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
                    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
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
                    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationUsersUserIdRolesRoleIdQueryKey>
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
            ReturnType<(typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsersUserIdRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsersUserIdRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.users[':user_id'].roles[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationUsersUserIdRolesRoleIdMutationKey() {
  return ['organization', '/organization/users/:user_id/roles/:role_id', 'DELETE'] as const
}

export function getDeleteOrganizationUsersUserIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.users)[':user_id']['roles'][':role_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationUsersUserIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.users)[':user_id']['roles'][':role_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.users[':user_id'].roles[':role_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationUsersUserIdRolesRoleId<
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
                    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.users)[':user_id']['roles'][':role_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationUsersUserIdRolesRoleIdMutationOptions<
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

export function getProjectsProjectIdGroupsGroupIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
    >
  >,
) {
  return ['projects', '/projects/:project_id/groups/:group_id/roles', toValue(args)] as const
}

export function getProjectsProjectIdGroupsGroupIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdGroupsGroupIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].groups[':group_id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdGroupsGroupIdRoles<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
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
                    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
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
                    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdGroupsGroupIdRolesQueryKey>
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
              (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdGroupsGroupIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdGroupsGroupIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].groups[':group_id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdGroupsGroupIdRolesMutationKey() {
  return ['projects', '/projects/:project_id/groups/:group_id/roles', 'POST'] as const
}

export function getPostProjectsProjectIdGroupsGroupIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdGroupsGroupIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].groups[':group_id'].roles.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdGroupsGroupIdRoles<
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
                    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdGroupsGroupIdRolesMutationOptions<
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

export function getProjectsProjectIdGroupsGroupIdRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:project_id/groups/:group_id/roles/:role_id',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdGroupsGroupIdRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdGroupsGroupIdRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].groups[':group_id'].roles[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdGroupsGroupIdRolesRoleId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
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
                    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
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
                    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdGroupsGroupIdRolesRoleIdQueryKey>
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
              (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdGroupsGroupIdRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdGroupsGroupIdRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].groups[':group_id'].roles[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdGroupsGroupIdRolesRoleIdMutationKey() {
  return ['projects', '/projects/:project_id/groups/:group_id/roles/:role_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdGroupsGroupIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdGroupsGroupIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].groups[':group_id'].roles[':role_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdGroupsGroupIdRolesRoleId<
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
                    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdGroupsGroupIdRolesRoleIdMutationOptions<
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

export function getProjectsProjectIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['roles']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/roles', toValue(args)] as const
}

export function getProjectsProjectIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdRolesMutationKey() {
  return ['projects', '/projects/:project_id/roles', 'POST'] as const
}

export function getPostProjectsProjectIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_id']['roles']['$post']>,
    ) {
      return parseResponse(client.projects[':project_id'].roles.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':project_id']['roles']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdRolesMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/roles/:role_id', toValue(args)] as const
}

export function getProjectsProjectIdRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].roles[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>
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
                  ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdRolesRoleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].roles[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdRolesRoleIdMutationKey() {
  return ['projects', '/projects/:project_id/roles/:role_id', 'POST'] as const
}

export function getPostProjectsProjectIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$post']>,
    ) {
      return parseResponse(client.projects[':project_id'].roles[':role_id'].$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdRolesRoleId<
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
                  ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdRolesRoleIdMutationOptions<
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

export function getDeleteProjectsProjectIdRolesRoleIdMutationKey() {
  return ['projects', '/projects/:project_id/roles/:role_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['roles'][':role_id']['$delete']
      >,
    ) {
      return parseResponse(client.projects[':project_id'].roles[':role_id'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectIdRolesRoleId<
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
                    (typeof client.projects)[':project_id']['roles'][':role_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$delete']>,
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
  const mutationDefaults = getDeleteProjectsProjectIdRolesRoleIdMutationOptions<
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

export function getProjectsProjectIdUsersUserIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/users/:user_id/roles', toValue(args)] as const
}

export function getProjectsProjectIdUsersUserIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdUsersUserIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].users[':user_id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdUsersUserIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']>
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
                    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
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
                    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdUsersUserIdRolesQueryKey>
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
              (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdUsersUserIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdUsersUserIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].users[':user_id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdUsersUserIdRolesMutationKey() {
  return ['projects', '/projects/:project_id/users/:user_id/roles', 'POST'] as const
}

export function getPostProjectsProjectIdUsersUserIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdUsersUserIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].users[':user_id'].roles.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdUsersUserIdRoles<
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
                    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdUsersUserIdRolesMutationOptions<
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

export function getProjectsProjectIdUsersUserIdRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
    >
  >,
) {
  return ['projects', '/projects/:project_id/users/:user_id/roles/:role_id', toValue(args)] as const
}

export function getProjectsProjectIdUsersUserIdRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdUsersUserIdRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].users[':user_id'].roles[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdUsersUserIdRolesRoleId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
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
                    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
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
                    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdUsersUserIdRolesRoleIdQueryKey>
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
              (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdUsersUserIdRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdUsersUserIdRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].users[':user_id'].roles[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdUsersUserIdRolesRoleIdMutationKey() {
  return ['projects', '/projects/:project_id/users/:user_id/roles/:role_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdUsersUserIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdUsersUserIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].users[':user_id'].roles[':role_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdUsersUserIdRolesRoleId<
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
                    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdUsersUserIdRolesRoleIdMutationOptions<
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

export function getPostRealtimeCallsMutationKey() {
  return ['realtime', '/realtime/calls', 'POST'] as const
}

export function getPostRealtimeCallsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realtime.calls.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.realtime.calls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealtimeCallsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realtime.calls.$post>) {
      return parseResponse(client.realtime.calls.$post(args, options))
    },
  })
}

export function usePostRealtimeCalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realtime.calls.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.realtime.calls.$post>,
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
  const mutationDefaults = getPostRealtimeCallsMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealtimeCallsCallIdAcceptMutationKey() {
  return ['realtime', '/realtime/calls/:call_id/accept', 'POST'] as const
}

export function getPostRealtimeCallsCallIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realtime.calls)[':call_id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealtimeCallsCallIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.realtime.calls)[':call_id']['accept']['$post']>,
    ) {
      return parseResponse(client.realtime.calls[':call_id'].accept.$post(args, options))
    },
  })
}

export function usePostRealtimeCallsCallIdAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['accept']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realtime.calls)[':call_id']['accept']['$post']>,
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
  const mutationDefaults = getPostRealtimeCallsCallIdAcceptMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealtimeCallsCallIdHangupMutationKey() {
  return ['realtime', '/realtime/calls/:call_id/hangup', 'POST'] as const
}

export function getPostRealtimeCallsCallIdHangupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['hangup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realtime.calls)[':call_id']['hangup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealtimeCallsCallIdHangupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.realtime.calls)[':call_id']['hangup']['$post']>,
    ) {
      return parseResponse(client.realtime.calls[':call_id'].hangup.$post(args, options))
    },
  })
}

export function usePostRealtimeCallsCallIdHangup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['hangup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realtime.calls)[':call_id']['hangup']['$post']>,
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
  const mutationDefaults = getPostRealtimeCallsCallIdHangupMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealtimeCallsCallIdReferMutationKey() {
  return ['realtime', '/realtime/calls/:call_id/refer', 'POST'] as const
}

export function getPostRealtimeCallsCallIdReferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['refer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realtime.calls)[':call_id']['refer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealtimeCallsCallIdReferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.realtime.calls)[':call_id']['refer']['$post']>,
    ) {
      return parseResponse(client.realtime.calls[':call_id'].refer.$post(args, options))
    },
  })
}

export function usePostRealtimeCallsCallIdRefer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['refer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realtime.calls)[':call_id']['refer']['$post']>,
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
  const mutationDefaults = getPostRealtimeCallsCallIdReferMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealtimeCallsCallIdRejectMutationKey() {
  return ['realtime', '/realtime/calls/:call_id/reject', 'POST'] as const
}

export function getPostRealtimeCallsCallIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['reject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realtime.calls)[':call_id']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealtimeCallsCallIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.realtime.calls)[':call_id']['reject']['$post']>,
    ) {
      return parseResponse(client.realtime.calls[':call_id'].reject.$post(args, options))
    },
  })
}

export function usePostRealtimeCallsCallIdReject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realtime.calls)[':call_id']['reject']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realtime.calls)[':call_id']['reject']['$post']>,
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
  const mutationDefaults = getPostRealtimeCallsCallIdRejectMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealtimeClientSecretsMutationKey() {
  return ['realtime', '/realtime/client_secrets', 'POST'] as const
}

export function getPostRealtimeClientSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.realtime.client_secrets.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.realtime.client_secrets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealtimeClientSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realtime.client_secrets.$post>) {
      return parseResponse(client.realtime.client_secrets.$post(args, options))
    },
  })
}

export function usePostRealtimeClientSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realtime.client_secrets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.realtime.client_secrets.$post>,
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
  const mutationDefaults = getPostRealtimeClientSecretsMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealtimeSessionsMutationKey() {
  return ['realtime', '/realtime/sessions', 'POST'] as const
}

export function getPostRealtimeSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realtime.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.realtime.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealtimeSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realtime.sessions.$post>) {
      return parseResponse(client.realtime.sessions.$post(args, options))
    },
  })
}

export function usePostRealtimeSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realtime.sessions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.realtime.sessions.$post>,
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
  const mutationDefaults = getPostRealtimeSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealtimeTranscriptionSessionsMutationKey() {
  return ['realtime', '/realtime/transcription_sessions', 'POST'] as const
}

export function getPostRealtimeTranscriptionSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.realtime.transcription_sessions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.realtime.transcription_sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealtimeTranscriptionSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realtime.transcription_sessions.$post>) {
      return parseResponse(client.realtime.transcription_sessions.$post(args, options))
    },
  })
}

export function usePostRealtimeTranscriptionSessions<
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
                Awaited<ReturnType<typeof client.realtime.transcription_sessions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.realtime.transcription_sessions.$post>,
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
  const mutationDefaults = getPostRealtimeTranscriptionSessionsMutationOptions<
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

export function getPostRealtimeTranslationsClientSecretsMutationKey() {
  return ['realtime', '/realtime/translations/client_secrets', 'POST'] as const
}

export function getPostRealtimeTranslationsClientSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.realtime.translations.client_secrets.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.realtime.translations.client_secrets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealtimeTranslationsClientSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.realtime.translations.client_secrets.$post>,
    ) {
      return parseResponse(client.realtime.translations.client_secrets.$post(args, options))
    },
  })
}

export function usePostRealtimeTranslationsClientSecrets<
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
                Awaited<ReturnType<typeof client.realtime.translations.client_secrets.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.realtime.translations.client_secrets.$post>,
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
  const mutationDefaults = getPostRealtimeTranslationsClientSecretsMutationOptions<
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

export function getPostResponsesMutationKey() {
  return ['responses', '/responses', 'POST'] as const
}

export function getPostResponsesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responses.$post>>>>>,
    TError,
    InferRequestType<typeof client.responses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResponsesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.responses.$post>) {
      return parseResponse(client.responses.$post(args, options))
    },
  })
}

export function usePostResponses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responses.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.responses.$post>,
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
  const mutationDefaults = getPostResponsesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getResponsesResponseIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.responses)[':response_id']['$get']>>,
) {
  return ['responses', '/responses/:response_id', toValue(args)] as const
}

export function getResponsesResponseIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.responses)[':response_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResponsesResponseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.responses[':response_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResponsesResponseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.responses)[':response_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResponsesResponseIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResponsesResponseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResponsesResponseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.responses[':response_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteResponsesResponseIdMutationKey() {
  return ['responses', '/responses/:response_id', 'DELETE'] as const
}

export function getDeleteResponsesResponseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.responses)[':response_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.responses)[':response_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteResponsesResponseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.responses)[':response_id']['$delete']>) {
      return parseResponse(client.responses[':response_id'].$delete(args, options))
    },
  })
}

export function useDeleteResponsesResponseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.responses)[':response_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.responses)[':response_id']['$delete']>,
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
  const mutationDefaults = getDeleteResponsesResponseIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostResponsesResponseIdCancelMutationKey() {
  return ['responses', '/responses/:response_id/cancel', 'POST'] as const
}

export function getPostResponsesResponseIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.responses)[':response_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.responses)[':response_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResponsesResponseIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.responses)[':response_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.responses[':response_id'].cancel.$post(args, options))
    },
  })
}

export function usePostResponsesResponseIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.responses)[':response_id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.responses)[':response_id']['cancel']['$post']>,
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
  const mutationDefaults = getPostResponsesResponseIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getResponsesResponseIdInputItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.responses)[':response_id']['input_items']['$get']>
  >,
) {
  return ['responses', '/responses/:response_id/input_items', toValue(args)] as const
}

export function getResponsesResponseIdInputItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.responses)[':response_id']['input_items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResponsesResponseIdInputItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.responses[':response_id'].input_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResponsesResponseIdInputItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.responses)[':response_id']['input_items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.responses)[':response_id']['input_items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.responses)[':response_id']['input_items']['$get']>
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
                  ReturnType<(typeof client.responses)[':response_id']['input_items']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResponsesResponseIdInputItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.responses)[':response_id']['input_items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResponsesResponseIdInputItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResponsesResponseIdInputItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.responses[':response_id'].input_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThreadsMutationKey() {
  return ['threads', '/threads', 'POST'] as const
}

export function getPostThreadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threads.$post>>>>>,
    TError,
    InferRequestType<typeof client.threads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostThreadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.threads.$post>) {
      return parseResponse(client.threads.$post(args, options))
    },
  })
}

export function usePostThreads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.threads.$post>,
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
  const mutationDefaults = getPostThreadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostThreadsRunsMutationKey() {
  return ['threads', '/threads/runs', 'POST'] as const
}

export function getPostThreadsRunsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threads.runs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.threads.runs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostThreadsRunsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.threads.runs.$post>) {
      return parseResponse(client.threads.runs.$post(args, options))
    },
  })
}

export function usePostThreadsRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threads.runs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.threads.runs.$post>,
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
  const mutationDefaults = getPostThreadsRunsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getThreadsThreadIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.threads)[':thread_id']['$get']>>,
) {
  return ['threads', '/threads/:thread_id', toValue(args)] as const
}

export function getThreadsThreadIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.threads)[':thread_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThreadsThreadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.threads[':thread_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.threads)[':thread_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThreadsThreadIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThreadsThreadIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThreadsThreadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.threads[':thread_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThreadsThreadIdMutationKey() {
  return ['threads', '/threads/:thread_id', 'POST'] as const
}

export function getPostThreadsThreadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.threads)[':thread_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThreadsThreadIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.threads)[':thread_id']['$post']>) {
      return parseResponse(client.threads[':thread_id'].$post(args, options))
    },
  })
}

export function usePostThreadsThreadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threads)[':thread_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.threads)[':thread_id']['$post']>,
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
  const mutationDefaults = getPostThreadsThreadIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteThreadsThreadIdMutationKey() {
  return ['threads', '/threads/:thread_id', 'DELETE'] as const
}

export function getDeleteThreadsThreadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.threads)[':thread_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteThreadsThreadIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.threads)[':thread_id']['$delete']>) {
      return parseResponse(client.threads[':thread_id'].$delete(args, options))
    },
  })
}

export function useDeleteThreadsThreadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threads)[':thread_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.threads)[':thread_id']['$delete']>,
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
  const mutationDefaults = getDeleteThreadsThreadIdMutationOptions<TError, TOnMutateResult>(
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

export function getThreadsThreadIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['messages']['$get']>
  >,
) {
  return ['threads', '/threads/:thread_id/messages', toValue(args)] as const
}

export function getThreadsThreadIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThreadsThreadIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.threads[':thread_id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThreadsThreadIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThreadsThreadIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThreadsThreadIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThreadsThreadIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.threads[':thread_id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThreadsThreadIdMessagesMutationKey() {
  return ['threads', '/threads/:thread_id/messages', 'POST'] as const
}

export function getPostThreadsThreadIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.threads)[':thread_id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThreadsThreadIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.threads)[':thread_id']['messages']['$post']>,
    ) {
      return parseResponse(client.threads[':thread_id'].messages.$post(args, options))
    },
  })
}

export function usePostThreadsThreadIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.threads)[':thread_id']['messages']['$post']>,
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
  const mutationDefaults = getPostThreadsThreadIdMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getThreadsThreadIdMessagesMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>
  >,
) {
  return ['threads', '/threads/:thread_id/messages/:message_id', toValue(args)] as const
}

export function getThreadsThreadIdMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThreadsThreadIdMessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.threads[':thread_id'].messages[':message_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThreadsThreadIdMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>
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
                    (typeof client.threads)[':thread_id']['messages'][':message_id']['$get']
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
                    (typeof client.threads)[':thread_id']['messages'][':message_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getThreadsThreadIdMessagesMessageIdQueryKey>
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
            ReturnType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThreadsThreadIdMessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThreadsThreadIdMessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.threads[':thread_id'].messages[':message_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThreadsThreadIdMessagesMessageIdMutationKey() {
  return ['threads', '/threads/:thread_id/messages/:message_id', 'POST'] as const
}

export function getPostThreadsThreadIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThreadsThreadIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.threads)[':thread_id']['messages'][':message_id']['$post']
      >,
    ) {
      return parseResponse(
        client.threads[':thread_id'].messages[':message_id'].$post(args, options),
      )
    },
  })
}

export function usePostThreadsThreadIdMessagesMessageId<
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
                    (typeof client.threads)[':thread_id']['messages'][':message_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.threads)[':thread_id']['messages'][':message_id']['$post']
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
  const mutationDefaults = getPostThreadsThreadIdMessagesMessageIdMutationOptions<
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

export function getDeleteThreadsThreadIdMessagesMessageIdMutationKey() {
  return ['threads', '/threads/:thread_id/messages/:message_id', 'DELETE'] as const
}

export function getDeleteThreadsThreadIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteThreadsThreadIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.threads)[':thread_id']['messages'][':message_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.threads[':thread_id'].messages[':message_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteThreadsThreadIdMessagesMessageId<
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
                    (typeof client.threads)[':thread_id']['messages'][':message_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.threads)[':thread_id']['messages'][':message_id']['$delete']
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
  const mutationDefaults = getDeleteThreadsThreadIdMessagesMessageIdMutationOptions<
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

export function getThreadsThreadIdRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.threads)[':thread_id']['runs']['$get']>>,
) {
  return ['threads', '/threads/:thread_id/runs', toValue(args)] as const
}

export function getThreadsThreadIdRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.threads)[':thread_id']['runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThreadsThreadIdRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.threads[':thread_id'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThreadsThreadIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.threads)[':thread_id']['runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThreadsThreadIdRunsQueryKey>
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
          Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThreadsThreadIdRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThreadsThreadIdRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.threads[':thread_id'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThreadsThreadIdRunsMutationKey() {
  return ['threads', '/threads/:thread_id/runs', 'POST'] as const
}

export function getPostThreadsThreadIdRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.threads)[':thread_id']['runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThreadsThreadIdRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.threads)[':thread_id']['runs']['$post']>,
    ) {
      return parseResponse(client.threads[':thread_id'].runs.$post(args, options))
    },
  })
}

export function usePostThreadsThreadIdRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.threads)[':thread_id']['runs']['$post']>,
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
  const mutationDefaults = getPostThreadsThreadIdRunsMutationOptions<TError, TOnMutateResult>(
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

export function getThreadsThreadIdRunsRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>
  >,
) {
  return ['threads', '/threads/:thread_id/runs/:run_id', toValue(args)] as const
}

export function getThreadsThreadIdRunsRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThreadsThreadIdRunsRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.threads[':thread_id'].runs[':run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThreadsThreadIdRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>
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
                  ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getThreadsThreadIdRunsRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThreadsThreadIdRunsRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThreadsThreadIdRunsRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.threads[':thread_id'].runs[':run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThreadsThreadIdRunsRunIdMutationKey() {
  return ['threads', '/threads/:thread_id/runs/:run_id', 'POST'] as const
}

export function getPostThreadsThreadIdRunsRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThreadsThreadIdRunsRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$post']>,
    ) {
      return parseResponse(client.threads[':thread_id'].runs[':run_id'].$post(args, options))
    },
  })
}

export function usePostThreadsThreadIdRunsRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$post']>,
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
  const mutationDefaults = getPostThreadsThreadIdRunsRunIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostThreadsThreadIdRunsRunIdCancelMutationKey() {
  return ['threads', '/threads/:thread_id/runs/:run_id/cancel', 'POST'] as const
}

export function getPostThreadsThreadIdRunsRunIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThreadsThreadIdRunsRunIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.threads)[':thread_id']['runs'][':run_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.threads[':thread_id'].runs[':run_id'].cancel.$post(args, options))
    },
  })
}

export function usePostThreadsThreadIdRunsRunIdCancel<
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
                    (typeof client.threads)[':thread_id']['runs'][':run_id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.threads)[':thread_id']['runs'][':run_id']['cancel']['$post']
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
  const mutationDefaults = getPostThreadsThreadIdRunsRunIdCancelMutationOptions<
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

export function getThreadsThreadIdRunsRunIdStepsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>
  >,
) {
  return ['threads', '/threads/:thread_id/runs/:run_id/steps', toValue(args)] as const
}

export function getThreadsThreadIdRunsRunIdStepsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThreadsThreadIdRunsRunIdStepsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.threads[':thread_id'].runs[':run_id'].steps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThreadsThreadIdRunsRunIdSteps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>
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
                    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']
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
                    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getThreadsThreadIdRunsRunIdStepsQueryKey>
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
            ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThreadsThreadIdRunsRunIdStepsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThreadsThreadIdRunsRunIdStepsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.threads[':thread_id'].runs[':run_id'].steps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThreadsThreadIdRunsRunIdStepsStepIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
    >
  >,
) {
  return ['threads', '/threads/:thread_id/runs/:run_id/steps/:step_id', toValue(args)] as const
}

export function getThreadsThreadIdRunsRunIdStepsStepIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThreadsThreadIdRunsRunIdStepsStepIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.threads[':thread_id'].runs[':run_id'].steps[':step_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThreadsThreadIdRunsRunIdStepsStepId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
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
                    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
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
                    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getThreadsThreadIdRunsRunIdStepsStepIdQueryKey>
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
              (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThreadsThreadIdRunsRunIdStepsStepIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThreadsThreadIdRunsRunIdStepsStepIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.threads[':thread_id'].runs[':run_id'].steps[':step_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThreadsThreadIdRunsRunIdSubmitToolOutputsMutationKey() {
  return ['threads', '/threads/:thread_id/runs/:run_id/submit_tool_outputs', 'POST'] as const
}

export function getPostThreadsThreadIdRunsRunIdSubmitToolOutputsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.threads)[':thread_id']['runs'][':run_id']['submit_tool_outputs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostThreadsThreadIdRunsRunIdSubmitToolOutputsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.threads)[':thread_id']['runs'][':run_id']['submit_tool_outputs']['$post']
      >,
    ) {
      return parseResponse(
        client.threads[':thread_id'].runs[':run_id'].submit_tool_outputs.$post(args, options),
      )
    },
  })
}

export function usePostThreadsThreadIdRunsRunIdSubmitToolOutputs<
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
                    (typeof client.threads)[':thread_id']['runs'][':run_id']['submit_tool_outputs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.threads)[':thread_id']['runs'][':run_id']['submit_tool_outputs']['$post']
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
  const mutationDefaults = getPostThreadsThreadIdRunsRunIdSubmitToolOutputsMutationOptions<
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

export function getPostUploadsMutationKey() {
  return ['uploads', '/uploads', 'POST'] as const
}

export function getPostUploadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$post>>>>>,
    TError,
    InferRequestType<typeof client.uploads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.uploads.$post>) {
      return parseResponse(client.uploads.$post(args, options))
    },
  })
}

export function usePostUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.uploads.$post>,
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
  const mutationDefaults = getPostUploadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUploadsUploadIdCancelMutationKey() {
  return ['uploads', '/uploads/:upload_id/cancel', 'POST'] as const
}

export function getPostUploadsUploadIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)[':upload_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)[':upload_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsUploadIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.uploads)[':upload_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.uploads[':upload_id'].cancel.$post(args, options))
    },
  })
}

export function usePostUploadsUploadIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uploads)[':upload_id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.uploads)[':upload_id']['cancel']['$post']>,
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
  const mutationDefaults = getPostUploadsUploadIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostUploadsUploadIdCompleteMutationKey() {
  return ['uploads', '/uploads/:upload_id/complete', 'POST'] as const
}

export function getPostUploadsUploadIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)[':upload_id']['complete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)[':upload_id']['complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsUploadIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.uploads)[':upload_id']['complete']['$post']>,
    ) {
      return parseResponse(client.uploads[':upload_id'].complete.$post(args, options))
    },
  })
}

export function usePostUploadsUploadIdComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uploads)[':upload_id']['complete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.uploads)[':upload_id']['complete']['$post']>,
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
  const mutationDefaults = getPostUploadsUploadIdCompleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostUploadsUploadIdPartsMutationKey() {
  return ['uploads', '/uploads/:upload_id/parts', 'POST'] as const
}

export function getPostUploadsUploadIdPartsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)[':upload_id']['parts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)[':upload_id']['parts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsUploadIdPartsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.uploads)[':upload_id']['parts']['$post']>,
    ) {
      return parseResponse(client.uploads[':upload_id'].parts.$post(args, options))
    },
  })
}

export function usePostUploadsUploadIdParts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uploads)[':upload_id']['parts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.uploads)[':upload_id']['parts']['$post']>,
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
  const mutationDefaults = getPostUploadsUploadIdPartsMutationOptions<TError, TOnMutateResult>(
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

export function getVectorStoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vector_stores.$get>>,
) {
  return ['vector_stores', '/vector_stores', toValue(args)] as const
}

export function getVectorStoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vector_stores.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVectorStoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vector_stores.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVectorStores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vector_stores.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
          >,
          ReturnType<typeof getVectorStoresQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVectorStoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVectorStoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vector_stores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVectorStoresMutationKey() {
  return ['vector_stores', '/vector_stores', 'POST'] as const
}

export function getPostVectorStoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vector_stores.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVectorStoresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vector_stores.$post>) {
      return parseResponse(client.vector_stores.$post(args, options))
    },
  })
}

export function usePostVectorStores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.vector_stores.$post>,
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
  const mutationDefaults = getPostVectorStoresMutationOptions<TError, TOnMutateResult>(
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

export function getVectorStoresVectorStoreIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$get']>
  >,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id', toValue(args)] as const
}

export function getVectorStoresVectorStoreIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVectorStoresVectorStoreIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVectorStoresVectorStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVectorStoresVectorStoreIdQueryKey>
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
          Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVectorStoresVectorStoreIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVectorStoresVectorStoreIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vector_stores[':vector_store_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVectorStoresVectorStoreIdMutationKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id', 'POST'] as const
}

export function getPostVectorStoresVectorStoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVectorStoresVectorStoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$post']>,
    ) {
      return parseResponse(client.vector_stores[':vector_store_id'].$post(args, options))
    },
  })
}

export function usePostVectorStoresVectorStoreId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$post']>,
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
  const mutationDefaults = getPostVectorStoresVectorStoreIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVectorStoresVectorStoreIdMutationKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id', 'DELETE'] as const
}

export function getDeleteVectorStoresVectorStoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVectorStoresVectorStoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$delete']>,
    ) {
      return parseResponse(client.vector_stores[':vector_store_id'].$delete(args, options))
    },
  })
}

export function useDeleteVectorStoresVectorStoreId<
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
                Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$delete']>,
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
  const mutationDefaults = getDeleteVectorStoresVectorStoreIdMutationOptions<
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

export function getPostVectorStoresVectorStoreIdFileBatchesMutationKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id/file_batches', 'POST'] as const
}

export function getPostVectorStoresVectorStoreIdFileBatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['file_batches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVectorStoresVectorStoreIdFileBatchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vector_stores)[':vector_store_id']['file_batches']['$post']
      >,
    ) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].file_batches.$post(args, options),
      )
    },
  })
}

export function usePostVectorStoresVectorStoreIdFileBatches<
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
                    (typeof client.vector_stores)[':vector_store_id']['file_batches']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vector_stores)[':vector_store_id']['file_batches']['$post']
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
  const mutationDefaults = getPostVectorStoresVectorStoreIdFileBatchesMutationOptions<
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

export function getVectorStoresVectorStoreIdFileBatchesBatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
    >
  >,
) {
  return [
    'vector_stores',
    '/vector_stores/:vector_store_id/file_batches/:batch_id',
    toValue(args),
  ] as const
}

export function getVectorStoresVectorStoreIdFileBatchesBatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVectorStoresVectorStoreIdFileBatchesBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].file_batches[':batch_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVectorStoresVectorStoreIdFileBatchesBatchId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
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
                    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
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
                    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVectorStoresVectorStoreIdFileBatchesBatchIdQueryKey>
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
              (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVectorStoresVectorStoreIdFileBatchesBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVectorStoresVectorStoreIdFileBatchesBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vector_stores[':vector_store_id'].file_batches[':batch_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVectorStoresVectorStoreIdFileBatchesBatchIdCancelMutationKey() {
  return [
    'vector_stores',
    '/vector_stores/:vector_store_id/file_batches/:batch_id/cancel',
    'POST',
  ] as const
}

export function getPostVectorStoresVectorStoreIdFileBatchesBatchIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVectorStoresVectorStoreIdFileBatchesBatchIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].file_batches[':batch_id'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostVectorStoresVectorStoreIdFileBatchesBatchIdCancel<
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
                    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['cancel']['$post']
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
  const mutationDefaults = getPostVectorStoresVectorStoreIdFileBatchesBatchIdCancelMutationOptions<
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

export function getVectorStoresVectorStoreIdFileBatchesBatchIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
    >
  >,
) {
  return [
    'vector_stores',
    '/vector_stores/:vector_store_id/file_batches/:batch_id/files',
    toValue(args),
  ] as const
}

export function getVectorStoresVectorStoreIdFileBatchesBatchIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVectorStoresVectorStoreIdFileBatchesBatchIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].file_batches[':batch_id'].files.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVectorStoresVectorStoreIdFileBatchesBatchIdFiles<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
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
                    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
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
                    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVectorStoresVectorStoreIdFileBatchesBatchIdFilesQueryKey>
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
              (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVectorStoresVectorStoreIdFileBatchesBatchIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVectorStoresVectorStoreIdFileBatchesBatchIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vector_stores[':vector_store_id'].file_batches[':batch_id'].files.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getVectorStoresVectorStoreIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>
  >,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id/files', toValue(args)] as const
}

export function getVectorStoresVectorStoreIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVectorStoresVectorStoreIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVectorStoresVectorStoreIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>
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
                  ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVectorStoresVectorStoreIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVectorStoresVectorStoreIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVectorStoresVectorStoreIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vector_stores[':vector_store_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVectorStoresVectorStoreIdFilesMutationKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id/files', 'POST'] as const
}

export function getPostVectorStoresVectorStoreIdFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVectorStoresVectorStoreIdFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$post']>,
    ) {
      return parseResponse(client.vector_stores[':vector_store_id'].files.$post(args, options))
    },
  })
}

export function usePostVectorStoresVectorStoreIdFiles<
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
                  ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$post']>,
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
  const mutationDefaults = getPostVectorStoresVectorStoreIdFilesMutationOptions<
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

export function getVectorStoresVectorStoreIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']>
  >,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id/files/:file_id', toValue(args)] as const
}

export function getVectorStoresVectorStoreIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVectorStoresVectorStoreIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVectorStoresVectorStoreIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']>
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
                    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
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
                    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVectorStoresVectorStoreIdFilesFileIdQueryKey>
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
              (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVectorStoresVectorStoreIdFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVectorStoresVectorStoreIdFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vector_stores[':vector_store_id'].files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVectorStoresVectorStoreIdFilesFileIdMutationKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id/files/:file_id', 'POST'] as const
}

export function getPostVectorStoresVectorStoreIdFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVectorStoresVectorStoreIdFilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$post']
      >,
    ) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].files[':file_id'].$post(args, options),
      )
    },
  })
}

export function usePostVectorStoresVectorStoreIdFilesFileId<
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
                    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$post']
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
  const mutationDefaults = getPostVectorStoresVectorStoreIdFilesFileIdMutationOptions<
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

export function getDeleteVectorStoresVectorStoreIdFilesFileIdMutationKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id/files/:file_id', 'DELETE'] as const
}

export function getDeleteVectorStoresVectorStoreIdFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVectorStoresVectorStoreIdFilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].files[':file_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVectorStoresVectorStoreIdFilesFileId<
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
                    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$delete']
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
  const mutationDefaults = getDeleteVectorStoresVectorStoreIdFilesFileIdMutationOptions<
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

export function getVectorStoresVectorStoreIdFilesFileIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
    >
  >,
) {
  return [
    'vector_stores',
    '/vector_stores/:vector_store_id/files/:file_id/content',
    toValue(args),
  ] as const
}

export function getVectorStoresVectorStoreIdFilesFileIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVectorStoresVectorStoreIdFilesFileIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].files[':file_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVectorStoresVectorStoreIdFilesFileIdContent<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
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
                    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
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
                    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVectorStoresVectorStoreIdFilesFileIdContentQueryKey>
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
              (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVectorStoresVectorStoreIdFilesFileIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVectorStoresVectorStoreIdFilesFileIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vector_stores[':vector_store_id'].files[':file_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVectorStoresVectorStoreIdSearchMutationKey() {
  return ['vector_stores', '/vector_stores/:vector_store_id/search', 'POST'] as const
}

export function getPostVectorStoresVectorStoreIdSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vector_stores)[':vector_store_id']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVectorStoresVectorStoreIdSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['search']['$post']>,
    ) {
      return parseResponse(client.vector_stores[':vector_store_id'].search.$post(args, options))
    },
  })
}

export function usePostVectorStoresVectorStoreIdSearch<
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
                  ReturnType<(typeof client.vector_stores)[':vector_store_id']['search']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vector_stores)[':vector_store_id']['search']['$post']>,
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
  const mutationDefaults = getPostVectorStoresVectorStoreIdSearchMutationOptions<
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

export function getPostConversationsMutationKey() {
  return ['conversations', '/conversations', 'POST'] as const
}

export function getPostConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.conversations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.$post>) {
      return parseResponse(client.conversations.$post(args, options))
    },
  })
}

export function usePostConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.conversations.$post>,
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
  const mutationDefaults = getPostConversationsMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsConversationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>
  >,
) {
  return ['conversations', '/conversations/:conversation_id', toValue(args)] as const
}

export function getConversationsConversationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':conversation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsConversationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':conversation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsConversationIdMutationKey() {
  return ['conversations', '/conversations/:conversation_id', 'POST'] as const
}

export function getPostConversationsConversationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['$post']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].$post(args, options))
    },
  })
}

export function usePostConversationsConversationId<
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
                Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['$post']>,
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
  const mutationDefaults = getPostConversationsConversationIdMutationOptions<
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

export function getDeleteConversationsConversationIdMutationKey() {
  return ['conversations', '/conversations/:conversation_id', 'DELETE'] as const
}

export function getDeleteConversationsConversationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConversationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].$delete(args, options))
    },
  })
}

export function useDeleteConversationsConversationId<
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
                Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
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
  const mutationDefaults = getDeleteConversationsConversationIdMutationOptions<
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

export function getSafetyCasesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.safety.cases)[':id']['$get']>>,
) {
  return ['safety', '/safety/cases/:id', toValue(args)] as const
}

export function getSafetyCasesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.safety.cases)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSafetyCasesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.safety.cases[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSafetyCasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.safety.cases)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSafetyCasesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSafetyCasesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSafetyCasesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.safety.cases[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSafetyAlertsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.safety.alerts)[':id']['$get']>>,
) {
  return ['safety', '/safety/alerts/:id', toValue(args)] as const
}

export function getSafetyAlertsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.safety.alerts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSafetyAlertsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.safety.alerts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSafetyAlertsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.safety.alerts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSafetyAlertsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSafetyAlertsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSafetyAlertsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.safety.alerts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationExternalKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.external_keys.$get>>,
) {
  return ['organization', '/organization/external_keys', toValue(args)] as const
}

export function getOrganizationExternalKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.external_keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationExternalKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.external_keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationExternalKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.external_keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.external_keys.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.external_keys.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationExternalKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationExternalKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationExternalKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.external_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationExternalKeysMutationKey() {
  return ['organization', '/organization/external_keys', 'POST'] as const
}

export function getPostOrganizationExternalKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.external_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationExternalKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.external_keys.$post>) {
      return parseResponse(client.organization.external_keys.$post(args, options))
    },
  })
}

export function usePostOrganizationExternalKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.external_keys.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.external_keys.$post>,
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
  const mutationDefaults = getPostOrganizationExternalKeysMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationExternalKeysExternalKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$get']>
  >,
) {
  return ['organization', '/organization/external_keys/:external_key_id', toValue(args)] as const
}

export function getOrganizationExternalKeysExternalKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationExternalKeysExternalKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.external_keys[':external_key_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationExternalKeysExternalKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$get']>
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
                  ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationExternalKeysExternalKeyIdQueryKey>
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
            ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationExternalKeysExternalKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationExternalKeysExternalKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.external_keys[':external_key_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationExternalKeysExternalKeyIdMutationKey() {
  return ['organization', '/organization/external_keys/:external_key_id', 'DELETE'] as const
}

export function getDeleteOrganizationExternalKeysExternalKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationExternalKeysExternalKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.external_keys)[':external_key_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.external_keys[':external_key_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationExternalKeysExternalKeyId<
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
                    (typeof client.organization.external_keys)[':external_key_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.external_keys)[':external_key_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationExternalKeysExternalKeyIdMutationOptions<
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

export function getPostOrganizationExternalKeysExternalKeyIdValidateMutationKey() {
  return ['organization', '/organization/external_keys/:external_key_id/validate', 'POST'] as const
}

export function getPostOrganizationExternalKeysExternalKeyIdValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.external_keys)[':external_key_id']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationExternalKeysExternalKeyIdValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.external_keys)[':external_key_id']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.external_keys[':external_key_id'].validate.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationExternalKeysExternalKeyIdValidate<
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
                    (typeof client.organization.external_keys)[':external_key_id']['validate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.external_keys)[':external_key_id']['validate']['$post']
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
  const mutationDefaults = getPostOrganizationExternalKeysExternalKeyIdValidateMutationOptions<
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

export function getLiveSessionsSessionIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.live.sessions)[':session_id']['content']['$get']>
  >,
) {
  return ['live', '/live/sessions/:session_id/content', toValue(args)] as const
}

export function getLiveSessionsSessionIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.live.sessions)[':session_id']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveSessionsSessionIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.live.sessions[':session_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveSessionsSessionIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.live.sessions)[':session_id']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLiveSessionsSessionIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveSessionsSessionIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveSessionsSessionIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.live.sessions[':session_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationWorkloadIdentityProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.organization.workload_identity_providers.$get>
  >,
) {
  return ['organization', '/organization/workload_identity_providers', toValue(args)] as const
}

export function getOrganizationWorkloadIdentityProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.organization.workload_identity_providers.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationWorkloadIdentityProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.workload_identity_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationWorkloadIdentityProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.workload_identity_providers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.organization.workload_identity_providers.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.workload_identity_providers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.workload_identity_providers.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationWorkloadIdentityProvidersQueryKey>
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
          Awaited<ReturnType<typeof client.organization.workload_identity_providers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationWorkloadIdentityProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationWorkloadIdentityProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.workload_identity_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationWorkloadIdentityProvidersMutationKey() {
  return ['organization', '/organization/workload_identity_providers', 'POST'] as const
}

export function getPostOrganizationWorkloadIdentityProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organization.workload_identity_providers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.organization.workload_identity_providers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationWorkloadIdentityProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.organization.workload_identity_providers.$post>,
    ) {
      return parseResponse(client.organization.workload_identity_providers.$post(args, options))
    },
  })
}

export function usePostOrganizationWorkloadIdentityProviders<
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
                Awaited<ReturnType<typeof client.organization.workload_identity_providers.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.workload_identity_providers.$post>,
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
  const mutationDefaults = getPostOrganizationWorkloadIdentityProvidersMutationOptions<
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

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id',
    toValue(args),
  ] as const
}

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.workload_identity_providers[':workload_identity_provider_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryKey
          >
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
              (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.workload_identity_providers[':workload_identity_provider_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdMutationKey() {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id',
    'POST',
  ] as const
}

export function getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.workload_identity_providers[':workload_identity_provider_id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId<
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$post']
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
    getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdMutationOptions<
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

export function getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdMutationKey() {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.workload_identity_providers[':workload_identity_provider_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId<
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$delete']
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
    getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdMutationOptions<
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

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules',
    toValue(args),
  ] as const
}

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.workload_identity_providers[
          ':workload_identity_provider_id'
        ].federation_rules.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRules<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesQueryKey
          >
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
              (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.workload_identity_providers[
            ':workload_identity_provider_id'
          ].federation_rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesMutationKey() {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules',
    'POST',
  ] as const
}

export function getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.workload_identity_providers[
          ':workload_identity_provider_id'
        ].federation_rules.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRules<
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$post']
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
    getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesMutationOptions<
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

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules/:workload_identity_federation_rule_id',
    toValue(args),
  ] as const
}

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.workload_identity_providers[
          ':workload_identity_provider_id'
        ].federation_rules[':workload_identity_federation_rule_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdQueryKey
          >
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
              (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.workload_identity_providers[
            ':workload_identity_provider_id'
          ].federation_rules[':workload_identity_federation_rule_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdMutationKey() {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules/:workload_identity_federation_rule_id',
    'POST',
  ] as const
}

export function getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.workload_identity_providers[
          ':workload_identity_provider_id'
        ].federation_rules[':workload_identity_federation_rule_id'].$post(args, options),
      )
    },
  })
}

export function usePostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId<
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$post']
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
    getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdMutationOptions<
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

export function getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdMutationKey() {
  return [
    'organization',
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules/:workload_identity_federation_rule_id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.workload_identity_providers[
          ':workload_identity_provider_id'
        ].federation_rules[':workload_identity_federation_rule_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId<
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
                    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$delete']
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
    getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdMutationOptions<
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

export function getOrganizationUsageDecisionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.decisions.$get>>,
) {
  return ['organization', '/organization/usage/decisions', toValue(args)] as const
}

export function getOrganizationUsageDecisionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.decisions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUsageDecisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.usage.decisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUsageDecisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.usage.decisions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationUsageDecisionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageDecisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUsageDecisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.usage.decisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationExternalStorageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.external_storage.$get>>,
) {
  return ['organization', '/organization/external_storage', toValue(args)] as const
}

export function getOrganizationExternalStorageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.external_storage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationExternalStorageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.external_storage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationExternalStorage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_storage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.external_storage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.external_storage.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.external_storage.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationExternalStorageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_storage.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationExternalStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationExternalStorageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.external_storage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationExternalStorageMutationKey() {
  return ['organization', '/organization/external_storage', 'POST'] as const
}

export function getPostOrganizationExternalStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_storage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.external_storage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationExternalStorageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.external_storage.$post>) {
      return parseResponse(client.organization.external_storage.$post(args, options))
    },
  })
}

export function usePostOrganizationExternalStorage<
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
                Awaited<ReturnType<typeof client.organization.external_storage.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.external_storage.$post>,
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
  const mutationDefaults = getPostOrganizationExternalStorageMutationOptions<
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

export function getOrganizationExternalStorageExternalStorageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.external_storage)[':external_storage_id']['$get']>
  >,
) {
  return [
    'organization',
    '/organization/external_storage/:external_storage_id',
    toValue(args),
  ] as const
}

export function getOrganizationExternalStorageExternalStorageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.external_storage)[':external_storage_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationExternalStorageExternalStorageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.external_storage[':external_storage_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationExternalStorageExternalStorageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization.external_storage)[':external_storage_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.external_storage)[':external_storage_id']['$get']>
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
                    (typeof client.organization.external_storage)[':external_storage_id']['$get']
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
                    (typeof client.organization.external_storage)[':external_storage_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationExternalStorageExternalStorageIdQueryKey>
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
              (typeof client.organization.external_storage)[':external_storage_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationExternalStorageExternalStorageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationExternalStorageExternalStorageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.external_storage[':external_storage_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationExternalStorageExternalStorageIdMutationKey() {
  return ['organization', '/organization/external_storage/:external_storage_id', 'DELETE'] as const
}

export function getDeleteOrganizationExternalStorageExternalStorageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.external_storage)[':external_storage_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationExternalStorageExternalStorageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.external_storage)[':external_storage_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.external_storage[':external_storage_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationExternalStorageExternalStorageId<
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
                    (typeof client.organization.external_storage)[':external_storage_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.external_storage)[':external_storage_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationExternalStorageExternalStorageIdMutationOptions<
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

export function getPostOrganizationExternalStorageExternalStorageIdValidateMutationKey() {
  return [
    'organization',
    '/organization/external_storage/:external_storage_id/validate',
    'POST',
  ] as const
}

export function getPostOrganizationExternalStorageExternalStorageIdValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.external_storage)[':external_storage_id']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationExternalStorageExternalStorageIdValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.external_storage)[':external_storage_id']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.external_storage[':external_storage_id'].validate.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationExternalStorageExternalStorageIdValidate<
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
                    (typeof client.organization.external_storage)[':external_storage_id']['validate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.external_storage)[':external_storage_id']['validate']['$post']
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
    getPostOrganizationExternalStorageExternalStorageIdValidateMutationOptions<
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

export function getOrganizationSpendLimitQueryKey() {
  return ['organization', '/organization/spend_limit'] as const
}

export function getOrganizationSpendLimitQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrganizationSpendLimitQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.spend_limit.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationSpendLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationSpendLimitQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationSpendLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrganizationSpendLimitQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.spend_limit.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationSpendLimitMutationKey() {
  return ['organization', '/organization/spend_limit', 'POST'] as const
}

export function getPostOrganizationSpendLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.spend_limit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationSpendLimitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.spend_limit.$post>) {
      return parseResponse(client.organization.spend_limit.$post(args, options))
    },
  })
}

export function usePostOrganizationSpendLimit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.spend_limit.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.spend_limit.$post>,
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
  const mutationDefaults = getPostOrganizationSpendLimitMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationSpendLimitMutationKey() {
  return ['organization', '/organization/spend_limit', 'DELETE'] as const
}

export function getDeleteOrganizationSpendLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationSpendLimitMutationKey(),
    async mutationFn() {
      return parseResponse(client.organization.spend_limit.$delete(undefined, options))
    },
  })
}

export function useDeleteOrganizationSpendLimit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.spend_limit.$delete>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteOrganizationSpendLimitMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationProjectsProjectIdSpendLimitQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_limit']['$get']>
  >,
) {
  return ['organization', '/organization/projects/:project_id/spend_limit', toValue(args)] as const
}

export function getOrganizationProjectsProjectIdSpendLimitQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_limit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdSpendLimitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_limit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdSpendLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization.projects)[':project_id']['spend_limit']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_limit']['$get']>
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
                    (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
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
                    (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdSpendLimitQueryKey>
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
            ReturnType<(typeof client.organization.projects)[':project_id']['spend_limit']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdSpendLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdSpendLimitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].spend_limit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdSpendLimitMutationKey() {
  return ['organization', '/organization/projects/:project_id/spend_limit', 'POST'] as const
}

export function getPostOrganizationProjectsProjectIdSpendLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organization.projects)[':project_id']['spend_limit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdSpendLimitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['spend_limit']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_limit.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdSpendLimit<
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
                    (typeof client.organization.projects)[':project_id']['spend_limit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['spend_limit']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdSpendLimitMutationOptions<
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

export function getDeleteOrganizationProjectsProjectIdSpendLimitMutationKey() {
  return ['organization', '/organization/projects/:project_id/spend_limit', 'DELETE'] as const
}

export function getDeleteOrganizationProjectsProjectIdSpendLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['spend_limit']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationProjectsProjectIdSpendLimitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['spend_limit']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_limit.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationProjectsProjectIdSpendLimit<
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
                    (typeof client.organization.projects)[':project_id']['spend_limit']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['spend_limit']['$delete']
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
  const mutationDefaults = getDeleteOrganizationProjectsProjectIdSpendLimitMutationOptions<
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

export function getOrganizationProjectsProjectIdServiceTierSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
    >
  >,
) {
  return [
    'organization',
    '/organization/projects/:project_id/service_tier_settings',
    toValue(args),
  ] as const
}

export function getOrganizationProjectsProjectIdServiceTierSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationProjectsProjectIdServiceTierSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.projects[':project_id'].service_tier_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationProjectsProjectIdServiceTierSettings<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
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
                    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
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
                    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationProjectsProjectIdServiceTierSettingsQueryKey>
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
              (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsProjectIdServiceTierSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationProjectsProjectIdServiceTierSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.projects[':project_id'].service_tier_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationProjectsProjectIdServiceTierSettingsMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/service_tier_settings',
    'POST',
  ] as const
}

export function getPostOrganizationProjectsProjectIdServiceTierSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_tier_settings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationProjectsProjectIdServiceTierSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['service_tier_settings']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].service_tier_settings.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdServiceTierSettings<
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
                    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['service_tier_settings']['$post']
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
  const mutationDefaults = getPostOrganizationProjectsProjectIdServiceTierSettingsMutationOptions<
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

export function getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysMutationKey() {
  return [
    'organization',
    '/organization/projects/:project_id/service_accounts/:service_account_id/api_keys',
    'POST',
  ] as const
}

export function getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['api_keys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['api_keys']['$post']
      >,
    ) {
      return parseResponse(
        client.organization.projects[':project_id'].service_accounts[
          ':service_account_id'
        ].api_keys.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeys<
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
                    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['api_keys']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['api_keys']['$post']
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
    getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysMutationOptions<
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

export function getPostContentProvenanceChecksMutationKey() {
  return ['content_provenance_checks', '/content_provenance_checks', 'POST'] as const
}

export function getPostContentProvenanceChecksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.content_provenance_checks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.content_provenance_checks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContentProvenanceChecksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.content_provenance_checks.$post>) {
      return parseResponse(client.content_provenance_checks.$post(args, options))
    },
  })
}

export function usePostContentProvenanceChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.content_provenance_checks.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.content_provenance_checks.$post>,
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
  const mutationDefaults = getPostContentProvenanceChecksMutationOptions<TError, TOnMutateResult>(
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

export function getVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
) {
  return ['videos', '/videos', toValue(args)] as const
}

export function getVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVideos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
          ReturnType<typeof getVideosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVideosMutationKey() {
  return ['videos', '/videos', 'POST'] as const
}

export function getPostVideosMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$post>>>>>,
    TError,
    InferRequestType<typeof client.videos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.videos.$post>) {
      return parseResponse(client.videos.$post(args, options))
    },
  })
}

export function usePostVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.videos.$post>,
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
  const mutationDefaults = getPostVideosMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVideosCharactersMutationKey() {
  return ['videos', '/videos/characters', 'POST'] as const
}

export function getPostVideosCharactersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.characters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.videos.characters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosCharactersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.videos.characters.$post>) {
      return parseResponse(client.videos.characters.$post(args, options))
    },
  })
}

export function usePostVideosCharacters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.videos.characters.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.videos.characters.$post>,
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
  const mutationDefaults = getPostVideosCharactersMutationOptions<TError, TOnMutateResult>(
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

export function getVideosCharactersCharacterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos.characters)[':character_id']['$get']>
  >,
) {
  return ['videos', '/videos/characters/:character_id', toValue(args)] as const
}

export function getVideosCharactersCharacterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos.characters)[':character_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosCharactersCharacterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos.characters[':character_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosCharactersCharacterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos.characters)[':character_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos.characters)[':character_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos.characters)[':character_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos.characters)[':character_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosCharactersCharacterIdQueryKey>
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
          Awaited<ReturnType<(typeof client.videos.characters)[':character_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosCharactersCharacterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosCharactersCharacterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos.characters[':character_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVideosEditsMutationKey() {
  return ['videos', '/videos/edits', 'POST'] as const
}

export function getPostVideosEditsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.edits.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.videos.edits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosEditsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.videos.edits.$post>) {
      return parseResponse(client.videos.edits.$post(args, options))
    },
  })
}

export function usePostVideosEdits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.edits.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.videos.edits.$post>,
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
  const mutationDefaults = getPostVideosEditsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVideosExtensionsMutationKey() {
  return ['videos', '/videos/extensions', 'POST'] as const
}

export function getPostVideosExtensionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.extensions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.videos.extensions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosExtensionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.videos.extensions.$post>) {
      return parseResponse(client.videos.extensions.$post(args, options))
    },
  })
}

export function usePostVideosExtensions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.videos.extensions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.videos.extensions.$post>,
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
  const mutationDefaults = getPostVideosExtensionsMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['$get']>>,
) {
  return ['videos', '/videos/:video_id', toValue(args)] as const
}

export function getVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
            >
          >,
          ReturnType<typeof getVideosVideoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVideosVideoIdMutationKey() {
  return ['videos', '/videos/:video_id', 'DELETE'] as const
}

export function getDeleteVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.videos)[':video_id']['$delete']>) {
      return parseResponse(client.videos[':video_id'].$delete(args, options))
    },
  })
}

export function useDeleteVideosVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.videos)[':video_id']['$delete']>,
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
  const mutationDefaults = getDeleteVideosVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdContentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['content']['$get']>>,
) {
  return ['videos', '/videos/:video_id/content', toValue(args)] as const
}

export function getVideosVideoIdContentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['content']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['content']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVideosVideoIdRemixMutationKey() {
  return ['videos', '/videos/:video_id/remix', 'POST'] as const
}

export function getPostVideosVideoIdRemixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['remix']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['remix']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdRemixMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['remix']['$post']>,
    ) {
      return parseResponse(client.videos[':video_id'].remix.$post(args, options))
    },
  })
}

export function usePostVideosVideoIdRemix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['remix']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.videos)[':video_id']['remix']['$post']>,
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
  const mutationDefaults = getPostVideosVideoIdRemixMutationOptions<TError, TOnMutateResult>(
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

export function getPostResponsesInputTokensMutationKey() {
  return ['responses', '/responses/input_tokens', 'POST'] as const
}

export function getPostResponsesInputTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.responses.input_tokens.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.responses.input_tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResponsesInputTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.responses.input_tokens.$post>) {
      return parseResponse(client.responses.input_tokens.$post(args, options))
    },
  })
}

export function usePostResponsesInputTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.responses.input_tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.responses.input_tokens.$post>,
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
  const mutationDefaults = getPostResponsesInputTokensMutationOptions<TError, TOnMutateResult>(
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

export function getPostResponsesCompactMutationKey() {
  return ['responses', '/responses/compact', 'POST'] as const
}

export function getPostResponsesCompactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responses.compact.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.responses.compact.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResponsesCompactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.responses.compact.$post>) {
      return parseResponse(client.responses.compact.$post(args, options))
    },
  })
}

export function usePostResponsesCompact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.responses.compact.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.responses.compact.$post>,
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
  const mutationDefaults = getPostResponsesCompactMutationOptions<TError, TOnMutateResult>(
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

export function getSkillsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.skills.$get>>,
) {
  return ['skills', '/skills', toValue(args)] as const
}

export function getSkillsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.skills.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkillsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.skills.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSkills<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.skills.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
          ReturnType<typeof getSkillsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSkillsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkillsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.skills.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSkillsMutationKey() {
  return ['skills', '/skills', 'POST'] as const
}

export function getPostSkillsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$post>>>>>,
    TError,
    InferRequestType<typeof client.skills.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSkillsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.skills.$post>) {
      return parseResponse(client.skills.$post(args, options))
    },
  })
}

export function usePostSkills<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.skills.$post>,
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
  const mutationDefaults = getPostSkillsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSkillsSkillIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.skills)[':skill_id']['$get']>>,
) {
  return ['skills', '/skills/:skill_id', toValue(args)] as const
}

export function getSkillsSkillIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.skills)[':skill_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkillsSkillIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.skills[':skill_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkillsSkillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.skills)[':skill_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
            >
          >,
          ReturnType<typeof getSkillsSkillIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkillsSkillIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkillsSkillIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.skills[':skill_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSkillsSkillIdMutationKey() {
  return ['skills', '/skills/:skill_id', 'POST'] as const
}

export function getPostSkillsSkillIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.skills)[':skill_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSkillsSkillIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.skills)[':skill_id']['$post']>) {
      return parseResponse(client.skills[':skill_id'].$post(args, options))
    },
  })
}

export function usePostSkillsSkillId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.skills)[':skill_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.skills)[':skill_id']['$post']>,
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
  const mutationDefaults = getPostSkillsSkillIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSkillsSkillIdMutationKey() {
  return ['skills', '/skills/:skill_id', 'DELETE'] as const
}

export function getDeleteSkillsSkillIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.skills)[':skill_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSkillsSkillIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.skills)[':skill_id']['$delete']>) {
      return parseResponse(client.skills[':skill_id'].$delete(args, options))
    },
  })
}

export function useDeleteSkillsSkillId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.skills)[':skill_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.skills)[':skill_id']['$delete']>,
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
  const mutationDefaults = getDeleteSkillsSkillIdMutationOptions<TError, TOnMutateResult>(
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

export function getSkillsSkillIdContentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.skills)[':skill_id']['content']['$get']>>,
) {
  return ['skills', '/skills/:skill_id/content', toValue(args)] as const
}

export function getSkillsSkillIdContentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.skills)[':skill_id']['content']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkillsSkillIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.skills[':skill_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkillsSkillIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.skills)[':skill_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.skills)[':skill_id']['content']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.skills)[':skill_id']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.skills)[':skill_id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSkillsSkillIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.skills)[':skill_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkillsSkillIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkillsSkillIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.skills[':skill_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSkillsSkillIdVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.skills)[':skill_id']['versions']['$get']>>,
) {
  return ['skills', '/skills/:skill_id/versions', toValue(args)] as const
}

export function getSkillsSkillIdVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.skills)[':skill_id']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkillsSkillIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.skills[':skill_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkillsSkillIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.skills)[':skill_id']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSkillsSkillIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkillsSkillIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkillsSkillIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.skills[':skill_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSkillsSkillIdVersionsMutationKey() {
  return ['skills', '/skills/:skill_id/versions', 'POST'] as const
}

export function getPostSkillsSkillIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.skills)[':skill_id']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSkillsSkillIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.skills)[':skill_id']['versions']['$post']>,
    ) {
      return parseResponse(client.skills[':skill_id'].versions.$post(args, options))
    },
  })
}

export function usePostSkillsSkillIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.skills)[':skill_id']['versions']['$post']>,
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
  const mutationDefaults = getPostSkillsSkillIdVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getSkillsSkillIdVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>
  >,
) {
  return ['skills', '/skills/:skill_id/versions/:version', toValue(args)] as const
}

export function getSkillsSkillIdVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkillsSkillIdVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.skills[':skill_id'].versions[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkillsSkillIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>
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
                  ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSkillsSkillIdVersionsVersionQueryKey>
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
          Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkillsSkillIdVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkillsSkillIdVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.skills[':skill_id'].versions[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSkillsSkillIdVersionsVersionMutationKey() {
  return ['skills', '/skills/:skill_id/versions/:version', 'DELETE'] as const
}

export function getDeleteSkillsSkillIdVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSkillsSkillIdVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.skills)[':skill_id']['versions'][':version']['$delete']
      >,
    ) {
      return parseResponse(client.skills[':skill_id'].versions[':version'].$delete(args, options))
    },
  })
}

export function useDeleteSkillsSkillIdVersionsVersion<
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
                  ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$delete']>,
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
  const mutationDefaults = getDeleteSkillsSkillIdVersionsVersionMutationOptions<
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

export function getSkillsSkillIdVersionsVersionContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']>
  >,
) {
  return ['skills', '/skills/:skill_id/versions/:version/content', toValue(args)] as const
}

export function getSkillsSkillIdVersionsVersionContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkillsSkillIdVersionsVersionContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.skills[':skill_id'].versions[':version'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkillsSkillIdVersionsVersionContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']>
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
                    (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
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
                    (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSkillsSkillIdVersionsVersionContentQueryKey>
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
              (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkillsSkillIdVersionsVersionContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkillsSkillIdVersionsVersionContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.skills[':skill_id'].versions[':version'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChatkitSessionsSessionIdCancelMutationKey() {
  return ['chatkit', '/chatkit/sessions/:session_id/cancel', 'POST'] as const
}

export function getPostChatkitSessionsSessionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chatkit.sessions)[':session_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.chatkit.sessions)[':session_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatkitSessionsSessionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.chatkit.sessions)[':session_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.chatkit.sessions[':session_id'].cancel.$post(args, options))
    },
  })
}

export function usePostChatkitSessionsSessionIdCancel<
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
                  ReturnType<(typeof client.chatkit.sessions)[':session_id']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.chatkit.sessions)[':session_id']['cancel']['$post']>,
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
  const mutationDefaults = getPostChatkitSessionsSessionIdCancelMutationOptions<
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

export function getPostChatkitSessionsMutationKey() {
  return ['chatkit', '/chatkit/sessions', 'POST'] as const
}

export function getPostChatkitSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chatkit.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatkitSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chatkit.sessions.$post>) {
      return parseResponse(client.chatkit.sessions.$post(args, options))
    },
  })
}

export function usePostChatkitSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.sessions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.chatkit.sessions.$post>,
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
  const mutationDefaults = getPostChatkitSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getChatkitThreadsThreadIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>
  >,
) {
  return ['chatkit', '/chatkit/threads/:thread_id/items', toValue(args)] as const
}

export function getChatkitThreadsThreadIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatkitThreadsThreadIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chatkit.threads[':thread_id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatkitThreadsThreadIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChatkitThreadsThreadIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatkitThreadsThreadIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatkitThreadsThreadIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chatkit.threads[':thread_id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatkitThreadsThreadIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$get']>>,
) {
  return ['chatkit', '/chatkit/threads/:thread_id', toValue(args)] as const
}

export function getChatkitThreadsThreadIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatkitThreadsThreadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chatkit.threads[':thread_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatkitThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChatkitThreadsThreadIdQueryKey>
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
          Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatkitThreadsThreadIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatkitThreadsThreadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chatkit.threads[':thread_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChatkitThreadsThreadIdMutationKey() {
  return ['chatkit', '/chatkit/threads/:thread_id', 'DELETE'] as const
}

export function getDeleteChatkitThreadsThreadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChatkitThreadsThreadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$delete']>,
    ) {
      return parseResponse(client.chatkit.threads[':thread_id'].$delete(args, options))
    },
  })
}

export function useDeleteChatkitThreadsThreadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$delete']>,
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
  const mutationDefaults = getDeleteChatkitThreadsThreadIdMutationOptions<TError, TOnMutateResult>(
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

export function getChatkitThreadsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chatkit.threads.$get>>,
) {
  return ['chatkit', '/chatkit/threads', toValue(args)] as const
}

export function getChatkitThreadsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chatkit.threads.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatkitThreadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chatkit.threads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatkitThreads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chatkit.threads.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>
            >
          >,
          ReturnType<typeof getChatkitThreadsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatkitThreadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatkitThreadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chatkit.threads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDecisionsMutationKey() {
  return ['decisions', '/decisions', 'POST'] as const
}

export function getPostDecisionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.decisions.$post>>>>>,
    TError,
    InferRequestType<typeof client.decisions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDecisionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.decisions.$post>) {
      return parseResponse(client.decisions.$post(args, options))
    },
  })
}

export function usePostDecisions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.decisions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.decisions.$post>,
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
  const mutationDefaults = getPostDecisionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAgentsAutomationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.automations.$get>>,
) {
  return ['agents', '/agents/automations', toValue(args)] as const
}

export function getAgentsAutomationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.automations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsAutomationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.automations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsAutomations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.automations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>
            >
          >,
          ReturnType<typeof getAgentsAutomationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsAutomationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsAutomationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.automations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsAutomationsMutationKey() {
  return ['agents', '/agents/automations', 'POST'] as const
}

export function getPostAgentsAutomationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.agents.automations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsAutomationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agents.automations.$post>) {
      return parseResponse(client.agents.automations.$post(args, options))
    },
  })
}

export function usePostAgentsAutomations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.agents.automations.$post>,
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
  const mutationDefaults = getPostAgentsAutomationsMutationOptions<TError, TOnMutateResult>(
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

export function getAgentsAutomationsAutomationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.automations)[':automation_id']['$get']>
  >,
) {
  return ['agents', '/agents/automations/:automation_id', toValue(args)] as const
}

export function getAgentsAutomationsAutomationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.automations)[':automation_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsAutomationsAutomationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.automations[':automation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsAutomationsAutomationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.automations)[':automation_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentsAutomationsAutomationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsAutomationsAutomationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsAutomationsAutomationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.automations[':automation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsAutomationsAutomationIdMutationKey() {
  return ['agents', '/agents/automations/:automation_id', 'POST'] as const
}

export function getPostAgentsAutomationsAutomationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agents.automations)[':automation_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsAutomationsAutomationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.automations)[':automation_id']['$post']>,
    ) {
      return parseResponse(client.agents.automations[':automation_id'].$post(args, options))
    },
  })
}

export function usePostAgentsAutomationsAutomationId<
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
                Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agents.automations)[':automation_id']['$post']>,
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
  const mutationDefaults = getPostAgentsAutomationsAutomationIdMutationOptions<
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

export function getDeleteAgentsAutomationsAutomationIdMutationKey() {
  return ['agents', '/agents/automations/:automation_id', 'DELETE'] as const
}

export function getDeleteAgentsAutomationsAutomationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agents.automations)[':automation_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentsAutomationsAutomationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.automations)[':automation_id']['$delete']>,
    ) {
      return parseResponse(client.agents.automations[':automation_id'].$delete(args, options))
    },
  })
}

export function useDeleteAgentsAutomationsAutomationId<
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
                Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agents.automations)[':automation_id']['$delete']>,
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
  const mutationDefaults = getDeleteAgentsAutomationsAutomationIdMutationOptions<
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

export function getPostAgentsAutomationsAutomationIdPauseMutationKey() {
  return ['agents', '/agents/automations/:automation_id/pause', 'POST'] as const
}

export function getPostAgentsAutomationsAutomationIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.agents.automations)[':automation_id']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsAutomationsAutomationIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.automations)[':automation_id']['pause']['$post']
      >,
    ) {
      return parseResponse(client.agents.automations[':automation_id'].pause.$post(args, options))
    },
  })
}

export function usePostAgentsAutomationsAutomationIdPause<
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
                  ReturnType<(typeof client.agents.automations)[':automation_id']['pause']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agents.automations)[':automation_id']['pause']['$post']>,
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
  const mutationDefaults = getPostAgentsAutomationsAutomationIdPauseMutationOptions<
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

export function getPostAgentsAutomationsAutomationIdResumeMutationKey() {
  return ['agents', '/agents/automations/:automation_id/resume', 'POST'] as const
}

export function getPostAgentsAutomationsAutomationIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.agents.automations)[':automation_id']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsAutomationsAutomationIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.automations)[':automation_id']['resume']['$post']
      >,
    ) {
      return parseResponse(client.agents.automations[':automation_id'].resume.$post(args, options))
    },
  })
}

export function usePostAgentsAutomationsAutomationIdResume<
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
                    (typeof client.agents.automations)[':automation_id']['resume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agents.automations)[':automation_id']['resume']['$post']>,
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
  const mutationDefaults = getPostAgentsAutomationsAutomationIdResumeMutationOptions<
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

export function getAgentsAutomationsAutomationIdInvocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.automations)[':automation_id']['invocations']['$get']>
  >,
) {
  return ['agents', '/agents/automations/:automation_id/invocations', toValue(args)] as const
}

export function getAgentsAutomationsAutomationIdInvocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.automations)[':automation_id']['invocations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsAutomationsAutomationIdInvocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.automations[':automation_id'].invocations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsAutomationsAutomationIdInvocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.agents.automations)[':automation_id']['invocations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.automations)[':automation_id']['invocations']['$get']>
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
                    (typeof client.agents.automations)[':automation_id']['invocations']['$get']
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
                    (typeof client.agents.automations)[':automation_id']['invocations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsAutomationsAutomationIdInvocationsQueryKey>
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
            ReturnType<(typeof client.agents.automations)[':automation_id']['invocations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsAutomationsAutomationIdInvocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsAutomationsAutomationIdInvocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.automations[':automation_id'].invocations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsAutomationsAutomationIdInvocationsMutationKey() {
  return ['agents', '/agents/automations/:automation_id/invocations', 'POST'] as const
}

export function getPostAgentsAutomationsAutomationIdInvocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.agents.automations)[':automation_id']['invocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsAutomationsAutomationIdInvocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.automations)[':automation_id']['invocations']['$post']
      >,
    ) {
      return parseResponse(
        client.agents.automations[':automation_id'].invocations.$post(args, options),
      )
    },
  })
}

export function usePostAgentsAutomationsAutomationIdInvocations<
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
                    (typeof client.agents.automations)[':automation_id']['invocations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.agents.automations)[':automation_id']['invocations']['$post']
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
  const mutationDefaults = getPostAgentsAutomationsAutomationIdInvocationsMutationOptions<
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

export function getAgentsAutomationsAutomationIdInvocationsInvocationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
    >
  >,
) {
  return [
    'agents',
    '/agents/automations/:automation_id/invocations/:invocation_id',
    toValue(args),
  ] as const
}

export function getAgentsAutomationsAutomationIdInvocationsInvocationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsAutomationsAutomationIdInvocationsInvocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.automations[':automation_id'].invocations[':invocation_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAgentsAutomationsAutomationIdInvocationsInvocationId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
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
                    (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
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
                    (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsAutomationsAutomationIdInvocationsInvocationIdQueryKey>
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
              (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsAutomationsAutomationIdInvocationsInvocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAgentsAutomationsAutomationIdInvocationsInvocationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.automations[':automation_id'].invocations[':invocation_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsEnvironmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.environments.$get>>,
) {
  return ['agents', '/agents/environments', toValue(args)] as const
}

export function getAgentsEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.environments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.environments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.environments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>
            >
          >,
          ReturnType<typeof getAgentsEnvironmentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.environments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsEnvironmentsMutationKey() {
  return ['agents', '/agents/environments', 'POST'] as const
}

export function getPostAgentsEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.agents.environments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsEnvironmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agents.environments.$post>) {
      return parseResponse(client.agents.environments.$post(args, options))
    },
  })
}

export function usePostAgentsEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.agents.environments.$post>,
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
  const mutationDefaults = getPostAgentsEnvironmentsMutationOptions<TError, TOnMutateResult>(
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

export function getAgentsEnvironmentsEnvironmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.environments)[':environment_id']['$get']>
  >,
) {
  return ['agents', '/agents/environments/:environment_id', toValue(args)] as const
}

export function getAgentsEnvironmentsEnvironmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.environments)[':environment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsEnvironmentsEnvironmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.environments[':environment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.environments)[':environment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentsEnvironmentsEnvironmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsEnvironmentsEnvironmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsEnvironmentsEnvironmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.environments[':environment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsEnvironmentsEnvironmentIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$get']>
  >,
) {
  return ['agents', '/agents/environments/:environment_id/files', toValue(args)] as const
}

export function getAgentsEnvironmentsEnvironmentIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsEnvironmentsEnvironmentIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.environments[':environment_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsEnvironmentsEnvironmentIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$get']>
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
                    (typeof client.agents.environments)[':environment_id']['files']['$get']
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
                    (typeof client.agents.environments)[':environment_id']['files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsEnvironmentsEnvironmentIdFilesQueryKey>
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
            ReturnType<(typeof client.agents.environments)[':environment_id']['files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsEnvironmentsEnvironmentIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsEnvironmentsEnvironmentIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.environments[':environment_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsEnvironmentsEnvironmentIdFilesMutationKey() {
  return ['agents', '/agents/environments/:environment_id/files', 'POST'] as const
}

export function getPostAgentsEnvironmentsEnvironmentIdFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsEnvironmentsEnvironmentIdFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.environments)[':environment_id']['files']['$post']
      >,
    ) {
      return parseResponse(client.agents.environments[':environment_id'].files.$post(args, options))
    },
  })
}

export function usePostAgentsEnvironmentsEnvironmentIdFiles<
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
                    (typeof client.agents.environments)[':environment_id']['files']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.agents.environments)[':environment_id']['files']['$post']
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
  const mutationDefaults = getPostAgentsEnvironmentsEnvironmentIdFilesMutationOptions<
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

export function getAgentsSessionsSessionIdSubagentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>
  >,
) {
  return ['agents', '/agents/sessions/:session_id/subagents', toValue(args)] as const
}

export function getAgentsSessionsSessionIdSubagentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdSubagentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdSubagents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>
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
                  ReturnType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdSubagentsQueryKey>
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
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdSubagentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdSubagentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].subagents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
    >
  >,
) {
  return ['agents', '/agents/sessions/:session_id/subagents/:subagent_id', toValue(args)] as const
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdSubagentsSubagentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents[':subagent_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdSubagentsSubagentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdSubagentsSubagentIdQueryKey>
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
              (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdSubagentsSubagentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdSubagentsSubagentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].subagents[':subagent_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
    >
  >,
) {
  return [
    'agents',
    '/agents/sessions/:session_id/subagents/:subagent_id/items',
    toValue(args),
  ] as const
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdSubagentsSubagentIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents[':subagent_id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdSubagentsSubagentIdItems<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdSubagentsSubagentIdItemsQueryKey>
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
              (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdSubagentsSubagentIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdSubagentsSubagentIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].subagents[':subagent_id'].items.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
    >
  >,
) {
  return [
    'agents',
    '/agents/sessions/:session_id/subagents/:subagent_id/turns',
    toValue(args),
  ] as const
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdSubagentsSubagentIdTurnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents[':subagent_id'].turns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdSubagentsSubagentIdTurns<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdSubagentsSubagentIdTurnsQueryKey>
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
              (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdSubagentsSubagentIdTurnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdSubagentsSubagentIdTurnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].subagents[':subagent_id'].turns.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
    >
  >,
) {
  return [
    'agents',
    '/agents/sessions/:session_id/subagents/:subagent_id/turns/:turn_id',
    toValue(args),
  ] as const
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[':turn_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdQueryKey>
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
              (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[':turn_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
    >
  >,
) {
  return [
    'agents',
    '/agents/sessions/:session_id/subagents/:subagent_id/turns/:turn_id/items',
    toValue(args),
  ] as const
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[
          ':turn_id'
        ].items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItems<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsQueryKey>
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
              (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[
            ':turn_id'
          ].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.$get>>,
) {
  return ['agents', '/agents', toValue(args)] as const
}

export function getAgentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAgents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
          ReturnType<typeof getAgentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAgentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsMutationKey() {
  return ['agents', '/agents', 'POST'] as const
}

export function getPostAgentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$post>>>>>,
    TError,
    InferRequestType<typeof client.agents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agents.$post>) {
      return parseResponse(client.agents.$post(args, options))
    },
  })
}

export function usePostAgents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.agents.$post>,
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
  const mutationDefaults = getPostAgentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAgentsAgentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents)[':agent_id']['$get']>>,
) {
  return ['agents', '/agents/:agent_id', toValue(args)] as const
}

export function getAgentsAgentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents)[':agent_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsAgentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents[':agent_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents)[':agent_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
            >
          >,
          ReturnType<typeof getAgentsAgentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsAgentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsAgentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents[':agent_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsAgentIdMutationKey() {
  return ['agents', '/agents/:agent_id', 'POST'] as const
}

export function getPostAgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.agents)[':agent_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.agents)[':agent_id']['$post']>) {
      return parseResponse(client.agents[':agent_id'].$post(args, options))
    },
  })
}

export function usePostAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents)[':agent_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agents)[':agent_id']['$post']>,
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
  const mutationDefaults = getPostAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAgentsAgentIdMutationKey() {
  return ['agents', '/agents/:agent_id', 'DELETE'] as const
}

export function getDeleteAgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.agents)[':agent_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentsAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.agents)[':agent_id']['$delete']>) {
      return parseResponse(client.agents[':agent_id'].$delete(args, options))
    },
  })
}

export function useDeleteAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents)[':agent_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agents)[':agent_id']['$delete']>,
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
  const mutationDefaults = getDeleteAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
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

export function getAgentsEnvironmentsTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.environments.templates.$get>>,
) {
  return ['agents', '/agents/environments/templates', toValue(args)] as const
}

export function getAgentsEnvironmentsTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.environments.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsEnvironmentsTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.environments.templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsEnvironmentsTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.environments.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.agents.environments.templates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.agents.environments.templates.$get>>
              >
            >
          >,
          ReturnType<typeof getAgentsEnvironmentsTemplatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsEnvironmentsTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsEnvironmentsTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.environments.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsEnvironmentsTemplatesMutationKey() {
  return ['agents', '/agents/environments/templates', 'POST'] as const
}

export function getPostAgentsEnvironmentsTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.templates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.agents.environments.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsEnvironmentsTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agents.environments.templates.$post>) {
      return parseResponse(client.agents.environments.templates.$post(args, options))
    },
  })
}

export function usePostAgentsEnvironmentsTemplates<
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
                Awaited<ReturnType<typeof client.agents.environments.templates.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.agents.environments.templates.$post>,
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
  const mutationDefaults = getPostAgentsEnvironmentsTemplatesMutationOptions<
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

export function getAgentsEnvironmentsTemplatesEnvironmentTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.environments.templates)[':environment_template_id']['$get']
    >
  >,
) {
  return [
    'agents',
    '/agents/environments/templates/:environment_template_id',
    toValue(args),
  ] as const
}

export function getAgentsEnvironmentsTemplatesEnvironmentTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.environments.templates)[':environment_template_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsEnvironmentsTemplatesEnvironmentTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.environments.templates[':environment_template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsEnvironmentsTemplatesEnvironmentTemplateId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.environments.templates)[':environment_template_id']['$get']
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
                    (typeof client.agents.environments.templates)[':environment_template_id']['$get']
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
                    (typeof client.agents.environments.templates)[':environment_template_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsEnvironmentsTemplatesEnvironmentTemplateIdQueryKey>
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
              (typeof client.agents.environments.templates)[':environment_template_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsEnvironmentsTemplatesEnvironmentTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsEnvironmentsTemplatesEnvironmentTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.environments.templates[':environment_template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsEnvironmentsTemplatesEnvironmentTemplateIdMutationKey() {
  return ['agents', '/agents/environments/templates/:environment_template_id', 'POST'] as const
}

export function getPostAgentsEnvironmentsTemplatesEnvironmentTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.agents.environments.templates)[':environment_template_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsEnvironmentsTemplatesEnvironmentTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.environments.templates)[':environment_template_id']['$post']
      >,
    ) {
      return parseResponse(
        client.agents.environments.templates[':environment_template_id'].$post(args, options),
      )
    },
  })
}

export function usePostAgentsEnvironmentsTemplatesEnvironmentTemplateId<
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
                    (typeof client.agents.environments.templates)[':environment_template_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.agents.environments.templates)[':environment_template_id']['$post']
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
  const mutationDefaults = getPostAgentsEnvironmentsTemplatesEnvironmentTemplateIdMutationOptions<
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

export function getDeleteAgentsEnvironmentsTemplatesEnvironmentTemplateIdMutationKey() {
  return ['agents', '/agents/environments/templates/:environment_template_id', 'DELETE'] as const
}

export function getDeleteAgentsEnvironmentsTemplatesEnvironmentTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.agents.environments.templates)[':environment_template_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentsEnvironmentsTemplatesEnvironmentTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.environments.templates)[':environment_template_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.agents.environments.templates[':environment_template_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAgentsEnvironmentsTemplatesEnvironmentTemplateId<
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
                    (typeof client.agents.environments.templates)[':environment_template_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.agents.environments.templates)[':environment_template_id']['$delete']
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
  const mutationDefaults = getDeleteAgentsEnvironmentsTemplatesEnvironmentTemplateIdMutationOptions<
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

export function getAgentsSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.sessions.$get>>,
) {
  return ['agents', '/agents/sessions', toValue(args)] as const
}

export function getAgentsSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.sessions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.sessions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>
            >
          >,
          ReturnType<typeof getAgentsSessionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsSessionsMutationKey() {
  return ['agents', '/agents/sessions', 'POST'] as const
}

export function getPostAgentsSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.agents.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agents.sessions.$post>) {
      return parseResponse(client.agents.sessions.$post(args, options))
    },
  })
}

export function usePostAgentsSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.agents.sessions.$post>,
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
  const mutationDefaults = getPostAgentsSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getAgentsSessionsSessionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents.sessions)[':session_id']['$get']>>,
) {
  return ['agents', '/agents/sessions/:session_id', toValue(args)] as const
}

export function getAgentsSessionsSessionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents.sessions)[':session_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents.sessions)[':session_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsSessionsSessionIdMutationKey() {
  return ['agents', '/agents/sessions/:session_id', 'POST'] as const
}

export function getPostAgentsSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agents.sessions)[':session_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.sessions)[':session_id']['$post']>,
    ) {
      return parseResponse(client.agents.sessions[':session_id'].$post(args, options))
    },
  })
}

export function usePostAgentsSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agents.sessions)[':session_id']['$post']>,
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
  const mutationDefaults = getPostAgentsSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAgentsSessionsSessionIdMutationKey() {
  return ['agents', '/agents/sessions/:session_id', 'DELETE'] as const
}

export function getDeleteAgentsSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agents.sessions)[':session_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentsSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.sessions)[':session_id']['$delete']>,
    ) {
      return parseResponse(client.agents.sessions[':session_id'].$delete(args, options))
    },
  })
}

export function useDeleteAgentsSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agents.sessions)[':session_id']['$delete']>,
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
  const mutationDefaults = getDeleteAgentsSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getAgentsSessionsSessionIdArtifactsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>
  >,
) {
  return ['agents', '/agents/sessions/:session_id/artifacts', toValue(args)] as const
}

export function getAgentsSessionsSessionIdArtifactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdArtifactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].artifacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdArtifacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>
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
                  ReturnType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdArtifactsQueryKey>
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
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdArtifactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdArtifactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].artifacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdArtifactsArtifactIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
    >
  >,
) {
  return ['agents', '/agents/sessions/:session_id/artifacts/:artifact_id', toValue(args)] as const
}

export function getAgentsSessionsSessionIdArtifactsArtifactIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdArtifactsArtifactIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].artifacts[':artifact_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdArtifactsArtifactId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdArtifactsArtifactIdQueryKey>
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
              (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdArtifactsArtifactIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdArtifactsArtifactIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].artifacts[':artifact_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAgentsSessionsSessionIdArtifactsArtifactIdMutationKey() {
  return ['agents', '/agents/sessions/:session_id/artifacts/:artifact_id', 'DELETE'] as const
}

export function getDeleteAgentsSessionsSessionIdArtifactsArtifactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentsSessionsSessionIdArtifactsArtifactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.agents.sessions[':session_id'].artifacts[':artifact_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAgentsSessionsSessionIdArtifactsArtifactId<
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
                    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$delete']
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
  const mutationDefaults = getDeleteAgentsSessionsSessionIdArtifactsArtifactIdMutationOptions<
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

export function getAgentsSessionsSessionIdArtifactsArtifactIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
    >
  >,
) {
  return [
    'agents',
    '/agents/sessions/:session_id/artifacts/:artifact_id/content',
    toValue(args),
  ] as const
}

export function getAgentsSessionsSessionIdArtifactsArtifactIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdArtifactsArtifactIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].artifacts[':artifact_id'].content.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAgentsSessionsSessionIdArtifactsArtifactIdContent<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdArtifactsArtifactIdContentQueryKey>
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
              (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdArtifactsArtifactIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdArtifactsArtifactIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].artifacts[':artifact_id'].content.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$get']>
  >,
) {
  return ['agents', '/agents/sessions/:session_id/events', toValue(args)] as const
}

export function getAgentsSessionsSessionIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$get']>
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
                  ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsSessionsSessionIdEventsMutationKey() {
  return ['agents', '/agents/sessions/:session_id/events', 'POST'] as const
}

export function getPostAgentsSessionsSessionIdEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsSessionsSessionIdEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$post']>,
    ) {
      return parseResponse(client.agents.sessions[':session_id'].events.$post(args, options))
    },
  })
}

export function usePostAgentsSessionsSessionIdEvents<
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
                  ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$post']>,
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
  const mutationDefaults = getPostAgentsSessionsSessionIdEventsMutationOptions<
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

export function getAgentsSessionsSessionIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['items']['$get']>
  >,
) {
  return ['agents', '/agents/sessions/:session_id/items', toValue(args)] as const
}

export function getAgentsSessionsSessionIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdTracesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>
  >,
) {
  return ['agents', '/agents/sessions/:session_id/traces', toValue(args)] as const
}

export function getAgentsSessionsSessionIdTracesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdTracesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].traces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdTraces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>
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
                  ReturnType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdTracesQueryKey>
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
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdTracesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdTracesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].traces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdTurnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>
  >,
) {
  return ['agents', '/agents/sessions/:session_id/turns', toValue(args)] as const
}

export function getAgentsSessionsSessionIdTurnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdTurnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].turns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdTurns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdTurnsQueryKey>
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
          Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdTurnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdTurnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].turns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdTurnsTurnIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']>
  >,
) {
  return ['agents', '/agents/sessions/:session_id/turns/:turn_id', toValue(args)] as const
}

export function getAgentsSessionsSessionIdTurnsTurnIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdTurnsTurnIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].turns[':turn_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdTurnsTurnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']>
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
                    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdTurnsTurnIdQueryKey>
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
            ReturnType<(typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdTurnsTurnIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdTurnsTurnIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].turns[':turn_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsSessionIdTurnsTurnIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
    >
  >,
) {
  return ['agents', '/agents/sessions/:session_id/turns/:turn_id/items', toValue(args)] as const
}

export function getAgentsSessionsSessionIdTurnsTurnIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsSessionIdTurnsTurnIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':session_id'].turns[':turn_id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessionsSessionIdTurnsTurnIdItems<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
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
                    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsSessionIdTurnsTurnIdItemsQueryKey>
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
              (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsSessionIdTurnsTurnIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsSessionIdTurnsTurnIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':session_id'].turns[':turn_id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vaults.$get>>,
) {
  return ['vaults', '/vaults', toValue(args)] as const
}

export function getVaultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vaults.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVaults<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vaults.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
          ReturnType<typeof getVaultsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVaultsMutationKey() {
  return ['vaults', '/vaults', 'POST'] as const
}

export function getPostVaultsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$post>>>>>,
    TError,
    InferRequestType<typeof client.vaults.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vaults.$post>) {
      return parseResponse(client.vaults.$post(args, options))
    },
  })
}

export function usePostVaults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.vaults.$post>,
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
  const mutationDefaults = getPostVaultsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVaultsVaultIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vault_id']['$get']>>,
) {
  return ['vaults', '/vaults/:vault_id', toValue(args)] as const
}

export function getVaultsVaultIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vault_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsVaultIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults[':vault_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultsVaultId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vault_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
            >
          >,
          ReturnType<typeof getVaultsVaultIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsVaultIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults[':vault_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVaultsVaultIdMutationKey() {
  return ['vaults', '/vaults/:vault_id', 'POST'] as const
}

export function getPostVaultsVaultIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.vaults)[':vault_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultsVaultIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vaults)[':vault_id']['$post']>) {
      return parseResponse(client.vaults[':vault_id'].$post(args, options))
    },
  })
}

export function usePostVaultsVaultId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vaults)[':vault_id']['$post']>,
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
  const mutationDefaults = getPostVaultsVaultIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVaultsVaultIdMutationKey() {
  return ['vaults', '/vaults/:vault_id', 'DELETE'] as const
}

export function getDeleteVaultsVaultIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.vaults)[':vault_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVaultsVaultIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vaults)[':vault_id']['$delete']>) {
      return parseResponse(client.vaults[':vault_id'].$delete(args, options))
    },
  })
}

export function useDeleteVaultsVaultId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vaults)[':vault_id']['$delete']>,
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
  const mutationDefaults = getDeleteVaultsVaultIdMutationOptions<TError, TOnMutateResult>(
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

export function getVaultsVaultIdCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$get']>
  >,
) {
  return ['vaults', '/vaults/:vault_id/credentials', toValue(args)] as const
}

export function getVaultsVaultIdCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsVaultIdCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults[':vault_id'].credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultsVaultIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVaultsVaultIdCredentialsQueryKey>
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
          Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultIdCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsVaultIdCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults[':vault_id'].credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVaultsVaultIdCredentialsMutationKey() {
  return ['vaults', '/vaults/:vault_id/credentials', 'POST'] as const
}

export function getPostVaultsVaultIdCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultsVaultIdCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$post']>,
    ) {
      return parseResponse(client.vaults[':vault_id'].credentials.$post(args, options))
    },
  })
}

export function usePostVaultsVaultIdCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$post']>,
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
  const mutationDefaults = getPostVaultsVaultIdCredentialsMutationOptions<TError, TOnMutateResult>(
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

export function getVaultsVaultIdCredentialsCredentialIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']>
  >,
) {
  return ['vaults', '/vaults/:vault_id/credentials/:credential_id', toValue(args)] as const
}

export function getVaultsVaultIdCredentialsCredentialIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsVaultIdCredentialsCredentialIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults[':vault_id'].credentials[':credential_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultsVaultIdCredentialsCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']>
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
                    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
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
                    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVaultsVaultIdCredentialsCredentialIdQueryKey>
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
            ReturnType<(typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultIdCredentialsCredentialIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsVaultIdCredentialsCredentialIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults[':vault_id'].credentials[':credential_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVaultsVaultIdCredentialsCredentialIdMutationKey() {
  return ['vaults', '/vaults/:vault_id/credentials/:credential_id', 'POST'] as const
}

export function getPostVaultsVaultIdCredentialsCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultsVaultIdCredentialsCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$post']
      >,
    ) {
      return parseResponse(
        client.vaults[':vault_id'].credentials[':credential_id'].$post(args, options),
      )
    },
  })
}

export function usePostVaultsVaultIdCredentialsCredentialId<
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
                    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$post']
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
  const mutationDefaults = getPostVaultsVaultIdCredentialsCredentialIdMutationOptions<
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

export function getDeleteVaultsVaultIdCredentialsCredentialIdMutationKey() {
  return ['vaults', '/vaults/:vault_id/credentials/:credential_id', 'DELETE'] as const
}

export function getDeleteVaultsVaultIdCredentialsCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVaultsVaultIdCredentialsCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.vaults[':vault_id'].credentials[':credential_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVaultsVaultIdCredentialsCredentialId<
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
                    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$delete']
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
  const mutationDefaults = getDeleteVaultsVaultIdCredentialsCredentialIdMutationOptions<
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

export function getWebhookEndpointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook_endpoints.$get>>,
) {
  return ['webhook_endpoints', '/webhook_endpoints', toValue(args)] as const
}

export function getWebhookEndpointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook_endpoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhookEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhook_endpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook_endpoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>
            >
          >,
          ReturnType<typeof getWebhookEndpointsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhookEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhook_endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhookEndpointsMutationKey() {
  return ['webhook_endpoints', '/webhook_endpoints', 'POST'] as const
}

export function getPostWebhookEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhook_endpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhook_endpoints.$post>) {
      return parseResponse(client.webhook_endpoints.$post(args, options))
    },
  })
}

export function usePostWebhookEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhook_endpoints.$post>,
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
  const mutationDefaults = getPostWebhookEndpointsMutationOptions<TError, TOnMutateResult>(
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

export function getWebhookEndpointsWebhookEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>
  >,
) {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook_endpoint_id', toValue(args)] as const
}

export function getWebhookEndpointsWebhookEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhookEndpointsWebhookEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhook_endpoints[':webhook_endpoint_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookEndpointsWebhookEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>
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
                  ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWebhookEndpointsWebhookEndpointIdQueryKey>
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
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEndpointsWebhookEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhookEndpointsWebhookEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhook_endpoints[':webhook_endpoint_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhookEndpointsWebhookEndpointIdMutationKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook_endpoint_id', 'POST'] as const
}

export function getPostWebhookEndpointsWebhookEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookEndpointsWebhookEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$post']>,
    ) {
      return parseResponse(client.webhook_endpoints[':webhook_endpoint_id'].$post(args, options))
    },
  })
}

export function usePostWebhookEndpointsWebhookEndpointId<
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
                  ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$post']>,
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
  const mutationDefaults = getPostWebhookEndpointsWebhookEndpointIdMutationOptions<
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

export function getDeleteWebhookEndpointsWebhookEndpointIdMutationKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook_endpoint_id', 'DELETE'] as const
}

export function getDeleteWebhookEndpointsWebhookEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhookEndpointsWebhookEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$delete']>,
    ) {
      return parseResponse(client.webhook_endpoints[':webhook_endpoint_id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhookEndpointsWebhookEndpointId<
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
                  ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$delete']>,
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
  const mutationDefaults = getDeleteWebhookEndpointsWebhookEndpointIdMutationOptions<
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

export function getPostWebhookEndpointsWebhookEndpointIdRotateSecretMutationKey() {
  return [
    'webhook_endpoints',
    '/webhook_endpoints/:webhook_endpoint_id/rotate_secret',
    'POST',
  ] as const
}

export function getPostWebhookEndpointsWebhookEndpointIdRotateSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.webhook_endpoints)[':webhook_endpoint_id']['rotate_secret']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookEndpointsWebhookEndpointIdRotateSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhook_endpoints)[':webhook_endpoint_id']['rotate_secret']['$post']
      >,
    ) {
      return parseResponse(
        client.webhook_endpoints[':webhook_endpoint_id'].rotate_secret.$post(args, options),
      )
    },
  })
}

export function usePostWebhookEndpointsWebhookEndpointIdRotateSecret<
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
                    (typeof client.webhook_endpoints)[':webhook_endpoint_id']['rotate_secret']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webhook_endpoints)[':webhook_endpoint_id']['rotate_secret']['$post']
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
  const mutationDefaults = getPostWebhookEndpointsWebhookEndpointIdRotateSecretMutationOptions<
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

export function getPostWebhookEndpointsWebhookEndpointIdTestMutationKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook_endpoint_id/test', 'POST'] as const
}

export function getPostWebhookEndpointsWebhookEndpointIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookEndpointsWebhookEndpointIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhook_endpoints)[':webhook_endpoint_id']['test']['$post']
      >,
    ) {
      return parseResponse(
        client.webhook_endpoints[':webhook_endpoint_id'].test.$post(args, options),
      )
    },
  })
}

export function usePostWebhookEndpointsWebhookEndpointIdTest<
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
                    (typeof client.webhook_endpoints)[':webhook_endpoint_id']['test']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webhook_endpoints)[':webhook_endpoint_id']['test']['$post']
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
  const mutationDefaults = getPostWebhookEndpointsWebhookEndpointIdTestMutationOptions<
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

export function getWebhookEventTypesQueryKey() {
  return ['webhook_event_types', '/webhook_event_types'] as const
}

export function getWebhookEventTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhookEventTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhook_event_types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookEventTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>
            >
          >,
          ReturnType<typeof getWebhookEventTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEventTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhookEventTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.webhook_event_types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostResponsesBetaTrueMutationKey() {
  return ['responses?beta=true', '/responses?beta=true', 'POST'] as const
}

export function getPostResponsesBetaTrueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['responses?beta=true']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['responses?beta=true']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResponsesBetaTrueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['responses?beta=true']['$post']>) {
      return parseResponse(client['responses?beta=true'].$post(args, options))
    },
  })
}

export function usePostResponsesBetaTrue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['responses?beta=true']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['responses?beta=true']['$post']>,
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
  const mutationDefaults = getPostResponsesBetaTrueMutationOptions<TError, TOnMutateResult>(
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

export function getResponsesResponseIdBetaTrueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.responses)[':response_id?beta=true']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['responses', '/responses/:response_id?beta=true', keyArgs] as const
}

export function getResponsesResponseIdBetaTrueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.responses)[':response_id?beta=true']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResponsesResponseIdBetaTrueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.responses[':response_id?beta=true'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResponsesResponseIdBetaTrue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.responses)[':response_id?beta=true']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResponsesResponseIdBetaTrueQueryKey>
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
          Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResponsesResponseIdBetaTrueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResponsesResponseIdBetaTrueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.responses[':response_id?beta=true'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteResponsesResponseIdBetaTrueMutationKey() {
  return ['responses', '/responses/:response_id?beta=true', 'DELETE'] as const
}

export function getDeleteResponsesResponseIdBetaTrueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.responses)[':response_id?beta=true']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteResponsesResponseIdBetaTrueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.responses)[':response_id?beta=true']['$delete']>,
    ) {
      return parseResponse(client.responses[':response_id?beta=true'].$delete(args, options))
    },
  })
}

export function useDeleteResponsesResponseIdBetaTrue<
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
                Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.responses)[':response_id?beta=true']['$delete']>,
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
  const mutationDefaults = getDeleteResponsesResponseIdBetaTrueMutationOptions<
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

export function getPostResponsesResponseIdCancelBetaTrueMutationKey() {
  return ['responses', '/responses/:response_id/cancel?beta=true', 'POST'] as const
}

export function getPostResponsesResponseIdCancelBetaTrueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.responses)[':response_id']['cancel?beta=true']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResponsesResponseIdCancelBetaTrueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.responses)[':response_id']['cancel?beta=true']['$post']
      >,
    ) {
      return parseResponse(
        client.responses[':response_id']['cancel?beta=true'].$post(args, options),
      )
    },
  })
}

export function usePostResponsesResponseIdCancelBetaTrue<
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
                  ReturnType<(typeof client.responses)[':response_id']['cancel?beta=true']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.responses)[':response_id']['cancel?beta=true']['$post']>,
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
  const mutationDefaults = getPostResponsesResponseIdCancelBetaTrueMutationOptions<
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

export function getPostResponsesCompactBetaTrueMutationKey() {
  return ['responses', '/responses/compact?beta=true', 'POST'] as const
}

export function getPostResponsesCompactBetaTrueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.responses)['compact?beta=true']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.responses)['compact?beta=true']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResponsesCompactBetaTrueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.responses)['compact?beta=true']['$post']>,
    ) {
      return parseResponse(client.responses['compact?beta=true'].$post(args, options))
    },
  })
}

export function usePostResponsesCompactBetaTrue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.responses)['compact?beta=true']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.responses)['compact?beta=true']['$post']>,
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
  const mutationDefaults = getPostResponsesCompactBetaTrueMutationOptions<TError, TOnMutateResult>(
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

export function getResponsesResponseIdInputItemsBetaTrueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.responses)[':response_id']['input_items?beta=true']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['responses', '/responses/:response_id/input_items?beta=true', keyArgs] as const
}

export function getResponsesResponseIdInputItemsBetaTrueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.responses)[':response_id']['input_items?beta=true']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResponsesResponseIdInputItemsBetaTrueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.responses[':response_id']['input_items?beta=true'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResponsesResponseIdInputItemsBetaTrue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.responses)[':response_id']['input_items?beta=true']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.responses)[':response_id']['input_items?beta=true']['$get']>
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
                    (typeof client.responses)[':response_id']['input_items?beta=true']['$get']
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
                    (typeof client.responses)[':response_id']['input_items?beta=true']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getResponsesResponseIdInputItemsBetaTrueQueryKey>
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
            ReturnType<(typeof client.responses)[':response_id']['input_items?beta=true']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResponsesResponseIdInputItemsBetaTrueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResponsesResponseIdInputItemsBetaTrueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.responses[':response_id']['input_items?beta=true'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostResponsesInputTokensBetaTrueMutationKey() {
  return ['responses', '/responses/input_tokens?beta=true', 'POST'] as const
}

export function getPostResponsesInputTokensBetaTrueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.responses)['input_tokens?beta=true']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.responses)['input_tokens?beta=true']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResponsesInputTokensBetaTrueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.responses)['input_tokens?beta=true']['$post']>,
    ) {
      return parseResponse(client.responses['input_tokens?beta=true'].$post(args, options))
    },
  })
}

export function usePostResponsesInputTokensBetaTrue<
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
                Awaited<ReturnType<(typeof client.responses)['input_tokens?beta=true']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.responses)['input_tokens?beta=true']['$post']>,
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
  const mutationDefaults = getPostResponsesInputTokensBetaTrueMutationOptions<
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
