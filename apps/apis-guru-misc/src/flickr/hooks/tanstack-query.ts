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

export function getOauthKey() {
  return ['oauth'] as const
}

export function getRestMethodFlickrFavoritesGetContextKey() {
  return ['rest?method=flickr.favorites.getContext'] as const
}

export function getRestMethodFlickrFavoritesGetListKey() {
  return ['rest?method=flickr.favorites.getList'] as const
}

export function getRestMethodFlickrGalleriesGetPhotosKey() {
  return ['rest?method=flickr.galleries.getPhotos'] as const
}

export function getRestMethodFlickrGroupsDiscussRepliesGetInfoKey() {
  return ['rest?method=flickr.groups.discuss.replies.getInfo'] as const
}

export function getRestMethodFlickrGroupsDiscussTopicsGetInfoKey() {
  return ['rest?method=flickr.groups.discuss.topics.getInfo'] as const
}

export function getRestMethodFlickrGroupsDiscussTopicsGetListKey() {
  return ['rest?method=flickr.groups.discuss.topics.getList'] as const
}

export function getRestMethodFlickrGroupsGetInfoKey() {
  return ['rest?method=flickr.groups.getInfo'] as const
}

export function getRestMethodFlickrGroupsPoolsGetContextKey() {
  return ['rest?method=flickr.groups.pools.getContext'] as const
}

export function getRestMethodFlickrGroupsPoolsGetPhotosKey() {
  return ['rest?method=flickr.groups.pools.getPhotos'] as const
}

export function getRestMethodFlickrPeopleGetInfoKey() {
  return ['rest?method=flickr.people.getInfo'] as const
}

export function getRestMethodFlickrPeopleGetPhotosKey() {
  return ['rest?method=flickr.people.getPhotos'] as const
}

export function getRestMethodFlickrPhotolistGetContextKey() {
  return ['rest?method=flickr.photolist.getContext'] as const
}

export function getRestMethodFlickrPhotosGetContextKey() {
  return ['rest?method=flickr.photos.getContext'] as const
}

export function getRestMethodFlickrPhotosGetExifKey() {
  return ['rest?method=flickr.photos.getExif'] as const
}

export function getRestMethodFlickrPhotosGetInfoKey() {
  return ['rest?method=flickr.photos.getInfo'] as const
}

export function getRestMethodFlickrPhotosGetSizesKey() {
  return ['rest?method=flickr.photos.getSizes'] as const
}

export function getRestMethodFlickrPhotosLicensesGetInfoKey() {
  return ['rest?method=flickr.photos.licenses.getInfo'] as const
}

export function getRestMethodFlickrPhotosSearchKey() {
  return ['rest?method=flickr.photos.search'] as const
}

export function getRestMethodFlickrPhotosetsGetContextKey() {
  return ['rest?method=flickr.photosets.getContext'] as const
}

export function getRestMethodFlickrPhotosetsGetListKey() {
  return ['rest?method=flickr.photosets.getList'] as const
}

export function getRestMethodFlickrPhotosetsGetPhotosKey() {
  return ['rest?method=flickr.photosets.getPhotos'] as const
}

export function getRestMethodFlickrTestEchoKey() {
  return ['rest?method=flickr.test.echo'] as const
}

export function getUploadKey() {
  return ['upload'] as const
}

export function getOauthAccessTokenQueryKey(
  args: InferRequestType<typeof client.oauth.access_token.$get>,
) {
  return ['oauth', '/oauth/access_token', args] as const
}

