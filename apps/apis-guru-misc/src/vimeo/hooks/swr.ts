import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function useGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCategoriesKey(args: InferRequestType<typeof client.categories.$get>) {
  return ['categories', '/categories', args] as const
}

export function useGetCategories<TError = unknown>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategories<TError = unknown>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesCategoryKey(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
) {
  return ['categories', '/categories/:category', args] as const
}

export function useGetCategoriesCategory<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
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
        ? getGetCategoriesCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesCategory<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
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
        ? getGetCategoriesCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesCategoryChannelsKey(
  args: InferRequestType<(typeof client.categories)[':category']['channels']['$get']>,
) {
  return ['categories', '/categories/:category/channels', args] as const
}

export function useGetCategoriesCategoryChannels<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
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
        ? getGetCategoriesCategoryChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesCategoryChannels<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
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
        ? getGetCategoriesCategoryChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesCategoryGroupsKey(
  args: InferRequestType<(typeof client.categories)[':category']['groups']['$get']>,
) {
  return ['categories', '/categories/:category/groups', args] as const
}

export function useGetCategoriesCategoryGroups<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
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
        ? getGetCategoriesCategoryGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesCategoryGroups<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
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
        ? getGetCategoriesCategoryGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesCategoryVideosKey(
  args: InferRequestType<(typeof client.categories)[':category']['videos']['$get']>,
) {
  return ['categories', '/categories/:category/videos', args] as const
}

export function useGetCategoriesCategoryVideos<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
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
        ? getGetCategoriesCategoryVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesCategoryVideos<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
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
        ? getGetCategoriesCategoryVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesCategoryVideosVideoIdKey(
  args: InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>,
) {
  return ['categories', '/categories/:category/videos/:video_id', args] as const
}

export function useGetCategoriesCategoryVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
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
        ? getGetCategoriesCategoryVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.categories[':category'].videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesCategoryVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
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
        ? getGetCategoriesCategoryVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.categories[':category'].videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsKey(args: InferRequestType<typeof client.channels.$get>) {
  return ['channels', '/channels', args] as const
}

export function useGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostChannelsKey() {
  return ['channels', '/channels', 'POST'] as const
}

export function usePostChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.channels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.$post> }) =>
        parseResponse(client.channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
) {
  return ['channels', '/channels/:channel_id', args] as const
}

export function useGetChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
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
        ? getGetChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
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
        ? getGetChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdKey() {
  return ['channels', '/channels/:channel_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['$delete']> },
      ) => parseResponse(client.channels[':channel_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchChannelsChannelIdKey() {
  return ['channels', '/channels/:channel_id', 'PATCH'] as const
}

export function usePatchChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['$patch']> },
      ) => parseResponse(client.channels[':channel_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdCategoriesKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>,
) {
  return ['channels', '/channels/:channel_id/categories', args] as const
}

export function useGetChannelsChannelIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
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
        ? getGetChannelsChannelIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
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
        ? getGetChannelsChannelIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdCategoriesKey() {
  return ['channels', '/channels/:channel_id/categories', 'PUT'] as const
}

export function usePutChannelsChannelIdCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['categories']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['categories']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$put']> },
      ) => parseResponse(client.channels[':channel_id'].categories.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutChannelsChannelIdCategoriesCategoryKey() {
  return ['channels', '/channels/:channel_id/categories/:category', 'PUT'] as const
}

export function usePutChannelsChannelIdCategoriesCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['categories'][':category']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdCategoriesCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['categories'][':category']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].categories[':category'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdCategoriesCategoryKey() {
  return ['channels', '/channels/:channel_id/categories/:category', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdCategoriesCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['categories'][':category']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdCategoriesCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['categories'][':category']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].categories[':category'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdModeratorsKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>,
) {
  return ['channels', '/channels/:channel_id/moderators', args] as const
}

export function useGetChannelsChannelIdModerators<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
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
        ? getGetChannelsChannelIdModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdModerators<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
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
        ? getGetChannelsChannelIdModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdModeratorsKey() {
  return ['channels', '/channels/:channel_id/moderators', 'PUT'] as const
}

export function usePutChannelsChannelIdModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$put']> },
      ) => parseResponse(client.channels[':channel_id'].moderators.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdModeratorsKey() {
  return ['channels', '/channels/:channel_id/moderators', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$delete']>
        },
      ) => parseResponse(client.channels[':channel_id'].moderators.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchChannelsChannelIdModeratorsKey() {
  return ['channels', '/channels/:channel_id/moderators', 'PATCH'] as const
}

export function usePatchChannelsChannelIdModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['moderators']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChannelsChannelIdModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$patch']>
        },
      ) => parseResponse(client.channels[':channel_id'].moderators.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdModeratorsUserIdKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>,
) {
  return ['channels', '/channels/:channel_id/moderators/:user_id', args] as const
}

export function useGetChannelsChannelIdModeratorsUserId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
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
        ? getGetChannelsChannelIdModeratorsUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[':channel_id'].moderators[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdModeratorsUserId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
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
        ? getGetChannelsChannelIdModeratorsUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[':channel_id'].moderators[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdModeratorsUserIdKey() {
  return ['channels', '/channels/:channel_id/moderators/:user_id', 'PUT'] as const
}

export function usePutChannelsChannelIdModeratorsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdModeratorsUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['moderators'][':user_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].moderators[':user_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdModeratorsUserIdKey() {
  return ['channels', '/channels/:channel_id/moderators/:user_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdModeratorsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdModeratorsUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['moderators'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].moderators[':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdPrivacyUsersKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>,
) {
  return ['channels', '/channels/:channel_id/privacy/users', args] as const
}

export function useGetChannelsChannelIdPrivacyUsers<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>>
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
        ? getGetChannelsChannelIdPrivacyUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].privacy.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdPrivacyUsers<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>>
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
        ? getGetChannelsChannelIdPrivacyUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].privacy.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdPrivacyUsersKey() {
  return ['channels', '/channels/:channel_id/privacy/users', 'PUT'] as const
}

export function usePutChannelsChannelIdPrivacyUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['privacy']['users']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdPrivacyUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$put']>
        },
      ) => parseResponse(client.channels[':channel_id'].privacy.users.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutChannelsChannelIdPrivacyUsersUserIdKey() {
  return ['channels', '/channels/:channel_id/privacy/users/:user_id', 'PUT'] as const
}

export function usePutChannelsChannelIdPrivacyUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdPrivacyUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].privacy.users[':user_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdPrivacyUsersUserIdKey() {
  return ['channels', '/channels/:channel_id/privacy/users/:user_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdPrivacyUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdPrivacyUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].privacy.users[':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdTagsKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>,
) {
  return ['channels', '/channels/:channel_id/tags', args] as const
}

export function useGetChannelsChannelIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
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
        ? getGetChannelsChannelIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
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
        ? getGetChannelsChannelIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdTagsKey() {
  return ['channels', '/channels/:channel_id/tags', 'PUT'] as const
}

export function usePutChannelsChannelIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['tags']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$put']> },
      ) => parseResponse(client.channels[':channel_id'].tags.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdTagsWordKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>,
) {
  return ['channels', '/channels/:channel_id/tags/:word', args] as const
}

export function useGetChannelsChannelIdTagsWord<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
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
        ? getGetChannelsChannelIdTagsWordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].tags[':word'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdTagsWord<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
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
        ? getGetChannelsChannelIdTagsWordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].tags[':word'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdTagsWordKey() {
  return ['channels', '/channels/:channel_id/tags/:word', 'PUT'] as const
}

export function usePutChannelsChannelIdTagsWord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdTagsWordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$put']>
        },
      ) => parseResponse(client.channels[':channel_id'].tags[':word'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdTagsWordKey() {
  return ['channels', '/channels/:channel_id/tags/:word', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdTagsWord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['tags'][':word']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdTagsWordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$delete']>
        },
      ) => parseResponse(client.channels[':channel_id'].tags[':word'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdUsersKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>,
) {
  return ['channels', '/channels/:channel_id/users', args] as const
}

export function useGetChannelsChannelIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
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
        ? getGetChannelsChannelIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
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
        ? getGetChannelsChannelIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelIdVideosKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>,
) {
  return ['channels', '/channels/:channel_id/videos', args] as const
}

export function useGetChannelsChannelIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
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
        ? getGetChannelsChannelIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
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
        ? getGetChannelsChannelIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdVideosKey() {
  return ['channels', '/channels/:channel_id/videos', 'PUT'] as const
}

export function usePutChannelsChannelIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['videos']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$put']> },
      ) => parseResponse(client.channels[':channel_id'].videos.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdVideosKey() {
  return ['channels', '/channels/:channel_id/videos', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['videos']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['videos']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$delete']> },
      ) => parseResponse(client.channels[':channel_id'].videos.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdVideosVideoIdKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id', args] as const
}

export function useGetChannelsChannelIdVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
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
        ? getGetChannelsChannelIdVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
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
        ? getGetChannelsChannelIdVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdVideosVideoIdKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id', 'PUT'] as const
}

export function usePutChannelsChannelIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['$put']
          >
        },
      ) =>
        parseResponse(client.channels[':channel_id'].videos[':video_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdVideosVideoIdKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].videos[':video_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdVideosVideoIdCommentsKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/comments', args] as const
}

export function useGetChannelsChannelIdVideosVideoIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdCommentsKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdVideosVideoIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdCommentsKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelIdVideosVideoIdCommentsKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id/comments', 'POST'] as const
}

export function usePostChannelsChannelIdVideosVideoIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdVideosVideoIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].videos[':video_id'].comments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdVideosVideoIdCreditsKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/credits', args] as const
}

export function useGetChannelsChannelIdVideosVideoIdCredits<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdCreditsKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].credits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdVideosVideoIdCredits<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdCreditsKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].credits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelIdVideosVideoIdCreditsKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id/credits', 'POST'] as const
}

export function usePostChannelsChannelIdVideosVideoIdCredits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdVideosVideoIdCreditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].videos[':video_id'].credits.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdVideosVideoIdLikesKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/likes', args] as const
}

export function useGetChannelsChannelIdVideosVideoIdLikes<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdLikesKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].likes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdVideosVideoIdLikes<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdLikesKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].likes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelIdVideosVideoIdPicturesKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/pictures', args] as const
}

export function useGetChannelsChannelIdVideosVideoIdPictures<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdPicturesKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].pictures.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdVideosVideoIdPictures<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdPicturesKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].pictures.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelIdVideosVideoIdPicturesKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id/pictures', 'POST'] as const
}

export function usePostChannelsChannelIdVideosVideoIdPictures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdVideosVideoIdPicturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].videos[':video_id'].pictures.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdVideosVideoIdPrivacyUsersKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/privacy/users', args] as const
}

export function useGetChannelsChannelIdVideosVideoIdPrivacyUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdPrivacyUsersKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].privacy.users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdVideosVideoIdPrivacyUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdPrivacyUsersKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].privacy.users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdVideosVideoIdPrivacyUsersKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id/privacy/users', 'PUT'] as const
}

export function usePutChannelsChannelIdVideosVideoIdPrivacyUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdVideosVideoIdPrivacyUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].videos[':video_id'].privacy.users.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdVideosVideoIdTexttracksKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/videos/:video_id/texttracks', args] as const
}

export function useGetChannelsChannelIdVideosVideoIdTexttracks<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdTexttracksKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].texttracks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdVideosVideoIdTexttracks<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelIdVideosVideoIdTexttracksKey(args)
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
                (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
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
          client.channels[':channel_id'].videos[':video_id'].texttracks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelIdVideosVideoIdTexttracksKey() {
  return ['channels', '/channels/:channel_id/videos/:video_id/texttracks', 'POST'] as const
}

export function usePostChannelsChannelIdVideosVideoIdTexttracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdVideosVideoIdTexttracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].videos[':video_id'].texttracks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContentratingsKey() {
  return ['contentratings', '/contentratings'] as const
}

