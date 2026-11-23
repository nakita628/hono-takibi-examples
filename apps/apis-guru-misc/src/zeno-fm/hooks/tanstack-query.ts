import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2PodcastsCategoriesQueryKey() {
  return ['api', '/api/v2/podcasts/categories'] as const
}

export function getApiV2PodcastsCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PodcastsCategoriesQueryKey>
  >({
    queryKey: getApiV2PodcastsCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.podcasts.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PodcastsCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2PodcastsCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2PodcastsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PodcastsCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2PodcastsCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2PodcastsCountriesQueryKey() {
  return ['api', '/api/v2/podcasts/countries'] as const
}

export function getApiV2PodcastsCountriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PodcastsCountriesQueryKey>
  >({
    queryKey: getApiV2PodcastsCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.podcasts.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PodcastsCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2PodcastsCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2PodcastsCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PodcastsCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2PodcastsCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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

export function getApiV2PodcastsLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.languages.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.languages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PodcastsLanguagesQueryKey>
  >({
    queryKey: getApiV2PodcastsLanguagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.podcasts.languages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.languages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PodcastsLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2PodcastsLanguagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2PodcastsLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.languages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.podcasts.languages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PodcastsLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2PodcastsLanguagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>,
) {
  return ['api', '/api/v2/podcasts/:podcastKey', args] as const
}

export function getApiV2PodcastsPodcastKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2PodcastsPodcastKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.podcasts[':podcastKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV2PodcastsPodcastKeyQueryKey>
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
      ...getApiV2PodcastsPodcastKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2PodcastsPodcastKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApiV2PodcastsPodcastKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>,
) {
  return ['api', '/api/v2/podcasts/:podcastKey/episodes', args] as const
}

export function getApiV2PodcastsPodcastKeyEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2PodcastsPodcastKeyEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.podcasts[':podcastKey'].episodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV2PodcastsPodcastKeyEpisodesQueryKey>
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
      ...getApiV2PodcastsPodcastKeyEpisodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2PodcastsPodcastKeyEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV2PodcastsPodcastKeyEpisodesQueryKey>
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
      ...getApiV2PodcastsPodcastKeyEpisodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
  >,
) {
  return ['api', '/api/v2/podcasts/:podcastKey/episodes/:episodeKey', args] as const
}

export function getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.podcasts[':podcastKey'].episodes[':episodeKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryKey>
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
      ...getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2PodcastsPodcastKeyEpisodesEpisodeKey<
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
  args: InferRequestType<
    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getApiV2StationsCountriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StationsCountriesQueryKey>
  >({
    queryKey: getApiV2StationsCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.stations.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2StationsCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2StationsCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2StationsCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2StationsCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2StationsCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2StationsGenresQueryKey() {
  return ['api', '/api/v2/stations/genres'] as const
}

export function getApiV2StationsGenresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.genres.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.genres.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StationsGenresQueryKey>
  >({
    queryKey: getApiV2StationsGenresQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.stations.genres.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2StationsGenres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.genres.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2StationsGenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2StationsGenresQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2StationsGenres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.genres.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2StationsGenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2StationsGenresQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2StationsLanguagesQueryKey() {
  return ['api', '/api/v2/stations/languages'] as const
}

export function getApiV2StationsLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.languages.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.languages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StationsLanguagesQueryKey>
  >({
    queryKey: getApiV2StationsLanguagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.stations.languages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.languages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2StationsLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2StationsLanguagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2StationsLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.languages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.languages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2StationsLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2StationsLanguagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2StationsListQueryKey(
  args: InferRequestType<typeof client.api.v2.stations.list.$get>,
) {
  return ['api', '/api/v2/stations/list', args] as const
}

export function getApiV2StationsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.stations.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StationsListQueryKey>
  >({
    queryKey: getApiV2StationsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.stations.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2StationsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.stations.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2StationsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2StationsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2StationsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.stations.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stations.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2StationsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2StationsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
