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

export function getApiKey() {
  return ['api'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getApiV1ChaptersQueryKey(
  args: InferRequestType<typeof client.api.v1.chapters.$get>,
) {
  return ['api', '/api/v1/chapters', args] as const
}

export function getApiV1ChaptersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.chapters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChaptersQueryKey>
  >({
    queryKey: getApiV1ChaptersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chapters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Chapters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.chapters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChaptersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChaptersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1ChaptersChapterNumberQueryKey(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>,
) {
  return ['api', '/api/v1/chapters/:chapter_number', args] as const
}

export function getApiV1ChaptersChapterNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChaptersChapterNumberQueryKey>
  >({
    queryKey: getApiV1ChaptersChapterNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chapters[':chapter_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChaptersChapterNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChaptersChapterNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ChaptersChapterNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ChaptersChapterNumberVersesQueryKey(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>,
) {
  return ['api', '/api/v1/chapters/:chapter_number/verses', args] as const
}

export function getApiV1ChaptersChapterNumberVersesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChaptersChapterNumberVersesQueryKey>
  >({
    queryKey: getApiV1ChaptersChapterNumberVersesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chapters[':chapter_number'].verses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChaptersChapterNumberVerses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChaptersChapterNumberVersesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ChaptersChapterNumberVersesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ChaptersChapterNumberVersesVerseNumberQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
  >,
) {
  return ['api', '/api/v1/chapters/:chapter_number/verses/:verse_number', args] as const
}

export function getApiV1ChaptersChapterNumberVersesVerseNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChaptersChapterNumberVersesVerseNumberQueryKey>
  >({
    queryKey: getApiV1ChaptersChapterNumberVersesVerseNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chapters[':chapter_number'].verses[':verse_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChaptersChapterNumberVersesVerseNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChaptersChapterNumberVersesVerseNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ChaptersChapterNumberVersesVerseNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1VersesQueryKey(args: InferRequestType<typeof client.api.v1.verses.$get>) {
  return ['api', '/api/v1/verses', args] as const
}

export function getApiV1VersesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.verses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VersesQueryKey>
  >({
    queryKey: getApiV1VersesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.verses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Verses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.verses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1VersesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VersesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAuthOauthTokenMutationKey() {
  return ['auth', '/auth/oauth/token', 'POST'] as const
}

export function getPostAuthOauthTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthOauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.oauth.token.$post>) {
      return parseResponse(client.auth.oauth.token.$post(args, options))
    },
  })
}

export function injectPostAuthOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.oauth.token.$post>,
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
    const mutationDefaults = getPostAuthOauthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
