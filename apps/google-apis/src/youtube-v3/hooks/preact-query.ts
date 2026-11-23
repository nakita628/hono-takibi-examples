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

export function getYoutubeKey() {
  return ['youtube'] as const
}

export function getPostYoutubeV3AbuseReportsMutationKey() {
  return ['youtube', '/youtube/v3/abuseReports', 'POST'] as const
}

export function getPostYoutubeV3AbuseReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.abuseReports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.abuseReports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3AbuseReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.abuseReports.$post>) {
      return parseResponse(client.youtube.v3.abuseReports.$post(args, options))
    },
  })
}

export function usePostYoutubeV3AbuseReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.abuseReports.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.abuseReports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3AbuseReportsMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3ActivitiesQueryKey(
  args: InferRequestType<typeof client.youtube.v3.activities.$get>,
) {
  return ['youtube', '/youtube/v3/activities', args] as const
}

export function getYoutubeV3ActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.activities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3ActivitiesQueryKey>
  >({
    queryKey: getYoutubeV3ActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.activities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useYoutubeV3Activities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.activities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3ActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3ActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3Activities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.activities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3ActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3ActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getYoutubeV3CaptionsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.captions.$get>,
) {
  return ['youtube', '/youtube/v3/captions', args] as const
}

export function getYoutubeV3CaptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.youtube.v3.captions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3CaptionsQueryKey>
  >({
    queryKey: getYoutubeV3CaptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.captions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useYoutubeV3Captions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.captions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3CaptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3CaptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3Captions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.captions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3CaptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3CaptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutYoutubeV3CaptionsMutationKey() {
  return ['youtube', '/youtube/v3/captions', 'PUT'] as const
}

export function getPutYoutubeV3CaptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.captions.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3CaptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.captions.$put>) {
      return parseResponse(client.youtube.v3.captions.$put(args, options))
    },
  })
}

export function usePutYoutubeV3Captions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.captions.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3CaptionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3CaptionsMutationKey() {
  return ['youtube', '/youtube/v3/captions', 'POST'] as const
}

export function getPostYoutubeV3CaptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.captions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3CaptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.captions.$post>) {
      return parseResponse(client.youtube.v3.captions.$post(args, options))
    },
  })
}

export function usePostYoutubeV3Captions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.captions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3CaptionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3CaptionsMutationKey() {
  return ['youtube', '/youtube/v3/captions', 'DELETE'] as const
}

export function getDeleteYoutubeV3CaptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.captions.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3CaptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.captions.$delete>) {
      return parseResponse(client.youtube.v3.captions.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3Captions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.captions.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.captions.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3CaptionsMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3CaptionsIdQueryKey(
  args: InferRequestType<(typeof client.youtube.v3.captions)[':id']['$get']>,
) {
  return ['youtube', '/youtube/v3/captions/:id', args] as const
}

export function getYoutubeV3CaptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.youtube.v3.captions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.youtube.v3.captions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.youtube.v3.captions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3CaptionsIdQueryKey>
  >({
    queryKey: getYoutubeV3CaptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.captions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3CaptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.youtube.v3.captions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.youtube.v3.captions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.youtube.v3.captions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3CaptionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3CaptionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3CaptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.youtube.v3.captions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.youtube.v3.captions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.youtube.v3.captions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3CaptionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3CaptionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostYoutubeV3ChannelBannersInsertMutationKey() {
  return ['youtube', '/youtube/v3/channelBanners/insert', 'POST'] as const
}

export function getPostYoutubeV3ChannelBannersInsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.channelBanners.insert.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.channelBanners.insert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3ChannelBannersInsertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.channelBanners.insert.$post>) {
      return parseResponse(client.youtube.v3.channelBanners.insert.$post(args, options))
    },
  })
}

export function usePostYoutubeV3ChannelBannersInsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.channelBanners.insert.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.channelBanners.insert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3ChannelBannersInsertMutationOptions<
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

export function getYoutubeV3ChannelSectionsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$get>,
) {
  return ['youtube', '/youtube/v3/channelSections', args] as const
}

export function getYoutubeV3ChannelSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3ChannelSectionsQueryKey>
  >({
    queryKey: getYoutubeV3ChannelSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.channelSections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3ChannelSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3ChannelSectionsQueryKey>
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
      ...getYoutubeV3ChannelSectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3ChannelSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.channelSections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3ChannelSectionsQueryKey>
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
      ...getYoutubeV3ChannelSectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutYoutubeV3ChannelSectionsMutationKey() {
  return ['youtube', '/youtube/v3/channelSections', 'PUT'] as const
}

export function getPutYoutubeV3ChannelSectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.channelSections.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3ChannelSectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.channelSections.$put>) {
      return parseResponse(client.youtube.v3.channelSections.$put(args, options))
    },
  })
}

export function usePutYoutubeV3ChannelSections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.channelSections.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3ChannelSectionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3ChannelSectionsMutationKey() {
  return ['youtube', '/youtube/v3/channelSections', 'POST'] as const
}

