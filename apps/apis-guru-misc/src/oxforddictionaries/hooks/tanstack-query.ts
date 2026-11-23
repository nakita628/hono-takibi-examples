import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useDomainsSourceDomainsLanguageTargetDomainsLanguage<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainsSourceDomainsLanguageTargetDomainsLanguage<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDomainsSourceLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':source_language']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getDomainsSourceLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainsSourceLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':source_language']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDomainsSourceLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEntriesSourceLanguageWordIdSentences<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getEntriesSourceLanguageWordIdSentencesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEntriesSourceLanguageWordIdSentences<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getEntriesSourceLanguageWordIdSentencesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEntriesSourceLangWordId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getEntriesSourceLangWordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEntriesSourceLangWordId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getEntriesSourceLangWordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEntriesSourceLangWordIdAntonyms<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getEntriesSourceLangWordIdAntonymsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEntriesSourceLangWordIdAntonyms<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getEntriesSourceLangWordIdAntonymsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEntriesSourceLangWordIdRegionsRegion<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getEntriesSourceLangWordIdRegionsRegionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEntriesSourceLangWordIdRegionsRegion<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getEntriesSourceLangWordIdRegionsRegionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEntriesSourceLangWordIdSynonyms<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getEntriesSourceLangWordIdSynonymsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEntriesSourceLangWordIdSynonyms<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getEntriesSourceLangWordIdSynonymsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEntriesSourceLangWordIdSynonymsAntonyms<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getEntriesSourceLangWordIdSynonymsAntonymsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEntriesSourceLangWordIdSynonymsAntonyms<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getEntriesSourceLangWordIdSynonymsAntonymsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEntriesSourceLangWordIdFilters<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getEntriesSourceLangWordIdFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEntriesSourceLangWordIdFilters<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getEntriesSourceLangWordIdFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguage<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguage<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useFilters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.filters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFiltersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFiltersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.filters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFiltersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFiltersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useFiltersEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.filters)[':endpoint']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFiltersEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFiltersEndpointQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFiltersEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.filters)[':endpoint']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFiltersEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFiltersEndpointQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useGrammaticalFeaturesSourceLanguage<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getGrammaticalFeaturesSourceLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGrammaticalFeaturesSourceLanguage<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getGrammaticalFeaturesSourceLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useInflectionsSourceLangWordIdFilters<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getInflectionsSourceLangWordIdFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInflectionsSourceLangWordIdFilters<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getInflectionsSourceLangWordIdFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.languages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLanguagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.languages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLanguagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useLexicalcategoriesLanguage<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getLexicalcategoriesLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLexicalcategoriesLanguage<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getLexicalcategoriesLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegionsSourceLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.regions)[':source_language']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getRegionsSourceLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegionsSourceLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.regions)[':source_language']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRegionsSourceLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistersSourceLanguage<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getRegistersSourceLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistersSourceLanguage<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRegistersSourceLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistersSourceRegisterLanguageTargetRegisterLanguage<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistersSourceRegisterLanguageTargetRegisterLanguage<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSearchSourceLang<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':source_lang']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchSourceLangQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchSourceLang<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':source_lang']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchSourceLangQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSearchSourceSearchLanguageTranslationsTargetSearchLanguage<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSearchSourceSearchLanguageTranslationsTargetSearchLanguage<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useStatsFrequencyNgramsSourceLangCorpusNgramSizeIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsFrequencyNgramsSourceLangCorpusNgramSizeIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useStatsFrequencyWordSourceLangIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getStatsFrequencyWordSourceLangIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsFrequencyWordSourceLangIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getStatsFrequencyWordSourceLangIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useStatsFrequencyWordsSourceLangIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getStatsFrequencyWordsSourceLangIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsFrequencyWordsSourceLangIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getStatsFrequencyWordsSourceLangIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useWordlistSourceLangFiltersAdvanced<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getWordlistSourceLangFiltersAdvancedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordlistSourceLangFiltersAdvanced<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordlistSourceLangFiltersAdvancedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useWordlistSourceLangFiltersBasic<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getWordlistSourceLangFiltersBasicQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordlistSourceLangFiltersBasic<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordlistSourceLangFiltersBasicQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
