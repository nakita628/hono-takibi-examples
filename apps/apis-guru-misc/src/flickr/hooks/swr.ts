import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetOauthAccessTokenKey(
  args: InferRequestType<typeof client.oauth.access_token.$get>,
) {
  return ['oauth', '/oauth/access_token', args] as const
}

export function useGetOauthAccessToken<TError = unknown>(
  args: InferRequestType<typeof client.oauth.access_token.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauthAccessTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.access_token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthAccessToken<TError = unknown>(
  args: InferRequestType<typeof client.oauth.access_token.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauthAccessTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.access_token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauthRequestTokenKey(
  args: InferRequestType<typeof client.oauth.request_token.$get>,
) {
  return ['oauth', '/oauth/request_token', args] as const
}

export function useGetOauthRequestToken<TError = unknown>(
  args: InferRequestType<typeof client.oauth.request_token.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauthRequestTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.request_token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthRequestToken<TError = unknown>(
  args: InferRequestType<typeof client.oauth.request_token.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauthRequestTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.request_token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrFavoritesGetContextKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>,
) {
  return [
    'rest?method=flickr.favorites.getContext',
    '/rest?method=flickr.favorites.getContext',
    args,
  ] as const
}

export function useGetRestMethodFlickrFavoritesGetContext<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>>
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
        ? getGetRestMethodFlickrFavoritesGetContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.favorites.getContext'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrFavoritesGetContext<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>>
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
        ? getGetRestMethodFlickrFavoritesGetContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.favorites.getContext'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrFavoritesGetListKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>,
) {
  return [
    'rest?method=flickr.favorites.getList',
    '/rest?method=flickr.favorites.getList',
    args,
  ] as const
}

export function useGetRestMethodFlickrFavoritesGetList<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
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
        ? getGetRestMethodFlickrFavoritesGetListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.favorites.getList'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrFavoritesGetList<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
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
        ? getGetRestMethodFlickrFavoritesGetListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.favorites.getList'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrGalleriesGetPhotosKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>,
) {
  return [
    'rest?method=flickr.galleries.getPhotos',
    '/rest?method=flickr.galleries.getPhotos',
    args,
  ] as const
}

export function useGetRestMethodFlickrGalleriesGetPhotos<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
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
        ? getGetRestMethodFlickrGalleriesGetPhotosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.galleries.getPhotos'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrGalleriesGetPhotos<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
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
        ? getGetRestMethodFlickrGalleriesGetPhotosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.galleries.getPhotos'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrGroupsDiscussRepliesGetInfoKey(
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

export function useGetRestMethodFlickrGroupsDiscussRepliesGetInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestMethodFlickrGroupsDiscussRepliesGetInfoKey(args)
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
                (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
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
          client['rest?method=flickr.groups.discuss.replies.getInfo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrGroupsDiscussRepliesGetInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestMethodFlickrGroupsDiscussRepliesGetInfoKey(args)
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
                (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
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
          client['rest?method=flickr.groups.discuss.replies.getInfo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrGroupsDiscussTopicsGetInfoKey(
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

export function useGetRestMethodFlickrGroupsDiscussTopicsGetInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestMethodFlickrGroupsDiscussTopicsGetInfoKey(args)
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
                (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
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
          client['rest?method=flickr.groups.discuss.topics.getInfo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrGroupsDiscussTopicsGetInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestMethodFlickrGroupsDiscussTopicsGetInfoKey(args)
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
                (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
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
          client['rest?method=flickr.groups.discuss.topics.getInfo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrGroupsDiscussTopicsGetListKey(
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

export function useGetRestMethodFlickrGroupsDiscussTopicsGetList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestMethodFlickrGroupsDiscussTopicsGetListKey(args)
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
                (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
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
          client['rest?method=flickr.groups.discuss.topics.getList'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrGroupsDiscussTopicsGetList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestMethodFlickrGroupsDiscussTopicsGetListKey(args)
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
                (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
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
          client['rest?method=flickr.groups.discuss.topics.getList'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrGroupsGetInfoKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>,
) {
  return ['rest?method=flickr.groups.getInfo', '/rest?method=flickr.groups.getInfo', args] as const
}

export function useGetRestMethodFlickrGroupsGetInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
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
        ? getGetRestMethodFlickrGroupsGetInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.groups.getInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrGroupsGetInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
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
        ? getGetRestMethodFlickrGroupsGetInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.groups.getInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrGroupsPoolsGetContextKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>,
) {
  return [
    'rest?method=flickr.groups.pools.getContext',
    '/rest?method=flickr.groups.pools.getContext',
    args,
  ] as const
}

export function useGetRestMethodFlickrGroupsPoolsGetContext<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>
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
        ? getGetRestMethodFlickrGroupsPoolsGetContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['rest?method=flickr.groups.pools.getContext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrGroupsPoolsGetContext<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>
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
        ? getGetRestMethodFlickrGroupsPoolsGetContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['rest?method=flickr.groups.pools.getContext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrGroupsPoolsGetPhotosKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>,
) {
  return [
    'rest?method=flickr.groups.pools.getPhotos',
    '/rest?method=flickr.groups.pools.getPhotos',
    args,
  ] as const
}

export function useGetRestMethodFlickrGroupsPoolsGetPhotos<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>
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
        ? getGetRestMethodFlickrGroupsPoolsGetPhotosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['rest?method=flickr.groups.pools.getPhotos'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrGroupsPoolsGetPhotos<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>
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
        ? getGetRestMethodFlickrGroupsPoolsGetPhotosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['rest?method=flickr.groups.pools.getPhotos'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPeopleGetInfoKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>,
) {
  return ['rest?method=flickr.people.getInfo', '/rest?method=flickr.people.getInfo', args] as const
}

export function useGetRestMethodFlickrPeopleGetInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
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
        ? getGetRestMethodFlickrPeopleGetInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.people.getInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPeopleGetInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
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
        ? getGetRestMethodFlickrPeopleGetInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.people.getInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPeopleGetPhotosKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>,
) {
  return [
    'rest?method=flickr.people.getPhotos',
    '/rest?method=flickr.people.getPhotos',
    args,
  ] as const
}

export function useGetRestMethodFlickrPeopleGetPhotos<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
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
        ? getGetRestMethodFlickrPeopleGetPhotosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.people.getPhotos'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPeopleGetPhotos<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
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
        ? getGetRestMethodFlickrPeopleGetPhotosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.people.getPhotos'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPhotolistGetContextKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>,
) {
  return [
    'rest?method=flickr.photolist.getContext',
    '/rest?method=flickr.photolist.getContext',
    args,
  ] as const
}

export function useGetRestMethodFlickrPhotolistGetContext<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>>
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
        ? getGetRestMethodFlickrPhotolistGetContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photolist.getContext'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPhotolistGetContext<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>>
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
        ? getGetRestMethodFlickrPhotolistGetContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photolist.getContext'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPhotosGetContextKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>,
) {
  return [
    'rest?method=flickr.photos.getContext',
    '/rest?method=flickr.photos.getContext',
    args,
  ] as const
}

export function useGetRestMethodFlickrPhotosGetContext<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
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
        ? getGetRestMethodFlickrPhotosGetContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photos.getContext'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPhotosGetContext<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
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
        ? getGetRestMethodFlickrPhotosGetContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photos.getContext'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPhotosGetExifKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>,
) {
  return ['rest?method=flickr.photos.getExif', '/rest?method=flickr.photos.getExif', args] as const
}

export function useGetRestMethodFlickrPhotosGetExif<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
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
        ? getGetRestMethodFlickrPhotosGetExifKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photos.getExif'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPhotosGetExif<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
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
        ? getGetRestMethodFlickrPhotosGetExifKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photos.getExif'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPhotosGetInfoKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>,
) {
  return ['rest?method=flickr.photos.getInfo', '/rest?method=flickr.photos.getInfo', args] as const
}

export function useGetRestMethodFlickrPhotosGetInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
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
        ? getGetRestMethodFlickrPhotosGetInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photos.getInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPhotosGetInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
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
        ? getGetRestMethodFlickrPhotosGetInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photos.getInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPhotosGetSizesKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>,
) {
  return [
    'rest?method=flickr.photos.getSizes',
    '/rest?method=flickr.photos.getSizes',
    args,
  ] as const
}

export function useGetRestMethodFlickrPhotosGetSizes<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
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
        ? getGetRestMethodFlickrPhotosGetSizesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photos.getSizes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPhotosGetSizes<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
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
        ? getGetRestMethodFlickrPhotosGetSizesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photos.getSizes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPhotosLicensesGetInfoKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>,
) {
  return [
    'rest?method=flickr.photos.licenses.getInfo',
    '/rest?method=flickr.photos.licenses.getInfo',
    args,
  ] as const
}

export function useGetRestMethodFlickrPhotosLicensesGetInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>
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
        ? getGetRestMethodFlickrPhotosLicensesGetInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['rest?method=flickr.photos.licenses.getInfo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPhotosLicensesGetInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>
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
        ? getGetRestMethodFlickrPhotosLicensesGetInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['rest?method=flickr.photos.licenses.getInfo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPhotosSearchKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>,
) {
  return ['rest?method=flickr.photos.search', '/rest?method=flickr.photos.search', args] as const
}

export function useGetRestMethodFlickrPhotosSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
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
        ? getGetRestMethodFlickrPhotosSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photos.search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPhotosSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
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
        ? getGetRestMethodFlickrPhotosSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photos.search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photos.search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPhotosetsGetContextKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>,
) {
  return [
    'rest?method=flickr.photosets.getContext',
    '/rest?method=flickr.photosets.getContext',
    args,
  ] as const
}

export function useGetRestMethodFlickrPhotosetsGetContext<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>>
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
        ? getGetRestMethodFlickrPhotosetsGetContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photosets.getContext'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPhotosetsGetContext<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>>
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
        ? getGetRestMethodFlickrPhotosetsGetContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photosets.getContext'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPhotosetsGetListKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>,
) {
  return [
    'rest?method=flickr.photosets.getList',
    '/rest?method=flickr.photosets.getList',
    args,
  ] as const
}

export function useGetRestMethodFlickrPhotosetsGetList<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
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
        ? getGetRestMethodFlickrPhotosetsGetListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photosets.getList'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPhotosetsGetList<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
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
        ? getGetRestMethodFlickrPhotosetsGetListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photosets.getList'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrPhotosetsGetPhotosKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>,
) {
  return [
    'rest?method=flickr.photosets.getPhotos',
    '/rest?method=flickr.photosets.getPhotos',
    args,
  ] as const
}

export function useGetRestMethodFlickrPhotosetsGetPhotos<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
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
        ? getGetRestMethodFlickrPhotosetsGetPhotosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photosets.getPhotos'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrPhotosetsGetPhotos<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
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
        ? getGetRestMethodFlickrPhotosetsGetPhotosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['rest?method=flickr.photosets.getPhotos'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestMethodFlickrTestEchoKey(
  args: InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>,
) {
  return ['rest?method=flickr.test.echo', '/rest?method=flickr.test.echo', args] as const
}

export function useGetRestMethodFlickrTestEcho<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
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
        ? getGetRestMethodFlickrTestEchoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['rest?method=flickr.test.echo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestMethodFlickrTestEcho<TError = unknown>(
  args: InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
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
        ? getGetRestMethodFlickrTestEchoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['rest?method=flickr.test.echo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['rest?method=flickr.test.echo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUploadKey() {
  return ['upload', '/upload', 'POST'] as const
}

export function usePostUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upload.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.upload.$post> }) =>
        parseResponse(client.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