export function getPostYoutubeV3ChannelSectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.channelSections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3ChannelSectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.channelSections.$post>) {
      return parseResponse(client.youtube.v3.channelSections.$post(args, options))
    },
  })
}

export function usePostYoutubeV3ChannelSections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.channelSections.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.channelSections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3ChannelSectionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3ChannelSectionsMutationKey() {
  return ['youtube', '/youtube/v3/channelSections', 'DELETE'] as const
}

export function getDeleteYoutubeV3ChannelSectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channelSections.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.channelSections.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3ChannelSectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.channelSections.$delete>) {
      return parseResponse(client.youtube.v3.channelSections.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3ChannelSections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.channelSections.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.channelSections.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3ChannelSectionsMutationOptions<
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

export function getYoutubeV3ChannelsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.channels.$get>,
) {
  return ['youtube', '/youtube/v3/channels', args] as const
}

export function getYoutubeV3ChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.youtube.v3.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3ChannelsQueryKey>
  >({
    queryKey: getYoutubeV3ChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useYoutubeV3Channels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.channels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3ChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3ChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3Channels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.channels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3ChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3ChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutYoutubeV3ChannelsMutationKey() {
  return ['youtube', '/youtube/v3/channels', 'PUT'] as const
}

export function getPutYoutubeV3ChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.channels.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3ChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.channels.$put>) {
      return parseResponse(client.youtube.v3.channels.$put(args, options))
    },
  })
}

export function usePutYoutubeV3Channels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.channels.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.channels.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3ChannelsMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3CommentThreadsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.commentThreads.$get>,
) {
  return ['youtube', '/youtube/v3/commentThreads', args] as const
}

export function getYoutubeV3CommentThreadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.commentThreads.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3CommentThreadsQueryKey>
  >({
    queryKey: getYoutubeV3CommentThreadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.commentThreads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3CommentThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.commentThreads.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3CommentThreadsQueryKey>
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
      ...getYoutubeV3CommentThreadsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3CommentThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.commentThreads.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3CommentThreadsQueryKey>
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
      ...getYoutubeV3CommentThreadsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutYoutubeV3CommentThreadsMutationKey() {
  return ['youtube', '/youtube/v3/commentThreads', 'PUT'] as const
}

export function getPutYoutubeV3CommentThreadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.commentThreads.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3CommentThreadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.commentThreads.$put>) {
      return parseResponse(client.youtube.v3.commentThreads.$put(args, options))
    },
  })
}

export function usePutYoutubeV3CommentThreads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.commentThreads.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3CommentThreadsMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3CommentThreadsMutationKey() {
  return ['youtube', '/youtube/v3/commentThreads', 'POST'] as const
}

export function getPostYoutubeV3CommentThreadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.commentThreads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3CommentThreadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.commentThreads.$post>) {
      return parseResponse(client.youtube.v3.commentThreads.$post(args, options))
    },
  })
}

export function usePostYoutubeV3CommentThreads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.commentThreads.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.commentThreads.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3CommentThreadsMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3CommentsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.comments.$get>,
) {
  return ['youtube', '/youtube/v3/comments', args] as const
}

export function getYoutubeV3CommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.youtube.v3.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3CommentsQueryKey>
  >({
    queryKey: getYoutubeV3CommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useYoutubeV3Comments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.comments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3CommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3CommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3Comments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.comments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3CommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3CommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutYoutubeV3CommentsMutationKey() {
  return ['youtube', '/youtube/v3/comments', 'PUT'] as const
}

export function getPutYoutubeV3CommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.comments.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3CommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.comments.$put>) {
      return parseResponse(client.youtube.v3.comments.$put(args, options))
    },
  })
}

export function usePutYoutubeV3Comments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.comments.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3CommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3CommentsMutationKey() {
  return ['youtube', '/youtube/v3/comments', 'POST'] as const
}

export function getPostYoutubeV3CommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3CommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.comments.$post>) {
      return parseResponse(client.youtube.v3.comments.$post(args, options))
    },
  })
}

export function usePostYoutubeV3Comments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.comments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3CommentsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3CommentsMutationKey() {
  return ['youtube', '/youtube/v3/comments', 'DELETE'] as const
}

export function getDeleteYoutubeV3CommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.comments.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3CommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.comments.$delete>) {
      return parseResponse(client.youtube.v3.comments.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3Comments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.comments.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.comments.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3CommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3CommentsMarkAsSpamMutationKey() {
  return ['youtube', '/youtube/v3/comments/markAsSpam', 'POST'] as const
}

export function getPostYoutubeV3CommentsMarkAsSpamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.comments.markAsSpam.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.comments.markAsSpam.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3CommentsMarkAsSpamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.comments.markAsSpam.$post>) {
      return parseResponse(client.youtube.v3.comments.markAsSpam.$post(args, options))
    },
  })
}

export function usePostYoutubeV3CommentsMarkAsSpam<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.comments.markAsSpam.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.comments.markAsSpam.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3CommentsMarkAsSpamMutationOptions<
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

