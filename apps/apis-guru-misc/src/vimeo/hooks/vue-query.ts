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

export function getUsersKey() {
  return ['users'] as const
}

export function getVideosKey() {
  return ['videos'] as const
}

export function getQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>) {
  return ['', '/', toValue(args)] as const
}

export function getQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
) {
  return ['categories', '/categories', toValue(args)] as const
}

export function getCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          ReturnType<typeof getCategoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesCategoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':category']['$get']>>,
) {
  return ['categories', '/categories/:category', toValue(args)] as const
}

export function getCategoriesCategoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':category']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':category']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesCategoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':category'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesCategoryChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['channels']['$get']>
  >,
) {
  return ['categories', '/categories/:category/channels', toValue(args)] as const
}

export function getCategoriesCategoryChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesCategoryChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':category'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['channels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesCategoryChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesCategoryChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':category'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesCategoryGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['groups']['$get']>
  >,
) {
  return ['categories', '/categories/:category/groups', toValue(args)] as const
}

export function getCategoriesCategoryGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesCategoryGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':category'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesCategoryGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesCategoryGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':category'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesCategoryVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['videos']['$get']>
  >,
) {
  return ['categories', '/categories/:category/videos', toValue(args)] as const
}

export function getCategoriesCategoryVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesCategoryVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':category'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['videos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesCategoryVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesCategoryVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':category'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesCategoryVideosVideoIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
  >,
) {
  return ['categories', '/categories/:category/videos/:video_id', toValue(args)] as const
}

export function getCategoriesCategoryVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesCategoryVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':category'].videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCategoriesCategoryVideosVideoIdQueryKey>
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
            ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesCategoryVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':category'].videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
) {
  return ['channels', '/channels', toValue(args)] as const
}

export function getChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          ReturnType<typeof getChannelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channels.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['$get']>>,
) {
  return ['channels', '/channels/:channel_id', toValue(args)] as const
}

export function getChannelsChannelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/categories', toValue(args)] as const
}

export function getChannelsChannelIdCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/moderators', toValue(args)] as const
}

export function getChannelsChannelIdModeratorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdModeratorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].moderators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdModeratorsQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdModeratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdModeratorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].moderators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/moderators/:user_id', toValue(args)] as const
}

export function getChannelsChannelIdModeratorsUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdModeratorsUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].moderators[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
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
                    (typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']
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
                    (typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdModeratorsUserIdQueryKey>
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
            ReturnType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdModeratorsUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdModeratorsUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].moderators[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.channels)[':channel_id']['moderators'][':user_id']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/privacy/users', toValue(args)] as const
}

export function getChannelsChannelIdPrivacyUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdPrivacyUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].privacy.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdPrivacyUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdPrivacyUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdPrivacyUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].privacy.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>>,
) {
  return ['channels', '/channels/:channel_id/tags', toValue(args)] as const
}

export function getChannelsChannelIdTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/tags/:word', toValue(args)] as const
}

export function getChannelsChannelIdTagsWordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdTagsWordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].tags[':word'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>
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
                  ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdTagsWordQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdTagsWordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdTagsWordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].tags[':word'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/users', toValue(args)] as const
}

export function getChannelsChannelIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelIdVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/videos', toValue(args)] as const
}

export function getChannelsChannelIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id', toValue(args)] as const
}

export function getChannelsChannelIdVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdVideosVideoIdQueryKey>
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
            ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':channel_id']['videos'][':video_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$put']>,
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
      Extract<
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
          InferRequestType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['$delete']
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
    >
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/comments', toValue(args)] as const
}

export function getChannelsChannelIdVideosVideoIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdVideosVideoIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdVideosVideoIdCommentsQueryKey>
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
              (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdVideosVideoIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].videos[':video_id'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
    >
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/credits', toValue(args)] as const
}

export function getChannelsChannelIdVideosVideoIdCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdVideosVideoIdCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdVideosVideoIdCreditsQueryKey>
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
              (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdVideosVideoIdCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].videos[':video_id'].credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
    >
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/likes', toValue(args)] as const
}

export function getChannelsChannelIdVideosVideoIdLikesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdVideosVideoIdLikesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].likes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdVideosVideoIdLikesQueryKey>
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
              (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdLikesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdVideosVideoIdLikesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].videos[':video_id'].likes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelIdVideosVideoIdPicturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
    >
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/pictures', toValue(args)] as const
}

export function getChannelsChannelIdVideosVideoIdPicturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdVideosVideoIdPicturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].pictures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdVideosVideoIdPicturesQueryKey>
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
              (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdPicturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdVideosVideoIdPicturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].videos[':video_id'].pictures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
    >
  >,
) {
  return [
    'channels',
    '/channels/:channel_id/videos/:video_id/privacy/users',
    toValue(args),
  ] as const
}

export function getChannelsChannelIdVideosVideoIdPrivacyUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdVideosVideoIdPrivacyUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].privacy.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdVideosVideoIdPrivacyUsersQueryKey>
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
              (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdPrivacyUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdVideosVideoIdPrivacyUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].videos[':video_id'].privacy.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
    >
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/texttracks', toValue(args)] as const
}

