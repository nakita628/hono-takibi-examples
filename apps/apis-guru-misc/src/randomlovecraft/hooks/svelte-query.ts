import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createBooks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBooksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createBooksIdSentences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.books)[':id']['sentences']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.books)[':id']['sentences']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBooksIdSentencesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createSentences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sentences.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSentencesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createSentencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sentences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sentences)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSentencesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
