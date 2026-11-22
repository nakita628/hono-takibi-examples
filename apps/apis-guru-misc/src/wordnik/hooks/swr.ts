import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWordJsonKey() {
  return ['word.json'] as const
}

export function getWordsJsonKey() {
  return ['words.json'] as const
}

export function getGetWordJsonWordAudioKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>,
) {
  return ['word.json', '/word.json/:word/audio', args] as const
}

export function useGetWordJsonWordAudio<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['audio']['$get']>>
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
        ? getGetWordJsonWordAudioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['audio']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].audio.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordAudio<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['audio']['$get']>>
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
        ? getGetWordJsonWordAudioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['audio']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].audio.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordJsonWordDefinitionsKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>,
) {
  return ['word.json', '/word.json/:word/definitions', args] as const
}

export function useGetWordJsonWordDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['definitions']['$get']>>
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
        ? getGetWordJsonWordDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['definitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].definitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['definitions']['$get']>>
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
        ? getGetWordJsonWordDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['definitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].definitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordJsonWordEtymologiesKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>,
) {
  return ['word.json', '/word.json/:word/etymologies', args] as const
}

export function useGetWordJsonWordEtymologies<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['etymologies']['$get']>>
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
        ? getGetWordJsonWordEtymologiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['etymologies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].etymologies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordEtymologies<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['etymologies']['$get']>>
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
        ? getGetWordJsonWordEtymologiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['etymologies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].etymologies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordJsonWordExamplesKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>,
) {
  return ['word.json', '/word.json/:word/examples', args] as const
}

export function useGetWordJsonWordExamples<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['examples']['$get']>>
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
        ? getGetWordJsonWordExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['examples']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordExamples<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['examples']['$get']>>
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
        ? getGetWordJsonWordExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['examples']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordJsonWordFrequencyKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>,
) {
  return ['word.json', '/word.json/:word/frequency', args] as const
}

export function useGetWordJsonWordFrequency<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['frequency']['$get']>>
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
        ? getGetWordJsonWordFrequencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['frequency']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].frequency.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordFrequency<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['frequency']['$get']>>
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
        ? getGetWordJsonWordFrequencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['frequency']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].frequency.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordJsonWordHyphenationKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>,
) {
  return ['word.json', '/word.json/:word/hyphenation', args] as const
}

