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

export function getContentproSearchKey() {
  return ['contentpro-search'] as const
}

export function getContentproSimilarTextKey() {
  return ['contentpro-similar-text'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSimilarKey() {
  return ['similar'] as const
}

export function getContentproSearchQueryKey(
  args: InferRequestType<(typeof client)['contentpro-search']['$get']>,
) {
  return ['contentpro-search', '/contentpro-search', args] as const
}

export function getContentproSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contentpro-search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contentpro-search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contentpro-search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentproSearchQueryKey>
  >({
    queryKey: getContentproSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['contentpro-search'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContentproSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contentpro-search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['contentpro-search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['contentpro-search']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentproSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContentproSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostContentproSimilarTextMutationKey() {
  return ['contentpro-similar-text', '/contentpro-similar-text', 'POST'] as const
}

export function getPostContentproSimilarTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contentpro-similar-text']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['contentpro-similar-text']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContentproSimilarTextMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['contentpro-similar-text']['$post']>) {
      return parseResponse(client['contentpro-similar-text'].$post(args, options))
    },
  })
}

export function createPostContentproSimilarText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['contentpro-similar-text']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['contentpro-similar-text']['$post']>,
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
    const mutationDefaults = getPostContentproSimilarTextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSimilarQueryKey(args: InferRequestType<typeof client.similar.$get>) {
  return ['similar', '/similar', args] as const
}

export function getSimilarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.similar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimilarQueryKey>
  >({
    queryKey: getSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.similar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSimilar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.similar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
