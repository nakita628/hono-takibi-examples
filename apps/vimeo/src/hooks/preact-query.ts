import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getContentratingsKey() {
  return ['contentratings'] as const
}

export function getCreativecommonsKey() {
  return ['creativecommons'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getLanguagesKey() {
  return ['languages'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getOndemandKey() {
  return ['ondemand'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getTutorialKey() {
  return ['tutorial'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVideosKey() {
  return ['videos'] as const
}

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCategoriesQueryKey(args: InferRequestType<typeof client.categories.$get>) {
  return ['categories', '/categories', args] as const
}

export function getCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >({
    queryKey: getCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCategoriesCategoryQueryKey(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
) {
  return ['categories', '/categories/:category', args] as const
}

export function getCategoriesCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryQueryKey>
  >({
    queryKey: getCategoriesCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCategoriesCategoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCategoriesCategoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCategoriesCategoryChannelsQueryKey(
  args: InferRequestType<(typeof client.categories)[':category']['channels']['$get']>,
) {
  return ['categories', '/categories/:category/channels', args] as const
}

export function getCategoriesCategoryChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryChannelsQueryKey>
  >({
    queryKey: getCategoriesCategoryChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':category'].channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCategoriesCategoryChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['channels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryChannelsQueryKey>
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
      ...getCategoriesCategoryChannelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCategoriesCategoryChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['channels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryChannelsQueryKey>
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
      ...getCategoriesCategoryChannelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCategoriesCategoryGroupsQueryKey(
  args: InferRequestType<(typeof client.categories)[':category']['groups']['$get']>,
) {
  return ['categories', '/categories/:category/groups', args] as const
}

export function getCategoriesCategoryGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryGroupsQueryKey>
  >({
    queryKey: getCategoriesCategoryGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':category'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCategoriesCategoryGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryGroupsQueryKey>
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
      ...getCategoriesCategoryGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCategoriesCategoryGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryGroupsQueryKey>
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
      ...getCategoriesCategoryGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCategoriesCategoryVideosQueryKey(
  args: InferRequestType<(typeof client.categories)[':category']['videos']['$get']>,
) {
  return ['categories', '/categories/:category/videos', args] as const
}

export function getCategoriesCategoryVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryVideosQueryKey>
  >({
    queryKey: getCategoriesCategoryVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':category'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCategoriesCategoryVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryVideosQueryKey>
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
      ...getCategoriesCategoryVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCategoriesCategoryVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryVideosQueryKey>
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
      ...getCategoriesCategoryVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCategoriesCategoryVideosVideoIdQueryKey(
  args: InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>,
) {
  return ['categories', '/categories/:category/videos/:video_id', args] as const
}

export function getCategoriesCategoryVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryVideosVideoIdQueryKey>
  >({
    queryKey: getCategoriesCategoryVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':category'].videos[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCategoriesCategoryVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryVideosVideoIdQueryKey>
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
      ...getCategoriesCategoryVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCategoriesCategoryVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryVideosVideoIdQueryKey>
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
      ...getCategoriesCategoryVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChannelsQueryKey(args: InferRequestType<typeof client.channels.$get>) {
  return ['channels', '/channels', args] as const
}

export function getChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >({
    queryKey: getChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostChannelsMutationKey() {
  return ['channels', '/channels', 'POST'] as const
}

export function getPostChannelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>>,
    TError,
    InferRequestType<typeof client.channels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.$post>) {
      return parseResponse(client.channels.$post(args, options))
    },
  })
}

export function usePostChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.channels.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChannelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChannelsChannelIdQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
) {
  return ['channels', '/channels/:channel_id', args] as const
}

export function getChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdQueryKey>
  >({
    queryKey: getChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteChannelsChannelIdMutationKey() {
  return ['channels', '/channels/:channel_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':channel_id']['$delete']>) {
      return parseResponse(client.channels[':channel_id'].$delete(args, options))
    },
  })
}

export function useDeleteChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchChannelsChannelIdMutationKey() {
  return ['channels', '/channels/:channel_id', 'PATCH'] as const
}

export function getPatchChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelsChannelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':channel_id']['$patch']>) {
      return parseResponse(client.channels[':channel_id'].$patch(args, options))
    },
  })
}

export function usePatchChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsChannelIdCategoriesQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>,
) {
  return ['channels', '/channels/:channel_id/categories', args] as const
}

export function getChannelsChannelIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdCategoriesQueryKey>
  >({
    queryKey: getChannelsChannelIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdCategoriesQueryKey>
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
      ...getChannelsChannelIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdCategoriesQueryKey>
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
      ...getChannelsChannelIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdCategoriesMutationKey() {
  return ['channels', '/channels/:channel_id/categories', 'PUT'] as const
}

export function getPutChannelsChannelIdCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['categories']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$put']>,
    ) {
      return parseResponse(client.channels[':channel_id'].categories.$put(args, options))
    },
  })
}

export function usePutChannelsChannelIdCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['categories']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChannelsChannelIdCategoriesMutationOptions<
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

export function getPutChannelsChannelIdCategoriesCategoryMutationKey() {
  return ['channels', '/channels/:channel_id/categories/:category', 'PUT'] as const
}

export function getPutChannelsChannelIdCategoriesCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['categories'][':category']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['categories'][':category']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdCategoriesCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['categories'][':category']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].categories[':category'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsChannelIdCategoriesCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.channels)[':channel_id']['categories'][':category']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.channels)[':channel_id']['categories'][':category']['$put']
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
  const mutationDefaults = getPutChannelsChannelIdCategoriesCategoryMutationOptions<
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

export function getDeleteChannelsChannelIdCategoriesCategoryMutationKey() {
  return ['channels', '/channels/:channel_id/categories/:category', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdCategoriesCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['categories'][':category']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['categories'][':category']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdCategoriesCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['categories'][':category']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].categories[':category'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdCategoriesCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.channels)[':channel_id']['categories'][':category']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.channels)[':channel_id']['categories'][':category']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdCategoriesCategoryMutationOptions<
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

export function getChannelsChannelIdModeratorsQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>,
) {
  return ['channels', '/channels/:channel_id/moderators', args] as const
}

export function getChannelsChannelIdModeratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdModeratorsQueryKey>
  >({
    queryKey: getChannelsChannelIdModeratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].moderators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdModeratorsQueryKey>
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
      ...getChannelsChannelIdModeratorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdModeratorsQueryKey>
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
      ...getChannelsChannelIdModeratorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdModeratorsMutationKey() {
  return ['channels', '/channels/:channel_id/moderators', 'PUT'] as const
}

export function getPutChannelsChannelIdModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdModeratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$put']>,
    ) {
      return parseResponse(client.channels[':channel_id'].moderators.$put(args, options))
    },
  })
}

export function usePutChannelsChannelIdModerators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChannelsChannelIdModeratorsMutationOptions<
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

export function getDeleteChannelsChannelIdModeratorsMutationKey() {
  return ['channels', '/channels/:channel_id/moderators', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdModeratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$delete']>,
    ) {
      return parseResponse(client.channels[':channel_id'].moderators.$delete(args, options))
    },
  })
}

export function useDeleteChannelsChannelIdModerators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['moderators']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChannelsChannelIdModeratorsMutationOptions<
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

export function getPatchChannelsChannelIdModeratorsMutationKey() {
  return ['channels', '/channels/:channel_id/moderators', 'PATCH'] as const
}

export function getPatchChannelsChannelIdModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelsChannelIdModeratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$patch']>,
    ) {
      return parseResponse(client.channels[':channel_id'].moderators.$patch(args, options))
    },
  })
}

export function usePatchChannelsChannelIdModerators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchChannelsChannelIdModeratorsMutationOptions<
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

export function getChannelsChannelIdModeratorsUserIdQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>,
) {
  return ['channels', '/channels/:channel_id/moderators/:user_id', args] as const
}

export function getChannelsChannelIdModeratorsUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdModeratorsUserIdQueryKey>
  >({
    queryKey: getChannelsChannelIdModeratorsUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].moderators[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdModeratorsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdModeratorsUserIdQueryKey>
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
      ...getChannelsChannelIdModeratorsUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdModeratorsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdModeratorsUserIdQueryKey>
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
      ...getChannelsChannelIdModeratorsUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdModeratorsUserIdMutationKey() {
  return ['channels', '/channels/:channel_id/moderators/:user_id', 'PUT'] as const
}

export function getPutChannelsChannelIdModeratorsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdModeratorsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['moderators'][':user_id']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].moderators[':user_id'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsChannelIdModeratorsUserId<
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
                  (typeof client.channels)[':channel_id']['moderators'][':user_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChannelsChannelIdModeratorsUserIdMutationOptions<
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

export function getDeleteChannelsChannelIdModeratorsUserIdMutationKey() {
  return ['channels', '/channels/:channel_id/moderators/:user_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdModeratorsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['moderators'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdModeratorsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['moderators'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].moderators[':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdModeratorsUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.channels)[':channel_id']['moderators'][':user_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.channels)[':channel_id']['moderators'][':user_id']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdModeratorsUserIdMutationOptions<
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

export function getChannelsChannelIdPrivacyUsersQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>,
) {
  return ['channels', '/channels/:channel_id/privacy/users', args] as const
}

export function getChannelsChannelIdPrivacyUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdPrivacyUsersQueryKey>
  >({
    queryKey: getChannelsChannelIdPrivacyUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].privacy.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdPrivacyUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdPrivacyUsersQueryKey>
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
      ...getChannelsChannelIdPrivacyUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdPrivacyUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdPrivacyUsersQueryKey>
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
      ...getChannelsChannelIdPrivacyUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdPrivacyUsersMutationKey() {
  return ['channels', '/channels/:channel_id/privacy/users', 'PUT'] as const
}

export function getPutChannelsChannelIdPrivacyUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdPrivacyUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$put']>,
    ) {
      return parseResponse(client.channels[':channel_id'].privacy.users.$put(args, options))
    },
  })
}

export function usePutChannelsChannelIdPrivacyUsers<
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
                ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChannelsChannelIdPrivacyUsersMutationOptions<
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

export function getPutChannelsChannelIdPrivacyUsersUserIdMutationKey() {
  return ['channels', '/channels/:channel_id/privacy/users/:user_id', 'PUT'] as const
}

export function getPutChannelsChannelIdPrivacyUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdPrivacyUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].privacy.users[':user_id'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsChannelIdPrivacyUsersUserId<
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
                  (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$put']
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
  const mutationDefaults = getPutChannelsChannelIdPrivacyUsersUserIdMutationOptions<
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

export function getDeleteChannelsChannelIdPrivacyUsersUserIdMutationKey() {
  return ['channels', '/channels/:channel_id/privacy/users/:user_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdPrivacyUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdPrivacyUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].privacy.users[':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdPrivacyUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdPrivacyUsersUserIdMutationOptions<
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

export function getChannelsChannelIdTagsQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>,
) {
  return ['channels', '/channels/:channel_id/tags', args] as const
}

export function getChannelsChannelIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdTagsQueryKey>
  >({
    queryKey: getChannelsChannelIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdTagsQueryKey>
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
      ...getChannelsChannelIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdTagsQueryKey>
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
      ...getChannelsChannelIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdTagsMutationKey() {
  return ['channels', '/channels/:channel_id/tags', 'PUT'] as const
}

export function getPutChannelsChannelIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['tags']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$put']>,
    ) {
      return parseResponse(client.channels[':channel_id'].tags.$put(args, options))
    },
  })
}

export function usePutChannelsChannelIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['tags']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChannelsChannelIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsChannelIdTagsWordQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>,
) {
  return ['channels', '/channels/:channel_id/tags/:word', args] as const
}

export function getChannelsChannelIdTagsWordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdTagsWordQueryKey>
  >({
    queryKey: getChannelsChannelIdTagsWordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].tags[':word'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdTagsWord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdTagsWordQueryKey>
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
      ...getChannelsChannelIdTagsWordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdTagsWord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdTagsWordQueryKey>
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
      ...getChannelsChannelIdTagsWordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdTagsWordMutationKey() {
  return ['channels', '/channels/:channel_id/tags/:word', 'PUT'] as const
}

export function getPutChannelsChannelIdTagsWordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdTagsWordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$put']>,
    ) {
      return parseResponse(client.channels[':channel_id'].tags[':word'].$put(args, options))
    },
  })
}

export function usePutChannelsChannelIdTagsWord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChannelsChannelIdTagsWordMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteChannelsChannelIdTagsWordMutationKey() {
  return ['channels', '/channels/:channel_id/tags/:word', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdTagsWordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdTagsWordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$delete']>,
    ) {
      return parseResponse(client.channels[':channel_id'].tags[':word'].$delete(args, options))
    },
  })
}

export function useDeleteChannelsChannelIdTagsWord<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChannelsChannelIdTagsWordMutationOptions<
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

export function getChannelsChannelIdUsersQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>,
) {
  return ['channels', '/channels/:channel_id/users', args] as const
}

export function getChannelsChannelIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdUsersQueryKey>
  >({
    queryKey: getChannelsChannelIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdUsersQueryKey>
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
      ...getChannelsChannelIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdUsersQueryKey>
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
      ...getChannelsChannelIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChannelsChannelIdVideosQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>,
) {
  return ['channels', '/channels/:channel_id/videos', args] as const
}

export function getChannelsChannelIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosQueryKey>
  >({
    queryKey: getChannelsChannelIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosQueryKey>
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
      ...getChannelsChannelIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosQueryKey>
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
      ...getChannelsChannelIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdVideosMutationKey() {
  return ['channels', '/channels/:channel_id/videos', 'PUT'] as const
}

export function getPutChannelsChannelIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['videos']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$put']>,
    ) {
      return parseResponse(client.channels[':channel_id'].videos.$put(args, options))
    },
  })
}

export function usePutChannelsChannelIdVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['videos']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChannelsChannelIdVideosMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteChannelsChannelIdVideosMutationKey() {
  return ['channels', '/channels/:channel_id/videos', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['videos']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$delete']>,
    ) {
      return parseResponse(client.channels[':channel_id'].videos.$delete(args, options))
    },
  })
}

export function useDeleteChannelsChannelIdVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['videos']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChannelsChannelIdVideosMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsChannelIdVideosVideoIdQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id', args] as const
}

export function getChannelsChannelIdVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdQueryKey>
  >({
    queryKey: getChannelsChannelIdVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdVideosVideoIdMutationKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id', 'PUT'] as const
}

export function getPutChannelsChannelIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['videos'][':video_id']['$put']
      >,
    ) {
      return parseResponse(client.channels[':channel_id'].videos[':video_id'].$put(args, options))
    },
  })
}

export function usePutChannelsChannelIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChannelsChannelIdVideosVideoIdMutationOptions<
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

export function getDeleteChannelsChannelIdVideosVideoIdMutationKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['videos'][':video_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChannelsChannelIdVideosVideoIdMutationOptions<
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

export function getChannelsChannelIdVideosVideoIdCommentsQueryKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/comments', args] as const
}

export function getChannelsChannelIdVideosVideoIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdCommentsQueryKey>
  >({
    queryKey: getChannelsChannelIdVideosVideoIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdVideosVideoIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdCommentsQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdVideosVideoIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdCommentsQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdVideosVideoIdCommentsMutationKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id/comments', 'POST'] as const
}

export function getPostChannelsChannelIdVideosVideoIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdVideosVideoIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].comments.$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelIdVideosVideoIdComments<
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
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$post']
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
  const mutationDefaults = getPostChannelsChannelIdVideosVideoIdCommentsMutationOptions<
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

export function getChannelsChannelIdVideosVideoIdCreditsQueryKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/credits', args] as const
}

export function getChannelsChannelIdVideosVideoIdCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdCreditsQueryKey>
  >({
    queryKey: getChannelsChannelIdVideosVideoIdCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdVideosVideoIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdCreditsQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdCreditsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdVideosVideoIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdCreditsQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdCreditsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdVideosVideoIdCreditsMutationKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id/credits', 'POST'] as const
}

export function getPostChannelsChannelIdVideosVideoIdCreditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdVideosVideoIdCreditsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].credits.$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelIdVideosVideoIdCredits<
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
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$post']
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
  const mutationDefaults = getPostChannelsChannelIdVideosVideoIdCreditsMutationOptions<
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

export function getChannelsChannelIdVideosVideoIdLikesQueryKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/likes', args] as const
}

export function getChannelsChannelIdVideosVideoIdLikesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdLikesQueryKey>
  >({
    queryKey: getChannelsChannelIdVideosVideoIdLikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].likes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdVideosVideoIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdLikesQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdLikesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdVideosVideoIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdLikesQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdLikesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChannelsChannelIdVideosVideoIdPicturesQueryKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/pictures', args] as const
}