export function getPostYoutubeV3CommentsSetModerationStatusMutationKey() {
  return ['youtube', '/youtube/v3/comments/setModerationStatus', 'POST'] as const
}

export function getPostYoutubeV3CommentsSetModerationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.comments.setModerationStatus.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.comments.setModerationStatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3CommentsSetModerationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.youtube.v3.comments.setModerationStatus.$post>,
    ) {
      return parseResponse(client.youtube.v3.comments.setModerationStatus.$post(args, options))
    },
  })
}

export function usePostYoutubeV3CommentsSetModerationStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.comments.setModerationStatus.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.comments.setModerationStatus.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3CommentsSetModerationStatusMutationOptions<
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

export function getYoutubeV3I18nLanguagesQueryKey(
  args: InferRequestType<typeof client.youtube.v3.i18nLanguages.$get>,
) {
  return ['youtube', '/youtube/v3/i18nLanguages', args] as const
}

export function getYoutubeV3I18nLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nLanguages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.i18nLanguages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nLanguages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3I18nLanguagesQueryKey>
  >({
    queryKey: getYoutubeV3I18nLanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.i18nLanguages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3I18nLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nLanguages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.i18nLanguages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nLanguages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3I18nLanguagesQueryKey>
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
      ...getYoutubeV3I18nLanguagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3I18nLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nLanguages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.i18nLanguages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nLanguages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3I18nLanguagesQueryKey>
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
      ...getYoutubeV3I18nLanguagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getYoutubeV3I18nRegionsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.i18nRegions.$get>,
) {
  return ['youtube', '/youtube/v3/i18nRegions', args] as const
}

export function getYoutubeV3I18nRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nRegions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.i18nRegions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nRegions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3I18nRegionsQueryKey>
  >({
    queryKey: getYoutubeV3I18nRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.i18nRegions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3I18nRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nRegions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.i18nRegions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nRegions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3I18nRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3I18nRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3I18nRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nRegions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.i18nRegions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.i18nRegions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3I18nRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3I18nRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getYoutubeV3LiveBroadcastsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$get>,
) {
  return ['youtube', '/youtube/v3/liveBroadcasts', args] as const
}

export function getYoutubeV3LiveBroadcastsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3LiveBroadcastsQueryKey>
  >({
    queryKey: getYoutubeV3LiveBroadcastsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.liveBroadcasts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3LiveBroadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3LiveBroadcastsQueryKey>
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
      ...getYoutubeV3LiveBroadcastsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3LiveBroadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3LiveBroadcastsQueryKey>
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
      ...getYoutubeV3LiveBroadcastsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutYoutubeV3LiveBroadcastsMutationKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts', 'PUT'] as const
}

export function getPutYoutubeV3LiveBroadcastsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3LiveBroadcastsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$put>) {
      return parseResponse(client.youtube.v3.liveBroadcasts.$put(args, options))
    },
  })
}

export function usePutYoutubeV3LiveBroadcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveBroadcasts.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3LiveBroadcastsMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3LiveBroadcastsMutationKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts', 'POST'] as const
}

export function getPostYoutubeV3LiveBroadcastsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3LiveBroadcastsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$post>) {
      return parseResponse(client.youtube.v3.liveBroadcasts.$post(args, options))
    },
  })
}

export function usePostYoutubeV3LiveBroadcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveBroadcasts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3LiveBroadcastsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3LiveBroadcastsMutationKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts', 'DELETE'] as const
}

export function getDeleteYoutubeV3LiveBroadcastsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3LiveBroadcastsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.$delete>) {
      return parseResponse(client.youtube.v3.liveBroadcasts.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3LiveBroadcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveBroadcasts.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3LiveBroadcastsMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3LiveBroadcastsBindMutationKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts/bind', 'POST'] as const
}

export function getPostYoutubeV3LiveBroadcastsBindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.bind.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.bind.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3LiveBroadcastsBindMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.bind.$post>) {
      return parseResponse(client.youtube.v3.liveBroadcasts.bind.$post(args, options))
    },
  })
}

export function usePostYoutubeV3LiveBroadcastsBind<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.bind.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveBroadcasts.bind.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3LiveBroadcastsBindMutationOptions<
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

export function getPostYoutubeV3LiveBroadcastsCuepointMutationKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts/cuepoint', 'POST'] as const
}

export function getPostYoutubeV3LiveBroadcastsCuepointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.cuepoint.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.cuepoint.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3LiveBroadcastsCuepointMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.cuepoint.$post>,
    ) {
      return parseResponse(client.youtube.v3.liveBroadcasts.cuepoint.$post(args, options))
    },
  })
}

export function usePostYoutubeV3LiveBroadcastsCuepoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.cuepoint.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveBroadcasts.cuepoint.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3LiveBroadcastsCuepointMutationOptions<
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

export function getPostYoutubeV3LiveBroadcastsTransitionMutationKey() {
  return ['youtube', '/youtube/v3/liveBroadcasts/transition', 'POST'] as const
}

