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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['contentpro-search']['$get']>>,
) {
  return ['contentpro-search', '/contentpro-search', toValue(args)] as const
}

export function getContentproSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['contentpro-search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentproSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['contentpro-search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentproSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contentpro-search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['contentpro-search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['contentpro-search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['contentpro-search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContentproSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contentpro-search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentproSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentproSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['contentpro-search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostContentproSimilarText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContentproSimilarTextMutationOptions<TError, TOnMutateResult>(
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

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  return ['search', '/search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similar.$get>>,
) {
  return ['similar', '/similar', toValue(args)] as const
}

export function getSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.similar.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSimilar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
          >,
          ReturnType<typeof getSimilarQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
