import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetDomainsSourceDomainsLanguageTargetDomainsLanguageKey(
  args: InferRequestType<
    (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:source_domains_language/:target_domains_language', keyArgs] as const
}

export function useGetDomainsSourceDomainsLanguageTargetDomainsLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsSourceDomainsLanguageTargetDomainsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.domains[':source_domains_language'][':target_domains_language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsSourceDomainsLanguageTargetDomainsLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.domains)[':source_domains_language'][':target_domains_language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsSourceDomainsLanguageTargetDomainsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.domains[':source_domains_language'][':target_domains_language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsSourceLanguageKey(
  args: InferRequestType<(typeof client.domains)[':source_language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domains', '/domains/:source_language', keyArgs] as const
}

export function useGetDomainsSourceLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':source_language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsSourceLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':source_language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsSourceLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':source_language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsSourceLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':source_language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':source_language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntriesSourceLanguageWordIdSentencesKey(
  args: InferRequestType<
    (typeof client.entries)[':source_language'][':word_id']['sentences']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_language/:word_id/sentences', keyArgs] as const
}

export function useGetEntriesSourceLanguageWordIdSentences<TError = unknown>(
  args: InferRequestType<
    (typeof client.entries)[':source_language'][':word_id']['sentences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLanguageWordIdSentencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_language'][':word_id'].sentences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntriesSourceLanguageWordIdSentences<TError = unknown>(
  args: InferRequestType<
    (typeof client.entries)[':source_language'][':word_id']['sentences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLanguageWordIdSentencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_language'][':word_id'].sentences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEntriesSourceLangWordIdKey(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id', keyArgs] as const
}

export function useGetEntriesSourceLangWordId<TError = unknown>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entries[':source_lang'][':word_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntriesSourceLangWordId<TError = unknown>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entries)[':source_lang'][':word_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entries[':source_lang'][':word_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntriesSourceLangWordIdAntonymsKey(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id/antonyms', keyArgs] as const
}

export function useGetEntriesSourceLangWordIdAntonyms<TError = unknown>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdAntonymsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_lang'][':word_id'].antonyms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntriesSourceLangWordIdAntonyms<TError = unknown>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdAntonymsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id']['antonyms']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_lang'][':word_id'].antonyms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEntriesSourceLangWordIdRegionsRegionKey(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['regions=:region']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id/regions=:region', keyArgs] as const
}

export function useGetEntriesSourceLangWordIdRegionsRegion<TError = unknown>(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['regions=:region']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdRegionsRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_lang'][':word_id']['regions=:region'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntriesSourceLangWordIdRegionsRegion<TError = unknown>(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['regions=:region']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdRegionsRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_lang'][':word_id']['regions=:region'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEntriesSourceLangWordIdSynonymsKey(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id/synonyms', keyArgs] as const
}

export function useGetEntriesSourceLangWordIdSynonyms<TError = unknown>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdSynonymsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_lang'][':word_id'].synonyms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntriesSourceLangWordIdSynonyms<TError = unknown>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdSynonymsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id']['synonyms']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_lang'][':word_id'].synonyms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEntriesSourceLangWordIdSynonymsAntonymsKey(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id/synonyms;antonyms', keyArgs] as const
}