export function getChannelsChannelIdVideosVideoIdPicturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdPicturesQueryKey>
  >({
    queryKey: getChannelsChannelIdVideosVideoIdPicturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].pictures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdVideosVideoIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdPicturesQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdPicturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdVideosVideoIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdPicturesQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdPicturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdVideosVideoIdPicturesMutationKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id/pictures', 'POST'] as const
}

export function getPostChannelsChannelIdVideosVideoIdPicturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdVideosVideoIdPicturesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].pictures.$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelIdVideosVideoIdPictures<
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
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$post']
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
  const mutationDefaults = getPostChannelsChannelIdVideosVideoIdPicturesMutationOptions<
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

export function getChannelsChannelIdVideosVideoIdPrivacyUsersQueryKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/privacy/users', args] as const
}

export function getChannelsChannelIdVideosVideoIdPrivacyUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdPrivacyUsersQueryKey>
  >({
    queryKey: getChannelsChannelIdVideosVideoIdPrivacyUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].privacy.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdVideosVideoIdPrivacyUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdPrivacyUsersQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdPrivacyUsersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdVideosVideoIdPrivacyUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdPrivacyUsersQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdPrivacyUsersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdVideosVideoIdPrivacyUsersMutationKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id/privacy/users', 'PUT'] as const
}

export function getPutChannelsChannelIdVideosVideoIdPrivacyUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdVideosVideoIdPrivacyUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].privacy.users.$put(args, options),
      )
    },
  })
}

export function usePutChannelsChannelIdVideosVideoIdPrivacyUsers<
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
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$put']
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
  const mutationDefaults = getPutChannelsChannelIdVideosVideoIdPrivacyUsersMutationOptions<
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

export function getChannelsChannelIdVideosVideoIdTexttracksQueryKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/texttracks', args] as const
}

export function getChannelsChannelIdVideosVideoIdTexttracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdTexttracksQueryKey>
  >({
    queryKey: getChannelsChannelIdVideosVideoIdTexttracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].texttracks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdVideosVideoIdTexttracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdTexttracksQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdTexttracksQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdVideosVideoIdTexttracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdVideosVideoIdTexttracksQueryKey>
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
      ...getChannelsChannelIdVideosVideoIdTexttracksQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdVideosVideoIdTexttracksMutationKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id/texttracks', 'POST'] as const
}

export function getPostChannelsChannelIdVideosVideoIdTexttracksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdVideosVideoIdTexttracksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].texttracks.$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelIdVideosVideoIdTexttracks<
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
                  (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$post']
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
  const mutationDefaults = getPostChannelsChannelIdVideosVideoIdTexttracksMutationOptions<
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

export function getContentratingsQueryKey() {
  return ['contentratings', '/contentratings'] as const
}

export function getContentratingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentratingsQueryKey>
  >({
    queryKey: getContentratingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.contentratings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContentratings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContentratingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContentratingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContentratings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContentratingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContentratingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCreativecommonsQueryKey() {
  return ['creativecommons', '/creativecommons'] as const
}

export function getCreativecommonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreativecommonsQueryKey>
  >({
    queryKey: getCreativecommonsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.creativecommons.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCreativecommons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreativecommonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCreativecommonsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCreativecommons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreativecommonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCreativecommonsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsQueryKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGroupsMutationKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function getPostGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.$post>) {
      return parseResponse(client.groups.$post(args, options))
    },
  })
}

export function usePostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
        TError,
        InferRequestType<typeof client.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
) {
  return ['groups', '/groups/:group_id', args] as const
}

export function getGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >({
    queryKey: getGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteGroupsGroupIdMutationKey() {
  return ['groups', '/groups/:group_id', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':group_id']['$delete']>) {
      return parseResponse(client.groups[':group_id'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.groups)[':group_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsGroupIdUsersQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
) {
  return ['groups', '/groups/:group_id/users', args] as const
}

export function getGroupsGroupIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdUsersQueryKey>
  >({
    queryKey: getGroupsGroupIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsGroupIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsGroupIdUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsGroupIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsGroupIdUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsGroupIdVideosQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>,
) {
  return ['groups', '/groups/:group_id/videos', args] as const
}

export function getGroupsGroupIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdVideosQueryKey>
  >({
    queryKey: getGroupsGroupIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsGroupIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsGroupIdVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsGroupIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsGroupIdVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsGroupIdVideosVideoIdQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>,
) {
  return ['groups', '/groups/:group_id/videos/:video_id', args] as const
}

export function getGroupsGroupIdVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdVideosVideoIdQueryKey>
  >({
    queryKey: getGroupsGroupIdVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].videos[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsGroupIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdVideosVideoIdQueryKey>
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
      ...getGroupsGroupIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGroupsGroupIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdVideosVideoIdQueryKey>
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
      ...getGroupsGroupIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGroupsGroupIdVideosVideoIdMutationKey() {
  return ['groups', '/groups/:group_id/videos/:video_id', 'PUT'] as const
}

export function getPutGroupsGroupIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$put']>,
    ) {
      return parseResponse(client.groups[':group_id'].videos[':video_id'].$put(args, options))
    },
  })
}

export function usePutGroupsGroupIdVideosVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsGroupIdVideosVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGroupsGroupIdVideosVideoIdMutationKey() {
  return ['groups', '/groups/:group_id/videos/:video_id', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$delete']>,
    ) {
      return parseResponse(client.groups[':group_id'].videos[':video_id'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsGroupIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdVideosVideoIdMutationOptions<
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

export function getLanguagesQueryKey(args: InferRequestType<typeof client.languages.$get>) {
  return ['languages', '/languages', args] as const
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

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchMeMutationKey() {
  return ['me', '/me', 'PATCH'] as const
}

export function getPatchMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$patch>>>>>,
    TError,
    InferRequestType<typeof client.me.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.$patch>) {
      return parseResponse(client.me.$patch(args, options))
    },
  })
}

export function usePatchMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$patch>>>>>,
        TError,
        InferRequestType<typeof client.me.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeAlbumsQueryKey(args: InferRequestType<typeof client.me.albums.$get>) {
  return ['me', '/me/albums', args] as const
}

export function getMeAlbumsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.albums.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsQueryKey>
  >({
    queryKey: getMeAlbumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.albums.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeAlbums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.albums.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeAlbumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeAlbumsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeAlbums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.albums.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeAlbumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeAlbumsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMeAlbumsMutationKey() {
  return ['me', '/me/albums', 'POST'] as const
}

export function getPostMeAlbumsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$post>>>>>,
    TError,
    InferRequestType<typeof client.me.albums.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeAlbumsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.albums.$post>) {
      return parseResponse(client.me.albums.$post(args, options))
    },
  })
}

export function usePostMeAlbums<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.me.albums.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeAlbumsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeAlbumsAlbumIdQueryKey(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['$get']>,
) {
  return ['me', '/me/albums/:album_id', args] as const
}

export function getMeAlbumsAlbumIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsAlbumIdQueryKey>
  >({
    queryKey: getMeAlbumsAlbumIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.albums[':album_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeAlbumsAlbumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAlbumsAlbumIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeAlbumsAlbumIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeAlbumsAlbumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAlbumsAlbumIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeAlbumsAlbumIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteMeAlbumsAlbumIdMutationKey() {
  return ['me', '/me/albums/:album_id', 'DELETE'] as const
}

export function getDeleteMeAlbumsAlbumIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.albums)[':album_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeAlbumsAlbumIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.albums)[':album_id']['$delete']>) {
      return parseResponse(client.me.albums[':album_id'].$delete(args, options))
    },
  })
}

export function useDeleteMeAlbumsAlbumId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.albums)[':album_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeAlbumsAlbumIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMeAlbumsAlbumIdMutationKey() {
  return ['me', '/me/albums/:album_id', 'PATCH'] as const
}

export function getPatchMeAlbumsAlbumIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.me.albums)[':album_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMeAlbumsAlbumIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.albums)[':album_id']['$patch']>) {
      return parseResponse(client.me.albums[':album_id'].$patch(args, options))
    },
  })
}

export function usePatchMeAlbumsAlbumId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.me.albums)[':album_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMeAlbumsAlbumIdMutationOptions<TError, TOnMutateResult>(
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

export function getMeAlbumsAlbumIdVideosQueryKey(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>,
) {
  return ['me', '/me/albums/:album_id/videos', args] as const
}

export function getMeAlbumsAlbumIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsAlbumIdVideosQueryKey>
  >({
    queryKey: getMeAlbumsAlbumIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.albums[':album_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeAlbumsAlbumIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAlbumsAlbumIdVideosQueryKey>
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
      ...getMeAlbumsAlbumIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeAlbumsAlbumIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAlbumsAlbumIdVideosQueryKey>
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
      ...getMeAlbumsAlbumIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMeAlbumsAlbumIdVideosMutationKey() {
  return ['me', '/me/albums/:album_id/videos', 'PUT'] as const
}

export function getPutMeAlbumsAlbumIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeAlbumsAlbumIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$put']>,
    ) {
      return parseResponse(client.me.albums[':album_id'].videos.$put(args, options))
    },
  })
}

export function usePutMeAlbumsAlbumIdVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeAlbumsAlbumIdVideosMutationOptions<TError, TOnMutateResult>(
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

export function getMeAlbumsAlbumIdVideosVideoIdQueryKey(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>,
) {
  return ['me', '/me/albums/:album_id/videos/:video_id', args] as const
}

export function getMeAlbumsAlbumIdVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsAlbumIdVideosVideoIdQueryKey>
  >({
    queryKey: getMeAlbumsAlbumIdVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.albums[':album_id'].videos[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeAlbumsAlbumIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAlbumsAlbumIdVideosVideoIdQueryKey>
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
      ...getMeAlbumsAlbumIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeAlbumsAlbumIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAlbumsAlbumIdVideosVideoIdQueryKey>
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
      ...getMeAlbumsAlbumIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMeAlbumsAlbumIdVideosVideoIdMutationKey() {
  return ['me', '/me/albums/:album_id/videos/:video_id', 'PUT'] as const
}

export function getPutMeAlbumsAlbumIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeAlbumsAlbumIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$put']>,
    ) {
      return parseResponse(client.me.albums[':album_id'].videos[':video_id'].$put(args, options))
    },
  })
}

export function usePutMeAlbumsAlbumIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeAlbumsAlbumIdVideosVideoIdMutationOptions<
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

export function getDeleteMeAlbumsAlbumIdVideosVideoIdMutationKey() {
  return ['me', '/me/albums/:album_id/videos/:video_id', 'DELETE'] as const
}

export function getDeleteMeAlbumsAlbumIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeAlbumsAlbumIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.me.albums)[':album_id']['videos'][':video_id']['$delete']
      >,
    ) {
      return parseResponse(client.me.albums[':album_id'].videos[':video_id'].$delete(args, options))
    },
  })
}

export function useDeleteMeAlbumsAlbumIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.me.albums)[':album_id']['videos'][':video_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeAlbumsAlbumIdVideosVideoIdMutationOptions<
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

export function getPostMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailMutationKey() {
  return ['me', '/me/albums/:album_id/videos/:video_id/set_album_thumbnail', 'POST'] as const
}

export function getPostMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.me.albums)[':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.me.albums)[':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.me.albums)[':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
      >,
    ) {
      return parseResponse(
        client.me.albums[':album_id'].videos[':video_id'].set_album_thumbnail.$post(args, options),
      )
    },
  })
}

export function usePostMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnail<
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
                  (typeof client.me.albums)[':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.me.albums)[':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
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
  const mutationDefaults = getPostMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailMutationOptions<
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

export function getMeAppearancesQueryKey(
  args: InferRequestType<typeof client.me.appearances.$get>,
) {
  return ['me', '/me/appearances', args] as const
}

export function getMeAppearancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.appearances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeAppearancesQueryKey>
  >({
    queryKey: getMeAppearancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.appearances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeAppearances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.appearances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeAppearancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeAppearancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeAppearances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.appearances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeAppearancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeAppearancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeCategoriesQueryKey(args: InferRequestType<typeof client.me.categories.$get>) {
  return ['me', '/me/categories', args] as const
}

export function getMeCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeCategoriesQueryKey>
  >({
    queryKey: getMeCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.categories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeCategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.categories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeCategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeCategoriesCategoryQueryKey(
  args: InferRequestType<(typeof client.me.categories)[':category']['$get']>,
) {
  return ['me', '/me/categories/:category', args] as const
}

export function getMeCategoriesCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.categories)[':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeCategoriesCategoryQueryKey>
  >({
    queryKey: getMeCategoriesCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.categories[':category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.categories)[':category']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeCategoriesCategoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeCategoriesCategoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.categories)[':category']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeCategoriesCategoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeCategoriesCategoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutMeCategoriesCategoryMutationKey() {
  return ['me', '/me/categories/:category', 'PUT'] as const
}

export function getPutMeCategoriesCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.categories)[':category']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.categories)[':category']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeCategoriesCategoryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.categories)[':category']['$put']>) {
      return parseResponse(client.me.categories[':category'].$put(args, options))
    },
  })
}

export function usePutMeCategoriesCategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.categories)[':category']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.categories)[':category']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeCategoriesCategoryMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMeCategoriesCategoryMutationKey() {
  return ['me', '/me/categories/:category', 'DELETE'] as const
}

export function getDeleteMeCategoriesCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.categories)[':category']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.categories)[':category']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeCategoriesCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.categories)[':category']['$delete']>,
    ) {
      return parseResponse(client.me.categories[':category'].$delete(args, options))
    },
  })
}

export function useDeleteMeCategoriesCategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.categories)[':category']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.categories)[':category']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeCategoriesCategoryMutationOptions<TError, TOnMutateResult>(
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

export function getMeChannelsQueryKey(args: InferRequestType<typeof client.me.channels.$get>) {
  return ['me', '/me/channels', args] as const
}

export function getMeChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeChannelsQueryKey>
  >({
    queryKey: getMeChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.channels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.channels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeChannelsChannelIdQueryKey(
  args: InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>,
) {
  return ['me', '/me/channels/:channel_id', args] as const
}

export function getMeChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeChannelsChannelIdQueryKey>
  >({
    queryKey: getMeChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.channels[':channel_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeChannelsChannelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeChannelsChannelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutMeChannelsChannelIdMutationKey() {
  return ['me', '/me/channels/:channel_id', 'PUT'] as const
}

export function getPutMeChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.channels)[':channel_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeChannelsChannelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.channels)[':channel_id']['$put']>) {
      return parseResponse(client.me.channels[':channel_id'].$put(args, options))
    },
  })
}

export function usePutMeChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.channels)[':channel_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMeChannelsChannelIdMutationKey() {
  return ['me', '/me/channels/:channel_id', 'DELETE'] as const
}

export function getDeleteMeChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.channels)[':channel_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.channels)[':channel_id']['$delete']>,
    ) {
      return parseResponse(client.me.channels[':channel_id'].$delete(args, options))
    },
  })
}

export function useDeleteMeChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.channels)[':channel_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
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

export function getMeCustomlogosQueryKey() {
  return ['me', '/me/customlogos'] as const
}

export function getMeCustomlogosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeCustomlogosQueryKey>
  >({
    queryKey: getMeCustomlogosQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.customlogos.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeCustomlogos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeCustomlogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeCustomlogosQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeCustomlogos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeCustomlogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeCustomlogosQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMeCustomlogosMutationKey() {
  return ['me', '/me/customlogos', 'POST'] as const
}

export function getPostMeCustomlogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMeCustomlogosMutationKey(),
    async mutationFn() {
      return parseResponse(client.me.customlogos.$post(undefined, options))
    },
  })
}