export function useGetContentratings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContentratingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contentratings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentratings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContentratingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contentratings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contentratings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCreativecommonsKey() {
  return ['creativecommons', '/creativecommons'] as const
}

export function useGetCreativecommons<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreativecommonsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.creativecommons.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreativecommons<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreativecommonsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creativecommons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.creativecommons.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function useGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGroupsKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function usePostGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.$post> }) =>
        parseResponse(client.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
) {
  return ['groups', '/groups/:group_id', args] as const
}

export function useGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdKey() {
  return ['groups', '/groups/:group_id', 'DELETE'] as const
}

export function useDeleteGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':group_id']['$delete']> },
      ) => parseResponse(client.groups[':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdUsersKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
) {
  return ['groups', '/groups/:group_id/users', args] as const
}

export function useGetGroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
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
        ? getGetGroupsGroupIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
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
        ? getGetGroupsGroupIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsGroupIdVideosKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>,
) {
  return ['groups', '/groups/:group_id/videos', args] as const
}

export function useGetGroupsGroupIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
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
        ? getGetGroupsGroupIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
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
        ? getGetGroupsGroupIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsGroupIdVideosVideoIdKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>,
) {
  return ['groups', '/groups/:group_id/videos/:video_id', args] as const
}

export function useGetGroupsGroupIdVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>>
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
        ? getGetGroupsGroupIdVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.groups[':group_id'].videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>>
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
        ? getGetGroupsGroupIdVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.groups[':group_id'].videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsGroupIdVideosVideoIdKey() {
  return ['groups', '/groups/:group_id/videos/:video_id', 'PUT'] as const
}

