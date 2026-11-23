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

export function getWordJsonKey() {
  return ['word.json'] as const
}

export function getWordsJsonKey() {
  return ['words.json'] as const
}

export function getWordJsonWordAudioQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>>,
) {
  return ['word.json', '/word.json/:word/audio', toValue(args)] as const
}

export function getWordJsonWordAudioQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordAudioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].audio.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordAudio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['audio']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['audio']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['audio']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordAudioQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['audio']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordAudioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordAudioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].audio.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordJsonWordDefinitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>
  >,
) {
  return ['word.json', '/word.json/:word/definitions', toValue(args)] as const
}

export function getWordJsonWordDefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].definitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['definitions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['definitions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordDefinitionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['definitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].definitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordJsonWordEtymologiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>
  >,
) {
  return ['word.json', '/word.json/:word/etymologies', toValue(args)] as const
}

export function getWordJsonWordEtymologiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordEtymologiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].etymologies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordEtymologies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['etymologies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['etymologies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['etymologies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordEtymologiesQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['etymologies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordEtymologiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordEtymologiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].etymologies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordJsonWordExamplesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>
  >,
) {
  return ['word.json', '/word.json/:word/examples', toValue(args)] as const
}

export function getWordJsonWordExamplesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['examples']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['examples']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordExamplesQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['examples']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordJsonWordFrequencyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>
  >,
) {
  return ['word.json', '/word.json/:word/frequency', toValue(args)] as const
}

export function getWordJsonWordFrequencyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordFrequencyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].frequency.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordFrequency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['frequency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['frequency']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['frequency']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordFrequencyQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['frequency']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordFrequencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordFrequencyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].frequency.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordJsonWordHyphenationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>
  >,
) {
  return ['word.json', '/word.json/:word/hyphenation', toValue(args)] as const
}

export function getWordJsonWordHyphenationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordHyphenationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].hyphenation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordHyphenation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['hyphenation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['hyphenation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['hyphenation']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordHyphenationQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['hyphenation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordHyphenationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordHyphenationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].hyphenation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordJsonWordPhrasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>
  >,
) {
  return ['word.json', '/word.json/:word/phrases', toValue(args)] as const
}

export function getWordJsonWordPhrasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordPhrasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].phrases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordPhrases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['phrases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['phrases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['phrases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordPhrasesQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['phrases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordPhrasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordPhrasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].phrases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordJsonWordPronunciationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>
  >,
) {
  return ['word.json', '/word.json/:word/pronunciations', toValue(args)] as const
}

export function getWordJsonWordPronunciationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordPronunciationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].pronunciations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordPronunciations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['pronunciations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['pronunciations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['pronunciations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordPronunciationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['pronunciations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordPronunciationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordPronunciationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].pronunciations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordJsonWordRelatedWordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>
  >,
) {
  return ['word.json', '/word.json/:word/relatedWords', toValue(args)] as const
}

export function getWordJsonWordRelatedWordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordRelatedWordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].relatedWords.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordRelatedWords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['relatedWords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['relatedWords']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['relatedWords']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordRelatedWordsQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['relatedWords']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordRelatedWordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordRelatedWordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].relatedWords.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordJsonWordScrabbleScoreQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>
  >,
) {
  return ['word.json', '/word.json/:word/scrabbleScore', toValue(args)] as const
}

export function getWordJsonWordScrabbleScoreQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordScrabbleScoreQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].scrabbleScore.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordScrabbleScore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordScrabbleScoreQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordScrabbleScoreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordScrabbleScoreQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].scrabbleScore.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordJsonWordTopExampleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>
  >,
) {
  return ['word.json', '/word.json/:word/topExample', toValue(args)] as const
}

export function getWordJsonWordTopExampleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordJsonWordTopExampleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['word.json'][':word'].topExample.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordJsonWordTopExample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['topExample']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['topExample']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['word.json'][':word']['topExample']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordJsonWordTopExampleQueryKey>
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
          Awaited<ReturnType<(typeof client)['word.json'][':word']['topExample']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordJsonWordTopExampleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordJsonWordTopExampleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['word.json'][':word'].topExample.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordsJsonRandomWordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['words.json']['randomWord']['$get']>>,
) {
  return ['words.json', '/words.json/randomWord', toValue(args)] as const
}

export function getWordsJsonRandomWordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['words.json']['randomWord']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordsJsonRandomWordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['words.json'].randomWord.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordsJsonRandomWord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['words.json']['randomWord']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordsJsonRandomWordQueryKey>
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
          Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordsJsonRandomWordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordsJsonRandomWordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['words.json'].randomWord.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordsJsonRandomWordsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['words.json']['randomWords']['$get']>>,
) {
  return ['words.json', '/words.json/randomWords', toValue(args)] as const
}

export function getWordsJsonRandomWordsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['words.json']['randomWords']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordsJsonRandomWordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['words.json'].randomWords.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordsJsonRandomWords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['randomWords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['words.json']['randomWords']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['words.json']['randomWords']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['words.json']['randomWords']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordsJsonRandomWordsQueryKey>
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
          Awaited<ReturnType<(typeof client)['words.json']['randomWords']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordsJsonRandomWordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordsJsonRandomWordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['words.json'].randomWords.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordsJsonReverseDictionaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>
  >,
) {
  return ['words.json', '/words.json/reverseDictionary', toValue(args)] as const
}

export function getWordsJsonReverseDictionaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordsJsonReverseDictionaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['words.json'].reverseDictionary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordsJsonReverseDictionary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['reverseDictionary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['words.json']['reverseDictionary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['words.json']['reverseDictionary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordsJsonReverseDictionaryQueryKey>
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
          Awaited<ReturnType<(typeof client)['words.json']['reverseDictionary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordsJsonReverseDictionaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordsJsonReverseDictionaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['words.json'].reverseDictionary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordsJsonSearchQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>
  >,
) {
  return ['words.json', '/words.json/search/:query', toValue(args)] as const
}

export function getWordsJsonSearchQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordsJsonSearchQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['words.json'].search[':query'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordsJsonSearchQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['search'][':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['words.json']['search'][':query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['words.json']['search'][':query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordsJsonSearchQueryQueryKey>
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
          Awaited<ReturnType<(typeof client)['words.json']['search'][':query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordsJsonSearchQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordsJsonSearchQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['words.json'].search[':query'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWordsJsonWordOfTheDayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>>,
) {
  return ['words.json', '/words.json/wordOfTheDay', toValue(args)] as const
}

export function getWordsJsonWordOfTheDayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWordsJsonWordOfTheDayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['words.json'].wordOfTheDay.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWordsJsonWordOfTheDay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['wordOfTheDay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['words.json']['wordOfTheDay']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['words.json']['wordOfTheDay']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWordsJsonWordOfTheDayQueryKey>
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
          Awaited<ReturnType<(typeof client)['words.json']['wordOfTheDay']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWordsJsonWordOfTheDayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWordsJsonWordOfTheDayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['words.json'].wordOfTheDay.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