export function getChannelsChannelIdVideosVideoIdTexttracksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdVideosVideoIdTexttracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].videos[':video_id'].texttracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
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
                    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdVideosVideoIdTexttracksQueryKey>
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
              (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdVideosVideoIdTexttracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdVideosVideoIdTexttracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].videos[':video_id'].texttracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getContentratingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getContentratingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contentratings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContentratings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
          >,
          ReturnType<typeof getContentratingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentratingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getContentratingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.contentratings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCreativecommonsQueryKey() {
  return ['creativecommons', '/creativecommons'] as const
}

export function getCreativecommonsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCreativecommonsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.creativecommons.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCreativecommons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>
            >
          >,
          ReturnType<typeof getCreativecommonsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreativecommonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCreativecommonsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.creativecommons.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
) {
  return ['groups', '/groups', toValue(args)] as const
}

export function getGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['$get']>>,
) {
  return ['groups', '/groups/:group_id', toValue(args)] as const
}

export function getGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>>,
) {
  return ['groups', '/groups/:group_id/users', toValue(args)] as const
}

export function getGroupsGroupIdUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':group_id'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':group_id'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsGroupIdVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>>,
) {
  return ['groups', '/groups/:group_id/videos', toValue(args)] as const
}

export function getGroupsGroupIdVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':group_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':group_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsGroupIdVideosVideoIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>
  >,
) {
  return ['groups', '/groups/:group_id/videos/:video_id', toValue(args)] as const
}

export function getGroupsGroupIdVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':group_id'].videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdVideosVideoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':group_id'].videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.groups)[':group_id']['videos'][':video_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$delete']>,
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

export function getLanguagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.languages.$get>>,
) {
  return ['languages', '/languages', toValue(args)] as const
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

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$patch>>>>>,
          TError,
          InferRequestType<typeof client.me.$patch>,
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

export function getMeAlbumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.albums.$get>>,
) {
  return ['me', '/me/albums', toValue(args)] as const
}

export function getMeAlbumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.albums.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAlbumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.albums.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeAlbums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.albums.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
          >,
          ReturnType<typeof getMeAlbumsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAlbumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.albums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.me.albums.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.albums)[':album_id']['$get']>>,
) {
  return ['me', '/me/albums/:album_id', toValue(args)] as const
}

export function getMeAlbumsAlbumIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.albums)[':album_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAlbumsAlbumIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.albums[':album_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeAlbumsAlbumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.albums)[':album_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeAlbumsAlbumIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsAlbumIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAlbumsAlbumIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.albums[':album_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>
  >,
) {
  return ['me', '/me/albums/:album_id/videos', toValue(args)] as const
}

export function getMeAlbumsAlbumIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAlbumsAlbumIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.albums[':album_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeAlbumsAlbumIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsAlbumIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAlbumsAlbumIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.albums[':album_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>
  >,
) {
  return ['me', '/me/albums/:album_id/videos/:video_id', toValue(args)] as const
}

export function getMeAlbumsAlbumIdVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAlbumsAlbumIdVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.albums[':album_id'].videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMeAlbumsAlbumIdVideosVideoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsAlbumIdVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAlbumsAlbumIdVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.albums[':album_id'].videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.me.albums)[':album_id']['videos'][':video_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$put']>,
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
      Extract<
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
          InferRequestType<
            (typeof client.me.albums)[':album_id']['videos'][':video_id']['$delete']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.appearances.$get>>,
) {
  return ['me', '/me/appearances', toValue(args)] as const
}

export function getMeAppearancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.appearances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAppearancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.appearances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeAppearances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.appearances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
          >,
          ReturnType<typeof getMeAppearancesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeAppearancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAppearancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.appearances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.categories.$get>>,
) {
  return ['me', '/me/categories', toValue(args)] as const
}

export function getMeCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
          >,
          ReturnType<typeof getMeCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeCategoriesCategoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.categories)[':category']['$get']>>,
) {
  return ['me', '/me/categories/:category', toValue(args)] as const
}

export function getMeCategoriesCategoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.categories)[':category']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeCategoriesCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.categories[':category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.categories)[':category']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeCategoriesCategoryQueryKey>
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
          Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeCategoriesCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeCategoriesCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.categories[':category'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMeChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.channels.$get>>,
) {
  return ['me', '/me/channels', toValue(args)] as const
}

export function getMeChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.channels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
          >,
          ReturnType<typeof getMeChannelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeChannelsChannelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>>,
) {
  return ['me', '/me/channels/:channel_id', toValue(args)] as const
}

export function getMeChannelsChannelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeChannelsChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.channels[':channel_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeChannelsChannelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeChannelsChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeChannelsChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.channels[':channel_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMeCustomlogosQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeCustomlogosQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.customlogos.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeCustomlogos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
          >,
          ReturnType<typeof getMeCustomlogosQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeCustomlogosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeCustomlogosQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.customlogos.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$post>>>
            >
          >,
          TError,
          void,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>>,
) {
  return ['me', '/me/customlogos/:logo_id', toValue(args)] as const
}

export function getMeCustomlogosLogoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeCustomlogosLogoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.customlogos[':logo_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeCustomlogosLogoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeCustomlogosLogoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeCustomlogosLogoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeCustomlogosLogoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.customlogos[':logo_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFeedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.feed.$get>>,
) {
  return ['me', '/me/feed', toValue(args)] as const
}