export function usePutGroupsGroupIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['videos'][':video_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$put']>
        },
      ) => parseResponse(client.groups[':group_id'].videos[':video_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdVideosVideoIdKey() {
  return ['groups', '/groups/:group_id/videos/:video_id', 'DELETE'] as const
}

export function useDeleteGroupsGroupIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.groups)[':group_id']['videos'][':video_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.groups[':group_id'].videos[':video_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLanguagesKey(args: InferRequestType<typeof client.languages.$get>) {
  return ['languages', '/languages', args] as const
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

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPatchMeKey() {
  return ['me', '/me', 'PATCH'] as const
}

export function usePatchMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.$patch> }) =>
        parseResponse(client.me.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeAlbumsKey(args: InferRequestType<typeof client.me.albums.$get>) {
  return ['me', '/me/albums', args] as const
}

export function useGetMeAlbums<TError = unknown>(
  args: InferRequestType<typeof client.me.albums.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAlbumsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.albums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAlbums<TError = unknown>(
  args: InferRequestType<typeof client.me.albums.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAlbumsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.albums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeAlbumsKey() {
  return ['me', '/me/albums', 'POST'] as const
}

export function usePostMeAlbums<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.albums.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeAlbumsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.albums.$post> }) =>
        parseResponse(client.me.albums.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeAlbumsAlbumIdKey(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['$get']>,
) {
  return ['me', '/me/albums/:album_id', args] as const
}

export function useGetMeAlbumsAlbumId<TError = unknown>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>>
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
        ? getGetMeAlbumsAlbumIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.albums[':album_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAlbumsAlbumId<TError = unknown>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>>
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
        ? getGetMeAlbumsAlbumIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.albums[':album_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMeAlbumsAlbumIdKey() {
  return ['me', '/me/albums/:album_id', 'DELETE'] as const
}

export function useDeleteMeAlbumsAlbumId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.albums)[':album_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeAlbumsAlbumIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.albums)[':album_id']['$delete']> },
      ) => parseResponse(client.me.albums[':album_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMeAlbumsAlbumIdKey() {
  return ['me', '/me/albums/:album_id', 'PATCH'] as const
}

export function usePatchMeAlbumsAlbumId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.albums)[':album_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.me.albums)[':album_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMeAlbumsAlbumIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.albums)[':album_id']['$patch']> },
      ) => parseResponse(client.me.albums[':album_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeAlbumsAlbumIdVideosKey(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>,
) {
  return ['me', '/me/albums/:album_id/videos', args] as const
}

export function useGetMeAlbumsAlbumIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
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
        ? getGetMeAlbumsAlbumIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.albums[':album_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAlbumsAlbumIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
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
        ? getGetMeAlbumsAlbumIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.albums[':album_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeAlbumsAlbumIdVideosKey() {
  return ['me', '/me/albums/:album_id/videos', 'PUT'] as const
}

export function usePutMeAlbumsAlbumIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.albums)[':album_id']['videos']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeAlbumsAlbumIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$put']> },
      ) => parseResponse(client.me.albums[':album_id'].videos.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeAlbumsAlbumIdVideosVideoIdKey(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>,
) {
  return ['me', '/me/albums/:album_id/videos/:video_id', args] as const
}

export function useGetMeAlbumsAlbumIdVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>
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
        ? getGetMeAlbumsAlbumIdVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.me.albums[':album_id'].videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAlbumsAlbumIdVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>
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
        ? getGetMeAlbumsAlbumIdVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.me.albums[':album_id'].videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeAlbumsAlbumIdVideosVideoIdKey() {
  return ['me', '/me/albums/:album_id/videos/:video_id', 'PUT'] as const
}

export function usePutMeAlbumsAlbumIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeAlbumsAlbumIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.me.albums)[':album_id']['videos'][':video_id']['$put']
          >
        },
      ) =>
        parseResponse(client.me.albums[':album_id'].videos[':video_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeAlbumsAlbumIdVideosVideoIdKey() {
  return ['me', '/me/albums/:album_id/videos/:video_id', 'DELETE'] as const
}

export function useDeleteMeAlbumsAlbumIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeAlbumsAlbumIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.me.albums)[':album_id']['videos'][':video_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.me.albums[':album_id'].videos[':video_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailKey() {
  return ['me', '/me/albums/:album_id/videos/:video_id/set_album_thumbnail', 'POST'] as const
}

export function usePostMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.me.albums)[':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.me.albums)[':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.me.albums[':album_id'].videos[':video_id'].set_album_thumbnail.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMeAppearancesKey(args: InferRequestType<typeof client.me.appearances.$get>) {
  return ['me', '/me/appearances', args] as const
}

export function useGetMeAppearances<TError = unknown>(
  args: InferRequestType<typeof client.me.appearances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAppearancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.appearances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAppearances<TError = unknown>(
  args: InferRequestType<typeof client.me.appearances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAppearancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.appearances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.appearances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeCategoriesKey(args: InferRequestType<typeof client.me.categories.$get>) {
  return ['me', '/me/categories', args] as const
}

export function useGetMeCategories<TError = unknown>(
  args: InferRequestType<typeof client.me.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeCategories<TError = unknown>(
  args: InferRequestType<typeof client.me.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeCategoriesCategoryKey(
  args: InferRequestType<(typeof client.me.categories)[':category']['$get']>,
) {
  return ['me', '/me/categories/:category', args] as const
}

export function useGetMeCategoriesCategory<TError = unknown>(
  args: InferRequestType<(typeof client.me.categories)[':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>
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
        ? getGetMeCategoriesCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.categories[':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeCategoriesCategory<TError = unknown>(
  args: InferRequestType<(typeof client.me.categories)[':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>
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
        ? getGetMeCategoriesCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.categories)[':category']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.categories[':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeCategoriesCategoryKey() {
  return ['me', '/me/categories/:category', 'PUT'] as const
}

export function usePutMeCategoriesCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.categories)[':category']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.categories)[':category']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeCategoriesCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.categories)[':category']['$put']> },
      ) => parseResponse(client.me.categories[':category'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeCategoriesCategoryKey() {
  return ['me', '/me/categories/:category', 'DELETE'] as const
}

export function useDeleteMeCategoriesCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.categories)[':category']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.categories)[':category']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeCategoriesCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.categories)[':category']['$delete']> },
      ) => parseResponse(client.me.categories[':category'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeChannelsKey(args: InferRequestType<typeof client.me.channels.$get>) {
  return ['me', '/me/channels', args] as const
}

export function useGetMeChannels<TError = unknown>(
  args: InferRequestType<typeof client.me.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeChannels<TError = unknown>(
  args: InferRequestType<typeof client.me.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeChannelsChannelIdKey(
  args: InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>,
) {
  return ['me', '/me/channels/:channel_id', args] as const
}

export function useGetMeChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>
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
        ? getGetMeChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.channels[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>
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
        ? getGetMeChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.channels[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeChannelsChannelIdKey() {
  return ['me', '/me/channels/:channel_id', 'PUT'] as const
}

export function usePutMeChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.channels)[':channel_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.channels)[':channel_id']['$put']> },
      ) => parseResponse(client.me.channels[':channel_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeChannelsChannelIdKey() {
  return ['me', '/me/channels/:channel_id', 'DELETE'] as const
}

export function useDeleteMeChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.channels)[':channel_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.channels)[':channel_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.channels)[':channel_id']['$delete']> },
      ) => parseResponse(client.me.channels[':channel_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeCustomlogosKey() {
  return ['me', '/me/customlogos'] as const
}

export function useGetMeCustomlogos<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeCustomlogosKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.customlogos.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeCustomlogos<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeCustomlogosKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.customlogos.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeCustomlogosKey() {
  return ['me', '/me/customlogos', 'POST'] as const
}

export function usePostMeCustomlogos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.customlogos.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeCustomlogosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.me.customlogos.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeCustomlogosLogoIdKey(
  args: InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>,
) {
  return ['me', '/me/customlogos/:logo_id', args] as const
}

export function useGetMeCustomlogosLogoId<TError = unknown>(
  args: InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>
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
        ? getGetMeCustomlogosLogoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.customlogos[':logo_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeCustomlogosLogoId<TError = unknown>(
  args: InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>
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
        ? getGetMeCustomlogosLogoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.customlogos)[':logo_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.customlogos[':logo_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeFeedKey(args: InferRequestType<typeof client.me.feed.$get>) {
  return ['me', '/me/feed', args] as const
}

export function useGetMeFeed<TError = unknown>(
  args: InferRequestType<typeof client.me.feed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFeedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.feed.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMeFeed<TError = unknown>(
  args: InferRequestType<typeof client.me.feed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFeedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.feed.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.feed.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMeFollowersKey(args: InferRequestType<typeof client.me.followers.$get>) {
  return ['me', '/me/followers', args] as const
}

export function useGetMeFollowers<TError = unknown>(
  args: InferRequestType<typeof client.me.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFollowersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFollowers<TError = unknown>(
  args: InferRequestType<typeof client.me.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFollowersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeFollowingKey(args: InferRequestType<typeof client.me.following.$get>) {
  return ['me', '/me/following', args] as const
}

export function useGetMeFollowing<TError = unknown>(
  args: InferRequestType<typeof client.me.following.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFollowingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFollowing<TError = unknown>(
  args: InferRequestType<typeof client.me.following.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFollowingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeFollowingKey() {
  return ['me', '/me/following', 'POST'] as const
}

export function usePostMeFollowing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.following.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeFollowingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.following.$post> }) =>
        parseResponse(client.me.following.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeFollowingFollowUserIdKey(
  args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>,
) {
  return ['me', '/me/following/:follow_user_id', args] as const
}

export function useGetMeFollowingFollowUserId<TError = unknown>(
  args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
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
        ? getGetMeFollowingFollowUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.following[':follow_user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFollowingFollowUserId<TError = unknown>(
  args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
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
        ? getGetMeFollowingFollowUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.following[':follow_user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeFollowingFollowUserIdKey() {
  return ['me', '/me/following/:follow_user_id', 'PUT'] as const
}

export function usePutMeFollowingFollowUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.following)[':follow_user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeFollowingFollowUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.following)[':follow_user_id']['$put']> },
      ) => parseResponse(client.me.following[':follow_user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeFollowingFollowUserIdKey() {
  return ['me', '/me/following/:follow_user_id', 'DELETE'] as const
}

export function useDeleteMeFollowingFollowUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.following)[':follow_user_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.following)[':follow_user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeFollowingFollowUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.me.following)[':follow_user_id']['$delete']> },
      ) => parseResponse(client.me.following[':follow_user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeGroupsKey(args: InferRequestType<typeof client.me.groups.$get>) {
  return ['me', '/me/groups', args] as const
}

export function useGetMeGroups<TError = unknown>(
  args: InferRequestType<typeof client.me.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeGroups<TError = unknown>(
  args: InferRequestType<typeof client.me.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeGroupsGroupIdKey(
  args: InferRequestType<(typeof client.me.groups)[':group_id']['$get']>,
) {
  return ['me', '/me/groups/:group_id', args] as const
}

export function useGetMeGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.me.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>>
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
        ? getGetMeGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.me.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>>
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
        ? getGetMeGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeGroupsGroupIdKey() {
  return ['me', '/me/groups/:group_id', 'PUT'] as const
}

export function usePutMeGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.groups)[':group_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.groups)[':group_id']['$put']> },
      ) => parseResponse(client.me.groups[':group_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeGroupsGroupIdKey() {
  return ['me', '/me/groups/:group_id', 'DELETE'] as const
}

export function useDeleteMeGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.groups)[':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.groups)[':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.groups)[':group_id']['$delete']> },
      ) => parseResponse(client.me.groups[':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeLikesKey(args: InferRequestType<typeof client.me.likes.$get>) {
  return ['me', '/me/likes', args] as const
}

export function useGetMeLikes<TError = unknown>(
  args: InferRequestType<typeof client.me.likes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeLikesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.likes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMeLikes<TError = unknown>(
  args: InferRequestType<typeof client.me.likes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeLikesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.likes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMeLikesVideoIdKey(
  args: InferRequestType<(typeof client.me.likes)[':video_id']['$get']>,
) {
  return ['me', '/me/likes/:video_id', args] as const
}

export function useGetMeLikesVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.me.likes)[':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMeLikesVideoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.likes[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeLikesVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.me.likes)[':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMeLikesVideoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.likes[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeLikesVideoIdKey() {
  return ['me', '/me/likes/:video_id', 'PUT'] as const
}

export function usePutMeLikesVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.likes)[':video_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeLikesVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.likes)[':video_id']['$put']> },
      ) => parseResponse(client.me.likes[':video_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeLikesVideoIdKey() {
  return ['me', '/me/likes/:video_id', 'DELETE'] as const
}

export function useDeleteMeLikesVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.likes)[':video_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.likes)[':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeLikesVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.likes)[':video_id']['$delete']> },
      ) => parseResponse(client.me.likes[':video_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeOndemandPagesKey(
  args: InferRequestType<typeof client.me.ondemand.pages.$get>,
) {
  return ['me', '/me/ondemand/pages', args] as const
}

export function useGetMeOndemandPages<TError = unknown>(
  args: InferRequestType<typeof client.me.ondemand.pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>>
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
        ? getGetMeOndemandPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.ondemand.pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeOndemandPages<TError = unknown>(
  args: InferRequestType<typeof client.me.ondemand.pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>>
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
        ? getGetMeOndemandPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.ondemand.pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeOndemandPagesKey() {
  return ['me', '/me/ondemand/pages', 'POST'] as const
}

export function usePostMeOndemandPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.pages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.me.ondemand.pages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeOndemandPagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.ondemand.pages.$post> }) =>
        parseResponse(client.me.ondemand.pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeOndemandPurchasesKey(
  args: InferRequestType<typeof client.me.ondemand.purchases.$get>,
) {
  return ['me', '/me/ondemand/purchases', args] as const
}

export function useGetMeOndemandPurchases<TError = unknown>(
  args: InferRequestType<typeof client.me.ondemand.purchases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>
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
        ? getGetMeOndemandPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.ondemand.purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeOndemandPurchases<TError = unknown>(
  args: InferRequestType<typeof client.me.ondemand.purchases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>
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
        ? getGetMeOndemandPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.ondemand.purchases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.ondemand.purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeOndemandPurchasesOndemandIdKey(
  args: InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>,
) {
  return ['me', '/me/ondemand/purchases/:ondemand_id', args] as const
}

export function useGetMeOndemandPurchasesOndemandId<TError = unknown>(
  args: InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
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
        ? getGetMeOndemandPurchasesOndemandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.me.ondemand.purchases[':ondemand_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeOndemandPurchasesOndemandId<TError = unknown>(
  args: InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
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
        ? getGetMeOndemandPurchasesOndemandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.me.ondemand.purchases[':ondemand_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMePicturesKey(args: InferRequestType<typeof client.me.pictures.$get>) {
  return ['me', '/me/pictures', args] as const
}

export function useGetMePictures<TError = unknown>(
  args: InferRequestType<typeof client.me.pictures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePicturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.pictures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePictures<TError = unknown>(
  args: InferRequestType<typeof client.me.pictures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePicturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.pictures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMePicturesKey() {
  return ['me', '/me/pictures', 'POST'] as const
}

export function usePostMePictures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.pictures.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMePicturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.me.pictures.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMePicturesPortraitsetIdKey(
  args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>,
) {
  return ['me', '/me/pictures/:portraitset_id', args] as const
}

export function useGetMePicturesPortraitsetId<TError = unknown>(
  args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
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
        ? getGetMePicturesPortraitsetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.pictures[':portraitset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePicturesPortraitsetId<TError = unknown>(
  args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
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
        ? getGetMePicturesPortraitsetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.pictures[':portraitset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMePicturesPortraitsetIdKey() {
  return ['me', '/me/pictures/:portraitset_id', 'DELETE'] as const
}

export function useDeleteMePicturesPortraitsetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMePicturesPortraitsetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$delete']> },
      ) => parseResponse(client.me.pictures[':portraitset_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMePicturesPortraitsetIdKey() {
  return ['me', '/me/pictures/:portraitset_id', 'PATCH'] as const
}

export function usePatchMePicturesPortraitsetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.pictures)[':portraitset_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMePicturesPortraitsetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$patch']> },
      ) => parseResponse(client.me.pictures[':portraitset_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMePortfoliosKey(args: InferRequestType<typeof client.me.portfolios.$get>) {
  return ['me', '/me/portfolios', args] as const
}

export function useGetMePortfolios<TError = unknown>(
  args: InferRequestType<typeof client.me.portfolios.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePortfoliosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.portfolios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePortfolios<TError = unknown>(
  args: InferRequestType<typeof client.me.portfolios.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePortfoliosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.portfolios.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.portfolios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMePortfoliosPortfolioIdKey(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>,
) {
  return ['me', '/me/portfolios/:portfolio_id', args] as const
}

export function useGetMePortfoliosPortfolioId<TError = unknown>(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
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
        ? getGetMePortfoliosPortfolioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.portfolios[':portfolio_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePortfoliosPortfolioId<TError = unknown>(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
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
        ? getGetMePortfoliosPortfolioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.portfolios[':portfolio_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMePortfoliosPortfolioIdVideosKey(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>,
) {
  return ['me', '/me/portfolios/:portfolio_id/videos', args] as const
}

export function useGetMePortfoliosPortfolioIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
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
        ? getGetMePortfoliosPortfolioIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.me.portfolios[':portfolio_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePortfoliosPortfolioIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
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
        ? getGetMePortfoliosPortfolioIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.me.portfolios[':portfolio_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMePortfoliosPortfolioIdVideosVideoIdKey(
  args: InferRequestType<
    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
  >,
) {
  return ['me', '/me/portfolios/:portfolio_id/videos/:video_id', args] as const
}

export function useGetMePortfoliosPortfolioIdVideosVideoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMePortfoliosPortfolioIdVideosVideoIdKey(args)
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
                (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
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
          client.me.portfolios[':portfolio_id'].videos[':video_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePortfoliosPortfolioIdVideosVideoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMePortfoliosPortfolioIdVideosVideoIdKey(args)
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
                (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
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
          client.me.portfolios[':portfolio_id'].videos[':video_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMePortfoliosPortfolioIdVideosVideoIdKey() {
  return ['me', '/me/portfolios/:portfolio_id/videos/:video_id', 'PUT'] as const
}

export function usePutMePortfoliosPortfolioIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePortfoliosPortfolioIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.me.portfolios[':portfolio_id'].videos[':video_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMePortfoliosPortfolioIdVideosVideoIdKey() {
  return ['me', '/me/portfolios/:portfolio_id/videos/:video_id', 'DELETE'] as const
}

export function useDeleteMePortfoliosPortfolioIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMePortfoliosPortfolioIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.me.portfolios[':portfolio_id'].videos[':video_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMePresetsKey(args: InferRequestType<typeof client.me.presets.$get>) {
  return ['me', '/me/presets', args] as const
}

export function useGetMePresets<TError = unknown>(
  args: InferRequestType<typeof client.me.presets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePresetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.presets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePresets<TError = unknown>(
  args: InferRequestType<typeof client.me.presets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePresetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.presets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.presets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMePresetsPresetIdKey(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>,
) {
  return ['me', '/me/presets/:preset_id', args] as const
}

export function useGetMePresetsPresetId<TError = unknown>(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>
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
        ? getGetMePresetsPresetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.presets[':preset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePresetsPresetId<TError = unknown>(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>
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
        ? getGetMePresetsPresetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.presets[':preset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMePresetsPresetIdKey() {
  return ['me', '/me/presets/:preset_id', 'PATCH'] as const
}

export function usePatchMePresetsPresetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.me.presets)[':preset_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMePresetsPresetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.presets)[':preset_id']['$patch']> },
      ) => parseResponse(client.me.presets[':preset_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMePresetsPresetIdVideosKey(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>,
) {
  return ['me', '/me/presets/:preset_id/videos', args] as const
}

export function useGetMePresetsPresetIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
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
        ? getGetMePresetsPresetIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.presets[':preset_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePresetsPresetIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
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
        ? getGetMePresetsPresetIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.presets)[':preset_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.presets[':preset_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeProjectsKey(args: InferRequestType<typeof client.me.projects.$get>) {
  return ['me', '/me/projects', args] as const
}

export function useGetMeProjects<TError = unknown>(
  args: InferRequestType<typeof client.me.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeProjects<TError = unknown>(
  args: InferRequestType<typeof client.me.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeProjectsKey() {
  return ['me', '/me/projects', 'POST'] as const
}

export function usePostMeProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.projects.$post> }) =>
        parseResponse(client.me.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeProjectsProjectIdKey(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['$get']>,
) {
  return ['me', '/me/projects/:project_id', args] as const
}

export function useGetMeProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>
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
        ? getGetMeProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>
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
        ? getGetMeProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMeProjectsProjectIdKey() {
  return ['me', '/me/projects/:project_id', 'DELETE'] as const
}

export function useDeleteMeProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.projects)[':project_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.projects)[':project_id']['$delete']> },
      ) => parseResponse(client.me.projects[':project_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMeProjectsProjectIdKey() {
  return ['me', '/me/projects/:project_id', 'PATCH'] as const
}

export function usePatchMeProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.projects)[':project_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.me.projects)[':project_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMeProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.projects)[':project_id']['$patch']> },
      ) => parseResponse(client.me.projects[':project_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeProjectsProjectIdVideosKey(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>,
) {
  return ['me', '/me/projects/:project_id/videos', args] as const
}

export function useGetMeProjectsProjectIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
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
        ? getGetMeProjectsProjectIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.projects[':project_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeProjectsProjectIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
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
        ? getGetMeProjectsProjectIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.projects[':project_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeProjectsProjectIdVideosKey() {
  return ['me', '/me/projects/:project_id/videos', 'PUT'] as const
}

export function usePutMeProjectsProjectIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeProjectsProjectIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$put']> },
      ) => parseResponse(client.me.projects[':project_id'].videos.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeProjectsProjectIdVideosKey() {
  return ['me', '/me/projects/:project_id/videos', 'DELETE'] as const
}

export function useDeleteMeProjectsProjectIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.projects)[':project_id']['videos']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeProjectsProjectIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$delete']>
        },
      ) => parseResponse(client.me.projects[':project_id'].videos.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMeProjectsProjectIdVideosVideoIdKey() {
  return ['me', '/me/projects/:project_id/videos/:video_id', 'PUT'] as const
}

export function usePutMeProjectsProjectIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.me.projects)[':project_id']['videos'][':video_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeProjectsProjectIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.me.projects)[':project_id']['videos'][':video_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.me.projects[':project_id'].videos[':video_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeProjectsProjectIdVideosVideoIdKey() {
  return ['me', '/me/projects/:project_id/videos/:video_id', 'DELETE'] as const
}

export function useDeleteMeProjectsProjectIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.me.projects)[':project_id']['videos'][':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeProjectsProjectIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.me.projects)[':project_id']['videos'][':video_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.me.projects[':project_id'].videos[':video_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMeVideosKey(args: InferRequestType<typeof client.me.videos.$get>) {
  return ['me', '/me/videos', args] as const
}

export function useGetMeVideos<TError = unknown>(
  args: InferRequestType<typeof client.me.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeVideos<TError = unknown>(
  args: InferRequestType<typeof client.me.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeVideosKey() {
  return ['me', '/me/videos', 'POST'] as const
}

export function usePostMeVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.videos.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.videos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.videos.$post> }) =>
        parseResponse(client.me.videos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeVideosVideoIdKey(
  args: InferRequestType<(typeof client.me.videos)[':video_id']['$get']>,
) {
  return ['me', '/me/videos/:video_id', args] as const
}

export function useGetMeVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.me.videos)[':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>>
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
        ? getGetMeVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.me.videos)[':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>>
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
        ? getGetMeVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.videos)[':video_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeWatchedVideosKey(
  args: InferRequestType<typeof client.me.watched.videos.$get>,
) {
  return ['me', '/me/watched/videos', args] as const
}

export function useGetMeWatchedVideos<TError = unknown>(
  args: InferRequestType<typeof client.me.watched.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>>
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
        ? getGetMeWatchedVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.watched.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeWatchedVideos<TError = unknown>(
  args: InferRequestType<typeof client.me.watched.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>>
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
        ? getGetMeWatchedVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.watched.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMeWatchedVideosKey() {
  return ['me', '/me/watched/videos', 'DELETE'] as const
}

export function useDeleteMeWatchedVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.watched.videos.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeWatchedVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.me.watched.videos.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeWatchedVideosVideoIdKey() {
  return ['me', '/me/watched/videos/:video_id', 'DELETE'] as const
}

export function useDeleteMeWatchedVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.watched.videos)[':video_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.watched.videos)[':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeWatchedVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.me.watched.videos)[':video_id']['$delete']> },
      ) => parseResponse(client.me.watched.videos[':video_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeWatchlaterKey(args: InferRequestType<typeof client.me.watchlater.$get>) {
  return ['me', '/me/watchlater', args] as const
}

export function useGetMeWatchlater<TError = unknown>(
  args: InferRequestType<typeof client.me.watchlater.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeWatchlaterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.watchlater.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeWatchlater<TError = unknown>(
  args: InferRequestType<typeof client.me.watchlater.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeWatchlaterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.watchlater.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.watchlater.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeWatchlaterVideoIdKey(
  args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>,
) {
  return ['me', '/me/watchlater/:video_id', args] as const
}

export function useGetMeWatchlaterVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>
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
        ? getGetMeWatchlaterVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.watchlater[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeWatchlaterVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>
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
        ? getGetMeWatchlaterVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.watchlater[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeWatchlaterVideoIdKey() {
  return ['me', '/me/watchlater/:video_id', 'PUT'] as const
}

export function usePutMeWatchlaterVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.watchlater)[':video_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeWatchlaterVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.watchlater)[':video_id']['$put']> },
      ) => parseResponse(client.me.watchlater[':video_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeWatchlaterVideoIdKey() {
  return ['me', '/me/watchlater/:video_id', 'DELETE'] as const
}

export function useDeleteMeWatchlaterVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.watchlater)[':video_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.watchlater)[':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeWatchlaterVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.watchlater)[':video_id']['$delete']> },
      ) => parseResponse(client.me.watchlater[':video_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthAccessTokenKey() {
  return ['oauth', '/oauth/access_token', 'POST'] as const
}

export function usePostOauthAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.access_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthAccessTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.access_token.$post> }) =>
        parseResponse(client.oauth.access_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthAuthorizeClientKey() {
  return ['oauth', '/oauth/authorize/client', 'POST'] as const
}

export function usePostOauthAuthorizeClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.client.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.authorize.client.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthAuthorizeClientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.oauth.authorize.client.$post> },
      ) => parseResponse(client.oauth.authorize.client.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthAuthorizeVimeoOauth1Key() {
  return ['oauth', '/oauth/authorize/vimeo_oauth1', 'POST'] as const
}

export function usePostOauthAuthorizeVimeoOauth1<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.vimeo_oauth1.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.authorize.vimeo_oauth1.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthAuthorizeVimeoOauth1Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.oauth.authorize.vimeo_oauth1.$post> },
      ) => parseResponse(client.oauth.authorize.vimeo_oauth1.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthVerifyKey() {
  return ['oauth', '/oauth/verify'] as const
}

export function useGetOauthVerify<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthVerifyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.verify.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthVerify<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthVerifyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.verify.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.verify.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandGenresKey() {
  return ['ondemand', '/ondemand/genres'] as const
}

export function useGetOndemandGenres<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOndemandGenresKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ondemand.genres.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandGenres<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOndemandGenresKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.genres.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ondemand.genres.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandGenresGenreIdKey(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>,
) {
  return ['ondemand', '/ondemand/genres/:genre_id', args] as const
}

export function useGetOndemandGenresGenreId<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
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
        ? getGetOndemandGenresGenreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ondemand.genres[':genre_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandGenresGenreId<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
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
        ? getGetOndemandGenresGenreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ondemand.genres[':genre_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandGenresGenreIdPagesKey(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>,
) {
  return ['ondemand', '/ondemand/genres/:genre_id/pages', args] as const
}

export function useGetOndemandGenresGenreIdPages<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
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
        ? getGetOndemandGenresGenreIdPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.genres[':genre_id'].pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandGenresGenreIdPages<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
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
        ? getGetOndemandGenresGenreIdPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.genres[':genre_id'].pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandGenresGenreIdPagesOndemandIdKey(
  args: InferRequestType<
    (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/genres/:genre_id/pages/:ondemand_id', args] as const
}

export function useGetOndemandGenresGenreIdPagesOndemandId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandGenresGenreIdPagesOndemandIdKey(args)
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
                (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
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
          client.ondemand.genres[':genre_id'].pages[':ondemand_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandGenresGenreIdPagesOndemandId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandGenresGenreIdPagesOndemandIdKey(args)
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
                (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
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
          client.ondemand.genres[':genre_id'].pages[':ondemand_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id', args] as const
}

export function useGetOndemandPagesOndemandId<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
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
        ? getGetOndemandPagesOndemandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ondemand.pages[':ondemand_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandId<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
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
        ? getGetOndemandPagesOndemandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ondemand.pages[':ondemand_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOndemandPagesOndemandIdKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id', 'DELETE'] as const
}

export function useDeleteOndemandPagesOndemandId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOndemandPagesOndemandIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$delete']> },
      ) => parseResponse(client.ondemand.pages[':ondemand_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOndemandPagesOndemandIdKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id', 'PATCH'] as const
}

export function usePatchOndemandPagesOndemandId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOndemandPagesOndemandIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$patch']> },
      ) => parseResponse(client.ondemand.pages[':ondemand_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdBackgroundsKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds', args] as const
}

export function useGetOndemandPagesOndemandIdBackgrounds<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>
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
        ? getGetOndemandPagesOndemandIdBackgroundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].backgrounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdBackgrounds<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>
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
        ? getGetOndemandPagesOndemandIdBackgroundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].backgrounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOndemandPagesOndemandIdBackgroundsKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds', 'POST'] as const
}

export function usePostOndemandPagesOndemandIdBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOndemandPagesOndemandIdBackgroundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$post']
          >
        },
      ) =>
        parseResponse(client.ondemand.pages[':ondemand_id'].backgrounds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdBackgroundsBackgroundIdKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds/:background_id', args] as const
}

export function useGetOndemandPagesOndemandIdBackgroundsBackgroundId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdBackgroundsBackgroundIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdBackgroundsBackgroundId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdBackgroundsBackgroundIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOndemandPagesOndemandIdBackgroundsBackgroundIdKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds/:background_id', 'DELETE'] as const
}

export function useDeleteOndemandPagesOndemandIdBackgroundsBackgroundId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOndemandPagesOndemandIdBackgroundsBackgroundIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOndemandPagesOndemandIdBackgroundsBackgroundIdKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/backgrounds/:background_id', 'PATCH'] as const
}

export function usePatchOndemandPagesOndemandIdBackgroundsBackgroundId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOndemandPagesOndemandIdBackgroundsBackgroundIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdGenresKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/genres', args] as const
}

export function useGetOndemandPagesOndemandIdGenres<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
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
        ? getGetOndemandPagesOndemandIdGenresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].genres.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdGenres<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
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
        ? getGetOndemandPagesOndemandIdGenresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].genres.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdGenresGenreIdKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/genres/:genre_id', args] as const
}

export function useGetOndemandPagesOndemandIdGenresGenreId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdGenresGenreIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdGenresGenreId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdGenresGenreIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOndemandPagesOndemandIdGenresGenreIdKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/genres/:genre_id', 'PUT'] as const
}

export function usePutOndemandPagesOndemandIdGenresGenreId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOndemandPagesOndemandIdGenresGenreIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOndemandPagesOndemandIdGenresGenreIdKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/genres/:genre_id', 'DELETE'] as const
}

export function useDeleteOndemandPagesOndemandIdGenresGenreId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOndemandPagesOndemandIdGenresGenreIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdLikesKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/likes', args] as const
}

export function useGetOndemandPagesOndemandIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
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
        ? getGetOndemandPagesOndemandIdLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
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
        ? getGetOndemandPagesOndemandIdLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdPicturesKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/pictures', args] as const
}

export function useGetOndemandPagesOndemandIdPictures<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>>
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
        ? getGetOndemandPagesOndemandIdPicturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].pictures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdPictures<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>>
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
        ? getGetOndemandPagesOndemandIdPicturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].pictures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOndemandPagesOndemandIdPicturesKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/pictures', 'POST'] as const
}

export function usePostOndemandPagesOndemandIdPictures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOndemandPagesOndemandIdPicturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$post']>
        },
      ) => parseResponse(client.ondemand.pages[':ondemand_id'].pictures.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdPicturesPosterIdKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/pictures/:poster_id', args] as const
}

export function useGetOndemandPagesOndemandIdPicturesPosterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdPicturesPosterIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].pictures[':poster_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdPicturesPosterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdPicturesPosterIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].pictures[':poster_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchOndemandPagesOndemandIdPicturesPosterIdKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/pictures/:poster_id', 'PATCH'] as const
}

export function usePatchOndemandPagesOndemandIdPicturesPosterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOndemandPagesOndemandIdPicturesPosterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.ondemand.pages[':ondemand_id'].pictures[':poster_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdPromotionsKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions', args] as const
}

export function useGetOndemandPagesOndemandIdPromotions<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>
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
        ? getGetOndemandPagesOndemandIdPromotionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].promotions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdPromotions<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>
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
        ? getGetOndemandPagesOndemandIdPromotionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].promotions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOndemandPagesOndemandIdPromotionsKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions', 'POST'] as const
}

export function usePostOndemandPagesOndemandIdPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOndemandPagesOndemandIdPromotionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['promotions']['$post']
          >
        },
      ) =>
        parseResponse(client.ondemand.pages[':ondemand_id'].promotions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdPromotionsPromotionIdKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions/:promotion_id', args] as const
}

export function useGetOndemandPagesOndemandIdPromotionsPromotionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdPromotionsPromotionIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdPromotionsPromotionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdPromotionsPromotionIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOndemandPagesOndemandIdPromotionsPromotionIdKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions/:promotion_id', 'DELETE'] as const
}

export function useDeleteOndemandPagesOndemandIdPromotionsPromotionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOndemandPagesOndemandIdPromotionsPromotionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdPromotionsPromotionIdCodesKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/promotions/:promotion_id/codes', args] as const
}

export function useGetOndemandPagesOndemandIdPromotionsPromotionIdCodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdPromotionsPromotionIdCodesKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
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
          client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].codes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdPromotionsPromotionIdCodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdPromotionsPromotionIdCodesKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
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
          client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].codes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdRegionsKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions', args] as const
}

