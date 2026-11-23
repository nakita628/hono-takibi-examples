import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getYoutubeKey() {
  return ['youtube'] as const
}

export function getPostYoutubeV3AbuseReportsKey() {
  return ['youtube', '/youtube/v3/abuseReports', 'POST'] as const
}

export function usePostYoutubeV3AbuseReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.abuseReports.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.abuseReports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3AbuseReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.abuseReports.$post> },
      ) => parseResponse(client.youtube.v3.abuseReports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3ActivitiesKey(
  args: InferRequestType<typeof client.youtube.v3.activities.$get>,
) {
  return ['youtube', '/youtube/v3/activities', args] as const
}

export function useGetYoutubeV3Activities<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.activities.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3ActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3Activities<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.activities.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3ActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetYoutubeV3CaptionsKey(
  args: InferRequestType<typeof client.youtube.v3.captions.$get>,
) {
  return ['youtube', '/youtube/v3/captions', args] as const
}

export function useGetYoutubeV3Captions<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.captions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3CaptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.captions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3Captions<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.captions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3CaptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.captions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3CaptionsKey() {
  return ['youtube', '/youtube/v3/captions', 'PUT'] as const
}

export function usePutYoutubeV3Captions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.captions.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3CaptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.youtube.v3.captions.$put> }) =>
        parseResponse(client.youtube.v3.captions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3CaptionsKey() {
  return ['youtube', '/youtube/v3/captions', 'POST'] as const
}

export function usePostYoutubeV3Captions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.captions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3CaptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.youtube.v3.captions.$post> }) =>
        parseResponse(client.youtube.v3.captions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3CaptionsKey() {
  return ['youtube', '/youtube/v3/captions', 'DELETE'] as const
}

export function useDeleteYoutubeV3Captions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.captions.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3CaptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.captions.$delete> },
      ) => parseResponse(client.youtube.v3.captions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3CaptionsIdKey(
  args: InferRequestType<(typeof client.youtube.v3.captions)[':id']['$get']>,
) {
  return ['youtube', '/youtube/v3/captions/:id', args] as const
}

export function useGetYoutubeV3CaptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.youtube.v3.captions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.youtube.v3.captions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3CaptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.youtube.v3.captions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.captions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3CaptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.youtube.v3.captions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.youtube.v3.captions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3CaptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.youtube.v3.captions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.captions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostYoutubeV3ChannelBannersInsertKey() {
  return ['youtube', '/youtube/v3/channelBanners/insert', 'POST'] as const
}

export function usePostYoutubeV3ChannelBannersInsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.channelBanners.insert.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.channelBanners.insert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3ChannelBannersInsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.channelBanners.insert.$post> },
      ) => parseResponse(client.youtube.v3.channelBanners.insert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3ChannelSectionsKey(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$get>,
) {
  return ['youtube', '/youtube/v3/channelSections', args] as const
}

export function useGetYoutubeV3ChannelSections<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3ChannelSectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.channelSections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3ChannelSections<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3ChannelSectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.channelSections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3ChannelSectionsKey() {
  return ['youtube', '/youtube/v3/channelSections', 'PUT'] as const
}

export function usePutYoutubeV3ChannelSections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.channelSections.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3ChannelSectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.channelSections.$put> },
      ) => parseResponse(client.youtube.v3.channelSections.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3ChannelSectionsKey() {
  return ['youtube', '/youtube/v3/channelSections', 'POST'] as const
}

export function usePostYoutubeV3ChannelSections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.channelSections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3ChannelSectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.channelSections.$post> },
      ) => parseResponse(client.youtube.v3.channelSections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3ChannelSectionsKey() {
  return ['youtube', '/youtube/v3/channelSections', 'DELETE'] as const
}

export function useDeleteYoutubeV3ChannelSections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.channelSections.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3ChannelSectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.channelSections.$delete> },
      ) => parseResponse(client.youtube.v3.channelSections.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3ChannelsKey(
  args: InferRequestType<typeof client.youtube.v3.channels.$get>,
) {
  return ['youtube', '/youtube/v3/channels', args] as const
}

export function useGetYoutubeV3Channels<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3ChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3Channels<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3ChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3ChannelsKey() {
  return ['youtube', '/youtube/v3/channels', 'PUT'] as const
}

export function usePutYoutubeV3Channels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.channels.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3ChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.youtube.v3.channels.$put> }) =>
        parseResponse(client.youtube.v3.channels.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3CommentThreadsKey(
  args: InferRequestType<typeof client.youtube.v3.commentThreads.$get>,
) {
  return ['youtube', '/youtube/v3/commentThreads', args] as const
}

export function useGetYoutubeV3CommentThreads<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.commentThreads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3CommentThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.commentThreads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3CommentThreads<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.commentThreads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3CommentThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.commentThreads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3CommentThreadsKey() {
  return ['youtube', '/youtube/v3/commentThreads', 'PUT'] as const
}

export function usePutYoutubeV3CommentThreads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.commentThreads.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3CommentThreadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.commentThreads.$put> },
      ) => parseResponse(client.youtube.v3.commentThreads.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3CommentThreadsKey() {
  return ['youtube', '/youtube/v3/commentThreads', 'POST'] as const
}

export function usePostYoutubeV3CommentThreads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.commentThreads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3CommentThreadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.commentThreads.$post> },
      ) => parseResponse(client.youtube.v3.commentThreads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3CommentsKey(
  args: InferRequestType<typeof client.youtube.v3.comments.$get>,
) {
  return ['youtube', '/youtube/v3/comments', args] as const
}

export function useGetYoutubeV3Comments<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3CommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3Comments<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3CommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3CommentsKey() {
  return ['youtube', '/youtube/v3/comments', 'PUT'] as const
}

export function usePutYoutubeV3Comments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.comments.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3CommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.youtube.v3.comments.$put> }) =>
        parseResponse(client.youtube.v3.comments.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3CommentsKey() {
  return ['youtube', '/youtube/v3/comments', 'POST'] as const
}

export function usePostYoutubeV3Comments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.comments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3CommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.youtube.v3.comments.$post> }) =>
        parseResponse(client.youtube.v3.comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3CommentsKey() {
  return ['youtube', '/youtube/v3/comments', 'DELETE'] as const
}

export function useDeleteYoutubeV3Comments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.comments.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3CommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.comments.$delete> },
      ) => parseResponse(client.youtube.v3.comments.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3CommentsMarkAsSpamKey() {
  return ['youtube', '/youtube/v3/comments/markAsSpam', 'POST'] as const
}

export function usePostYoutubeV3CommentsMarkAsSpam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.comments.markAsSpam.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.comments.markAsSpam.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3CommentsMarkAsSpamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.comments.markAsSpam.$post> },
      ) => parseResponse(client.youtube.v3.comments.markAsSpam.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3CommentsSetModerationStatusKey() {
  return ['youtube', '/youtube/v3/comments/setModerationStatus', 'POST'] as const
}

export function usePostYoutubeV3CommentsSetModerationStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.comments.setModerationStatus.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.comments.setModerationStatus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3CommentsSetModerationStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.youtube.v3.comments.setModerationStatus.$post> },
      ) => parseResponse(client.youtube.v3.comments.setModerationStatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3I18nLanguagesKey(
  args: InferRequestType<typeof client.youtube.v3.i18nLanguages.$get>,
) {
  return ['youtube', '/youtube/v3/i18nLanguages', args] as const
}

export function useGetYoutubeV3I18nLanguages<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.i18nLanguages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nLanguages.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3I18nLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nLanguages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.i18nLanguages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3I18nLanguages<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.i18nLanguages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nLanguages.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3I18nLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nLanguages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.i18nLanguages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetYoutubeV3I18nRegionsKey(
  args: InferRequestType<typeof client.youtube.v3.i18nRegions.$get>,
) {
  return ['youtube', '/youtube/v3/i18nRegions', args] as const
}

export function useGetYoutubeV3I18nRegions<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.i18nRegions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nRegions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3I18nRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nRegions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.i18nRegions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3I18nRegions<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.i18nRegions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nRegions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3I18nRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nRegions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.i18nRegions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetYoutubeV3LiveBroadcastsKey(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$get>,
) {
  return ['youtube', '/youtube/v3/liveBroadcasts', args] as const
}

export function useGetYoutubeV3LiveBroadcasts<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3LiveBroadcastsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.liveBroadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3LiveBroadcasts<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3LiveBroadcastsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.liveBroadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3LiveBroadcastsKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts', 'PUT'] as const
}

