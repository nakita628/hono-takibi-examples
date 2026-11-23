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
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.access_token.$get>>,
) {
  return ['oauth', '/oauth/access_token', toValue(args)] as const
}

export function getOauthAccessTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.access_token.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthAccessTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.access_token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthAccessToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.access_token.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>
            >
          >,
          ReturnType<typeof getOauthAccessTokenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAccessTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthAccessTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.access_token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauthRequestTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.request_token.$get>>,
) {
  return ['oauth', '/oauth/request_token', toValue(args)] as const
}

export function getOauthRequestTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.request_token.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthRequestTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.request_token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthRequestToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.request_token.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>
            >
          >,
          ReturnType<typeof getOauthRequestTokenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthRequestTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthRequestTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.request_token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrFavoritesGetContextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>
  >,
) {
  return [
    'rest?method=flickr.favorites.getContext',
    '/rest?method=flickr.favorites.getContext',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrFavoritesGetContextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrFavoritesGetContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.favorites.getContext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrFavoritesGetContextQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrFavoritesGetContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrFavoritesGetContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.favorites.getContext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrFavoritesGetListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>
  >,
) {
  return [
    'rest?method=flickr.favorites.getList',
    '/rest?method=flickr.favorites.getList',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrFavoritesGetListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrFavoritesGetListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.favorites.getList'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrFavoritesGetListQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrFavoritesGetListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrFavoritesGetListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.favorites.getList'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrGalleriesGetPhotosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>
  >,
) {
  return [
    'rest?method=flickr.galleries.getPhotos',
    '/rest?method=flickr.galleries.getPhotos',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrGalleriesGetPhotosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrGalleriesGetPhotosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.galleries.getPhotos'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>
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
                  ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrGalleriesGetPhotosQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGalleriesGetPhotosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrGalleriesGetPhotosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.galleries.getPhotos'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']>
  >,
) {
  return [
    'rest?method=flickr.groups.discuss.replies.getInfo',
    '/rest?method=flickr.groups.discuss.replies.getInfo',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.groups.discuss.replies.getInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']>
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
                    (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
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
                    (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryKey>
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
            ReturnType<(typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrGroupsDiscussRepliesGetInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.groups.discuss.replies.getInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']>
  >,
) {
  return [
    'rest?method=flickr.groups.discuss.topics.getInfo',
    '/rest?method=flickr.groups.discuss.topics.getInfo',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.groups.discuss.topics.getInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']>
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
                    (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
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
                    (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryKey>
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
            ReturnType<(typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrGroupsDiscussTopicsGetInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.groups.discuss.topics.getInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsDiscussTopicsGetListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']>
  >,
) {
  return [
    'rest?method=flickr.groups.discuss.topics.getList',
    '/rest?method=flickr.groups.discuss.topics.getList',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrGroupsDiscussTopicsGetListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrGroupsDiscussTopicsGetListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.groups.discuss.topics.getList'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']>
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
                    (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
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
                    (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrGroupsDiscussTopicsGetListQueryKey>
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
            ReturnType<(typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsDiscussTopicsGetListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrGroupsDiscussTopicsGetListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.groups.discuss.topics.getList'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsGetInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>
  >,
) {
  return [
    'rest?method=flickr.groups.getInfo',
    '/rest?method=flickr.groups.getInfo',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrGroupsGetInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrGroupsGetInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.groups.getInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrGroupsGetInfoQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsGetInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrGroupsGetInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.groups.getInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsPoolsGetContextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>
  >,
) {
  return [
    'rest?method=flickr.groups.pools.getContext',
    '/rest?method=flickr.groups.pools.getContext',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrGroupsPoolsGetContextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrGroupsPoolsGetContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.groups.pools.getContext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrGroupsPoolsGetContextQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsPoolsGetContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrGroupsPoolsGetContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.groups.pools.getContext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrGroupsPoolsGetPhotosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>
  >,
) {
  return [
    'rest?method=flickr.groups.pools.getPhotos',
    '/rest?method=flickr.groups.pools.getPhotos',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrGroupsPoolsGetPhotosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrGroupsPoolsGetPhotosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.groups.pools.getPhotos'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrGroupsPoolsGetPhotosQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrGroupsPoolsGetPhotosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrGroupsPoolsGetPhotosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.groups.pools.getPhotos'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPeopleGetInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>
  >,
) {
  return [
    'rest?method=flickr.people.getInfo',
    '/rest?method=flickr.people.getInfo',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPeopleGetInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPeopleGetInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.people.getInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPeopleGetInfoQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPeopleGetInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPeopleGetInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.people.getInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPeopleGetPhotosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>
  >,
) {
  return [
    'rest?method=flickr.people.getPhotos',
    '/rest?method=flickr.people.getPhotos',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPeopleGetPhotosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPeopleGetPhotosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.people.getPhotos'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPeopleGetPhotosQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPeopleGetPhotosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPeopleGetPhotosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.people.getPhotos'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotolistGetContextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>
  >,
) {
  return [
    'rest?method=flickr.photolist.getContext',
    '/rest?method=flickr.photolist.getContext',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPhotolistGetContextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPhotolistGetContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.photolist.getContext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPhotolistGetContextQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotolistGetContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPhotolistGetContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.photolist.getContext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosGetContextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>
  >,
) {
  return [
    'rest?method=flickr.photos.getContext',
    '/rest?method=flickr.photos.getContext',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPhotosGetContextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPhotosGetContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.photos.getContext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPhotosGetContextQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosGetContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPhotosGetContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.photos.getContext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosGetExifQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>
  >,
) {
  return [
    'rest?method=flickr.photos.getExif',
    '/rest?method=flickr.photos.getExif',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPhotosGetExifQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPhotosGetExifQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.photos.getExif'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPhotosGetExifQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosGetExifQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPhotosGetExifQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.photos.getExif'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosGetInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>
  >,
) {
  return [
    'rest?method=flickr.photos.getInfo',
    '/rest?method=flickr.photos.getInfo',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPhotosGetInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPhotosGetInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.photos.getInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPhotosGetInfoQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosGetInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPhotosGetInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.photos.getInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosGetSizesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>
  >,
) {
  return [
    'rest?method=flickr.photos.getSizes',
    '/rest?method=flickr.photos.getSizes',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPhotosGetSizesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPhotosGetSizesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.photos.getSizes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPhotosGetSizesQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosGetSizesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPhotosGetSizesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.photos.getSizes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosLicensesGetInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>
  >,
) {
  return [
    'rest?method=flickr.photos.licenses.getInfo',
    '/rest?method=flickr.photos.licenses.getInfo',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPhotosLicensesGetInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPhotosLicensesGetInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.photos.licenses.getInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPhotosLicensesGetInfoQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosLicensesGetInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPhotosLicensesGetInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.photos.licenses.getInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>
  >,
) {
  return [
    'rest?method=flickr.photos.search',
    '/rest?method=flickr.photos.search',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPhotosSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPhotosSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.photos.search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPhotosSearchQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPhotosSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.photos.search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosetsGetContextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>
  >,
) {
  return [
    'rest?method=flickr.photosets.getContext',
    '/rest?method=flickr.photosets.getContext',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPhotosetsGetContextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPhotosetsGetContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.photosets.getContext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPhotosetsGetContextQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosetsGetContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPhotosetsGetContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.photosets.getContext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosetsGetListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>
  >,
) {
  return [
    'rest?method=flickr.photosets.getList',
    '/rest?method=flickr.photosets.getList',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPhotosetsGetListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPhotosetsGetListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.photosets.getList'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPhotosetsGetListQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosetsGetListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPhotosetsGetListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.photosets.getList'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrPhotosetsGetPhotosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>
  >,
) {
  return [
    'rest?method=flickr.photosets.getPhotos',
    '/rest?method=flickr.photosets.getPhotos',
    toValue(args),
  ] as const
}

export function getRestMethodFlickrPhotosetsGetPhotosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrPhotosetsGetPhotosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.photosets.getPhotos'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>
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
                  ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrPhotosetsGetPhotosQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrPhotosetsGetPhotosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrPhotosetsGetPhotosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.photosets.getPhotos'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestMethodFlickrTestEchoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>>,
) {
  return ['rest?method=flickr.test.echo', '/rest?method=flickr.test.echo', toValue(args)] as const
}

export function getRestMethodFlickrTestEchoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestMethodFlickrTestEchoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rest?method=flickr.test.echo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestMethodFlickrTestEchoQueryKey>
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
          Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestMethodFlickrTestEchoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestMethodFlickrTestEchoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rest?method=flickr.test.echo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upload.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.upload.$post>,
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