export function useGetEntriesSourceLangWordIdSynonymsAntonyms<TError = unknown>(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdSynonymsAntonymsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_lang'][':word_id']['synonyms;antonyms'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntriesSourceLangWordIdSynonymsAntonyms<TError = unknown>(
  args: InferRequestType<
    (typeof client.entries)[':source_lang'][':word_id']['synonyms;antonyms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdSynonymsAntonymsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_lang'][':word_id']['synonyms;antonyms'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEntriesSourceLangWordIdFiltersKey(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['entries', '/entries/:source_lang/:word_id/:filters', keyArgs] as const
}

export function useGetEntriesSourceLangWordIdFilters<TError = unknown>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_lang'][':word_id'][':filters'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntriesSourceLangWordIdFilters<TError = unknown>(
  args: InferRequestType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceLangWordIdFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entries)[':source_lang'][':word_id'][':filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_lang'][':word_id'][':filters'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageKey(
  args: InferRequestType<
    (typeof client.entries)[':source_translation_language'][':word_id']['translations=:target_translation_language']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'entries',
    '/entries/:source_translation_language/:word_id/translations=:target_translation_language',
    keyArgs,
  ] as const
}

export function useGetEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.entries)[':source_translation_language'][':word_id']['translations=:target_translation_language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_translation_language'][':word_id'][
            'translations=:target_translation_language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.entries)[':source_translation_language'][':word_id']['translations=:target_translation_language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entries[':source_translation_language'][':word_id'][
            'translations=:target_translation_language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFiltersKey(args: InferRequestType<typeof client.filters.$get>) {
  const { header: _, ...keyArgs } = args
  return ['filters', '/filters', keyArgs] as const
}

export function useGetFilters<TError = unknown>(
  args: InferRequestType<typeof client.filters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFiltersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.filters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFilters<TError = unknown>(
  args: InferRequestType<typeof client.filters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFiltersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.filters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetFiltersEndpointKey(
  args: InferRequestType<(typeof client.filters)[':endpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['filters', '/filters/:endpoint', keyArgs] as const
}

export function useGetFiltersEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client.filters)[':endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFiltersEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.filters[':endpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiltersEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client.filters)[':endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFiltersEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':endpoint']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.filters[':endpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrammaticalFeaturesSourceLanguageKey(
  args: InferRequestType<(typeof client.grammaticalFeatures)[':source_language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['grammaticalFeatures', '/grammaticalFeatures/:source_language', keyArgs] as const
}

export function useGetGrammaticalFeaturesSourceLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.grammaticalFeatures)[':source_language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grammaticalFeatures)[':source_language']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGrammaticalFeaturesSourceLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grammaticalFeatures)[':source_language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.grammaticalFeatures[':source_language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrammaticalFeaturesSourceLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.grammaticalFeatures)[':source_language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grammaticalFeatures)[':source_language']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGrammaticalFeaturesSourceLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grammaticalFeatures)[':source_language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.grammaticalFeatures[':source_language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInflectionsSourceLangWordIdFiltersKey(
  args: InferRequestType<
    (typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['inflections', '/inflections/:source_lang/:word_id/:filters', keyArgs] as const
}

export function useGetInflectionsSourceLangWordIdFilters<TError = unknown>(
  args: InferRequestType<
    (typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInflectionsSourceLangWordIdFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.inflections[':source_lang'][':word_id'][':filters'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInflectionsSourceLangWordIdFilters<TError = unknown>(
  args: InferRequestType<
    (typeof client.inflections)[':source_lang'][':word_id'][':filters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInflectionsSourceLangWordIdFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.inflections[':source_lang'][':word_id'][':filters'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLanguagesKey(args: InferRequestType<typeof client.languages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['languages', '/languages', keyArgs] as const
}

export function useGetLanguages<TError = unknown>(
  args: InferRequestType<typeof client.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLanguages<TError = unknown>(
  args: InferRequestType<typeof client.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLexicalcategoriesLanguageKey(
  args: InferRequestType<(typeof client.lexicalcategories)[':language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lexicalcategories', '/lexicalcategories/:language', keyArgs] as const
}

export function useGetLexicalcategoriesLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.lexicalcategories)[':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lexicalcategories)[':language']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLexicalcategoriesLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lexicalcategories)[':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lexicalcategories[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLexicalcategoriesLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.lexicalcategories)[':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lexicalcategories)[':language']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLexicalcategoriesLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lexicalcategories)[':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lexicalcategories[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegionsSourceLanguageKey(
  args: InferRequestType<(typeof client.regions)[':source_language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['regions', '/regions/:source_language', keyArgs] as const
}

export function useGetRegionsSourceLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.regions)[':source_language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegionsSourceLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions[':source_language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegionsSourceLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.regions)[':source_language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegionsSourceLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.regions)[':source_language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions[':source_language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegistersSourceLanguageKey(
  args: InferRequestType<(typeof client.registers)[':source_language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registers', '/registers/:source_language', keyArgs] as const
}

export function useGetRegistersSourceLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.registers)[':source_language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registers)[':source_language']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegistersSourceLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registers)[':source_language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registers[':source_language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistersSourceLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.registers)[':source_language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registers)[':source_language']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegistersSourceLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registers)[':source_language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registers[':source_language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegistersSourceRegisterLanguageTargetRegisterLanguageKey(
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

export function useGetRegistersSourceRegisterLanguageTargetRegisterLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegistersSourceRegisterLanguageTargetRegisterLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.registers[':source_register_language'][':target_register_language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistersSourceRegisterLanguageTargetRegisterLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.registers)[':source_register_language'][':target_register_language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegistersSourceRegisterLanguageTargetRegisterLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.registers[':source_register_language'][':target_register_language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchSourceLangKey(
  args: InferRequestType<(typeof client.search)[':source_lang']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search/:source_lang', keyArgs] as const
}

export function useGetSearchSourceLang<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':source_lang']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchSourceLangKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':source_lang'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchSourceLang<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':source_lang']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchSourceLangKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':source_lang']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':source_lang'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchSourceSearchLanguageTranslationsTargetSearchLanguageKey(
  args: InferRequestType<
    (typeof client.search)[':source_search_language']['translations=:target_search_language']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'search',
    '/search/:source_search_language/translations=:target_search_language',
    keyArgs,
  ] as const
}

export function useGetSearchSourceSearchLanguageTranslationsTargetSearchLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':source_search_language']['translations=:target_search_language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchSourceSearchLanguageTranslationsTargetSearchLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':source_search_language']['translations=:target_search_language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchSourceSearchLanguageTranslationsTargetSearchLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.search)[':source_search_language']['translations=:target_search_language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchSourceSearchLanguageTranslationsTargetSearchLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':source_search_language']['translations=:target_search_language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexKey(
  args: InferRequestType<
    (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['stats', '/stats/frequency/ngrams/:source_lang/:corpus/:ngram-size/', keyArgs] as const
}

export function useGetStatsFrequencyNgramsSourceLangCorpusNgramSizeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.stats.frequency.ngrams[':source_lang'][':corpus'][':ngram-size'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsFrequencyNgramsSourceLangCorpusNgramSizeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.frequency.ngrams)[':source_lang'][':corpus'][':ngram-size']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.stats.frequency.ngrams[':source_lang'][':corpus'][':ngram-size'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsFrequencyWordSourceLangIndexKey(
  args: InferRequestType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['stats', '/stats/frequency/word/:source_lang/', keyArgs] as const
}

export function useGetStatsFrequencyWordSourceLangIndex<TError = unknown>(
  args: InferRequestType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsFrequencyWordSourceLangIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stats.frequency.word[':source_lang'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsFrequencyWordSourceLangIndex<TError = unknown>(
  args: InferRequestType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsFrequencyWordSourceLangIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stats.frequency.word)[':source_lang']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stats.frequency.word[':source_lang'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsFrequencyWordsSourceLangIndexKey(
  args: InferRequestType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['stats', '/stats/frequency/words/:source_lang/', keyArgs] as const
}

export function useGetStatsFrequencyWordsSourceLangIndex<TError = unknown>(
  args: InferRequestType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsFrequencyWordsSourceLangIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stats.frequency.words[':source_lang'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsFrequencyWordsSourceLangIndex<TError = unknown>(
  args: InferRequestType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsFrequencyWordsSourceLangIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stats.frequency.words)[':source_lang']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stats.frequency.words[':source_lang'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordlistSourceLangFiltersAdvancedKey(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wordlist', '/wordlist/:source_lang/:filters_advanced', keyArgs] as const
}

export function useGetWordlistSourceLangFiltersAdvanced<TError = unknown>(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWordlistSourceLangFiltersAdvancedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wordlist[':source_lang'][':filters_advanced'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordlistSourceLangFiltersAdvanced<TError = unknown>(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWordlistSourceLangFiltersAdvancedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wordlist)[':source_lang'][':filters_advanced']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wordlist[':source_lang'][':filters_advanced'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWordlistSourceLangFiltersBasicKey(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['wordlist', '/wordlist/:source_lang/:filters_basic', keyArgs] as const
}

export function useGetWordlistSourceLangFiltersBasic<TError = unknown>(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWordlistSourceLangFiltersBasicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wordlist[':source_lang'][':filters_basic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordlistSourceLangFiltersBasic<TError = unknown>(
  args: InferRequestType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWordlistSourceLangFiltersBasicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wordlist)[':source_lang'][':filters_basic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wordlist[':source_lang'][':filters_basic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
