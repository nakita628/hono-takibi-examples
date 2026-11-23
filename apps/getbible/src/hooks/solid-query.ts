import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createTranslationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['translations.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTranslationsJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTranslationsJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createTranslationsTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTranslationsTxtQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTranslationsTxtQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createTranslationsSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTranslationsShaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTranslationsShaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createChecksumJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChecksumJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksumJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createChecksumTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChecksumTxtQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksumTxtQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createChecksumSha<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChecksumShaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksumShaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createAbbreviationJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAbbreviationJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAbbreviationJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createAbbreviationSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation.sha']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAbbreviationShaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAbbreviationShaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createAbbreviationBooksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBooksJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBooksTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBooksTxtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBooksSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBooksShaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationChecksumJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationChecksumJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationChecksumTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationChecksumTxtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationChecksumSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationChecksumShaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBookJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBookJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBookSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAbbreviationBookShaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createAbbreviationBookChaptersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBookChaptersJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBookChaptersTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAbbreviationBookChaptersTxtQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBookChaptersTxtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBookChaptersSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAbbreviationBookChaptersShaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBookChaptersShaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBookChecksumJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBookChecksumJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBookChecksumTxt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAbbreviationBookChecksumTxtQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBookChecksumTxtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBookChecksumSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAbbreviationBookChecksumShaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBookChecksumShaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBookChapterJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBookChapterJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAbbreviationBookChapterSha<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAbbreviationBookChapterShaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAbbreviationBookChapterShaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOpenapiJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createOpenapiSha<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOpenapiShaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenapiShaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
