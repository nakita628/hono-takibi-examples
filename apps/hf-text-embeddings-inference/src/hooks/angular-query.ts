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

export function getDecodeKey() {
  return ['decode'] as const
}

export function getEmbedKey() {
  return ['embed'] as const
}

export function getEmbedAllKey() {
  return ['embed_all'] as const
}

export function getEmbedSparseKey() {
  return ['embed_sparse'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getPredictKey() {
  return ['predict'] as const
}

export function getRerankKey() {
  return ['rerank'] as const
}

export function getSimilarityKey() {
  return ['similarity'] as const
}

export function getTokenizeKey() {
  return ['tokenize'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getPostDecodeMutationKey() {
  return ['decode', '/decode', 'POST'] as const
}

export function getPostDecodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.decode.$post>>>>>,
    TError,
    InferRequestType<typeof client.decode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDecodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.decode.$post>) {
      return parseResponse(client.decode.$post(args, options))
    },
  })
}

export function injectPostDecode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.decode.$post>>>>>,
        TError,
        InferRequestType<typeof client.decode.$post>,
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
    const mutationDefaults = getPostDecodeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEmbedMutationKey() {
  return ['embed', '/embed', 'POST'] as const
}

export function getPostEmbedMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.embed.$post>>>>>,
    TError,
    InferRequestType<typeof client.embed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmbedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.embed.$post>) {
      return parseResponse(client.embed.$post(args, options))
    },
  })
}

export function injectPostEmbed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.embed.$post>>>>>,
        TError,
        InferRequestType<typeof client.embed.$post>,
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
    const mutationDefaults = getPostEmbedMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEmbedAllMutationKey() {
  return ['embed_all', '/embed_all', 'POST'] as const
}

export function getPostEmbedAllMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.embed_all.$post>>>>>,
    TError,
    InferRequestType<typeof client.embed_all.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmbedAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.embed_all.$post>) {
      return parseResponse(client.embed_all.$post(args, options))
    },
  })
}

export function injectPostEmbedAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.embed_all.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.embed_all.$post>,
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
    const mutationDefaults = getPostEmbedAllMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEmbedSparseMutationKey() {
  return ['embed_sparse', '/embed_sparse', 'POST'] as const
}

export function getPostEmbedSparseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.embed_sparse.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.embed_sparse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmbedSparseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.embed_sparse.$post>) {
      return parseResponse(client.embed_sparse.$post(args, options))
    },
  })
}

export function injectPostEmbedSparse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.embed_sparse.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.embed_sparse.$post>,
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
    const mutationDefaults = getPostEmbedSparseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectHealth<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectInfo<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectMetrics<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostPredictMutationKey() {
  return ['predict', '/predict', 'POST'] as const
}

export function getPostPredictMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$post>>>>>,
    TError,
    InferRequestType<typeof client.predict.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPredictMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.predict.$post>) {
      return parseResponse(client.predict.$post(args, options))
    },
  })
}

export function injectPostPredict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$post>>>>>,
        TError,
        InferRequestType<typeof client.predict.$post>,
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
    const mutationDefaults = getPostPredictMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRerankMutationKey() {
  return ['rerank', '/rerank', 'POST'] as const
}

export function getPostRerankMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rerank.$post>>>>>,
    TError,
    InferRequestType<typeof client.rerank.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRerankMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rerank.$post>) {
      return parseResponse(client.rerank.$post(args, options))
    },
  })
}

export function injectPostRerank<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rerank.$post>>>>>,
        TError,
        InferRequestType<typeof client.rerank.$post>,
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
    const mutationDefaults = getPostRerankMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSimilarityMutationKey() {
  return ['similarity', '/similarity', 'POST'] as const
}

export function getPostSimilarityMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.$post>>>>>,
    TError,
    InferRequestType<typeof client.similarity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimilarityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.similarity.$post>) {
      return parseResponse(client.similarity.$post(args, options))
    },
  })
}

export function injectPostSimilarity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.similarity.$post>,
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
    const mutationDefaults = getPostSimilarityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTokenize<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTokenizeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1EmbeddingsMutationKey() {
  return ['v1', '/v1/embeddings', 'POST'] as const
}

export function getPostV1EmbeddingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embeddings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.embeddings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmbeddingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.embeddings.$post>) {
      return parseResponse(client.v1.embeddings.$post(args, options))
    },
  })
}

export function injectPostV1Embeddings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embeddings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.embeddings.$post>,
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
    const mutationDefaults = getPostV1EmbeddingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
