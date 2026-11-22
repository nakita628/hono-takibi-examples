import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostCommunicationKey() {
  return ['communication', '/communication', 'POST'] as const
}

export function usePostCommunication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.communication.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.communication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommunicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.communication.$post> }) =>
        parseResponse(client.communication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEkmanEmotionKey() {
  return ['ekman-emotion', '/ekman-emotion', 'POST'] as const
}

export function usePostEkmanEmotion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ekman-emotion']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ekman-emotion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEkmanEmotionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['ekman-emotion']['$post']> },
      ) => parseResponse(client['ekman-emotion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmotionKey() {
  return ['emotion', '/emotion', 'POST'] as const
}

export function usePostEmotion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emotion.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.emotion.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmotionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.emotion.$post> }) =>
        parseResponse(client.emotion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLanguageDetectionKey() {
  return ['language-detection', '/language-detection', 'POST'] as const
}

export function usePostLanguageDetection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['language-detection']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['language-detection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLanguageDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['language-detection']['$post']> },
      ) => parseResponse(client['language-detection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPersonalityKey() {
  return ['personality', '/personality', 'POST'] as const
}

export function usePostPersonality<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personality.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.personality.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPersonalityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.personality.$post> }) =>
        parseResponse(client.personality.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSentimentKey() {
  return ['sentiment', '/sentiment', 'POST'] as const
}

export function usePostSentiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentiment.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sentiment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSentimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sentiment.$post> }) =>
        parseResponse(client.sentiment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTopicSentimentKey() {
  return ['topic-sentiment', '/topic-sentiment', 'POST'] as const
}

export function usePostTopicSentiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['topic-sentiment']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['topic-sentiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTopicSentimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['topic-sentiment']['$post']> },
      ) => parseResponse(client['topic-sentiment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
