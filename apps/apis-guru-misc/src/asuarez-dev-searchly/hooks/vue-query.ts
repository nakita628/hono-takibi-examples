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

export function usePostSimilarityByContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_content.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.similarity.by_content.$post>,
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
  const mutationDefaults = getPostSimilarityByContentMutationOptions<TError, TOnMutateResult>(
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

export function getSimilarityBySongQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similarity.by_song.$get>>,
) {
  return ['similarity', '/similarity/by_song', toValue(args)] as const
}

export function getSimilarityBySongQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similarity.by_song.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimilarityBySongQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.similarity.by_song.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSimilarityBySong<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similarity.by_song.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>
            >
          >,
          ReturnType<typeof getSimilarityBySongQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSimilarityBySongQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimilarityBySongQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.similarity.by_song.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSongSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.song.search.$get>>,
) {
  return ['song', '/song/search', toValue(args)] as const
}

export function getSongSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.song.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSongSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.song.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSongSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.song.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>
          >,
          ReturnType<typeof getSongSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSongSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSongSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.song.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