export function getMeFeedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.feed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFeedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.feed.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeFeed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.feed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>
          >,
          ReturnType<typeof getMeFeedQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFeedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFeedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.feed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFollowersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followers.$get>>,
) {
  return ['me', '/me/followers', toValue(args)] as const
}

export function getMeFollowersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.followers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
          >,
          ReturnType<typeof getMeFollowersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFollowingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.following.$get>>,
) {
  return ['me', '/me/following', toValue(args)] as const
}

export function getMeFollowingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.following.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.following.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeFollowing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.following.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
          >,
          ReturnType<typeof getMeFollowingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.me.following.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>>,
) {
  return ['me', '/me/following/:follow_user_id', toValue(args)] as const
}

export function getMeFollowingFollowUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFollowingFollowUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.following[':follow_user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeFollowingFollowUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowingFollowUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFollowingFollowUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.following[':follow_user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMeGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.groups.$get>>,
) {
  return ['me', '/me/groups', toValue(args)] as const
}

export function getMeGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>
          >,
          ReturnType<typeof getMeGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.groups)[':group_id']['$get']>>,
) {
  return ['me', '/me/groups/:group_id', toValue(args)] as const
}

export function getMeGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.groups)[':group_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.groups)[':group_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeGroupsGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMeLikesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.likes.$get>>,
) {
  return ['me', '/me/likes', toValue(args)] as const
}

export function getMeLikesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.likes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeLikesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.likes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeLikes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.likes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>
          >,
          ReturnType<typeof getMeLikesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeLikesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeLikesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.likes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeLikesVideoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.likes)[':video_id']['$get']>>,
) {
  return ['me', '/me/likes/:video_id', toValue(args)] as const
}

export function getMeLikesVideoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.likes)[':video_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeLikesVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.likes[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeLikesVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.likes)[':video_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeLikesVideoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeLikesVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeLikesVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.likes[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.ondemand.pages.$get>>,
) {
  return ['me', '/me/ondemand/pages', toValue(args)] as const
}

export function getMeOndemandPagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.ondemand.pages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeOndemandPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.ondemand.pages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeOndemandPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.ondemand.pages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>
            >
          >,
          ReturnType<typeof getMeOndemandPagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeOndemandPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeOndemandPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.ondemand.pages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.ondemand.purchases.$get>>,
) {
  return ['me', '/me/ondemand/purchases', toValue(args)] as const
}

export function getMeOndemandPurchasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.ondemand.purchases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeOndemandPurchasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.ondemand.purchases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeOndemandPurchases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.ondemand.purchases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>
            >
          >,
          ReturnType<typeof getMeOndemandPurchasesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeOndemandPurchasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeOndemandPurchasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.ondemand.purchases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeOndemandPurchasesOndemandIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>
  >,
) {
  return ['me', '/me/ondemand/purchases/:ondemand_id', toValue(args)] as const
}

export function getMeOndemandPurchasesOndemandIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeOndemandPurchasesOndemandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.ondemand.purchases[':ondemand_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeOndemandPurchasesOndemandIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeOndemandPurchasesOndemandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeOndemandPurchasesOndemandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.ondemand.purchases[':ondemand_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePicturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.pictures.$get>>,
) {
  return ['me', '/me/pictures', toValue(args)] as const
}

export function getMePicturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.pictures.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePicturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.pictures.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMePictures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.pictures.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
          >,
          ReturnType<typeof getMePicturesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePicturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePicturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.pictures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$post>>>>
          >,
          TError,
          void,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>>,
) {
  return ['me', '/me/pictures/:portraitset_id', toValue(args)] as const
}

export function getMePicturesPortraitsetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePicturesPortraitsetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.pictures[':portraitset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMePicturesPortraitsetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePicturesPortraitsetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePicturesPortraitsetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.pictures[':portraitset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMePortfoliosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.portfolios.$get>>,
) {
  return ['me', '/me/portfolios', toValue(args)] as const
}

export function getMePortfoliosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.portfolios.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePortfoliosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.portfolios.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMePortfolios<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.portfolios.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
          >,
          ReturnType<typeof getMePortfoliosQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMePortfoliosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePortfoliosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.portfolios.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePortfoliosPortfolioIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>,
) {
  return ['me', '/me/portfolios/:portfolio_id', toValue(args)] as const
}

export function getMePortfoliosPortfolioIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePortfoliosPortfolioIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.portfolios[':portfolio_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMePortfoliosPortfolioIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePortfoliosPortfolioIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePortfoliosPortfolioIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.portfolios[':portfolio_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePortfoliosPortfolioIdVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>
  >,
) {
  return ['me', '/me/portfolios/:portfolio_id/videos', toValue(args)] as const
}

export function getMePortfoliosPortfolioIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePortfoliosPortfolioIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.portfolios[':portfolio_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>
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
                  ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMePortfoliosPortfolioIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePortfoliosPortfolioIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePortfoliosPortfolioIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.portfolios[':portfolio_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePortfoliosPortfolioIdVideosVideoIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']>
  >,
) {
  return ['me', '/me/portfolios/:portfolio_id/videos/:video_id', toValue(args)] as const
}

export function getMePortfoliosPortfolioIdVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePortfoliosPortfolioIdVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.portfolios[':portfolio_id'].videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']>
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
                    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
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
                    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMePortfoliosPortfolioIdVideosVideoIdQueryKey>
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
              (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePortfoliosPortfolioIdVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePortfoliosPortfolioIdVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.portfolios[':portfolio_id'].videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMePresetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.presets.$get>>,
) {
  return ['me', '/me/presets', toValue(args)] as const
}

export function getMePresetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.presets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePresetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.presets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMePresets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.presets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>
          >,
          ReturnType<typeof getMePresetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePresetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePresetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.presets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePresetsPresetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>>,
) {
  return ['me', '/me/presets/:preset_id', toValue(args)] as const
}

export function getMePresetsPresetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePresetsPresetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.presets[':preset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMePresetsPresetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMePresetsPresetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePresetsPresetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePresetsPresetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.presets[':preset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>
  >,
) {
  return ['me', '/me/presets/:preset_id/videos', toValue(args)] as const
}

export function getMePresetsPresetIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePresetsPresetIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.presets[':preset_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMePresetsPresetIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePresetsPresetIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePresetsPresetIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.presets[':preset_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.projects.$get>>,
) {
  return ['me', '/me/projects', toValue(args)] as const
}

export function getMeProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
          >,
          ReturnType<typeof getMeProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.me.projects.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.projects)[':project_id']['$get']>>,
) {
  return ['me', '/me/projects/:project_id', toValue(args)] as const
}

export function getMeProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.projects)[':project_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.projects[':project_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.projects)[':project_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeProjectsProjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.projects[':project_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>
  >,
) {
  return ['me', '/me/projects/:project_id/videos', toValue(args)] as const
}

export function getMeProjectsProjectIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeProjectsProjectIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.projects[':project_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeProjectsProjectIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeProjectsProjectIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeProjectsProjectIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.projects[':project_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.me.projects)[':project_id']['videos']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$delete']>,
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
      Extract<
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
          InferRequestType<
            (typeof client.me.projects)[':project_id']['videos'][':video_id']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMeVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.videos.$get>>,
) {
  return ['me', '/me/videos', toValue(args)] as const
}

export function getMeVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.videos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>
          >,
          ReturnType<typeof getMeVideosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.me.videos.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.videos)[':video_id']['$get']>>,
) {
  return ['me', '/me/videos/:video_id', toValue(args)] as const
}

export function getMeVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.videos)[':video_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.videos)[':video_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeVideosVideoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeWatchedVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.watched.videos.$get>>,
) {
  return ['me', '/me/watched/videos', toValue(args)] as const
}

export function getMeWatchedVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.watched.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeWatchedVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.watched.videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeWatchedVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.watched.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>
            >
          >,
          ReturnType<typeof getMeWatchedVideosQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeWatchedVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeWatchedVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.watched.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMeWatchlaterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.watchlater.$get>>,
) {
  return ['me', '/me/watchlater', toValue(args)] as const
}

export function getMeWatchlaterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.watchlater.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeWatchlaterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.watchlater.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeWatchlater<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.watchlater.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
          >,
          ReturnType<typeof getMeWatchlaterQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeWatchlaterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeWatchlaterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.watchlater.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeWatchlaterVideoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>>,
) {
  return ['me', '/me/watchlater/:video_id', toValue(args)] as const
}

export function getMeWatchlaterVideoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeWatchlaterVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.watchlater[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeWatchlaterVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeWatchlaterVideoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeWatchlaterVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeWatchlaterVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.watchlater[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getOauthVerifyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauthVerifyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.verify.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOauthVerify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>
          >,
          ReturnType<typeof getOauthVerifyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauthVerifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauthVerifyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.verify.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandGenresQueryKey() {
  return ['ondemand', '/ondemand/genres'] as const
}

export function getOndemandGenresQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOndemandGenresQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.genres.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOndemandGenres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>
            >
          >,
          ReturnType<typeof getOndemandGenresQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandGenresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOndemandGenresQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.genres.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandGenresGenreIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>>,
) {
  return ['ondemand', '/ondemand/genres/:genre_id', toValue(args)] as const
}

export function getOndemandGenresGenreIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandGenresGenreIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.genres[':genre_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOndemandGenresGenreIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandGenresGenreIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandGenresGenreIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.genres[':genre_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandGenresGenreIdPagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/genres/:genre_id/pages', toValue(args)] as const
}

export function getOndemandGenresGenreIdPagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandGenresGenreIdPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.genres[':genre_id'].pages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOndemandGenresGenreIdPagesQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandGenresGenreIdPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandGenresGenreIdPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.genres[':genre_id'].pages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandGenresGenreIdPagesOndemandIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/genres/:genre_id/pages/:ondemand_id', toValue(args)] as const
}

export function getOndemandGenresGenreIdPagesOndemandIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandGenresGenreIdPagesOndemandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.genres[':genre_id'].pages[':ondemand_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']>
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
                    (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
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
                    (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOndemandGenresGenreIdPagesOndemandIdQueryKey>
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
              (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandGenresGenreIdPagesOndemandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandGenresGenreIdPagesOndemandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.genres[':genre_id'].pages[':ondemand_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id', toValue(args)] as const
}

export function getOndemandPagesOndemandIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds', toValue(args)] as const
}

export function getOndemandPagesOndemandIdBackgroundsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdBackgroundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].backgrounds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdBackgroundsQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdBackgroundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdBackgroundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].backgrounds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
    >
  >,
) {
  return [
    'ondemand',
    '/ondemand/pages/:ondemand_id/backgrounds/:background_id',
    toValue(args),
  ] as const
}

