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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:source_domains_language/:target_domains_language', keyArgs] as const
}

export function getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':source_domains_language'][':target_domains_language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
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
                    (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
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
                    (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryKey>
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
              (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsSourceDomainsLanguageTargetDomainsLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':source_domains_language'][':target_domains_language'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsSourceLanguageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':source_language']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domains', '/domains/:source_language', keyArgs] as const
}

export function getDomainsSourceLanguageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':source_language']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsSourceLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':source_language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsSourceLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':source_language']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsSourceLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsSourceLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsSourceLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':source_language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntriesSourceLanguageWordIdSentencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_language'][':word_id']['sentences']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['entries', '/entries/:source_language/:word_id/sentences', keyArgs] as const
}

export function getEntriesSourceLanguageWordIdSentencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_language'][':word_id']['sentences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntriesSourceLanguageWordIdSentencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entries[':source_language'][':word_id'].sentences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_language'][':word_id']['sentences']['$get']>
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
                    (typeof client.entries)[':source_language'][':word_id']['sentences']['$get']
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
                    (typeof client.entries)[':source_language'][':word_id']['sentences']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEntriesSourceLanguageWordIdSentencesQueryKey>
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
            ReturnType<(typeof client.entries)[':source_language'][':word_id']['sentences']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLanguageWordIdSentencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntriesSourceLanguageWordIdSentencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entries[':source_language'][':word_id'].sentences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntriesSourceLangWordIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['entries', '/entries/:source_lang/:word_id', keyArgs] as const
}

export function getEntriesSourceLangWordIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntriesSourceLangWordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entries[':source_lang'][':word_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntriesSourceLangWordIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntriesSourceLangWordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entries[':source_lang'][':word_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntriesSourceLangWordIdAntonymsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['entries', '/entries/:source_lang/:word_id/antonyms', keyArgs] as const
}

export function getEntriesSourceLangWordIdAntonymsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntriesSourceLangWordIdAntonymsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entries[':source_lang'][':word_id'].antonyms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>
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
                    (typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']
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
                    (typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEntriesSourceLangWordIdAntonymsQueryKey>
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
            ReturnType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdAntonymsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntriesSourceLangWordIdAntonymsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entries[':source_lang'][':word_id'].antonyms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntriesSourceLangWordIdRegionsRegionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['regions=:region']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['entries', '/entries/:source_lang/:word_id/regions=:region', keyArgs] as const
}

export function getEntriesSourceLangWordIdRegionsRegionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['regions=:region']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntriesSourceLangWordIdRegionsRegionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entries[':source_lang'][':word_id']['regions=:region'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntriesSourceLangWordIdRegionsRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.entries)[':source_lang'][':word_id']['regions=:region']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['regions=:region']['$get']>
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
                    (typeof client.entries)[':source_lang'][':word_id']['regions=:region']['$get']
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
                    (typeof client.entries)[':source_lang'][':word_id']['regions=:region']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEntriesSourceLangWordIdRegionsRegionQueryKey>
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
              (typeof client.entries)[':source_lang'][':word_id']['regions=:region']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdRegionsRegionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntriesSourceLangWordIdRegionsRegionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entries[':source_lang'][':word_id']['regions=:region'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntriesSourceLangWordIdSynonymsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['entries', '/entries/:source_lang/:word_id/synonyms', keyArgs] as const
}

export function getEntriesSourceLangWordIdSynonymsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntriesSourceLangWordIdSynonymsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entries[':source_lang'][':word_id'].synonyms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>
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
                    (typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']
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
                    (typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEntriesSourceLangWordIdSynonymsQueryKey>
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
            ReturnType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdSynonymsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntriesSourceLangWordIdSynonymsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entries[':source_lang'][':word_id'].synonyms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntriesSourceLangWordIdSynonymsAntonymsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['entries', '/entries/:source_lang/:word_id/synonyms;antonyms', keyArgs] as const
}

export function getEntriesSourceLangWordIdSynonymsAntonymsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntriesSourceLangWordIdSynonymsAntonymsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entries[':source_lang'][':word_id']['synonyms;antonyms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
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
                    (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
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
                    (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEntriesSourceLangWordIdSynonymsAntonymsQueryKey>
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
              (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdSynonymsAntonymsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntriesSourceLangWordIdSynonymsAntonymsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entries[':source_lang'][':word_id']['synonyms;antonyms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntriesSourceLangWordIdFiltersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['entries', '/entries/:source_lang/:word_id/:filters', keyArgs] as const
}

export function getEntriesSourceLangWordIdFiltersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntriesSourceLangWordIdFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entries[':source_lang'][':word_id'][':filters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>
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
                    (typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']
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
                    (typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEntriesSourceLangWordIdFiltersQueryKey>
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
            ReturnType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntriesSourceLangWordIdFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntriesSourceLangWordIdFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entries[':source_lang'][':word_id'][':filters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.entries)[':source_translation_language'][':word_id']['translations=:target_translation_language']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'entries',
    '/entries/:source_translation_language/:word_id/translations=:target_translation_language',
    keyArgs,
  ] as const
}

export function getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.entries)[':source_translation_language'][':word_id']['translations=:target_translation_language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entries[':source_translation_language'][':word_id'][
          'translations=:target_translation_language'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.entries)[':source_translation_language'][':word_id']['translations=:target_translation_language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.entries)[':source_translation_language'][':word_id']['translations=:target_translation_language']['$get']
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
                    (typeof client.entries)[':source_translation_language'][':word_id']['translations=:target_translation_language']['$get']
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
                    (typeof client.entries)[':source_translation_language'][':word_id']['translations=:target_translation_language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryKey
          >
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
              (typeof client.entries)[':source_translation_language'][':word_id']['translations=:target_translation_language']['$get']
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.entries[':source_translation_language'][':word_id'][
            'translations=:target_translation_language'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getFiltersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.filters.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['filters', '/filters', keyArgs] as const
}

export function getFiltersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.filters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.filters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFilters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.filters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>
          >,
          ReturnType<typeof getFiltersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.filters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFiltersEndpointQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.filters)[':endpoint']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['filters', '/filters/:endpoint', keyArgs] as const
}

export function getFiltersEndpointQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.filters)[':endpoint']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiltersEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.filters[':endpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiltersEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.filters)[':endpoint']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFiltersEndpointQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiltersEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiltersEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.filters[':endpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrammaticalFeaturesSourceLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.grammaticalFeatures)[':source_language']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['grammaticalFeatures', '/grammaticalFeatures/:source_language', keyArgs] as const
}

export function getGrammaticalFeaturesSourceLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.grammaticalFeatures)[':source_language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrammaticalFeaturesSourceLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grammaticalFeatures[':source_language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.grammaticalFeatures)[':source_language']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grammaticalFeatures)[':source_language']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGrammaticalFeaturesSourceLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.grammaticalFeatures)[':source_language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrammaticalFeaturesSourceLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrammaticalFeaturesSourceLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grammaticalFeatures[':source_language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInflectionsSourceLangWordIdFiltersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['inflections', '/inflections/:source_lang/:word_id/:filters', keyArgs] as const
}

export function getInflectionsSourceLangWordIdFiltersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInflectionsSourceLangWordIdFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inflections[':source_lang'][':word_id'][':filters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']>
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
                    (typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']
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
                    (typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInflectionsSourceLangWordIdFiltersQueryKey>
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
            ReturnType<(typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInflectionsSourceLangWordIdFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInflectionsSourceLangWordIdFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inflections[':source_lang'][':word_id'][':filters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLanguagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.languages.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['languages', '/languages', keyArgs] as const
}

export function getLanguagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.languages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLanguagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.languages.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.languages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          ReturnType<typeof getLanguagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLanguagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.languages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLexicalcategoriesLanguageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lexicalcategories)[':language']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lexicalcategories', '/lexicalcategories/:language', keyArgs] as const
}

export function getLexicalcategoriesLanguageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lexicalcategories)[':language']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLexicalcategoriesLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lexicalcategories[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lexicalcategories)[':language']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lexicalcategories)[':language']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLexicalcategoriesLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.lexicalcategories)[':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLexicalcategoriesLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLexicalcategoriesLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lexicalcategories[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegionsSourceLanguageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.regions)[':source_language']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['regions', '/regions/:source_language', keyArgs] as const
}

