import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2PodcastsCategoriesQueryKey() {
  return ['api', '/api/v2/podcasts/categories'] as const
}

export function getApiV2PodcastsCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2PodcastsCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.podcasts.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PodcastsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.podcasts.categories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.podcasts.categories.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2PodcastsCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PodcastsCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2PodcastsCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.podcasts.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PodcastsCountriesQueryKey() {
  return ['api', '/api/v2/podcasts/countries'] as const
}

export function getApiV2PodcastsCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2PodcastsCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.podcasts.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PodcastsCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.podcasts.countries.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.podcasts.countries.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2PodcastsCountriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PodcastsCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2PodcastsCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.podcasts.countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2PodcastsCreateMutationKey() {
  return ['api', '/api/v2/podcasts/create', 'POST'] as const
}

export function getPostApiV2PodcastsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.podcasts.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PodcastsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.podcasts.create.$post>) {
      return parseResponse(client.api.v2.podcasts.create.$post(args, options))
    },
  })
}

export function usePostApiV2PodcastsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.podcasts.create.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2PodcastsCreateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2PodcastsLanguagesQueryKey() {
  return ['api', '/api/v2/podcasts/languages'] as const
}

export function getApiV2PodcastsLanguagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2PodcastsLanguagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.podcasts.languages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PodcastsLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.languages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.podcasts.languages.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.podcasts.languages.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2PodcastsLanguagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.languages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PodcastsLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2PodcastsLanguagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.podcasts.languages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2PodcastsSearchMutationKey() {
  return ['api', '/api/v2/podcasts/search', 'POST'] as const
}

export function getPostApiV2PodcastsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.podcasts.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PodcastsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.podcasts.search.$post>) {
      return parseResponse(client.api.v2.podcasts.search.$post(args, options))
    },
  })
}

export function usePostApiV2PodcastsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.podcasts.search.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2PodcastsSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2PodcastsPodcastKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>>,
) {
  return ['api', '/api/v2/podcasts/:podcastKey', toValue(args)] as const
}

export function getApiV2PodcastsPodcastKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PodcastsPodcastKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.podcasts[':podcastKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PodcastsPodcastKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PodcastsPodcastKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PodcastsPodcastKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PodcastsPodcastKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.podcasts[':podcastKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV2PodcastsPodcastKeyMutationKey() {
  return ['api', '/api/v2/podcasts/:podcastKey', 'PUT'] as const
}

export function getPutApiV2PodcastsPodcastKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2PodcastsPodcastKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$put']>,
    ) {
      return parseResponse(client.api.v2.podcasts[':podcastKey'].$put(args, options))
    },
  })
}

export function usePutApiV2PodcastsPodcastKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV2PodcastsPodcastKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV2PodcastsPodcastKeyMutationKey() {
  return ['api', '/api/v2/podcasts/:podcastKey', 'DELETE'] as const
}

export function getDeleteApiV2PodcastsPodcastKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PodcastsPodcastKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$delete']>,
    ) {
      return parseResponse(client.api.v2.podcasts[':podcastKey'].$delete(args, options))
    },
  })
}

export function useDeleteApiV2PodcastsPodcastKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV2PodcastsPodcastKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2PodcastsPodcastKeyEpisodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>
  >,
) {
  return ['api', '/api/v2/podcasts/:podcastKey/episodes', toValue(args)] as const
}

export function getApiV2PodcastsPodcastKeyEpisodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PodcastsPodcastKeyEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.podcasts[':podcastKey'].episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PodcastsPodcastKeyEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>
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
                  ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2PodcastsPodcastKeyEpisodesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PodcastsPodcastKeyEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PodcastsPodcastKeyEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.podcasts[':podcastKey'].episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2PodcastsPodcastKeyEpisodesCreateMutationKey() {
  return ['api', '/api/v2/podcasts/:podcastKey/episodes/create', 'POST'] as const
}

export function getPostApiV2PodcastsPodcastKeyEpisodesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.podcasts)[':podcastKey']['episodes']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PodcastsPodcastKeyEpisodesCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.podcasts)[':podcastKey']['episodes']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.podcasts[':podcastKey'].episodes.create.$post(args, options),
      )
    },
  })
}

export function usePostApiV2PodcastsPodcastKeyEpisodesCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.podcasts)[':podcastKey']['episodes']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.podcasts)[':podcastKey']['episodes']['create']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2PodcastsPodcastKeyEpisodesCreateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
    >
  >,
) {
  return ['api', '/api/v2/podcasts/:podcastKey/episodes/:episodeKey', toValue(args)] as const
}

export function getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.podcasts[':podcastKey'].episodes[':episodeKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PodcastsPodcastKeyEpisodesEpisodeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
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
                    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
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
                    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryKey>
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
              (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.podcasts[':podcastKey'].episodes[':episodeKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV2PodcastsPodcastKeyEpisodesEpisodeKeyMutationKey() {
  return ['api', '/api/v2/podcasts/:podcastKey/episodes/:episodeKey', 'PUT'] as const
}

export function getPutApiV2PodcastsPodcastKeyEpisodesEpisodeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2PodcastsPodcastKeyEpisodesEpisodeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.podcasts[':podcastKey'].episodes[':episodeKey'].$put(args, options),
      )
    },
  })
}

export function usePutApiV2PodcastsPodcastKeyEpisodesEpisodeKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV2PodcastsPodcastKeyEpisodesEpisodeKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyMutationKey() {
  return ['api', '/api/v2/podcasts/:podcastKey/episodes/:episodeKey', 'DELETE'] as const
}

export function getDeleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.podcasts[':podcastKey'].episodes[':episodeKey'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV2PodcastsPodcastKeyEpisodesEpisodeKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2StationsCountriesQueryKey() {
  return ['api', '/api/v2/stations/countries'] as const
}

export function getApiV2StationsCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2StationsCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.stations.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StationsCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.stations.countries.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.stations.countries.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2StationsCountriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StationsCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2StationsCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.stations.countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2StationsGenresQueryKey() {
  return ['api', '/api/v2/stations/genres'] as const
}

export function getApiV2StationsGenresQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2StationsGenresQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.stations.genres.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StationsGenres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.genres.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.genres.$get>>>
            >
          >,
          ReturnType<typeof getApiV2StationsGenresQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.genres.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StationsGenresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2StationsGenresQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.stations.genres.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2StationsLanguagesQueryKey() {
  return ['api', '/api/v2/stations/languages'] as const
}

export function getApiV2StationsLanguagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2StationsLanguagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.stations.languages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StationsLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.languages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.stations.languages.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.stations.languages.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2StationsLanguagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.languages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StationsLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2StationsLanguagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.stations.languages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2StationsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.stations.list.$get>>,
) {
  return ['api', '/api/v2/stations/list', toValue(args)] as const
}

export function getApiV2StationsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.stations.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2StationsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.stations.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StationsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.stations.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.list.$get>>>
            >
          >,
          ReturnType<typeof getApiV2StationsListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StationsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2StationsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.stations.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2StationsSearchMutationKey() {
  return ['api', '/api/v2/stations/search', 'POST'] as const
}

export function getPostApiV2StationsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.stations.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2StationsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.stations.search.$post>) {
      return parseResponse(client.api.v2.stations.search.$post(args, options))
    },
  })
}

export function usePostApiV2StationsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.stations.search.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2StationsSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