export function usePostMeCustomlogos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeCustomlogosMutationOptions<TError, TOnMutateResult>(
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

export function getMeCustomlogosLogoIdQueryKey(
  args: InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>,
) {
  return ['me', '/me/customlogos/:logo_id', args] as const
}

export function getMeCustomlogosLogoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeCustomlogosLogoIdQueryKey>
  >({
    queryKey: getMeCustomlogosLogoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.customlogos[':logo_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeCustomlogosLogoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeCustomlogosLogoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeCustomlogosLogoIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeCustomlogosLogoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeCustomlogosLogoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeCustomlogosLogoIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeFeedQueryKey(args: InferRequestType<typeof client.me.feed.$get>) {
  return ['me', '/me/feed', args] as const
}

export function getMeFeedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.feed.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFeedQueryKey>
  >({
    queryKey: getMeFeedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.feed.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeFeed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.feed.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeFeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeFeedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeFeed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.feed.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeFeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeFeedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeFollowersQueryKey(args: InferRequestType<typeof client.me.followers.$get>) {
  return ['me', '/me/followers', args] as const
}

export function getMeFollowersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.followers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFollowersQueryKey>
  >({
    queryKey: getMeFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.followers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.followers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeFollowersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.followers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeFollowersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeFollowingQueryKey(args: InferRequestType<typeof client.me.following.$get>) {
  return ['me', '/me/following', args] as const
}

export function getMeFollowingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.following.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFollowingQueryKey>
  >({
    queryKey: getMeFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.following.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeFollowing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.following.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeFollowingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeFollowing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.following.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeFollowingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMeFollowingMutationKey() {
  return ['me', '/me/following', 'POST'] as const
}

export function getPostMeFollowingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.following.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeFollowingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.following.$post>) {
      return parseResponse(client.me.following.$post(args, options))
    },
  })
}

export function usePostMeFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.following.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeFollowingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeFollowingFollowUserIdQueryKey(
  args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>,
) {
  return ['me', '/me/following/:follow_user_id', args] as const
}

export function getMeFollowingFollowUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowingFollowUserIdQueryKey>
  >({
    queryKey: getMeFollowingFollowUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.following[':follow_user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeFollowingFollowUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowingFollowUserIdQueryKey>
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
      ...getMeFollowingFollowUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeFollowingFollowUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowingFollowUserIdQueryKey>
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
      ...getMeFollowingFollowUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMeFollowingFollowUserIdMutationKey() {
  return ['me', '/me/following/:follow_user_id', 'PUT'] as const
}

export function getPutMeFollowingFollowUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.following)[':follow_user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeFollowingFollowUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$put']>,
    ) {
      return parseResponse(client.me.following[':follow_user_id'].$put(args, options))
    },
  })
}

export function usePutMeFollowingFollowUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.following)[':follow_user_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeFollowingFollowUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMeFollowingFollowUserIdMutationKey() {
  return ['me', '/me/following/:follow_user_id', 'DELETE'] as const
}

export function getDeleteMeFollowingFollowUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.following)[':follow_user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeFollowingFollowUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$delete']>,
    ) {
      return parseResponse(client.me.following[':follow_user_id'].$delete(args, options))
    },
  })
}

export function useDeleteMeFollowingFollowUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.following)[':follow_user_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeFollowingFollowUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getMeGroupsQueryKey(args: InferRequestType<typeof client.me.groups.$get>) {
  return ['me', '/me/groups', args] as const
}

export function getMeGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeGroupsQueryKey>
  >({
    queryKey: getMeGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.me.groups)[':group_id']['$get']>,
) {
  return ['me', '/me/groups/:group_id', args] as const
}

export function getMeGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeGroupsGroupIdQueryKey>
  >({
    queryKey: getMeGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.groups[':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.groups)[':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.groups)[':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutMeGroupsGroupIdMutationKey() {
  return ['me', '/me/groups/:group_id', 'PUT'] as const
}

export function getPutMeGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.groups)[':group_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.groups)[':group_id']['$put']>) {
      return parseResponse(client.me.groups[':group_id'].$put(args, options))
    },
  })
}

export function usePutMeGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.groups)[':group_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMeGroupsGroupIdMutationKey() {
  return ['me', '/me/groups/:group_id', 'DELETE'] as const
}

export function getDeleteMeGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.groups)[':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.groups)[':group_id']['$delete']>) {
      return parseResponse(client.me.groups[':group_id'].$delete(args, options))
    },
  })
}

export function useDeleteMeGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.groups)[':group_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getMeLikesQueryKey(args: InferRequestType<typeof client.me.likes.$get>) {
  return ['me', '/me/likes', args] as const
}

export function getMeLikesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.likes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeLikesQueryKey>
  >({
    queryKey: getMeLikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.likes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeLikes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.likes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeLikes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.likes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeLikesVideoIdQueryKey(
  args: InferRequestType<(typeof client.me.likes)[':video_id']['$get']>,
) {
  return ['me', '/me/likes/:video_id', args] as const
}

export function getMeLikesVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.likes)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeLikesVideoIdQueryKey>
  >({
    queryKey: getMeLikesVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.likes[':video_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeLikesVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.likes)[':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeLikesVideoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeLikesVideoIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeLikesVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.likes)[':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeLikesVideoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeLikesVideoIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutMeLikesVideoIdMutationKey() {
  return ['me', '/me/likes/:video_id', 'PUT'] as const
}

export function getPutMeLikesVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.likes)[':video_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeLikesVideoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.likes)[':video_id']['$put']>) {
      return parseResponse(client.me.likes[':video_id'].$put(args, options))
    },
  })
}

export function usePutMeLikesVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.likes)[':video_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeLikesVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMeLikesVideoIdMutationKey() {
  return ['me', '/me/likes/:video_id', 'DELETE'] as const
}

export function getDeleteMeLikesVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.likes)[':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeLikesVideoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.likes)[':video_id']['$delete']>) {
      return parseResponse(client.me.likes[':video_id'].$delete(args, options))
    },
  })
}

export function useDeleteMeLikesVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.likes)[':video_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeLikesVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getMeOndemandPagesQueryKey(
  args: InferRequestType<typeof client.me.ondemand.pages.$get>,
) {
  return ['me', '/me/ondemand/pages', args] as const
}

export function getMeOndemandPagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.ondemand.pages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeOndemandPagesQueryKey>
  >({
    queryKey: getMeOndemandPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.ondemand.pages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeOndemandPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.ondemand.pages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeOndemandPagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeOndemandPagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeOndemandPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.ondemand.pages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeOndemandPagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeOndemandPagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMeOndemandPagesMutationKey() {
  return ['me', '/me/ondemand/pages', 'POST'] as const
}

export function getPostMeOndemandPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.me.ondemand.pages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeOndemandPagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.ondemand.pages.$post>) {
      return parseResponse(client.me.ondemand.pages.$post(args, options))
    },
  })
}

export function usePostMeOndemandPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.me.ondemand.pages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeOndemandPagesMutationOptions<TError, TOnMutateResult>(
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

export function getMeOndemandPurchasesQueryKey(
  args: InferRequestType<typeof client.me.ondemand.purchases.$get>,
) {
  return ['me', '/me/ondemand/purchases', args] as const
}

export function getMeOndemandPurchasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.ondemand.purchases.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeOndemandPurchasesQueryKey>
  >({
    queryKey: getMeOndemandPurchasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.ondemand.purchases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeOndemandPurchases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.ondemand.purchases.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeOndemandPurchasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeOndemandPurchasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeOndemandPurchases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.ondemand.purchases.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeOndemandPurchasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeOndemandPurchasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeOndemandPurchasesOndemandIdQueryKey(
  args: InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>,
) {
  return ['me', '/me/ondemand/purchases/:ondemand_id', args] as const
}

export function getMeOndemandPurchasesOndemandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeOndemandPurchasesOndemandIdQueryKey>
  >({
    queryKey: getMeOndemandPurchasesOndemandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.ondemand.purchases[':ondemand_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeOndemandPurchasesOndemandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeOndemandPurchasesOndemandIdQueryKey>
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
      ...getMeOndemandPurchasesOndemandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeOndemandPurchasesOndemandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeOndemandPurchasesOndemandIdQueryKey>
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
      ...getMeOndemandPurchasesOndemandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMePicturesQueryKey(args: InferRequestType<typeof client.me.pictures.$get>) {
  return ['me', '/me/pictures', args] as const
}

export function getMePicturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.pictures.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePicturesQueryKey>
  >({
    queryKey: getMePicturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.pictures.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMePictures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.pictures.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMePicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMePictures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.pictures.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMePicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMePicturesMutationKey() {
  return ['me', '/me/pictures', 'POST'] as const
}

export function getPostMePicturesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMePicturesMutationKey(),
    async mutationFn() {
      return parseResponse(client.me.pictures.$post(undefined, options))
    },
  })
}

export function usePostMePictures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMePicturesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMePicturesPortraitsetIdQueryKey(
  args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>,
) {
  return ['me', '/me/pictures/:portraitset_id', args] as const
}

export function getMePicturesPortraitsetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePicturesPortraitsetIdQueryKey>
  >({
    queryKey: getMePicturesPortraitsetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.pictures[':portraitset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMePicturesPortraitsetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePicturesPortraitsetIdQueryKey>
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
      ...getMePicturesPortraitsetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMePicturesPortraitsetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePicturesPortraitsetIdQueryKey>
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
      ...getMePicturesPortraitsetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMePicturesPortraitsetIdMutationKey() {
  return ['me', '/me/pictures/:portraitset_id', 'DELETE'] as const
}

export function getDeleteMePicturesPortraitsetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMePicturesPortraitsetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$delete']>,
    ) {
      return parseResponse(client.me.pictures[':portraitset_id'].$delete(args, options))
    },
  })
}

export function useDeleteMePicturesPortraitsetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMePicturesPortraitsetIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMePicturesPortraitsetIdMutationKey() {
  return ['me', '/me/pictures/:portraitset_id', 'PATCH'] as const
}

export function getPatchMePicturesPortraitsetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMePicturesPortraitsetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$patch']>,
    ) {
      return parseResponse(client.me.pictures[':portraitset_id'].$patch(args, options))
    },
  })
}

export function usePatchMePicturesPortraitsetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMePicturesPortraitsetIdMutationOptions<TError, TOnMutateResult>(
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

export function getMePortfoliosQueryKey(args: InferRequestType<typeof client.me.portfolios.$get>) {
  return ['me', '/me/portfolios', args] as const
}

export function getMePortfoliosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.portfolios.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMePortfoliosQueryKey>
  >({
    queryKey: getMePortfoliosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.portfolios.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMePortfolios<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.portfolios.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePortfoliosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMePortfoliosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMePortfolios<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.portfolios.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePortfoliosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMePortfoliosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMePortfoliosPortfolioIdQueryKey(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>,
) {
  return ['me', '/me/portfolios/:portfolio_id', args] as const
}

export function getMePortfoliosPortfolioIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePortfoliosPortfolioIdQueryKey>
  >({
    queryKey: getMePortfoliosPortfolioIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.portfolios[':portfolio_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMePortfoliosPortfolioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePortfoliosPortfolioIdQueryKey>
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
      ...getMePortfoliosPortfolioIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMePortfoliosPortfolioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePortfoliosPortfolioIdQueryKey>
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
      ...getMePortfoliosPortfolioIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMePortfoliosPortfolioIdVideosQueryKey(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>,
) {
  return ['me', '/me/portfolios/:portfolio_id/videos', args] as const
}

export function getMePortfoliosPortfolioIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePortfoliosPortfolioIdVideosQueryKey>
  >({
    queryKey: getMePortfoliosPortfolioIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.portfolios[':portfolio_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMePortfoliosPortfolioIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePortfoliosPortfolioIdVideosQueryKey>
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
      ...getMePortfoliosPortfolioIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMePortfoliosPortfolioIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePortfoliosPortfolioIdVideosQueryKey>
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
      ...getMePortfoliosPortfolioIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMePortfoliosPortfolioIdVideosVideoIdQueryKey(
  args: InferRequestType<
    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
  >,
) {
  return ['me', '/me/portfolios/:portfolio_id/videos/:video_id', args] as const
}

export function getMePortfoliosPortfolioIdVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePortfoliosPortfolioIdVideosVideoIdQueryKey>
  >({
    queryKey: getMePortfoliosPortfolioIdVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.portfolios[':portfolio_id'].videos[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMePortfoliosPortfolioIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePortfoliosPortfolioIdVideosVideoIdQueryKey>
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
      ...getMePortfoliosPortfolioIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMePortfoliosPortfolioIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePortfoliosPortfolioIdVideosVideoIdQueryKey>
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
      ...getMePortfoliosPortfolioIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMePortfoliosPortfolioIdVideosVideoIdMutationKey() {
  return ['me', '/me/portfolios/:portfolio_id/videos/:video_id', 'PUT'] as const
}

export function getPutMePortfoliosPortfolioIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMePortfoliosPortfolioIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$put']
      >,
    ) {
      return parseResponse(
        client.me.portfolios[':portfolio_id'].videos[':video_id'].$put(args, options),
      )
    },
  })
}

export function usePutMePortfoliosPortfolioIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$put']
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
  const mutationDefaults = getPutMePortfoliosPortfolioIdVideosVideoIdMutationOptions<
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

export function getDeleteMePortfoliosPortfolioIdVideosVideoIdMutationKey() {
  return ['me', '/me/portfolios/:portfolio_id/videos/:video_id', 'DELETE'] as const
}

export function getDeleteMePortfoliosPortfolioIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMePortfoliosPortfolioIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.me.portfolios[':portfolio_id'].videos[':video_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMePortfoliosPortfolioIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$delete']
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
  const mutationDefaults = getDeleteMePortfoliosPortfolioIdVideosVideoIdMutationOptions<
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

export function getMePresetsQueryKey(args: InferRequestType<typeof client.me.presets.$get>) {
  return ['me', '/me/presets', args] as const
}

export function getMePresetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.presets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePresetsQueryKey>
  >({
    queryKey: getMePresetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.presets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMePresets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.presets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePresetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMePresetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMePresets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.presets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePresetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMePresetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMePresetsPresetIdQueryKey(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>,
) {
  return ['me', '/me/presets/:preset_id', args] as const
}

export function getMePresetsPresetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePresetsPresetIdQueryKey>
  >({
    queryKey: getMePresetsPresetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.presets[':preset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMePresetsPresetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePresetsPresetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMePresetsPresetIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMePresetsPresetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePresetsPresetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMePresetsPresetIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchMePresetsPresetIdMutationKey() {
  return ['me', '/me/presets/:preset_id', 'PATCH'] as const
}

export function getPatchMePresetsPresetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.me.presets)[':preset_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMePresetsPresetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.presets)[':preset_id']['$patch']>) {
      return parseResponse(client.me.presets[':preset_id'].$patch(args, options))
    },
  })
}

export function usePatchMePresetsPresetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.me.presets)[':preset_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMePresetsPresetIdMutationOptions<TError, TOnMutateResult>(
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

export function getMePresetsPresetIdVideosQueryKey(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>,
) {
  return ['me', '/me/presets/:preset_id/videos', args] as const
}

export function getMePresetsPresetIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePresetsPresetIdVideosQueryKey>
  >({
    queryKey: getMePresetsPresetIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.presets[':preset_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMePresetsPresetIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePresetsPresetIdVideosQueryKey>
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
      ...getMePresetsPresetIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMePresetsPresetIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePresetsPresetIdVideosQueryKey>
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
      ...getMePresetsPresetIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMeProjectsQueryKey(args: InferRequestType<typeof client.me.projects.$get>) {
  return ['me', '/me/projects', args] as const
}

export function getMeProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeProjectsQueryKey>
  >({
    queryKey: getMeProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.projects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.projects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMeProjectsMutationKey() {
  return ['me', '/me/projects', 'POST'] as const
}

export function getPostMeProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.me.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.projects.$post>) {
      return parseResponse(client.me.projects.$post(args, options))
    },
  })
}

export function usePostMeProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.me.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['$get']>,
) {
  return ['me', '/me/projects/:project_id', args] as const
}

export function getMeProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeProjectsProjectIdQueryKey>
  >({
    queryKey: getMeProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeProjectsProjectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeProjectsProjectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteMeProjectsProjectIdMutationKey() {
  return ['me', '/me/projects/:project_id', 'DELETE'] as const
}

export function getDeleteMeProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.projects)[':project_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.projects)[':project_id']['$delete']>,
    ) {
      return parseResponse(client.me.projects[':project_id'].$delete(args, options))
    },
  })
}

export function useDeleteMeProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.projects)[':project_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMeProjectsProjectIdMutationKey() {
  return ['me', '/me/projects/:project_id', 'PATCH'] as const
}

export function getPatchMeProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.me.projects)[':project_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMeProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.projects)[':project_id']['$patch']>) {
      return parseResponse(client.me.projects[':project_id'].$patch(args, options))
    },
  })
}

export function usePatchMeProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.me.projects)[':project_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMeProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getMeProjectsProjectIdVideosQueryKey(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>,
) {
  return ['me', '/me/projects/:project_id/videos', args] as const
}

export function getMeProjectsProjectIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeProjectsProjectIdVideosQueryKey>
  >({
    queryKey: getMeProjectsProjectIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.projects[':project_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeProjectsProjectIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeProjectsProjectIdVideosQueryKey>
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
      ...getMeProjectsProjectIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeProjectsProjectIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeProjectsProjectIdVideosQueryKey>
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
      ...getMeProjectsProjectIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMeProjectsProjectIdVideosMutationKey() {
  return ['me', '/me/projects/:project_id/videos', 'PUT'] as const
}

export function getPutMeProjectsProjectIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeProjectsProjectIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$put']>,
    ) {
      return parseResponse(client.me.projects[':project_id'].videos.$put(args, options))
    },
  })
}

export function usePutMeProjectsProjectIdVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeProjectsProjectIdVideosMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMeProjectsProjectIdVideosMutationKey() {
  return ['me', '/me/projects/:project_id/videos', 'DELETE'] as const
}

export function getDeleteMeProjectsProjectIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeProjectsProjectIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$delete']>,
    ) {
      return parseResponse(client.me.projects[':project_id'].videos.$delete(args, options))
    },
  })
}

export function useDeleteMeProjectsProjectIdVideos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeProjectsProjectIdVideosMutationOptions<
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

export function getPutMeProjectsProjectIdVideosVideoIdMutationKey() {
  return ['me', '/me/projects/:project_id/videos/:video_id', 'PUT'] as const
}

export function getPutMeProjectsProjectIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.me.projects)[':project_id']['videos'][':video_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.projects)[':project_id']['videos'][':video_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeProjectsProjectIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.me.projects)[':project_id']['videos'][':video_id']['$put']
      >,
    ) {
      return parseResponse(
        client.me.projects[':project_id'].videos[':video_id'].$put(args, options),
      )
    },
  })
}

export function usePutMeProjectsProjectIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.me.projects)[':project_id']['videos'][':video_id']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.projects)[':project_id']['videos'][':video_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeProjectsProjectIdVideosVideoIdMutationOptions<
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

export function getDeleteMeProjectsProjectIdVideosVideoIdMutationKey() {
  return ['me', '/me/projects/:project_id/videos/:video_id', 'DELETE'] as const
}

export function getDeleteMeProjectsProjectIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.me.projects)[':project_id']['videos'][':video_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.projects)[':project_id']['videos'][':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeProjectsProjectIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.me.projects)[':project_id']['videos'][':video_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.me.projects[':project_id'].videos[':video_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMeProjectsProjectIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.me.projects)[':project_id']['videos'][':video_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.me.projects)[':project_id']['videos'][':video_id']['$delete']
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
  const mutationDefaults = getDeleteMeProjectsProjectIdVideosVideoIdMutationOptions<
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

export function getMeVideosQueryKey(args: InferRequestType<typeof client.me.videos.$get>) {
  return ['me', '/me/videos', args] as const
}

export function getMeVideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeVideosQueryKey>
  >({
    queryKey: getMeVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.videos.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.videos.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMeVideosMutationKey() {
  return ['me', '/me/videos', 'POST'] as const
}

export function getPostMeVideosMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$post>>>>>,
    TError,
    InferRequestType<typeof client.me.videos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeVideosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.videos.$post>) {
      return parseResponse(client.me.videos.$post(args, options))
    },
  })
}

export function usePostMeVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.me.videos.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeVideosMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeVideosVideoIdQueryKey(
  args: InferRequestType<(typeof client.me.videos)[':video_id']['$get']>,
) {
  return ['me', '/me/videos/:video_id', args] as const
}

export function getMeVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.videos)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeVideosVideoIdQueryKey>
  >({
    queryKey: getMeVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.videos[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.videos)[':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeVideosVideoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeVideosVideoIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.videos)[':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeVideosVideoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeVideosVideoIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeWatchedVideosQueryKey(
  args: InferRequestType<typeof client.me.watched.videos.$get>,
) {
  return ['me', '/me/watched/videos', args] as const
}

export function getMeWatchedVideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.watched.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeWatchedVideosQueryKey>
  >({
    queryKey: getMeWatchedVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.watched.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeWatchedVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.watched.videos.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeWatchedVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeWatchedVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeWatchedVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.watched.videos.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeWatchedVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeWatchedVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteMeWatchedVideosMutationKey() {
  return ['me', '/me/watched/videos', 'DELETE'] as const
}

export function getDeleteMeWatchedVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$delete>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeWatchedVideosMutationKey(),
    async mutationFn() {
      return parseResponse(client.me.watched.videos.$delete(undefined, options))
    },
  })
}

export function useDeleteMeWatchedVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$delete>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeWatchedVideosMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMeWatchedVideosVideoIdMutationKey() {
  return ['me', '/me/watched/videos/:video_id', 'DELETE'] as const
}

export function getDeleteMeWatchedVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.watched.videos)[':video_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.watched.videos)[':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeWatchedVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.watched.videos)[':video_id']['$delete']>,
    ) {
      return parseResponse(client.me.watched.videos[':video_id'].$delete(args, options))
    },
  })
}

export function useDeleteMeWatchedVideosVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.watched.videos)[':video_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.watched.videos)[':video_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeWatchedVideosVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getMeWatchlaterQueryKey(args: InferRequestType<typeof client.me.watchlater.$get>) {
  return ['me', '/me/watchlater', args] as const
}

export function getMeWatchlaterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.watchlater.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeWatchlaterQueryKey>
  >({
    queryKey: getMeWatchlaterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.watchlater.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeWatchlater<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.watchlater.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeWatchlaterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeWatchlaterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeWatchlater<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.watchlater.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeWatchlaterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeWatchlaterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeWatchlaterVideoIdQueryKey(
  args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>,
) {
  return ['me', '/me/watchlater/:video_id', args] as const
}

export function getMeWatchlaterVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeWatchlaterVideoIdQueryKey>
  >({
    queryKey: getMeWatchlaterVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.watchlater[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeWatchlaterVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeWatchlaterVideoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeWatchlaterVideoIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeWatchlaterVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeWatchlaterVideoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeWatchlaterVideoIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutMeWatchlaterVideoIdMutationKey() {
  return ['me', '/me/watchlater/:video_id', 'PUT'] as const
}

export function getPutMeWatchlaterVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.watchlater)[':video_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeWatchlaterVideoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$put']>) {
      return parseResponse(client.me.watchlater[':video_id'].$put(args, options))
    },
  })
}

export function usePutMeWatchlaterVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.watchlater)[':video_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeWatchlaterVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMeWatchlaterVideoIdMutationKey() {
  return ['me', '/me/watchlater/:video_id', 'DELETE'] as const
}

export function getDeleteMeWatchlaterVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.watchlater)[':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeWatchlaterVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$delete']>,
    ) {
      return parseResponse(client.me.watchlater[':video_id'].$delete(args, options))
    },
  })
}

export function useDeleteMeWatchlaterVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.watchlater)[':video_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeWatchlaterVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthAccessTokenMutationKey() {
  return ['oauth', '/oauth/access_token', 'POST'] as const
}

export function getPostOauthAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.access_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.access_token.$post>) {
      return parseResponse(client.oauth.access_token.$post(args, options))
    },
  })
}

export function usePostOauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.access_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthAccessTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthAuthorizeClientMutationKey() {
  return ['oauth', '/oauth/authorize/client', 'POST'] as const
}

export function getPostOauthAuthorizeClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.client.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth.authorize.client.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAuthorizeClientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.authorize.client.$post>) {
      return parseResponse(client.oauth.authorize.client.$post(args, options))
    },
  })
}

export function usePostOauthAuthorizeClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.client.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.authorize.client.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthAuthorizeClientMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthAuthorizeVimeoOauth1MutationKey() {
  return ['oauth', '/oauth/authorize/vimeo_oauth1', 'POST'] as const
}

export function getPostOauthAuthorizeVimeoOauth1MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.vimeo_oauth1.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth.authorize.vimeo_oauth1.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAuthorizeVimeoOauth1MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.authorize.vimeo_oauth1.$post>) {
      return parseResponse(client.oauth.authorize.vimeo_oauth1.$post(args, options))
    },
  })
}

export function usePostOauthAuthorizeVimeoOauth1<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.oauth.authorize.vimeo_oauth1.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.authorize.vimeo_oauth1.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthAuthorizeVimeoOauth1MutationOptions<TError, TOnMutateResult>(
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

export function getOauthVerifyQueryKey() {
  return ['oauth', '/oauth/verify'] as const
}

export function getOauthVerifyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauthVerifyQueryKey>
  >({
    queryKey: getOauthVerifyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.verify.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauthVerify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthVerifyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauthVerify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthVerifyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOndemandGenresQueryKey() {
  return ['ondemand', '/ondemand/genres'] as const
}

export function getOndemandGenresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandGenresQueryKey>
  >({
    queryKey: getOndemandGenresQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.genres.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOndemandGenres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandGenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOndemandGenresQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOndemandGenres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandGenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOndemandGenresQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOndemandGenresGenreIdQueryKey(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>,
) {
  return ['ondemand', '/ondemand/genres/:genre_id', args] as const
}

export function getOndemandGenresGenreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandGenresGenreIdQueryKey>
  >({
    queryKey: getOndemandGenresGenreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.genres[':genre_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandGenresGenreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandGenresGenreIdQueryKey>
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
      ...getOndemandGenresGenreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandGenresGenreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandGenresGenreIdQueryKey>
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
      ...getOndemandGenresGenreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOndemandGenresGenreIdPagesQueryKey(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>,
) {
  return ['ondemand', '/ondemand/genres/:genre_id/pages', args] as const
}

export function getOndemandGenresGenreIdPagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandGenresGenreIdPagesQueryKey>
  >({
    queryKey: getOndemandGenresGenreIdPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.genres[':genre_id'].pages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandGenresGenreIdPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandGenresGenreIdPagesQueryKey>
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
      ...getOndemandGenresGenreIdPagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandGenresGenreIdPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandGenresGenreIdPagesQueryKey>
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
      ...getOndemandGenresGenreIdPagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOndemandGenresGenreIdPagesOndemandIdQueryKey(
  args: InferRequestType<
    (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/genres/:genre_id/pages/:ondemand_id', args] as const
}

export function getOndemandGenresGenreIdPagesOndemandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandGenresGenreIdPagesOndemandIdQueryKey>
  >({
    queryKey: getOndemandGenresGenreIdPagesOndemandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.genres[':genre_id'].pages[':ondemand_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandGenresGenreIdPagesOndemandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandGenresGenreIdPagesOndemandIdQueryKey>
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
      ...getOndemandGenresGenreIdPagesOndemandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandGenresGenreIdPagesOndemandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandGenresGenreIdPagesOndemandIdQueryKey>
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
      ...getOndemandGenresGenreIdPagesOndemandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdQueryKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id', args] as const
}

export function getOndemandPagesOndemandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdQueryKey>
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
      ...getOndemandPagesOndemandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdQueryKey>
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
      ...getOndemandPagesOndemandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOndemandPagesOndemandIdMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id', 'DELETE'] as const
}

export function getDeleteOndemandPagesOndemandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOndemandPagesOndemandIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$delete']>,
    ) {
      return parseResponse(client.ondemand.pages[':ondemand_id'].$delete(args, options))
    },
  })
}

export function useDeleteOndemandPagesOndemandId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOndemandPagesOndemandIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchOndemandPagesOndemandIdMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id', 'PATCH'] as const
}

export function getPatchOndemandPagesOndemandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOndemandPagesOndemandIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$patch']>,
    ) {
      return parseResponse(client.ondemand.pages[':ondemand_id'].$patch(args, options))
    },
  })
}

export function usePatchOndemandPagesOndemandId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOndemandPagesOndemandIdMutationOptions<TError, TOnMutateResult>(
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

export function getOndemandPagesOndemandIdBackgroundsQueryKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds', args] as const
}

export function getOndemandPagesOndemandIdBackgroundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdBackgroundsQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdBackgroundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].backgrounds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdBackgroundsQueryKey>
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
      ...getOndemandPagesOndemandIdBackgroundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdBackgroundsQueryKey>
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
      ...getOndemandPagesOndemandIdBackgroundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOndemandPagesOndemandIdBackgroundsMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds', 'POST'] as const
}

export function getPostOndemandPagesOndemandIdBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOndemandPagesOndemandIdBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$post']
      >,
    ) {
      return parseResponse(client.ondemand.pages[':ondemand_id'].backgrounds.$post(args, options))
    },
  })
}

export function usePostOndemandPagesOndemandIdBackgrounds<
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
                ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOndemandPagesOndemandIdBackgroundsMutationOptions<
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

export function getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds/:background_id', args] as const
}

export function getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdBackgroundsBackgroundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryKey>
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
      ...getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdBackgroundsBackgroundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryKey>
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
      ...getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOndemandPagesOndemandIdBackgroundsBackgroundIdMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds/:background_id', 'DELETE'] as const
}

export function getDeleteOndemandPagesOndemandIdBackgroundsBackgroundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOndemandPagesOndemandIdBackgroundsBackgroundIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOndemandPagesOndemandIdBackgroundsBackgroundId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$delete']
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
  const mutationDefaults = getDeleteOndemandPagesOndemandIdBackgroundsBackgroundIdMutationOptions<
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

export function getPatchOndemandPagesOndemandIdBackgroundsBackgroundIdMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds/:background_id', 'PATCH'] as const
}

export function getPatchOndemandPagesOndemandIdBackgroundsBackgroundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOndemandPagesOndemandIdBackgroundsBackgroundIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchOndemandPagesOndemandIdBackgroundsBackgroundId<
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
                  (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$patch']
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
  const mutationDefaults = getPatchOndemandPagesOndemandIdBackgroundsBackgroundIdMutationOptions<
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

export function getOndemandPagesOndemandIdGenresQueryKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/genres', args] as const
}

export function getOndemandPagesOndemandIdGenresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdGenresQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdGenresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].genres.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdGenres<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdGenresQueryKey>
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
      ...getOndemandPagesOndemandIdGenresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdGenres<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdGenresQueryKey>
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
      ...getOndemandPagesOndemandIdGenresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdGenresGenreIdQueryKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/genres/:genre_id', args] as const
}

export function getOndemandPagesOndemandIdGenresGenreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdGenresGenreIdQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdGenresGenreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdGenresGenreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdGenresGenreIdQueryKey>
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
      ...getOndemandPagesOndemandIdGenresGenreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdGenresGenreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdGenresGenreIdQueryKey>
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
      ...getOndemandPagesOndemandIdGenresGenreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOndemandPagesOndemandIdGenresGenreIdMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/genres/:genre_id', 'PUT'] as const
}

export function getPutOndemandPagesOndemandIdGenresGenreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOndemandPagesOndemandIdGenresGenreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$put']
      >,
    ) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$put(args, options),
      )
    },
  })
}

export function usePutOndemandPagesOndemandIdGenresGenreId<
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
                  (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$put']
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
  const mutationDefaults = getPutOndemandPagesOndemandIdGenresGenreIdMutationOptions<
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

export function getDeleteOndemandPagesOndemandIdGenresGenreIdMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/genres/:genre_id', 'DELETE'] as const
}

export function getDeleteOndemandPagesOndemandIdGenresGenreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOndemandPagesOndemandIdGenresGenreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOndemandPagesOndemandIdGenresGenreId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$delete']
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
  const mutationDefaults = getDeleteOndemandPagesOndemandIdGenresGenreIdMutationOptions<
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

export function getOndemandPagesOndemandIdLikesQueryKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/likes', args] as const
}

export function getOndemandPagesOndemandIdLikesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdLikesQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdLikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].likes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdLikesQueryKey>
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
      ...getOndemandPagesOndemandIdLikesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdLikesQueryKey>
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
      ...getOndemandPagesOndemandIdLikesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdPicturesQueryKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/pictures', args] as const
}

export function getOndemandPagesOndemandIdPicturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdPicturesQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdPicturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].pictures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdPicturesQueryKey>
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
      ...getOndemandPagesOndemandIdPicturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdPicturesQueryKey>
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
      ...getOndemandPagesOndemandIdPicturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOndemandPagesOndemandIdPicturesMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/pictures', 'POST'] as const
}

export function getPostOndemandPagesOndemandIdPicturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOndemandPagesOndemandIdPicturesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$post']>,
    ) {
      return parseResponse(client.ondemand.pages[':ondemand_id'].pictures.$post(args, options))
    },
  })
}

export function usePostOndemandPagesOndemandIdPictures<
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
                ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOndemandPagesOndemandIdPicturesMutationOptions<
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

export function getOndemandPagesOndemandIdPicturesPosterIdQueryKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/pictures/:poster_id', args] as const
}

export function getOndemandPagesOndemandIdPicturesPosterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdPicturesPosterIdQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdPicturesPosterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].pictures[':poster_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdPicturesPosterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdPicturesPosterIdQueryKey>
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
      ...getOndemandPagesOndemandIdPicturesPosterIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdPicturesPosterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdPicturesPosterIdQueryKey>
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
      ...getOndemandPagesOndemandIdPicturesPosterIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchOndemandPagesOndemandIdPicturesPosterIdMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/pictures/:poster_id', 'PATCH'] as const
}