export function usePutYoutubeV3LiveBroadcasts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3LiveBroadcastsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$put> },
      ) => parseResponse(client.youtube.v3.liveBroadcasts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3LiveBroadcastsKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts', 'POST'] as const
}

export function usePostYoutubeV3LiveBroadcasts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3LiveBroadcastsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$post> },
      ) => parseResponse(client.youtube.v3.liveBroadcasts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3LiveBroadcastsKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts', 'DELETE'] as const
}

export function useDeleteYoutubeV3LiveBroadcasts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3LiveBroadcastsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$delete> },
      ) => parseResponse(client.youtube.v3.liveBroadcasts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3LiveBroadcastsBindKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts/bind', 'POST'] as const
}

export function usePostYoutubeV3LiveBroadcastsBind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.bind.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.bind.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3LiveBroadcastsBindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveBroadcasts.bind.$post> },
      ) => parseResponse(client.youtube.v3.liveBroadcasts.bind.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3LiveBroadcastsCuepointKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts/cuepoint', 'POST'] as const
}

export function usePostYoutubeV3LiveBroadcastsCuepoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.cuepoint.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.cuepoint.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3LiveBroadcastsCuepointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveBroadcasts.cuepoint.$post> },
      ) => parseResponse(client.youtube.v3.liveBroadcasts.cuepoint.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3LiveBroadcastsTransitionKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts/transition', 'POST'] as const
}