export function getPostYoutubeV3LiveBroadcastsTransitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.transition.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveBroadcasts.transition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3LiveBroadcastsTransitionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.youtube.v3.liveBroadcasts.transition.$post>,
    ) {
      return parseResponse(client.youtube.v3.liveBroadcasts.transition.$post(args, options))
    },
  })
}

export function usePostYoutubeV3LiveBroadcastsTransition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveBroadcasts.transition.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveBroadcasts.transition.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3LiveBroadcastsTransitionMutationOptions<
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

export function getPostYoutubeV3LiveChatBansMutationKey() {
  return ['youtube', '/youtube/v3/liveChat/bans', 'POST'] as const
}

export function getPostYoutubeV3LiveChatBansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.bans.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveChat.bans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3LiveChatBansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveChat.bans.$post>) {
      return parseResponse(client.youtube.v3.liveChat.bans.$post(args, options))
    },
  })
}

export function usePostYoutubeV3LiveChatBans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.bans.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveChat.bans.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3LiveChatBansMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3LiveChatBansMutationKey() {
  return ['youtube', '/youtube/v3/liveChat/bans', 'DELETE'] as const
}

export function getDeleteYoutubeV3LiveChatBansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.bans.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveChat.bans.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3LiveChatBansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveChat.bans.$delete>) {
      return parseResponse(client.youtube.v3.liveChat.bans.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3LiveChatBans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveChat.bans.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveChat.bans.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3LiveChatBansMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3LiveChatMessagesQueryKey(
  args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$get>,
) {
  return ['youtube', '/youtube/v3/liveChat/messages', args] as const
}

export function getYoutubeV3LiveChatMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3LiveChatMessagesQueryKey>
  >({
    queryKey: getYoutubeV3LiveChatMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.liveChat.messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3LiveChatMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3LiveChatMessagesQueryKey>
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
      ...getYoutubeV3LiveChatMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3LiveChatMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3LiveChatMessagesQueryKey>
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
      ...getYoutubeV3LiveChatMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostYoutubeV3LiveChatMessagesMutationKey() {
  return ['youtube', '/youtube/v3/liveChat/messages', 'POST'] as const
}

export function getPostYoutubeV3LiveChatMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveChat.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3LiveChatMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$post>) {
      return parseResponse(client.youtube.v3.liveChat.messages.$post(args, options))
    },
  })
}

export function usePostYoutubeV3LiveChatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveChat.messages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3LiveChatMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3LiveChatMessagesMutationKey() {
  return ['youtube', '/youtube/v3/liveChat/messages', 'DELETE'] as const
}

export function getDeleteYoutubeV3LiveChatMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveChat.messages.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3LiveChatMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveChat.messages.$delete>) {
      return parseResponse(client.youtube.v3.liveChat.messages.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3LiveChatMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveChat.messages.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveChat.messages.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3LiveChatMessagesMutationOptions<
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

export function getYoutubeV3LiveChatModeratorsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$get>,
) {
  return ['youtube', '/youtube/v3/liveChat/moderators', args] as const
}

export function getYoutubeV3LiveChatModeratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3LiveChatModeratorsQueryKey>
  >({
    queryKey: getYoutubeV3LiveChatModeratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.liveChat.moderators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3LiveChatModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3LiveChatModeratorsQueryKey>
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
      ...getYoutubeV3LiveChatModeratorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3LiveChatModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3LiveChatModeratorsQueryKey>
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
      ...getYoutubeV3LiveChatModeratorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostYoutubeV3LiveChatModeratorsMutationKey() {
  return ['youtube', '/youtube/v3/liveChat/moderators', 'POST'] as const
}

export function getPostYoutubeV3LiveChatModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveChat.moderators.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3LiveChatModeratorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$post>) {
      return parseResponse(client.youtube.v3.liveChat.moderators.$post(args, options))
    },
  })
}

export function usePostYoutubeV3LiveChatModerators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveChat.moderators.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3LiveChatModeratorsMutationOptions<
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

export function getDeleteYoutubeV3LiveChatModeratorsMutationKey() {
  return ['youtube', '/youtube/v3/liveChat/moderators', 'DELETE'] as const
}

export function getDeleteYoutubeV3LiveChatModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveChat.moderators.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3LiveChatModeratorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveChat.moderators.$delete>) {
      return parseResponse(client.youtube.v3.liveChat.moderators.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3LiveChatModerators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.liveChat.moderators.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveChat.moderators.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3LiveChatModeratorsMutationOptions<
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

export function getYoutubeV3LiveStreamsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$get>,
) {
  return ['youtube', '/youtube/v3/liveStreams', args] as const
}

export function getYoutubeV3LiveStreamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3LiveStreamsQueryKey>
  >({
    queryKey: getYoutubeV3LiveStreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.liveStreams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3LiveStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3LiveStreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3LiveStreamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3LiveStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.liveStreams.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3LiveStreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3LiveStreamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutYoutubeV3LiveStreamsMutationKey() {
  return ['youtube', '/youtube/v3/liveStreams', 'PUT'] as const
}

export function getPutYoutubeV3LiveStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveStreams.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3LiveStreamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveStreams.$put>) {
      return parseResponse(client.youtube.v3.liveStreams.$put(args, options))
    },
  })
}