export function getPatchOndemandPagesOndemandIdPicturesPosterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOndemandPagesOndemandIdPicturesPosterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].pictures[':poster_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchOndemandPagesOndemandIdPicturesPosterId<
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
                  (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$patch']
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
  const mutationDefaults = getPatchOndemandPagesOndemandIdPicturesPosterIdMutationOptions<
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

export function getOndemandPagesOndemandIdPromotionsQueryKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions', args] as const
}

export function getOndemandPagesOndemandIdPromotionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdPromotionsQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdPromotionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].promotions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdPromotions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdPromotionsQueryKey>
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
      ...getOndemandPagesOndemandIdPromotionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdPromotions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdPromotionsQueryKey>
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
      ...getOndemandPagesOndemandIdPromotionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOndemandPagesOndemandIdPromotionsMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions', 'POST'] as const
}

export function getPostOndemandPagesOndemandIdPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOndemandPagesOndemandIdPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$post']>,
    ) {
      return parseResponse(client.ondemand.pages[':ondemand_id'].promotions.$post(args, options))
    },
  })
}

export function usePostOndemandPagesOndemandIdPromotions<
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
                ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOndemandPagesOndemandIdPromotionsMutationOptions<
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

export function getOndemandPagesOndemandIdPromotionsPromotionIdQueryKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions/:promotion_id', args] as const
}

export function getOndemandPagesOndemandIdPromotionsPromotionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdPromotionsPromotionIdQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdPromotionsPromotionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdPromotionsPromotionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdPromotionsPromotionIdQueryKey>
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
      ...getOndemandPagesOndemandIdPromotionsPromotionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdPromotionsPromotionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdPromotionsPromotionIdQueryKey>
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
      ...getOndemandPagesOndemandIdPromotionsPromotionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOndemandPagesOndemandIdPromotionsPromotionIdMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions/:promotion_id', 'DELETE'] as const
}

export function getDeleteOndemandPagesOndemandIdPromotionsPromotionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOndemandPagesOndemandIdPromotionsPromotionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOndemandPagesOndemandIdPromotionsPromotionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$delete']
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
  const mutationDefaults = getDeleteOndemandPagesOndemandIdPromotionsPromotionIdMutationOptions<
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

export function getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions/:promotion_id/codes', args] as const
}

export function getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].codes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdPromotionsPromotionIdCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryKey>
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
      ...getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdPromotionsPromotionIdCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryKey>
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
      ...getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdRegionsQueryKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions', args] as const
}

export function getOndemandPagesOndemandIdRegionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdRegionsQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].regions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdRegionsQueryKey>
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
      ...getOndemandPagesOndemandIdRegionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdRegionsQueryKey>
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
      ...getOndemandPagesOndemandIdRegionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOndemandPagesOndemandIdRegionsMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions', 'PUT'] as const
}

export function getPutOndemandPagesOndemandIdRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOndemandPagesOndemandIdRegionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>,
    ) {
      return parseResponse(client.ondemand.pages[':ondemand_id'].regions.$put(args, options))
    },
  })
}

export function usePutOndemandPagesOndemandIdRegions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOndemandPagesOndemandIdRegionsMutationOptions<
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

export function getDeleteOndemandPagesOndemandIdRegionsMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions', 'DELETE'] as const
}

export function getDeleteOndemandPagesOndemandIdRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOndemandPagesOndemandIdRegionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$delete']>,
    ) {
      return parseResponse(client.ondemand.pages[':ondemand_id'].regions.$delete(args, options))
    },
  })
}

export function useDeleteOndemandPagesOndemandIdRegions<
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
                ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOndemandPagesOndemandIdRegionsMutationOptions<
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

export function getOndemandPagesOndemandIdRegionsCountryQueryKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions/:country', args] as const
}

export function getOndemandPagesOndemandIdRegionsCountryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdRegionsCountryQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdRegionsCountryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].regions[':country'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdRegionsCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdRegionsCountryQueryKey>
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
      ...getOndemandPagesOndemandIdRegionsCountryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdRegionsCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdRegionsCountryQueryKey>
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
      ...getOndemandPagesOndemandIdRegionsCountryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOndemandPagesOndemandIdRegionsCountryMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions/:country', 'PUT'] as const
}

export function getPutOndemandPagesOndemandIdRegionsCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOndemandPagesOndemandIdRegionsCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$put']
      >,
    ) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].regions[':country'].$put(args, options),
      )
    },
  })
}

export function usePutOndemandPagesOndemandIdRegionsCountry<
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
                  (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$put']
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
  const mutationDefaults = getPutOndemandPagesOndemandIdRegionsCountryMutationOptions<
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

export function getDeleteOndemandPagesOndemandIdRegionsCountryMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions/:country', 'DELETE'] as const
}

export function getDeleteOndemandPagesOndemandIdRegionsCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOndemandPagesOndemandIdRegionsCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$delete']
      >,
    ) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].regions[':country'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOndemandPagesOndemandIdRegionsCountry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$delete']
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
  const mutationDefaults = getDeleteOndemandPagesOndemandIdRegionsCountryMutationOptions<
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

export function getOndemandPagesOndemandIdSeasonsQueryKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/seasons', args] as const
}

export function getOndemandPagesOndemandIdSeasonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdSeasonsQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdSeasonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].seasons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdSeasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdSeasonsQueryKey>
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
      ...getOndemandPagesOndemandIdSeasonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdSeasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdSeasonsQueryKey>
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
      ...getOndemandPagesOndemandIdSeasonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdSeasonsSeasonIdQueryKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/seasons/:season_id', args] as const
}

export function getOndemandPagesOndemandIdSeasonsSeasonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdSeasonsSeasonIdQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdSeasonsSeasonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].seasons[':season_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdSeasonsSeasonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdSeasonsSeasonIdQueryKey>
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
      ...getOndemandPagesOndemandIdSeasonsSeasonIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdSeasonsSeasonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdSeasonsSeasonIdQueryKey>
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
      ...getOndemandPagesOndemandIdSeasonsSeasonIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/seasons/:season_id/videos', args] as const
}

export function getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].seasons[':season_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdSeasonsSeasonIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryKey>
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
      ...getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdSeasonsSeasonIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryKey>
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
      ...getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdVideosQueryKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/videos', args] as const
}

export function getOndemandPagesOndemandIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdVideosQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdVideosQueryKey>
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
      ...getOndemandPagesOndemandIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdVideosQueryKey>
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
      ...getOndemandPagesOndemandIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdVideosVideoIdQueryKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/videos/:video_id', args] as const
}

export function getOndemandPagesOndemandIdVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdVideosVideoIdQueryKey>
  >({
    queryKey: getOndemandPagesOndemandIdVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].videos[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandPagesOndemandIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdVideosVideoIdQueryKey>
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
      ...getOndemandPagesOndemandIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandPagesOndemandIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandPagesOndemandIdVideosVideoIdQueryKey>
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
      ...getOndemandPagesOndemandIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOndemandPagesOndemandIdVideosVideoIdMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/videos/:video_id', 'PUT'] as const
}

export function getPutOndemandPagesOndemandIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOndemandPagesOndemandIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$put']
      >,
    ) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].videos[':video_id'].$put(args, options),
      )
    },
  })
}

export function usePutOndemandPagesOndemandIdVideosVideoId<
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
                  (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$put']
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
  const mutationDefaults = getPutOndemandPagesOndemandIdVideosVideoIdMutationOptions<
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

export function getDeleteOndemandPagesOndemandIdVideosVideoIdMutationKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/videos/:video_id', 'DELETE'] as const
}

export function getDeleteOndemandPagesOndemandIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOndemandPagesOndemandIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].videos[':video_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOndemandPagesOndemandIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$delete']
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
  const mutationDefaults = getDeleteOndemandPagesOndemandIdVideosVideoIdMutationOptions<
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

export function getOndemandRegionsQueryKey() {
  return ['ondemand', '/ondemand/regions'] as const
}

export function getOndemandRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandRegionsQueryKey>
  >({
    queryKey: getOndemandRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOndemandRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOndemandRegionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOndemandRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOndemandRegionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOndemandRegionsCountryQueryKey(
  args: InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>,
) {
  return ['ondemand', '/ondemand/regions/:country', args] as const
}

export function getOndemandRegionsCountryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandRegionsCountryQueryKey>
  >({
    queryKey: getOndemandRegionsCountryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ondemand.regions[':country'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOndemandRegionsCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandRegionsCountryQueryKey>
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
      ...getOndemandRegionsCountryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOndemandRegionsCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOndemandRegionsCountryQueryKey>
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
      ...getOndemandRegionsCountryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTagsWordQueryKey(args: InferRequestType<(typeof client.tags)[':word']['$get']>) {
  return ['tags', '/tags/:word', args] as const
}

export function getTagsWordQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tags)[':word']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsWordQueryKey>
  >({
    queryKey: getTagsWordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':word'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsWord<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':word']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsWordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsWordQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsWord<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':word']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsWordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsWordQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsWordVideosQueryKey(
  args: InferRequestType<(typeof client.tags)[':word']['videos']['$get']>,
) {
  return ['tags', '/tags/:word/videos', args] as const
}

export function getTagsWordVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':word']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsWordVideosQueryKey>
  >({
    queryKey: getTagsWordVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':word'].videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsWordVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':word']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsWordVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsWordVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsWordVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':word']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsWordVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsWordVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTokensMutationKey() {
  return ['tokens', '/tokens', 'DELETE'] as const
}

export function getDeleteTokensMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteTokensMutationKey(),
    async mutationFn() {
      return parseResponse(client.tokens.$delete(undefined, options))
    },
  })
}

export function useDeleteTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$delete>>>>
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTokensMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTutorialQueryKey() {
  return ['tutorial', '/tutorial'] as const
}

export function getTutorialQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tutorial.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tutorial.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTutorialQueryKey>
  >({
    queryKey: getTutorialQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tutorial.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTutorial<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tutorial.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tutorial.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTutorialQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTutorialQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTutorial<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tutorial.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tutorial.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTutorialQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTutorialQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchUsersUserIdMutationKey() {
  return ['users', '/users/:user_id', 'PATCH'] as const
}

export function getPatchUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$patch']>) {
      return parseResponse(client.users[':user_id'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdAlbumsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>,
) {
  return ['users', '/users/:user_id/albums', args] as const
}

export function getUsersUserIdAlbumsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsQueryKey>
  >({
    queryKey: getUsersUserIdAlbumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].albums.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdAlbumsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdAlbumsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersUserIdAlbumsMutationKey() {
  return ['users', '/users/:user_id/albums', 'POST'] as const
}

export function getPostUsersUserIdAlbumsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['albums']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdAlbumsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['albums']['$post']>) {
      return parseResponse(client.users[':user_id'].albums.$post(args, options))
    },
  })
}

export function usePostUsersUserIdAlbums<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['albums']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdAlbumsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdAlbumsAlbumIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>,
) {
  return ['users', '/users/:user_id/albums/:album_id', args] as const
}

export function getUsersUserIdAlbumsAlbumIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdQueryKey>
  >({
    queryKey: getUsersUserIdAlbumsAlbumIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdAlbumsAlbumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAlbumsAlbumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdAlbumsAlbumIdMutationKey() {
  return ['users', '/users/:user_id/albums/:album_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdAlbumsAlbumIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdAlbumsAlbumIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$delete']>,
    ) {
      return parseResponse(client.users[':user_id'].albums[':album_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdAlbumsAlbumId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdAlbumsAlbumIdMutationOptions<
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

export function getPatchUsersUserIdAlbumsAlbumIdMutationKey() {
  return ['users', '/users/:user_id/albums/:album_id', 'PATCH'] as const
}

export function getPatchUsersUserIdAlbumsAlbumIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdAlbumsAlbumIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$patch']>,
    ) {
      return parseResponse(client.users[':user_id'].albums[':album_id'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdAlbumsAlbumId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdAlbumsAlbumIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/custom_thumbnails', args] as const
}

export function getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryKey>
  >({
    queryKey: getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].custom_thumbnails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdAlbumsAlbumIdCustomThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAlbumsAlbumIdCustomThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersUserIdAlbumsAlbumIdCustomThumbnailsMutationKey() {
  return ['users', '/users/:user_id/albums/:album_id/custom_thumbnails', 'POST'] as const
}

export function getPostUsersUserIdAlbumsAlbumIdCustomThumbnailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdAlbumsAlbumIdCustomThumbnailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].custom_thumbnails.$post(args, options),
      )
    },
  })
}

export function usePostUsersUserIdAlbumsAlbumIdCustomThumbnails<
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
                  (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$post']
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
  const mutationDefaults = getPostUsersUserIdAlbumsAlbumIdCustomThumbnailsMutationOptions<
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

export function getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
  >,
) {
  return [
    'users',
    '/users/:user_id/albums/:album_id/custom_thumbnails/:thumbnail_id',
    args,
  ] as const
}

export function getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryKey>
  >({
    queryKey: getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdMutationKey() {
  return [
    'users',
    '/users/:user_id/albums/:album_id/custom_thumbnails/:thumbnail_id',
    'DELETE',
  ] as const
}

export function getDeleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$delete']
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
  const mutationDefaults =
    getDeleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdMutationOptions<
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

export function getPatchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdMutationKey() {
  return [
    'users',
    '/users/:user_id/albums/:album_id/custom_thumbnails/:thumbnail_id',
    'PATCH',
  ] as const
}

export function getPatchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId<
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
                  (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$patch']
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
  const mutationDefaults =
    getPatchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdMutationOptions<
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

export function getUsersUserIdAlbumsAlbumIdLogosQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>,
) {
  return ['users', '/users/:user_id/albums/:album_id/logos', args] as const
}

export function getUsersUserIdAlbumsAlbumIdLogosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdLogosQueryKey>
  >({
    queryKey: getUsersUserIdAlbumsAlbumIdLogosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].logos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdAlbumsAlbumIdLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdLogosQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdLogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAlbumsAlbumIdLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdLogosQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdLogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersUserIdAlbumsAlbumIdLogosMutationKey() {
  return ['users', '/users/:user_id/albums/:album_id/logos', 'POST'] as const
}

export function getPostUsersUserIdAlbumsAlbumIdLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdAlbumsAlbumIdLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['albums'][':album_id']['logos']['$post']
      >,
    ) {
      return parseResponse(client.users[':user_id'].albums[':album_id'].logos.$post(args, options))
    },
  })
}

export function usePostUsersUserIdAlbumsAlbumIdLogos<
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
                  (typeof client.users)[':user_id']['albums'][':album_id']['logos']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['albums'][':album_id']['logos']['$post']
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
  const mutationDefaults = getPostUsersUserIdAlbumsAlbumIdLogosMutationOptions<
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

export function getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/logos/:logo_id', args] as const
}

export function getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryKey>
  >({
    queryKey: getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdAlbumsAlbumIdLogosLogoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAlbumsAlbumIdLogosLogoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdAlbumsAlbumIdLogosLogoIdMutationKey() {
  return ['users', '/users/:user_id/albums/:album_id/logos/:logo_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdAlbumsAlbumIdLogosLogoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdAlbumsAlbumIdLogosLogoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdAlbumsAlbumIdLogosLogoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdAlbumsAlbumIdLogosLogoIdMutationOptions<
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

export function getPatchUsersUserIdAlbumsAlbumIdLogosLogoIdMutationKey() {
  return ['users', '/users/:user_id/albums/:album_id/logos/:logo_id', 'PATCH'] as const
}

export function getPatchUsersUserIdAlbumsAlbumIdLogosLogoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdAlbumsAlbumIdLogosLogoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchUsersUserIdAlbumsAlbumIdLogosLogoId<
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
                  (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$patch']
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
  const mutationDefaults = getPatchUsersUserIdAlbumsAlbumIdLogosLogoIdMutationOptions<
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

export function getUsersUserIdAlbumsAlbumIdVideosQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/videos', args] as const
}

export function getUsersUserIdAlbumsAlbumIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdVideosQueryKey>
  >({
    queryKey: getUsersUserIdAlbumsAlbumIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdAlbumsAlbumIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdVideosQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAlbumsAlbumIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdVideosQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUsersUserIdAlbumsAlbumIdVideosMutationKey() {
  return ['users', '/users/:user_id/albums/:album_id/videos', 'PUT'] as const
}

export function getPutUsersUserIdAlbumsAlbumIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdAlbumsAlbumIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$put']
      >,
    ) {
      return parseResponse(client.users[':user_id'].albums[':album_id'].videos.$put(args, options))
    },
  })
}

export function usePutUsersUserIdAlbumsAlbumIdVideos<
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
                  (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$put']
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
  const mutationDefaults = getPutUsersUserIdAlbumsAlbumIdVideosMutationOptions<
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

export function getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/videos/:video_id', args] as const
}

export function getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryKey>
  >({
    queryKey: getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].videos[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdAlbumsAlbumIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAlbumsAlbumIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryKey>
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
      ...getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUsersUserIdAlbumsAlbumIdVideosVideoIdMutationKey() {
  return ['users', '/users/:user_id/albums/:album_id/videos/:video_id', 'PUT'] as const
}

export function getPutUsersUserIdAlbumsAlbumIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdAlbumsAlbumIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].videos[':video_id'].$put(args, options),
      )
    },
  })
}