export function getOauthAccessTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth.access_token.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAccessTokenQueryKey>
  >({
    queryKey: getOauthAccessTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.access_token.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauthAccessToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.access_token.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAccessTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthAccessTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauthAccessToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.access_token.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAccessTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthAccessTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOauthRequestTokenQueryKey(
  args: InferRequestType<typeof client.oauth.request_token.$get>,
) {
  return ['oauth', '/oauth/request_token', args] as const
}

export function getOauthRequestTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth.request_token.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthRequestTokenQueryKey>
  >({
    queryKey: getOauthRequestTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.request_token.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauthRequestToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.request_token.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthRequestTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthRequestTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauthRequestToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.request_token.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthRequestTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthRequestTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRestMethodFlickrFavoritesGetContextQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>,
) {
  return [
    'rest?method=flickr.favorites.getContext',
    '/rest?method=flickr.favorites.getContext',
    args,
  ] as const
}

export function getRestMethodFlickrFavoritesGetContextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrFavoritesGetContextQueryKey>
  >({
    queryKey: getRestMethodFlickrFavoritesGetContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.favorites.getContext'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrFavoritesGetContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrFavoritesGetContextQueryKey>
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
      ...getRestMethodFlickrFavoritesGetContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrFavoritesGetContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrFavoritesGetContextQueryKey>
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
      ...getRestMethodFlickrFavoritesGetContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrFavoritesGetListQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>,
) {
  return [
    'rest?method=flickr.favorites.getList',
    '/rest?method=flickr.favorites.getList',
    args,
  ] as const
}

export function getRestMethodFlickrFavoritesGetListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrFavoritesGetListQueryKey>
  >({
    queryKey: getRestMethodFlickrFavoritesGetListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.favorites.getList'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrFavoritesGetList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrFavoritesGetListQueryKey>
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
      ...getRestMethodFlickrFavoritesGetListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrFavoritesGetList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrFavoritesGetListQueryKey>
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
      ...getRestMethodFlickrFavoritesGetListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrGalleriesGetPhotosQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>,
) {
  return [
    'rest?method=flickr.galleries.getPhotos',
    '/rest?method=flickr.galleries.getPhotos',
    args,
  ] as const
}

export function getRestMethodFlickrGalleriesGetPhotosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGalleriesGetPhotosQueryKey>
  >({
    queryKey: getRestMethodFlickrGalleriesGetPhotosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.galleries.getPhotos'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrGalleriesGetPhotos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGalleriesGetPhotosQueryKey>
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
      ...getRestMethodFlickrGalleriesGetPhotosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrGalleriesGetPhotos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGalleriesGetPhotosQueryKey>
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
      ...getRestMethodFlickrGalleriesGetPhotosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryKey(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
  >,
) {
  return [
    'rest?method=flickr.groups.discuss.replies.getInfo',
    '/rest?method=flickr.groups.discuss.replies.getInfo',
    args,
  ] as const
}

export function getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryKey>
  >({
    queryKey: getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.groups.discuss.replies.getInfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrGroupsDiscussRepliesGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryKey>
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
      ...getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrGroupsDiscussRepliesGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryKey>
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
      ...getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryKey(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
  >,
) {
  return [
    'rest?method=flickr.groups.discuss.topics.getInfo',
    '/rest?method=flickr.groups.discuss.topics.getInfo',
    args,
  ] as const
}

export function getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryKey>
  >({
    queryKey: getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.groups.discuss.topics.getInfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrGroupsDiscussTopicsGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryKey>
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
      ...getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrGroupsDiscussTopicsGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryKey>
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
      ...getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsDiscussTopicsGetListQueryKey(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
  >,
) {
  return [
    'rest?method=flickr.groups.discuss.topics.getList',
    '/rest?method=flickr.groups.discuss.topics.getList',
    args,
  ] as const
}

export function getRestMethodFlickrGroupsDiscussTopicsGetListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsDiscussTopicsGetListQueryKey>
  >({
    queryKey: getRestMethodFlickrGroupsDiscussTopicsGetListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.groups.discuss.topics.getList'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrGroupsDiscussTopicsGetList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsDiscussTopicsGetListQueryKey>
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
      ...getRestMethodFlickrGroupsDiscussTopicsGetListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrGroupsDiscussTopicsGetList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsDiscussTopicsGetListQueryKey>
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
      ...getRestMethodFlickrGroupsDiscussTopicsGetListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsGetInfoQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>,
) {
  return ['rest?method=flickr.groups.getInfo', '/rest?method=flickr.groups.getInfo', args] as const
}

export function getRestMethodFlickrGroupsGetInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsGetInfoQueryKey>
  >({
    queryKey: getRestMethodFlickrGroupsGetInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.groups.getInfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrGroupsGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsGetInfoQueryKey>
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
      ...getRestMethodFlickrGroupsGetInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrGroupsGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsGetInfoQueryKey>
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
      ...getRestMethodFlickrGroupsGetInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsPoolsGetContextQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>,
) {
  return [
    'rest?method=flickr.groups.pools.getContext',
    '/rest?method=flickr.groups.pools.getContext',
    args,
  ] as const
}

export function getRestMethodFlickrGroupsPoolsGetContextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsPoolsGetContextQueryKey>
  >({
    queryKey: getRestMethodFlickrGroupsPoolsGetContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.groups.pools.getContext'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrGroupsPoolsGetContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsPoolsGetContextQueryKey>
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
      ...getRestMethodFlickrGroupsPoolsGetContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrGroupsPoolsGetContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsPoolsGetContextQueryKey>
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
      ...getRestMethodFlickrGroupsPoolsGetContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsPoolsGetPhotosQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>,
) {
  return [
    'rest?method=flickr.groups.pools.getPhotos',
    '/rest?method=flickr.groups.pools.getPhotos',
    args,
  ] as const
}

export function getRestMethodFlickrGroupsPoolsGetPhotosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsPoolsGetPhotosQueryKey>
  >({
    queryKey: getRestMethodFlickrGroupsPoolsGetPhotosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.groups.pools.getPhotos'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrGroupsPoolsGetPhotos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsPoolsGetPhotosQueryKey>
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
      ...getRestMethodFlickrGroupsPoolsGetPhotosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrGroupsPoolsGetPhotos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrGroupsPoolsGetPhotosQueryKey>
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
      ...getRestMethodFlickrGroupsPoolsGetPhotosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPeopleGetInfoQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>,
) {
  return ['rest?method=flickr.people.getInfo', '/rest?method=flickr.people.getInfo', args] as const
}

export function getRestMethodFlickrPeopleGetInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPeopleGetInfoQueryKey>
  >({
    queryKey: getRestMethodFlickrPeopleGetInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.people.getInfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPeopleGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPeopleGetInfoQueryKey>
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
      ...getRestMethodFlickrPeopleGetInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPeopleGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPeopleGetInfoQueryKey>
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
      ...getRestMethodFlickrPeopleGetInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPeopleGetPhotosQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>,
) {
  return [
    'rest?method=flickr.people.getPhotos',
    '/rest?method=flickr.people.getPhotos',
    args,
  ] as const
}

export function getRestMethodFlickrPeopleGetPhotosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPeopleGetPhotosQueryKey>
  >({
    queryKey: getRestMethodFlickrPeopleGetPhotosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.people.getPhotos'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPeopleGetPhotos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPeopleGetPhotosQueryKey>
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
      ...getRestMethodFlickrPeopleGetPhotosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPeopleGetPhotos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPeopleGetPhotosQueryKey>
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
      ...getRestMethodFlickrPeopleGetPhotosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotolistGetContextQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>,
) {
  return [
    'rest?method=flickr.photolist.getContext',
    '/rest?method=flickr.photolist.getContext',
    args,
  ] as const
}

export function getRestMethodFlickrPhotolistGetContextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotolistGetContextQueryKey>
  >({
    queryKey: getRestMethodFlickrPhotolistGetContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.photolist.getContext'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPhotolistGetContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotolistGetContextQueryKey>
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
      ...getRestMethodFlickrPhotolistGetContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPhotolistGetContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotolistGetContextQueryKey>
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
      ...getRestMethodFlickrPhotolistGetContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosGetContextQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>,
) {
  return [
    'rest?method=flickr.photos.getContext',
    '/rest?method=flickr.photos.getContext',
    args,
  ] as const
}

export function getRestMethodFlickrPhotosGetContextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosGetContextQueryKey>
  >({
    queryKey: getRestMethodFlickrPhotosGetContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.photos.getContext'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPhotosGetContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosGetContextQueryKey>
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
      ...getRestMethodFlickrPhotosGetContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPhotosGetContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosGetContextQueryKey>
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
      ...getRestMethodFlickrPhotosGetContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosGetExifQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>,
) {
  return ['rest?method=flickr.photos.getExif', '/rest?method=flickr.photos.getExif', args] as const
}

export function getRestMethodFlickrPhotosGetExifQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosGetExifQueryKey>
  >({
    queryKey: getRestMethodFlickrPhotosGetExifQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.photos.getExif'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPhotosGetExif<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosGetExifQueryKey>
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
      ...getRestMethodFlickrPhotosGetExifQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPhotosGetExif<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosGetExifQueryKey>
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
      ...getRestMethodFlickrPhotosGetExifQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosGetInfoQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>,
) {
  return ['rest?method=flickr.photos.getInfo', '/rest?method=flickr.photos.getInfo', args] as const
}

export function getRestMethodFlickrPhotosGetInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosGetInfoQueryKey>
  >({
    queryKey: getRestMethodFlickrPhotosGetInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.photos.getInfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPhotosGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosGetInfoQueryKey>
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
      ...getRestMethodFlickrPhotosGetInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPhotosGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosGetInfoQueryKey>
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
      ...getRestMethodFlickrPhotosGetInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosGetSizesQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>,
) {
  return [
    'rest?method=flickr.photos.getSizes',
    '/rest?method=flickr.photos.getSizes',
    args,
  ] as const
}

export function getRestMethodFlickrPhotosGetSizesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosGetSizesQueryKey>
  >({
    queryKey: getRestMethodFlickrPhotosGetSizesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.photos.getSizes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPhotosGetSizes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosGetSizesQueryKey>
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
      ...getRestMethodFlickrPhotosGetSizesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPhotosGetSizes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosGetSizesQueryKey>
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
      ...getRestMethodFlickrPhotosGetSizesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosLicensesGetInfoQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>,
) {
  return [
    'rest?method=flickr.photos.licenses.getInfo',
    '/rest?method=flickr.photos.licenses.getInfo',
    args,
  ] as const
}

export function getRestMethodFlickrPhotosLicensesGetInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosLicensesGetInfoQueryKey>
  >({
    queryKey: getRestMethodFlickrPhotosLicensesGetInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.photos.licenses.getInfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPhotosLicensesGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosLicensesGetInfoQueryKey>
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
      ...getRestMethodFlickrPhotosLicensesGetInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPhotosLicensesGetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosLicensesGetInfoQueryKey>
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
      ...getRestMethodFlickrPhotosLicensesGetInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosSearchQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>,
) {
  return ['rest?method=flickr.photos.search', '/rest?method=flickr.photos.search', args] as const
}

export function getRestMethodFlickrPhotosSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosSearchQueryKey>
  >({
    queryKey: getRestMethodFlickrPhotosSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.photos.search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPhotosSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosSearchQueryKey>
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
      ...getRestMethodFlickrPhotosSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPhotosSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosSearchQueryKey>
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
      ...getRestMethodFlickrPhotosSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosetsGetContextQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>,
) {
  return [
    'rest?method=flickr.photosets.getContext',
    '/rest?method=flickr.photosets.getContext',
    args,
  ] as const
}

export function getRestMethodFlickrPhotosetsGetContextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosetsGetContextQueryKey>
  >({
    queryKey: getRestMethodFlickrPhotosetsGetContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.photosets.getContext'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPhotosetsGetContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosetsGetContextQueryKey>
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
      ...getRestMethodFlickrPhotosetsGetContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPhotosetsGetContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosetsGetContextQueryKey>
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
      ...getRestMethodFlickrPhotosetsGetContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosetsGetListQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>,
) {
  return [
    'rest?method=flickr.photosets.getList',
    '/rest?method=flickr.photosets.getList',
    args,
  ] as const
}

export function getRestMethodFlickrPhotosetsGetListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosetsGetListQueryKey>
  >({
    queryKey: getRestMethodFlickrPhotosetsGetListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.photosets.getList'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPhotosetsGetList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosetsGetListQueryKey>
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
      ...getRestMethodFlickrPhotosetsGetListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPhotosetsGetList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosetsGetListQueryKey>
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
      ...getRestMethodFlickrPhotosetsGetListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosetsGetPhotosQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>,
) {
  return [
    'rest?method=flickr.photosets.getPhotos',
    '/rest?method=flickr.photosets.getPhotos',
    args,
  ] as const
}

export function getRestMethodFlickrPhotosetsGetPhotosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosetsGetPhotosQueryKey>
  >({
    queryKey: getRestMethodFlickrPhotosetsGetPhotosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.photosets.getPhotos'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrPhotosetsGetPhotos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosetsGetPhotosQueryKey>
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
      ...getRestMethodFlickrPhotosetsGetPhotosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrPhotosetsGetPhotos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrPhotosetsGetPhotosQueryKey>
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
      ...getRestMethodFlickrPhotosetsGetPhotosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestMethodFlickrTestEchoQueryKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>,
) {
  return ['rest?method=flickr.test.echo', '/rest?method=flickr.test.echo', args] as const
}

export function getRestMethodFlickrTestEchoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrTestEchoQueryKey>
  >({
    queryKey: getRestMethodFlickrTestEchoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rest?method=flickr.test.echo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestMethodFlickrTestEcho<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrTestEchoQueryKey>
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
      ...getRestMethodFlickrTestEchoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestMethodFlickrTestEcho<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestMethodFlickrTestEchoQueryKey>
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
      ...getRestMethodFlickrTestEchoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUploadMutationKey() {
  return ['upload', '/upload', 'POST'] as const
}

export function getPostUploadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upload.$post>>>>>,
    TError,
    InferRequestType<typeof client.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.upload.$post>) {
      return parseResponse(client.upload.$post(args, options))
    },
  })
}

export function usePostUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upload.$post>>>>>,
        TError,
        InferRequestType<typeof client.upload.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