export function usePutYoutubeV3LiveStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveStreams.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3LiveStreamsMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3LiveStreamsMutationKey() {
  return ['youtube', '/youtube/v3/liveStreams', 'POST'] as const
}

export function getPostYoutubeV3LiveStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveStreams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3LiveStreamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveStreams.$post>) {
      return parseResponse(client.youtube.v3.liveStreams.$post(args, options))
    },
  })
}

export function usePostYoutubeV3LiveStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveStreams.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3LiveStreamsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3LiveStreamsMutationKey() {
  return ['youtube', '/youtube/v3/liveStreams', 'DELETE'] as const
}

export function getDeleteYoutubeV3LiveStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.liveStreams.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3LiveStreamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.liveStreams.$delete>) {
      return parseResponse(client.youtube.v3.liveStreams.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3LiveStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.liveStreams.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.liveStreams.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3LiveStreamsMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3MembersQueryKey(
  args: InferRequestType<typeof client.youtube.v3.members.$get>,
) {
  return ['youtube', '/youtube/v3/members', args] as const
}

export function getYoutubeV3MembersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.members.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.youtube.v3.members.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.members.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3MembersQueryKey>
  >({
    queryKey: getYoutubeV3MembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useYoutubeV3Members<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.members.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.members.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3MembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3MembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3Members<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.members.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.members.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3MembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3MembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getYoutubeV3MembershipsLevelsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.membershipsLevels.$get>,
) {
  return ['youtube', '/youtube/v3/membershipsLevels', args] as const
}

export function getYoutubeV3MembershipsLevelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.membershipsLevels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.membershipsLevels.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.membershipsLevels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3MembershipsLevelsQueryKey>
  >({
    queryKey: getYoutubeV3MembershipsLevelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.membershipsLevels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3MembershipsLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.membershipsLevels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.membershipsLevels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.membershipsLevels.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3MembershipsLevelsQueryKey>
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
      ...getYoutubeV3MembershipsLevelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3MembershipsLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.membershipsLevels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.membershipsLevels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.membershipsLevels.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3MembershipsLevelsQueryKey>
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
      ...getYoutubeV3MembershipsLevelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getYoutubeV3PlaylistImagesQueryKey(
  args: InferRequestType<typeof client.youtube.v3.playlistImages.$get>,
) {
  return ['youtube', '/youtube/v3/playlistImages', args] as const
}

export function getYoutubeV3PlaylistImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.playlistImages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3PlaylistImagesQueryKey>
  >({
    queryKey: getYoutubeV3PlaylistImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.playlistImages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3PlaylistImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.playlistImages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3PlaylistImagesQueryKey>
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
      ...getYoutubeV3PlaylistImagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3PlaylistImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.playlistImages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3PlaylistImagesQueryKey>
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
      ...getYoutubeV3PlaylistImagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutYoutubeV3PlaylistImagesMutationKey() {
  return ['youtube', '/youtube/v3/playlistImages', 'PUT'] as const
}

export function getPutYoutubeV3PlaylistImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.playlistImages.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3PlaylistImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.playlistImages.$put>) {
      return parseResponse(client.youtube.v3.playlistImages.$put(args, options))
    },
  })
}

export function usePutYoutubeV3PlaylistImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.playlistImages.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3PlaylistImagesMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3PlaylistImagesMutationKey() {
  return ['youtube', '/youtube/v3/playlistImages', 'POST'] as const
}

export function getPostYoutubeV3PlaylistImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.playlistImages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3PlaylistImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.playlistImages.$post>) {
      return parseResponse(client.youtube.v3.playlistImages.$post(args, options))
    },
  })
}

export function usePostYoutubeV3PlaylistImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.playlistImages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3PlaylistImagesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3PlaylistImagesMutationKey() {
  return ['youtube', '/youtube/v3/playlistImages', 'DELETE'] as const
}

export function getDeleteYoutubeV3PlaylistImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.playlistImages.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3PlaylistImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.playlistImages.$delete>) {
      return parseResponse(client.youtube.v3.playlistImages.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3PlaylistImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.playlistImages.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.playlistImages.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3PlaylistImagesMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3PlaylistItemsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$get>,
) {
  return ['youtube', '/youtube/v3/playlistItems', args] as const
}

export function getYoutubeV3PlaylistItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3PlaylistItemsQueryKey>
  >({
    queryKey: getYoutubeV3PlaylistItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.playlistItems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3PlaylistItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3PlaylistItemsQueryKey>
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
      ...getYoutubeV3PlaylistItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3PlaylistItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.playlistItems.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3PlaylistItemsQueryKey>
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
      ...getYoutubeV3PlaylistItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutYoutubeV3PlaylistItemsMutationKey() {
  return ['youtube', '/youtube/v3/playlistItems', 'PUT'] as const
}

export function getPutYoutubeV3PlaylistItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.playlistItems.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3PlaylistItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.playlistItems.$put>) {
      return parseResponse(client.youtube.v3.playlistItems.$put(args, options))
    },
  })
}