export function useGetOndemandPagesOndemandIdRegions<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
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
        ? getGetOndemandPagesOndemandIdRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdRegions<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
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
        ? getGetOndemandPagesOndemandIdRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOndemandPagesOndemandIdRegionsKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions', 'PUT'] as const
}

export function usePutOndemandPagesOndemandIdRegions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOndemandPagesOndemandIdRegionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>
        },
      ) => parseResponse(client.ondemand.pages[':ondemand_id'].regions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOndemandPagesOndemandIdRegionsKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions', 'DELETE'] as const
}

export function useDeleteOndemandPagesOndemandIdRegions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOndemandPagesOndemandIdRegionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['regions']['$delete']
          >
        },
      ) => parseResponse(client.ondemand.pages[':ondemand_id'].regions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdRegionsCountryKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions/:country', args] as const
}

export function useGetOndemandPagesOndemandIdRegionsCountry<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdRegionsCountryKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
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
          client.ondemand.pages[':ondemand_id'].regions[':country'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdRegionsCountry<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdRegionsCountryKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
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
          client.ondemand.pages[':ondemand_id'].regions[':country'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOndemandPagesOndemandIdRegionsCountryKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions/:country', 'PUT'] as const
}

export function usePutOndemandPagesOndemandIdRegionsCountry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOndemandPagesOndemandIdRegionsCountryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ondemand.pages[':ondemand_id'].regions[':country'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOndemandPagesOndemandIdRegionsCountryKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/regions/:country', 'DELETE'] as const
}

export function useDeleteOndemandPagesOndemandIdRegionsCountry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOndemandPagesOndemandIdRegionsCountryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ondemand.pages[':ondemand_id'].regions[':country'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdSeasonsKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/seasons', args] as const
}

export function useGetOndemandPagesOndemandIdSeasons<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
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
        ? getGetOndemandPagesOndemandIdSeasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].seasons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdSeasons<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
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
        ? getGetOndemandPagesOndemandIdSeasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].seasons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdSeasonsSeasonIdKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/seasons/:season_id', args] as const
}

