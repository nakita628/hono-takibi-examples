import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBooksKey() {
  return ['books'] as const
}

export function getSentencesKey() {
  return ['sentences'] as const
}

export function getBooksQueryKey() {
  return ['books', '/books'] as const
}

export function getBooksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBooksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBooks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
          ReturnType<typeof getBooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBooksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.books.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksIdSentencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.books)[':id']['sentences']['$get']>>,
) {
  return ['books', '/books/:id/sentences', toValue(args)] as const
}

export function getBooksIdSentencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.books)[':id']['sentences']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksIdSentencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books[':id'].sentences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksIdSentences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.books)[':id']['sentences']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.books)[':id']['sentences']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.books)[':id']['sentences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.books)[':id']['sentences']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBooksIdSentencesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.books)[':id']['sentences']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksIdSentencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksIdSentencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books[':id'].sentences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSentencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sentences.$get>>,
) {
  return ['sentences', '/sentences', toValue(args)] as const
}

export function getSentencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sentences.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSentencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sentences.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSentences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sentences.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>
          >,
          ReturnType<typeof getSentencesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSentencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSentencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sentences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSentencesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sentences)[':id']['$get']>>,
) {
  return ['sentences', '/sentences/:id', toValue(args)] as const
}

export function getSentencesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sentences)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSentencesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sentences[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSentencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sentences)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSentencesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentencesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSentencesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sentences[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