export function usePutYoutubeV3PlaylistItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.playlistItems.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3PlaylistItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3PlaylistItemsMutationKey() {
  return ['youtube', '/youtube/v3/playlistItems', 'POST'] as const
}

export function getPostYoutubeV3PlaylistItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.playlistItems.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3PlaylistItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.playlistItems.$post>) {
      return parseResponse(client.youtube.v3.playlistItems.$post(args, options))
    },
  })
}

export function usePostYoutubeV3PlaylistItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.playlistItems.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3PlaylistItemsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3PlaylistItemsMutationKey() {
  return ['youtube', '/youtube/v3/playlistItems', 'DELETE'] as const
}

export function getDeleteYoutubeV3PlaylistItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.playlistItems.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3PlaylistItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.playlistItems.$delete>) {
      return parseResponse(client.youtube.v3.playlistItems.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3PlaylistItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.playlistItems.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.playlistItems.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3PlaylistItemsMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3PlaylistsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.playlists.$get>,
) {
  return ['youtube', '/youtube/v3/playlists', args] as const
}

export function getYoutubeV3PlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.youtube.v3.playlists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3PlaylistsQueryKey>
  >({
    queryKey: getYoutubeV3PlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.playlists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useYoutubeV3Playlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.playlists.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3PlaylistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3PlaylistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3Playlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.playlists.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3PlaylistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3PlaylistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutYoutubeV3PlaylistsMutationKey() {
  return ['youtube', '/youtube/v3/playlists', 'PUT'] as const
}

export function getPutYoutubeV3PlaylistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.playlists.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3PlaylistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.playlists.$put>) {
      return parseResponse(client.youtube.v3.playlists.$put(args, options))
    },
  })
}

export function usePutYoutubeV3Playlists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.playlists.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3PlaylistsMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3PlaylistsMutationKey() {
  return ['youtube', '/youtube/v3/playlists', 'POST'] as const
}

export function getPostYoutubeV3PlaylistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.playlists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3PlaylistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.playlists.$post>) {
      return parseResponse(client.youtube.v3.playlists.$post(args, options))
    },
  })
}

export function usePostYoutubeV3Playlists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.playlists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3PlaylistsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3PlaylistsMutationKey() {
  return ['youtube', '/youtube/v3/playlists', 'DELETE'] as const
}

export function getDeleteYoutubeV3PlaylistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.playlists.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3PlaylistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.playlists.$delete>) {
      return parseResponse(client.youtube.v3.playlists.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3Playlists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.playlists.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.playlists.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3PlaylistsMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3SearchQueryKey(
  args: InferRequestType<typeof client.youtube.v3.search.$get>,
) {
  return ['youtube', '/youtube/v3/search', args] as const
}

export function getYoutubeV3SearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.youtube.v3.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3SearchQueryKey>
  >({
    queryKey: getYoutubeV3SearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useYoutubeV3Search<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3SearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3SearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3Search<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3SearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3SearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getYoutubeV3SubscriptionsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.subscriptions.$get>,
) {
  return ['youtube', '/youtube/v3/subscriptions', args] as const
}

export function getYoutubeV3SubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3SubscriptionsQueryKey>
  >({
    queryKey: getYoutubeV3SubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3Subscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3SubscriptionsQueryKey>
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
      ...getYoutubeV3SubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3Subscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3SubscriptionsQueryKey>
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
      ...getYoutubeV3SubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostYoutubeV3SubscriptionsMutationKey() {
  return ['youtube', '/youtube/v3/subscriptions', 'POST'] as const
}

export function getPostYoutubeV3SubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3SubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.subscriptions.$post>) {
      return parseResponse(client.youtube.v3.subscriptions.$post(args, options))
    },
  })
}

export function usePostYoutubeV3Subscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3SubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3SubscriptionsMutationKey() {
  return ['youtube', '/youtube/v3/subscriptions', 'DELETE'] as const
}

export function getDeleteYoutubeV3SubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.subscriptions.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3SubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.subscriptions.$delete>) {
      return parseResponse(client.youtube.v3.subscriptions.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3Subscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.subscriptions.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.subscriptions.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3SubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3SuperChatEventsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.superChatEvents.$get>,
) {
  return ['youtube', '/youtube/v3/superChatEvents', args] as const
}

export function getYoutubeV3SuperChatEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.superChatEvents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.superChatEvents.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.superChatEvents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3SuperChatEventsQueryKey>
  >({
    queryKey: getYoutubeV3SuperChatEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.superChatEvents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3SuperChatEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.superChatEvents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.superChatEvents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.superChatEvents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3SuperChatEventsQueryKey>
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
      ...getYoutubeV3SuperChatEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3SuperChatEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.superChatEvents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.superChatEvents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.superChatEvents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3SuperChatEventsQueryKey>
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
      ...getYoutubeV3SuperChatEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostYoutubeV3TestsMutationKey() {
  return ['youtube', '/youtube/v3/tests', 'POST'] as const
}

export function getPostYoutubeV3TestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.tests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.tests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3TestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.tests.$post>) {
      return parseResponse(client.youtube.v3.tests.$post(args, options))
    },
  })
}

