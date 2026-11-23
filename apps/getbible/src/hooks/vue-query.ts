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

export function getChecksumJsonKey() {
  return ['checksum.json'] as const
}

export function getChecksumShaKey() {
  return ['checksum.sha'] as const
}

export function getChecksumTxtKey() {
  return ['checksum.txt'] as const
}

export function getOpenapiJsonKey() {
  return ['openapi.json'] as const
}

export function getOpenapiShaKey() {
  return ['openapi.sha'] as const
}

export function getTranslationsJsonKey() {
  return ['translations.json'] as const
}

export function getTranslationsShaKey() {
  return ['translations.sha'] as const
}

export function getTranslationsTxtKey() {
  return ['translations.txt'] as const
}

export function getAbbreviationKey() {
  return ['{abbreviation}'] as const
}

export function getAbbreviationJsonKey() {
  return ['{abbreviation}.json'] as const
}

export function getAbbreviationShaKey() {
  return ['{abbreviation}.sha'] as const
}

export function getTranslationsJsonQueryKey() {
  return ['translations.json', '/translations.json'] as const
}

export function getTranslationsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTranslationsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['translations.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTranslationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['translations.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['translations.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTranslationsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTranslationsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTranslationsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['translations.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTranslationsTxtQueryKey() {
  return ['translations.txt', '/translations.txt'] as const
}

export function getTranslationsTxtQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTranslationsTxtQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['translations.txt'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTranslationsTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
            >
          >,
          ReturnType<typeof getTranslationsTxtQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTranslationsTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTranslationsTxtQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['translations.txt'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTranslationsShaQueryKey() {
  return ['translations.sha', '/translations.sha'] as const
}

export function getTranslationsShaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTranslationsShaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['translations.sha'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTranslationsSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
            >
          >,
          ReturnType<typeof getTranslationsShaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTranslationsShaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTranslationsShaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['translations.sha'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChecksumJsonQueryKey() {
  return ['checksum.json', '/checksum.json'] as const
}

export function getChecksumJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChecksumJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['checksum.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChecksumJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
            >
          >,
          ReturnType<typeof getChecksumJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecksumJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChecksumJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['checksum.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChecksumTxtQueryKey() {
  return ['checksum.txt', '/checksum.txt'] as const
}

export function getChecksumTxtQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChecksumTxtQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['checksum.txt'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChecksumTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>
            >
          >,
          ReturnType<typeof getChecksumTxtQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChecksumTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChecksumTxtQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['checksum.txt'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChecksumShaQueryKey() {
  return ['checksum.sha', '/checksum.sha'] as const
}

export function getChecksumShaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChecksumShaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['checksum.sha'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChecksumSha<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>
            >
          >,
          ReturnType<typeof getChecksumShaQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChecksumShaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChecksumShaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['checksum.sha'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation.json']['$get']>>,
) {
  return [':abbreviation.json', '/:abbreviation.json', toValue(args)] as const
}

export function getAbbreviationJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbbreviationJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationShaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation.sha']['$get']>>,
) {
  return [':abbreviation.sha', '/:abbreviation.sha', toValue(args)] as const
}

export function getAbbreviationShaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation.sha']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationShaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation.sha'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation.sha']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbbreviationShaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationShaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationShaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation.sha'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBooksJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>>,
) {
  return [':abbreviation', '/:abbreviation/books.json', toValue(args)] as const
}

export function getAbbreviationBooksJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBooksJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation']['books.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBooksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbbreviationBooksJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBooksJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBooksJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation']['books.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBooksTxtQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>>,
) {
  return [':abbreviation', '/:abbreviation/books.txt', toValue(args)] as const
}

export function getAbbreviationBooksTxtQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBooksTxtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation']['books.txt'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBooksTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbbreviationBooksTxtQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBooksTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBooksTxtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation']['books.txt'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBooksShaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>>,
) {
  return [':abbreviation', '/:abbreviation/books.sha', toValue(args)] as const
}

export function getAbbreviationBooksShaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBooksShaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation']['books.sha'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBooksSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbbreviationBooksShaQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBooksShaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBooksShaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation']['books.sha'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationChecksumJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/checksum.json', toValue(args)] as const
}

export function getAbbreviationChecksumJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationChecksumJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation']['checksum.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationChecksumJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbbreviationChecksumJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationChecksumJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationChecksumJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation']['checksum.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationChecksumTxtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/checksum.txt', toValue(args)] as const
}

export function getAbbreviationChecksumTxtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationChecksumTxtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation']['checksum.txt'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationChecksumTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbbreviationChecksumTxtQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationChecksumTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationChecksumTxtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation']['checksum.txt'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationChecksumShaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/checksum.sha', toValue(args)] as const
}

export function getAbbreviationChecksumShaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationChecksumShaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation']['checksum.sha'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationChecksumSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbbreviationChecksumShaQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationChecksumShaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationChecksumShaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation']['checksum.sha'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBookJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>>,
) {
  return [':abbreviation', '/:abbreviation/:book.json', toValue(args)] as const
}

export function getAbbreviationBookJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBookJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation'][':book.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBookJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbbreviationBookJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBookJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBookJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation'][':book.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBookShaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>>,
) {
  return [':abbreviation', '/:abbreviation/:book.sha', toValue(args)] as const
}

export function getAbbreviationBookShaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBookShaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation'][':book.sha'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBookSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbbreviationBookShaQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBookShaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBookShaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation'][':book.sha'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBookChaptersJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/:book/chapters.json', toValue(args)] as const
}

export function getAbbreviationBookChaptersJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBookChaptersJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation'][':book']['chapters.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBookChaptersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>
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
                  ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAbbreviationBookChaptersJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBookChaptersJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBookChaptersJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation'][':book']['chapters.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBookChaptersTxtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/:book/chapters.txt', toValue(args)] as const
}

export function getAbbreviationBookChaptersTxtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBookChaptersTxtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation'][':book']['chapters.txt'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBookChaptersTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>
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
                  ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAbbreviationBookChaptersTxtQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBookChaptersTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBookChaptersTxtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation'][':book']['chapters.txt'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBookChaptersShaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/:book/chapters.sha', toValue(args)] as const
}

export function getAbbreviationBookChaptersShaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBookChaptersShaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation'][':book']['chapters.sha'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBookChaptersSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>
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
                  ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAbbreviationBookChaptersShaQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBookChaptersShaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBookChaptersShaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation'][':book']['chapters.sha'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBookChecksumJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/:book/checksum.json', toValue(args)] as const
}

export function getAbbreviationBookChecksumJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBookChecksumJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation'][':book']['checksum.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBookChecksumJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>
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
                  ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAbbreviationBookChecksumJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBookChecksumJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBookChecksumJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation'][':book']['checksum.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBookChecksumTxtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/:book/checksum.txt', toValue(args)] as const
}

export function getAbbreviationBookChecksumTxtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBookChecksumTxtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation'][':book']['checksum.txt'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBookChecksumTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>
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
                  ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAbbreviationBookChecksumTxtQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBookChecksumTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBookChecksumTxtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation'][':book']['checksum.txt'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBookChecksumShaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/:book/checksum.sha', toValue(args)] as const
}

export function getAbbreviationBookChecksumShaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBookChecksumShaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation'][':book']['checksum.sha'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBookChecksumSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>
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
                  ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAbbreviationBookChecksumShaQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBookChecksumShaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBookChecksumShaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation'][':book']['checksum.sha'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBookChapterJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/:book/:chapter.json', toValue(args)] as const
}

export function getAbbreviationBookChapterJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBookChapterJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation'][':book'][':chapter.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBookChapterJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>
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
                  ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAbbreviationBookChapterJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBookChapterJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBookChapterJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation'][':book'][':chapter.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAbbreviationBookChapterShaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>
  >,
) {
  return [':abbreviation', '/:abbreviation/:book/:chapter.sha', toValue(args)] as const
}

export function getAbbreviationBookChapterShaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbbreviationBookChapterShaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':abbreviation'][':book'][':chapter.sha'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbbreviationBookChapterSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>
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
                  ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAbbreviationBookChapterShaQueryKey>
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
          Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationBookChapterShaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbbreviationBookChapterShaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':abbreviation'][':book'][':chapter.sha'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenapiJsonQueryKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function getOpenapiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          ReturnType<typeof getOpenapiJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['openapi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenapiShaQueryKey() {
  return ['openapi.sha', '/openapi.sha'] as const
}

export function getOpenapiShaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiShaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['openapi.sha'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapiSha<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>
            >
          >,
          ReturnType<typeof getOpenapiShaQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiShaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiShaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['openapi.sha'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