export function usePostYoutubeV3LiveBroadcastsTransition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.transition.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.transition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3LiveBroadcastsTransitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.youtube.v3.liveBroadcasts.transition.$post> },
      ) => parseResponse(client.youtube.v3.liveBroadcasts.transition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3LiveChatBansKey() {
  return ['youtube', '/youtube/v3/liveChat/bans', 'POST'] as const
}

export function usePostYoutubeV3LiveChatBans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.bans.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveChat.bans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3LiveChatBansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveChat.bans.$post> },
      ) => parseResponse(client.youtube.v3.liveChat.bans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3LiveChatBansKey() {
  return ['youtube', '/youtube/v3/liveChat/bans', 'DELETE'] as const
}

export function useDeleteYoutubeV3LiveChatBans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.bans.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveChat.bans.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3LiveChatBansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveChat.bans.$delete> },
      ) => parseResponse(client.youtube.v3.liveChat.bans.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3LiveChatMessagesKey(
  args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$get>,
) {
  return ['youtube', '/youtube/v3/liveChat/messages', args] as const
}

export function useGetYoutubeV3LiveChatMessages<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3LiveChatMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.liveChat.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3LiveChatMessages<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3LiveChatMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.liveChat.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostYoutubeV3LiveChatMessagesKey() {
  return ['youtube', '/youtube/v3/liveChat/messages', 'POST'] as const
}

export function usePostYoutubeV3LiveChatMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveChat.messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3LiveChatMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveChat.messages.$post> },
      ) => parseResponse(client.youtube.v3.liveChat.messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3LiveChatMessagesKey() {
  return ['youtube', '/youtube/v3/liveChat/messages', 'DELETE'] as const
}

export function useDeleteYoutubeV3LiveChatMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveChat.messages.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3LiveChatMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveChat.messages.$delete> },
      ) => parseResponse(client.youtube.v3.liveChat.messages.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3LiveChatModeratorsKey(
  args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$get>,
) {
  return ['youtube', '/youtube/v3/liveChat/moderators', args] as const
}

export function useGetYoutubeV3LiveChatModerators<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3LiveChatModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.liveChat.moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3LiveChatModerators<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3LiveChatModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.liveChat.moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostYoutubeV3LiveChatModeratorsKey() {
  return ['youtube', '/youtube/v3/liveChat/moderators', 'POST'] as const
}

export function usePostYoutubeV3LiveChatModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveChat.moderators.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3LiveChatModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$post> },
      ) => parseResponse(client.youtube.v3.liveChat.moderators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3LiveChatModeratorsKey() {
  return ['youtube', '/youtube/v3/liveChat/moderators', 'DELETE'] as const
}

export function useDeleteYoutubeV3LiveChatModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveChat.moderators.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3LiveChatModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$delete> },
      ) => parseResponse(client.youtube.v3.liveChat.moderators.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3LiveStreamsKey(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$get>,
) {
  return ['youtube', '/youtube/v3/liveStreams', args] as const
}

export function useGetYoutubeV3LiveStreams<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3LiveStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.liveStreams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3LiveStreams<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3LiveStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.liveStreams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3LiveStreamsKey() {
  return ['youtube', '/youtube/v3/liveStreams', 'PUT'] as const
}

export function usePutYoutubeV3LiveStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveStreams.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3LiveStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveStreams.$put> },
      ) => parseResponse(client.youtube.v3.liveStreams.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3LiveStreamsKey() {
  return ['youtube', '/youtube/v3/liveStreams', 'POST'] as const
}

export function usePostYoutubeV3LiveStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveStreams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3LiveStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveStreams.$post> },
      ) => parseResponse(client.youtube.v3.liveStreams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3LiveStreamsKey() {
  return ['youtube', '/youtube/v3/liveStreams', 'DELETE'] as const
}

export function useDeleteYoutubeV3LiveStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.liveStreams.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3LiveStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.liveStreams.$delete> },
      ) => parseResponse(client.youtube.v3.liveStreams.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3MembersKey(
  args: InferRequestType<typeof client.youtube.v3.members.$get>,
) {
  return ['youtube', '/youtube/v3/members', args] as const
}

export function useGetYoutubeV3Members<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.members.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3MembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.members.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3Members<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.members.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3MembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.members.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetYoutubeV3MembershipsLevelsKey(
  args: InferRequestType<typeof client.youtube.v3.membershipsLevels.$get>,
) {
  return ['youtube', '/youtube/v3/membershipsLevels', args] as const
}

export function useGetYoutubeV3MembershipsLevels<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.membershipsLevels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.membershipsLevels.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3MembershipsLevelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.membershipsLevels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.membershipsLevels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3MembershipsLevels<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.membershipsLevels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.membershipsLevels.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3MembershipsLevelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.membershipsLevels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.membershipsLevels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetYoutubeV3PlaylistItemsKey(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$get>,
) {
  return ['youtube', '/youtube/v3/playlistItems', args] as const
}

export function useGetYoutubeV3PlaylistItems<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3PlaylistItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.playlistItems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3PlaylistItems<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3PlaylistItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.playlistItems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3PlaylistItemsKey() {
  return ['youtube', '/youtube/v3/playlistItems', 'PUT'] as const
}

export function usePutYoutubeV3PlaylistItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.playlistItems.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3PlaylistItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.playlistItems.$put> },
      ) => parseResponse(client.youtube.v3.playlistItems.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3PlaylistItemsKey() {
  return ['youtube', '/youtube/v3/playlistItems', 'POST'] as const
}

export function usePostYoutubeV3PlaylistItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.playlistItems.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3PlaylistItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.playlistItems.$post> },
      ) => parseResponse(client.youtube.v3.playlistItems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3PlaylistItemsKey() {
  return ['youtube', '/youtube/v3/playlistItems', 'DELETE'] as const
}

export function useDeleteYoutubeV3PlaylistItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.playlistItems.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3PlaylistItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.playlistItems.$delete> },
      ) => parseResponse(client.youtube.v3.playlistItems.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3PlaylistsKey(
  args: InferRequestType<typeof client.youtube.v3.playlists.$get>,
) {
  return ['youtube', '/youtube/v3/playlists', args] as const
}

export function useGetYoutubeV3Playlists<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3PlaylistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3Playlists<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3PlaylistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3PlaylistsKey() {
  return ['youtube', '/youtube/v3/playlists', 'PUT'] as const
}

export function usePutYoutubeV3Playlists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.playlists.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3PlaylistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.youtube.v3.playlists.$put> }) =>
        parseResponse(client.youtube.v3.playlists.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3PlaylistsKey() {
  return ['youtube', '/youtube/v3/playlists', 'POST'] as const
}

export function usePostYoutubeV3Playlists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.playlists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3PlaylistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.playlists.$post> },
      ) => parseResponse(client.youtube.v3.playlists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3PlaylistsKey() {
  return ['youtube', '/youtube/v3/playlists', 'DELETE'] as const
}

export function useDeleteYoutubeV3Playlists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.playlists.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3PlaylistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.playlists.$delete> },
      ) => parseResponse(client.youtube.v3.playlists.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3SearchKey(
  args: InferRequestType<typeof client.youtube.v3.search.$get>,
) {
  return ['youtube', '/youtube/v3/search', args] as const
}

export function useGetYoutubeV3Search<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3SearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3Search<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3SearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetYoutubeV3SubscriptionsKey(
  args: InferRequestType<typeof client.youtube.v3.subscriptions.$get>,
) {
  return ['youtube', '/youtube/v3/subscriptions', args] as const
}

export function useGetYoutubeV3Subscriptions<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3SubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3Subscriptions<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3SubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostYoutubeV3SubscriptionsKey() {
  return ['youtube', '/youtube/v3/subscriptions', 'POST'] as const
}

export function usePostYoutubeV3Subscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3SubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.subscriptions.$post> },
      ) => parseResponse(client.youtube.v3.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3SubscriptionsKey() {
  return ['youtube', '/youtube/v3/subscriptions', 'DELETE'] as const
}

export function useDeleteYoutubeV3Subscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.subscriptions.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3SubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.subscriptions.$delete> },
      ) => parseResponse(client.youtube.v3.subscriptions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3SuperChatEventsKey(
  args: InferRequestType<typeof client.youtube.v3.superChatEvents.$get>,
) {
  return ['youtube', '/youtube/v3/superChatEvents', args] as const
}

export function useGetYoutubeV3SuperChatEvents<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.superChatEvents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.superChatEvents.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3SuperChatEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.superChatEvents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.superChatEvents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3SuperChatEvents<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.superChatEvents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.superChatEvents.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3SuperChatEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.superChatEvents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.superChatEvents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostYoutubeV3TestsKey() {
  return ['youtube', '/youtube/v3/tests', 'POST'] as const
}

export function usePostYoutubeV3Tests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.tests.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.tests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3TestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.youtube.v3.tests.$post> }) =>
        parseResponse(client.youtube.v3.tests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3ThirdPartyLinksKey(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$get>,
) {
  return ['youtube', '/youtube/v3/thirdPartyLinks', args] as const
}

export function useGetYoutubeV3ThirdPartyLinks<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3ThirdPartyLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.thirdPartyLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3ThirdPartyLinks<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3ThirdPartyLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.thirdPartyLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3ThirdPartyLinksKey() {
  return ['youtube', '/youtube/v3/thirdPartyLinks', 'PUT'] as const
}

export function usePutYoutubeV3ThirdPartyLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3ThirdPartyLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$put> },
      ) => parseResponse(client.youtube.v3.thirdPartyLinks.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3ThirdPartyLinksKey() {
  return ['youtube', '/youtube/v3/thirdPartyLinks', 'POST'] as const
}

export function usePostYoutubeV3ThirdPartyLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3ThirdPartyLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$post> },
      ) => parseResponse(client.youtube.v3.thirdPartyLinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3ThirdPartyLinksKey() {
  return ['youtube', '/youtube/v3/thirdPartyLinks', 'DELETE'] as const
}

export function useDeleteYoutubeV3ThirdPartyLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3ThirdPartyLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$delete> },
      ) => parseResponse(client.youtube.v3.thirdPartyLinks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3ThumbnailsSetKey() {
  return ['youtube', '/youtube/v3/thumbnails/set', 'POST'] as const
}

export function usePostYoutubeV3ThumbnailsSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thumbnails.set.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.thumbnails.set.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3ThumbnailsSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.thumbnails.set.$post> },
      ) => parseResponse(client.youtube.v3.thumbnails.set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3VideoAbuseReportReasonsKey(
  args: InferRequestType<typeof client.youtube.v3.videoAbuseReportReasons.$get>,
) {
  return ['youtube', '/youtube/v3/videoAbuseReportReasons', args] as const
}

export function useGetYoutubeV3VideoAbuseReportReasons<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.videoAbuseReportReasons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.youtube.v3.videoAbuseReportReasons.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3VideoAbuseReportReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.youtube.v3.videoAbuseReportReasons.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.youtube.v3.videoAbuseReportReasons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3VideoAbuseReportReasons<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.videoAbuseReportReasons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.youtube.v3.videoAbuseReportReasons.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3VideoAbuseReportReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.youtube.v3.videoAbuseReportReasons.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.youtube.v3.videoAbuseReportReasons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetYoutubeV3VideoCategoriesKey(
  args: InferRequestType<typeof client.youtube.v3.videoCategories.$get>,
) {
  return ['youtube', '/youtube/v3/videoCategories', args] as const
}

export function useGetYoutubeV3VideoCategories<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.videoCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videoCategories.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3VideoCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videoCategories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.videoCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3VideoCategories<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.videoCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videoCategories.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3VideoCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videoCategories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.videoCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetYoutubeV3VideosKey(
  args: InferRequestType<typeof client.youtube.v3.videos.$get>,
) {
  return ['youtube', '/youtube/v3/videos', args] as const
}

export function useGetYoutubeV3Videos<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3VideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3Videos<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3VideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutYoutubeV3VideosKey() {
  return ['youtube', '/youtube/v3/videos', 'PUT'] as const
}

export function usePutYoutubeV3Videos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.videos.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutYoutubeV3VideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.youtube.v3.videos.$put> }) =>
        parseResponse(client.youtube.v3.videos.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3VideosKey() {
  return ['youtube', '/youtube/v3/videos', 'POST'] as const
}

export function usePostYoutubeV3Videos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.videos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3VideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.youtube.v3.videos.$post> }) =>
        parseResponse(client.youtube.v3.videos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteYoutubeV3VideosKey() {
  return ['youtube', '/youtube/v3/videos', 'DELETE'] as const
}

export function useDeleteYoutubeV3Videos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.videos.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteYoutubeV3VideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.youtube.v3.videos.$delete> }) =>
        parseResponse(client.youtube.v3.videos.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetYoutubeV3VideosGetRatingKey(
  args: InferRequestType<typeof client.youtube.v3.videos.getRating.$get>,
) {
  return ['youtube', '/youtube/v3/videos/getRating', args] as const
}

export function useGetYoutubeV3VideosGetRating<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.videos.getRating.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.getRating.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3VideosGetRatingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.getRating.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.videos.getRating.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYoutubeV3VideosGetRating<TError = unknown>(
  args: InferRequestType<typeof client.youtube.v3.videos.getRating.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.getRating.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetYoutubeV3VideosGetRatingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.getRating.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.youtube.v3.videos.getRating.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostYoutubeV3VideosRateKey() {
  return ['youtube', '/youtube/v3/videos/rate', 'POST'] as const
}

export function usePostYoutubeV3VideosRate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.rate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.videos.rate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3VideosRateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.videos.rate.$post> },
      ) => parseResponse(client.youtube.v3.videos.rate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3VideosReportAbuseKey() {
  return ['youtube', '/youtube/v3/videos/reportAbuse', 'POST'] as const
}

export function usePostYoutubeV3VideosReportAbuse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.reportAbuse.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.videos.reportAbuse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3VideosReportAbuseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.videos.reportAbuse.$post> },
      ) => parseResponse(client.youtube.v3.videos.reportAbuse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3WatermarksSetKey() {
  return ['youtube', '/youtube/v3/watermarks/set', 'POST'] as const
}

export function usePostYoutubeV3WatermarksSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.watermarks.set.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.watermarks.set.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3WatermarksSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.watermarks.set.$post> },
      ) => parseResponse(client.youtube.v3.watermarks.set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYoutubeV3WatermarksUnsetKey() {
  return ['youtube', '/youtube/v3/watermarks/unset', 'POST'] as const
}

export function usePostYoutubeV3WatermarksUnset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.watermarks.unset.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.youtube.v3.watermarks.unset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYoutubeV3WatermarksUnsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.youtube.v3.watermarks.unset.$post> },
      ) => parseResponse(client.youtube.v3.watermarks.unset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
