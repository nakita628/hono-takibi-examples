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

export function getApiKey() {
  return ['api'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getApiV1ChaptersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chapters.$get>>,
) {
  return ['api', '/api/v1/chapters', toValue(args)] as const
}

export function getApiV1ChaptersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chapters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChaptersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chapters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Chapters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chapters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ChaptersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChaptersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChaptersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chapters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChaptersChapterNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>
  >,
) {
  return ['api', '/api/v1/chapters/:chapter_number', toValue(args)] as const
}

export function getApiV1ChaptersChapterNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChaptersChapterNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chapters[':chapter_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChaptersChapterNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChaptersChapterNumberQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChaptersChapterNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChaptersChapterNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chapters[':chapter_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChaptersChapterNumberVersesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>
  >,
) {
  return ['api', '/api/v1/chapters/:chapter_number/verses', toValue(args)] as const
}

export function getApiV1ChaptersChapterNumberVersesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChaptersChapterNumberVersesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chapters[':chapter_number'].verses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChaptersChapterNumberVerses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ChaptersChapterNumberVersesQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChaptersChapterNumberVersesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChaptersChapterNumberVersesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chapters[':chapter_number'].verses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChaptersChapterNumberVersesVerseNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
    >
  >,
) {
  return ['api', '/api/v1/chapters/:chapter_number/verses/:verse_number', toValue(args)] as const
}

export function getApiV1ChaptersChapterNumberVersesVerseNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChaptersChapterNumberVersesVerseNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chapters[':chapter_number'].verses[':verse_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChaptersChapterNumberVersesVerseNumber<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1ChaptersChapterNumberVersesVerseNumberQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChaptersChapterNumberVersesVerseNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chapters[':chapter_number'].verses[':verse_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VersesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verses.$get>>,
) {
  return ['api', '/api/v1/verses', toValue(args)] as const
}

export function getApiV1VersesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VersesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.verses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Verses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
          >,
          ReturnType<typeof getApiV1VersesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VersesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VersesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.verses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAuthOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.auth.oauth.token.$post>,
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
  const mutationDefaults = getPostAuthOauthTokenMutationOptions<TError, TOnMutateResult>(
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