export function usePostYoutubeV3Tests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.tests.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.tests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3TestsMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3ThirdPartyLinksQueryKey(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$get>,
) {
  return ['youtube', '/youtube/v3/thirdPartyLinks', args] as const
}

export function getYoutubeV3ThirdPartyLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3ThirdPartyLinksQueryKey>
  >({
    queryKey: getYoutubeV3ThirdPartyLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.thirdPartyLinks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3ThirdPartyLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3ThirdPartyLinksQueryKey>
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
      ...getYoutubeV3ThirdPartyLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3ThirdPartyLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3ThirdPartyLinksQueryKey>
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
      ...getYoutubeV3ThirdPartyLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutYoutubeV3ThirdPartyLinksMutationKey() {
  return ['youtube', '/youtube/v3/thirdPartyLinks', 'PUT'] as const
}

export function getPutYoutubeV3ThirdPartyLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3ThirdPartyLinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$put>) {
      return parseResponse(client.youtube.v3.thirdPartyLinks.$put(args, options))
    },
  })
}

export function usePutYoutubeV3ThirdPartyLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3ThirdPartyLinksMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3ThirdPartyLinksMutationKey() {
  return ['youtube', '/youtube/v3/thirdPartyLinks', 'POST'] as const
}

export function getPostYoutubeV3ThirdPartyLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3ThirdPartyLinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$post>) {
      return parseResponse(client.youtube.v3.thirdPartyLinks.$post(args, options))
    },
  })
}

export function usePostYoutubeV3ThirdPartyLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3ThirdPartyLinksMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3ThirdPartyLinksMutationKey() {
  return ['youtube', '/youtube/v3/thirdPartyLinks', 'DELETE'] as const
}

export function getDeleteYoutubeV3ThirdPartyLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3ThirdPartyLinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$delete>) {
      return parseResponse(client.youtube.v3.thirdPartyLinks.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3ThirdPartyLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.thirdPartyLinks.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.thirdPartyLinks.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3ThirdPartyLinksMutationOptions<
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

export function getPostYoutubeV3ThumbnailsSetMutationKey() {
  return ['youtube', '/youtube/v3/thumbnails/set', 'POST'] as const
}

export function getPostYoutubeV3ThumbnailsSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thumbnails.set.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.thumbnails.set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3ThumbnailsSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.thumbnails.set.$post>) {
      return parseResponse(client.youtube.v3.thumbnails.set.$post(args, options))
    },
  })
}

export function usePostYoutubeV3ThumbnailsSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.thumbnails.set.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.thumbnails.set.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3ThumbnailsSetMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3VideoAbuseReportReasonsQueryKey(
  args: InferRequestType<typeof client.youtube.v3.videoAbuseReportReasons.$get>,
) {
  return ['youtube', '/youtube/v3/videoAbuseReportReasons', args] as const
}

export function getYoutubeV3VideoAbuseReportReasonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.youtube.v3.videoAbuseReportReasons.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videoAbuseReportReasons.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.youtube.v3.videoAbuseReportReasons.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3VideoAbuseReportReasonsQueryKey>
  >({
    queryKey: getYoutubeV3VideoAbuseReportReasonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.videoAbuseReportReasons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3VideoAbuseReportReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.youtube.v3.videoAbuseReportReasons.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videoAbuseReportReasons.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.videoAbuseReportReasons.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3VideoAbuseReportReasonsQueryKey>
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
      ...getYoutubeV3VideoAbuseReportReasonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3VideoAbuseReportReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.youtube.v3.videoAbuseReportReasons.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videoAbuseReportReasons.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.videoAbuseReportReasons.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3VideoAbuseReportReasonsQueryKey>
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
      ...getYoutubeV3VideoAbuseReportReasonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getYoutubeV3VideoCategoriesQueryKey(
  args: InferRequestType<typeof client.youtube.v3.videoCategories.$get>,
) {
  return ['youtube', '/youtube/v3/videoCategories', args] as const
}

export function getYoutubeV3VideoCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videoCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videoCategories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videoCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3VideoCategoriesQueryKey>
  >({
    queryKey: getYoutubeV3VideoCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.videoCategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3VideoCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videoCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videoCategories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videoCategories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3VideoCategoriesQueryKey>
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
      ...getYoutubeV3VideoCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3VideoCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videoCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videoCategories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videoCategories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3VideoCategoriesQueryKey>
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
      ...getYoutubeV3VideoCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getYoutubeV3VideosQueryKey(
  args: InferRequestType<typeof client.youtube.v3.videos.$get>,
) {
  return ['youtube', '/youtube/v3/videos', args] as const
}

export function getYoutubeV3VideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.youtube.v3.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3VideosQueryKey>
  >({
    queryKey: getYoutubeV3VideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useYoutubeV3Videos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videos.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3VideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYoutubeV3VideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYoutubeV3Videos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videos.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3VideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYoutubeV3VideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutYoutubeV3VideosMutationKey() {
  return ['youtube', '/youtube/v3/videos', 'PUT'] as const
}

export function getPutYoutubeV3VideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.videos.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutYoutubeV3VideosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.videos.$put>) {
      return parseResponse(client.youtube.v3.videos.$put(args, options))
    },
  })
}

export function usePutYoutubeV3Videos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.videos.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutYoutubeV3VideosMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3VideosMutationKey() {
  return ['youtube', '/youtube/v3/videos', 'POST'] as const
}

export function getPostYoutubeV3VideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.videos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3VideosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.videos.$post>) {
      return parseResponse(client.youtube.v3.videos.$post(args, options))
    },
  })
}