export function useGetOndemandPagesOndemandIdSeasonsSeasonId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdSeasonsSeasonIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].seasons[':season_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdSeasonsSeasonId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdSeasonsSeasonIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].seasons[':season_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdSeasonsSeasonIdVideosKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/seasons/:season_id/videos', args] as const
}

export function useGetOndemandPagesOndemandIdSeasonsSeasonIdVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdSeasonsSeasonIdVideosKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
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
          client.ondemand.pages[':ondemand_id'].seasons[':season_id'].videos.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdSeasonsSeasonIdVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdSeasonsSeasonIdVideosKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
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
          client.ondemand.pages[':ondemand_id'].seasons[':season_id'].videos.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdVideosKey(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/videos', args] as const
}

export function useGetOndemandPagesOndemandIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
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
        ? getGetOndemandPagesOndemandIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
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
        ? getGetOndemandPagesOndemandIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ondemand.pages[':ondemand_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandPagesOndemandIdVideosVideoIdKey(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
  >,
) {
  return ['ondemand', '/ondemand/pages/:ondemand_id/videos/:video_id', args] as const
}

export function useGetOndemandPagesOndemandIdVideosVideoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdVideosVideoIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].videos[':video_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandPagesOndemandIdVideosVideoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOndemandPagesOndemandIdVideosVideoIdKey(args)
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
                (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
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
          client.ondemand.pages[':ondemand_id'].videos[':video_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOndemandPagesOndemandIdVideosVideoIdKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/videos/:video_id', 'PUT'] as const
}

export function usePutOndemandPagesOndemandIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOndemandPagesOndemandIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ondemand.pages[':ondemand_id'].videos[':video_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOndemandPagesOndemandIdVideosVideoIdKey() {
  return ['ondemand', '/ondemand/pages/:ondemand_id/videos/:video_id', 'DELETE'] as const
}

export function useDeleteOndemandPagesOndemandIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOndemandPagesOndemandIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ondemand.pages[':ondemand_id'].videos[':video_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOndemandRegionsKey() {
  return ['ondemand', '/ondemand/regions'] as const
}

export function useGetOndemandRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOndemandRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ondemand.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOndemandRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ondemand.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ondemand.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOndemandRegionsCountryKey(
  args: InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>,
) {
  return ['ondemand', '/ondemand/regions/:country', args] as const
}

export function useGetOndemandRegionsCountry<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
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
        ? getGetOndemandRegionsCountryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ondemand.regions[':country'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOndemandRegionsCountry<TError = unknown>(
  args: InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
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
        ? getGetOndemandRegionsCountryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ondemand.regions)[':country']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ondemand.regions[':country'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsWordKey(args: InferRequestType<(typeof client.tags)[':word']['$get']>) {
  return ['tags', '/tags/:word', args] as const
}

export function useGetTagsWord<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':word']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsWordKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':word'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsWord<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':word']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsWordKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':word'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsWordVideosKey(
  args: InferRequestType<(typeof client.tags)[':word']['videos']['$get']>,
) {
  return ['tags', '/tags/:word/videos', args] as const
}

export function useGetTagsWordVideos<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':word']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTagsWordVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':word'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsWordVideos<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':word']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTagsWordVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':word']['videos']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':word'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTokensKey() {
  return ['tokens', '/tokens', 'DELETE'] as const
}

export function useDeleteTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$delete>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.tokens.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersUserIdKey() {
  return ['users', '/users/:user_id', 'PATCH'] as const
}

export function usePatchUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['$patch']> },
      ) => parseResponse(client.users[':user_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAlbumsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>,
) {
  return ['users', '/users/:user_id/albums', args] as const
}

export function useGetUsersUserIdAlbums<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>
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
        ? getGetUsersUserIdAlbumsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].albums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAlbums<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>
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
        ? getGetUsersUserIdAlbumsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].albums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdAlbumsKey() {
  return ['users', '/users/:user_id/albums', 'POST'] as const
}

export function usePostUsersUserIdAlbums<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['albums']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['albums']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdAlbumsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['albums']['$post']> },
      ) => parseResponse(client.users[':user_id'].albums.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAlbumsAlbumIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>,
) {
  return ['users', '/users/:user_id/albums/:album_id', args] as const
}

export function useGetUsersUserIdAlbumsAlbumId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
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
        ? getGetUsersUserIdAlbumsAlbumIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].albums[':album_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAlbumsAlbumId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
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
        ? getGetUsersUserIdAlbumsAlbumIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].albums[':album_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdAlbumsAlbumIdKey() {
  return ['users', '/users/:user_id/albums/:album_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdAlbumsAlbumId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdAlbumsAlbumIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$delete']>
        },
      ) => parseResponse(client.users[':user_id'].albums[':album_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdAlbumsAlbumIdKey() {
  return ['users', '/users/:user_id/albums/:album_id', 'PATCH'] as const
}

export function usePatchUsersUserIdAlbumsAlbumId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdAlbumsAlbumIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$patch']>
        },
      ) => parseResponse(client.users[':user_id'].albums[':album_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAlbumsAlbumIdCustomThumbnailsKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/custom_thumbnails', args] as const
}

export function useGetUsersUserIdAlbumsAlbumIdCustomThumbnails<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdAlbumsAlbumIdCustomThumbnailsKey(args)
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
                (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
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
          client.users[':user_id'].albums[':album_id'].custom_thumbnails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAlbumsAlbumIdCustomThumbnails<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdAlbumsAlbumIdCustomThumbnailsKey(args)
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
                (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
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
          client.users[':user_id'].albums[':album_id'].custom_thumbnails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdAlbumsAlbumIdCustomThumbnailsKey() {
  return ['users', '/users/:user_id/albums/:album_id/custom_thumbnails', 'POST'] as const
}

export function usePostUsersUserIdAlbumsAlbumIdCustomThumbnails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdAlbumsAlbumIdCustomThumbnailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].albums[':album_id'].custom_thumbnails.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdKey(
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

export function useGetUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdKey(args)
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
                (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
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
          client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdKey(args)
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
                (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
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
          client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdKey() {
  return [
    'users',
    '/users/:user_id/albums/:album_id/custom_thumbnails/:thumbnail_id',
    'DELETE',
  ] as const
}

export function useDeleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdKey() {
  return [
    'users',
    '/users/:user_id/albums/:album_id/custom_thumbnails/:thumbnail_id',
    'PATCH',
  ] as const
}

export function usePatchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAlbumsAlbumIdLogosKey(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>,
) {
  return ['users', '/users/:user_id/albums/:album_id/logos', args] as const
}

export function useGetUsersUserIdAlbumsAlbumIdLogos<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
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
        ? getGetUsersUserIdAlbumsAlbumIdLogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].albums[':album_id'].logos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAlbumsAlbumIdLogos<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
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
        ? getGetUsersUserIdAlbumsAlbumIdLogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].albums[':album_id'].logos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdAlbumsAlbumIdLogosKey() {
  return ['users', '/users/:user_id/albums/:album_id/logos', 'POST'] as const
}

export function usePostUsersUserIdAlbumsAlbumIdLogos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdAlbumsAlbumIdLogosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['albums'][':album_id']['logos']['$post']
          >
        },
      ) =>
        parseResponse(client.users[':user_id'].albums[':album_id'].logos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAlbumsAlbumIdLogosLogoIdKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/logos/:logo_id', args] as const
}

export function useGetUsersUserIdAlbumsAlbumIdLogosLogoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdAlbumsAlbumIdLogosLogoIdKey(args)
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
                (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
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
          client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAlbumsAlbumIdLogosLogoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdAlbumsAlbumIdLogosLogoIdKey(args)
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
                (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
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
          client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdAlbumsAlbumIdLogosLogoIdKey() {
  return ['users', '/users/:user_id/albums/:album_id/logos/:logo_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdAlbumsAlbumIdLogosLogoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdAlbumsAlbumIdLogosLogoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdAlbumsAlbumIdLogosLogoIdKey() {
  return ['users', '/users/:user_id/albums/:album_id/logos/:logo_id', 'PATCH'] as const
}

export function usePatchUsersUserIdAlbumsAlbumIdLogosLogoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdAlbumsAlbumIdLogosLogoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAlbumsAlbumIdVideosKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/videos', args] as const
}

export function useGetUsersUserIdAlbumsAlbumIdVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
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
        ? getGetUsersUserIdAlbumsAlbumIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].albums[':album_id'].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAlbumsAlbumIdVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
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
        ? getGetUsersUserIdAlbumsAlbumIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].albums[':album_id'].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdAlbumsAlbumIdVideosKey() {
  return ['users', '/users/:user_id/albums/:album_id/videos', 'PUT'] as const
}