export function usePutUsersUserIdAlbumsAlbumIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$put']
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
  const mutationDefaults = getPutUsersUserIdAlbumsAlbumIdVideosVideoIdMutationOptions<
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

export function getDeleteUsersUserIdAlbumsAlbumIdVideosVideoIdMutationKey() {
  return ['users', '/users/:user_id/albums/:album_id/videos/:video_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdAlbumsAlbumIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdAlbumsAlbumIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].videos[':video_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdAlbumsAlbumIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdAlbumsAlbumIdVideosVideoIdMutationOptions<
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

export function getPostUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailMutationKey() {
  return [
    'users',
    '/users/:user_id/albums/:album_id/videos/:video_id/set_album_thumbnail',
    'POST',
  ] as const
}

export function getPostUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].videos[':video_id'].set_album_thumbnail.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnail<
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
                  (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
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
  const mutationDefaults =
    getPostUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailMutationOptions<
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

export function getUsersUserIdAppearancesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>,
) {
  return ['users', '/users/:user_id/appearances', args] as const
}

export function getUsersUserIdAppearancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAppearancesQueryKey>
  >({
    queryKey: getUsersUserIdAppearancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].appearances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdAppearances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAppearancesQueryKey>
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
      ...getUsersUserIdAppearancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAppearances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAppearancesQueryKey>
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
      ...getUsersUserIdAppearancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdCategoriesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>,
) {
  return ['users', '/users/:user_id/categories', args] as const
}

export function getUsersUserIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCategoriesQueryKey>
  >({
    queryKey: getUsersUserIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdCategoriesQueryKey>
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
      ...getUsersUserIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdCategoriesQueryKey>
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
      ...getUsersUserIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdCategoriesCategoryQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>,
) {
  return ['users', '/users/:user_id/categories/:category', args] as const
}

export function getUsersUserIdCategoriesCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCategoriesCategoryQueryKey>
  >({
    queryKey: getUsersUserIdCategoriesCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].categories[':category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdCategoriesCategoryQueryKey>
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
      ...getUsersUserIdCategoriesCategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdCategoriesCategoryQueryKey>
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
      ...getUsersUserIdCategoriesCategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUsersUserIdCategoriesCategoryMutationKey() {
  return ['users', '/users/:user_id/categories/:category', 'PUT'] as const
}

export function getPutUsersUserIdCategoriesCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdCategoriesCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$put']>,
    ) {
      return parseResponse(client.users[':user_id'].categories[':category'].$put(args, options))
    },
  })
}

export function usePutUsersUserIdCategoriesCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdCategoriesCategoryMutationOptions<
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

export function getDeleteUsersUserIdCategoriesCategoryMutationKey() {
  return ['users', '/users/:user_id/categories/:category', 'DELETE'] as const
}

export function getDeleteUsersUserIdCategoriesCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdCategoriesCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['categories'][':category']['$delete']
      >,
    ) {
      return parseResponse(client.users[':user_id'].categories[':category'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdCategoriesCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['categories'][':category']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdCategoriesCategoryMutationOptions<
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

export function getUsersUserIdChannelsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
) {
  return ['users', '/users/:user_id/channels', args] as const
}

export function getUsersUserIdChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdChannelsQueryKey>
  >({
    queryKey: getUsersUserIdChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserIdChannelsChannelIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>,
) {
  return ['users', '/users/:user_id/channels/:channel_id', args] as const
}

export function getUsersUserIdChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdChannelsChannelIdQueryKey>
  >({
    queryKey: getUsersUserIdChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].channels[':channel_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdChannelsChannelIdQueryKey>
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
      ...getUsersUserIdChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdChannelsChannelIdQueryKey>
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
      ...getUsersUserIdChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUsersUserIdChannelsChannelIdMutationKey() {
  return ['users', '/users/:user_id/channels/:channel_id', 'PUT'] as const
}

export function getPutUsersUserIdChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$put']>,
    ) {
      return parseResponse(client.users[':user_id'].channels[':channel_id'].$put(args, options))
    },
  })
}

export function usePutUsersUserIdChannelsChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdChannelsChannelIdMutationOptions<
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

export function getDeleteUsersUserIdChannelsChannelIdMutationKey() {
  return ['users', '/users/:user_id/channels/:channel_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['channels'][':channel_id']['$delete']
      >,
    ) {
      return parseResponse(client.users[':user_id'].channels[':channel_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdChannelsChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['channels'][':channel_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdChannelsChannelIdMutationOptions<
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

export function getUsersUserIdCustomlogosQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>,
) {
  return ['users', '/users/:user_id/customlogos', args] as const
}

export function getUsersUserIdCustomlogosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCustomlogosQueryKey>
  >({
    queryKey: getUsersUserIdCustomlogosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].customlogos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdCustomlogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdCustomlogosQueryKey>
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
      ...getUsersUserIdCustomlogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdCustomlogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdCustomlogosQueryKey>
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
      ...getUsersUserIdCustomlogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersUserIdCustomlogosMutationKey() {
  return ['users', '/users/:user_id/customlogos', 'POST'] as const
}

export function getPostUsersUserIdCustomlogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['customlogos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdCustomlogosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].customlogos.$post(args, options))
    },
  })
}

export function usePostUsersUserIdCustomlogos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['customlogos']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdCustomlogosMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdCustomlogosLogoIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>,
) {
  return ['users', '/users/:user_id/customlogos/:logo_id', args] as const
}

export function getUsersUserIdCustomlogosLogoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCustomlogosLogoIdQueryKey>
  >({
    queryKey: getUsersUserIdCustomlogosLogoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].customlogos[':logo_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdCustomlogosLogoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdCustomlogosLogoIdQueryKey>
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
      ...getUsersUserIdCustomlogosLogoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdCustomlogosLogoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdCustomlogosLogoIdQueryKey>
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
      ...getUsersUserIdCustomlogosLogoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdFeedQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>,
) {
  return ['users', '/users/:user_id/feed', args] as const
}

export function getUsersUserIdFeedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFeedQueryKey>
  >({
    queryKey: getUsersUserIdFeedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].feed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdFeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdFeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdFeedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdFeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdFeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdFeedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserIdFollowersQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
) {
  return ['users', '/users/:user_id/followers', args] as const
}

export function getUsersUserIdFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFollowersQueryKey>
  >({
    queryKey: getUsersUserIdFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdFollowersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdFollowersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserIdFollowingQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['following']['$get']>,
) {
  return ['users', '/users/:user_id/following', args] as const
}

export function getUsersUserIdFollowingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFollowingQueryKey>
  >({
    queryKey: getUsersUserIdFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['following']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdFollowingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['following']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdFollowingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersUserIdFollowingMutationKey() {
  return ['users', '/users/:user_id/following', 'POST'] as const
}

export function getPostUsersUserIdFollowingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['following']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdFollowingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['following']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].following.$post(args, options))
    },
  })
}

export function usePostUsersUserIdFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['following']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdFollowingMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdFollowingFollowUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>,
) {
  return ['users', '/users/:user_id/following/:follow_user_id', args] as const
}

export function getUsersUserIdFollowingFollowUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFollowingFollowUserIdQueryKey>
  >({
    queryKey: getUsersUserIdFollowingFollowUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].following[':follow_user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdFollowingFollowUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['following'][':follow_user_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdFollowingFollowUserIdQueryKey>
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
      ...getUsersUserIdFollowingFollowUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdFollowingFollowUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['following'][':follow_user_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdFollowingFollowUserIdQueryKey>
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
      ...getUsersUserIdFollowingFollowUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUsersUserIdFollowingFollowUserIdMutationKey() {
  return ['users', '/users/:user_id/following/:follow_user_id', 'PUT'] as const
}

export function getPutUsersUserIdFollowingFollowUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdFollowingFollowUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['following'][':follow_user_id']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].following[':follow_user_id'].$put(args, options),
      )
    },
  })
}

export function usePutUsersUserIdFollowingFollowUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['following'][':follow_user_id']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdFollowingFollowUserIdMutationOptions<
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

export function getDeleteUsersUserIdFollowingFollowUserIdMutationKey() {
  return ['users', '/users/:user_id/following/:follow_user_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdFollowingFollowUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['following'][':follow_user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdFollowingFollowUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['following'][':follow_user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].following[':follow_user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdFollowingFollowUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['following'][':follow_user_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['following'][':follow_user_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdFollowingFollowUserIdMutationOptions<
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

export function getUsersUserIdGroupsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
) {
  return ['users', '/users/:user_id/groups', args] as const
}

export function getUsersUserIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdGroupsQueryKey>
  >({
    queryKey: getUsersUserIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserIdGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>,
) {
  return ['users', '/users/:user_id/groups/:group_id', args] as const
}

export function getUsersUserIdGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdGroupsGroupIdQueryKey>
  >({
    queryKey: getUsersUserIdGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].groups[':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdGroupsGroupIdQueryKey>
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
      ...getUsersUserIdGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdGroupsGroupIdQueryKey>
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
      ...getUsersUserIdGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUsersUserIdGroupsGroupIdMutationKey() {
  return ['users', '/users/:user_id/groups/:group_id', 'PUT'] as const
}

export function getPutUsersUserIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$put']>,
    ) {
      return parseResponse(client.users[':user_id'].groups[':group_id'].$put(args, options))
    },
  })
}

export function usePutUsersUserIdGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdGroupsGroupIdMutationKey() {
  return ['users', '/users/:user_id/groups/:group_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$delete']>,
    ) {
      return parseResponse(client.users[':user_id'].groups[':group_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdGroupsGroupIdMutationOptions<
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

export function getUsersUserIdLikesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>,
) {
  return ['users', '/users/:user_id/likes', args] as const
}

export function getUsersUserIdLikesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdLikesQueryKey>
  >({
    queryKey: getUsersUserIdLikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].likes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserIdLikesVideoIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>,
) {
  return ['users', '/users/:user_id/likes/:video_id', args] as const
}

export function getUsersUserIdLikesVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdLikesVideoIdQueryKey>
  >({
    queryKey: getUsersUserIdLikesVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].likes[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdLikesVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdLikesVideoIdQueryKey>
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
      ...getUsersUserIdLikesVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdLikesVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdLikesVideoIdQueryKey>
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
      ...getUsersUserIdLikesVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUsersUserIdLikesVideoIdMutationKey() {
  return ['users', '/users/:user_id/likes/:video_id', 'PUT'] as const
}

export function getPutUsersUserIdLikesVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdLikesVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>,
    ) {
      return parseResponse(client.users[':user_id'].likes[':video_id'].$put(args, options))
    },
  })
}

export function usePutUsersUserIdLikesVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdLikesVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdLikesVideoIdMutationKey() {
  return ['users', '/users/:user_id/likes/:video_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdLikesVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdLikesVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$delete']>,
    ) {
      return parseResponse(client.users[':user_id'].likes[':video_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdLikesVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdLikesVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdOndemandPagesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>,
) {
  return ['users', '/users/:user_id/ondemand/pages', args] as const
}

export function getUsersUserIdOndemandPagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdOndemandPagesQueryKey>
  >({
    queryKey: getUsersUserIdOndemandPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].ondemand.pages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdOndemandPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdOndemandPagesQueryKey>
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
      ...getUsersUserIdOndemandPagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdOndemandPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdOndemandPagesQueryKey>
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
      ...getUsersUserIdOndemandPagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersUserIdOndemandPagesMutationKey() {
  return ['users', '/users/:user_id/ondemand/pages', 'POST'] as const
}

export function getPostUsersUserIdOndemandPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdOndemandPagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].ondemand.pages.$post(args, options))
    },
  })
}

export function usePostUsersUserIdOndemandPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdOndemandPagesMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdOndemandPurchasesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>,
) {
  return ['users', '/users/:user_id/ondemand/purchases', args] as const
}

export function getUsersUserIdOndemandPurchasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdOndemandPurchasesQueryKey>
  >({
    queryKey: getUsersUserIdOndemandPurchasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].ondemand.purchases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdOndemandPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdOndemandPurchasesQueryKey>
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
      ...getUsersUserIdOndemandPurchasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdOndemandPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdOndemandPurchasesQueryKey>
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
      ...getUsersUserIdOndemandPurchasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdPicturesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>,
) {
  return ['users', '/users/:user_id/pictures', args] as const
}

export function getUsersUserIdPicturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPicturesQueryKey>
  >({
    queryKey: getUsersUserIdPicturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].pictures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdPicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdPicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersUserIdPicturesMutationKey() {
  return ['users', '/users/:user_id/pictures', 'POST'] as const
}

export function getPostUsersUserIdPicturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['pictures']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPicturesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['pictures']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].pictures.$post(args, options))
    },
  })
}

export function usePostUsersUserIdPictures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['pictures']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdPicturesMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdPicturesPortraitsetIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>,
) {
  return ['users', '/users/:user_id/pictures/:portraitset_id', args] as const
}

export function getUsersUserIdPicturesPortraitsetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPicturesPortraitsetIdQueryKey>
  >({
    queryKey: getUsersUserIdPicturesPortraitsetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].pictures[':portraitset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdPicturesPortraitsetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPicturesPortraitsetIdQueryKey>
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
      ...getUsersUserIdPicturesPortraitsetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPicturesPortraitsetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPicturesPortraitsetIdQueryKey>
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
      ...getUsersUserIdPicturesPortraitsetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdPicturesPortraitsetIdMutationKey() {
  return ['users', '/users/:user_id/pictures/:portraitset_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdPicturesPortraitsetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdPicturesPortraitsetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].pictures[':portraitset_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdPicturesPortraitsetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdPicturesPortraitsetIdMutationOptions<
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

export function getPatchUsersUserIdPicturesPortraitsetIdMutationKey() {
  return ['users', '/users/:user_id/pictures/:portraitset_id', 'PATCH'] as const
}

export function getPatchUsersUserIdPicturesPortraitsetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdPicturesPortraitsetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].pictures[':portraitset_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchUsersUserIdPicturesPortraitsetId<
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
                  (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$patch']
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
  const mutationDefaults = getPatchUsersUserIdPicturesPortraitsetIdMutationOptions<
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

export function getUsersUserIdPortfoliosQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>,
) {
  return ['users', '/users/:user_id/portfolios', args] as const
}

export function getUsersUserIdPortfoliosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPortfoliosQueryKey>
  >({
    queryKey: getUsersUserIdPortfoliosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].portfolios.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdPortfolios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPortfoliosQueryKey>
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
      ...getUsersUserIdPortfoliosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPortfolios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPortfoliosQueryKey>
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
      ...getUsersUserIdPortfoliosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdPortfoliosPortfolioIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>,
) {
  return ['users', '/users/:user_id/portfolios/:portfolio_id', args] as const
}

export function getUsersUserIdPortfoliosPortfolioIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdQueryKey>
  >({
    queryKey: getUsersUserIdPortfoliosPortfolioIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].portfolios[':portfolio_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdPortfoliosPortfolioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdQueryKey>
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
      ...getUsersUserIdPortfoliosPortfolioIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPortfoliosPortfolioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdQueryKey>
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
      ...getUsersUserIdPortfoliosPortfolioIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdPortfoliosPortfolioIdVideosQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
  >,
) {
  return ['users', '/users/:user_id/portfolios/:portfolio_id/videos', args] as const
}

export function getUsersUserIdPortfoliosPortfolioIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdVideosQueryKey>
  >({
    queryKey: getUsersUserIdPortfoliosPortfolioIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].portfolios[':portfolio_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdPortfoliosPortfolioIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdVideosQueryKey>
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
      ...getUsersUserIdPortfoliosPortfolioIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPortfoliosPortfolioIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdVideosQueryKey>
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
      ...getUsersUserIdPortfoliosPortfolioIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
  >,
) {
  return ['users', '/users/:user_id/portfolios/:portfolio_id/videos/:video_id', args] as const
}

export function getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryKey>
  >({
    queryKey: getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdPortfoliosPortfolioIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryKey>
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
      ...getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPortfoliosPortfolioIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryKey>
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
      ...getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUsersUserIdPortfoliosPortfolioIdVideosVideoIdMutationKey() {
  return ['users', '/users/:user_id/portfolios/:portfolio_id/videos/:video_id', 'PUT'] as const
}

export function getPutUsersUserIdPortfoliosPortfolioIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdPortfoliosPortfolioIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutUsersUserIdPortfoliosPortfolioIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$put']
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
  const mutationDefaults = getPutUsersUserIdPortfoliosPortfolioIdVideosVideoIdMutationOptions<
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

export function getDeleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdMutationKey() {
  return ['users', '/users/:user_id/portfolios/:portfolio_id/videos/:video_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUsersUserIdPortfoliosPortfolioIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdMutationOptions<
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

export function getUsersUserIdPresetsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>,
) {
  return ['users', '/users/:user_id/presets', args] as const
}

export function getUsersUserIdPresetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPresetsQueryKey>
  >({
    queryKey: getUsersUserIdPresetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].presets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdPresets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPresetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdPresetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPresets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPresetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdPresetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserIdPresetsPresetIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>,
) {
  return ['users', '/users/:user_id/presets/:preset_id', args] as const
}

export function getUsersUserIdPresetsPresetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPresetsPresetIdQueryKey>
  >({
    queryKey: getUsersUserIdPresetsPresetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].presets[':preset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdPresetsPresetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPresetsPresetIdQueryKey>
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
      ...getUsersUserIdPresetsPresetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPresetsPresetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPresetsPresetIdQueryKey>
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
      ...getUsersUserIdPresetsPresetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchUsersUserIdPresetsPresetIdMutationKey() {
  return ['users', '/users/:user_id/presets/:preset_id', 'PATCH'] as const
}

export function getPatchUsersUserIdPresetsPresetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdPresetsPresetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$patch']>,
    ) {
      return parseResponse(client.users[':user_id'].presets[':preset_id'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdPresetsPresetId<
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
                ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdPresetsPresetIdMutationOptions<
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

export function getUsersUserIdPresetsPresetIdVideosQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
  >,
) {
  return ['users', '/users/:user_id/presets/:preset_id/videos', args] as const
}

export function getUsersUserIdPresetsPresetIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPresetsPresetIdVideosQueryKey>
  >({
    queryKey: getUsersUserIdPresetsPresetIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].presets[':preset_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdPresetsPresetIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPresetsPresetIdVideosQueryKey>
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
      ...getUsersUserIdPresetsPresetIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPresetsPresetIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPresetsPresetIdVideosQueryKey>
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
      ...getUsersUserIdPresetsPresetIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdProjectsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>,
) {
  return ['users', '/users/:user_id/projects', args] as const
}

export function getUsersUserIdProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdProjectsQueryKey>
  >({
    queryKey: getUsersUserIdProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersUserIdProjectsMutationKey() {
  return ['users', '/users/:user_id/projects', 'POST'] as const
}

export function getPostUsersUserIdProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['projects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['projects']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].projects.$post(args, options))
    },
  })
}

export function usePostUsersUserIdProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['projects']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>,
) {
  return ['users', '/users/:user_id/projects/:project_id', args] as const
}

export function getUsersUserIdProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdProjectsProjectIdQueryKey>
  >({
    queryKey: getUsersUserIdProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdProjectsProjectIdQueryKey>
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
      ...getUsersUserIdProjectsProjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdProjectsProjectIdQueryKey>
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
      ...getUsersUserIdProjectsProjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdProjectsProjectIdMutationKey() {
  return ['users', '/users/:user_id/projects/:project_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['projects'][':project_id']['$delete']
      >,
    ) {
      return parseResponse(client.users[':user_id'].projects[':project_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['projects'][':project_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdProjectsProjectIdMutationOptions<
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

export function getPatchUsersUserIdProjectsProjectIdMutationKey() {
  return ['users', '/users/:user_id/projects/:project_id', 'PATCH'] as const
}

export function getPatchUsersUserIdProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['projects'][':project_id']['$patch']
      >,
    ) {
      return parseResponse(client.users[':user_id'].projects[':project_id'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdProjectsProjectId<
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
                ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdProjectsProjectIdMutationOptions<
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

export function getUsersUserIdProjectsProjectIdVideosQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
  >,
) {
  return ['users', '/users/:user_id/projects/:project_id/videos', args] as const
}

export function getUsersUserIdProjectsProjectIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdProjectsProjectIdVideosQueryKey>
  >({
    queryKey: getUsersUserIdProjectsProjectIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].projects[':project_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdProjectsProjectIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdProjectsProjectIdVideosQueryKey>
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
      ...getUsersUserIdProjectsProjectIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdProjectsProjectIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdProjectsProjectIdVideosQueryKey>
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
      ...getUsersUserIdProjectsProjectIdVideosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUsersUserIdProjectsProjectIdVideosMutationKey() {
  return ['users', '/users/:user_id/projects/:project_id/videos', 'PUT'] as const
}

export function getPutUsersUserIdProjectsProjectIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdProjectsProjectIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].projects[':project_id'].videos.$put(args, options),
      )
    },
  })
}

export function usePutUsersUserIdProjectsProjectIdVideos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$put']
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
  const mutationDefaults = getPutUsersUserIdProjectsProjectIdVideosMutationOptions<
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

export function getDeleteUsersUserIdProjectsProjectIdVideosMutationKey() {
  return ['users', '/users/:user_id/projects/:project_id/videos', 'DELETE'] as const
}

export function getDeleteUsersUserIdProjectsProjectIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdProjectsProjectIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].projects[':project_id'].videos.$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdProjectsProjectIdVideos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdProjectsProjectIdVideosMutationOptions<
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

export function getPutUsersUserIdProjectsProjectIdVideosVideoIdMutationKey() {
  return ['users', '/users/:user_id/projects/:project_id/videos/:video_id', 'PUT'] as const
}

export function getPutUsersUserIdProjectsProjectIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdProjectsProjectIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].projects[':project_id'].videos[':video_id'].$put(args, options),
      )
    },
  })
}

export function usePutUsersUserIdProjectsProjectIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$put']
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
  const mutationDefaults = getPutUsersUserIdProjectsProjectIdVideosVideoIdMutationOptions<
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

export function getDeleteUsersUserIdProjectsProjectIdVideosVideoIdMutationKey() {
  return ['users', '/users/:user_id/projects/:project_id/videos/:video_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdProjectsProjectIdVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdProjectsProjectIdVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].projects[':project_id'].videos[':video_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdProjectsProjectIdVideosVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdProjectsProjectIdVideosVideoIdMutationOptions<
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

export function getUsersUserIdUploadsUploadIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>,
) {
  return ['users', '/users/:user_id/uploads/:upload_id', args] as const
}

export function getUsersUserIdUploadsUploadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdUploadsUploadIdQueryKey>
  >({
    queryKey: getUsersUserIdUploadsUploadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].uploads[':upload_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdUploadsUploadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdUploadsUploadIdQueryKey>
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
      ...getUsersUserIdUploadsUploadIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdUploadsUploadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdUploadsUploadIdQueryKey>
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
      ...getUsersUserIdUploadsUploadIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdUploadsUploadIdMutationKey() {
  return ['users', '/users/:user_id/uploads/:upload_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdUploadsUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdUploadsUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$delete']>,
    ) {
      return parseResponse(client.users[':user_id'].uploads[':upload_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdUploadsUploadId<
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
                ReturnType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdUploadsUploadIdMutationOptions<
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

export function getUsersUserIdVideosQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>,
) {
  return ['users', '/users/:user_id/videos', args] as const
}

export function getUsersUserIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdVideosQueryKey>
  >({
    queryKey: getUsersUserIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersUserIdVideosMutationKey() {
  return ['users', '/users/:user_id/videos', 'POST'] as const
}

export function getPostUsersUserIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['videos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdVideosMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['videos']['$post']>) {
      return parseResponse(client.users[':user_id'].videos.$post(args, options))
    },
  })
}

export function usePostUsersUserIdVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['videos']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdVideosMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdVideosVideoIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>,
) {
  return ['users', '/users/:user_id/videos/:video_id', args] as const
}

export function getUsersUserIdVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdVideosVideoIdQueryKey>
  >({
    queryKey: getUsersUserIdVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].videos[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdVideosVideoIdQueryKey>
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
      ...getUsersUserIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdVideosVideoIdQueryKey>
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
      ...getUsersUserIdVideosVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdWatchlaterQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>,
) {
  return ['users', '/users/:user_id/watchlater', args] as const
}

export function getUsersUserIdWatchlaterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdWatchlaterQueryKey>
  >({
    queryKey: getUsersUserIdWatchlaterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].watchlater.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdWatchlater<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdWatchlaterQueryKey>
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
      ...getUsersUserIdWatchlaterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdWatchlater<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdWatchlaterQueryKey>
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
      ...getUsersUserIdWatchlaterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdWatchlaterVideoIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>,
) {
  return ['users', '/users/:user_id/watchlater/:video_id', args] as const
}

export function getUsersUserIdWatchlaterVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdWatchlaterVideoIdQueryKey>
  >({
    queryKey: getUsersUserIdWatchlaterVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].watchlater[':video_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdWatchlaterVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdWatchlaterVideoIdQueryKey>
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
      ...getUsersUserIdWatchlaterVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdWatchlaterVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdWatchlaterVideoIdQueryKey>
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
      ...getUsersUserIdWatchlaterVideoIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUsersUserIdWatchlaterVideoIdMutationKey() {
  return ['users', '/users/:user_id/watchlater/:video_id', 'PUT'] as const
}

export function getPutUsersUserIdWatchlaterVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdWatchlaterVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$put']>,
    ) {
      return parseResponse(client.users[':user_id'].watchlater[':video_id'].$put(args, options))
    },
  })
}

export function usePutUsersUserIdWatchlaterVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdWatchlaterVideoIdMutationOptions<
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

export function getDeleteUsersUserIdWatchlaterVideoIdMutationKey() {
  return ['users', '/users/:user_id/watchlater/:video_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdWatchlaterVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdWatchlaterVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['watchlater'][':video_id']['$delete']
      >,
    ) {
      return parseResponse(client.users[':user_id'].watchlater[':video_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdWatchlaterVideoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':user_id']['watchlater'][':video_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdWatchlaterVideoIdMutationOptions<
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

export function getVideosQueryKey(args: InferRequestType<typeof client.videos.$get>) {
  return ['videos', '/videos', args] as const
}

export function getVideosQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideosQueryKey>
  >({
    queryKey: getVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVideos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.videos.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVideos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.videos.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVideosVideoIdQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
) {
  return ['videos', '/videos/:video_id', args] as const
}

export function getVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdQueryKey>
  >({
    queryKey: getVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVideosVideoIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVideosVideoIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteVideosVideoIdMutationKey() {
  return ['videos', '/videos/:video_id', 'DELETE'] as const
}

export function getDeleteVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.videos)[':video_id']['$delete']>) {
      return parseResponse(client.videos[':video_id'].$delete(args, options))
    },
  })
}

export function useDeleteVideosVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVideosVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchVideosVideoIdMutationKey() {
  return ['videos', '/videos/:video_id', 'PATCH'] as const
}

export function getPatchVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVideosVideoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.videos)[':video_id']['$patch']>) {
      return parseResponse(client.videos[':video_id'].$patch(args, options))
    },
  })
}

export function usePatchVideosVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVideosVideoIdMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdAvailableAlbumsQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_albums']['$get']>,
) {
  return ['videos', '/videos/:video_id/available_albums', args] as const
}

export function getVideosVideoIdAvailableAlbumsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['available_albums']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_albums']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['available_albums']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdAvailableAlbumsQueryKey>
  >({
    queryKey: getVideosVideoIdAvailableAlbumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].available_albums.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdAvailableAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['available_albums']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_albums']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['available_albums']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdAvailableAlbumsQueryKey>
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
      ...getVideosVideoIdAvailableAlbumsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdAvailableAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['available_albums']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_albums']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['available_albums']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdAvailableAlbumsQueryKey>
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
      ...getVideosVideoIdAvailableAlbumsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVideosVideoIdAvailableChannelsQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>,
) {
  return ['videos', '/videos/:video_id/available_channels', args] as const
}

export function getVideosVideoIdAvailableChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdAvailableChannelsQueryKey>
  >({
    queryKey: getVideosVideoIdAvailableChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].available_channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdAvailableChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdAvailableChannelsQueryKey>
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
      ...getVideosVideoIdAvailableChannelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdAvailableChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdAvailableChannelsQueryKey>
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
      ...getVideosVideoIdAvailableChannelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVideosVideoIdCategoriesQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>,
) {
  return ['videos', '/videos/:video_id/categories', args] as const
}

export function getVideosVideoIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCategoriesQueryKey>
  >({
    queryKey: getVideosVideoIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCategoriesQueryKey>
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
      ...getVideosVideoIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCategoriesQueryKey>
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
      ...getVideosVideoIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutVideosVideoIdCategoriesMutationKey() {
  return ['videos', '/videos/:video_id/categories', 'PUT'] as const
}

export function getPutVideosVideoIdCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['categories']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVideosVideoIdCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['categories']['$put']>,
    ) {
      return parseResponse(client.videos[':video_id'].categories.$put(args, options))
    },
  })
}

export function usePutVideosVideoIdCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['categories']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVideosVideoIdCategoriesMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdCommentsQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>,
) {
  return ['videos', '/videos/:video_id/comments', args] as const
}

export function getVideosVideoIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCommentsQueryKey>
  >({
    queryKey: getVideosVideoIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCommentsQueryKey>
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
      ...getVideosVideoIdCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCommentsQueryKey>
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
      ...getVideosVideoIdCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostVideosVideoIdCommentsMutationKey() {
  return ['videos', '/videos/:video_id/comments', 'POST'] as const
}

export function getPostVideosVideoIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['comments']['$post']>,
    ) {
      return parseResponse(client.videos[':video_id'].comments.$post(args, options))
    },
  })
}

export function usePostVideosVideoIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosVideoIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdCommentsCommentIdQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>,
) {
  return ['videos', '/videos/:video_id/comments/:comment_id', args] as const
}

export function getVideosVideoIdCommentsCommentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCommentsCommentIdQueryKey>
  >({
    queryKey: getVideosVideoIdCommentsCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].comments[':comment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCommentsCommentIdQueryKey>
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
      ...getVideosVideoIdCommentsCommentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCommentsCommentIdQueryKey>
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
      ...getVideosVideoIdCommentsCommentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteVideosVideoIdCommentsCommentIdMutationKey() {
  return ['videos', '/videos/:video_id/comments/:comment_id', 'DELETE'] as const
}

export function getDeleteVideosVideoIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['comments'][':comment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.videos[':video_id'].comments[':comment_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVideosVideoIdCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['comments'][':comment_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVideosVideoIdCommentsCommentIdMutationOptions<
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

export function getPatchVideosVideoIdCommentsCommentIdMutationKey() {
  return ['videos', '/videos/:video_id/comments/:comment_id', 'PATCH'] as const
}

export function getPatchVideosVideoIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVideosVideoIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['comments'][':comment_id']['$patch']
      >,
    ) {
      return parseResponse(client.videos[':video_id'].comments[':comment_id'].$patch(args, options))
    },
  })
}

export function usePatchVideosVideoIdCommentsCommentId<
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
                ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVideosVideoIdCommentsCommentIdMutationOptions<
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

export function getVideosVideoIdCommentsCommentIdRepliesQueryKey(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
  >,
) {
  return ['videos', '/videos/:video_id/comments/:comment_id/replies', args] as const
}

export function getVideosVideoIdCommentsCommentIdRepliesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCommentsCommentIdRepliesQueryKey>
  >({
    queryKey: getVideosVideoIdCommentsCommentIdRepliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].comments[':comment_id'].replies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdCommentsCommentIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCommentsCommentIdRepliesQueryKey>
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
      ...getVideosVideoIdCommentsCommentIdRepliesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdCommentsCommentIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCommentsCommentIdRepliesQueryKey>
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
      ...getVideosVideoIdCommentsCommentIdRepliesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostVideosVideoIdCommentsCommentIdRepliesMutationKey() {
  return ['videos', '/videos/:video_id/comments/:comment_id/replies', 'POST'] as const
}

export function getPostVideosVideoIdCommentsCommentIdRepliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdCommentsCommentIdRepliesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$post']
      >,
    ) {
      return parseResponse(
        client.videos[':video_id'].comments[':comment_id'].replies.$post(args, options),
      )
    },
  })
}

export function usePostVideosVideoIdCommentsCommentIdReplies<
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
                  (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$post']
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
  const mutationDefaults = getPostVideosVideoIdCommentsCommentIdRepliesMutationOptions<
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

export function getVideosVideoIdCreditsQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>,
) {
  return ['videos', '/videos/:video_id/credits', args] as const
}

export function getVideosVideoIdCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCreditsQueryKey>
  >({
    queryKey: getVideosVideoIdCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVideosVideoIdCreditsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVideosVideoIdCreditsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVideosVideoIdCreditsMutationKey() {
  return ['videos', '/videos/:video_id/credits', 'POST'] as const
}

export function getPostVideosVideoIdCreditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['credits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdCreditsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['credits']['$post']>,
    ) {
      return parseResponse(client.videos[':video_id'].credits.$post(args, options))
    },
  })
}

