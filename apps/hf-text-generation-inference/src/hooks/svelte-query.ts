import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChatTokenizeKey() {
  return ['chat_tokenize'] as const
}

export function getGenerateKey() {
  return ['generate'] as const
}

export function getGenerateStreamKey() {
  return ['generate_stream'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getInvocationsKey() {
  return ['invocations'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getTokenizeKey() {
  return ['tokenize'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getPostMutationKey() {
  return ['', '/', 'POST'] as const
}

export function getPostMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.index.$post>) {
      return parseResponse(client.index.$post(args, options))
    },
  })
}

export function createPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
        TError,
        InferRequestType<typeof client.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChatTokenizeMutationKey() {
  return ['chat_tokenize', '/chat_tokenize', 'POST'] as const
}

export function getPostChatTokenizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat_tokenize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chat_tokenize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatTokenizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat_tokenize.$post>) {
      return parseResponse(client.chat_tokenize.$post(args, options))
    },
  })
}

export function createPostChatTokenize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat_tokenize.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.chat_tokenize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatTokenizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGenerateMutationKey() {
  return ['generate', '/generate', 'POST'] as const
}

export function getPostGenerateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.$post>>>>>,
    TError,
    InferRequestType<typeof client.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenerateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.generate.$post>) {
      return parseResponse(client.generate.$post(args, options))
    },
  })
}

export function createPostGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.generate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGenerateMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGenerateStreamMutationKey() {
  return ['generate_stream', '/generate_stream', 'POST'] as const
}

export function getPostGenerateStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate_stream.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.generate_stream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenerateStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.generate_stream.$post>) {
      return parseResponse(client.generate_stream.$post(args, options))
    },
  })
}

export function createPostGenerateStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate_stream.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.generate_stream.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGenerateStreamMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getInfoQueryKey() {
  return ['info', '/info'] as const
}

export function getInfoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoQueryKey>
  >({
    queryKey: getInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostInvocationsMutationKey() {
  return ['invocations', '/invocations', 'POST'] as const
}

export function getPostInvocationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invocations.$post>>>>>,
    TError,
    InferRequestType<typeof client.invocations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invocations.$post>) {
      return parseResponse(client.invocations.$post(args, options))
    },
  })
}

export function createPostInvocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invocations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.invocations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostTokenizeMutationKey() {
  return ['tokenize', '/tokenize', 'POST'] as const
}

export function getPostTokenizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokenize.$post>>>>>,
    TError,
    InferRequestType<typeof client.tokenize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTokenizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tokenize.$post>) {
      return parseResponse(client.tokenize.$post(args, options))
    },
  })
}

export function createPostTokenize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokenize.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tokenize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTokenizeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ChatCompletionsMutationKey() {
  return ['v1', '/v1/chat/completions', 'POST'] as const
}

export function getPostV1ChatCompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.completions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.chat.completions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChatCompletionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.chat.completions.$post>) {
      return parseResponse(client.v1.chat.completions.$post(args, options))
    },
  })
}

export function createPostV1ChatCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.completions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.chat.completions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ChatCompletionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CompletionsMutationKey() {
  return ['v1', '/v1/completions', 'POST'] as const
}

export function getPostV1CompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.completions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.completions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CompletionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.completions.$post>) {
      return parseResponse(client.v1.completions.$post(args, options))
    },
  })
}

export function createPostV1Completions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.completions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.completions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CompletionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ModelsQueryKey() {
  return ['v1', '/v1/models'] as const
}

export function getV1ModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ModelsQueryKey>
  >({
    queryKey: getV1ModelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.models.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Models<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ModelsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
