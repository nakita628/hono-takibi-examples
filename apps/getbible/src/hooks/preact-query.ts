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

export function getTranslationsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTranslationsJsonQueryKey>
  >({
    queryKey: getTranslationsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['translations.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTranslationsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTranslationsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTranslationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTranslationsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTranslationsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTranslationsTxtQueryKey() {
  return ['translations.txt', '/translations.txt'] as const
}

export function getTranslationsTxtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTranslationsTxtQueryKey>
  >({
    queryKey: getTranslationsTxtQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['translations.txt'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTranslationsTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTranslationsTxtQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTranslationsTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTranslationsTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTranslationsTxtQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTranslationsShaQueryKey() {
  return ['translations.sha', '/translations.sha'] as const
}

export function getTranslationsShaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTranslationsShaQueryKey>
  >({
    queryKey: getTranslationsShaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['translations.sha'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTranslationsShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTranslationsShaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTranslationsSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTranslationsShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTranslationsShaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChecksumJsonQueryKey() {
  return ['checksum.json', '/checksum.json'] as const
}

export function getChecksumJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecksumJsonQueryKey>
  >({
    queryKey: getChecksumJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['checksum.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChecksumJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecksumJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChecksumJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChecksumJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecksumJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChecksumJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChecksumTxtQueryKey() {
  return ['checksum.txt', '/checksum.txt'] as const
}

export function getChecksumTxtQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChecksumTxtQueryKey>
  >({
    queryKey: getChecksumTxtQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['checksum.txt'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChecksumTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecksumTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChecksumTxtQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChecksumTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecksumTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChecksumTxtQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChecksumShaQueryKey() {
  return ['checksum.sha', '/checksum.sha'] as const
}

export function getChecksumShaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChecksumShaQueryKey>
  >({
    queryKey: getChecksumShaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['checksum.sha'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChecksumSha<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecksumShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChecksumShaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChecksumSha<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecksumShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChecksumShaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAbbreviationJsonQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation.json']['$get']>,
) {
  return [':abbreviation.json', '/:abbreviation.json', args] as const
}

export function getAbbreviationJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationJsonQueryKey>
  >({
    queryKey: getAbbreviationJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAbbreviationJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAbbreviationJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAbbreviationJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAbbreviationJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAbbreviationJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAbbreviationJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAbbreviationShaQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation.sha']['$get']>,
) {
  return [':abbreviation.sha', '/:abbreviation.sha', args] as const
}

export function getAbbreviationShaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbbreviationShaQueryKey>
  >({
    queryKey: getAbbreviationShaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation.sha'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAbbreviationSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation.sha']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAbbreviationShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAbbreviationShaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAbbreviationSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation.sha']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAbbreviationShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAbbreviationShaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAbbreviationBooksJsonQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/books.json', args] as const
}

export function getAbbreviationBooksJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBooksJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation']['books.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationBooksJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationBooksJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationBooksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationBooksJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationBooksTxtQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/books.txt', args] as const
}

export function getAbbreviationBooksTxtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBooksTxtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation']['books.txt'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationBooksTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAbbreviationBooksTxtQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAbbreviationBooksTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAbbreviationBooksTxtQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAbbreviationBooksShaQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/books.sha', args] as const
}

export function getAbbreviationBooksShaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBooksShaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation']['books.sha'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationBooksShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAbbreviationBooksShaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAbbreviationBooksSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAbbreviationBooksShaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAbbreviationChecksumJsonQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/checksum.json', args] as const
}

export function getAbbreviationChecksumJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationChecksumJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation']['checksum.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationChecksumJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationChecksumJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationChecksumJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationChecksumJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationChecksumTxtQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/checksum.txt', args] as const
}

export function getAbbreviationChecksumTxtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationChecksumTxtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation']['checksum.txt'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationChecksumTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationChecksumTxtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationChecksumTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationChecksumTxtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationChecksumShaQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/checksum.sha', args] as const
}

export function getAbbreviationChecksumShaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationChecksumShaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation']['checksum.sha'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationChecksumShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationChecksumShaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationChecksumSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationChecksumShaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationBookJsonQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book.json', args] as const
}

export function getAbbreviationBookJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBookJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation'][':book.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationBookJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAbbreviationBookJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAbbreviationBookJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAbbreviationBookJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAbbreviationBookShaQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book.sha', args] as const
}

export function getAbbreviationBookShaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBookShaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation'][':book.sha'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationBookShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAbbreviationBookShaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAbbreviationBookSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAbbreviationBookShaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAbbreviationBookChaptersJsonQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/chapters.json', args] as const
}

export function getAbbreviationBookChaptersJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBookChaptersJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation'][':book']['chapters.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationBookChaptersJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationBookChaptersJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationBookChaptersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getAbbreviationBookChaptersJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationBookChaptersJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationBookChaptersTxtQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/chapters.txt', args] as const
}

export function getAbbreviationBookChaptersTxtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBookChaptersTxtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation'][':book']['chapters.txt'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationBookChaptersTxtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationBookChaptersTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationBookChaptersTxtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationBookChaptersShaQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/chapters.sha', args] as const
}

export function getAbbreviationBookChaptersShaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBookChaptersShaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation'][':book']['chapters.sha'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationBookChaptersShaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationBookChaptersSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationBookChaptersShaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationBookChecksumJsonQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/checksum.json', args] as const
}

export function getAbbreviationBookChecksumJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBookChecksumJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation'][':book']['checksum.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationBookChecksumJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationBookChecksumJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationBookChecksumJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getAbbreviationBookChecksumJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationBookChecksumJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationBookChecksumTxtQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/checksum.txt', args] as const
}

export function getAbbreviationBookChecksumTxtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBookChecksumTxtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation'][':book']['checksum.txt'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationBookChecksumTxtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationBookChecksumTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationBookChecksumTxtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationBookChecksumShaQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/checksum.sha', args] as const
}

export function getAbbreviationBookChecksumShaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBookChecksumShaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation'][':book']['checksum.sha'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationBookChecksumShaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationBookChecksumSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationBookChecksumShaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationBookChapterJsonQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/:chapter.json', args] as const
}

export function getAbbreviationBookChapterJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBookChapterJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation'][':book'][':chapter.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAbbreviationBookChapterJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationBookChapterJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationBookChapterJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getAbbreviationBookChapterJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationBookChapterJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAbbreviationBookChapterShaQueryKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/:chapter.sha', args] as const
}

export function getAbbreviationBookChapterShaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbbreviationBookChapterShaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':abbreviation'][':book'][':chapter.sha'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAbbreviationBookChapterShaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAbbreviationBookChapterSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAbbreviationBookChapterShaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOpenapiJsonQueryKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function getOpenapiJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >({
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOpenapiShaQueryKey() {
  return ['openapi.sha', '/openapi.sha'] as const
}

export function getOpenapiShaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiShaQueryKey>
  >({
    queryKey: getOpenapiShaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['openapi.sha'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenapiSha<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenapiShaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenapiSha<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiShaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenapiShaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
