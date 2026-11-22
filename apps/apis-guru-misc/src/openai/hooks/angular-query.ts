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

export function getAnswersKey() {
  return ['answers'] as const
}

export function getAudioKey() {
  return ['audio'] as const
}

export function getChatKey() {
  return ['chat'] as const
}

export function getClassificationsKey() {
  return ['classifications'] as const
}

export function getCompletionsKey() {
  return ['completions'] as const
}

export function getEditsKey() {
  return ['edits'] as const
}

export function getEmbeddingsKey() {
  return ['embeddings'] as const
}

export function getEnginesKey() {
  return ['engines'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getFineTunesKey() {
  return ['fine-tunes'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getModelsKey() {
  return ['models'] as const
}

export function getModerationsKey() {
  return ['moderations'] as const
}

export function getPostAnswersMutationKey() {
  return ['answers', '/answers', 'POST'] as const
}

export function getPostAnswersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$post>>>>>,
    TError,
    InferRequestType<typeof client.answers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnswersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.answers.$post>) {
      return parseResponse(client.answers.$post(args, options))
    },
  })
}

export function injectPostAnswers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$post>>>>>,
        TError,
        InferRequestType<typeof client.answers.$post>,
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
    const mutationDefaults = getPostAnswersMutationOptions<TError, TOnMutateResult>(clientOptions)
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

export function getPostClassificationsMutationKey() {
  return ['classifications', '/classifications', 'POST'] as const
}

export function getPostClassificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.classifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClassificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.classifications.$post>) {
      return parseResponse(client.classifications.$post(args, options))
    },
  })
}

export function injectPostClassifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.classifications.$post>,
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
    const mutationDefaults = getPostClassificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
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

export function getPostEditsMutationKey() {
  return ['edits', '/edits', 'POST'] as const
}

export function getPostEditsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edits.$post>>>>>,
    TError,
    InferRequestType<typeof client.edits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEditsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.edits.$post>) {
      return parseResponse(client.edits.$post(args, options))
    },
  })
}

export function injectPostEdits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edits.$post>>>>>,
        TError,
        InferRequestType<typeof client.edits.$post>,
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
    const mutationDefaults = getPostEditsMutationOptions<TError, TOnMutateResult>(clientOptions)
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

export function getEnginesQueryKey() {
  return ['engines', '/engines'] as const
}

export function getEnginesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.engines.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.engines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEnginesQueryKey>
  >({
    queryKey: getEnginesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.engines.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEngines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.engines.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.engines.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEnginesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnginesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getEnginesEngineIdQueryKey(
  args: InferRequestType<(typeof client.engines)[':engine_id']['$get']>,
) {
  return ['engines', '/engines/:engine_id', args] as const
}

export function getEnginesEngineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.engines)[':engine_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.engines)[':engine_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.engines)[':engine_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnginesEngineIdQueryKey>
  >({
    queryKey: getEnginesEngineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.engines[':engine_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEnginesEngineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.engines)[':engine_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.engines)[':engine_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.engines)[':engine_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnginesEngineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnginesEngineIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostEnginesEngineIdSearchMutationKey() {
  return ['engines', '/engines/:engine_id/search', 'POST'] as const
}

export function getPostEnginesEngineIdSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.engines)[':engine_id']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.engines)[':engine_id']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEnginesEngineIdSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.engines)[':engine_id']['search']['$post']>,
    ) {
      return parseResponse(client.engines[':engine_id'].search.$post(args, options))
    },
  })
}

export function injectPostEnginesEngineIdSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.engines)[':engine_id']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.engines)[':engine_id']['search']['$post']>,
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
    const mutationDefaults = getPostEnginesEngineIdSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFilesQueryKey() {
  return ['files', '/files'] as const
}

export function getFilesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >({
    queryKey: getFilesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.files.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
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
    return { ...getFilesQueryOptions<TData, TError>(clientOptions), ...query }
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

export function getFineTunesQueryKey() {
  return ['fine-tunes', '/fine-tunes'] as const
}

export function getFineTunesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fine-tunes']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fine-tunes']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFineTunesQueryKey>
  >({
    queryKey: getFineTunesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['fine-tunes'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFineTunes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fine-tunes']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['fine-tunes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFineTunesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFineTunesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostFineTunesMutationKey() {
  return ['fine-tunes', '/fine-tunes', 'POST'] as const
}

export function getPostFineTunesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fine-tunes']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['fine-tunes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFineTunesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['fine-tunes']['$post']>) {
      return parseResponse(client['fine-tunes'].$post(args, options))
    },
  })
}

export function injectPostFineTunes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['fine-tunes']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['fine-tunes']['$post']>,
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
    const mutationDefaults = getPostFineTunesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFineTunesFineTuneIdQueryKey(
  args: InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['$get']>,
) {
  return ['fine-tunes', '/fine-tunes/:fine_tune_id', args] as const
}

export function getFineTunesFineTuneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['fine-tunes'][':fine_tune_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fine-tunes'][':fine_tune_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFineTunesFineTuneIdQueryKey>
  >({
    queryKey: getFineTunesFineTuneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['fine-tunes'][':fine_tune_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFineTunesFineTuneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['fine-tunes'][':fine_tune_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['fine-tunes'][':fine_tune_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFineTunesFineTuneIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFineTunesFineTuneIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFineTunesFineTuneIdCancelMutationKey() {
  return ['fine-tunes', '/fine-tunes/:fine_tune_id/cancel', 'POST'] as const
}

export function getPostFineTunesFineTuneIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fine-tunes'][':fine_tune_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFineTunesFineTuneIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['cancel']['$post']>,
    ) {
      return parseResponse(client['fine-tunes'][':fine_tune_id'].cancel.$post(args, options))
    },
  })
}

export function injectPostFineTunesFineTuneIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['fine-tunes'][':fine_tune_id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['cancel']['$post']>,
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
    const mutationDefaults = getPostFineTunesFineTuneIdCancelMutationOptions<
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

export function getFineTunesFineTuneIdEventsQueryKey(
  args: InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['events']['$get']>,
) {
  return ['fine-tunes', '/fine-tunes/:fine_tune_id/events', args] as const
}

export function getFineTunesFineTuneIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['fine-tunes'][':fine_tune_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fine-tunes'][':fine_tune_id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFineTunesFineTuneIdEventsQueryKey>
  >({
    queryKey: getFineTunesFineTuneIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['fine-tunes'][':fine_tune_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFineTunesFineTuneIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['fine-tunes'][':fine_tune_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['fine-tunes'][':fine_tune_id']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFineTunesFineTuneIdEventsQueryKey>
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
      ...getFineTunesFineTuneIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
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
