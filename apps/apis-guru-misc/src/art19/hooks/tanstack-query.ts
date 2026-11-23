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

export function getClassificationInclusionsKey() {
  return ['classification_inclusions'] as const
}

export function getClassificationsKey() {
  return ['classifications'] as const
}

export function getCreditsKey() {
  return ['credits'] as const
}

export function getEpisodesKey() {
  return ['episodes'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getMediaAssetsKey() {
  return ['media_assets'] as const
}

export function getNetworksKey() {
  return ['networks'] as const
}

export function getPeopleKey() {
  return ['people'] as const
}

export function getSeasonsKey() {
  return ['seasons'] as const
}

export function getSeriesKey() {
  return ['series'] as const
}

export function getClassificationInclusionsQueryKey(
  args: InferRequestType<typeof client.classification_inclusions.$get>,
) {
  return ['classification_inclusions', '/classification_inclusions', args] as const
}

export function getClassificationInclusionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classification_inclusions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classification_inclusions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.classification_inclusions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationInclusionsQueryKey>
  >({
    queryKey: getClassificationInclusionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classification_inclusions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassificationInclusions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classification_inclusions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classification_inclusions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.classification_inclusions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationInclusionsQueryKey>
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
      ...getClassificationInclusionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationInclusions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classification_inclusions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classification_inclusions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.classification_inclusions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationInclusionsQueryKey>
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
      ...getClassificationInclusionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClassificationInclusionsIdQueryKey(
  args: InferRequestType<(typeof client.classification_inclusions)[':id']['$get']>,
) {
  return ['classification_inclusions', '/classification_inclusions/:id', args] as const
}

export function getClassificationInclusionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classification_inclusions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classification_inclusions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classification_inclusions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationInclusionsIdQueryKey>
  >({
    queryKey: getClassificationInclusionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classification_inclusions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassificationInclusionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classification_inclusions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classification_inclusions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classification_inclusions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationInclusionsIdQueryKey>
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
      ...getClassificationInclusionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationInclusionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classification_inclusions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classification_inclusions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classification_inclusions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationInclusionsIdQueryKey>
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
      ...getClassificationInclusionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClassificationsQueryKey(
  args: InferRequestType<typeof client.classifications.$get>,
) {
  return ['classifications', '/classifications', args] as const
}

export function getClassificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.classifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsQueryKey>
  >({
    queryKey: getClassificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClassifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classifications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClassificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClassifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classifications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClassificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getClassificationsIdQueryKey(
  args: InferRequestType<(typeof client.classifications)[':id']['$get']>,
) {
  return ['classifications', '/classifications/:id', args] as const
}

export function getClassificationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.classifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.classifications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsIdQueryKey>
  >({
    queryKey: getClassificationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.classifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classifications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClassificationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClassificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.classifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classifications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClassificationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCreditsQueryKey(args: InferRequestType<typeof client.credits.$get>) {
  return ['credits', '/credits', args] as const
}

export function getCreditsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.credits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreditsQueryKey>
  >({
    queryKey: getCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCredits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.credits.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credits.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCreditsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCredits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.credits.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credits.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCreditsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCreditsIdQueryKey(
  args: InferRequestType<(typeof client.credits)[':id']['$get']>,
) {
  return ['credits', '/credits/:id', args] as const
}

export function getCreditsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.credits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.credits)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.credits)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreditsIdQueryKey>
  >({
    queryKey: getCreditsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credits[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCreditsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.credits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credits)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.credits)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreditsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCreditsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCreditsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.credits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credits)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.credits)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreditsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCreditsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEpisodesQueryKey(args: InferRequestType<typeof client.episodes.$get>) {
  return ['episodes', '/episodes', args] as const
}

export function getEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.episodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEpisodesQueryKey>
  >({
    queryKey: getEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.episodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEpisodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.episodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEpisodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEpisodesIdQueryKey(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
) {
  return ['episodes', '/episodes/:id', args] as const
}

export function getEpisodesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.episodes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesIdQueryKey>
  >({
    queryKey: getEpisodesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEpisodesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEpisodesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEpisodesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEpisodesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEpisodesIdNextSiblingQueryKey(
  args: InferRequestType<(typeof client.episodes)[':id']['next_sibling']['$get']>,
) {
  return ['episodes', '/episodes/:id/next_sibling', args] as const
}

export function getEpisodesIdNextSiblingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':id']['next_sibling']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['next_sibling']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.episodes)[':id']['next_sibling']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesIdNextSiblingQueryKey>
  >({
    queryKey: getEpisodesIdNextSiblingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes[':id'].next_sibling.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEpisodesIdNextSibling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':id']['next_sibling']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['next_sibling']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.episodes)[':id']['next_sibling']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesIdNextSiblingQueryKey>
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
      ...getEpisodesIdNextSiblingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEpisodesIdNextSibling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':id']['next_sibling']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['next_sibling']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.episodes)[':id']['next_sibling']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesIdNextSiblingQueryKey>
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
      ...getEpisodesIdNextSiblingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEpisodesIdPreviousSiblingQueryKey(
  args: InferRequestType<(typeof client.episodes)[':id']['previous_sibling']['$get']>,
) {
  return ['episodes', '/episodes/:id/previous_sibling', args] as const
}

export function getEpisodesIdPreviousSiblingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':id']['previous_sibling']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['previous_sibling']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.episodes)[':id']['previous_sibling']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesIdPreviousSiblingQueryKey>
  >({
    queryKey: getEpisodesIdPreviousSiblingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes[':id'].previous_sibling.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEpisodesIdPreviousSibling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':id']['previous_sibling']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['previous_sibling']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.episodes)[':id']['previous_sibling']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesIdPreviousSiblingQueryKey>
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
      ...getEpisodesIdPreviousSiblingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEpisodesIdPreviousSibling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':id']['previous_sibling']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['previous_sibling']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.episodes)[':id']['previous_sibling']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesIdPreviousSiblingQueryKey>
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
      ...getEpisodesIdPreviousSiblingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getImagesQueryKey(args: InferRequestType<typeof client.images.$get>) {
  return ['images', '/images', args] as const
}

export function getImagesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >({
    queryKey: getImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.images.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.images.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getImagesIdQueryKey(args: InferRequestType<(typeof client.images)[':id']['$get']>) {
  return ['images', '/images/:id', args] as const
}

export function getImagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.images)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdQueryKey>
  >({
    queryKey: getImagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMediaAssetsQueryKey(args: InferRequestType<typeof client.media_assets.$get>) {
  return ['media_assets', '/media_assets', args] as const
}

export function getMediaAssetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media_assets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.media_assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media_assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMediaAssetsQueryKey>
  >({
    queryKey: getMediaAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media_assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMediaAssets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media_assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.media_assets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media_assets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMediaAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMediaAssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMediaAssets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media_assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.media_assets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media_assets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMediaAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMediaAssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMediaAssetsIdQueryKey(
  args: InferRequestType<(typeof client.media_assets)[':id']['$get']>,
) {
  return ['media_assets', '/media_assets/:id', args] as const
}

export function getMediaAssetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.media_assets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media_assets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.media_assets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaAssetsIdQueryKey>
  >({
    queryKey: getMediaAssetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media_assets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMediaAssetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.media_assets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media_assets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.media_assets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaAssetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMediaAssetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMediaAssetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.media_assets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media_assets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.media_assets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaAssetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMediaAssetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNetworksQueryKey(args: InferRequestType<typeof client.networks.$get>) {
  return ['networks', '/networks', args] as const
}

export function getNetworksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.networks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworksQueryKey>
  >({
    queryKey: getNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNetworksIdQueryKey(
  args: InferRequestType<(typeof client.networks)[':id']['$get']>,
) {
  return ['networks', '/networks/:id', args] as const
}

export function getNetworksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.networks)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksIdQueryKey>
  >({
    queryKey: getNetworksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNetworksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleQueryKey(args: InferRequestType<typeof client.people.$get>) {
  return ['people', '/people', args] as const
}

export function getPeopleQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.people.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >({
    queryKey: getPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.people.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.people.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleIdQueryKey(args: InferRequestType<(typeof client.people)[':id']['$get']>) {
  return ['people', '/people/:id', args] as const
}

export function getPeopleIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.people)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdQueryKey>
  >({
    queryKey: getPeopleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeasonsQueryKey(args: InferRequestType<typeof client.seasons.$get>) {
  return ['seasons', '/seasons', args] as const
}

export function getSeasonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.seasons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeasonsQueryKey>
  >({
    queryKey: getSeasonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.seasons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeasons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.seasons.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeasonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeasons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.seasons.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeasonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeasonsIdQueryKey(
  args: InferRequestType<(typeof client.seasons)[':id']['$get']>,
) {
  return ['seasons', '/seasons/:id', args] as const
}

export function getSeasonsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.seasons)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeasonsIdQueryKey>
  >({
    queryKey: getSeasonsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.seasons[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeasonsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.seasons)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeasonsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeasonsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeasonsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.seasons)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeasonsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeasonsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesQueryKey(args: InferRequestType<typeof client.series.$get>) {
  return ['series', '/series', args] as const
}

export function getSeriesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >({
    queryKey: getSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesIdQueryKey(args: InferRequestType<(typeof client.series)[':id']['$get']>) {
  return ['series', '/series/:id', args] as const
}

export function getSeriesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.series)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdQueryKey>
  >({
    queryKey: getSeriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
