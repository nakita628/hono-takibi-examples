import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDomainsKey() {
  return ['domains'] as const
}

export function getEntriesKey() {
  return ['entries'] as const
}

export function getFiltersKey() {
  return ['filters'] as const
}

export function getGrammaticalFeaturesKey() {
  return ['grammaticalFeatures'] as const
}

export function getInflectionsKey() {
  return ['inflections'] as const
}

export function getLanguagesKey() {
  return ['languages'] as const
}

export function getLexicalcategoriesKey() {
  return ['lexicalcategories'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getRegistersKey() {
  return ['registers'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getWordlistKey() {
  return ['wordlist'] as const
}

export function getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryKey(
  args: InferRequestType<
    (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:source_domains_language/:target_domains_language', keyArgs] as const
}

export function getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryKey>
  >({
    queryKey: getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':source_domains_language'][':target_domains_language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsSourceDomainsLanguageTargetDomainsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryKey>
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
      ...getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDomainsSourceLanguageQueryKey(
  args: InferRequestType<(typeof client.domains)[':source_language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:source_language', keyArgs] as const
}

export function getDomainsSourceLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':source_language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsSourceLanguageQueryKey>
  >({
    queryKey: getDomainsSourceLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':source_language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsSourceLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains)[':source_language']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsSourceLanguageQueryKey>
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
      ...getDomainsSourceLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntriesSourceLanguageWordIdSentencesQueryKey(
  args: InferRequestType<
    (typeof client.entries)[':source_language'][':word_id']['sentences']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_language/:word_id/sentences', keyArgs] as const
}

export function getEntriesSourceLanguageWordIdSentencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.entries)[':source_language'][':word_id']['sentences']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.entries)[':source_language'][':word_id']['sentences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.entries)[':source_language'][':word_id']['sentences']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLanguageWordIdSentencesQueryKey>
  >({
    queryKey: getEntriesSourceLanguageWordIdSentencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entries[':source_language'][':word_id'].sentences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntriesSourceLanguageWordIdSentences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.entries)[':source_language'][':word_id']['sentences']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.entries)[':source_language'][':word_id']['sentences']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.entries)[':source_language'][':word_id']['sentences']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntriesSourceLanguageWordIdSentencesQueryKey>
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
      ...getEntriesSourceLanguageWordIdSentencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntriesSourceLangWordIdQueryKey(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id', keyArgs] as const
}

export function getEntriesSourceLangWordIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdQueryKey>
  >({
    queryKey: getEntriesSourceLangWordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entries[':source_lang'][':word_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntriesSourceLangWordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntriesSourceLangWordIdQueryKey>
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
      ...getEntriesSourceLangWordIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntriesSourceLangWordIdAntonymsQueryKey(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id/antonyms', keyArgs] as const
}

export function getEntriesSourceLangWordIdAntonymsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdAntonymsQueryKey>
  >({
    queryKey: getEntriesSourceLangWordIdAntonymsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entries[':source_lang'][':word_id'].antonyms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntriesSourceLangWordIdAntonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntriesSourceLangWordIdAntonymsQueryKey>
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
      ...getEntriesSourceLangWordIdAntonymsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntriesSourceLangWordIdRegionsRegionQueryKey(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['regions={region}']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id/regions={region}', keyArgs] as const
}

export function getEntriesSourceLangWordIdRegionsRegionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.entries)[':source_lang'][':word_id']['regions={region}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['regions={region}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.entries)[':source_lang'][':word_id']['regions={region}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdRegionsRegionQueryKey>
  >({
    queryKey: getEntriesSourceLangWordIdRegionsRegionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entries[':source_lang'][':word_id']['regions={region}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntriesSourceLangWordIdRegionsRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.entries)[':source_lang'][':word_id']['regions={region}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['regions={region}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.entries)[':source_lang'][':word_id']['regions={region}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntriesSourceLangWordIdRegionsRegionQueryKey>
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
      ...getEntriesSourceLangWordIdRegionsRegionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntriesSourceLangWordIdSynonymsQueryKey(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id/synonyms', keyArgs] as const
}

export function getEntriesSourceLangWordIdSynonymsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdSynonymsQueryKey>
  >({
    queryKey: getEntriesSourceLangWordIdSynonymsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entries[':source_lang'][':word_id'].synonyms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntriesSourceLangWordIdSynonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntriesSourceLangWordIdSynonymsQueryKey>
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
      ...getEntriesSourceLangWordIdSynonymsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntriesSourceLangWordIdSynonymsAntonymsQueryKey(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id/synonyms;antonyms', keyArgs] as const
}

export function getEntriesSourceLangWordIdSynonymsAntonymsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdSynonymsAntonymsQueryKey>
  >({
    queryKey: getEntriesSourceLangWordIdSynonymsAntonymsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entries[':source_lang'][':word_id']['synonyms;antonyms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntriesSourceLangWordIdSynonymsAntonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntriesSourceLangWordIdSynonymsAntonymsQueryKey>
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
      ...getEntriesSourceLangWordIdSynonymsAntonymsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEntriesSourceLangWordIdFiltersQueryKey(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id/:filters', keyArgs] as const
}

export function getEntriesSourceLangWordIdFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdFiltersQueryKey>
  >({
    queryKey: getEntriesSourceLangWordIdFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entries[':source_lang'][':word_id'][':filters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEntriesSourceLangWordIdFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEntriesSourceLangWordIdFiltersQueryKey>
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
      ...getEntriesSourceLangWordIdFiltersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryKey(
  args: InferRequestType<
    (typeof client.entries)[':source_translation_language'][':word_id']['translations={target_translation_language}']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'entries',
    '/entries/:source_translation_language/:word_id/translations={target_translation_language}',
    keyArgs,
  ] as const
}

export function getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.entries)[':source_translation_language'][':word_id']['translations={target_translation_language}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.entries)[':source_translation_language'][':word_id']['translations={target_translation_language}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.entries)[':source_translation_language'][':word_id']['translations={target_translation_language}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryKey
    >
  >({
    queryKey:
      getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entries[':source_translation_language'][':word_id'][
          'translations={target_translation_language}'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.entries)[':source_translation_language'][':word_id']['translations={target_translation_language}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.entries)[':source_translation_language'][':word_id']['translations={target_translation_language}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.entries)[':source_translation_language'][':word_id']['translations={target_translation_language}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryKey
          >
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
      ...getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFiltersQueryKey(args: InferRequestType<typeof client.filters.$get>) {
  const { header: _, ...keyArgs } = args
  return ['filters', '/filters', keyArgs] as const
}

export function getFiltersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.filters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFiltersQueryKey>
  >({
    queryKey: getFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.filters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.filters.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFiltersQueryKey>
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
    return { ...getFiltersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFiltersEndpointQueryKey(
  args: InferRequestType<(typeof client.filters)[':endpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['filters', '/filters/:endpoint', keyArgs] as const
}

export function getFiltersEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.filters)[':endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiltersEndpointQueryKey>
  >({
    queryKey: getFiltersEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.filters[':endpoint'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFiltersEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.filters)[':endpoint']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFiltersEndpointQueryKey>
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
    return { ...getFiltersEndpointQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGrammaticalFeaturesSourceLanguageQueryKey(
  args: InferRequestType<(typeof client.grammaticalFeatures)[':source_language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['grammaticalFeatures', '/grammaticalFeatures/:source_language', keyArgs] as const
}

export function getGrammaticalFeaturesSourceLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.grammaticalFeatures)[':source_language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.grammaticalFeatures)[':source_language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.grammaticalFeatures)[':source_language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrammaticalFeaturesSourceLanguageQueryKey>
  >({
    queryKey: getGrammaticalFeaturesSourceLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grammaticalFeatures[':source_language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGrammaticalFeaturesSourceLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.grammaticalFeatures)[':source_language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.grammaticalFeatures)[':source_language']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grammaticalFeatures)[':source_language']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGrammaticalFeaturesSourceLanguageQueryKey>
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
      ...getGrammaticalFeaturesSourceLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInflectionsSourceLangWordIdFiltersQueryKey(
  args: InferRequestType<
    (typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['inflections', '/inflections/:source_lang/:word_id/:filters', keyArgs] as const
}

export function getInflectionsSourceLangWordIdFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInflectionsSourceLangWordIdFiltersQueryKey>
  >({
    queryKey: getInflectionsSourceLangWordIdFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inflections[':source_lang'][':word_id'][':filters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInflectionsSourceLangWordIdFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInflectionsSourceLangWordIdFiltersQueryKey>
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
      ...getInflectionsSourceLangWordIdFiltersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLanguagesQueryKey(args: InferRequestType<typeof client.languages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['languages', '/languages', keyArgs] as const
}

export function getLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.languages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLanguagesQueryKey>
  >({
    queryKey: getLanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.languages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.languages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLanguagesQueryKey>
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
    return { ...getLanguagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLexicalcategoriesLanguageQueryKey(
  args: InferRequestType<(typeof client.lexicalcategories)[':language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lexicalcategories', '/lexicalcategories/:language', keyArgs] as const
}

export function getLexicalcategoriesLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lexicalcategories)[':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lexicalcategories)[':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lexicalcategories)[':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLexicalcategoriesLanguageQueryKey>
  >({
    queryKey: getLexicalcategoriesLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lexicalcategories[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLexicalcategoriesLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lexicalcategories)[':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lexicalcategories)[':language']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lexicalcategories)[':language']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLexicalcategoriesLanguageQueryKey>
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
      ...getLexicalcategoriesLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRegionsSourceLanguageQueryKey(
  args: InferRequestType<(typeof client.regions)[':source_language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['regions', '/regions/:source_language', keyArgs] as const
}

export function getRegionsSourceLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.regions)[':source_language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegionsSourceLanguageQueryKey>
  >({
    queryKey: getRegionsSourceLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.regions[':source_language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegionsSourceLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.regions)[':source_language']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegionsSourceLanguageQueryKey>
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
      ...getRegionsSourceLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRegistersSourceLanguageQueryKey(
  args: InferRequestType<(typeof client.registers)[':source_language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registers', '/registers/:source_language', keyArgs] as const
}

export function getRegistersSourceLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registers)[':source_language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registers)[':source_language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registers)[':source_language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistersSourceLanguageQueryKey>
  >({
    queryKey: getRegistersSourceLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registers[':source_language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistersSourceLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registers)[':source_language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registers)[':source_language']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registers)[':source_language']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistersSourceLanguageQueryKey>
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
      ...getRegistersSourceLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryKey(
  args: InferRequestType<
    (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'registers',
    '/registers/:source_register_language/:target_register_language',
    keyArgs,
  ] as const
}

export function getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryKey>
  >({
    queryKey: getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registers[':source_register_language'][':target_register_language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistersSourceRegisterLanguageTargetRegisterLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryKey>
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
      ...getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSearchSourceLangQueryKey(
  args: InferRequestType<(typeof client.search)[':source_lang']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search/:source_lang', keyArgs] as const
}

export function getSearchSourceLangQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':source_lang']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSourceLangQueryKey>
  >({
    queryKey: getSearchSourceLangQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':source_lang'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchSourceLang<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)[':source_lang']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchSourceLangQueryKey>
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
    return { ...getSearchSourceLangQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryKey(
  args: InferRequestType<
    (typeof client.search)[':source_search_language']['translations={target_search_language}']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'search',
    '/search/:source_search_language/translations={target_search_language}',
    keyArgs,
  ] as const
}

export function getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':source_search_language']['translations={target_search_language}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':source_search_language']['translations={target_search_language}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':source_search_language']['translations={target_search_language}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryKey>
  >({
    queryKey: getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':source_search_language']['translations={target_search_language}'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createSearchSourceSearchLanguageTranslationsTargetSearchLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':source_search_language']['translations={target_search_language}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':source_search_language']['translations={target_search_language}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.search)[':source_search_language']['translations={target_search_language}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryKey>
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
      ...getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryKey(
  args: InferRequestType<
    (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['stats', '/stats/frequency/ngrams/:source_lang/:corpus/:ngram-size/', keyArgs] as const
}

export function getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryKey>
  >({
    queryKey: getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.frequency.ngrams[':source_lang'][':corpus'][':ngram-size'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsFrequencyNgramsSourceLangCorpusNgramSizeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryKey>
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
      ...getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getStatsFrequencyWordSourceLangIndexQueryKey(
  args: InferRequestType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['stats', '/stats/frequency/word/:source_lang/', keyArgs] as const
}

export function getStatsFrequencyWordSourceLangIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsFrequencyWordSourceLangIndexQueryKey>
  >({
    queryKey: getStatsFrequencyWordSourceLangIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.frequency.word[':source_lang'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsFrequencyWordSourceLangIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.stats.frequency.word)[':source_lang']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatsFrequencyWordSourceLangIndexQueryKey>
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
      ...getStatsFrequencyWordSourceLangIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatsFrequencyWordsSourceLangIndexQueryKey(
  args: InferRequestType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['stats', '/stats/frequency/words/:source_lang/', keyArgs] as const
}

export function getStatsFrequencyWordsSourceLangIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsFrequencyWordsSourceLangIndexQueryKey>
  >({
    queryKey: getStatsFrequencyWordsSourceLangIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.frequency.words[':source_lang'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsFrequencyWordsSourceLangIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.stats.frequency.words)[':source_lang']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatsFrequencyWordsSourceLangIndexQueryKey>
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
      ...getStatsFrequencyWordsSourceLangIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWordlistSourceLangFiltersAdvancedQueryKey(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wordlist', '/wordlist/:source_lang/:filters_advanced', keyArgs] as const
}

export function getWordlistSourceLangFiltersAdvancedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordlistSourceLangFiltersAdvancedQueryKey>
  >({
    queryKey: getWordlistSourceLangFiltersAdvancedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wordlist[':source_lang'][':filters_advanced'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWordlistSourceLangFiltersAdvanced<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWordlistSourceLangFiltersAdvancedQueryKey>
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
      ...getWordlistSourceLangFiltersAdvancedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWordlistSourceLangFiltersBasicQueryKey(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wordlist', '/wordlist/:source_lang/:filters_basic', keyArgs] as const
}

export function getWordlistSourceLangFiltersBasicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordlistSourceLangFiltersBasicQueryKey>
  >({
    queryKey: getWordlistSourceLangFiltersBasicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wordlist[':source_lang'][':filters_basic'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWordlistSourceLangFiltersBasic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWordlistSourceLangFiltersBasicQueryKey>
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
      ...getWordlistSourceLangFiltersBasicQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