export function getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryKey>
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
              (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdBackgroundsBackgroundIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/genres', toValue(args)] as const
}

export function getOndemandPagesOndemandIdGenresQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdGenresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].genres.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>
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
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdGenresQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdGenresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdGenresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].genres.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdGenresGenreIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/genres/:genre_id', toValue(args)] as const
}

export function getOndemandPagesOndemandIdGenresGenreIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdGenresGenreIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']>
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
                    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdGenresGenreIdQueryKey>
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
              (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdGenresGenreIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdGenresGenreIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/likes', toValue(args)] as const
}

export function getOndemandPagesOndemandIdLikesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdLikesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].likes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdLikesQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdLikesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdLikesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].likes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdPicturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/pictures', toValue(args)] as const
}

export function getOndemandPagesOndemandIdPicturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdPicturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].pictures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdPicturesQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdPicturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdPicturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].pictures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
    >
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/pictures/:poster_id', toValue(args)] as const
}

export function getOndemandPagesOndemandIdPicturesPosterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdPicturesPosterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].pictures[':poster_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdPicturesPosterIdQueryKey>
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
              (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdPicturesPosterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdPicturesPosterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].pictures[':poster_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions', toValue(args)] as const
}

export function getOndemandPagesOndemandIdPromotionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdPromotionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].promotions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdPromotionsQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdPromotionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdPromotionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].promotions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
    >
  >,
) {
  return [
    'ondemand',
    '/ondemand/pages/:ondemand_id/promotions/:promotion_id',
    toValue(args),
  ] as const
}

export function getOndemandPagesOndemandIdPromotionsPromotionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdPromotionsPromotionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdPromotionsPromotionIdQueryKey>
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
              (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdPromotionsPromotionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdPromotionsPromotionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
    >
  >,
) {
  return [
    'ondemand',
    '/ondemand/pages/:ondemand_id/promotions/:promotion_id/codes',
    toValue(args),
  ] as const
}

export function getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].codes.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryKey>
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
              (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdPromotionsPromotionIdCodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].codes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdRegionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions', toValue(args)] as const
}

export function getOndemandPagesOndemandIdRegionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].regions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>
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
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdRegionsQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].regions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions/:country', toValue(args)] as const
}

export function getOndemandPagesOndemandIdRegionsCountryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdRegionsCountryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].regions[':country'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']>
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
                    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdRegionsCountryQueryKey>
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
              (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdRegionsCountryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdRegionsCountryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].regions[':country'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/seasons', toValue(args)] as const
}

export function getOndemandPagesOndemandIdSeasonsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdSeasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].seasons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>
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
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdSeasonsQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdSeasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdSeasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].seasons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdSeasonsSeasonIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
    >
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/seasons/:season_id', toValue(args)] as const
}

export function getOndemandPagesOndemandIdSeasonsSeasonIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdSeasonsSeasonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].seasons[':season_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdSeasonsSeasonIdQueryKey>
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
              (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdSeasonsSeasonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdSeasonsSeasonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].seasons[':season_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
    >
  >,
) {
  return [
    'ondemand',
    '/ondemand/pages/:ondemand_id/seasons/:season_id/videos',
    toValue(args),
  ] as const
}

export function getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].seasons[':season_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryKey>
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
              (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdSeasonsSeasonIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].seasons[':season_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/videos', toValue(args)] as const
}

export function getOndemandPagesOndemandIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>
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
                  ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandPagesOndemandIdVideosVideoIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']>
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/videos/:video_id', toValue(args)] as const
}

export function getOndemandPagesOndemandIdVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandPagesOndemandIdVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.pages[':ondemand_id'].videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']>
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
                    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
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
                    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOndemandPagesOndemandIdVideosVideoIdQueryKey>
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
              (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandPagesOndemandIdVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandPagesOndemandIdVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.pages[':ondemand_id'].videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getOndemandRegionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOndemandRegionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOndemandRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>
            >
          >,
          ReturnType<typeof getOndemandRegionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOndemandRegionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.regions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOndemandRegionsCountryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>>,
) {
  return ['ondemand', '/ondemand/regions/:country', toValue(args)] as const
}

export function getOndemandRegionsCountryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOndemandRegionsCountryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ondemand.regions[':country'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOndemandRegionsCountryQueryKey>
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
          Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOndemandRegionsCountryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOndemandRegionsCountryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ondemand.regions[':country'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsWordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':word']['$get']>>,
) {
  return ['tags', '/tags/:word', toValue(args)] as const
}

export function getTagsWordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':word']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsWordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':word'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsWord<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':word']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsWordQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsWordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsWordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':word'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsWordVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':word']['videos']['$get']>>,
) {
  return ['tags', '/tags/:word/videos', toValue(args)] as const
}