export function usePostVideosVideoIdCredits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['credits']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosVideoIdCreditsMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdCreditsCreditIdQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>,
) {
  return ['videos', '/videos/:video_id/credits/:credit_id', args] as const
}

export function getVideosVideoIdCreditsCreditIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCreditsCreditIdQueryKey>
  >({
    queryKey: getVideosVideoIdCreditsCreditIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].credits[':credit_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdCreditsCreditId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCreditsCreditIdQueryKey>
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
      ...getVideosVideoIdCreditsCreditIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdCreditsCreditId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdCreditsCreditIdQueryKey>
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
      ...getVideosVideoIdCreditsCreditIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteVideosVideoIdCreditsCreditIdMutationKey() {
  return ['videos', '/videos/:video_id/credits/:credit_id', 'DELETE'] as const
}

export function getDeleteVideosVideoIdCreditsCreditIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdCreditsCreditIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['credits'][':credit_id']['$delete']
      >,
    ) {
      return parseResponse(client.videos[':video_id'].credits[':credit_id'].$delete(args, options))
    },
  })
}

export function useDeleteVideosVideoIdCreditsCreditId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['credits'][':credit_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVideosVideoIdCreditsCreditIdMutationOptions<
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

export function getPatchVideosVideoIdCreditsCreditIdMutationKey() {
  return ['videos', '/videos/:video_id/credits/:credit_id', 'PATCH'] as const
}

export function getPatchVideosVideoIdCreditsCreditIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVideosVideoIdCreditsCreditIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['credits'][':credit_id']['$patch']
      >,
    ) {
      return parseResponse(client.videos[':video_id'].credits[':credit_id'].$patch(args, options))
    },
  })
}

export function usePatchVideosVideoIdCreditsCreditId<
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
                ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVideosVideoIdCreditsCreditIdMutationOptions<
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

export function getVideosVideoIdLikesQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>,
) {
  return ['videos', '/videos/:video_id/likes', args] as const
}

export function getVideosVideoIdLikesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdLikesQueryKey>
  >({
    queryKey: getVideosVideoIdLikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].likes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVideosVideoIdLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVideosVideoIdLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVideosVideoIdPicturesQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>,
) {
  return ['videos', '/videos/:video_id/pictures', args] as const
}

export function getVideosVideoIdPicturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdPicturesQueryKey>
  >({
    queryKey: getVideosVideoIdPicturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].pictures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdPicturesQueryKey>
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
      ...getVideosVideoIdPicturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdPicturesQueryKey>
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
      ...getVideosVideoIdPicturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostVideosVideoIdPicturesMutationKey() {
  return ['videos', '/videos/:video_id/pictures', 'POST'] as const
}

export function getPostVideosVideoIdPicturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['pictures']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdPicturesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$post']>,
    ) {
      return parseResponse(client.videos[':video_id'].pictures.$post(args, options))
    },
  })
}

export function usePostVideosVideoIdPictures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['pictures']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosVideoIdPicturesMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdPicturesPictureIdQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>,
) {
  return ['videos', '/videos/:video_id/pictures/:picture_id', args] as const
}

export function getVideosVideoIdPicturesPictureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdPicturesPictureIdQueryKey>
  >({
    queryKey: getVideosVideoIdPicturesPictureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].pictures[':picture_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdPicturesPictureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdPicturesPictureIdQueryKey>
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
      ...getVideosVideoIdPicturesPictureIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdPicturesPictureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdPicturesPictureIdQueryKey>
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
      ...getVideosVideoIdPicturesPictureIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteVideosVideoIdPicturesPictureIdMutationKey() {
  return ['videos', '/videos/:video_id/pictures/:picture_id', 'DELETE'] as const
}

export function getDeleteVideosVideoIdPicturesPictureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdPicturesPictureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['pictures'][':picture_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.videos[':video_id'].pictures[':picture_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVideosVideoIdPicturesPictureId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['pictures'][':picture_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVideosVideoIdPicturesPictureIdMutationOptions<
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

export function getPatchVideosVideoIdPicturesPictureIdMutationKey() {
  return ['videos', '/videos/:video_id/pictures/:picture_id', 'PATCH'] as const
}

export function getPatchVideosVideoIdPicturesPictureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVideosVideoIdPicturesPictureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['pictures'][':picture_id']['$patch']
      >,
    ) {
      return parseResponse(client.videos[':video_id'].pictures[':picture_id'].$patch(args, options))
    },
  })
}

export function usePatchVideosVideoIdPicturesPictureId<
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
                ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVideosVideoIdPicturesPictureIdMutationOptions<
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

export function getVideosVideoIdPresetsPresetIdQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>,
) {
  return ['videos', '/videos/:video_id/presets/:preset_id', args] as const
}

export function getVideosVideoIdPresetsPresetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdPresetsPresetIdQueryKey>
  >({
    queryKey: getVideosVideoIdPresetsPresetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].presets[':preset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdPresetsPresetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdPresetsPresetIdQueryKey>
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
      ...getVideosVideoIdPresetsPresetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdPresetsPresetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdPresetsPresetIdQueryKey>
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
      ...getVideosVideoIdPresetsPresetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutVideosVideoIdPresetsPresetIdMutationKey() {
  return ['videos', '/videos/:video_id/presets/:preset_id', 'PUT'] as const
}

export function getPutVideosVideoIdPresetsPresetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVideosVideoIdPresetsPresetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$put']>,
    ) {
      return parseResponse(client.videos[':video_id'].presets[':preset_id'].$put(args, options))
    },
  })
}

export function usePutVideosVideoIdPresetsPresetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVideosVideoIdPresetsPresetIdMutationOptions<
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

export function getDeleteVideosVideoIdPresetsPresetIdMutationKey() {
  return ['videos', '/videos/:video_id/presets/:preset_id', 'DELETE'] as const
}

export function getDeleteVideosVideoIdPresetsPresetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdPresetsPresetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['presets'][':preset_id']['$delete']
      >,
    ) {
      return parseResponse(client.videos[':video_id'].presets[':preset_id'].$delete(args, options))
    },
  })
}

export function useDeleteVideosVideoIdPresetsPresetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['presets'][':preset_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVideosVideoIdPresetsPresetIdMutationOptions<
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

export function getVideosVideoIdPrivacyDomainsQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>,
) {
  return ['videos', '/videos/:video_id/privacy/domains', args] as const
}

export function getVideosVideoIdPrivacyDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdPrivacyDomainsQueryKey>
  >({
    queryKey: getVideosVideoIdPrivacyDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].privacy.domains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdPrivacyDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdPrivacyDomainsQueryKey>
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
      ...getVideosVideoIdPrivacyDomainsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdPrivacyDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdPrivacyDomainsQueryKey>
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
      ...getVideosVideoIdPrivacyDomainsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutVideosVideoIdPrivacyDomainsDomainMutationKey() {
  return ['videos', '/videos/:video_id/privacy/domains/:domain', 'PUT'] as const
}

export function getPutVideosVideoIdPrivacyDomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVideosVideoIdPrivacyDomainsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$put']
      >,
    ) {
      return parseResponse(
        client.videos[':video_id'].privacy.domains[':domain'].$put(args, options),
      )
    },
  })
}

export function usePutVideosVideoIdPrivacyDomainsDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$put']
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
  const mutationDefaults = getPutVideosVideoIdPrivacyDomainsDomainMutationOptions<
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

export function getDeleteVideosVideoIdPrivacyDomainsDomainMutationKey() {
  return ['videos', '/videos/:video_id/privacy/domains/:domain', 'DELETE'] as const
}

export function getDeleteVideosVideoIdPrivacyDomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdPrivacyDomainsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$delete']
      >,
    ) {
      return parseResponse(
        client.videos[':video_id'].privacy.domains[':domain'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVideosVideoIdPrivacyDomainsDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$delete']
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
  const mutationDefaults = getDeleteVideosVideoIdPrivacyDomainsDomainMutationOptions<
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

export function getVideosVideoIdPrivacyUsersQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>,
) {
  return ['videos', '/videos/:video_id/privacy/users', args] as const
}

export function getVideosVideoIdPrivacyUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdPrivacyUsersQueryKey>
  >({
    queryKey: getVideosVideoIdPrivacyUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].privacy.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdPrivacyUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdPrivacyUsersQueryKey>
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
      ...getVideosVideoIdPrivacyUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdPrivacyUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdPrivacyUsersQueryKey>
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
      ...getVideosVideoIdPrivacyUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutVideosVideoIdPrivacyUsersMutationKey() {
  return ['videos', '/videos/:video_id/privacy/users', 'PUT'] as const
}

export function getPutVideosVideoIdPrivacyUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVideosVideoIdPrivacyUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$put']>,
    ) {
      return parseResponse(client.videos[':video_id'].privacy.users.$put(args, options))
    },
  })
}

export function usePutVideosVideoIdPrivacyUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVideosVideoIdPrivacyUsersMutationOptions<TError, TOnMutateResult>(
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

export function getPutVideosVideoIdPrivacyUsersUserIdMutationKey() {
  return ['videos', '/videos/:video_id/privacy/users/:user_id', 'PUT'] as const
}

export function getPutVideosVideoIdPrivacyUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVideosVideoIdPrivacyUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$put']
      >,
    ) {
      return parseResponse(client.videos[':video_id'].privacy.users[':user_id'].$put(args, options))
    },
  })
}

export function usePutVideosVideoIdPrivacyUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$put']
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
  const mutationDefaults = getPutVideosVideoIdPrivacyUsersUserIdMutationOptions<
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

export function getDeleteVideosVideoIdPrivacyUsersUserIdMutationKey() {
  return ['videos', '/videos/:video_id/privacy/users/:user_id', 'DELETE'] as const
}

export function getDeleteVideosVideoIdPrivacyUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdPrivacyUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.videos[':video_id'].privacy.users[':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVideosVideoIdPrivacyUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$delete']
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
  const mutationDefaults = getDeleteVideosVideoIdPrivacyUsersUserIdMutationOptions<
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

export function getVideosVideoIdTagsQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>,
) {
  return ['videos', '/videos/:video_id/tags', args] as const
}

export function getVideosVideoIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdTagsQueryKey>
  >({
    queryKey: getVideosVideoIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVideosVideoIdTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVideosVideoIdTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutVideosVideoIdTagsMutationKey() {
  return ['videos', '/videos/:video_id/tags', 'PUT'] as const
}

export function getPutVideosVideoIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['tags']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVideosVideoIdTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.videos)[':video_id']['tags']['$put']>) {
      return parseResponse(client.videos[':video_id'].tags.$put(args, options))
    },
  })
}

export function usePutVideosVideoIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['tags']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVideosVideoIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdTagsWordQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>,
) {
  return ['videos', '/videos/:video_id/tags/:word', args] as const
}

export function getVideosVideoIdTagsWordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdTagsWordQueryKey>
  >({
    queryKey: getVideosVideoIdTagsWordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].tags[':word'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdTagsWord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdTagsWordQueryKey>
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
      ...getVideosVideoIdTagsWordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdTagsWord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdTagsWordQueryKey>
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
      ...getVideosVideoIdTagsWordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutVideosVideoIdTagsWordMutationKey() {
  return ['videos', '/videos/:video_id/tags/:word', 'PUT'] as const
}

export function getPutVideosVideoIdTagsWordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVideosVideoIdTagsWordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>,
    ) {
      return parseResponse(client.videos[':video_id'].tags[':word'].$put(args, options))
    },
  })
}

export function usePutVideosVideoIdTagsWord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVideosVideoIdTagsWordMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVideosVideoIdTagsWordMutationKey() {
  return ['videos', '/videos/:video_id/tags/:word', 'DELETE'] as const
}

export function getDeleteVideosVideoIdTagsWordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdTagsWordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>,
    ) {
      return parseResponse(client.videos[':video_id'].tags[':word'].$delete(args, options))
    },
  })
}

export function useDeleteVideosVideoIdTagsWord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVideosVideoIdTagsWordMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdTexttracksQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>,
) {
  return ['videos', '/videos/:video_id/texttracks', args] as const
}

export function getVideosVideoIdTexttracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdTexttracksQueryKey>
  >({
    queryKey: getVideosVideoIdTexttracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].texttracks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdTexttracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdTexttracksQueryKey>
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
      ...getVideosVideoIdTexttracksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdTexttracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdTexttracksQueryKey>
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
      ...getVideosVideoIdTexttracksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostVideosVideoIdTexttracksMutationKey() {
  return ['videos', '/videos/:video_id/texttracks', 'POST'] as const
}

export function getPostVideosVideoIdTexttracksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdTexttracksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$post']>,
    ) {
      return parseResponse(client.videos[':video_id'].texttracks.$post(args, options))
    },
  })
}

export function usePostVideosVideoIdTexttracks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosVideoIdTexttracksMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdTexttracksTexttrackIdQueryKey(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
  >,
) {
  return ['videos', '/videos/:video_id/texttracks/:texttrack_id', args] as const
}

export function getVideosVideoIdTexttracksTexttrackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdTexttracksTexttrackIdQueryKey>
  >({
    queryKey: getVideosVideoIdTexttracksTexttrackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].texttracks[':texttrack_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdTexttracksTexttrackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdTexttracksTexttrackIdQueryKey>
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
      ...getVideosVideoIdTexttracksTexttrackIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdTexttracksTexttrackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdTexttracksTexttrackIdQueryKey>
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
      ...getVideosVideoIdTexttracksTexttrackIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteVideosVideoIdTexttracksTexttrackIdMutationKey() {
  return ['videos', '/videos/:video_id/texttracks/:texttrack_id', 'DELETE'] as const
}

export function getDeleteVideosVideoIdTexttracksTexttrackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdTexttracksTexttrackIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.videos[':video_id'].texttracks[':texttrack_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVideosVideoIdTexttracksTexttrackId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$delete']
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
  const mutationDefaults = getDeleteVideosVideoIdTexttracksTexttrackIdMutationOptions<
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

export function getPatchVideosVideoIdTexttracksTexttrackIdMutationKey() {
  return ['videos', '/videos/:video_id/texttracks/:texttrack_id', 'PATCH'] as const
}

export function getPatchVideosVideoIdTexttracksTexttrackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVideosVideoIdTexttracksTexttrackIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.videos[':video_id'].texttracks[':texttrack_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchVideosVideoIdTexttracksTexttrackId<
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
                  (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$patch']
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
  const mutationDefaults = getPatchVideosVideoIdTexttracksTexttrackIdMutationOptions<
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

export function getPostVideosVideoIdTimelinethumbnailsMutationKey() {
  return ['videos', '/videos/:video_id/timelinethumbnails', 'POST'] as const
}

export function getPostVideosVideoIdTimelinethumbnailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['timelinethumbnails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['timelinethumbnails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdTimelinethumbnailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['timelinethumbnails']['$post']>,
    ) {
      return parseResponse(client.videos[':video_id'].timelinethumbnails.$post(args, options))
    },
  })
}

export function usePostVideosVideoIdTimelinethumbnails<
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
                ReturnType<(typeof client.videos)[':video_id']['timelinethumbnails']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['timelinethumbnails']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosVideoIdTimelinethumbnailsMutationOptions<
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

export function getVideosVideoIdTimelinethumbnailsThumbnailIdQueryKey(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
  >,
) {
  return ['videos', '/videos/:video_id/timelinethumbnails/:thumbnail_id', args] as const
}

export function getVideosVideoIdTimelinethumbnailsThumbnailIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdTimelinethumbnailsThumbnailIdQueryKey>
  >({
    queryKey: getVideosVideoIdTimelinethumbnailsThumbnailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].timelinethumbnails[':thumbnail_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdTimelinethumbnailsThumbnailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdTimelinethumbnailsThumbnailIdQueryKey>
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
      ...getVideosVideoIdTimelinethumbnailsThumbnailIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdTimelinethumbnailsThumbnailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdTimelinethumbnailsThumbnailIdQueryKey>
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
      ...getVideosVideoIdTimelinethumbnailsThumbnailIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostVideosVideoIdVersionsMutationKey() {
  return ['videos', '/videos/:video_id/versions', 'POST'] as const
}

export function getPostVideosVideoIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':video_id']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':video_id']['versions']['$post']>,
    ) {
      return parseResponse(client.videos[':video_id'].versions.$post(args, options))
    },
  })
}

export function usePostVideosVideoIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['versions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.videos)[':video_id']['versions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosVideoIdVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getVideosVideoIdVideosQueryKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>,
) {
  return ['videos', '/videos/:video_id/videos', args] as const
}

export function getVideosVideoIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdVideosQueryKey>
  >({
    queryKey: getVideosVideoIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':video_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideosVideoIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVideosVideoIdVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVideosVideoIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosVideoIdVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVideosVideoIdVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
