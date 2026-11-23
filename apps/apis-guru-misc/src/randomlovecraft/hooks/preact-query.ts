import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getBooksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBooksQueryKey>
  >({
    queryKey: getBooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.books.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBooks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBooksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBooks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBooksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBooksIdSentencesQueryKey(
  args: InferRequestType<(typeof client.books)[':id']['sentences']['$get']>,
) {
  return ['books', '/books/:id/sentences', args] as const
}

export function getBooksIdSentencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.books)[':id']['sentences']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books)[':id']['sentences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.books)[':id']['sentences']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksIdSentencesQueryKey>
  >({
    queryKey: getBooksIdSentencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books[':id'].sentences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksIdSentences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.books)[':id']['sentences']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books)[':id']['sentences']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBooksIdSentencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBooksIdSentencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBooksIdSentences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.books)[':id']['sentences']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books)[':id']['sentences']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.books)[':id']['sentences']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksIdSentencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBooksIdSentencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSentencesQueryKey(args: InferRequestType<typeof client.sentences.$get>) {
  return ['sentences', '/sentences', args] as const
}

export function getSentencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sentences.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSentencesQueryKey>
  >({
    queryKey: getSentencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sentences.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSentences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sentences.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSentencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSentencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSentences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sentences.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSentencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSentencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSentencesIdQueryKey(
  args: InferRequestType<(typeof client.sentences)[':id']['$get']>,
) {
  return ['sentences', '/sentences/:id', args] as const
}

export function getSentencesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sentences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentencesIdQueryKey>
  >({
    queryKey: getSentencesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sentences[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSentencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sentences)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSentencesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSentencesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSentencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sentences)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSentencesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSentencesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