export function getTagsWordVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':word']['videos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsWordVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':word'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsWordVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':word']['videos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsWordVideosQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsWordVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsWordVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':word'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$delete>>>>
            >
          | undefined,
          TError,
          void,
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
) {
  return ['users', '/users/:user_id', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>>,
) {
  return ['users', '/users/:user_id/albums', toValue(args)] as const
}

export function getUsersUserIdAlbumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAlbumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].albums.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAlbumsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAlbumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].albums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id', toValue(args)] as const
}

export function getUsersUserIdAlbumsAlbumIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAlbumsAlbumIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>
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
                  ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAlbumsAlbumIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAlbumsAlbumIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].albums[':album_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
    >
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/custom_thumbnails', toValue(args)] as const
}

export function getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].custom_thumbnails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryKey>
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
              (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAlbumsAlbumIdCustomThumbnailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].albums[':album_id'].custom_thumbnails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:user_id/albums/:album_id/custom_thumbnails/:thumbnail_id',
    toValue(args),
  ] as const
}

export function getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryKey>
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
              (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/logos', toValue(args)] as const
}

export function getUsersUserIdAlbumsAlbumIdLogosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAlbumsAlbumIdLogosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].logos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAlbumsAlbumIdLogosQueryKey>
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
            ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdLogosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAlbumsAlbumIdLogosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].albums[':album_id'].logos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
    >
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/logos/:logo_id', toValue(args)] as const
}

export function getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryKey>
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
              (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAlbumsAlbumIdLogosLogoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/videos', toValue(args)] as const
}

export function getUsersUserIdAlbumsAlbumIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAlbumsAlbumIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAlbumsAlbumIdVideosQueryKey>
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
            ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAlbumsAlbumIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].albums[':album_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
    >
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/videos/:video_id', toValue(args)] as const
}

export function getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].albums[':album_id'].videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
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
                    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryKey>
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
              (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAlbumsAlbumIdVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].albums[':album_id'].videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>
  >,
) {
  return ['users', '/users/:user_id/appearances', toValue(args)] as const
}

export function getUsersUserIdAppearancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAppearancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].appearances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAppearancesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAppearancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAppearancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].appearances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>>,
) {
  return ['users', '/users/:user_id/categories', toValue(args)] as const
}

export function getUsersUserIdCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdCategoriesCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>
  >,
) {
  return ['users', '/users/:user_id/categories/:category', toValue(args)] as const
}

export function getUsersUserIdCategoriesCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdCategoriesCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].categories[':category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdCategoriesCategoryQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCategoriesCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdCategoriesCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].categories[':category'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>>,
) {
  return ['users', '/users/:user_id/channels', toValue(args)] as const
}

export function getUsersUserIdChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdChannelsChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/channels/:channel_id', toValue(args)] as const
}

export function getUsersUserIdChannelsChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdChannelsChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].channels[':channel_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdChannelsChannelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdChannelsChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdChannelsChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].channels[':channel_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>
  >,
) {
  return ['users', '/users/:user_id/customlogos', toValue(args)] as const
}

export function getUsersUserIdCustomlogosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdCustomlogosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].customlogos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdCustomlogosQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCustomlogosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdCustomlogosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].customlogos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/customlogos/:logo_id', toValue(args)] as const
}

export function getUsersUserIdCustomlogosLogoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdCustomlogosLogoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].customlogos[':logo_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdCustomlogosLogoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCustomlogosLogoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdCustomlogosLogoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].customlogos[':logo_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdFeedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>>,
) {
  return ['users', '/users/:user_id/feed', toValue(args)] as const
}

export function getUsersUserIdFeedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdFeedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].feed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdFeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdFeedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFeedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdFeedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].feed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdFollowersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>>,
) {
  return ['users', '/users/:user_id/followers', toValue(args)] as const
}

export function getUsersUserIdFollowersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdFollowersQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdFollowingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['following']['$get']>>,
) {
  return ['users', '/users/:user_id/following', toValue(args)] as const
}

export function getUsersUserIdFollowingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['following']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['following']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdFollowingQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/following/:follow_user_id', toValue(args)] as const
}

export function getUsersUserIdFollowingFollowUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdFollowingFollowUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].following[':follow_user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
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
                    (typeof client.users)[':user_id']['following'][':follow_user_id']['$get']
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
                    (typeof client.users)[':user_id']['following'][':follow_user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdFollowingFollowUserIdQueryKey>
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
            ReturnType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFollowingFollowUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdFollowingFollowUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].following[':follow_user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.users)[':user_id']['following'][':follow_user_id']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>>,
) {
  return ['users', '/users/:user_id/groups', toValue(args)] as const
}

export function getUsersUserIdGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/groups/:group_id', toValue(args)] as const
}

export function getUsersUserIdGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>
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
                  ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdGroupsGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>>,
) {
  return ['users', '/users/:user_id/likes', toValue(args)] as const
}

export function getUsersUserIdLikesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdLikesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].likes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdLikesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdLikesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdLikesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].likes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdLikesVideoIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/likes/:video_id', toValue(args)] as const
}

export function getUsersUserIdLikesVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdLikesVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].likes[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdLikesVideoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdLikesVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdLikesVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].likes[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>
  >,
) {
  return ['users', '/users/:user_id/ondemand/pages', toValue(args)] as const
}

export function getUsersUserIdOndemandPagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdOndemandPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].ondemand.pages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdOndemandPagesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdOndemandPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdOndemandPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].ondemand.pages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>
  >,
) {
  return ['users', '/users/:user_id/ondemand/purchases', toValue(args)] as const
}

export function getUsersUserIdOndemandPurchasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdOndemandPurchasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].ondemand.purchases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdOndemandPurchasesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdOndemandPurchasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdOndemandPurchasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].ondemand.purchases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdPicturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>>,
) {
  return ['users', '/users/:user_id/pictures', toValue(args)] as const
}

export function getUsersUserIdPicturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPicturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].pictures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPicturesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPicturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPicturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].pictures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/pictures/:portraitset_id', toValue(args)] as const
}

export function getUsersUserIdPicturesPortraitsetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPicturesPortraitsetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].pictures[':portraitset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
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
                    (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']
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
                    (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPicturesPortraitsetIdQueryKey>
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
            ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPicturesPortraitsetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPicturesPortraitsetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].pictures[':portraitset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>>,
) {
  return ['users', '/users/:user_id/portfolios', toValue(args)] as const
}

export function getUsersUserIdPortfoliosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPortfoliosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].portfolios.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPortfoliosQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPortfoliosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPortfoliosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].portfolios.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdPortfoliosPortfolioIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/portfolios/:portfolio_id', toValue(args)] as const
}

export function getUsersUserIdPortfoliosPortfolioIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPortfoliosPortfolioIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].portfolios[':portfolio_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
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
                    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']
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
                    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdQueryKey>
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
            ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPortfoliosPortfolioIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].portfolios[':portfolio_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdPortfoliosPortfolioIdVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
    >
  >,
) {
  return ['users', '/users/:user_id/portfolios/:portfolio_id/videos', toValue(args)] as const
}

export function getUsersUserIdPortfoliosPortfolioIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPortfoliosPortfolioIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].portfolios[':portfolio_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
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
                    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
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
                    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdVideosQueryKey>
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
              (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPortfoliosPortfolioIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].portfolios[':portfolio_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:user_id/portfolios/:portfolio_id/videos/:video_id',
    toValue(args),
  ] as const
}

export function getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
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
                    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
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
                    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryKey>
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
              (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPortfoliosPortfolioIdVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>>,
) {
  return ['users', '/users/:user_id/presets', toValue(args)] as const
}

export function getUsersUserIdPresetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPresetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].presets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPresetsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPresetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPresetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].presets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdPresetsPresetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/presets/:preset_id', toValue(args)] as const
}

export function getUsersUserIdPresetsPresetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPresetsPresetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].presets[':preset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPresetsPresetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPresetsPresetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPresetsPresetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].presets[':preset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']>
  >,
) {
  return ['users', '/users/:user_id/presets/:preset_id/videos', toValue(args)] as const
}

export function getUsersUserIdPresetsPresetIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPresetsPresetIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].presets[':preset_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']>
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
                    (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
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
                    (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPresetsPresetIdVideosQueryKey>
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
            ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPresetsPresetIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPresetsPresetIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].presets[':preset_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>>,
) {
  return ['users', '/users/:user_id/projects', toValue(args)] as const
}

export function getUsersUserIdProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdProjectsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/projects/:project_id', toValue(args)] as const
}

export function getUsersUserIdProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].projects[':project_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdProjectsProjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].projects[':project_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']>
  >,
) {
  return ['users', '/users/:user_id/projects/:project_id/videos', toValue(args)] as const
}

export function getUsersUserIdProjectsProjectIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdProjectsProjectIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].projects[':project_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']>
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
                    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
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
                    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdProjectsProjectIdVideosQueryKey>
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
              (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdProjectsProjectIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdProjectsProjectIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].projects[':project_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUsersUserIdUploadsUploadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>
  >,
) {
  return ['users', '/users/:user_id/uploads/:upload', toValue(args)] as const
}

export function getUsersUserIdUploadsUploadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdUploadsUploadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].uploads[':upload'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdUploadsUpload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdUploadsUploadQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdUploadsUploadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdUploadsUploadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].uploads[':upload'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdUploadsUploadMutationKey() {
  return ['users', '/users/:user_id/uploads/:upload', 'DELETE'] as const
}

export function getDeleteUsersUserIdUploadsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdUploadsUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$delete']>,
    ) {
      return parseResponse(client.users[':user_id'].uploads[':upload'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdUploadsUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdUploadsUploadMutationOptions<
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>>,
) {
  return ['users', '/users/:user_id/videos', toValue(args)] as const
}

export function getUsersUserIdVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/videos/:video_id', toValue(args)] as const
}

export function getUsersUserIdVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>
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
                  ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdVideosVideoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdWatchlaterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>>,
) {
  return ['users', '/users/:user_id/watchlater', toValue(args)] as const
}

export function getUsersUserIdWatchlaterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdWatchlaterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].watchlater.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdWatchlaterQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdWatchlaterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdWatchlaterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].watchlater.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdWatchlaterVideoIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/watchlater/:video_id', toValue(args)] as const
}

export function getUsersUserIdWatchlaterVideoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdWatchlaterVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].watchlater[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdWatchlaterVideoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdWatchlaterVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdWatchlaterVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].watchlater[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
) {
  return ['videos', '/videos', toValue(args)] as const
}

export function getVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVideos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
          ReturnType<typeof getVideosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosVideoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['$get']>>,
) {
  return ['videos', '/videos/:video_id', toValue(args)] as const
}

