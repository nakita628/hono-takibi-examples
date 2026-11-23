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
  args: MaybeRefOrGetter<InferRequestType<typeof client.classification_inclusions.$get>>,
) {
  return ['classification_inclusions', '/classification_inclusions', toValue(args)] as const
}

export function getClassificationInclusionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classification_inclusions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationInclusionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classification_inclusions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationInclusions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classification_inclusions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classification_inclusions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.classification_inclusions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.classification_inclusions.$get>>
              >
            >
          >,
          ReturnType<typeof getClassificationInclusionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.classification_inclusions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationInclusionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationInclusionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classification_inclusions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationInclusionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classification_inclusions)[':id']['$get']>
  >,
) {
  return ['classification_inclusions', '/classification_inclusions/:id', toValue(args)] as const
}

export function getClassificationInclusionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classification_inclusions)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationInclusionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classification_inclusions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classification_inclusions)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classification_inclusions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassificationInclusionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.classification_inclusions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationInclusionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationInclusionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classification_inclusions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classifications.$get>>,
) {
  return ['classifications', '/classifications', toValue(args)] as const
}

export function getClassificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$get>>>
            >
          >,
          ReturnType<typeof getClassificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.classifications)[':id']['$get']>>,
) {
  return ['classifications', '/classifications/:id', toValue(args)] as const
}

export function getClassificationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.classifications)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.classifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.classifications)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassificationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.classifications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCreditsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credits.$get>>,
) {
  return ['credits', '/credits', toValue(args)] as const
}

export function getCreditsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credits.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCredits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credits.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credits.$get>>>>
          >,
          ReturnType<typeof getCreditsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCreditsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credits)[':id']['$get']>>,
) {
  return ['credits', '/credits/:id', toValue(args)] as const
}

export function getCreditsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credits)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credits[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreditsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.credits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credits)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.credits)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.credits)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCreditsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.credits)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreditsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credits[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episodes.$get>>,
) {
  return ['episodes', '/episodes', toValue(args)] as const
}

export function getEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
          >,
          ReturnType<typeof getEpisodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':id']['$get']>>,
) {
  return ['episodes', '/episodes/:id', toValue(args)] as const
}

export function getEpisodesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpisodesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEpisodesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesIdNextSiblingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':id']['next_sibling']['$get']>>,
) {
  return ['episodes', '/episodes/:id/next_sibling', toValue(args)] as const
}

export function getEpisodesIdNextSiblingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':id']['next_sibling']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesIdNextSiblingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes[':id'].next_sibling.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':id']['next_sibling']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':id']['next_sibling']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpisodesIdNextSiblingQueryKey>
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
          Awaited<ReturnType<(typeof client.episodes)[':id']['next_sibling']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesIdNextSiblingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesIdNextSiblingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes[':id'].next_sibling.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesIdPreviousSiblingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.episodes)[':id']['previous_sibling']['$get']>
  >,
) {
  return ['episodes', '/episodes/:id/previous_sibling', toValue(args)] as const
}

export function getEpisodesIdPreviousSiblingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.episodes)[':id']['previous_sibling']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesIdPreviousSiblingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes[':id'].previous_sibling.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.episodes)[':id']['previous_sibling']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':id']['previous_sibling']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpisodesIdPreviousSiblingQueryKey>
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
          Awaited<ReturnType<(typeof client.episodes)[':id']['previous_sibling']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesIdPreviousSiblingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesIdPreviousSiblingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes[':id'].previous_sibling.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
) {
  return ['images', '/images', toValue(args)] as const
}

export function getImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          ReturnType<typeof getImagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['$get']>>,
) {
  return ['images', '/images/:id', toValue(args)] as const
}

export function getImagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getImagesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMediaAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.media_assets.$get>>,
) {
  return ['media_assets', '/media_assets', toValue(args)] as const
}

export function getMediaAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.media_assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media_assets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMediaAssets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media_assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.media_assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media_assets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media_assets.$get>>>>
          >,
          ReturnType<typeof getMediaAssetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media_assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMediaAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.media_assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMediaAssetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media_assets)[':id']['$get']>>,
) {
  return ['media_assets', '/media_assets/:id', toValue(args)] as const
}

export function getMediaAssetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media_assets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaAssetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media_assets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaAssetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.media_assets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media_assets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.media_assets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.media_assets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getMediaAssetsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.media_assets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaAssetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaAssetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.media_assets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
) {
  return ['networks', '/networks', toValue(args)] as const
}

export function getNetworksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
          >,
          ReturnType<typeof getNetworksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['$get']>>,
) {
  return ['networks', '/networks/:id', toValue(args)] as const
}

export function getNetworksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getNetworksIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
) {
  return ['people', '/people', toValue(args)] as const
}

export function getPeopleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          ReturnType<typeof getPeopleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
) {
  return ['people', '/people/:id', toValue(args)] as const
}

export function getPeopleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPeopleIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeasonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.seasons.$get>>,
) {
  return ['seasons', '/seasons', toValue(args)] as const
}

export function getSeasonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.seasons.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.seasons.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeasons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.seasons.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
          >,
          ReturnType<typeof getSeasonsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.seasons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeasonsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.seasons)[':id']['$get']>>,
) {
  return ['seasons', '/seasons/:id', toValue(args)] as const
}

export function getSeasonsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.seasons)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeasonsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.seasons[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeasonsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.seasons)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSeasonsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeasonsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeasonsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.seasons[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
) {
  return ['series', '/series', toValue(args)] as const
}

export function getSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          ReturnType<typeof getSeriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['$get']>>,
) {
  return ['series', '/series/:id', toValue(args)] as const
}

export function getSeriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSeriesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
