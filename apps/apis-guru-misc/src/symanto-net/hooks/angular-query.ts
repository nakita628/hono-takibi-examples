import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCommunicationKey() {
  return ['communication'] as const
}

export function getEkmanEmotionKey() {
  return ['ekman-emotion'] as const
}

export function getEmotionKey() {
  return ['emotion'] as const
}

export function getLanguageDetectionKey() {
  return ['language-detection'] as const
}

export function getPersonalityKey() {
  return ['personality'] as const
}

export function getSentimentKey() {
  return ['sentiment'] as const
}

export function getTopicSentimentKey() {
  return ['topic-sentiment'] as const
}

export function getPostCommunicationMutationKey() {
  return ['communication', '/communication', 'POST'] as const
}

export function getPostCommunicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.communication.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.communication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCommunicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.communication.$post>) {
      return parseResponse(client.communication.$post(args, options))
    },
  })
}

export function injectPostCommunication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.communication.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.communication.$post>,
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
    const mutationDefaults = getPostCommunicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEkmanEmotionMutationKey() {
  return ['ekman-emotion', '/ekman-emotion', 'POST'] as const
}

export function getPostEkmanEmotionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ekman-emotion']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['ekman-emotion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEkmanEmotionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ekman-emotion']['$post']>) {
      return parseResponse(client['ekman-emotion'].$post(args, options))
    },
  })
}

export function injectPostEkmanEmotion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['ekman-emotion']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['ekman-emotion']['$post']>,
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
    const mutationDefaults = getPostEkmanEmotionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEmotionMutationKey() {
  return ['emotion', '/emotion', 'POST'] as const
}

export function getPostEmotionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emotion.$post>>>>>,
    TError,
    InferRequestType<typeof client.emotion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmotionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.emotion.$post>) {
      return parseResponse(client.emotion.$post(args, options))
    },
  })
}

export function injectPostEmotion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emotion.$post>>>>>,
        TError,
        InferRequestType<typeof client.emotion.$post>,
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
    const mutationDefaults = getPostEmotionMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostLanguageDetectionMutationKey() {
  return ['language-detection', '/language-detection', 'POST'] as const
}

export function getPostLanguageDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['language-detection']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['language-detection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLanguageDetectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['language-detection']['$post']>) {
      return parseResponse(client['language-detection'].$post(args, options))
    },
  })
}

export function injectPostLanguageDetection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['language-detection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['language-detection']['$post']>,
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
    const mutationDefaults = getPostLanguageDetectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPersonalityMutationKey() {
  return ['personality', '/personality', 'POST'] as const
}

export function getPostPersonalityMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personality.$post>>>>>,
    TError,
    InferRequestType<typeof client.personality.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPersonalityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.personality.$post>) {
      return parseResponse(client.personality.$post(args, options))
    },
  })
}

export function injectPostPersonality<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personality.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.personality.$post>,
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
    const mutationDefaults = getPostPersonalityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSentimentMutationKey() {
  return ['sentiment', '/sentiment', 'POST'] as const
}

export function getPostSentimentMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentiment.$post>>>>>,
    TError,
    InferRequestType<typeof client.sentiment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSentimentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sentiment.$post>) {
      return parseResponse(client.sentiment.$post(args, options))
    },
  })
}

export function injectPostSentiment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentiment.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sentiment.$post>,
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
    const mutationDefaults = getPostSentimentMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTopicSentimentMutationKey() {
  return ['topic-sentiment', '/topic-sentiment', 'POST'] as const
}

export function getPostTopicSentimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['topic-sentiment']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['topic-sentiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTopicSentimentMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['topic-sentiment']['$post']>) {
      return parseResponse(client['topic-sentiment'].$post(args, options))
    },
  })
}

export function injectPostTopicSentiment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['topic-sentiment']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['topic-sentiment']['$post']>,
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
    const mutationDefaults = getPostTopicSentimentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