export function getVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
            >
          >,
          ReturnType<typeof getVideosVideoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.videos)[':video_id']['$patch']>,
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

export function getVideosVideoIdAvailableChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/available_channels', toValue(args)] as const
}

export function getVideosVideoIdAvailableChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdAvailableChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].available_channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>
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
                  ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdAvailableChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdAvailableChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdAvailableChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].available_channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosVideoIdCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/categories', toValue(args)] as const
}

export function getVideosVideoIdCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>>,
) {
  return ['videos', '/videos/:video_id/comments', toValue(args)] as const
}

export function getVideosVideoIdCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/comments/:comment_id', toValue(args)] as const
}

export function getVideosVideoIdCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdCommentsCommentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].comments[':comment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdCommentsCommentIdQueryKey>
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
            ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCommentsCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdCommentsCommentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].comments[':comment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.videos)[':video_id']['comments'][':comment_id']['$delete']
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['comments'][':comment_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.videos)[':video_id']['comments'][':comment_id']['$patch']
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
    >
  >,
) {
  return ['videos', '/videos/:video_id/comments/:comment_id/replies', toValue(args)] as const
}

export function getVideosVideoIdCommentsCommentIdRepliesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdCommentsCommentIdRepliesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].comments[':comment_id'].replies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
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
                    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
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
                    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdCommentsCommentIdRepliesQueryKey>
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
              (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCommentsCommentIdRepliesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdCommentsCommentIdRepliesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].comments[':comment_id'].replies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>>,
) {
  return ['videos', '/videos/:video_id/credits', toValue(args)] as const
}

export function getVideosVideoIdCreditsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdCreditsQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/credits/:credit_id', toValue(args)] as const
}

export function getVideosVideoIdCreditsCreditIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdCreditsCreditIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].credits[':credit_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdCreditsCreditIdQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCreditsCreditIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdCreditsCreditIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].credits[':credit_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>>,
) {
  return ['videos', '/videos/:video_id/likes', toValue(args)] as const
}

export function getVideosVideoIdLikesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdLikesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].likes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdLikesQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdLikesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdLikesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].likes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosVideoIdPicturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>>,
) {
  return ['videos', '/videos/:video_id/pictures', toValue(args)] as const
}

export function getVideosVideoIdPicturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdPicturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].pictures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdPicturesQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdPicturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdPicturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].pictures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/pictures/:picture_id', toValue(args)] as const
}

export function getVideosVideoIdPicturesPictureIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdPicturesPictureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].pictures[':picture_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdPicturesPictureIdQueryKey>
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
            ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdPicturesPictureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdPicturesPictureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].pictures[':picture_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.videos)[':video_id']['pictures'][':picture_id']['$delete']
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.videos)[':video_id']['pictures'][':picture_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.videos)[':video_id']['pictures'][':picture_id']['$patch']
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/presets/:preset_id', toValue(args)] as const
}

export function getVideosVideoIdPresetsPresetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdPresetsPresetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].presets[':preset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdPresetsPresetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdPresetsPresetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdPresetsPresetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].presets[':preset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/privacy/domains', toValue(args)] as const
}

export function getVideosVideoIdPrivacyDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdPrivacyDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].privacy.domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>
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
                  ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdPrivacyDomainsQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdPrivacyDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdPrivacyDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].privacy.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/privacy/users', toValue(args)] as const
}

export function getVideosVideoIdPrivacyUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdPrivacyUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].privacy.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdPrivacyUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdPrivacyUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdPrivacyUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].privacy.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>>,
) {
  return ['videos', '/videos/:video_id/tags', toValue(args)] as const
}

export function getVideosVideoIdTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/tags/:word', toValue(args)] as const
}

export function getVideosVideoIdTagsWordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdTagsWordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].tags[':word'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdTagsWordQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdTagsWordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdTagsWordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].tags[':word'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>>
          >
        >
      >
    | undefined,
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>,
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/texttracks', toValue(args)] as const
}

export function getVideosVideoIdTexttracksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdTexttracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].texttracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdTexttracksQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdTexttracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdTexttracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].texttracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
  >,
) {
  return ['videos', '/videos/:video_id/texttracks/:texttrack_id', toValue(args)] as const
}

export function getVideosVideoIdTexttracksTexttrackIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdTexttracksTexttrackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].texttracks[':texttrack_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
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
                    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
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
                    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdTexttracksTexttrackIdQueryKey>
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
            ReturnType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdTexttracksTexttrackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdTexttracksTexttrackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].texttracks[':texttrack_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
    >
  >,
) {
  return ['videos', '/videos/:video_id/timelinethumbnails/:thumbnail_id', toValue(args)] as const
}

export function getVideosVideoIdTimelinethumbnailsThumbnailIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdTimelinethumbnailsThumbnailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].timelinethumbnails[':thumbnail_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
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
                    (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
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
                    (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdTimelinethumbnailsThumbnailIdQueryKey>
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
              (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdTimelinethumbnailsThumbnailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdTimelinethumbnailsThumbnailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].timelinethumbnails[':thumbnail_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>>,
) {
  return ['videos', '/videos/:video_id/videos', toValue(args)] as const
}

export function getVideosVideoIdVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':video_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':video_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
