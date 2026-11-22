import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAssistantsQueryKey(args: InferRequestType<typeof client.assistants.$get>) {
  return ['assistants', '/assistants', args] as const
}

export function getAssistantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.assistants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssistantsQueryKey>
  >({
    queryKey: getAssistantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assistants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAssistants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.assistants.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAssistantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssistantsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAssistants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistants.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.assistants.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssistantsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAssistantsAssistantIdQueryKey(
  args: InferRequestType<(typeof client.assistants)[':assistant_id']['$get']>,
) {
  return ['assistants', '/assistants/:assistant_id', args] as const
}

export function getAssistantsAssistantIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assistants)[':assistant_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAssistantsAssistantIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assistants[':assistant_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAssistantsAssistantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assistants)[':assistant_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assistants)[':assistant_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAssistantsAssistantIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAssistantsAssistantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssistantsAssistantIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAssistantsAssistantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAssistantsAssistantIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAudioSpeech<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.speech.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.audio.speech.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAudioSpeechMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAudioTranscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.audio.transcriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.audio.transcriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAudioTranscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAudioTranslations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.audio.translations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.audio.translations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAudioTranslationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAudioVoiceConsentsQueryKey(
  args: InferRequestType<typeof client.audio.voice_consents.$get>,
) {
  return ['audio', '/audio/voice_consents', args] as const
}

export function getAudioVoiceConsentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.audio.voice_consents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAudioVoiceConsentsQueryKey>
  >({
    queryKey: getAudioVoiceConsentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audio.voice_consents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAudioVoiceConsents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.audio.voice_consents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudioVoiceConsentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudioVoiceConsentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAudioVoiceConsents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.audio.voice_consents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.audio.voice_consents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAudioVoiceConsentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAudioVoiceConsentsConsentIdQueryKey(
  args: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$get']>,
) {
  return ['audio', '/audio/voice_consents/:consent_id', args] as const
}

export function getAudioVoiceConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAudioVoiceConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audio.voice_consents[':consent_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAudioVoiceConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audio.voice_consents)[':consent_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAudioVoiceConsentsConsentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAudioVoiceConsentsConsentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAudioVoiceConsentsConsentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAudioVoiceConsentsConsentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAudioVoiceConsentsConsentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAudioVoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.voices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.audio.voices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAudioVoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAudioVoicesVoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAudioVoicesVoiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBatchesQueryKey(args: InferRequestType<typeof client.batches.$get>) {
  return ['batches', '/batches', args] as const
}

export function getBatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.batches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBatchesQueryKey>
  >({
    queryKey: getBatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.batches.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBatchesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$post>>>>>,
        TError,
        InferRequestType<typeof client.batches.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBatchesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBatchesBatchIdQueryKey(
  args: InferRequestType<(typeof client.batches)[':batch_id']['$get']>,
) {
  return ['batches', '/batches/:batch_id', args] as const
}

export function getBatchesBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batches)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchesBatchIdQueryKey>
  >({
    queryKey: getBatchesBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batches[':batch_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBatchesBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.batches)[':batch_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batch_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchesBatchIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBatchesBatchIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBatchesBatchIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBatchesBatchIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChatCompletionsQueryKey(
  args: InferRequestType<typeof client.chat.completions.$get>,
) {
  return ['chat', '/chat/completions', args] as const
}

export function getChatCompletionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.completions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatCompletionsQueryKey>
  >({
    queryKey: getChatCompletionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.completions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChatCompletions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.completions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatCompletionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatCompletionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostChatCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.chat.completions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.chat.completions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatCompletionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChatCompletionsCompletionIdQueryKey(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['$get']>,
) {
  return ['chat', '/chat/completions/:completion_id', args] as const
}

export function getChatCompletionsCompletionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChatCompletionsCompletionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.completions[':completion_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChatCompletionsCompletionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.chat.completions)[':completion_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChatCompletionsCompletionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostChatCompletionsCompletionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatCompletionsCompletionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteChatCompletionsCompletionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChatCompletionsCompletionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChatCompletionsCompletionIdMessagesQueryKey(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>,
) {
  return ['chat', '/chat/completions/:completion_id/messages', args] as const
}

export function getChatCompletionsCompletionIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChatCompletionsCompletionIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.completions[':completion_id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChatCompletionsCompletionIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.chat.completions)[':completion_id']['messages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChatCompletionsCompletionIdMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.completions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.completions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompletionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContainersQueryKey(args: InferRequestType<typeof client.containers.$get>) {
  return ['containers', '/containers', args] as const
}

export function getContainersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.containers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContainersQueryKey>
  >({
    queryKey: getContainersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.containers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContainers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.containers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContainersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContainersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostContainers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.containers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.containers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContainersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContainersContainerIdQueryKey(
  args: InferRequestType<(typeof client.containers)[':container_id']['$get']>,
) {
  return ['containers', '/containers/:container_id', args] as const
}

export function getContainersContainerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.containers)[':container_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.containers)[':container_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContainersContainerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.containers[':container_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContainersContainerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.containers)[':container_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.containers)[':container_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContainersContainerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteContainersContainerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContainersContainerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContainersContainerIdFilesQueryKey(
  args: InferRequestType<(typeof client.containers)[':container_id']['files']['$get']>,
) {
  return ['containers', '/containers/:container_id/files', args] as const
}

export function getContainersContainerIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.containers)[':container_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContainersContainerIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.containers[':container_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContainersContainerIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.containers)[':container_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.containers)[':container_id']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContainersContainerIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostContainersContainerIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContainersContainerIdFilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContainersContainerIdFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>,
) {
  return ['containers', '/containers/:container_id/files/:file_id', args] as const
}

export function getContainersContainerIdFilesFileIdQueryOptions<
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
  args: InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContainersContainerIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.containers[':container_id'].files[':file_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContainersContainerIdFilesFileId<
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
  args: () => InferRequestType<
    (typeof client.containers)[':container_id']['files'][':file_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContainersContainerIdFilesFileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteContainersContainerIdFilesFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContainersContainerIdFilesFileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContainersContainerIdFilesFileIdContentQueryKey(
  args: InferRequestType<
    (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
  >,
) {
  return ['containers', '/containers/:container_id/files/:file_id/content', args] as const
}

export function getContainersContainerIdFilesFileIdContentQueryOptions<
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
  args: InferRequestType<
    (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContainersContainerIdFilesFileIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.containers[':container_id'].files[':file_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContainersContainerIdFilesFileIdContent<
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
  args: () => InferRequestType<
    (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContainersContainerIdFilesFileIdContentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getConversationsConversationIdItemsQueryKey(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$get']>,
) {
  return ['conversations', '/conversations/:conversation_id/items', args] as const
}

export function getConversationsConversationIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsConversationIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':conversation_id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConversationsConversationIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getConversationsConversationIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsConversationIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostConversationsConversationIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsConversationIdItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConversationsConversationIdItemsItemIdQueryKey(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
  >,
) {
  return ['conversations', '/conversations/:conversation_id/items/:item_id', args] as const
}

export function getConversationsConversationIdItemsItemIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsConversationIdItemsItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':conversation_id'].items[':item_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConversationsConversationIdItemsItemId<
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
  args: () => InferRequestType<
    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsConversationIdItemsItemIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteConversationsConversationIdItemsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConversationsConversationIdItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEmbeddings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.embeddings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.embeddings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmbeddingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEvalsQueryKey(args: InferRequestType<typeof client.evals.$get>) {
  return ['evals', '/evals', args] as const
}

export function getEvalsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.evals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEvalsQueryKey>
  >({
    queryKey: getEvalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEvals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.evals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEvalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEvals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evals.$post>>>>>,
        TError,
        InferRequestType<typeof client.evals.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEvalsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEvalsEvalIdQueryKey(
  args: InferRequestType<(typeof client.evals)[':eval_id']['$get']>,
) {
  return ['evals', '/evals/:eval_id', args] as const
}

export function getEvalsEvalIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evals)[':eval_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalsEvalIdQueryKey>
  >({
    queryKey: getEvalsEvalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evals[':eval_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEvalsEvalId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.evals)[':eval_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvalsEvalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalsEvalIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEvalsEvalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.evals)[':eval_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEvalsEvalIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEvalsEvalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.evals)[':eval_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEvalsEvalIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEvalsEvalIdRunsQueryKey(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs']['$get']>,
) {
  return ['evals', '/evals/:eval_id/runs', args] as const
}

export function getEvalsEvalIdRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalsEvalIdRunsQueryKey>
  >({
    queryKey: getEvalsEvalIdRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evals[':eval_id'].runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEvalsEvalIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.evals)[':eval_id']['runs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvalsEvalIdRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalsEvalIdRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEvalsEvalIdRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEvalsEvalIdRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEvalsEvalIdRunsRunIdQueryKey(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>,
) {
  return ['evals', '/evals/:eval_id/runs/:run_id', args] as const
}

export function getEvalsEvalIdRunsRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEvalsEvalIdRunsRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evals[':eval_id'].runs[':run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEvalsEvalIdRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEvalsEvalIdRunsRunIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteEvalsEvalIdRunsRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEvalsEvalIdRunsRunIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEvalsEvalIdRunsRunIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEvalsEvalIdRunsRunIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEvalsEvalIdRunsRunIdOutputItemsQueryKey(
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
  >,
) {
  return ['evals', '/evals/:eval_id/runs/:run_id/output_items', args] as const
}

export function getEvalsEvalIdRunsRunIdOutputItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEvalsEvalIdRunsRunIdOutputItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evals[':eval_id'].runs[':run_id'].output_items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEvalsEvalIdRunsRunIdOutputItems<
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
  args: () => InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEvalsEvalIdRunsRunIdOutputItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEvalsEvalIdRunsRunIdOutputItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdQueryKey(
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
  >,
) {
  return ['evals', '/evals/:eval_id/runs/:run_id/output_items/:output_item_id', args] as const
}

export function getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evals[':eval_id'].runs[':run_id'].output_items[':output_item_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEvalsEvalIdRunsRunIdOutputItemsOutputItemId<
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
  args: () => InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getFilesQueryKey(args: InferRequestType<typeof client.files.$get>) {
  return ['files', '/files', args] as const
}

export function getFilesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >({
    queryKey: getFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.files.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
        TError,
        InferRequestType<typeof client.files.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
) {
  return ['files', '/files/:file_id', args] as const
}

export function getFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >({
    queryKey: getFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFilesFileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFilesFileIdContentQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
) {
  return ['files', '/files/:file_id/content', args] as const
}

export function getFilesFileIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFilesFileIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesFileIdContentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostFineTuningAlphaGradersRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFineTuningAlphaGradersRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFineTuningAlphaGradersValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFineTuningAlphaGradersValidateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFineTuningCheckpointsFineTunedModelCheckpointPermissionsQueryKey(
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

export function getFineTuningCheckpointsFineTunedModelCheckpointPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFineTuningCheckpointsFineTunedModelCheckpointPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFineTuningCheckpointsFineTunedModelCheckpointPermissions<
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
  args: () => InferRequestType<
    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFineTuningCheckpointsFineTunedModelCheckpointPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostFineTuningCheckpointsFineTunedModelCheckpointPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostFineTuningCheckpointsFineTunedModelCheckpointPermissionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFineTuningJobsQueryKey(
  args: InferRequestType<typeof client.fine_tuning.jobs.$get>,
) {
  return ['fine_tuning', '/fine_tuning/jobs', args] as const
}

export function getFineTuningJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fine_tuning.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFineTuningJobsQueryKey>
  >({
    queryKey: getFineTuningJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fine_tuning.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFineTuningJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fine_tuning.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFineTuningJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFineTuningJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostFineTuningJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fine_tuning.jobs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fine_tuning.jobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFineTuningJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFineTuningJobsFineTuningJobIdQueryKey(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>,
) {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id', args] as const
}

export function getFineTuningJobsFineTuningJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFineTuningJobsFineTuningJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fine_tuning.jobs[':fine_tuning_job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFineTuningJobsFineTuningJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFineTuningJobsFineTuningJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostFineTuningJobsFineTuningJobIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFineTuningJobsFineTuningJobIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFineTuningJobsFineTuningJobIdCheckpointsQueryKey(
  args: InferRequestType<
    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
  >,
) {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/checkpoints', args] as const
}

export function getFineTuningJobsFineTuningJobIdCheckpointsQueryOptions<
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
  args: InferRequestType<
    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFineTuningJobsFineTuningJobIdCheckpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fine_tuning.jobs[':fine_tuning_job_id'].checkpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFineTuningJobsFineTuningJobIdCheckpoints<
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
  args: () => InferRequestType<
    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFineTuningJobsFineTuningJobIdCheckpointsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getFineTuningJobsFineTuningJobIdEventsQueryKey(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>,
) {
  return ['fine_tuning', '/fine_tuning/jobs/:fine_tuning_job_id/events', args] as const
}

export function getFineTuningJobsFineTuningJobIdEventsQueryOptions<
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
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFineTuningJobsFineTuningJobIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fine_tuning.jobs[':fine_tuning_job_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFineTuningJobsFineTuningJobIdEvents<
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
  args: () => InferRequestType<
    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFineTuningJobsFineTuningJobIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFineTuningJobsFineTuningJobIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostFineTuningJobsFineTuningJobIdPause<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFineTuningJobsFineTuningJobIdPauseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFineTuningJobsFineTuningJobIdResume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFineTuningJobsFineTuningJobIdResumeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostImagesEdits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.edits.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.images.edits.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostImagesEditsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostImagesGenerations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.images.generations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.images.generations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostImagesGenerationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostImagesVariations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.images.variations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.images.variations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostImagesVariationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLiveSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.sessions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.live.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLiveSessionsSessionIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveSessionsSessionIdAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLiveSessionsSessionIdFork<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveSessionsSessionIdForkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLiveSessionsSessionIdHangup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveSessionsSessionIdHangupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLiveSessionsSessionIdRefer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveSessionsSessionIdReferMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLiveSessionsSessionIdReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveSessionsSessionIdRejectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getModelsQueryKey() {
  return ['models', '/models'] as const
}

export function getModelsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModelsQueryKey>
  >({
    queryKey: getModelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.models.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectModels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModelsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getModelsModelQueryKey(
  args: InferRequestType<(typeof client.models)[':model']['$get']>,
) {
  return ['models', '/models/:model', args] as const
}

export function getModelsModelQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.models)[':model']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelQueryKey>
  >({
    queryKey: getModelsModelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models[':model'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectModelsModel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.models)[':model']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModelsModelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModelsModelQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteModelsModel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':model']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.models)[':model']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteModelsModelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostModerations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.moderations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostModerationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationAdminApiKeysQueryKey(
  args: InferRequestType<typeof client.organization.admin_api_keys.$get>,
) {
  return ['organization', '/organization/admin_api_keys', args] as const
}

export function getOrganizationAdminApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.admin_api_keys.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationAdminApiKeysQueryKey>
  >({
    queryKey: getOrganizationAdminApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.admin_api_keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationAdminApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.admin_api_keys.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organization.admin_api_keys.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationAdminApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationAdminApiKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationAdminApiKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationAdminApiKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationAdminApiKeysKeyIdQueryKey(
  args: InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>,
) {
  return ['organization', '/organization/admin_api_keys/:key_id', args] as const
}

export function getOrganizationAdminApiKeysKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationAdminApiKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.admin_api_keys[':key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationAdminApiKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationAdminApiKeysKeyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationAdminApiKeysKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationAdminApiKeysKeyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationAuditLogsQueryKey(
  args: InferRequestType<typeof client.organization.audit_logs.$get>,
) {
  return ['organization', '/organization/audit_logs', args] as const
}

export function getOrganizationAuditLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.audit_logs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationAuditLogsQueryKey>
  >({
    queryKey: getOrganizationAuditLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.audit_logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.audit_logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.audit_logs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationAuditLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationAuditLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationCertificatesQueryKey(
  args: InferRequestType<typeof client.organization.certificates.$get>,
) {
  return ['organization', '/organization/certificates', args] as const
}

export function getOrganizationCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationCertificatesQueryKey>
  >({
    queryKey: getOrganizationCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.certificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.certificates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationCertificatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationCertificates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.certificates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.certificates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationCertificatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationCertificatesActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationCertificatesActivateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationCertificatesDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationCertificatesDeactivateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationCertificatesCertificateIdQueryKey(
  args: InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$get']>,
) {
  return ['organization', '/organization/certificates/:certificate_id', args] as const
}

export function getOrganizationCertificatesCertificateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.certificates)[':certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationCertificatesCertificateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.certificates[':certificate_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationCertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.certificates)[':certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organization.certificates)[':certificate_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationCertificatesCertificateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationCertificatesCertificateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationCertificatesCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationCertificatesCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationCertificatesCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationCertificatesCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationCostsQueryKey(
  args: InferRequestType<typeof client.organization.costs.$get>,
) {
  return ['organization', '/organization/costs', args] as const
}

export function getOrganizationCostsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organization.costs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationCostsQueryKey>
  >({
    queryKey: getOrganizationCostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.costs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganizationCosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.costs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.costs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationCostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationCostsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOrganizationDataRetentionQueryKey() {
  return ['organization', '/organization/data_retention'] as const
}

export function getOrganizationDataRetentionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationDataRetentionQueryKey>
  >({
    queryKey: getOrganizationDataRetentionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.data_retention.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationDataRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.data_retention.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organization.data_retention.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationDataRetentionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationDataRetentionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostOrganizationDataRetention<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationDataRetentionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationGroupsQueryKey(
  args: InferRequestType<typeof client.organization.groups.$get>,
) {
  return ['organization', '/organization/groups', args] as const
}

export function getOrganizationGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organization.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationGroupsQueryKey>
  >({
    queryKey: getOrganizationGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganizationGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostOrganizationGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.groups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['$get']>,
) {
  return ['organization', '/organization/groups/:group_id', args] as const
}

export function getOrganizationGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.groups[':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.groups)[':group_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationGroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationGroupsGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationGroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationGroupsGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationGroupsGroupIdRolesQueryKey(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$get']>,
) {
  return ['organization', '/organization/groups/:group_id/roles', args] as const
}

export function getOrganizationGroupsGroupIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationGroupsGroupIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.groups[':group_id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationGroupsGroupIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationGroupsGroupIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationGroupsGroupIdRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationGroupsGroupIdRolesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationGroupsGroupIdRolesRoleIdQueryKey(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
  >,
) {
  return ['organization', '/organization/groups/:group_id/roles/:role_id', args] as const
}

export function getOrganizationGroupsGroupIdRolesRoleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationGroupsGroupIdRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.groups[':group_id'].roles[':role_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationGroupsGroupIdRolesRoleId<
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
  args: () => InferRequestType<
    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationGroupsGroupIdRolesRoleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationGroupsGroupIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationGroupsGroupIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationGroupsGroupIdUsersQueryKey(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$get']>,
) {
  return ['organization', '/organization/groups/:group_id/users', args] as const
}

export function getOrganizationGroupsGroupIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationGroupsGroupIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.groups[':group_id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationGroupsGroupIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.groups)[':group_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationGroupsGroupIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationGroupsGroupIdUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationGroupsGroupIdUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationGroupsGroupIdUsersUserIdQueryKey(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
  >,
) {
  return ['organization', '/organization/groups/:group_id/users/:user_id', args] as const
}

export function getOrganizationGroupsGroupIdUsersUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationGroupsGroupIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.groups[':group_id'].users[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationGroupsGroupIdUsersUserId<
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
  args: () => InferRequestType<
    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationGroupsGroupIdUsersUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationGroupsGroupIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationGroupsGroupIdUsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationInvitesQueryKey(
  args: InferRequestType<typeof client.organization.invites.$get>,
) {
  return ['organization', '/organization/invites', args] as const
}

export function getOrganizationInvitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organization.invites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationInvitesQueryKey>
  >({
    queryKey: getOrganizationInvitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.invites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganizationInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.invites.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationInvitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationInvitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostOrganizationInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.invites.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.invites.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationInvitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationInvitesInviteIdQueryKey(
  args: InferRequestType<(typeof client.organization.invites)[':invite_id']['$get']>,
) {
  return ['organization', '/organization/invites/:invite_id', args] as const
}

export function getOrganizationInvitesInviteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.invites)[':invite_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationInvitesInviteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.invites[':invite_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationInvitesInviteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.invites)[':invite_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.invites)[':invite_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationInvitesInviteIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationInvitesInviteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationInvitesInviteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsQueryKey(
  args: InferRequestType<typeof client.organization.projects.$get>,
) {
  return ['organization', '/organization/projects', args] as const
}

export function getOrganizationProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.projects.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationProjectsQueryKey>
  >({
    queryKey: getOrganizationProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganizationProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.projects.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['$get']>,
) {
  return ['organization', '/organization/projects/:project_id', args] as const
}

export function getOrganizationProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.projects)[':project_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdApiKeysQueryKey(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>,
) {
  return ['organization', '/organization/projects/:project_id/api_keys', args] as const
}

export function getOrganizationProjectsProjectIdApiKeysQueryOptions<
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
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].api_keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdApiKeys<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['api_keys']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdApiKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdApiKeysApiKeyIdQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/api_keys/:api_key_id', args] as const
}

export function getOrganizationProjectsProjectIdApiKeysApiKeyIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdApiKeysApiKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].api_keys[':api_key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdApiKeysApiKeyId<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdApiKeysApiKeyIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdApiKeysApiKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdApiKeysApiKeyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationProjectsProjectIdApiKeysApiKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationProjectsProjectIdApiKeysApiKeyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdArchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdCertificatesQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['certificates']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/certificates', args] as const
}

export function getOrganizationProjectsProjectIdCertificatesQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['certificates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].certificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdCertificates<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['certificates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationProjectsProjectIdCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdCertificatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdCertificatesActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationProjectsProjectIdCertificatesActivateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdCertificatesDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationProjectsProjectIdCertificatesDeactivateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdDataRetentionQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['data_retention']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/data_retention', args] as const
}

export function getOrganizationProjectsProjectIdDataRetentionQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['data_retention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdDataRetentionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].data_retention.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdDataRetention<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['data_retention']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdDataRetentionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdDataRetention<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdDataRetentionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdGroupsQueryKey(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$get']>,
) {
  return ['organization', '/organization/projects/:project_id/groups', args] as const
}

export function getOrganizationProjectsProjectIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdGroupsGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/groups/:group_id', args] as const
}

export function getOrganizationProjectsProjectIdGroupsGroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].groups[':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdGroupsGroupId<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdGroupsGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationProjectsProjectIdGroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationProjectsProjectIdGroupsGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdHostedToolPermissionsQueryKey(
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

export function getOrganizationProjectsProjectIdHostedToolPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdHostedToolPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].hosted_tool_permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdHostedToolPermissions<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdHostedToolPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdHostedToolPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationProjectsProjectIdHostedToolPermissionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdModelPermissionsQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/model_permissions', args] as const
}

export function getOrganizationProjectsProjectIdModelPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdModelPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].model_permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdModelPermissions<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdModelPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdModelPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdModelPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationProjectsProjectIdModelPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationProjectsProjectIdModelPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdRateLimitsQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/rate_limits', args] as const
}

export function getOrganizationProjectsProjectIdRateLimitsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdRateLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].rate_limits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdRateLimits<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationProjectsProjectIdRateLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdRateLimitsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdRateLimitsRateLimitId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationProjectsProjectIdRateLimitsRateLimitIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdServiceAccountsQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/service_accounts', args] as const
}

export function getOrganizationProjectsProjectIdServiceAccountsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdServiceAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].service_accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdServiceAccounts<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdServiceAccountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdServiceAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdServiceAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdQueryKey(
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

export function getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].service_accounts[':service_account_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdServiceAccountsServiceAccountId<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdServiceAccountsServiceAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationProjectsProjectIdServiceAccountsServiceAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdSpendAlertsQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/spend_alerts', args] as const
}

export function getOrganizationProjectsProjectIdSpendAlertsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdSpendAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdSpendAlerts<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationProjectsProjectIdSpendAlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdSpendAlertsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdSpendAlerts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdSpendAlertsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdSpendAlertsAlertIdQueryKey(
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

export function getOrganizationProjectsProjectIdSpendAlertsAlertIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdSpendAlertsAlertIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_alerts[':alert_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdSpendAlertsAlertId<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdSpendAlertsAlertIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdSpendAlertsAlertId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdSpendAlertsAlertIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationProjectsProjectIdSpendAlertsAlertId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationProjectsProjectIdSpendAlertsAlertIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdUsersQueryKey(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$get']>,
) {
  return ['organization', '/organization/projects/:project_id/users', args] as const
}

export function getOrganizationProjectsProjectIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.projects)[':project_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationProjectsProjectIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdUsersUserIdQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/users/:user_id', args] as const
}

export function getOrganizationProjectsProjectIdUsersUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].users[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdUsersUserId<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdUsersUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdUsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationProjectsProjectIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationProjectsProjectIdUsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationRolesQueryKey(
  args: InferRequestType<typeof client.organization.roles.$get>,
) {
  return ['organization', '/organization/roles', args] as const
}

export function getOrganizationRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organization.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationRolesQueryKey>
  >({
    queryKey: getOrganizationRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganizationRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.roles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostOrganizationRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.roles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.roles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationRolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationRolesRoleIdQueryKey(
  args: InferRequestType<(typeof client.organization.roles)[':role_id']['$get']>,
) {
  return ['organization', '/organization/roles/:role_id', args] as const
}

export function getOrganizationRolesRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.roles)[':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.roles[':role_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.roles)[':role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.roles)[':role_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationRolesRoleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationRolesRoleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationSpendAlertsQueryKey(
  args: InferRequestType<typeof client.organization.spend_alerts.$get>,
) {
  return ['organization', '/organization/spend_alerts', args] as const
}

export function getOrganizationSpendAlertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.spend_alerts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationSpendAlertsQueryKey>
  >({
    queryKey: getOrganizationSpendAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.spend_alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationSpendAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.spend_alerts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationSpendAlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationSpendAlertsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationSpendAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_alerts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.spend_alerts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationSpendAlertsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationSpendAlertsAlertIdQueryKey(
  args: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>,
) {
  return ['organization', '/organization/spend_alerts/:alert_id', args] as const
}

export function getOrganizationSpendAlertsAlertIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationSpendAlertsAlertIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.spend_alerts[':alert_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationSpendAlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationSpendAlertsAlertIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationSpendAlertsAlertId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationSpendAlertsAlertIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationSpendAlertsAlertId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationSpendAlertsAlertIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationUsageAudioSpeechesQueryKey(
  args: InferRequestType<typeof client.organization.usage.audio_speeches.$get>,
) {
  return ['organization', '/organization/usage/audio_speeches', args] as const
}

export function getOrganizationUsageAudioSpeechesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.audio_speeches.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.audio_speeches.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationUsageAudioSpeechesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.audio_speeches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageAudioSpeeches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.audio_speeches.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.audio_speeches.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageAudioSpeechesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationUsageAudioTranscriptionsQueryKey(
  args: InferRequestType<typeof client.organization.usage.audio_transcriptions.$get>,
) {
  return ['organization', '/organization/usage/audio_transcriptions', args] as const
}

export function getOrganizationUsageAudioTranscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.audio_transcriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.audio_transcriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationUsageAudioTranscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.audio_transcriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageAudioTranscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.audio_transcriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.audio_transcriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageAudioTranscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationUsageCodeInterpreterSessionsQueryKey(
  args: InferRequestType<typeof client.organization.usage.code_interpreter_sessions.$get>,
) {
  return ['organization', '/organization/usage/code_interpreter_sessions', args] as const
}

export function getOrganizationUsageCodeInterpreterSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.code_interpreter_sessions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.code_interpreter_sessions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationUsageCodeInterpreterSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.code_interpreter_sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageCodeInterpreterSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.code_interpreter_sessions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.code_interpreter_sessions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageCodeInterpreterSessionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationUsageCompletionsQueryKey(
  args: InferRequestType<typeof client.organization.usage.completions.$get>,
) {
  return ['organization', '/organization/usage/completions', args] as const
}

export function getOrganizationUsageCompletionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.completions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.completions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.completions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageCompletionsQueryKey>
  >({
    queryKey: getOrganizationUsageCompletionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.completions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageCompletions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.completions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.completions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organization.usage.completions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationUsageCompletionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageCompletionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationUsageEmbeddingsQueryKey(
  args: InferRequestType<typeof client.organization.usage.embeddings.$get>,
) {
  return ['organization', '/organization/usage/embeddings', args] as const
}

export function getOrganizationUsageEmbeddingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.embeddings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageEmbeddingsQueryKey>
  >({
    queryKey: getOrganizationUsageEmbeddingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.embeddings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageEmbeddings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.embeddings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organization.usage.embeddings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationUsageEmbeddingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageEmbeddingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationUsageFileSearchCallsQueryKey(
  args: InferRequestType<typeof client.organization.usage.file_search_calls.$get>,
) {
  return ['organization', '/organization/usage/file_search_calls', args] as const
}

export function getOrganizationUsageFileSearchCallsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.file_search_calls.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.file_search_calls.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationUsageFileSearchCallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.file_search_calls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageFileSearchCalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.file_search_calls.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.file_search_calls.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageFileSearchCallsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationUsageImagesQueryKey(
  args: InferRequestType<typeof client.organization.usage.images.$get>,
) {
  return ['organization', '/organization/usage/images', args] as const
}

export function getOrganizationUsageImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.images.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.images.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.images.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageImagesQueryKey>
  >({
    queryKey: getOrganizationUsageImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.images.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.images.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.images.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationUsageImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationUsageModerationsQueryKey(
  args: InferRequestType<typeof client.organization.usage.moderations.$get>,
) {
  return ['organization', '/organization/usage/moderations', args] as const
}

export function getOrganizationUsageModerationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.moderations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageModerationsQueryKey>
  >({
    queryKey: getOrganizationUsageModerationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.moderations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageModerations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.moderations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organization.usage.moderations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationUsageModerationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageModerationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationUsageVectorStoresQueryKey(
  args: InferRequestType<typeof client.organization.usage.vector_stores.$get>,
) {
  return ['organization', '/organization/usage/vector_stores', args] as const
}

export function getOrganizationUsageVectorStoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.vector_stores.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.vector_stores.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationUsageVectorStoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.vector_stores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageVectorStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.vector_stores.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.vector_stores.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageVectorStoresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationUsageWebSearchCallsQueryKey(
  args: InferRequestType<typeof client.organization.usage.web_search_calls.$get>,
) {
  return ['organization', '/organization/usage/web_search_calls', args] as const
}

export function getOrganizationUsageWebSearchCallsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.web_search_calls.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.web_search_calls.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationUsageWebSearchCallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.web_search_calls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageWebSearchCalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.usage.web_search_calls.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.web_search_calls.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageWebSearchCallsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationUsersQueryKey(
  args: InferRequestType<typeof client.organization.users.$get>,
) {
  return ['organization', '/organization/users', args] as const
}

export function getOrganizationUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organization.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsersQueryKey>
  >({
    queryKey: getOrganizationUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganizationUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOrganizationUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['$get']>,
) {
  return ['organization', '/organization/users/:user_id', args] as const
}

export function getOrganizationUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.users[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.users)[':user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsersUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationUsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationUsersUserIdRolesQueryKey(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$get']>,
) {
  return ['organization', '/organization/users/:user_id/roles', args] as const
}

export function getOrganizationUsersUserIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationUsersUserIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.users[':user_id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsersUserIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.users)[':user_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsersUserIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationUsersUserIdRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationUsersUserIdRolesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationUsersUserIdRolesRoleIdQueryKey(
  args: InferRequestType<
    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
  >,
) {
  return ['organization', '/organization/users/:user_id/roles/:role_id', args] as const
}

export function getOrganizationUsersUserIdRolesRoleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationUsersUserIdRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.users[':user_id'].roles[':role_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsersUserIdRolesRoleId<
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
  args: () => InferRequestType<
    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationUsersUserIdRolesRoleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsersUserIdRolesRoleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationUsersUserIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationUsersUserIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectIdGroupsGroupIdRolesQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/groups/:group_id/roles', args] as const
}

export function getProjectsProjectIdGroupsGroupIdRolesQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdGroupsGroupIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].groups[':group_id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectIdGroupsGroupIdRoles<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdGroupsGroupIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectsProjectIdGroupsGroupIdRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdGroupsGroupIdRolesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectIdGroupsGroupIdRolesRoleIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/groups/:group_id/roles/:role_id', args] as const
}

export function getProjectsProjectIdGroupsGroupIdRolesRoleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdGroupsGroupIdRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].groups[':group_id'].roles[':role_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectIdGroupsGroupIdRolesRoleId<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdGroupsGroupIdRolesRoleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteProjectsProjectIdGroupsGroupIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdGroupsGroupIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectIdRolesQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles']['$get']>,
) {
  return ['projects', '/projects/:project_id/roles', args] as const
}

export function getProjectsProjectIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_id']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectsProjectIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdRolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectIdRolesRoleIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>,
) {
  return ['projects', '/projects/:project_id/roles/:role_id', args] as const
}

export function getProjectsProjectIdRolesRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].roles[':role_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectIdRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['roles'][':role_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getProjectsProjectIdRolesRoleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdRolesRoleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectsProjectIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteProjectsProjectIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectIdUsersUserIdRolesQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/users/:user_id/roles', args] as const
}

export function getProjectsProjectIdUsersUserIdRolesQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdUsersUserIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].users[':user_id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectIdUsersUserIdRoles<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdUsersUserIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectsProjectIdUsersUserIdRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdUsersUserIdRolesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectIdUsersUserIdRolesRoleIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/users/:user_id/roles/:role_id', args] as const
}

export function getProjectsProjectIdUsersUserIdRolesRoleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdUsersUserIdRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].users[':user_id'].roles[':role_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectIdUsersUserIdRolesRoleId<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdUsersUserIdRolesRoleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteProjectsProjectIdUsersUserIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdUsersUserIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRealtimeCalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realtime.calls.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.realtime.calls.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealtimeCallsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRealtimeCallsCallIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealtimeCallsCallIdAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRealtimeCallsCallIdHangup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealtimeCallsCallIdHangupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRealtimeCallsCallIdRefer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealtimeCallsCallIdReferMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRealtimeCallsCallIdReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealtimeCallsCallIdRejectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRealtimeClientSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.realtime.client_secrets.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.realtime.client_secrets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealtimeClientSecretsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRealtimeSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.realtime.sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.realtime.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealtimeSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRealtimeTranscriptionSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealtimeTranscriptionSessionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRealtimeTranslationsClientSecrets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealtimeTranslationsClientSecretsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostResponses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.responses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResponsesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResponsesResponseIdQueryKey(
  args: InferRequestType<(typeof client.responses)[':response_id']['$get']>,
) {
  return ['responses', '/responses/:response_id', args] as const
}

export function getResponsesResponseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.responses)[':response_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResponsesResponseIdQueryKey>
  >({
    queryKey: getResponsesResponseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.responses[':response_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResponsesResponseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.responses)[':response_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.responses)[':response_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResponsesResponseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResponsesResponseIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteResponsesResponseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteResponsesResponseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostResponsesResponseIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResponsesResponseIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResponsesResponseIdInputItemsQueryKey(
  args: InferRequestType<(typeof client.responses)[':response_id']['input_items']['$get']>,
) {
  return ['responses', '/responses/:response_id/input_items', args] as const
}

export function getResponsesResponseIdInputItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.responses)[':response_id']['input_items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.responses)[':response_id']['input_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getResponsesResponseIdInputItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.responses[':response_id'].input_items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResponsesResponseIdInputItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.responses)[':response_id']['input_items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.responses)[':response_id']['input_items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResponsesResponseIdInputItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostThreads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threads.$post>>>>>,
        TError,
        InferRequestType<typeof client.threads.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThreadsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostThreadsRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threads.runs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.threads.runs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThreadsRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getThreadsThreadIdQueryKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['$get']>,
) {
  return ['threads', '/threads/:thread_id', args] as const
}

export function getThreadsThreadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThreadsThreadIdQueryKey>
  >({
    queryKey: getThreadsThreadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.threads[':thread_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.threads)[':thread_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.threads)[':thread_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThreadsThreadIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThreadsThreadIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostThreadsThreadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThreadsThreadIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteThreadsThreadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteThreadsThreadIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getThreadsThreadIdMessagesQueryKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages']['$get']>,
) {
  return ['threads', '/threads/:thread_id/messages', args] as const
}

export function getThreadsThreadIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThreadsThreadIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.threads[':thread_id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectThreadsThreadIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threads)[':thread_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.threads)[':thread_id']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThreadsThreadIdMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostThreadsThreadIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThreadsThreadIdMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getThreadsThreadIdMessagesMessageIdQueryKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>,
) {
  return ['threads', '/threads/:thread_id/messages/:message_id', args] as const
}

export function getThreadsThreadIdMessagesMessageIdQueryOptions<
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
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThreadsThreadIdMessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.threads[':thread_id'].messages[':message_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectThreadsThreadIdMessagesMessageId<
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
  args: () => InferRequestType<
    (typeof client.threads)[':thread_id']['messages'][':message_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThreadsThreadIdMessagesMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostThreadsThreadIdMessagesMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThreadsThreadIdMessagesMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteThreadsThreadIdMessagesMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteThreadsThreadIdMessagesMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getThreadsThreadIdRunsQueryKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs']['$get']>,
) {
  return ['threads', '/threads/:thread_id/runs', args] as const
}

export function getThreadsThreadIdRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThreadsThreadIdRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.threads[':thread_id'].runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectThreadsThreadIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.threads)[':thread_id']['runs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThreadsThreadIdRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostThreadsThreadIdRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThreadsThreadIdRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getThreadsThreadIdRunsRunIdQueryKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>,
) {
  return ['threads', '/threads/:thread_id/runs/:run_id', args] as const
}

export function getThreadsThreadIdRunsRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThreadsThreadIdRunsRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.threads[':thread_id'].runs[':run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectThreadsThreadIdRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThreadsThreadIdRunsRunIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostThreadsThreadIdRunsRunId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThreadsThreadIdRunsRunIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostThreadsThreadIdRunsRunIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThreadsThreadIdRunsRunIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getThreadsThreadIdRunsRunIdStepsQueryKey(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>,
) {
  return ['threads', '/threads/:thread_id/runs/:run_id/steps', args] as const
}

export function getThreadsThreadIdRunsRunIdStepsQueryOptions<
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
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThreadsThreadIdRunsRunIdStepsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.threads[':thread_id'].runs[':run_id'].steps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectThreadsThreadIdRunsRunIdSteps<
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
  args: () => InferRequestType<
    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getThreadsThreadIdRunsRunIdStepsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThreadsThreadIdRunsRunIdStepsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getThreadsThreadIdRunsRunIdStepsStepIdQueryKey(
  args: InferRequestType<
    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
  >,
) {
  return ['threads', '/threads/:thread_id/runs/:run_id/steps/:step_id', args] as const
}

export function getThreadsThreadIdRunsRunIdStepsStepIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThreadsThreadIdRunsRunIdStepsStepIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.threads[':thread_id'].runs[':run_id'].steps[':step_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectThreadsThreadIdRunsRunIdStepsStepId<
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
  args: () => InferRequestType<
    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThreadsThreadIdRunsRunIdStepsStepIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostThreadsThreadIdRunsRunIdSubmitToolOutputs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThreadsThreadIdRunsRunIdSubmitToolOutputsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.$post>>>>>,
        TError,
        InferRequestType<typeof client.uploads.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUploadsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUploadsUploadIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUploadsUploadIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUploadsUploadIdComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUploadsUploadIdCompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUploadsUploadIdParts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUploadsUploadIdPartsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVectorStoresQueryKey(args: InferRequestType<typeof client.vector_stores.$get>) {
  return ['vector_stores', '/vector_stores', args] as const
}

export function getVectorStoresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vector_stores.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVectorStoresQueryKey>
  >({
    queryKey: getVectorStoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vector_stores.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVectorStores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vector_stores.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVectorStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVectorStoresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostVectorStores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vector_stores.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.vector_stores.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVectorStoresMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVectorStoresVectorStoreIdQueryKey(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$get']>,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id', args] as const
}

export function getVectorStoresVectorStoreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVectorStoresVectorStoreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVectorStoresVectorStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVectorStoresVectorStoreIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVectorStoresVectorStoreId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVectorStoresVectorStoreIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVectorStoresVectorStoreId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVectorStoresVectorStoreIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostVectorStoresVectorStoreIdFileBatches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVectorStoresVectorStoreIdFileBatchesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVectorStoresVectorStoreIdFileBatchesBatchIdQueryKey(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
  >,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id/file_batches/:batch_id', args] as const
}

export function getVectorStoresVectorStoreIdFileBatchesBatchIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVectorStoresVectorStoreIdFileBatchesBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].file_batches[':batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVectorStoresVectorStoreIdFileBatchesBatchId<
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
  args: () => InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVectorStoresVectorStoreIdFileBatchesBatchIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVectorStoresVectorStoreIdFileBatchesBatchIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostVectorStoresVectorStoreIdFileBatchesBatchIdCancelMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVectorStoresVectorStoreIdFileBatchesBatchIdFilesQueryKey(
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

export function getVectorStoresVectorStoreIdFileBatchesBatchIdFilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVectorStoresVectorStoreIdFileBatchesBatchIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].file_batches[':batch_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVectorStoresVectorStoreIdFileBatchesBatchIdFiles<
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
  args: () => InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVectorStoresVectorStoreIdFileBatchesBatchIdFilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getVectorStoresVectorStoreIdFilesQueryKey(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id/files', args] as const
}

export function getVectorStoresVectorStoreIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVectorStoresVectorStoreIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVectorStoresVectorStoreIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getVectorStoresVectorStoreIdFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVectorStoresVectorStoreIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVectorStoresVectorStoreIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVectorStoresVectorStoreIdFilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVectorStoresVectorStoreIdFilesFileIdQueryKey(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
  >,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id/files/:file_id', args] as const
}

export function getVectorStoresVectorStoreIdFilesFileIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVectorStoresVectorStoreIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].files[':file_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVectorStoresVectorStoreIdFilesFileId<
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
  args: () => InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVectorStoresVectorStoreIdFilesFileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVectorStoresVectorStoreIdFilesFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVectorStoresVectorStoreIdFilesFileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVectorStoresVectorStoreIdFilesFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVectorStoresVectorStoreIdFilesFileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVectorStoresVectorStoreIdFilesFileIdContentQueryKey(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
  >,
) {
  return ['vector_stores', '/vector_stores/:vector_store_id/files/:file_id/content', args] as const
}

export function getVectorStoresVectorStoreIdFilesFileIdContentQueryOptions<
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
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVectorStoresVectorStoreIdFilesFileIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vector_stores[':vector_store_id'].files[':file_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVectorStoresVectorStoreIdFilesFileIdContent<
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
  args: () => InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVectorStoresVectorStoreIdFilesFileIdContentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVectorStoresVectorStoreIdSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVectorStoresVectorStoreIdSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.conversations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConversationsConversationIdQueryKey(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
) {
  return ['conversations', '/conversations/:conversation_id', args] as const
}

export function getConversationsConversationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsConversationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':conversation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsConversationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostConversationsConversationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsConversationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteConversationsConversationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConversationsConversationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSafetyCasesIdQueryKey(
  args: InferRequestType<(typeof client.safety.cases)[':id']['$get']>,
) {
  return ['safety', '/safety/cases/:id', args] as const
}

export function getSafetyCasesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.safety.cases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSafetyCasesIdQueryKey>
  >({
    queryKey: getSafetyCasesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.safety.cases[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSafetyCasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.safety.cases)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.safety.cases)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSafetyCasesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSafetyCasesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSafetyAlertsIdQueryKey(
  args: InferRequestType<(typeof client.safety.alerts)[':id']['$get']>,
) {
  return ['safety', '/safety/alerts/:id', args] as const
}

export function getSafetyAlertsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.safety.alerts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSafetyAlertsIdQueryKey>
  >({
    queryKey: getSafetyAlertsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.safety.alerts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSafetyAlertsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.safety.alerts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.safety.alerts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSafetyAlertsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSafetyAlertsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOrganizationExternalKeysQueryKey(
  args: InferRequestType<typeof client.organization.external_keys.$get>,
) {
  return ['organization', '/organization/external_keys', args] as const
}

export function getOrganizationExternalKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.external_keys.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationExternalKeysQueryKey>
  >({
    queryKey: getOrganizationExternalKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.external_keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationExternalKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.external_keys.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_keys.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationExternalKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationExternalKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationExternalKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationExternalKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationExternalKeysExternalKeyIdQueryKey(
  args: InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$get']>,
) {
  return ['organization', '/organization/external_keys/:external_key_id', args] as const
}

export function getOrganizationExternalKeysExternalKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationExternalKeysExternalKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.external_keys[':external_key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationExternalKeysExternalKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.external_keys)[':external_key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organization.external_keys)[':external_key_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationExternalKeysExternalKeyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationExternalKeysExternalKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationExternalKeysExternalKeyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationExternalKeysExternalKeyIdValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationExternalKeysExternalKeyIdValidateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLiveSessionsSessionIdContentQueryKey(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['content']['$get']>,
) {
  return ['live', '/live/sessions/:session_id/content', args] as const
}

export function getLiveSessionsSessionIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLiveSessionsSessionIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.live.sessions[':session_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLiveSessionsSessionIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.live.sessions)[':session_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.live.sessions)[':session_id']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveSessionsSessionIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationWorkloadIdentityProvidersQueryKey(
  args: InferRequestType<typeof client.organization.workload_identity_providers.$get>,
) {
  return ['organization', '/organization/workload_identity_providers', args] as const
}

export function getOrganizationWorkloadIdentityProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.workload_identity_providers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.workload_identity_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationWorkloadIdentityProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.workload_identity_providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationWorkloadIdentityProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.organization.workload_identity_providers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.workload_identity_providers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationWorkloadIdentityProvidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationWorkloadIdentityProviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationWorkloadIdentityProvidersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryKey(
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

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.workload_identity_providers[':workload_identity_provider_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId<
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
  args: () => InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesQueryKey(
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

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.workload_identity_providers[
          ':workload_identity_provider_id'
        ].federation_rules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRules<
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
  args: () => InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdQueryKey(
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

export function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.workload_identity_providers[
          ':workload_identity_provider_id'
        ].federation_rules[':workload_identity_federation_rule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId<
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
  args: () => InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationUsageDecisionsQueryKey(
  args: InferRequestType<typeof client.organization.usage.decisions.$get>,
) {
  return ['organization', '/organization/usage/decisions', args] as const
}

export function getOrganizationUsageDecisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.usage.decisions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUsageDecisionsQueryKey>
  >({
    queryKey: getOrganizationUsageDecisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.usage.decisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUsageDecisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.usage.decisions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organization.usage.decisions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationUsageDecisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUsageDecisionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationExternalStorageQueryKey(
  args: InferRequestType<typeof client.organization.external_storage.$get>,
) {
  return ['organization', '/organization/external_storage', args] as const
}

export function getOrganizationExternalStorageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_storage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.external_storage.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_storage.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationExternalStorageQueryKey>
  >({
    queryKey: getOrganizationExternalStorageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.external_storage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationExternalStorage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.external_storage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.external_storage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organization.external_storage.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationExternalStorageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationExternalStorageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationExternalStorage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationExternalStorageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationExternalStorageExternalStorageIdQueryKey(
  args: InferRequestType<
    (typeof client.organization.external_storage)[':external_storage_id']['$get']
  >,
) {
  return ['organization', '/organization/external_storage/:external_storage_id', args] as const
}

export function getOrganizationExternalStorageExternalStorageIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.external_storage)[':external_storage_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationExternalStorageExternalStorageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.external_storage[':external_storage_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationExternalStorageExternalStorageId<
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
  args: () => InferRequestType<
    (typeof client.organization.external_storage)[':external_storage_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationExternalStorageExternalStorageIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationExternalStorageExternalStorageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationExternalStorageExternalStorageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationExternalStorageExternalStorageIdValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationExternalStorageExternalStorageIdValidateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationSpendLimitQueryKey() {
  return ['organization', '/organization/spend_limit'] as const
}

export function getOrganizationSpendLimitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationSpendLimitQueryKey>
  >({
    queryKey: getOrganizationSpendLimitQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.spend_limit.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationSpendLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationSpendLimitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationSpendLimitQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostOrganizationSpendLimit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.spend_limit.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.spend_limit.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationSpendLimitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationSpendLimit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationSpendLimitMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdSpendLimitQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/spend_limit', args] as const
}

export function getOrganizationProjectsProjectIdSpendLimitQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdSpendLimitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].spend_limit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdSpendLimit<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationProjectsProjectIdSpendLimitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdSpendLimitQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdSpendLimit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdSpendLimitMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationProjectsProjectIdSpendLimit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationProjectsProjectIdSpendLimitMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationProjectsProjectIdServiceTierSettingsQueryKey(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
  >,
) {
  return ['organization', '/organization/projects/:project_id/service_tier_settings', args] as const
}

export function getOrganizationProjectsProjectIdServiceTierSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationProjectsProjectIdServiceTierSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.projects[':project_id'].service_tier_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationProjectsProjectIdServiceTierSettings<
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
  args: () => InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationProjectsProjectIdServiceTierSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdServiceTierSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationProjectsProjectIdServiceTierSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostContentProvenanceChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.content_provenance_checks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.content_provenance_checks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContentProvenanceChecksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVideosQueryKey(args: InferRequestType<typeof client.videos.$get>) {
  return ['videos', '/videos', args] as const
}

export function getVideosQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideosQueryKey>
  >({
    queryKey: getVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVideos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.videos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$post>>>>>,
        TError,
        InferRequestType<typeof client.videos.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostVideosCharacters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.videos.characters.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.videos.characters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosCharactersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVideosCharactersCharacterIdQueryKey(
  args: InferRequestType<(typeof client.videos.characters)[':character_id']['$get']>,
) {
  return ['videos', '/videos/characters/:character_id', args] as const
}

export function getVideosCharactersCharacterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos.characters)[':character_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos.characters)[':character_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVideosCharactersCharacterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos.characters[':character_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVideosCharactersCharacterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos.characters)[':character_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.videos.characters)[':character_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideosCharactersCharacterIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVideosEdits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.edits.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.videos.edits.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosEditsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostVideosExtensions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.videos.extensions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.videos.extensions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosExtensionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVideosVideoIdQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
) {
  return ['videos', '/videos/:video_id', args] as const
}

export function getVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdQueryKey>
  >({
    queryKey: getVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideosVideoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteVideosVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVideosVideoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVideosVideoIdContentQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['content']['$get']>,
) {
  return ['videos', '/videos/:video_id/content', args] as const
}

export function getVideosVideoIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVideosVideoIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVideosVideoIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.videos)[':video_id']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideosVideoIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVideosVideoIdRemix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosVideoIdRemixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostResponsesInputTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.responses.input_tokens.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.responses.input_tokens.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResponsesInputTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostResponsesCompact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.responses.compact.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.responses.compact.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResponsesCompactMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSkillsQueryKey(args: InferRequestType<typeof client.skills.$get>) {
  return ['skills', '/skills', args] as const
}

export function getSkillsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.skills.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSkillsQueryKey>
  >({
    queryKey: getSkillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.skills.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSkills<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.skills.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSkillsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSkillsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSkills<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skills.$post>>>>>,
        TError,
        InferRequestType<typeof client.skills.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSkillsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSkillsSkillIdQueryKey(
  args: InferRequestType<(typeof client.skills)[':skill_id']['$get']>,
) {
  return ['skills', '/skills/:skill_id', args] as const
}

export function getSkillsSkillIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkillsSkillIdQueryKey>
  >({
    queryKey: getSkillsSkillIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.skills[':skill_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSkillsSkillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.skills)[':skill_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSkillsSkillIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSkillsSkillIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSkillsSkillId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.skills)[':skill_id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.skills)[':skill_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSkillsSkillIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSkillsSkillId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSkillsSkillIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSkillsSkillIdContentQueryKey(
  args: InferRequestType<(typeof client.skills)[':skill_id']['content']['$get']>,
) {
  return ['skills', '/skills/:skill_id/content', args] as const
}

export function getSkillsSkillIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.skills)[':skill_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSkillsSkillIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.skills[':skill_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSkillsSkillIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.skills)[':skill_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.skills)[':skill_id']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSkillsSkillIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSkillsSkillIdVersionsQueryKey(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions']['$get']>,
) {
  return ['skills', '/skills/:skill_id/versions', args] as const
}

export function getSkillsSkillIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSkillsSkillIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.skills[':skill_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSkillsSkillIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.skills)[':skill_id']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSkillsSkillIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSkillsSkillIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSkillsSkillIdVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSkillsSkillIdVersionsVersionQueryKey(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>,
) {
  return ['skills', '/skills/:skill_id/versions/:version', args] as const
}

export function getSkillsSkillIdVersionsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSkillsSkillIdVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.skills[':skill_id'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSkillsSkillIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSkillsSkillIdVersionsVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSkillsSkillIdVersionsVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteSkillsSkillIdVersionsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSkillsSkillIdVersionsVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSkillsSkillIdVersionsVersionContentQueryKey(
  args: InferRequestType<
    (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
  >,
) {
  return ['skills', '/skills/:skill_id/versions/:version/content', args] as const
}

export function getSkillsSkillIdVersionsVersionContentQueryOptions<
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
  args: InferRequestType<
    (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSkillsSkillIdVersionsVersionContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.skills[':skill_id'].versions[':version'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSkillsSkillIdVersionsVersionContent<
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
  args: () => InferRequestType<
    (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSkillsSkillIdVersionsVersionContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostChatkitSessionsSessionIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatkitSessionsSessionIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChatkitSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.chatkit.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatkitSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChatkitThreadsThreadIdItemsQueryKey(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>,
) {
  return ['chatkit', '/chatkit/threads/:thread_id/items', args] as const
}

export function getChatkitThreadsThreadIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChatkitThreadsThreadIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chatkit.threads[':thread_id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChatkitThreadsThreadIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChatkitThreadsThreadIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getChatkitThreadsThreadIdQueryKey(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$get']>,
) {
  return ['chatkit', '/chatkit/threads/:thread_id', args] as const
}

export function getChatkitThreadsThreadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChatkitThreadsThreadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chatkit.threads[':thread_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChatkitThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chatkit.threads)[':thread_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChatkitThreadsThreadIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteChatkitThreadsThreadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChatkitThreadsThreadIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChatkitThreadsQueryKey(
  args: InferRequestType<typeof client.chatkit.threads.$get>,
) {
  return ['chatkit', '/chatkit/threads', args] as const
}

export function getChatkitThreadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chatkit.threads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatkitThreadsQueryKey>
  >({
    queryKey: getChatkitThreadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chatkit.threads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChatkitThreads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chatkit.threads.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chatkit.threads.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatkitThreadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatkitThreadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDecisions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.decisions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.decisions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDecisionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsAutomationsQueryKey(
  args: InferRequestType<typeof client.agents.automations.$get>,
) {
  return ['agents', '/agents/automations', args] as const
}

export function getAgentsAutomationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agents.automations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsAutomationsQueryKey>
  >({
    queryKey: getAgentsAutomationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.automations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAgentsAutomations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.agents.automations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsAutomationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgentsAutomationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAgentsAutomations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.automations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.agents.automations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsAutomationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsAutomationsAutomationIdQueryKey(
  args: InferRequestType<(typeof client.agents.automations)[':automation_id']['$get']>,
) {
  return ['agents', '/agents/automations/:automation_id', args] as const
}

export function getAgentsAutomationsAutomationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.automations)[':automation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsAutomationsAutomationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.automations[':automation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsAutomationsAutomationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.automations)[':automation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.automations)[':automation_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsAutomationsAutomationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAgentsAutomationsAutomationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsAutomationsAutomationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAgentsAutomationsAutomationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAgentsAutomationsAutomationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAgentsAutomationsAutomationIdPause<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsAutomationsAutomationIdPauseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAgentsAutomationsAutomationIdResume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsAutomationsAutomationIdResumeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsAutomationsAutomationIdInvocationsQueryKey(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations']['$get']
  >,
) {
  return ['agents', '/agents/automations/:automation_id/invocations', args] as const
}

export function getAgentsAutomationsAutomationIdInvocationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsAutomationsAutomationIdInvocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.automations[':automation_id'].invocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsAutomationsAutomationIdInvocations<
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
  args: () => InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAgentsAutomationsAutomationIdInvocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsAutomationsAutomationIdInvocationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAgentsAutomationsAutomationIdInvocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsAutomationsAutomationIdInvocationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsAutomationsAutomationIdInvocationsInvocationIdQueryKey(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
  >,
) {
  return ['agents', '/agents/automations/:automation_id/invocations/:invocation_id', args] as const
}

export function getAgentsAutomationsAutomationIdInvocationsInvocationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsAutomationsAutomationIdInvocationsInvocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.automations[':automation_id'].invocations[':invocation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsAutomationsAutomationIdInvocationsInvocationId<
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
  args: () => InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsAutomationsAutomationIdInvocationsInvocationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsEnvironmentsQueryKey(
  args: InferRequestType<typeof client.agents.environments.$get>,
) {
  return ['agents', '/agents/environments', args] as const
}

export function getAgentsEnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agents.environments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsEnvironmentsQueryKey>
  >({
    queryKey: getAgentsEnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.environments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAgentsEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.agents.environments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsEnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgentsEnvironmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAgentsEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.agents.environments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsEnvironmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsEnvironmentsEnvironmentIdQueryKey(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['$get']>,
) {
  return ['agents', '/agents/environments/:environment_id', args] as const
}

export function getAgentsEnvironmentsEnvironmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsEnvironmentsEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.environments[':environment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.environments)[':environment_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsEnvironmentsEnvironmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsEnvironmentsEnvironmentIdFilesQueryKey(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$get']>,
) {
  return ['agents', '/agents/environments/:environment_id/files', args] as const
}

export function getAgentsEnvironmentsEnvironmentIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsEnvironmentsEnvironmentIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.environments[':environment_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsEnvironmentsEnvironmentIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.environments)[':environment_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.agents.environments)[':environment_id']['files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsEnvironmentsEnvironmentIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAgentsEnvironmentsEnvironmentIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsEnvironmentsEnvironmentIdFilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdSubagentsQueryKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/subagents', args] as const
}

export function getAgentsSessionsSessionIdSubagentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdSubagentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdSubagents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAgentsSessionsSessionIdSubagentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdSubagentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdQueryKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/subagents/:subagent_id', args] as const
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdSubagentsSubagentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents[':subagent_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdSubagentsSubagentId<
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
  args: () => InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdSubagentsSubagentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdItemsQueryKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/subagents/:subagent_id/items', args] as const
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdSubagentsSubagentIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents[':subagent_id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdSubagentsSubagentIdItems<
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
  args: () => InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdSubagentsSubagentIdItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsQueryKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/subagents/:subagent_id/turns', args] as const
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdSubagentsSubagentIdTurnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents[':subagent_id'].turns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdSubagentsSubagentIdTurns<
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
  args: () => InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdSubagentsSubagentIdTurnsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdQueryKey(
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

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[':turn_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnId<
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
  args: () => InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsQueryKey(
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

export function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[
          ':turn_id'
        ].items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItems<
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
  args: () => InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsQueryKey(args: InferRequestType<typeof client.agents.$get>) {
  return ['agents', '/agents', args] as const
}

export function getAgentsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAgentsQueryKey>
  >({
    queryKey: getAgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAgents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.agents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAgents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.$post>>>>>,
        TError,
        InferRequestType<typeof client.agents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsAgentIdQueryKey(
  args: InferRequestType<(typeof client.agents)[':agent_id']['$get']>,
) {
  return ['agents', '/agents/:agent_id', args] as const
}

export function getAgentsAgentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsAgentIdQueryKey>
  >({
    queryKey: getAgentsAgentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents[':agent_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents)[':agent_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsAgentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgentsAgentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agents)[':agent_id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.agents)[':agent_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsEnvironmentsTemplatesQueryKey(
  args: InferRequestType<typeof client.agents.environments.templates.$get>,
) {
  return ['agents', '/agents/environments/templates', args] as const
}

export function getAgentsEnvironmentsTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.environments.templates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsEnvironmentsTemplatesQueryKey>
  >({
    queryKey: getAgentsEnvironmentsTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.environments.templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsEnvironmentsTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.agents.environments.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.agents.environments.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.agents.environments.templates.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsEnvironmentsTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsEnvironmentsTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAgentsEnvironmentsTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsEnvironmentsTemplatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsEnvironmentsTemplatesEnvironmentTemplateIdQueryKey(
  args: InferRequestType<
    (typeof client.agents.environments.templates)[':environment_template_id']['$get']
  >,
) {
  return ['agents', '/agents/environments/templates/:environment_template_id', args] as const
}

export function getAgentsEnvironmentsTemplatesEnvironmentTemplateIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.environments.templates)[':environment_template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsEnvironmentsTemplatesEnvironmentTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.environments.templates[':environment_template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsEnvironmentsTemplatesEnvironmentTemplateId<
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
  args: () => InferRequestType<
    (typeof client.agents.environments.templates)[':environment_template_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsEnvironmentsTemplatesEnvironmentTemplateIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAgentsEnvironmentsTemplatesEnvironmentTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsEnvironmentsTemplatesEnvironmentTemplateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAgentsEnvironmentsTemplatesEnvironmentTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAgentsEnvironmentsTemplatesEnvironmentTemplateIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsSessionsQueryKey(
  args: InferRequestType<typeof client.agents.sessions.$get>,
) {
  return ['agents', '/agents/sessions', args] as const
}

export function getAgentsSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agents.sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsQueryKey>
  >({
    queryKey: getAgentsSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAgentsSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.agents.sessions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgentsSessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAgentsSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.agents.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdQueryKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id', args] as const
}

export function getAgentsSessionsSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.sessions)[':session_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAgentsSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAgentsSessionsSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAgentsSessionsSessionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdArtifactsQueryKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/artifacts', args] as const
}

export function getAgentsSessionsSessionIdArtifactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdArtifactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].artifacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdArtifacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAgentsSessionsSessionIdArtifactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdArtifactsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdArtifactsArtifactIdQueryKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/artifacts/:artifact_id', args] as const
}

export function getAgentsSessionsSessionIdArtifactsArtifactIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdArtifactsArtifactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].artifacts[':artifact_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdArtifactsArtifactId<
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
  args: () => InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdArtifactsArtifactIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteAgentsSessionsSessionIdArtifactsArtifactId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAgentsSessionsSessionIdArtifactsArtifactIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdArtifactsArtifactIdContentQueryKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/artifacts/:artifact_id/content', args] as const
}

export function getAgentsSessionsSessionIdArtifactsArtifactIdContentQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdArtifactsArtifactIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].artifacts[':artifact_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdArtifactsArtifactIdContent<
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
  args: () => InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdArtifactsArtifactIdContentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdEventsQueryKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/events', args] as const
}

export function getAgentsSessionsSessionIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAgentsSessionsSessionIdEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsSessionsSessionIdEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdItemsQueryKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['items']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/items', args] as const
}

export function getAgentsSessionsSessionIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.sessions)[':session_id']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdTracesQueryKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/traces', args] as const
}

export function getAgentsSessionsSessionIdTracesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdTracesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].traces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdTraces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdTracesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdTurnsQueryKey(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>,
) {
  return ['agents', '/agents/sessions/:session_id/turns', args] as const
}

export function getAgentsSessionsSessionIdTurnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdTurnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].turns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdTurns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdTurnsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdTurnsTurnIdQueryKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/turns/:turn_id', args] as const
}

export function getAgentsSessionsSessionIdTurnsTurnIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdTurnsTurnIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].turns[':turn_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdTurnsTurnId<
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
  args: () => InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAgentsSessionsSessionIdTurnsTurnIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdTurnsTurnIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAgentsSessionsSessionIdTurnsTurnIdItemsQueryKey(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
  >,
) {
  return ['agents', '/agents/sessions/:session_id/turns/:turn_id/items', args] as const
}

export function getAgentsSessionsSessionIdTurnsTurnIdItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentsSessionsSessionIdTurnsTurnIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':session_id'].turns[':turn_id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentsSessionsSessionIdTurnsTurnIdItems<
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
  args: () => InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSessionsSessionIdTurnsTurnIdItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getVaultsQueryKey(args: InferRequestType<typeof client.vaults.$get>) {
  return ['vaults', '/vaults', args] as const
}

export function getVaultsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vaults.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVaultsQueryKey>
  >({
    queryKey: getVaultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVaults<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vaults.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVaultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVaultsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostVaults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$post>>>>>,
        TError,
        InferRequestType<typeof client.vaults.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVaultsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVaultsVaultIdQueryKey(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['$get']>,
) {
  return ['vaults', '/vaults/:vault_id', args] as const
}

export function getVaultsVaultIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultIdQueryKey>
  >({
    queryKey: getVaultsVaultIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults[':vault_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVaultsVaultId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vaults)[':vault_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVaultsVaultIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostVaultsVaultId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vault_id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.vaults)[':vault_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVaultsVaultIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVaultsVaultId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVaultsVaultIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVaultsVaultIdCredentialsQueryKey(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$get']>,
) {
  return ['vaults', '/vaults/:vault_id/credentials', args] as const
}

export function getVaultsVaultIdCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVaultsVaultIdCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults[':vault_id'].credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVaultsVaultIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vault_id']['credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVaultsVaultIdCredentialsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVaultsVaultIdCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVaultsVaultIdCredentialsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVaultsVaultIdCredentialsCredentialIdQueryKey(
  args: InferRequestType<
    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
  >,
) {
  return ['vaults', '/vaults/:vault_id/credentials/:credential_id', args] as const
}

export function getVaultsVaultIdCredentialsCredentialIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVaultsVaultIdCredentialsCredentialIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults[':vault_id'].credentials[':credential_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVaultsVaultIdCredentialsCredentialId<
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
  args: () => InferRequestType<
    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getVaultsVaultIdCredentialsCredentialIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVaultsVaultIdCredentialsCredentialIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVaultsVaultIdCredentialsCredentialId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVaultsVaultIdCredentialsCredentialIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVaultsVaultIdCredentialsCredentialId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVaultsVaultIdCredentialsCredentialIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhookEndpointsQueryKey(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
) {
  return ['webhook_endpoints', '/webhook_endpoints', args] as const
}

export function getWebhookEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhook_endpoints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEndpointsQueryKey>
  >({
    queryKey: getWebhookEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook_endpoints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhookEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhookEndpointsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWebhookEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.webhook_endpoints.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhookEndpointsWebhookEndpointIdQueryKey(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>,
) {
  return ['webhook_endpoints', '/webhook_endpoints/:webhook_endpoint_id', args] as const
}

export function getWebhookEndpointsWebhookEndpointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebhookEndpointsWebhookEndpointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook_endpoints[':webhook_endpoint_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhookEndpointsWebhookEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebhookEndpointsWebhookEndpointIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWebhookEndpointsWebhookEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookEndpointsWebhookEndpointIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebhookEndpointsWebhookEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhookEndpointsWebhookEndpointIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWebhookEndpointsWebhookEndpointIdRotateSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookEndpointsWebhookEndpointIdRotateSecretMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWebhookEndpointsWebhookEndpointIdTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookEndpointsWebhookEndpointIdTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhookEventTypesQueryKey() {
  return ['webhook_event_types', '/webhook_event_types'] as const
}

export function getWebhookEventTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEventTypesQueryKey>
  >({
    queryKey: getWebhookEventTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook_event_types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhookEventTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhook_event_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookEventTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhookEventTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostResponsesBetaTrue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResponsesBetaTrueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResponsesResponseIdBetaTrueQueryKey(
  args: InferRequestType<(typeof client.responses)[':response_id?beta=true']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['responses', '/responses/:response_id?beta=true', keyArgs] as const
}

export function getResponsesResponseIdBetaTrueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.responses)[':response_id?beta=true']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getResponsesResponseIdBetaTrueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.responses[':response_id?beta=true'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResponsesResponseIdBetaTrue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.responses)[':response_id?beta=true']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.responses)[':response_id?beta=true']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResponsesResponseIdBetaTrueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteResponsesResponseIdBetaTrue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteResponsesResponseIdBetaTrueMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostResponsesResponseIdCancelBetaTrue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResponsesResponseIdCancelBetaTrueMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostResponsesCompactBetaTrue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResponsesCompactBetaTrueMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResponsesResponseIdInputItemsBetaTrueQueryKey(
  args: InferRequestType<
    (typeof client.responses)[':response_id']['input_items?beta=true']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['responses', '/responses/:response_id/input_items?beta=true', keyArgs] as const
}

export function getResponsesResponseIdInputItemsBetaTrueQueryOptions<
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
  args: InferRequestType<
    (typeof client.responses)[':response_id']['input_items?beta=true']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getResponsesResponseIdInputItemsBetaTrueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.responses[':response_id']['input_items?beta=true'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResponsesResponseIdInputItemsBetaTrue<
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
  args: () => InferRequestType<
    (typeof client.responses)[':response_id']['input_items?beta=true']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getResponsesResponseIdInputItemsBetaTrueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResponsesResponseIdInputItemsBetaTrueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostResponsesInputTokensBetaTrue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResponsesInputTokensBetaTrueMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