export function usePostYoutubeV3Videos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.videos.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3VideosMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteYoutubeV3VideosMutationKey() {
  return ['youtube', '/youtube/v3/videos', 'DELETE'] as const
}

export function getDeleteYoutubeV3VideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.videos.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteYoutubeV3VideosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.videos.$delete>) {
      return parseResponse(client.youtube.v3.videos.$delete(args, options))
    },
  })
}

export function useDeleteYoutubeV3Videos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.videos.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteYoutubeV3VideosMutationOptions<TError, TOnMutateResult>(
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

export function getYoutubeV3VideosGetRatingQueryKey(
  args: InferRequestType<typeof client.youtube.v3.videos.getRating.$get>,
) {
  return ['youtube', '/youtube/v3/videos/getRating', args] as const
}

export function getYoutubeV3VideosGetRatingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.getRating.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videos.getRating.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.getRating.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYoutubeV3VideosGetRatingQueryKey>
  >({
    queryKey: getYoutubeV3VideosGetRatingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.youtube.v3.videos.getRating.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useYoutubeV3VideosGetRating<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.getRating.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videos.getRating.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.videos.getRating.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3VideosGetRatingQueryKey>
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
      ...getYoutubeV3VideosGetRatingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseYoutubeV3VideosGetRating<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.getRating.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.youtube.v3.videos.getRating.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.videos.getRating.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYoutubeV3VideosGetRatingQueryKey>
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
      ...getYoutubeV3VideosGetRatingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostYoutubeV3VideosRateMutationKey() {
  return ['youtube', '/youtube/v3/videos/rate', 'POST'] as const
}

export function getPostYoutubeV3VideosRateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.rate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.videos.rate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3VideosRateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.videos.rate.$post>) {
      return parseResponse(client.youtube.v3.videos.rate.$post(args, options))
    },
  })
}

export function usePostYoutubeV3VideosRate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.rate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.videos.rate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3VideosRateMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3VideosReportAbuseMutationKey() {
  return ['youtube', '/youtube/v3/videos/reportAbuse', 'POST'] as const
}

export function getPostYoutubeV3VideosReportAbuseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.videos.reportAbuse.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.videos.reportAbuse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3VideosReportAbuseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.videos.reportAbuse.$post>) {
      return parseResponse(client.youtube.v3.videos.reportAbuse.$post(args, options))
    },
  })
}

export function usePostYoutubeV3VideosReportAbuse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.videos.reportAbuse.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.videos.reportAbuse.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3VideosReportAbuseMutationOptions<
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

export function getPostYoutubeV3WatermarksSetMutationKey() {
  return ['youtube', '/youtube/v3/watermarks/set', 'POST'] as const
}

export function getPostYoutubeV3WatermarksSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.watermarks.set.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.watermarks.set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3WatermarksSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.watermarks.set.$post>) {
      return parseResponse(client.youtube.v3.watermarks.set.$post(args, options))
    },
  })
}

export function usePostYoutubeV3WatermarksSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.watermarks.set.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.watermarks.set.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3WatermarksSetMutationOptions<TError, TOnMutateResult>(
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

export function getPostYoutubeV3WatermarksUnsetMutationKey() {
  return ['youtube', '/youtube/v3/watermarks/unset', 'POST'] as const
}

export function getPostYoutubeV3WatermarksUnsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.youtube.v3.watermarks.unset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.youtube.v3.watermarks.unset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostYoutubeV3WatermarksUnsetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.youtube.v3.watermarks.unset.$post>) {
      return parseResponse(client.youtube.v3.watermarks.unset.$post(args, options))
    },
  })
}

export function usePostYoutubeV3WatermarksUnset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.youtube.v3.watermarks.unset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.youtube.v3.watermarks.unset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostYoutubeV3WatermarksUnsetMutationOptions<TError, TOnMutateResult>(
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