export function getRegionsSourceLanguageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.regions)[':source_language']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegionsSourceLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.regions[':source_language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegionsSourceLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.regions)[':source_language']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRegionsSourceLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegionsSourceLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegionsSourceLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.regions[':source_language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistersSourceLanguageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registers)[':source_language']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registers', '/registers/:source_language', keyArgs] as const
}

export function getRegistersSourceLanguageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registers)[':source_language']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistersSourceLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registers[':source_language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registers)[':source_language']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registers)[':source_language']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRegistersSourceLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.registers)[':source_language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistersSourceLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistersSourceLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registers[':source_language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'registers',
    '/registers/:source_register_language/:target_register_language',
    keyArgs,
  ] as const
}

export function getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registers[':source_register_language'][':target_register_language'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
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
                    (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
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
                    (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryKey>
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
              (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRegistersSourceRegisterLanguageTargetRegisterLanguageQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.registers[':source_register_language'][':target_register_language'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSearchSourceLangQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':source_lang']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['search', '/search/:source_lang', keyArgs] as const
}

export function getSearchSourceLangQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':source_lang']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchSourceLangQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':source_lang'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchSourceLang<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':source_lang']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchSourceLangQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSourceLangQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchSourceLangQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':source_lang'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':source_search_language']['translations=:target_search_language']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'search',
    '/search/:source_search_language/translations=:target_search_language',
    keyArgs,
  ] as const
}

export function getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':source_search_language']['translations=:target_search_language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':source_search_language']['translations=:target_search_language'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSearchSourceSearchLanguageTranslationsTargetSearchLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':source_search_language']['translations=:target_search_language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':source_search_language']['translations=:target_search_language']['$get']
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
                    (typeof client.search)[':source_search_language']['translations=:target_search_language']['$get']
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
                    (typeof client.search)[':source_search_language']['translations=:target_search_language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryKey>
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
              (typeof client.search)[':source_search_language']['translations=:target_search_language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSearchSourceSearchLanguageTranslationsTargetSearchLanguageQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':source_search_language']['translations=:target_search_language'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['stats', '/stats/frequency/ngrams/:source_lang/:corpus/:ngram-size/', keyArgs] as const
}

export function getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.frequency.ngrams[':source_lang'][':corpus'][':ngram-size'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
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
                    (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
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
                    (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryKey>
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
              (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.frequency.ngrams[':source_lang'][':corpus'][':ngram-size'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getStatsFrequencyWordSourceLangIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['stats', '/stats/frequency/word/:source_lang/', keyArgs] as const
}

export function getStatsFrequencyWordSourceLangIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsFrequencyWordSourceLangIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.frequency.word[':source_lang'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStatsFrequencyWordSourceLangIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsFrequencyWordSourceLangIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsFrequencyWordSourceLangIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.frequency.word[':source_lang'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsFrequencyWordsSourceLangIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['stats', '/stats/frequency/words/:source_lang/', keyArgs] as const
}

export function getStatsFrequencyWordsSourceLangIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsFrequencyWordsSourceLangIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.frequency.words[':source_lang'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStatsFrequencyWordsSourceLangIndexQueryKey>
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
            ReturnType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsFrequencyWordsSourceLangIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsFrequencyWordsSourceLangIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.frequency.words[':source_lang'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordlistSourceLangFiltersAdvancedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wordlist', '/wordlist/:source_lang/:filters_advanced', keyArgs] as const
}

export function getWordlistSourceLangFiltersAdvancedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordlistSourceLangFiltersAdvancedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wordlist[':source_lang'][':filters_advanced'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWordlistSourceLangFiltersAdvancedQueryKey>
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
          Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordlistSourceLangFiltersAdvancedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordlistSourceLangFiltersAdvancedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wordlist[':source_lang'][':filters_advanced'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordlistSourceLangFiltersBasicQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['wordlist', '/wordlist/:source_lang/:filters_basic', keyArgs] as const
}

export function getWordlistSourceLangFiltersBasicQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordlistSourceLangFiltersBasicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wordlist[':source_lang'][':filters_basic'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWordlistSourceLangFiltersBasicQueryKey>
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
          Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordlistSourceLangFiltersBasicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordlistSourceLangFiltersBasicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wordlist[':source_lang'][':filters_basic'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