export function usePutUsersUserIdAlbumsAlbumIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['videos']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdAlbumsAlbumIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$put']
          >
        },
      ) =>
        parseResponse(client.users[':user_id'].albums[':album_id'].videos.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAlbumsAlbumIdVideosVideoIdKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
  >,
) {
  return ['users', '/users/:user_id/albums/:album_id/videos/:video_id', args] as const
}

export function useGetUsersUserIdAlbumsAlbumIdVideosVideoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdAlbumsAlbumIdVideosVideoIdKey(args)
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
                (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
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
          client.users[':user_id'].albums[':album_id'].videos[':video_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAlbumsAlbumIdVideosVideoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdAlbumsAlbumIdVideosVideoIdKey(args)
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
                (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
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
          client.users[':user_id'].albums[':album_id'].videos[':video_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdAlbumsAlbumIdVideosVideoIdKey() {
  return ['users', '/users/:user_id/albums/:album_id/videos/:video_id', 'PUT'] as const
}

export function usePutUsersUserIdAlbumsAlbumIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdAlbumsAlbumIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].albums[':album_id'].videos[':video_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdAlbumsAlbumIdVideosVideoIdKey() {
  return ['users', '/users/:user_id/albums/:album_id/videos/:video_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdAlbumsAlbumIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdAlbumsAlbumIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].albums[':album_id'].videos[':video_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailKey() {
  return [
    'users',
    '/users/:user_id/albums/:album_id/videos/:video_id/set_album_thumbnail',
    'POST',
  ] as const
}

export function usePostUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].albums[':album_id'].videos[
            ':video_id'
          ].set_album_thumbnail.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAppearancesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>,
) {
  return ['users', '/users/:user_id/appearances', args] as const
}

export function useGetUsersUserIdAppearances<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
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
        ? getGetUsersUserIdAppearancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].appearances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAppearances<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
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
        ? getGetUsersUserIdAppearancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['appearances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].appearances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdCategoriesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>,
) {
  return ['users', '/users/:user_id/categories', args] as const
}

export function useGetUsersUserIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
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
        ? getGetUsersUserIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
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
        ? getGetUsersUserIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdCategoriesCategoryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>,
) {
  return ['users', '/users/:user_id/categories/:category', args] as const
}

export function useGetUsersUserIdCategoriesCategory<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>
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
        ? getGetUsersUserIdCategoriesCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].categories[':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdCategoriesCategory<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>
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
        ? getGetUsersUserIdCategoriesCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['categories'][':category']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].categories[':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdCategoriesCategoryKey() {
  return ['users', '/users/:user_id/categories/:category', 'PUT'] as const
}

export function usePutUsersUserIdCategoriesCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdCategoriesCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['categories'][':category']['$put']
          >
        },
      ) => parseResponse(client.users[':user_id'].categories[':category'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdCategoriesCategoryKey() {
  return ['users', '/users/:user_id/categories/:category', 'DELETE'] as const
}

export function useDeleteUsersUserIdCategoriesCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdCategoriesCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['categories'][':category']['$delete']
          >
        },
      ) =>
        parseResponse(client.users[':user_id'].categories[':category'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdChannelsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
) {
  return ['users', '/users/:user_id/channels', args] as const
}

export function useGetUsersUserIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
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
        ? getGetUsersUserIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
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
        ? getGetUsersUserIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdChannelsChannelIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>,
) {
  return ['users', '/users/:user_id/channels/:channel_id', args] as const
}

export function useGetUsersUserIdChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>
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
        ? getGetUsersUserIdChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].channels[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>
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
        ? getGetUsersUserIdChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].channels[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdChannelsChannelIdKey() {
  return ['users', '/users/:user_id/channels/:channel_id', 'PUT'] as const
}

export function usePutUsersUserIdChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['channels'][':channel_id']['$put']
          >
        },
      ) => parseResponse(client.users[':user_id'].channels[':channel_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdChannelsChannelIdKey() {
  return ['users', '/users/:user_id/channels/:channel_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['channels'][':channel_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.users[':user_id'].channels[':channel_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdCustomlogosKey(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>,
) {
  return ['users', '/users/:user_id/customlogos', args] as const
}

export function useGetUsersUserIdCustomlogos<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
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
        ? getGetUsersUserIdCustomlogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].customlogos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdCustomlogos<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
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
        ? getGetUsersUserIdCustomlogosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].customlogos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdCustomlogosKey() {
  return ['users', '/users/:user_id/customlogos', 'POST'] as const
}

export function usePostUsersUserIdCustomlogos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['customlogos']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['customlogos']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdCustomlogosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$post']> },
      ) => parseResponse(client.users[':user_id'].customlogos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdCustomlogosLogoIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>,
) {
  return ['users', '/users/:user_id/customlogos/:logo_id', args] as const
}

export function useGetUsersUserIdCustomlogosLogoId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>
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
        ? getGetUsersUserIdCustomlogosLogoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].customlogos[':logo_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdCustomlogosLogoId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>
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
        ? getGetUsersUserIdCustomlogosLogoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].customlogos[':logo_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdFeedKey(
  args: InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>,
) {
  return ['users', '/users/:user_id/feed', args] as const
}

export function useGetUsersUserIdFeed<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>
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
        ? getGetUsersUserIdFeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].feed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdFeed<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>
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
        ? getGetUsersUserIdFeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['feed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].feed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdFollowersKey(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
) {
  return ['users', '/users/:user_id/followers', args] as const
}

export function useGetUsersUserIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
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
        ? getGetUsersUserIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
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
        ? getGetUsersUserIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdFollowingKey(
  args: InferRequestType<(typeof client.users)[':user_id']['following']['$get']>,
) {
  return ['users', '/users/:user_id/following', args] as const
}

export function useGetUsersUserIdFollowing<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
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
        ? getGetUsersUserIdFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdFollowing<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
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
        ? getGetUsersUserIdFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdFollowingKey() {
  return ['users', '/users/:user_id/following', 'POST'] as const
}

export function usePostUsersUserIdFollowing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['following']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['following']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdFollowingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['following']['$post']> },
      ) => parseResponse(client.users[':user_id'].following.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdFollowingFollowUserIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>,
) {
  return ['users', '/users/:user_id/following/:follow_user_id', args] as const
}

export function useGetUsersUserIdFollowingFollowUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
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
        ? getGetUsersUserIdFollowingFollowUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].following[':follow_user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdFollowingFollowUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
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
        ? getGetUsersUserIdFollowingFollowUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].following[':follow_user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdFollowingFollowUserIdKey() {
  return ['users', '/users/:user_id/following/:follow_user_id', 'PUT'] as const
}

export function usePutUsersUserIdFollowingFollowUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdFollowingFollowUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['following'][':follow_user_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].following[':follow_user_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdFollowingFollowUserIdKey() {
  return ['users', '/users/:user_id/following/:follow_user_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdFollowingFollowUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdFollowingFollowUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['following'][':follow_user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].following[':follow_user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdGroupsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
) {
  return ['users', '/users/:user_id/groups', args] as const
}

export function useGetUsersUserIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
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
        ? getGetUsersUserIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
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
        ? getGetUsersUserIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdGroupsGroupIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>,
) {
  return ['users', '/users/:user_id/groups/:group_id', args] as const
}

export function useGetUsersUserIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
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
        ? getGetUsersUserIdGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
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
        ? getGetUsersUserIdGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdGroupsGroupIdKey() {
  return ['users', '/users/:user_id/groups/:group_id', 'PUT'] as const
}

export function usePutUsersUserIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$put']>
        },
      ) => parseResponse(client.users[':user_id'].groups[':group_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdGroupsGroupIdKey() {
  return ['users', '/users/:user_id/groups/:group_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['groups'][':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$delete']>
        },
      ) => parseResponse(client.users[':user_id'].groups[':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdLikesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>,
) {
  return ['users', '/users/:user_id/likes', args] as const
}

export function useGetUsersUserIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>
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
        ? getGetUsersUserIdLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>
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
        ? getGetUsersUserIdLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdLikesVideoIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>,
) {
  return ['users', '/users/:user_id/likes/:video_id', args] as const
}

export function useGetUsersUserIdLikesVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
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
        ? getGetUsersUserIdLikesVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].likes[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdLikesVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
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
        ? getGetUsersUserIdLikesVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].likes[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdLikesVideoIdKey() {
  return ['users', '/users/:user_id/likes/:video_id', 'PUT'] as const
}

export function usePutUsersUserIdLikesVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdLikesVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>
        },
      ) => parseResponse(client.users[':user_id'].likes[':video_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdLikesVideoIdKey() {
  return ['users', '/users/:user_id/likes/:video_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdLikesVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes'][':video_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdLikesVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$delete']>
        },
      ) => parseResponse(client.users[':user_id'].likes[':video_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdOndemandPagesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>,
) {
  return ['users', '/users/:user_id/ondemand/pages', args] as const
}

export function useGetUsersUserIdOndemandPages<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
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
        ? getGetUsersUserIdOndemandPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].ondemand.pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdOndemandPages<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
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
        ? getGetUsersUserIdOndemandPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].ondemand.pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdOndemandPagesKey() {
  return ['users', '/users/:user_id/ondemand/pages', 'POST'] as const
}

export function usePostUsersUserIdOndemandPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['pages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdOndemandPagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$post']>
        },
      ) => parseResponse(client.users[':user_id'].ondemand.pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdOndemandPurchasesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>,
) {
  return ['users', '/users/:user_id/ondemand/purchases', args] as const
}

export function useGetUsersUserIdOndemandPurchases<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>>
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
        ? getGetUsersUserIdOndemandPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].ondemand.purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdOndemandPurchases<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>>
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
        ? getGetUsersUserIdOndemandPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].ondemand.purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPicturesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>,
) {
  return ['users', '/users/:user_id/pictures', args] as const
}

export function useGetUsersUserIdPictures<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
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
        ? getGetUsersUserIdPicturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].pictures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPictures<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
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
        ? getGetUsersUserIdPicturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].pictures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdPicturesKey() {
  return ['users', '/users/:user_id/pictures', 'POST'] as const
}

export function usePostUsersUserIdPictures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['pictures']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['pictures']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdPicturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['pictures']['$post']> },
      ) => parseResponse(client.users[':user_id'].pictures.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdPicturesPortraitsetIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>,
) {
  return ['users', '/users/:user_id/pictures/:portraitset_id', args] as const
}

export function useGetUsersUserIdPicturesPortraitsetId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
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
        ? getGetUsersUserIdPicturesPortraitsetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].pictures[':portraitset_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPicturesPortraitsetId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
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
        ? getGetUsersUserIdPicturesPortraitsetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].pictures[':portraitset_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdPicturesPortraitsetIdKey() {
  return ['users', '/users/:user_id/pictures/:portraitset_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdPicturesPortraitsetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdPicturesPortraitsetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].pictures[':portraitset_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdPicturesPortraitsetIdKey() {
  return ['users', '/users/:user_id/pictures/:portraitset_id', 'PATCH'] as const
}

export function usePatchUsersUserIdPicturesPortraitsetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdPicturesPortraitsetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].pictures[':portraitset_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdPortfoliosKey(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>,
) {
  return ['users', '/users/:user_id/portfolios', args] as const
}

export function useGetUsersUserIdPortfolios<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
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
        ? getGetUsersUserIdPortfoliosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].portfolios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPortfolios<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
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
        ? getGetUsersUserIdPortfoliosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['portfolios']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].portfolios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPortfoliosPortfolioIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>,
) {
  return ['users', '/users/:user_id/portfolios/:portfolio_id', args] as const
}