export function useGetWordJsonWordHyphenation<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['hyphenation']['$get']>>
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
        ? getGetWordJsonWordHyphenationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['hyphenation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].hyphenation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordHyphenation<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['hyphenation']['$get']>>
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
        ? getGetWordJsonWordHyphenationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['hyphenation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].hyphenation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordJsonWordPhrasesKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>,
) {
  return ['word.json', '/word.json/:word/phrases', args] as const
}

export function useGetWordJsonWordPhrases<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['phrases']['$get']>>
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
        ? getGetWordJsonWordPhrasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['phrases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].phrases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordPhrases<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['phrases']['$get']>>
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
        ? getGetWordJsonWordPhrasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['phrases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].phrases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordJsonWordPronunciationsKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>,
) {
  return ['word.json', '/word.json/:word/pronunciations', args] as const
}

export function useGetWordJsonWordPronunciations<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['pronunciations']['$get']>>
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
        ? getGetWordJsonWordPronunciationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['pronunciations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['word.json'][':word'].pronunciations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordPronunciations<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['pronunciations']['$get']>>
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
        ? getGetWordJsonWordPronunciationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['pronunciations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['word.json'][':word'].pronunciations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordJsonWordRelatedWordsKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>,
) {
  return ['word.json', '/word.json/:word/relatedWords', args] as const
}

export function useGetWordJsonWordRelatedWords<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['relatedWords']['$get']>>
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
        ? getGetWordJsonWordRelatedWordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['relatedWords']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['word.json'][':word'].relatedWords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordRelatedWords<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['relatedWords']['$get']>>
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
        ? getGetWordJsonWordRelatedWordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['relatedWords']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['word.json'][':word'].relatedWords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordJsonWordScrabbleScoreKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>,
) {
  return ['word.json', '/word.json/:word/scrabbleScore', args] as const
}

export function useGetWordJsonWordScrabbleScore<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>>
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
        ? getGetWordJsonWordScrabbleScoreKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['word.json'][':word'].scrabbleScore.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordScrabbleScore<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>>
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
        ? getGetWordJsonWordScrabbleScoreKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['word.json'][':word'].scrabbleScore.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordJsonWordTopExampleKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>,
) {
  return ['word.json', '/word.json/:word/topExample', args] as const
}

export function useGetWordJsonWordTopExample<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['topExample']['$get']>>
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
        ? getGetWordJsonWordTopExampleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['topExample']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].topExample.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordJsonWordTopExample<TError = unknown>(
  args: InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['topExample']['$get']>>
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
        ? getGetWordJsonWordTopExampleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['word.json'][':word']['topExample']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['word.json'][':word'].topExample.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordsJsonRandomWordKey(
  args: InferRequestType<(typeof client)['words.json']['randomWord']['$get']>,
) {
  return ['words.json', '/words.json/randomWord', args] as const
}

export function useGetWordsJsonRandomWord<TError = unknown>(
  args: InferRequestType<(typeof client)['words.json']['randomWord']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>
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
        ? getGetWordsJsonRandomWordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['words.json'].randomWord.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordsJsonRandomWord<TError = unknown>(
  args: InferRequestType<(typeof client)['words.json']['randomWord']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>
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
        ? getGetWordsJsonRandomWordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['words.json'].randomWord.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordsJsonRandomWordsKey(
  args: InferRequestType<(typeof client)['words.json']['randomWords']['$get']>,
) {
  return ['words.json', '/words.json/randomWords', args] as const
}

export function useGetWordsJsonRandomWords<TError = unknown>(
  args: InferRequestType<(typeof client)['words.json']['randomWords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['randomWords']['$get']>>
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
        ? getGetWordsJsonRandomWordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['randomWords']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['words.json'].randomWords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordsJsonRandomWords<TError = unknown>(
  args: InferRequestType<(typeof client)['words.json']['randomWords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['randomWords']['$get']>>
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
        ? getGetWordsJsonRandomWordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['randomWords']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['words.json'].randomWords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordsJsonReverseDictionaryKey(
  args: InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>,
) {
  return ['words.json', '/words.json/reverseDictionary', args] as const
}

export function useGetWordsJsonReverseDictionary<TError = unknown>(
  args: InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['reverseDictionary']['$get']>>
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
        ? getGetWordsJsonReverseDictionaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['reverseDictionary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['words.json'].reverseDictionary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordsJsonReverseDictionary<TError = unknown>(
  args: InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['reverseDictionary']['$get']>>
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
        ? getGetWordsJsonReverseDictionaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['reverseDictionary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['words.json'].reverseDictionary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordsJsonSearchQueryKey(
  args: InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>,
) {
  return ['words.json', '/words.json/search/:query', args] as const
}

export function useGetWordsJsonSearchQuery<TError = unknown>(
  args: InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['search'][':query']['$get']>>
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
        ? getGetWordsJsonSearchQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['search'][':query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['words.json'].search[':query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordsJsonSearchQuery<TError = unknown>(
  args: InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['search'][':query']['$get']>>
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
        ? getGetWordsJsonSearchQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['search'][':query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['words.json'].search[':query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWordsJsonWordOfTheDayKey(
  args: InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>,
) {
  return ['words.json', '/words.json/wordOfTheDay', args] as const
}

export function useGetWordsJsonWordOfTheDay<TError = unknown>(
  args: InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['wordOfTheDay']['$get']>>
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
        ? getGetWordsJsonWordOfTheDayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['wordOfTheDay']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['words.json'].wordOfTheDay.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWordsJsonWordOfTheDay<TError = unknown>(
  args: InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['wordOfTheDay']['$get']>>
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
        ? getGetWordsJsonWordOfTheDayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['words.json']['wordOfTheDay']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['words.json'].wordOfTheDay.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
