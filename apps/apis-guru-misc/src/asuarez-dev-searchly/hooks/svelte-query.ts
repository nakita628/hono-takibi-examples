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

export function getSimilarityKey() {
  return ['similarity'] as const
}

export function getSongKey() {
  return ['song'] as const
}

export function getPostSimilarityByContentMutationKey() {
  return ['similarity', '/similarity/by_content', 'POST'] as const
}

export function getPostSimilarityByContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_content.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.similarity.by_content.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimilarityByContentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.similarity.by_content.$post>) {
      return parseResponse(client.similarity.by_content.$post(args, options))
    },
  })
}

export function createPostSimilarityByContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_content.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.similarity.by_content.$post>,
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
    const mutationDefaults = getPostSimilarityByContentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSimilarityBySongQueryKey(
  args: InferRequestType<typeof client.similarity.by_song.$get>,
) {
  return ['similarity', '/similarity/by_song', args] as const
}

export function getSimilarityBySongQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.similarity.by_song.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSimilarityBySongQueryKey>
  >({
    queryKey: getSimilarityBySongQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.similarity.by_song.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSimilarityBySong<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.similarity.by_song.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSimilarityBySongQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSimilarityBySongQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSongSearchQueryKey(args: InferRequestType<typeof client.song.search.$get>) {
  return ['song', '/song/search', args] as const
}

export function getSongSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.song.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSongSearchQueryKey>
  >({
    queryKey: getSongSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.song.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSongSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.song.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSongSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSongSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