export function useGetUsersUserIdPortfoliosPortfolioId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
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
        ? getGetUsersUserIdPortfoliosPortfolioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].portfolios[':portfolio_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPortfoliosPortfolioId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
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
        ? getGetUsersUserIdPortfoliosPortfolioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].portfolios[':portfolio_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPortfoliosPortfolioIdVideosKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
  >,
) {
  return ['users', '/users/:user_id/portfolios/:portfolio_id/videos', args] as const
}

export function useGetUsersUserIdPortfoliosPortfolioIdVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdPortfoliosPortfolioIdVideosKey(args)
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
                (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
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
          client.users[':user_id'].portfolios[':portfolio_id'].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPortfoliosPortfolioIdVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdPortfoliosPortfolioIdVideosKey(args)
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
                (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
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
          client.users[':user_id'].portfolios[':portfolio_id'].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPortfoliosPortfolioIdVideosVideoIdKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
  >,
) {
  return ['users', '/users/:user_id/portfolios/:portfolio_id/videos/:video_id', args] as const
}

export function useGetUsersUserIdPortfoliosPortfolioIdVideosVideoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdPortfoliosPortfolioIdVideosVideoIdKey(args)
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
                (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
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
          client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPortfoliosPortfolioIdVideosVideoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdPortfoliosPortfolioIdVideosVideoIdKey(args)
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
                (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
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
          client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdPortfoliosPortfolioIdVideosVideoIdKey() {
  return ['users', '/users/:user_id/portfolios/:portfolio_id/videos/:video_id', 'PUT'] as const
}

export function usePutUsersUserIdPortfoliosPortfolioIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdPortfoliosPortfolioIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdKey() {
  return ['users', '/users/:user_id/portfolios/:portfolio_id/videos/:video_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdPortfoliosPortfolioIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdPresetsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>,
) {
  return ['users', '/users/:user_id/presets', args] as const
}

export function useGetUsersUserIdPresets<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
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
        ? getGetUsersUserIdPresetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].presets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPresets<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
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
        ? getGetUsersUserIdPresetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['presets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].presets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPresetsPresetIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>,
) {
  return ['users', '/users/:user_id/presets/:preset_id', args] as const
}

export function useGetUsersUserIdPresetsPresetId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>>
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
        ? getGetUsersUserIdPresetsPresetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].presets[':preset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPresetsPresetId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>>
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
        ? getGetUsersUserIdPresetsPresetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].presets[':preset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersUserIdPresetsPresetIdKey() {
  return ['users', '/users/:user_id/presets/:preset_id', 'PATCH'] as const
}

export function usePatchUsersUserIdPresetsPresetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['presets'][':preset_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdPresetsPresetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['presets'][':preset_id']['$patch']
          >
        },
      ) => parseResponse(client.users[':user_id'].presets[':preset_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdPresetsPresetIdVideosKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
  >,
) {
  return ['users', '/users/:user_id/presets/:preset_id/videos', args] as const
}

export function useGetUsersUserIdPresetsPresetIdVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdPresetsPresetIdVideosKey(args)
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
                (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
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
          client.users[':user_id'].presets[':preset_id'].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPresetsPresetIdVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdPresetsPresetIdVideosKey(args)
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
                (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
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
          client.users[':user_id'].presets[':preset_id'].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdProjectsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>,
) {
  return ['users', '/users/:user_id/projects', args] as const
}

export function useGetUsersUserIdProjects<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
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
        ? getGetUsersUserIdProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdProjects<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
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
        ? getGetUsersUserIdProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdProjectsKey() {
  return ['users', '/users/:user_id/projects', 'POST'] as const
}

export function usePostUsersUserIdProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['projects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['projects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['projects']['$post']> },
      ) => parseResponse(client.users[':user_id'].projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdProjectsProjectIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>,
) {
  return ['users', '/users/:user_id/projects/:project_id', args] as const
}

export function useGetUsersUserIdProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>
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
        ? getGetUsersUserIdProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>
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
        ? getGetUsersUserIdProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdProjectsProjectIdKey() {
  return ['users', '/users/:user_id/projects/:project_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['projects'][':project_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.users[':user_id'].projects[':project_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdProjectsProjectIdKey() {
  return ['users', '/users/:user_id/projects/:project_id', 'PATCH'] as const
}

export function usePatchUsersUserIdProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['projects'][':project_id']['$patch']
          >
        },
      ) =>
        parseResponse(client.users[':user_id'].projects[':project_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdProjectsProjectIdVideosKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
  >,
) {
  return ['users', '/users/:user_id/projects/:project_id/videos', args] as const
}

export function useGetUsersUserIdProjectsProjectIdVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdProjectsProjectIdVideosKey(args)
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
                (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
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
          client.users[':user_id'].projects[':project_id'].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdProjectsProjectIdVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdProjectsProjectIdVideosKey(args)
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
                (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
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
          client.users[':user_id'].projects[':project_id'].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdProjectsProjectIdVideosKey() {
  return ['users', '/users/:user_id/projects/:project_id/videos', 'PUT'] as const
}

export function usePutUsersUserIdProjectsProjectIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['videos']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdProjectsProjectIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].projects[':project_id'].videos.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdProjectsProjectIdVideosKey() {
  return ['users', '/users/:user_id/projects/:project_id/videos', 'DELETE'] as const
}

export function useDeleteUsersUserIdProjectsProjectIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdProjectsProjectIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].projects[':project_id'].videos.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIdProjectsProjectIdVideosVideoIdKey() {
  return ['users', '/users/:user_id/projects/:project_id/videos/:video_id', 'PUT'] as const
}

export function usePutUsersUserIdProjectsProjectIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdProjectsProjectIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].projects[':project_id'].videos[':video_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdProjectsProjectIdVideosVideoIdKey() {
  return ['users', '/users/:user_id/projects/:project_id/videos/:video_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdProjectsProjectIdVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdProjectsProjectIdVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].projects[':project_id'].videos[':video_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdUploadsUploadKey(
  args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>,
) {
  return ['users', '/users/:user_id/uploads/:upload', args] as const
}

export function useGetUsersUserIdUploadsUpload<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>>
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
        ? getGetUsersUserIdUploadsUploadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].uploads[':upload'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdUploadsUpload<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>>
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
        ? getGetUsersUserIdUploadsUploadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].uploads[':upload'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdUploadsUploadKey() {
  return ['users', '/users/:user_id/uploads/:upload', 'DELETE'] as const
}

export function useDeleteUsersUserIdUploadsUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['uploads'][':upload']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdUploadsUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload']['$delete']>
        },
      ) => parseResponse(client.users[':user_id'].uploads[':upload'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdVideosKey(
  args: InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>,
) {
  return ['users', '/users/:user_id/videos', args] as const
}

export function useGetUsersUserIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>
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
        ? getGetUsersUserIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>
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
        ? getGetUsersUserIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdVideosKey() {
  return ['users', '/users/:user_id/videos', 'POST'] as const
}

export function usePostUsersUserIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['videos']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['videos']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['videos']['$post']> },
      ) => parseResponse(client.users[':user_id'].videos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdVideosVideoIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>,
) {
  return ['users', '/users/:user_id/videos/:video_id', args] as const
}

export function useGetUsersUserIdVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
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
        ? getGetUsersUserIdVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
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
        ? getGetUsersUserIdVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdWatchlaterKey(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>,
) {
  return ['users', '/users/:user_id/watchlater', args] as const
}

export function useGetUsersUserIdWatchlater<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
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
        ? getGetUsersUserIdWatchlaterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].watchlater.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdWatchlater<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
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
        ? getGetUsersUserIdWatchlaterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['watchlater']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].watchlater.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdWatchlaterVideoIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>,
) {
  return ['users', '/users/:user_id/watchlater/:video_id', args] as const
}

export function useGetUsersUserIdWatchlaterVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>
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
        ? getGetUsersUserIdWatchlaterVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].watchlater[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdWatchlaterVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>
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
        ? getGetUsersUserIdWatchlaterVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].watchlater[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdWatchlaterVideoIdKey() {
  return ['users', '/users/:user_id/watchlater/:video_id', 'PUT'] as const
}

export function usePutUsersUserIdWatchlaterVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdWatchlaterVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['watchlater'][':video_id']['$put']
          >
        },
      ) => parseResponse(client.users[':user_id'].watchlater[':video_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdWatchlaterVideoIdKey() {
  return ['users', '/users/:user_id/watchlater/:video_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdWatchlaterVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdWatchlaterVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':user_id']['watchlater'][':video_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.users[':user_id'].watchlater[':video_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosKey(args: InferRequestType<typeof client.videos.$get>) {
  return ['videos', '/videos', args] as const
}

export function useGetVideos<TError = unknown>(
  args: InferRequestType<typeof client.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.videos.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVideos<TError = unknown>(
  args: InferRequestType<typeof client.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.videos.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetVideosVideoIdKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
) {
  return ['videos', '/videos/:video_id', args] as const
}

export function useGetVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetVideosVideoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetVideosVideoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVideosVideoIdKey() {
  return ['videos', '/videos/:video_id', 'DELETE'] as const
}

export function useDeleteVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.videos)[':video_id']['$delete']> },
      ) => parseResponse(client.videos[':video_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVideosVideoIdKey() {
  return ['videos', '/videos/:video_id', 'PATCH'] as const
}

export function usePatchVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':video_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.videos)[':video_id']['$patch']> },
      ) => parseResponse(client.videos[':video_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdAvailableChannelsKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>,
) {
  return ['videos', '/videos/:video_id/available_channels', args] as const
}

export function useGetVideosVideoIdAvailableChannels<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
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
        ? getGetVideosVideoIdAvailableChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].available_channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdAvailableChannels<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
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
        ? getGetVideosVideoIdAvailableChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['available_channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].available_channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideosVideoIdCategoriesKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>,
) {
  return ['videos', '/videos/:video_id/categories', args] as const
}

export function useGetVideosVideoIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
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
        ? getGetVideosVideoIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
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
        ? getGetVideosVideoIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVideosVideoIdCategoriesKey() {
  return ['videos', '/videos/:video_id/categories', 'PUT'] as const
}

export function usePutVideosVideoIdCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['categories']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['categories']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVideosVideoIdCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.videos)[':video_id']['categories']['$put']> },
      ) => parseResponse(client.videos[':video_id'].categories.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdCommentsKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>,
) {
  return ['videos', '/videos/:video_id/comments', args] as const
}

export function useGetVideosVideoIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
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
        ? getGetVideosVideoIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
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
        ? getGetVideosVideoIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideosVideoIdCommentsKey() {
  return ['videos', '/videos/:video_id/comments', 'POST'] as const
}

export function usePostVideosVideoIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.videos)[':video_id']['comments']['$post']> },
      ) => parseResponse(client.videos[':video_id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdCommentsCommentIdKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>,
) {
  return ['videos', '/videos/:video_id/comments/:comment_id', args] as const
}

export function useGetVideosVideoIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
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
        ? getGetVideosVideoIdCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].comments[':comment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
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
        ? getGetVideosVideoIdCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].comments[':comment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVideosVideoIdCommentsCommentIdKey() {
  return ['videos', '/videos/:video_id/comments/:comment_id', 'DELETE'] as const
}

export function useDeleteVideosVideoIdCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdCommentsCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['comments'][':comment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].comments[':comment_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchVideosVideoIdCommentsCommentIdKey() {
  return ['videos', '/videos/:video_id/comments/:comment_id', 'PATCH'] as const
}

export function usePatchVideosVideoIdCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVideosVideoIdCommentsCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['comments'][':comment_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].comments[':comment_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdCommentsCommentIdRepliesKey(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
  >,
) {
  return ['videos', '/videos/:video_id/comments/:comment_id/replies', args] as const
}

export function useGetVideosVideoIdCommentsCommentIdReplies<TError = unknown>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosVideoIdCommentsCommentIdRepliesKey(args)
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
                (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
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
          client.videos[':video_id'].comments[':comment_id'].replies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdCommentsCommentIdReplies<TError = unknown>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosVideoIdCommentsCommentIdRepliesKey(args)
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
                (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
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
          client.videos[':video_id'].comments[':comment_id'].replies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVideosVideoIdCommentsCommentIdRepliesKey() {
  return ['videos', '/videos/:video_id/comments/:comment_id/replies', 'POST'] as const
}

export function usePostVideosVideoIdCommentsCommentIdReplies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdCommentsCommentIdRepliesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].comments[':comment_id'].replies.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdCreditsKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>,
) {
  return ['videos', '/videos/:video_id/credits', args] as const
}

export function useGetVideosVideoIdCredits<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
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
        ? getGetVideosVideoIdCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdCredits<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
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
        ? getGetVideosVideoIdCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideosVideoIdCreditsKey() {
  return ['videos', '/videos/:video_id/credits', 'POST'] as const
}

export function usePostVideosVideoIdCredits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['credits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['credits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdCreditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.videos)[':video_id']['credits']['$post']> },
      ) => parseResponse(client.videos[':video_id'].credits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdCreditsCreditIdKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>,
) {
  return ['videos', '/videos/:video_id/credits/:credit_id', args] as const
}

export function useGetVideosVideoIdCreditsCreditId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>
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
        ? getGetVideosVideoIdCreditsCreditIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].credits[':credit_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdCreditsCreditId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>
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
        ? getGetVideosVideoIdCreditsCreditIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].credits[':credit_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVideosVideoIdCreditsCreditIdKey() {
  return ['videos', '/videos/:video_id/credits/:credit_id', 'DELETE'] as const
}

export function useDeleteVideosVideoIdCreditsCreditId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdCreditsCreditIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['credits'][':credit_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.videos[':video_id'].credits[':credit_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVideosVideoIdCreditsCreditIdKey() {
  return ['videos', '/videos/:video_id/credits/:credit_id', 'PATCH'] as const
}

export function usePatchVideosVideoIdCreditsCreditId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVideosVideoIdCreditsCreditIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['credits'][':credit_id']['$patch']
          >
        },
      ) =>
        parseResponse(client.videos[':video_id'].credits[':credit_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdLikesKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>,
) {
  return ['videos', '/videos/:video_id/likes', args] as const
}

export function useGetVideosVideoIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
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
        ? getGetVideosVideoIdLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
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
        ? getGetVideosVideoIdLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideosVideoIdPicturesKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>,
) {
  return ['videos', '/videos/:video_id/pictures', args] as const
}

export function useGetVideosVideoIdPictures<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
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
        ? getGetVideosVideoIdPicturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].pictures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdPictures<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
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
        ? getGetVideosVideoIdPicturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].pictures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideosVideoIdPicturesKey() {
  return ['videos', '/videos/:video_id/pictures', 'POST'] as const
}

export function usePostVideosVideoIdPictures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['pictures']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['pictures']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdPicturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$post']> },
      ) => parseResponse(client.videos[':video_id'].pictures.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdPicturesPictureIdKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>,
) {
  return ['videos', '/videos/:video_id/pictures/:picture_id', args] as const
}

export function useGetVideosVideoIdPicturesPictureId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
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
        ? getGetVideosVideoIdPicturesPictureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].pictures[':picture_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdPicturesPictureId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
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
        ? getGetVideosVideoIdPicturesPictureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].pictures[':picture_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVideosVideoIdPicturesPictureIdKey() {
  return ['videos', '/videos/:video_id/pictures/:picture_id', 'DELETE'] as const
}

export function useDeleteVideosVideoIdPicturesPictureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdPicturesPictureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['pictures'][':picture_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].pictures[':picture_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchVideosVideoIdPicturesPictureIdKey() {
  return ['videos', '/videos/:video_id/pictures/:picture_id', 'PATCH'] as const
}

export function usePatchVideosVideoIdPicturesPictureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVideosVideoIdPicturesPictureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['pictures'][':picture_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].pictures[':picture_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdPresetsPresetIdKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>,
) {
  return ['videos', '/videos/:video_id/presets/:preset_id', args] as const
}

export function useGetVideosVideoIdPresetsPresetId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>
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
        ? getGetVideosVideoIdPresetsPresetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].presets[':preset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdPresetsPresetId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>
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
        ? getGetVideosVideoIdPresetsPresetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].presets[':preset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVideosVideoIdPresetsPresetIdKey() {
  return ['videos', '/videos/:video_id/presets/:preset_id', 'PUT'] as const
}

export function usePutVideosVideoIdPresetsPresetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVideosVideoIdPresetsPresetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['presets'][':preset_id']['$put']
          >
        },
      ) => parseResponse(client.videos[':video_id'].presets[':preset_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVideosVideoIdPresetsPresetIdKey() {
  return ['videos', '/videos/:video_id/presets/:preset_id', 'DELETE'] as const
}

export function useDeleteVideosVideoIdPresetsPresetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdPresetsPresetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['presets'][':preset_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.videos[':video_id'].presets[':preset_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdPrivacyDomainsKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>,
) {
  return ['videos', '/videos/:video_id/privacy/domains', args] as const
}

export function useGetVideosVideoIdPrivacyDomains<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
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
        ? getGetVideosVideoIdPrivacyDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].privacy.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdPrivacyDomains<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
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
        ? getGetVideosVideoIdPrivacyDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':video_id'].privacy.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVideosVideoIdPrivacyDomainsDomainKey() {
  return ['videos', '/videos/:video_id/privacy/domains/:domain', 'PUT'] as const
}

export function usePutVideosVideoIdPrivacyDomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVideosVideoIdPrivacyDomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$put']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].privacy.domains[':domain'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVideosVideoIdPrivacyDomainsDomainKey() {
  return ['videos', '/videos/:video_id/privacy/domains/:domain', 'DELETE'] as const
}

export function useDeleteVideosVideoIdPrivacyDomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdPrivacyDomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].privacy.domains[':domain'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdPrivacyUsersKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>,
) {
  return ['videos', '/videos/:video_id/privacy/users', args] as const
}

export function useGetVideosVideoIdPrivacyUsers<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
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
        ? getGetVideosVideoIdPrivacyUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].privacy.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdPrivacyUsers<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
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
        ? getGetVideosVideoIdPrivacyUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].privacy.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVideosVideoIdPrivacyUsersKey() {
  return ['videos', '/videos/:video_id/privacy/users', 'PUT'] as const
}

export function usePutVideosVideoIdPrivacyUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['privacy']['users']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVideosVideoIdPrivacyUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$put']>
        },
      ) => parseResponse(client.videos[':video_id'].privacy.users.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVideosVideoIdPrivacyUsersUserIdKey() {
  return ['videos', '/videos/:video_id/privacy/users/:user_id', 'PUT'] as const
}

export function usePutVideosVideoIdPrivacyUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVideosVideoIdPrivacyUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].privacy.users[':user_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVideosVideoIdPrivacyUsersUserIdKey() {
  return ['videos', '/videos/:video_id/privacy/users/:user_id', 'DELETE'] as const
}

export function useDeleteVideosVideoIdPrivacyUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdPrivacyUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].privacy.users[':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdTagsKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>,
) {
  return ['videos', '/videos/:video_id/tags', args] as const
}

export function useGetVideosVideoIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>
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
        ? getGetVideosVideoIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>
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
        ? getGetVideosVideoIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVideosVideoIdTagsKey() {
  return ['videos', '/videos/:video_id/tags', 'PUT'] as const
}

export function usePutVideosVideoIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['tags']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['tags']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVideosVideoIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.videos)[':video_id']['tags']['$put']> },
      ) => parseResponse(client.videos[':video_id'].tags.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdTagsWordKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>,
) {
  return ['videos', '/videos/:video_id/tags/:word', args] as const
}

export function useGetVideosVideoIdTagsWord<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
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
        ? getGetVideosVideoIdTagsWordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].tags[':word'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdTagsWord<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
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
        ? getGetVideosVideoIdTagsWordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].tags[':word'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVideosVideoIdTagsWordKey() {
  return ['videos', '/videos/:video_id/tags/:word', 'PUT'] as const
}

export function usePutVideosVideoIdTagsWord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVideosVideoIdTagsWordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$put']> },
      ) => parseResponse(client.videos[':video_id'].tags[':word'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVideosVideoIdTagsWordKey() {
  return ['videos', '/videos/:video_id/tags/:word', 'DELETE'] as const
}

export function useDeleteVideosVideoIdTagsWord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdTagsWordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>
        },
      ) => parseResponse(client.videos[':video_id'].tags[':word'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdTexttracksKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>,
) {
  return ['videos', '/videos/:video_id/texttracks', args] as const
}

export function useGetVideosVideoIdTexttracks<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
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
        ? getGetVideosVideoIdTexttracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].texttracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdTexttracks<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
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
        ? getGetVideosVideoIdTexttracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].texttracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideosVideoIdTexttracksKey() {
  return ['videos', '/videos/:video_id/texttracks', 'POST'] as const
}

export function usePostVideosVideoIdTexttracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['texttracks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdTexttracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$post']> },
      ) => parseResponse(client.videos[':video_id'].texttracks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdTexttracksTexttrackIdKey(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
  >,
) {
  return ['videos', '/videos/:video_id/texttracks/:texttrack_id', args] as const
}

export function useGetVideosVideoIdTexttracksTexttrackId<TError = unknown>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
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
        ? getGetVideosVideoIdTexttracksTexttrackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.videos[':video_id'].texttracks[':texttrack_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdTexttracksTexttrackId<TError = unknown>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
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
        ? getGetVideosVideoIdTexttracksTexttrackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.videos[':video_id'].texttracks[':texttrack_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteVideosVideoIdTexttracksTexttrackIdKey() {
  return ['videos', '/videos/:video_id/texttracks/:texttrack_id', 'DELETE'] as const
}

export function useDeleteVideosVideoIdTexttracksTexttrackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdTexttracksTexttrackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].texttracks[':texttrack_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchVideosVideoIdTexttracksTexttrackIdKey() {
  return ['videos', '/videos/:video_id/texttracks/:texttrack_id', 'PATCH'] as const
}

export function usePatchVideosVideoIdTexttracksTexttrackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVideosVideoIdTexttracksTexttrackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.videos[':video_id'].texttracks[':texttrack_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVideosVideoIdTimelinethumbnailsKey() {
  return ['videos', '/videos/:video_id/timelinethumbnails', 'POST'] as const
}

export function usePostVideosVideoIdTimelinethumbnails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['timelinethumbnails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['timelinethumbnails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdTimelinethumbnailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.videos)[':video_id']['timelinethumbnails']['$post']>
        },
      ) => parseResponse(client.videos[':video_id'].timelinethumbnails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdTimelinethumbnailsThumbnailIdKey(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
  >,
) {
  return ['videos', '/videos/:video_id/timelinethumbnails/:thumbnail_id', args] as const
}

export function useGetVideosVideoIdTimelinethumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosVideoIdTimelinethumbnailsThumbnailIdKey(args)
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
                (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
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
          client.videos[':video_id'].timelinethumbnails[':thumbnail_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdTimelinethumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosVideoIdTimelinethumbnailsThumbnailIdKey(args)
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
                (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
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
          client.videos[':video_id'].timelinethumbnails[':thumbnail_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVideosVideoIdVersionsKey() {
  return ['videos', '/videos/:video_id/versions', 'POST'] as const
}

export function usePostVideosVideoIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':video_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':video_id']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.videos)[':video_id']['versions']['$post']> },
      ) => parseResponse(client.videos[':video_id'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdVideosKey(
  args: InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>,
) {
  return ['videos', '/videos/:video_id/videos', args] as const
}

export function useGetVideosVideoIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
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
        ? getGetVideosVideoIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
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
        ? getGetVideosVideoIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':video_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':video_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
