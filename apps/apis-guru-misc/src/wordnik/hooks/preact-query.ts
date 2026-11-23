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

export function getWordJsonKey() {
  return ['word.json'] as const
}

export function getWordsJsonKey() {
  return ['words.json'] as const
}

export function getWordJsonWordAudioQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>,
) {
  return ['word.json', '/word.json/:word/audio', args] as const
}

export function getWordJsonWordAudioQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['audio']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordAudioQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].audio.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordAudioQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWordJsonWordAudioQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWordJsonWordAudio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['audio']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['audio']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWordJsonWordAudioQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWordJsonWordDefinitionsQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>,
) {
  return ['word.json', '/word.json/:word/definitions', args] as const
}

export function getWordJsonWordDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].definitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordDefinitionsQueryKey>
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
      ...getWordJsonWordDefinitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordJsonWordDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['definitions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordJsonWordDefinitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWordJsonWordEtymologiesQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>,
) {
  return ['word.json', '/word.json/:word/etymologies', args] as const
}

export function getWordJsonWordEtymologiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['etymologies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordEtymologiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].etymologies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordEtymologiesQueryKey>
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
      ...getWordJsonWordEtymologiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordJsonWordEtymologies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['etymologies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['etymologies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordJsonWordEtymologiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWordJsonWordExamplesQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>,
) {
  return ['word.json', '/word.json/:word/examples', args] as const
}

export function getWordJsonWordExamplesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordExamplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].examples.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordExamplesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWordJsonWordExamplesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWordJsonWordExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['examples']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWordJsonWordExamplesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWordJsonWordFrequencyQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>,
) {
  return ['word.json', '/word.json/:word/frequency', args] as const
}

export function getWordJsonWordFrequencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['frequency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordFrequencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].frequency.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordFrequencyQueryKey>
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
      ...getWordJsonWordFrequencyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordJsonWordFrequency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['frequency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['frequency']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordJsonWordFrequencyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWordJsonWordHyphenationQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>,
) {
  return ['word.json', '/word.json/:word/hyphenation', args] as const
}

export function getWordJsonWordHyphenationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['hyphenation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordHyphenationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].hyphenation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordHyphenationQueryKey>
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
      ...getWordJsonWordHyphenationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordJsonWordHyphenation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['hyphenation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['hyphenation']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordJsonWordHyphenationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWordJsonWordPhrasesQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>,
) {
  return ['word.json', '/word.json/:word/phrases', args] as const
}

export function getWordJsonWordPhrasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['phrases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordPhrasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].phrases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordPhrasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWordJsonWordPhrasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWordJsonWordPhrases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['phrases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['phrases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWordJsonWordPhrasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWordJsonWordPronunciationsQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>,
) {
  return ['word.json', '/word.json/:word/pronunciations', args] as const
}

export function getWordJsonWordPronunciationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['pronunciations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordPronunciationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].pronunciations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordPronunciationsQueryKey>
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
      ...getWordJsonWordPronunciationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordJsonWordPronunciations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['pronunciations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['pronunciations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordJsonWordPronunciationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWordJsonWordRelatedWordsQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>,
) {
  return ['word.json', '/word.json/:word/relatedWords', args] as const
}

export function getWordJsonWordRelatedWordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['relatedWords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordRelatedWordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].relatedWords.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordRelatedWordsQueryKey>
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
      ...getWordJsonWordRelatedWordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordJsonWordRelatedWords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['relatedWords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['relatedWords']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordJsonWordRelatedWordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWordJsonWordScrabbleScoreQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>,
) {
  return ['word.json', '/word.json/:word/scrabbleScore', args] as const
}

export function getWordJsonWordScrabbleScoreQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordScrabbleScoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].scrabbleScore.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordScrabbleScoreQueryKey>
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
      ...getWordJsonWordScrabbleScoreQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordJsonWordScrabbleScore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['scrabbleScore']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordJsonWordScrabbleScoreQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWordJsonWordTopExampleQueryKey(
  args: InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>,
) {
  return ['word.json', '/word.json/:word/topExample', args] as const
}

export function getWordJsonWordTopExampleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['topExample']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordJsonWordTopExampleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['word.json'][':word'].topExample.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordJsonWordTopExampleQueryKey>
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
      ...getWordJsonWordTopExampleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordJsonWordTopExample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['word.json'][':word']['topExample']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['word.json'][':word']['topExample']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordJsonWordTopExampleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWordsJsonRandomWordQueryKey(
  args: InferRequestType<(typeof client)['words.json']['randomWord']['$get']>,
) {
  return ['words.json', '/words.json/randomWord', args] as const
}

export function getWordsJsonRandomWordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['randomWord']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordsJsonRandomWordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['words.json'].randomWord.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWordsJsonRandomWord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['randomWord']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordsJsonRandomWordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWordsJsonRandomWordQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWordsJsonRandomWord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['words.json']['randomWord']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['randomWord']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWordsJsonRandomWordQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWordsJsonRandomWordsQueryKey(
  args: InferRequestType<(typeof client)['words.json']['randomWords']['$get']>,
) {
  return ['words.json', '/words.json/randomWords', args] as const
}

export function getWordsJsonRandomWordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['randomWords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['randomWords']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordsJsonRandomWordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['words.json'].randomWords.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['words.json']['randomWords']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordsJsonRandomWordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWordsJsonRandomWordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWordsJsonRandomWords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['randomWords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['randomWords']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWordsJsonRandomWordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWordsJsonReverseDictionaryQueryKey(
  args: InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>,
) {
  return ['words.json', '/words.json/reverseDictionary', args] as const
}

export function getWordsJsonReverseDictionaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['reverseDictionary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordsJsonReverseDictionaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['words.json'].reverseDictionary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordsJsonReverseDictionaryQueryKey>
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
      ...getWordsJsonReverseDictionaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordsJsonReverseDictionary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['reverseDictionary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['reverseDictionary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordsJsonReverseDictionaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWordsJsonSearchQueryQueryKey(
  args: InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>,
) {
  return ['words.json', '/words.json/search/:query', args] as const
}

export function getWordsJsonSearchQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['search'][':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordsJsonSearchQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['words.json'].search[':query'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordsJsonSearchQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWordsJsonSearchQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWordsJsonSearchQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['search'][':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['search'][':query']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWordsJsonSearchQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWordsJsonWordOfTheDayQueryKey(
  args: InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>,
) {
  return ['words.json', '/words.json/wordOfTheDay', args] as const
}

export function getWordsJsonWordOfTheDayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['wordOfTheDay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWordsJsonWordOfTheDayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['words.json'].wordOfTheDay.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWordsJsonWordOfTheDayQueryKey>
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
      ...getWordsJsonWordOfTheDayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWordsJsonWordOfTheDay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['words.json']['wordOfTheDay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['words.json']['wordOfTheDay']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getWordsJsonWordOfTheDayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
