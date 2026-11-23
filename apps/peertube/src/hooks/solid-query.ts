import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getDownloadKey() {
  return ['download'] as const
}

export function getFeedsKey() {
  return ['feeds'] as const
}

export function getStaticKey() {
  return ['static'] as const
}

export function getStaticWebVideosFilenameQueryKey(
  args: InferRequestType<(typeof client.static)['web-videos'][':filename']['$get']>,
) {
  return ['static', '/static/web-videos/:filename', args] as const
}

export function getStaticWebVideosFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.static)['web-videos'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.static)['web-videos'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.static)['web-videos'][':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStaticWebVideosFilenameQueryKey>
  >({
    queryKey: getStaticWebVideosFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.static['web-videos'][':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStaticWebVideosFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.static)['web-videos'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.static)['web-videos'][':filename']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.static)['web-videos'][':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStaticWebVideosFilenameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStaticWebVideosFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStaticWebVideosPrivateFilenameQueryKey(
  args: InferRequestType<(typeof client.static)['web-videos']['private'][':filename']['$get']>,
) {
  return ['static', '/static/web-videos/private/:filename', args] as const
}

export function getStaticWebVideosPrivateFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.static)['web-videos']['private'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.static)['web-videos']['private'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.static)['web-videos']['private'][':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStaticWebVideosPrivateFilenameQueryKey>
  >({
    queryKey: getStaticWebVideosPrivateFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.static['web-videos'].private[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStaticWebVideosPrivateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.static)['web-videos']['private'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.static)['web-videos']['private'][':filename']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.static)['web-videos']['private'][':filename']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStaticWebVideosPrivateFilenameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStaticWebVideosPrivateFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStaticStreamingPlaylistsHlsFilenameQueryKey(
  args: InferRequestType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>,
) {
  return ['static', '/static/streaming-playlists/hls/:filename', args] as const
}

export function getStaticStreamingPlaylistsHlsFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStaticStreamingPlaylistsHlsFilenameQueryKey>
  >({
    queryKey: getStaticStreamingPlaylistsHlsFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.static['streaming-playlists'].hls[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStaticStreamingPlaylistsHlsFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.static)['streaming-playlists']['hls'][':filename']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.static)['streaming-playlists']['hls'][':filename']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStaticStreamingPlaylistsHlsFilenameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStaticStreamingPlaylistsHlsFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStaticStreamingPlaylistsHlsPrivateFilenameQueryKey(
  args: InferRequestType<
    (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
  >,
) {
  return ['static', '/static/streaming-playlists/hls/private/:filename', args] as const
}

export function getStaticStreamingPlaylistsHlsPrivateFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStaticStreamingPlaylistsHlsPrivateFilenameQueryKey>
  >({
    queryKey: getStaticStreamingPlaylistsHlsPrivateFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.static['streaming-playlists'].hls.private[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStaticStreamingPlaylistsHlsPrivateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStaticStreamingPlaylistsHlsPrivateFilenameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStaticStreamingPlaylistsHlsPrivateFilenameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDownloadVideosGenerateVideoIdOrUUIDQueryKey(
  args: InferRequestType<(typeof client.download.videos.generate)[':videoIdOrUUID']['$get']>,
) {
  return ['download', '/download/videos/generate/:videoIdOrUUID', args] as const
}

export function getDownloadVideosGenerateVideoIdOrUUIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.download.videos.generate)[':videoIdOrUUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.download.videos.generate)[':videoIdOrUUID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.download.videos.generate)[':videoIdOrUUID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDownloadVideosGenerateVideoIdOrUUIDQueryKey>
  >({
    queryKey: getDownloadVideosGenerateVideoIdOrUUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.download.videos.generate[':videoIdOrUUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDownloadVideosGenerateVideoIdOrUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.download.videos.generate)[':videoIdOrUUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.download.videos.generate)[':videoIdOrUUID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.download.videos.generate)[':videoIdOrUUID']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDownloadVideosGenerateVideoIdOrUUIDQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDownloadVideosGenerateVideoIdOrUUIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFeedsVideoCommentsFormatQueryKey(
  args: InferRequestType<(typeof client.feeds)['video-comments.{format}']['$get']>,
) {
  return ['feeds', '/feeds/video-comments.{format}', args] as const
}

export function getFeedsVideoCommentsFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feeds)['video-comments.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feeds)['video-comments.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feeds)['video-comments.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsVideoCommentsFormatQueryKey>
  >({
    queryKey: getFeedsVideoCommentsFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds['video-comments.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFeedsVideoCommentsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feeds)['video-comments.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feeds)['video-comments.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds)['video-comments.{format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeedsVideoCommentsFormatQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFeedsVideoCommentsFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFeedsVideosFormatQueryKey(
  args: InferRequestType<(typeof client.feeds)['videos.{format}']['$get']>,
) {
  return ['feeds', '/feeds/videos.{format}', args] as const
}

export function getFeedsVideosFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)['videos.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feeds)['videos.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)['videos.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsVideosFormatQueryKey>
  >({
    queryKey: getFeedsVideosFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds['videos.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFeedsVideosFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)['videos.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feeds)['videos.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds)['videos.{format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeedsVideosFormatQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeedsVideosFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFeedsSubscriptionsFormatQueryKey(
  args: InferRequestType<(typeof client.feeds)['subscriptions.{format}']['$get']>,
) {
  return ['feeds', '/feeds/subscriptions.{format}', args] as const
}

export function getFeedsSubscriptionsFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feeds)['subscriptions.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feeds)['subscriptions.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feeds)['subscriptions.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsSubscriptionsFormatQueryKey>
  >({
    queryKey: getFeedsSubscriptionsFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds['subscriptions.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFeedsSubscriptionsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feeds)['subscriptions.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feeds)['subscriptions.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds)['subscriptions.{format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeedsSubscriptionsFormatQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFeedsSubscriptionsFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFeedsPodcastVideosXmlQueryKey(
  args: InferRequestType<(typeof client.feeds.podcast)['videos.xml']['$get']>,
) {
  return ['feeds', '/feeds/podcast/videos.xml', args] as const
}

export function getFeedsPodcastVideosXmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.podcast)['videos.xml']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feeds.podcast)['videos.xml']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feeds.podcast)['videos.xml']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsPodcastVideosXmlQueryKey>
  >({
    queryKey: getFeedsPodcastVideosXmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds.podcast['videos.xml'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFeedsPodcastVideosXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.podcast)['videos.xml']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feeds.podcast)['videos.xml']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds.podcast)['videos.xml']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeedsPodcastVideosXmlQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFeedsPodcastVideosXmlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFeedsPodcastVideoChaptersJsonQueryKey(
  args: InferRequestType<(typeof client.feeds.podcast)['video-chapters.json']['$get']>,
) {
  return ['feeds', '/feeds/podcast/video-chapters.json', args] as const
}

export function getFeedsPodcastVideoChaptersJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feeds.podcast)['video-chapters.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feeds.podcast)['video-chapters.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feeds.podcast)['video-chapters.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsPodcastVideoChaptersJsonQueryKey>
  >({
    queryKey: getFeedsPodcastVideoChaptersJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds.podcast['video-chapters.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFeedsPodcastVideoChaptersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feeds.podcast)['video-chapters.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feeds.podcast)['video-chapters.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds.podcast)['video-chapters.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeedsPodcastVideoChaptersJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFeedsPodcastVideoChaptersJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AccountsNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['$get']>,
) {
  return ['api', '/api/v1/accounts/:name', args] as const
}

export function getApiV1AccountsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameQueryKey>
  >({
    queryKey: getApiV1AccountsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AccountsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.accounts)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AccountsNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AccountsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AccountsNameVideosQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>,
) {
  return ['api', '/api/v1/accounts/:name/videos', args] as const
}

export function getApiV1AccountsNameVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameVideosQueryKey>
  >({
    queryKey: getApiV1AccountsNameVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':name'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AccountsNameVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AccountsNameVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AccountsNameVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AccountsNameFollowersQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>,
) {
  return ['api', '/api/v1/accounts/:name/followers', args] as const
}

export function getApiV1AccountsNameFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameFollowersQueryKey>
  >({
    queryKey: getApiV1AccountsNameFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':name'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AccountsNameFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AccountsNameFollowersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AccountsNameFollowersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AccountsQueryKey(
  args: InferRequestType<typeof client.api.v1.accounts.$get>,
) {
  return ['api', '/api/v1/accounts', args] as const
}

export function getApiV1AccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsQueryKey>
  >({
    queryKey: getApiV1AccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.accounts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AccountsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ConfigQueryKey() {
  return ['api', '/api/v1/config'] as const
}

export function getApiV1ConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigQueryKey>
  >({
    queryKey: getApiV1ConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ConfigAboutQueryKey(
  args: InferRequestType<typeof client.api.v1.config.about.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/config/about', keyArgs] as const
}

export function getApiV1ConfigAboutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.about.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.config.about.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.about.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigAboutQueryKey>
  >({
    queryKey: getApiV1ConfigAboutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.about.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1ConfigAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.about.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.config.about.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.about.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigAboutQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ConfigAboutQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ConfigCustomQueryKey() {
  return ['api', '/api/v1/config/custom'] as const
}

export function getApiV1ConfigCustomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigCustomQueryKey>
  >({
    queryKey: getApiV1ConfigCustomQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.custom.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigCustom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigCustomQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ConfigCustomQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1ConfigCustomMutationKey() {
  return ['api', '/api/v1/config/custom', 'PUT'] as const
}

export function getPutApiV1ConfigCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigCustomMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.config.custom.$put(undefined, options))
    },
  })
}

export function createPutApiV1ConfigCustom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$put>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1ConfigCustomMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ConfigCustomMutationKey() {
  return ['api', '/api/v1/config/custom', 'DELETE'] as const
}

export function getDeleteApiV1ConfigCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ConfigCustomMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.config.custom.$delete(undefined, options))
    },
  })
}

export function createDeleteApiV1ConfigCustom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$delete>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ConfigCustomMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ConfigInstanceBannerPickMutationKey() {
  return ['api', '/api/v1/config/instance-banner/pick', 'POST'] as const
}

export function getPostApiV1ConfigInstanceBannerPickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.config)['instance-banner']['pick']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.config)['instance-banner']['pick']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ConfigInstanceBannerPickMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.config)['instance-banner']['pick']['$post']>,
    ) {
      return parseResponse(client.api.v1.config['instance-banner'].pick.$post(args, options))
    },
  })
}

export function createPostApiV1ConfigInstanceBannerPick<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.config)['instance-banner']['pick']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.config)['instance-banner']['pick']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ConfigInstanceBannerPickMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ConfigInstanceBannerMutationKey() {
  return ['api', '/api/v1/config/instance-banner', 'DELETE'] as const
}

export function getDeleteApiV1ConfigInstanceBannerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.config)['instance-banner']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ConfigInstanceBannerMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.config['instance-banner'].$delete(undefined, options))
    },
  })
}

export function createDeleteApiV1ConfigInstanceBanner<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.config)['instance-banner']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ConfigInstanceBannerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ConfigInstanceAvatarPickMutationKey() {
  return ['api', '/api/v1/config/instance-avatar/pick', 'POST'] as const
}

export function getPostApiV1ConfigInstanceAvatarPickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.config)['instance-avatar']['pick']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.config)['instance-avatar']['pick']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ConfigInstanceAvatarPickMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.config)['instance-avatar']['pick']['$post']>,
    ) {
      return parseResponse(client.api.v1.config['instance-avatar'].pick.$post(args, options))
    },
  })
}

export function createPostApiV1ConfigInstanceAvatarPick<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.config)['instance-avatar']['pick']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.config)['instance-avatar']['pick']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ConfigInstanceAvatarPickMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ConfigInstanceAvatarMutationKey() {
  return ['api', '/api/v1/config/instance-avatar', 'DELETE'] as const
}

export function getDeleteApiV1ConfigInstanceAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.config)['instance-avatar']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ConfigInstanceAvatarMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.config['instance-avatar'].$delete(undefined, options))
    },
  })
}

export function createDeleteApiV1ConfigInstanceAvatar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.config)['instance-avatar']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ConfigInstanceAvatarMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ConfigInstanceLogoLogoTypePickMutationKey() {
  return ['api', '/api/v1/config/instance-logo/:logoType/pick', 'POST'] as const
}

export function getPostApiV1ConfigInstanceLogoLogoTypePickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.config)['instance-logo'][':logoType']['pick']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.config)['instance-logo'][':logoType']['pick']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ConfigInstanceLogoLogoTypePickMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.config)['instance-logo'][':logoType']['pick']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.config['instance-logo'][':logoType'].pick.$post(args, options),
      )
    },
  })
}

export function createPostApiV1ConfigInstanceLogoLogoTypePick<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.config)['instance-logo'][':logoType']['pick']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.config)['instance-logo'][':logoType']['pick']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ConfigInstanceLogoLogoTypePickMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ConfigInstanceLogoLogoTypeMutationKey() {
  return ['api', '/api/v1/config/instance-logo/:logoType', 'DELETE'] as const
}

export function getDeleteApiV1ConfigInstanceLogoLogoTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.config)['instance-logo'][':logoType']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.config)['instance-logo'][':logoType']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ConfigInstanceLogoLogoTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.config)['instance-logo'][':logoType']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.config['instance-logo'][':logoType'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1ConfigInstanceLogoLogoType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.config)['instance-logo'][':logoType']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.config)['instance-logo'][':logoType']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ConfigInstanceLogoLogoTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1CustomPagesHomepageInstanceQueryKey() {
  return ['api', '/api/v1/custom-pages/homepage/instance'] as const
}

export function getApiV1CustomPagesHomepageInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomPagesHomepageInstanceQueryKey>
  >({
    queryKey: getApiV1CustomPagesHomepageInstanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['custom-pages'].homepage.instance.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CustomPagesHomepageInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomPagesHomepageInstanceQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CustomPagesHomepageInstanceQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1CustomPagesHomepageInstanceMutationKey() {
  return ['api', '/api/v1/custom-pages/homepage/instance', 'PUT'] as const
}

export function getPutApiV1CustomPagesHomepageInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CustomPagesHomepageInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']
      >,
    ) {
      return parseResponse(client.api.v1['custom-pages'].homepage.instance.$put(args, options))
    },
  })
}

export function createPutApiV1CustomPagesHomepageInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1CustomPagesHomepageInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1JobsPauseMutationKey() {
  return ['api', '/api/v1/jobs/pause', 'POST'] as const
}

export function getPostApiV1JobsPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.jobs.pause.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.jobs.pause.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1JobsPauseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.jobs.pause.$post>) {
      return parseResponse(client.api.v1.jobs.pause.$post(args, options))
    },
  })
}

export function createPostApiV1JobsPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.jobs.pause.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.jobs.pause.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1JobsPauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1JobsResumeMutationKey() {
  return ['api', '/api/v1/jobs/resume', 'POST'] as const
}

export function getPostApiV1JobsResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.jobs.resume.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.jobs.resume.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1JobsResumeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.jobs.resume.$post>) {
      return parseResponse(client.api.v1.jobs.resume.$post(args, options))
    },
  })
}

export function createPostApiV1JobsResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.jobs.resume.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.jobs.resume.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1JobsResumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1JobsStateQueryKey(
  args: InferRequestType<(typeof client.api.v1.jobs)[':state']['$get']>,
) {
  return ['api', '/api/v1/jobs/:state', args] as const
}

export function getApiV1JobsStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.jobs)[':state']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.jobs)[':state']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.jobs)[':state']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1JobsStateQueryKey>
  >({
    queryKey: getApiV1JobsStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.jobs[':state'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1JobsState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.jobs)[':state']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.jobs)[':state']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.jobs)[':state']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1JobsStateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1JobsStateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1JobsJobTypeJobIdCancelMutationKey() {
  return ['api', '/api/v1/jobs/:jobType/:jobId/cancel', 'POST'] as const
}

export function getPostApiV1JobsJobTypeJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.jobs)[':jobType'][':jobId']['cancel']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.jobs)[':jobType'][':jobId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1JobsJobTypeJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.jobs)[':jobType'][':jobId']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.v1.jobs[':jobType'][':jobId'].cancel.$post(args, options))
    },
  })
}

export function createPostApiV1JobsJobTypeJobIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.jobs)[':jobType'][':jobId']['cancel']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.jobs)[':jobType'][':jobId']['cancel']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1JobsJobTypeJobIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ServerFollowersQueryKey(
  args: InferRequestType<typeof client.api.v1.server.followers.$get>,
) {
  return ['api', '/api/v1/server/followers', args] as const
}

export function getApiV1ServerFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.followers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.server.followers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.followers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerFollowersQueryKey>
  >({
    queryKey: getApiV1ServerFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server.followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.followers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.server.followers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.followers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerFollowersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ServerFollowersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1ServerFollowersHandleMutationKey() {
  return ['api', '/api/v1/server/followers/:handle', 'DELETE'] as const
}

export function getDeleteApiV1ServerFollowersHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.server.followers)[':handle']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.followers)[':handle']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerFollowersHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.followers)[':handle']['$delete']>,
    ) {
      return parseResponse(client.api.v1.server.followers[':handle'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1ServerFollowersHandle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.server.followers)[':handle']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.followers)[':handle']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ServerFollowersHandleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ServerFollowersHandleRejectMutationKey() {
  return ['api', '/api/v1/server/followers/:handle/reject', 'POST'] as const
}

export function getPostApiV1ServerFollowersHandleRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.server.followers)[':handle']['reject']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.followers)[':handle']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerFollowersHandleRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.followers)[':handle']['reject']['$post']>,
    ) {
      return parseResponse(client.api.v1.server.followers[':handle'].reject.$post(args, options))
    },
  })
}

export function createPostApiV1ServerFollowersHandleReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.server.followers)[':handle']['reject']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.followers)[':handle']['reject']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ServerFollowersHandleRejectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ServerFollowersHandleAcceptMutationKey() {
  return ['api', '/api/v1/server/followers/:handle/accept', 'POST'] as const
}

export function getPostApiV1ServerFollowersHandleAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.server.followers)[':handle']['accept']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.followers)[':handle']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerFollowersHandleAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.followers)[':handle']['accept']['$post']>,
    ) {
      return parseResponse(client.api.v1.server.followers[':handle'].accept.$post(args, options))
    },
  })
}

export function createPostApiV1ServerFollowersHandleAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.server.followers)[':handle']['accept']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.followers)[':handle']['accept']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ServerFollowersHandleAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ServerFollowingQueryKey(
  args: InferRequestType<typeof client.api.v1.server.following.$get>,
) {
  return ['api', '/api/v1/server/following', args] as const
}

export function getApiV1ServerFollowingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.following.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.server.following.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.following.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerFollowingQueryKey>
  >({
    queryKey: getApiV1ServerFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server.following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.following.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.server.following.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.following.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerFollowingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ServerFollowingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ServerFollowingMutationKey() {
  return ['api', '/api/v1/server/following', 'POST'] as const
}

export function getPostApiV1ServerFollowingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.following.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.server.following.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerFollowingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.following.$post>) {
      return parseResponse(client.api.v1.server.following.$post(args, options))
    },
  })
}

export function createPostApiV1ServerFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.server.following.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.server.following.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ServerFollowingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ServerFollowingHostOrHandleMutationKey() {
  return ['api', '/api/v1/server/following/:hostOrHandle', 'DELETE'] as const
}

export function getDeleteApiV1ServerFollowingHostOrHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerFollowingHostOrHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>,
    ) {
      return parseResponse(client.api.v1.server.following[':hostOrHandle'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1ServerFollowingHostOrHandle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ServerFollowingHostOrHandleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersQueryKey(args: InferRequestType<typeof client.api.v1.users.$get>) {
  return ['api', '/api/v1/users', args] as const
}

export function getApiV1UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersQueryKey>
  >({
    queryKey: getApiV1UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1UsersMutationKey() {
  return ['api', '/api/v1/users', 'POST'] as const
}

export function getPostApiV1UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.$post>) {
      return parseResponse(client.api.v1.users.$post(args, options))
    },
  })
}

export function createPostApiV1Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$get']>,
) {
  return ['api', '/api/v1/users/:id', args] as const
}

export function getApiV1UsersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersIdQueryKey>
  >({
    queryKey: getApiV1UsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1UsersIdMutationKey() {
  return ['api', '/api/v1/users/:id', 'PUT'] as const
}

export function getPutApiV1UsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.users)[':id']['$put']>) {
      return parseResponse(client.api.v1.users[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1UsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1UsersIdMutationKey() {
  return ['api', '/api/v1/users/:id', 'DELETE'] as const
}

export function getDeleteApiV1UsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>) {
      return parseResponse(client.api.v1.users[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersIdBlockMutationKey() {
  return ['api', '/api/v1/users/:id/block', 'POST'] as const
}

export function getPostApiV1UsersIdBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':id']['block']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':id']['block']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':id'].block.$post(args, options))
    },
  })
}

export function createPostApiV1UsersIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.users)[':id']['block']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['block']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersIdBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersIdUnblockMutationKey() {
  return ['api', '/api/v1/users/:id/unblock', 'POST'] as const
}

export function getPostApiV1UsersIdUnblockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':id']['unblock']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['unblock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdUnblockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':id']['unblock']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':id'].unblock.$post(args, options))
    },
  })
}

export function createPostApiV1UsersIdUnblock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.users)[':id']['unblock']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['unblock']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersIdUnblockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1OauthClientsLocalQueryKey() {
  return ['api', '/api/v1/oauth-clients/local'] as const
}

export function getApiV1OauthClientsLocalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['oauth-clients']['local']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['oauth-clients']['local']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OauthClientsLocalQueryKey>
  >({
    queryKey: getApiV1OauthClientsLocalQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['oauth-clients'].local.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1OauthClientsLocal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['oauth-clients']['local']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['oauth-clients']['local']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1OauthClientsLocalQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1OauthClientsLocalQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1UsersTokenMutationKey() {
  return ['api', '/api/v1/users/token', 'POST'] as const
}

export function getPostApiV1UsersTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.token.$post>) {
      return parseResponse(client.api.v1.users.token.$post(args, options))
    },
  })
}

export function createPostApiV1UsersToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.token.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersRevokeTokenMutationKey() {
  return ['api', '/api/v1/users/revoke-token', 'POST'] as const
}

export function getPostApiV1UsersRevokeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)['revoke-token']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRevokeTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.users['revoke-token'].$post(undefined, options))
    },
  })
}

export function createPostApiV1UsersRevokeToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)['revoke-token']['$post']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersRevokeTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersIdTokenSessionsQueryKey(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['token-sessions']['$get']>,
) {
  return ['api', '/api/v1/users/:id/token-sessions', args] as const
}

export function getApiV1UsersIdTokenSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':id']['token-sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['token-sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':id']['token-sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersIdTokenSessionsQueryKey>
  >({
    queryKey: getApiV1UsersIdTokenSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users[':id']['token-sessions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersIdTokenSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':id']['token-sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.users)[':id']['token-sessions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':id']['token-sessions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersIdTokenSessionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersIdTokenSessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersIdTokenSessionsTokenSessionIdRevokeMutationKey() {
  return ['api', '/api/v1/users/:id/token-sessions/:tokenSessionId/revoke', 'POST'] as const
}

export function getPostApiV1UsersIdTokenSessionsTokenSessionIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.users)[':id']['token-sessions'][':tokenSessionId']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.users)[':id']['token-sessions'][':tokenSessionId']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdTokenSessionsTokenSessionIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':id']['token-sessions'][':tokenSessionId']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':id']['token-sessions'][':tokenSessionId'].revoke.$post(args, options),
      )
    },
  })
}

export function createPostApiV1UsersIdTokenSessionsTokenSessionIdRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.users)[':id']['token-sessions'][':tokenSessionId']['revoke']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.users)[':id']['token-sessions'][':tokenSessionId']['revoke']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersIdTokenSessionsTokenSessionIdRevokeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersAskSendVerifyEmailMutationKey() {
  return ['api', '/api/v1/users/ask-send-verify-email', 'POST'] as const
}

export function getPostApiV1UsersAskSendVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersAskSendVerifyEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>,
    ) {
      return parseResponse(client.api.v1.users['ask-send-verify-email'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersAskSendVerifyEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersAskSendVerifyEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersRegistrationsAskSendVerifyEmailMutationKey() {
  return ['api', '/api/v1/users/registrations/ask-send-verify-email', 'POST'] as const
}

export function getPostApiV1UsersRegistrationsAskSendVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegistrationsAskSendVerifyEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.registrations['ask-send-verify-email'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1UsersRegistrationsAskSendVerifyEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersRegistrationsAskSendVerifyEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersIdVerifyEmailMutationKey() {
  return ['api', '/api/v1/users/:id/verify-email', 'POST'] as const
}

export function getPostApiV1UsersIdVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdVerifyEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':id']['verify-email'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersIdVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersIdVerifyEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersRegistrationsRegistrationIdVerifyEmailMutationKey() {
  return ['api', '/api/v1/users/registrations/:registrationId/verify-email', 'POST'] as const
}

export function getPostApiV1UsersRegistrationsRegistrationIdVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegistrationsRegistrationIdVerifyEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.registrations[':registrationId']['verify-email'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1UsersRegistrationsRegistrationIdVerifyEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersRegistrationsRegistrationIdVerifyEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersAskResetPasswordMutationKey() {
  return ['api', '/api/v1/users/ask-reset-password', 'POST'] as const
}

export function getPostApiV1UsersAskResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)['ask-reset-password']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)['ask-reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersAskResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)['ask-reset-password']['$post']>,
    ) {
      return parseResponse(client.api.v1.users['ask-reset-password'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersAskResetPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.users)['ask-reset-password']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)['ask-reset-password']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersAskResetPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersIdResetPasswordMutationKey() {
  return ['api', '/api/v1/users/:id/reset-password', 'POST'] as const
}

export function getPostApiV1UsersIdResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':id']['reset-password']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':id']['reset-password']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':id']['reset-password'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersIdResetPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.users)[':id']['reset-password']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['reset-password']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersIdResetPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersIdTwoFactorRequestMutationKey() {
  return ['api', '/api/v1/users/:id/two-factor/request', 'POST'] as const
}

export function getPostApiV1UsersIdTwoFactorRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdTwoFactorRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':id']['two-factor'].request.$post(args, options))
    },
  })
}

export function createPostApiV1UsersIdTwoFactorRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersIdTwoFactorRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersIdTwoFactorConfirmRequestMutationKey() {
  return ['api', '/api/v1/users/:id/two-factor/confirm-request', 'POST'] as const
}

export function getPostApiV1UsersIdTwoFactorConfirmRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdTwoFactorConfirmRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':id']['two-factor']['confirm-request'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1UsersIdTwoFactorConfirmRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersIdTwoFactorConfirmRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersIdTwoFactorDisableMutationKey() {
  return ['api', '/api/v1/users/:id/two-factor/disable', 'POST'] as const
}

export function getPostApiV1UsersIdTwoFactorDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdTwoFactorDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':id']['two-factor'].disable.$post(args, options))
    },
  })
}

export function createPostApiV1UsersIdTwoFactorDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersIdTwoFactorDisableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1UsersUserIdImportsImportResumableMutationKey() {
  return ['api', '/api/v1/users/:userId/imports/import-resumable', 'PUT'] as const
}

export function getPutApiV1UsersUserIdImportsImportResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1UsersUserIdImportsImportResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':userId'].imports['import-resumable'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1UsersUserIdImportsImportResumable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1UsersUserIdImportsImportResumableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersUserIdImportsImportResumableMutationKey() {
  return ['api', '/api/v1/users/:userId/imports/import-resumable', 'POST'] as const
}

export function getPostApiV1UsersUserIdImportsImportResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdImportsImportResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':userId'].imports['import-resumable'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1UsersUserIdImportsImportResumable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdImportsImportResumableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1UsersUserIdImportsImportResumableMutationKey() {
  return ['api', '/api/v1/users/:userId/imports/import-resumable', 'DELETE'] as const
}

export function getDeleteApiV1UsersUserIdImportsImportResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersUserIdImportsImportResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':userId'].imports['import-resumable'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1UsersUserIdImportsImportResumable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users)[':userId']['imports']['import-resumable']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersUserIdImportsImportResumableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersUserIdImportsLatestQueryKey(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['imports']['latest']['$get']>,
) {
  return ['api', '/api/v1/users/:userId/imports/latest', args] as const
}

export function getApiV1UsersUserIdImportsLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['imports']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['imports']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['imports']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersUserIdImportsLatestQueryKey>
  >({
    queryKey: getApiV1UsersUserIdImportsLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users[':userId'].imports.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersUserIdImportsLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['imports']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.users)[':userId']['imports']['latest']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.users)[':userId']['imports']['latest']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersUserIdImportsLatestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersUserIdImportsLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersUserIdExportsRequestMutationKey() {
  return ['api', '/api/v1/users/:userId/exports/request', 'POST'] as const
}

export function getPostApiV1UsersUserIdExportsRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users)[':userId']['exports']['request']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':userId']['exports']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdExportsRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['exports']['request']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.users[':userId'].exports.request.$post(args, options))
    },
  })
}

export function createPostApiV1UsersUserIdExportsRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.users)[':userId']['exports']['request']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':userId']['exports']['request']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdExportsRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersUserIdExportsQueryKey(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['exports']['$get']>,
) {
  return ['api', '/api/v1/users/:userId/exports', args] as const
}

export function getApiV1UsersUserIdExportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['exports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersUserIdExportsQueryKey>
  >({
    queryKey: getApiV1UsersUserIdExportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users[':userId'].exports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersUserIdExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.users)[':userId']['exports']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['exports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersUserIdExportsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersUserIdExportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1UsersUserIdExportsIdMutationKey() {
  return ['api', '/api/v1/users/:userId/exports/:id', 'DELETE'] as const
}

export function getDeleteApiV1UsersUserIdExportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.users)[':userId']['exports'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':userId']['exports'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersUserIdExportsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':userId']['exports'][':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.users[':userId'].exports[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1UsersUserIdExportsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.users)[':userId']['exports'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':userId']['exports'][':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersUserIdExportsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersMeQueryKey() {
  return ['api', '/api/v1/users/me'] as const
}

export function getApiV1UsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeQueryKey>
  >({
    queryKey: getApiV1UsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1UsersMeMutationKey() {
  return ['api', '/api/v1/users/me', 'PUT'] as const
}

export function getPutApiV1UsersMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.users.me.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1UsersMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.me.$put>) {
      return parseResponse(client.api.v1.users.me.$put(args, options))
    },
  })
}

export function createPutApiV1UsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.users.me.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1UsersMeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1UsersMeMutationKey() {
  return ['api', '/api/v1/users/me', 'DELETE'] as const
}

export function getDeleteApiV1UsersMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersMeMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.users.me.$delete(undefined, options))
    },
  })
}

export function createDeleteApiV1UsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$delete>>>
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersMeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersMeVideosCommentsQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.videos.comments.$get>,
) {
  return ['api', '/api/v1/users/me/videos/comments', args] as const
}

export function getApiV1UsersMeVideosCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.comments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.videos.comments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.users.me.videos.comments.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideosCommentsQueryKey>
  >({
    queryKey: getApiV1UsersMeVideosCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.videos.comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeVideosComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.comments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.videos.comments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.videos.comments.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeVideosCommentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeVideosCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1UsersMeVideosImportsQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.videos.imports.$get>,
) {
  return ['api', '/api/v1/users/me/videos/imports', args] as const
}

export function getApiV1UsersMeVideosImportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.imports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.videos.imports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.imports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideosImportsQueryKey>
  >({
    queryKey: getApiV1UsersMeVideosImportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.videos.imports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeVideosImports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.imports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.videos.imports.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.videos.imports.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeVideosImportsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeVideosImportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1UsersMeVideoQuotaUsedQueryKey() {
  return ['api', '/api/v1/users/me/video-quota-used'] as const
}

export function getApiV1UsersMeVideoQuotaUsedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users.me)['video-quota-used']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users.me)['video-quota-used']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideoQuotaUsedQueryKey>
  >({
    queryKey: getApiV1UsersMeVideoQuotaUsedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me['video-quota-used'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeVideoQuotaUsed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users.me)['video-quota-used']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users.me)['video-quota-used']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeVideoQuotaUsedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UsersMeVideoQuotaUsedQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1UsersMeVideosVideoIdOrUUIDRatingQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.users.me.videos)[':videoIdOrUUID']['rating']['$get']
  >,
) {
  return ['api', '/api/v1/users/me/videos/:videoIdOrUUID/rating', args] as const
}

export function getApiV1UsersMeVideosVideoIdOrUUIDRatingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.users.me.videos)[':videoIdOrUUID']['rating']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.users.me.videos)[':videoIdOrUUID']['rating']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users.me.videos)[':videoIdOrUUID']['rating']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideosVideoIdOrUUIDRatingQueryKey>
  >({
    queryKey: getApiV1UsersMeVideosVideoIdOrUUIDRatingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.videos[':videoIdOrUUID'].rating.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeVideosVideoIdOrUUIDRating<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.users.me.videos)[':videoIdOrUUID']['rating']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.users.me.videos)[':videoIdOrUUID']['rating']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.users.me.videos)[':videoIdOrUUID']['rating']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeVideosVideoIdOrUUIDRatingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeVideosVideoIdOrUUIDRatingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1UsersMeVideosQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.videos.$get>,
) {
  return ['api', '/api/v1/users/me/videos', args] as const
}

export function getApiV1UsersMeVideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.videos.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideosQueryKey>
  >({
    queryKey: getApiV1UsersMeVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.videos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UsersMeVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1UsersMeSubscriptionsQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.subscriptions.$get>,
) {
  return ['api', '/api/v1/users/me/subscriptions', args] as const
}

export function getApiV1UsersMeSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeSubscriptionsQueryKey>
  >({
    queryKey: getApiV1UsersMeSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeSubscriptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersMeSubscriptionsMutationKey() {
  return ['api', '/api/v1/users/me/subscriptions', 'POST'] as const
}

export function getPostApiV1UsersMeSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.users.me.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.me.subscriptions.$post>) {
      return parseResponse(client.api.v1.users.me.subscriptions.$post(args, options))
    },
  })
}

export function createPostApiV1UsersMeSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.users.me.subscriptions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersMeSubscriptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersMeSubscriptionsExistQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.subscriptions.exist.$get>,
) {
  return ['api', '/api/v1/users/me/subscriptions/exist', args] as const
}

export function getApiV1UsersMeSubscriptionsExistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.exist.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.subscriptions.exist.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.exist.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeSubscriptionsExistQueryKey>
  >({
    queryKey: getApiV1UsersMeSubscriptionsExistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.subscriptions.exist.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeSubscriptionsExist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.exist.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.subscriptions.exist.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.exist.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeSubscriptionsExistQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeSubscriptionsExistQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1UsersMeSubscriptionsVideosQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.subscriptions.videos.$get>,
) {
  return ['api', '/api/v1/users/me/subscriptions/videos', args] as const
}

export function getApiV1UsersMeSubscriptionsVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.videos.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.subscriptions.videos.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.videos.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeSubscriptionsVideosQueryKey>
  >({
    queryKey: getApiV1UsersMeSubscriptionsVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.subscriptions.videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeSubscriptionsVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.videos.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.subscriptions.videos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.videos.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeSubscriptionsVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeSubscriptionsVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1UsersMeSubscriptionsSubscriptionHandleQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']
  >,
) {
  return ['api', '/api/v1/users/me/subscriptions/:subscriptionHandle', args] as const
}

export function getApiV1UsersMeSubscriptionsSubscriptionHandleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeSubscriptionsSubscriptionHandleQueryKey>
  >({
    queryKey: getApiV1UsersMeSubscriptionsSubscriptionHandleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.subscriptions[':subscriptionHandle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeSubscriptionsSubscriptionHandle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeSubscriptionsSubscriptionHandleQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeSubscriptionsSubscriptionHandleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1UsersMeSubscriptionsSubscriptionHandleMutationKey() {
  return ['api', '/api/v1/users/me/subscriptions/:subscriptionHandle', 'DELETE'] as const
}

export function getDeleteApiV1UsersMeSubscriptionsSubscriptionHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersMeSubscriptionsSubscriptionHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.me.subscriptions[':subscriptionHandle'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1UsersMeSubscriptionsSubscriptionHandle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersMeSubscriptionsSubscriptionHandleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersMeNotificationsQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.notifications.$get>,
) {
  return ['api', '/api/v1/users/me/notifications', args] as const
}

export function getApiV1UsersMeNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.notifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.notifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeNotificationsQueryKey>
  >({
    queryKey: getApiV1UsersMeNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.notifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.notifications.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.notifications.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeNotificationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeNotificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersMeNotificationsReadMutationKey() {
  return ['api', '/api/v1/users/me/notifications/read', 'POST'] as const
}

export function getPostApiV1UsersMeNotificationsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.users.me.notifications.read.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.users.me.notifications.read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeNotificationsReadMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.users.me.notifications.read.$post>,
    ) {
      return parseResponse(client.api.v1.users.me.notifications.read.$post(args, options))
    },
  })
}

export function createPostApiV1UsersMeNotificationsRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.users.me.notifications.read.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.users.me.notifications.read.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersMeNotificationsReadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersMeNotificationsReadAllMutationKey() {
  return ['api', '/api/v1/users/me/notifications/read-all', 'POST'] as const
}

export function getPostApiV1UsersMeNotificationsReadAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users.me.notifications)['read-all']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeNotificationsReadAllMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.api.v1.users.me.notifications['read-all'].$post(undefined, options),
      )
    },
  })
}

export function createPostApiV1UsersMeNotificationsReadAll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.users.me.notifications)['read-all']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersMeNotificationsReadAllMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1UsersMeNotificationSettingsMutationKey() {
  return ['api', '/api/v1/users/me/notification-settings', 'PUT'] as const
}

export function getPutApiV1UsersMeNotificationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users.me)['notification-settings']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.me)['notification-settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1UsersMeNotificationSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users.me)['notification-settings']['$put']>,
    ) {
      return parseResponse(client.api.v1.users.me['notification-settings'].$put(args, options))
    },
  })
}

export function createPutApiV1UsersMeNotificationSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.users.me)['notification-settings']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users.me)['notification-settings']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1UsersMeNotificationSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersMeNewFeatureInfoReadMutationKey() {
  return ['api', '/api/v1/users/me/new-feature-info/read', 'POST'] as const
}

export function getPostApiV1UsersMeNewFeatureInfoReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.users.me)['new-feature-info']['read']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.me)['new-feature-info']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeNewFeatureInfoReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users.me)['new-feature-info']['read']['$post']>,
    ) {
      return parseResponse(client.api.v1.users.me['new-feature-info'].read.$post(args, options))
    },
  })
}

export function createPostApiV1UsersMeNewFeatureInfoRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.users.me)['new-feature-info']['read']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users.me)['new-feature-info']['read']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersMeNewFeatureInfoReadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersMeHistoryVideosQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.history.videos.$get>,
) {
  return ['api', '/api/v1/users/me/history/videos', args] as const
}

export function getApiV1UsersMeHistoryVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.history.videos.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeHistoryVideosQueryKey>
  >({
    queryKey: getApiV1UsersMeHistoryVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.history.videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeHistoryVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.history.videos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeHistoryVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeHistoryVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1UsersMeHistoryVideosVideoIdOrUUIDMutationKey() {
  return ['api', '/api/v1/users/me/history/videos/:videoIdOrUUID', 'DELETE'] as const
}

export function getDeleteApiV1UsersMeHistoryVideosVideoIdOrUUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.me.history.videos)[':videoIdOrUUID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.me.history.videos)[':videoIdOrUUID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersMeHistoryVideosVideoIdOrUUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.me.history.videos)[':videoIdOrUUID']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.me.history.videos[':videoIdOrUUID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1UsersMeHistoryVideosVideoIdOrUUID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users.me.history.videos)[':videoIdOrUUID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.me.history.videos)[':videoIdOrUUID']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersMeHistoryVideosVideoIdOrUUIDMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersMeHistoryVideosRemoveMutationKey() {
  return ['api', '/api/v1/users/me/history/videos/remove', 'POST'] as const
}

export function getPostApiV1UsersMeHistoryVideosRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.remove.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.users.me.history.videos.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeHistoryVideosRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.users.me.history.videos.remove.$post>,
    ) {
      return parseResponse(client.api.v1.users.me.history.videos.remove.$post(args, options))
    },
  })
}

export function createPostApiV1UsersMeHistoryVideosRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.remove.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.users.me.history.videos.remove.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersMeHistoryVideosRemoveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersMeAvatarPickMutationKey() {
  return ['api', '/api/v1/users/me/avatar/pick', 'POST'] as const
}

export function getPostApiV1UsersMeAvatarPickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.avatar.pick.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.me.avatar.pick.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeAvatarPickMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.me.avatar.pick.$post>) {
      return parseResponse(client.api.v1.users.me.avatar.pick.$post(args, options))
    },
  })
}

export function createPostApiV1UsersMeAvatarPick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.avatar.pick.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.me.avatar.pick.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersMeAvatarPickMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1UsersMeAvatarMutationKey() {
  return ['api', '/api/v1/users/me/avatar', 'DELETE'] as const
}

export function getDeleteApiV1UsersMeAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.avatar.$delete>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersMeAvatarMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.users.me.avatar.$delete(undefined, options))
    },
  })
}

export function createDeleteApiV1UsersMeAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.users.me.avatar.$delete>>
                >
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersMeAvatarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersRegisterMutationKey() {
  return ['api', '/api/v1/users/register', 'POST'] as const
}

export function getPostApiV1UsersRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.register.$post>) {
      return parseResponse(client.api.v1.users.register.$post(args, options))
    },
  })
}

export function createPostApiV1UsersRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.register.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersRegistrationsRequestMutationKey() {
  return ['api', '/api/v1/users/registrations/request', 'POST'] as const
}

export function getPostApiV1UsersRegistrationsRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.users.registrations.request.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.registrations.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegistrationsRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.users.registrations.request.$post>,
    ) {
      return parseResponse(client.api.v1.users.registrations.request.$post(args, options))
    },
  })
}

export function createPostApiV1UsersRegistrationsRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.registrations.request.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.registrations.request.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersRegistrationsRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersRegistrationsRegistrationIdAcceptMutationKey() {
  return ['api', '/api/v1/users/registrations/:registrationId/accept', 'POST'] as const
}

export function getPostApiV1UsersRegistrationsRegistrationIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegistrationsRegistrationIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.registrations[':registrationId'].accept.$post(args, options),
      )
    },
  })
}

export function createPostApiV1UsersRegistrationsRegistrationIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersRegistrationsRegistrationIdAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersRegistrationsRegistrationIdRejectMutationKey() {
  return ['api', '/api/v1/users/registrations/:registrationId/reject', 'POST'] as const
}

export function getPostApiV1UsersRegistrationsRegistrationIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegistrationsRegistrationIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.registrations[':registrationId'].reject.$post(args, options),
      )
    },
  })
}

export function createPostApiV1UsersRegistrationsRegistrationIdReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersRegistrationsRegistrationIdRejectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1UsersRegistrationsRegistrationIdMutationKey() {
  return ['api', '/api/v1/users/registrations/:registrationId', 'DELETE'] as const
}

export function getDeleteApiV1UsersRegistrationsRegistrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.users.registrations)[':registrationId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.registrations)[':registrationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersRegistrationsRegistrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.registrations)[':registrationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.registrations[':registrationId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1UsersRegistrationsRegistrationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users.registrations)[':registrationId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.registrations)[':registrationId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersRegistrationsRegistrationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersRegistrationsQueryKey(
  args: InferRequestType<typeof client.api.v1.users.registrations.$get>,
) {
  return ['api', '/api/v1/users/registrations', args] as const
}

export function getApiV1UsersRegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.registrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.registrations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.registrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersRegistrationsQueryKey>
  >({
    queryKey: getApiV1UsersRegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.registrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.registrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.registrations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.registrations.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersRegistrationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersRegistrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosOwnershipQueryKey(
  args: InferRequestType<typeof client.api.v1.videos.ownership.$get>,
) {
  return ['api', '/api/v1/videos/ownership', args] as const
}

export function getApiV1VideosOwnershipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.ownership.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.videos.ownership.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.ownership.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosOwnershipQueryKey>
  >({
    queryKey: getApiV1VideosOwnershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos.ownership.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosOwnership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.ownership.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.videos.ownership.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.ownership.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosOwnershipQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosOwnershipQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideosOwnershipIdAcceptMutationKey() {
  return ['api', '/api/v1/videos/ownership/:id/accept', 'POST'] as const
}

export function getPostApiV1VideosOwnershipIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosOwnershipIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos.ownership[':id'].accept.$post(args, options))
    },
  })
}

export function createPostApiV1VideosOwnershipIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosOwnershipIdAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosOwnershipIdRefuseMutationKey() {
  return ['api', '/api/v1/videos/ownership/:id/refuse', 'POST'] as const
}

export function getPostApiV1VideosOwnershipIdRefuseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosOwnershipIdRefuseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos.ownership[':id'].refuse.$post(args, options))
    },
  })
}

export function createPostApiV1VideosOwnershipIdRefuse<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosOwnershipIdRefuseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosOwnershipIdMutationKey() {
  return ['api', '/api/v1/videos/ownership/:id', 'DELETE'] as const
}

export function getDeleteApiV1VideosOwnershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.ownership)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosOwnershipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos.ownership[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideosOwnershipId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos.ownership)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosOwnershipIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideosVideoIdOrUUIDOwnershipQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':videoIdOrUUID']['ownership']['$get']>,
) {
  return ['api', '/api/v1/videos/:videoIdOrUUID/ownership', args] as const
}

export function getApiV1VideosVideoIdOrUUIDOwnershipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':videoIdOrUUID']['ownership']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':videoIdOrUUID']['ownership']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':videoIdOrUUID']['ownership']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosVideoIdOrUUIDOwnershipQueryKey>
  >({
    queryKey: getApiV1VideosVideoIdOrUUIDOwnershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':videoIdOrUUID'].ownership.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosVideoIdOrUUIDOwnership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':videoIdOrUUID']['ownership']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.videos)[':videoIdOrUUID']['ownership']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.videos)[':videoIdOrUUID']['ownership']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosVideoIdOrUUIDOwnershipQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosVideoIdOrUUIDOwnershipQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideosVideoIdOrUUIDGiveOwnershipMutationKey() {
  return ['api', '/api/v1/videos/:videoIdOrUUID/give-ownership', 'POST'] as const
}

export function getPostApiV1VideosVideoIdOrUUIDGiveOwnershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.videos)[':videoIdOrUUID']['give-ownership']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':videoIdOrUUID']['give-ownership']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosVideoIdOrUUIDGiveOwnershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':videoIdOrUUID']['give-ownership']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':videoIdOrUUID']['give-ownership'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideosVideoIdOrUUIDGiveOwnership<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.videos)[':videoIdOrUUID']['give-ownership']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':videoIdOrUUID']['give-ownership']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosVideoIdOrUUIDGiveOwnershipMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideoChannelsOwnershipQueryKey(
  args: InferRequestType<(typeof client.api.v1)['video-channels']['ownership']['$get']>,
) {
  return ['api', '/api/v1/video-channels/ownership', args] as const
}

export function getApiV1VideoChannelsOwnershipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-channels']['ownership']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['video-channels']['ownership']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-channels']['ownership']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsOwnershipQueryKey>
  >({
    queryKey: getApiV1VideoChannelsOwnershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-channels'].ownership.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoChannelsOwnership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-channels']['ownership']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['video-channels']['ownership']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-channels']['ownership']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoChannelsOwnershipQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoChannelsOwnershipQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelsOwnershipIdAcceptMutationKey() {
  return ['api', '/api/v1/video-channels/ownership/:id/accept', 'POST'] as const
}

export function getPostApiV1VideoChannelsOwnershipIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels']['ownership'][':id']['accept']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels']['ownership'][':id']['accept']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsOwnershipIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels']['ownership'][':id']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'].ownership[':id'].accept.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoChannelsOwnershipIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels']['ownership'][':id']['accept']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels']['ownership'][':id']['accept']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoChannelsOwnershipIdAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelsOwnershipIdRefuseMutationKey() {
  return ['api', '/api/v1/video-channels/ownership/:id/refuse', 'POST'] as const
}

export function getPostApiV1VideoChannelsOwnershipIdRefuseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels']['ownership'][':id']['refuse']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels']['ownership'][':id']['refuse']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsOwnershipIdRefuseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels']['ownership'][':id']['refuse']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'].ownership[':id'].refuse.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoChannelsOwnershipIdRefuse<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels']['ownership'][':id']['refuse']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels']['ownership'][':id']['refuse']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoChannelsOwnershipIdRefuseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideoChannelsOwnershipIdMutationKey() {
  return ['api', '/api/v1/video-channels/ownership/:id', 'DELETE'] as const
}

export function getDeleteApiV1VideoChannelsOwnershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['video-channels']['ownership'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channels']['ownership'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoChannelsOwnershipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels']['ownership'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.api.v1['video-channels'].ownership[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideoChannelsOwnershipId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels']['ownership'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['video-channels']['ownership'][':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideoChannelsOwnershipIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideoChannelsChannelHandleOwnershipQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['ownership']['$get']
  >,
) {
  return ['api', '/api/v1/video-channels/:channelHandle/ownership', args] as const
}

export function getApiV1VideoChannelsChannelHandleOwnershipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['ownership']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['ownership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['video-channels'][':channelHandle']['ownership']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleOwnershipQueryKey>
  >({
    queryKey: getApiV1VideoChannelsChannelHandleOwnershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].ownership.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoChannelsChannelHandleOwnership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['ownership']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['ownership']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-channels'][':channelHandle']['ownership']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleOwnershipQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoChannelsChannelHandleOwnershipQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelsChannelHandleGiveOwnershipMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/give-ownership', 'POST'] as const
}

export function getPostApiV1VideoChannelsChannelHandleGiveOwnershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['give-ownership']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['give-ownership']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsChannelHandleGiveOwnershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['give-ownership']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle']['give-ownership'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoChannelsChannelHandleGiveOwnership<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels'][':channelHandle']['give-ownership']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['give-ownership']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoChannelsChannelHandleGiveOwnershipMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdTokenMutationKey() {
  return ['api', '/api/v1/videos/:id/token', 'POST'] as const
}

export function getPostApiV1VideosIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['token']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].token.$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['token']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdStudioEditMutationKey() {
  return ['api', '/api/v1/videos/:id/studio/edit', 'POST'] as const
}

export function getPostApiV1VideosIdStudioEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdStudioEditMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].studio.edit.$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdStudioEdit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdStudioEditMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdDuplicateMutationKey() {
  return ['api', '/api/v1/videos/:id/duplicate', 'POST'] as const
}

export function getPostApiV1VideosIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['duplicate']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].duplicate.$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['duplicate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['duplicate']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdDuplicateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideosQueryKey(args: InferRequestType<typeof client.api.v1.videos.$get>) {
  return ['api', '/api/v1/videos', args] as const
}

export function getApiV1VideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosQueryKey>
  >({
    queryKey: getApiV1VideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Videos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.videos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1RecommendationsVideosQueryKey(
  args: InferRequestType<typeof client.api.v1.recommendations.videos.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recommendations/videos', keyArgs] as const
}

export function getApiV1RecommendationsVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recommendations.videos.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.recommendations.videos.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recommendations.videos.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecommendationsVideosQueryKey>
  >({
    queryKey: getApiV1RecommendationsVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.recommendations.videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1RecommendationsVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recommendations.videos.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.recommendations.videos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recommendations.videos.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RecommendationsVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1RecommendationsVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosCategoriesQueryKey() {
  return ['api', '/api/v1/videos/categories'] as const
}

export function getApiV1VideosCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosCategoriesQueryKey>
  >({
    queryKey: getApiV1VideosCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.categories.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosCategoriesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VideosCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1VideosLicencesQueryKey() {
  return ['api', '/api/v1/videos/licences'] as const
}

export function getApiV1VideosLicencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.licences.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.licences.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosLicencesQueryKey>
  >({
    queryKey: getApiV1VideosLicencesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos.licences.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosLicences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.licences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.licences.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosLicencesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VideosLicencesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1VideosLanguagesQueryKey(
  args: InferRequestType<typeof client.api.v1.videos.languages.$get>,
) {
  return ['api', '/api/v1/videos/languages', args] as const
}

export function getApiV1VideosLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.languages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.videos.languages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.languages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosLanguagesQueryKey>
  >({
    queryKey: getApiV1VideosLanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos.languages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.languages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.videos.languages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.languages.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosLanguagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosLanguagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosPrivaciesQueryKey() {
  return ['api', '/api/v1/videos/privacies'] as const
}

export function getApiV1VideosPrivaciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.privacies.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.privacies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosPrivaciesQueryKey>
  >({
    queryKey: getApiV1VideosPrivaciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos.privacies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosPrivacies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.privacies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.privacies.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosPrivaciesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VideosPrivaciesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1VideosIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/videos/:id', keyArgs] as const
}

export function getApiV1VideosIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdQueryKey>
  >({
    queryKey: getApiV1VideosIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1VideosId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VideosIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1VideosIdMutationKey() {
  return ['api', '/api/v1/videos/:id', 'PUT'] as const
}

export function getPutApiV1VideosIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.videos)[':id']['$put']>) {
      return parseResponse(client.api.v1.videos[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1VideosId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideosIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosIdMutationKey() {
  return ['api', '/api/v1/videos/:id', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.videos)[':id']['$delete']>) {
      return parseResponse(client.api.v1.videos[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideosId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdViewsMutationKey() {
  return ['api', '/api/v1/videos/:id/views', 'POST'] as const
}

export function getPostApiV1VideosIdViewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['views']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['views']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdViewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['views']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].views.$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdViews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['views']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['views']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdViewsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideosIdStatsOverallQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>,
) {
  return ['api', '/api/v1/videos/:id/stats/overall', args] as const
}

export function getApiV1VideosIdStatsOverallQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdStatsOverallQueryKey>
  >({
    queryKey: getApiV1VideosIdStatsOverallQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].stats.overall.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdStatsOverall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdStatsOverallQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdStatsOverallQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosIdStatsUserAgentQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['user-agent']['$get']>,
) {
  return ['api', '/api/v1/videos/:id/stats/user-agent', args] as const
}

export function getApiV1VideosIdStatsUserAgentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['user-agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['user-agent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['user-agent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdStatsUserAgentQueryKey>
  >({
    queryKey: getApiV1VideosIdStatsUserAgentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].stats['user-agent'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdStatsUserAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['user-agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['user-agent']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.videos)[':id']['stats']['user-agent']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdStatsUserAgentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdStatsUserAgentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosIdStatsRetentionQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>,
) {
  return ['api', '/api/v1/videos/:id/stats/retention', args] as const
}

export function getApiV1VideosIdStatsRetentionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdStatsRetentionQueryKey>
  >({
    queryKey: getApiV1VideosIdStatsRetentionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].stats.retention.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdStatsRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdStatsRetentionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdStatsRetentionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosIdStatsTimeseriesMetricQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']
  >,
) {
  return ['api', '/api/v1/videos/:id/stats/timeseries/:metric', args] as const
}

export function getApiV1VideosIdStatsTimeseriesMetricQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdStatsTimeseriesMetricQueryKey>
  >({
    queryKey: getApiV1VideosIdStatsTimeseriesMetricQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].stats.timeseries[':metric'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdStatsTimeseriesMetric<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdStatsTimeseriesMetricQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdStatsTimeseriesMetricQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideosUploadMutationKey() {
  return ['api', '/api/v1/videos/upload', 'POST'] as const
}

export function getPostApiV1VideosUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.upload.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.videos.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.videos.upload.$post>) {
      return parseResponse(client.api.v1.videos.upload.$post(args, options))
    },
  })
}

export function createPostApiV1VideosUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.upload.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.videos.upload.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1VideosUploadResumableMutationKey() {
  return ['api', '/api/v1/videos/upload-resumable', 'PUT'] as const
}

export function getPutApiV1VideosUploadResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosUploadResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$put']>,
    ) {
      return parseResponse(client.api.v1.videos['upload-resumable'].$put(args, options))
    },
  })
}

export function createPutApiV1VideosUploadResumable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideosUploadResumableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosUploadResumableMutationKey() {
  return ['api', '/api/v1/videos/upload-resumable', 'POST'] as const
}

export function getPostApiV1VideosUploadResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosUploadResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos['upload-resumable'].$post(args, options))
    },
  })
}

export function createPostApiV1VideosUploadResumable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosUploadResumableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosUploadResumableMutationKey() {
  return ['api', '/api/v1/videos/upload-resumable', 'DELETE'] as const
}

export function getDeleteApiV1VideosUploadResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosUploadResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos['upload-resumable'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideosUploadResumable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosUploadResumableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosImportsMutationKey() {
  return ['api', '/api/v1/videos/imports', 'POST'] as const
}

export function getPostApiV1VideosImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.imports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.videos.imports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.videos.imports.$post>) {
      return parseResponse(client.api.v1.videos.imports.$post(args, options))
    },
  })
}

export function createPostApiV1VideosImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.imports.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.videos.imports.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosImportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosImportsIdCancelMutationKey() {
  return ['api', '/api/v1/videos/imports/:id/cancel', 'POST'] as const
}

export function getPostApiV1VideosImportsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosImportsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos.imports[':id'].cancel.$post(args, options))
    },
  })
}

export function createPostApiV1VideosImportsIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosImportsIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosImportsIdRetryMutationKey() {
  return ['api', '/api/v1/videos/imports/:id/retry', 'POST'] as const
}

export function getPostApiV1VideosImportsIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.imports)[':id']['retry']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.imports)[':id']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosImportsIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos.imports)[':id']['retry']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos.imports[':id'].retry.$post(args, options))
    },
  })
}

export function createPostApiV1VideosImportsIdRetry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.videos.imports)[':id']['retry']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.imports)[':id']['retry']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosImportsIdRetryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdImportRetryMutationKey() {
  return ['api', '/api/v1/videos/:id/import/retry', 'POST'] as const
}

export function getPostApiV1VideosIdImportRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['import']['retry']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['import']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdImportRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['import']['retry']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].import.retry.$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdImportRetry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.videos)[':id']['import']['retry']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['import']['retry']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdImportRetryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosImportsIdMutationKey() {
  return ['api', '/api/v1/videos/imports/:id', 'DELETE'] as const
}

export function getDeleteApiV1VideosImportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.imports)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.imports)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosImportsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos.imports)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos.imports[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideosImportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos.imports)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.imports)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosImportsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosLiveMutationKey() {
  return ['api', '/api/v1/videos/live', 'POST'] as const
}

export function getPostApiV1VideosLiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.live.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.videos.live.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosLiveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.videos.live.$post>) {
      return parseResponse(client.api.v1.videos.live.$post(args, options))
    },
  })
}

export function createPostApiV1VideosLive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.live.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.videos.live.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosLiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideosLiveIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos.live)[':id']['$get']>,
) {
  return ['api', '/api/v1/videos/live/:id', args] as const
}

export function getApiV1VideosLiveIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos.live)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosLiveIdQueryKey>
  >({
    queryKey: getApiV1VideosLiveIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos.live[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosLiveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos.live)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosLiveIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VideosLiveIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1VideosLiveIdMutationKey() {
  return ['api', '/api/v1/videos/live/:id', 'PUT'] as const
}

export function getPutApiV1VideosLiveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.live)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosLiveIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.videos.live)[':id']['$put']>) {
      return parseResponse(client.api.v1.videos.live[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1VideosLiveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.live)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideosLiveIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideosLiveIdSessionsQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>,
) {
  return ['api', '/api/v1/videos/live/:id/sessions', args] as const
}

export function getApiV1VideosLiveIdSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosLiveIdSessionsQueryKey>
  >({
    queryKey: getApiV1VideosLiveIdSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos.live[':id'].sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosLiveIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosLiveIdSessionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosLiveIdSessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosIdLiveSessionQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/videos/:id/live-session', keyArgs] as const
}

export function getApiV1VideosIdLiveSessionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdLiveSessionQueryKey>
  >({
    queryKey: getApiV1VideosIdLiveSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id']['live-session'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdLiveSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdLiveSessionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdLiveSessionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosIdSourceQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['source']['$get']>,
) {
  return ['api', '/api/v1/videos/:id/source', args] as const
}

export function getApiV1VideosIdSourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['source']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['source']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdSourceQueryKey>
  >({
    queryKey: getApiV1VideosIdSourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].source.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['source']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['source']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdSourceQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VideosIdSourceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV1VideosIdSourceFileMutationKey() {
  return ['api', '/api/v1/videos/:id/source/file', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdSourceFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['source']['file']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['source']['file']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdSourceFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['source']['file']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].source.file.$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideosIdSourceFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.videos)[':id']['source']['file']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['source']['file']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosIdSourceFileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1VideosIdSourceReplaceResumableMutationKey() {
  return ['api', '/api/v1/videos/:id/source/replace-resumable', 'PUT'] as const
}

export function getPutApiV1VideosIdSourceReplaceResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdSourceReplaceResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].source['replace-resumable'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1VideosIdSourceReplaceResumable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideosIdSourceReplaceResumableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdSourceReplaceResumableMutationKey() {
  return ['api', '/api/v1/videos/:id/source/replace-resumable', 'POST'] as const
}

export function getPostApiV1VideosIdSourceReplaceResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdSourceReplaceResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].source['replace-resumable'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideosIdSourceReplaceResumable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdSourceReplaceResumableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosIdSourceReplaceResumableMutationKey() {
  return ['api', '/api/v1/videos/:id/source/replace-resumable', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdSourceReplaceResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdSourceReplaceResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].source['replace-resumable'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1VideosIdSourceReplaceResumable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['source']['replace-resumable']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosIdSourceReplaceResumableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersMeAbusesQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.abuses.$get>,
) {
  return ['api', '/api/v1/users/me/abuses', args] as const
}

export function getApiV1UsersMeAbusesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.abuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.abuses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.abuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeAbusesQueryKey>
  >({
    queryKey: getApiV1UsersMeAbusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.abuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeAbuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.abuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.abuses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.abuses.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeAbusesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UsersMeAbusesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AbusesQueryKey(args: InferRequestType<typeof client.api.v1.abuses.$get>) {
  return ['api', '/api/v1/abuses', args] as const
}

export function getApiV1AbusesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.abuses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbusesQueryKey>
  >({
    queryKey: getApiV1AbusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.abuses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Abuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.abuses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AbusesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AbusesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1AbusesMutationKey() {
  return ['api', '/api/v1/abuses', 'POST'] as const
}

export function getPostApiV1AbusesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.abuses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbusesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.abuses.$post>) {
      return parseResponse(client.api.v1.abuses.$post(args, options))
    },
  })
}

export function createPostApiV1Abuses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.abuses.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AbusesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1AbusesAbuseIdMutationKey() {
  return ['api', '/api/v1/abuses/:abuseId', 'PUT'] as const
}

export function getPutApiV1AbusesAbuseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AbusesAbuseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$put']>) {
      return parseResponse(client.api.v1.abuses[':abuseId'].$put(args, options))
    },
  })
}

export function createPutApiV1AbusesAbuseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1AbusesAbuseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1AbusesAbuseIdMutationKey() {
  return ['api', '/api/v1/abuses/:abuseId', 'DELETE'] as const
}

export function getDeleteApiV1AbusesAbuseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AbusesAbuseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>) {
      return parseResponse(client.api.v1.abuses[':abuseId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1AbusesAbuseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1AbusesAbuseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AbusesAbuseIdMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>,
) {
  return ['api', '/api/v1/abuses/:abuseId/messages', args] as const
}

export function getApiV1AbusesAbuseIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbusesAbuseIdMessagesQueryKey>
  >({
    queryKey: getApiV1AbusesAbuseIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.abuses[':abuseId'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AbusesAbuseIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AbusesAbuseIdMessagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AbusesAbuseIdMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1AbusesAbuseIdMessagesMutationKey() {
  return ['api', '/api/v1/abuses/:abuseId/messages', 'POST'] as const
}

export function getPostApiV1AbusesAbuseIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbusesAbuseIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>,
    ) {
      return parseResponse(client.api.v1.abuses[':abuseId'].messages.$post(args, options))
    },
  })
}

export function createPostApiV1AbusesAbuseIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AbusesAbuseIdMessagesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1AbusesAbuseIdMessagesAbuseMessageIdMutationKey() {
  return ['api', '/api/v1/abuses/:abuseId/messages/:abuseMessageId', 'DELETE'] as const
}

export function getDeleteApiV1AbusesAbuseIdMessagesAbuseMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AbusesAbuseIdMessagesAbuseMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.abuses[':abuseId'].messages[':abuseMessageId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1AbusesAbuseIdMessagesAbuseMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1AbusesAbuseIdMessagesAbuseMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1VideosIdBlacklistMutationKey() {
  return ['api', '/api/v1/videos/:id/blacklist', 'PUT'] as const
}

export function getPutApiV1VideosIdBlacklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['blacklist']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdBlacklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$put']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].blacklist.$put(args, options))
    },
  })
}

export function createPutApiV1VideosIdBlacklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['blacklist']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideosIdBlacklistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdBlacklistMutationKey() {
  return ['api', '/api/v1/videos/:id/blacklist', 'POST'] as const
}

export function getPostApiV1VideosIdBlacklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdBlacklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].blacklist.$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdBlacklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdBlacklistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosIdBlacklistMutationKey() {
  return ['api', '/api/v1/videos/:id/blacklist', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdBlacklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdBlacklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].blacklist.$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideosIdBlacklist<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosIdBlacklistMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideosBlacklistQueryKey(
  args: InferRequestType<typeof client.api.v1.videos.blacklist.$get>,
) {
  return ['api', '/api/v1/videos/blacklist', args] as const
}

export function getApiV1VideosBlacklistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.blacklist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.videos.blacklist.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.blacklist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosBlacklistQueryKey>
  >({
    queryKey: getApiV1VideosBlacklistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos.blacklist.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosBlacklist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.blacklist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.videos.blacklist.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.blacklist.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosBlacklistQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosBlacklistQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosIdStoryboardsQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['storyboards']['$get']>,
) {
  return ['api', '/api/v1/videos/:id/storyboards', args] as const
}

export function getApiV1VideosIdStoryboardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['storyboards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['storyboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['storyboards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdStoryboardsQueryKey>
  >({
    queryKey: getApiV1VideosIdStoryboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].storyboards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdStoryboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['storyboards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['storyboards']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['storyboards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdStoryboardsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdStoryboardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosIdCaptionsQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['captions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/videos/:id/captions', keyArgs] as const
}

export function getApiV1VideosIdCaptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['captions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['captions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['captions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdCaptionsQueryKey>
  >({
    queryKey: getApiV1VideosIdCaptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].captions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdCaptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['captions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['captions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['captions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdCaptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdCaptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdCaptionsGenerateMutationKey() {
  return ['api', '/api/v1/videos/:id/captions/generate', 'POST'] as const
}

export function getPostApiV1VideosIdCaptionsGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.videos)[':id']['captions']['generate']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['captions']['generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdCaptionsGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['captions']['generate']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].captions.generate.$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdCaptionsGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.videos)[':id']['captions']['generate']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['captions']['generate']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdCaptionsGenerateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1VideosIdCaptionsCaptionLanguageMutationKey() {
  return ['api', '/api/v1/videos/:id/captions/:captionLanguage', 'PUT'] as const
}

export function getPutApiV1VideosIdCaptionsCaptionLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdCaptionsCaptionLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].captions[':captionLanguage'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1VideosIdCaptionsCaptionLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideosIdCaptionsCaptionLanguageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosIdCaptionsCaptionLanguageMutationKey() {
  return ['api', '/api/v1/videos/:id/captions/:captionLanguage', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdCaptionsCaptionLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdCaptionsCaptionLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].captions[':captionLanguage'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1VideosIdCaptionsCaptionLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosIdCaptionsCaptionLanguageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideosIdChaptersQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['chapters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/videos/:id/chapters', keyArgs] as const
}

export function getApiV1VideosIdChaptersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['chapters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['chapters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['chapters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdChaptersQueryKey>
  >({
    queryKey: getApiV1VideosIdChaptersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].chapters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdChapters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['chapters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['chapters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['chapters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdChaptersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdChaptersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1VideosIdChaptersMutationKey() {
  return ['api', '/api/v1/videos/:id/chapters', 'PUT'] as const
}

export function getPutApiV1VideosIdChaptersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['chapters']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['chapters']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdChaptersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['chapters']['$put']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].chapters.$put(args, options))
    },
  })
}

export function createPutApiV1VideosIdChapters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['chapters']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['chapters']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideosIdChaptersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideosIdEmbedPrivacyQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$get']>,
) {
  return ['api', '/api/v1/videos/:id/embed-privacy', args] as const
}

export function getApiV1VideosIdEmbedPrivacyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdEmbedPrivacyQueryKey>
  >({
    queryKey: getApiV1VideosIdEmbedPrivacyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id']['embed-privacy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdEmbedPrivacy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdEmbedPrivacyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdEmbedPrivacyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1VideosIdEmbedPrivacyMutationKey() {
  return ['api', '/api/v1/videos/:id/embed-privacy', 'PUT'] as const
}

export function getPutApiV1VideosIdEmbedPrivacyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdEmbedPrivacyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$put']>,
    ) {
      return parseResponse(client.api.v1.videos[':id']['embed-privacy'].$put(args, options))
    },
  })
}

export function createPutApiV1VideosIdEmbedPrivacy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['embed-privacy']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideosIdEmbedPrivacyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideosIdEmbedPrivacyAllowedQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['embed-privacy']['allowed']['$get']>,
) {
  return ['api', '/api/v1/videos/:id/embed-privacy/allowed', args] as const
}

export function getApiV1VideosIdEmbedPrivacyAllowedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.videos)[':id']['embed-privacy']['allowed']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['embed-privacy']['allowed']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.videos)[':id']['embed-privacy']['allowed']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdEmbedPrivacyAllowedQueryKey>
  >({
    queryKey: getApiV1VideosIdEmbedPrivacyAllowedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id']['embed-privacy'].allowed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdEmbedPrivacyAllowed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.videos)[':id']['embed-privacy']['allowed']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.videos)[':id']['embed-privacy']['allowed']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.videos)[':id']['embed-privacy']['allowed']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdEmbedPrivacyAllowedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdEmbedPrivacyAllowedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosIdPasswordsQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['passwords']['$get']>,
) {
  return ['api', '/api/v1/videos/:id/passwords', args] as const
}

export function getApiV1VideosIdPasswordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['passwords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['passwords']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['passwords']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdPasswordsQueryKey>
  >({
    queryKey: getApiV1VideosIdPasswordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].passwords.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdPasswords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['passwords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['passwords']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['passwords']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdPasswordsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdPasswordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1VideosIdPasswordsMutationKey() {
  return ['api', '/api/v1/videos/:id/passwords', 'PUT'] as const
}

export function getPutApiV1VideosIdPasswordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['passwords']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['passwords']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdPasswordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['passwords']['$put']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].passwords.$put(args, options))
    },
  })
}

export function createPutApiV1VideosIdPasswords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['passwords']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['passwords']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideosIdPasswordsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdPasswordsMutationKey() {
  return ['api', '/api/v1/videos/:id/passwords', 'POST'] as const
}

export function getPostApiV1VideosIdPasswordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['passwords']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['passwords']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdPasswordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['passwords']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].passwords.$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdPasswords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['passwords']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['passwords']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdPasswordsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosIdPasswordsPasswordIdMutationKey() {
  return ['api', '/api/v1/videos/:id/passwords/:passwordId', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdPasswordsPasswordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.videos)[':id']['passwords'][':passwordId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['passwords'][':passwordId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdPasswordsPasswordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['passwords'][':passwordId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].passwords[':passwordId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1VideosIdPasswordsPasswordId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.videos)[':id']['passwords'][':passwordId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['passwords'][':passwordId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosIdPasswordsPasswordIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideoChannelsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['video-channels']['$get']>,
) {
  return ['api', '/api/v1/video-channels', args] as const
}

export function getApiV1VideoChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['video-channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsQueryKey>
  >({
    queryKey: getApiV1VideoChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-channels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['video-channels']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoChannelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VideoChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1VideoChannelsMutationKey() {
  return ['api', '/api/v1/video-channels', 'POST'] as const
}

export function getPostApiV1VideoChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['video-channels']['$post']>) {
      return parseResponse(client.api.v1['video-channels'].$post(args, options))
    },
  })
}

export function createPostApiV1VideoChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-channels']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoChannelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideoChannelsChannelHandleQueryKey(
  args: InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>,
) {
  return ['api', '/api/v1/video-channels/:channelHandle', args] as const
}

export function getApiV1VideoChannelsChannelHandleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleQueryKey>
  >({
    queryKey: getApiV1VideoChannelsChannelHandleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoChannelsChannelHandle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoChannelsChannelHandleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1VideoChannelsChannelHandleMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle', 'PUT'] as const
}

export function getPutApiV1VideoChannelsChannelHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideoChannelsChannelHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>,
    ) {
      return parseResponse(client.api.v1['video-channels'][':channelHandle'].$put(args, options))
    },
  })
}

export function createPutApiV1VideoChannelsChannelHandle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideoChannelsChannelHandleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideoChannelsChannelHandleMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle', 'DELETE'] as const
}

export function getDeleteApiV1VideoChannelsChannelHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoChannelsChannelHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$delete']>,
    ) {
      return parseResponse(client.api.v1['video-channels'][':channelHandle'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideoChannelsChannelHandle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels'][':channelHandle']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideoChannelsChannelHandleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideoChannelsChannelHandleVideosQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']
  >,
) {
  return ['api', '/api/v1/video-channels/:channelHandle/videos', args] as const
}

export function getApiV1VideoChannelsChannelHandleVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleVideosQueryKey>
  >({
    queryKey: getApiV1VideoChannelsChannelHandleVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoChannelsChannelHandleVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoChannelsChannelHandleVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideoChannelsChannelHandleActivitiesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['activities']['$get']
  >,
) {
  return ['api', '/api/v1/video-channels/:channelHandle/activities', args] as const
}

export function getApiV1VideoChannelsChannelHandleActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['activities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['activities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['video-channels'][':channelHandle']['activities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleActivitiesQueryKey>
  >({
    queryKey: getApiV1VideoChannelsChannelHandleActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoChannelsChannelHandleActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['activities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['activities']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-channels'][':channelHandle']['activities']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleActivitiesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoChannelsChannelHandleActivitiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
  >,
) {
  return ['api', '/api/v1/video-channels/:channelHandle/video-playlists', args] as const
}

export function getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryKey>
  >({
    queryKey: getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle']['video-playlists'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoChannelsChannelHandleVideoPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelsChannelHandleVideoPlaylistsReorderMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/video-playlists/reorder', 'POST'] as const
}

export function getPostApiV1VideoChannelsChannelHandleVideoPlaylistsReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['reorder']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['reorder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsChannelHandleVideoPlaylistsReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['reorder']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle']['video-playlists'].reorder.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1VideoChannelsChannelHandleVideoPlaylistsReorder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['reorder']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['reorder']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1VideoChannelsChannelHandleVideoPlaylistsReorderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideoChannelsChannelHandleFollowersQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
  >,
) {
  return ['api', '/api/v1/video-channels/:channelHandle/followers', args] as const
}

export function getApiV1VideoChannelsChannelHandleFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleFollowersQueryKey>
  >({
    queryKey: getApiV1VideoChannelsChannelHandleFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoChannelsChannelHandleFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleFollowersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoChannelsChannelHandleFollowersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelsChannelHandleAvatarPickMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/avatar/pick', 'POST'] as const
}

export function getPostApiV1VideoChannelsChannelHandleAvatarPickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsChannelHandleAvatarPickMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].avatar.pick.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoChannelsChannelHandleAvatarPick<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoChannelsChannelHandleAvatarPickMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideoChannelsChannelHandleAvatarMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/avatar', 'DELETE'] as const
}

export function getDeleteApiV1VideoChannelsChannelHandleAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoChannelsChannelHandleAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].avatar.$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1VideoChannelsChannelHandleAvatar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideoChannelsChannelHandleAvatarMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelsChannelHandleBannerPickMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/banner/pick', 'POST'] as const
}

export function getPostApiV1VideoChannelsChannelHandleBannerPickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsChannelHandleBannerPickMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].banner.pick.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoChannelsChannelHandleBannerPick<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoChannelsChannelHandleBannerPickMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideoChannelsChannelHandleBannerMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/banner', 'DELETE'] as const
}

export function getDeleteApiV1VideoChannelsChannelHandleBannerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoChannelsChannelHandleBannerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].banner.$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1VideoChannelsChannelHandleBanner<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideoChannelsChannelHandleBannerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelsChannelHandleImportVideosMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/import-videos', 'POST'] as const
}

export function getPostApiV1VideoChannelsChannelHandleImportVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsChannelHandleImportVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle']['import-videos'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoChannelsChannelHandleImportVideos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoChannelsChannelHandleImportVideosMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelSyncsMutationKey() {
  return ['api', '/api/v1/video-channel-syncs', 'POST'] as const
}

export function getPostApiV1VideoChannelSyncsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-channel-syncs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channel-syncs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelSyncsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-channel-syncs']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-channel-syncs'].$post(args, options))
    },
  })
}

export function createPostApiV1VideoChannelSyncs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-channel-syncs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-channel-syncs']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoChannelSyncsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideoChannelSyncsChannelSyncIdMutationKey() {
  return ['api', '/api/v1/video-channel-syncs/:channelSyncId', 'DELETE'] as const
}

export function getDeleteApiV1VideoChannelSyncsChannelSyncIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoChannelSyncsChannelSyncIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channel-syncs'][':channelSyncId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1VideoChannelSyncsChannelSyncId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideoChannelSyncsChannelSyncIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelSyncsChannelSyncIdSyncMutationKey() {
  return ['api', '/api/v1/video-channel-syncs/:channelSyncId/sync', 'POST'] as const
}

export function getPostApiV1VideoChannelSyncsChannelSyncIdSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelSyncsChannelSyncIdSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channel-syncs'][':channelSyncId'].sync.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoChannelSyncsChannelSyncIdSync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoChannelSyncsChannelSyncIdSyncMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1PlayerSettingsVideosIdQueryKey(
  args: InferRequestType<(typeof client.api.v1)['player-settings']['videos'][':id']['$get']>,
) {
  return ['api', '/api/v1/player-settings/videos/:id', args] as const
}

export function getApiV1PlayerSettingsVideosIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['player-settings']['videos'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['player-settings']['videos'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['player-settings']['videos'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PlayerSettingsVideosIdQueryKey>
  >({
    queryKey: getApiV1PlayerSettingsVideosIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['player-settings'].videos[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PlayerSettingsVideosId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['player-settings']['videos'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['player-settings']['videos'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['player-settings']['videos'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PlayerSettingsVideosIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PlayerSettingsVideosIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1PlayerSettingsVideosIdMutationKey() {
  return ['api', '/api/v1/player-settings/videos/:id', 'PUT'] as const
}

export function getPutApiV1PlayerSettingsVideosIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['player-settings']['videos'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['player-settings']['videos'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PlayerSettingsVideosIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['player-settings']['videos'][':id']['$put']>,
    ) {
      return parseResponse(client.api.v1['player-settings'].videos[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1PlayerSettingsVideosId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['player-settings']['videos'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['player-settings']['videos'][':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1PlayerSettingsVideosIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1PlayerSettingsVideoChannelsChannelHandleQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$get']
  >,
) {
  return ['api', '/api/v1/player-settings/video-channels/:channelHandle', args] as const
}

export function getApiV1PlayerSettingsVideoChannelsChannelHandleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PlayerSettingsVideoChannelsChannelHandleQueryKey>
  >({
    queryKey: getApiV1PlayerSettingsVideoChannelsChannelHandleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['player-settings']['video-channels'][':channelHandle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PlayerSettingsVideoChannelsChannelHandle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PlayerSettingsVideoChannelsChannelHandleQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PlayerSettingsVideoChannelsChannelHandleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1PlayerSettingsVideoChannelsChannelHandleMutationKey() {
  return ['api', '/api/v1/player-settings/video-channels/:channelHandle', 'PUT'] as const
}

export function getPutApiV1PlayerSettingsVideoChannelsChannelHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PlayerSettingsVideoChannelsChannelHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1['player-settings']['video-channels'][':channelHandle'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1PlayerSettingsVideoChannelsChannelHandle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['player-settings']['video-channels'][':channelHandle']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1PlayerSettingsVideoChannelsChannelHandleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideoPlaylistsPrivaciesQueryKey() {
  return ['api', '/api/v1/video-playlists/privacies'] as const
}

export function getApiV1VideoPlaylistsPrivaciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['privacies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['privacies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoPlaylistsPrivaciesQueryKey>
  >({
    queryKey: getApiV1VideoPlaylistsPrivaciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-playlists'].privacies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoPlaylistsPrivacies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['privacies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['privacies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoPlaylistsPrivaciesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoPlaylistsPrivaciesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideoPlaylistsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['video-playlists']['$get']>,
) {
  return ['api', '/api/v1/video-playlists', args] as const
}

export function getApiV1VideoPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['video-playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoPlaylistsQueryKey>
  >({
    queryKey: getApiV1VideoPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-playlists'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['video-playlists']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoPlaylistsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VideoPlaylistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1VideoPlaylistsMutationKey() {
  return ['api', '/api/v1/video-playlists', 'POST'] as const
}

export function getPostApiV1VideoPlaylistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-playlists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoPlaylistsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['video-playlists']['$post']>) {
      return parseResponse(client.api.v1['video-playlists'].$post(args, options))
    },
  })
}

export function createPostApiV1VideoPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-playlists']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoPlaylistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideoPlaylistsPlaylistIdQueryKey(
  args: InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>,
) {
  return ['api', '/api/v1/video-playlists/:playlistId', args] as const
}

export function getApiV1VideoPlaylistsPlaylistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoPlaylistsPlaylistIdQueryKey>
  >({
    queryKey: getApiV1VideoPlaylistsPlaylistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoPlaylistsPlaylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoPlaylistsPlaylistIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoPlaylistsPlaylistIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1VideoPlaylistsPlaylistIdMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId', 'PUT'] as const
}

export function getPutApiV1VideoPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideoPlaylistsPlaylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>,
    ) {
      return parseResponse(client.api.v1['video-playlists'][':playlistId'].$put(args, options))
    },
  })
}

export function createPutApiV1VideoPlaylistsPlaylistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideoPlaylistsPlaylistIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideoPlaylistsPlaylistIdMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId', 'DELETE'] as const
}

export function getDeleteApiV1VideoPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoPlaylistsPlaylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>,
    ) {
      return parseResponse(client.api.v1['video-playlists'][':playlistId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideoPlaylistsPlaylistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideoPlaylistsPlaylistIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideoPlaylistsPlaylistIdVideosQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']
  >,
) {
  return ['api', '/api/v1/video-playlists/:playlistId/videos', args] as const
}

export function getApiV1VideoPlaylistsPlaylistIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoPlaylistsPlaylistIdVideosQueryKey>
  >({
    queryKey: getApiV1VideoPlaylistsPlaylistIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoPlaylistsPlaylistIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoPlaylistsPlaylistIdVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoPlaylistsPlaylistIdVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideoPlaylistsPlaylistIdVideosMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId/videos', 'POST'] as const
}

export function getPostApiV1VideoPlaylistsPlaylistIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoPlaylistsPlaylistIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].videos.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoPlaylistsPlaylistIdVideos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoPlaylistsPlaylistIdVideosMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideoPlaylistsPlaylistIdVideosReorderMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId/videos/reorder', 'POST'] as const
}

export function getPostApiV1VideoPlaylistsPlaylistIdVideosReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoPlaylistsPlaylistIdVideosReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].videos.reorder.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoPlaylistsPlaylistIdVideosReorder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoPlaylistsPlaylistIdVideosReorderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId/videos/:playlistElementId', 'PUT'] as const
}

export function getPutApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].videos[':playlistElementId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId/videos/:playlistElementId', 'DELETE'] as const
}

export function getDeleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].videos[':playlistElementId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersMeVideoPlaylistsVideosExistQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']
  >,
) {
  return ['api', '/api/v1/users/me/video-playlists/videos-exist', args] as const
}

export function getApiV1UsersMeVideoPlaylistsVideosExistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideoPlaylistsVideosExistQueryKey>
  >({
    queryKey: getApiV1UsersMeVideoPlaylistsVideosExistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me['video-playlists']['videos-exist'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeVideoPlaylistsVideosExist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeVideoPlaylistsVideosExistQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeVideoPlaylistsVideosExistQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AccountsNameVideoPlaylistsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>,
) {
  return ['api', '/api/v1/accounts/:name/video-playlists', args] as const
}

export function getApiV1AccountsNameVideoPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameVideoPlaylistsQueryKey>
  >({
    queryKey: getApiV1AccountsNameVideoPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':name']['video-playlists'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AccountsNameVideoPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AccountsNameVideoPlaylistsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AccountsNameVideoPlaylistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AccountsNameVideoChannelsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>,
) {
  return ['api', '/api/v1/accounts/:name/video-channels', args] as const
}

export function getApiV1AccountsNameVideoChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameVideoChannelsQueryKey>
  >({
    queryKey: getApiV1AccountsNameVideoChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':name']['video-channels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AccountsNameVideoChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AccountsNameVideoChannelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AccountsNameVideoChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AccountsNameVideoChannelSyncsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>,
) {
  return ['api', '/api/v1/accounts/:name/video-channel-syncs', args] as const
}

export function getApiV1AccountsNameVideoChannelSyncsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameVideoChannelSyncsQueryKey>
  >({
    queryKey: getApiV1AccountsNameVideoChannelSyncsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':name']['video-channel-syncs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AccountsNameVideoChannelSyncs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AccountsNameVideoChannelSyncsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AccountsNameVideoChannelSyncsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AccountsNameRatingsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>,
) {
  return ['api', '/api/v1/accounts/:name/ratings', args] as const
}

export function getApiV1AccountsNameRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameRatingsQueryKey>
  >({
    queryKey: getApiV1AccountsNameRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':name'].ratings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AccountsNameRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AccountsNameRatingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AccountsNameRatingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosIdCommentThreadsQueryKey(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/videos/:id/comment-threads', keyArgs] as const
}

export function getApiV1VideosIdCommentThreadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdCommentThreadsQueryKey>
  >({
    queryKey: getApiV1VideosIdCommentThreadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id']['comment-threads'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdCommentThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdCommentThreadsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdCommentThreadsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdCommentThreadsMutationKey() {
  return ['api', '/api/v1/videos/:id/comment-threads', 'POST'] as const
}

export function getPostApiV1VideosIdCommentThreadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdCommentThreadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id']['comment-threads'].$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdCommentThreads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdCommentThreadsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideosIdCommentThreadsThreadIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/videos/:id/comment-threads/:threadId', keyArgs] as const
}

export function getApiV1VideosIdCommentThreadsThreadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdCommentThreadsThreadIdQueryKey>
  >({
    queryKey: getApiV1VideosIdCommentThreadsThreadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id']['comment-threads'][':threadId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdCommentThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdCommentThreadsThreadIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdCommentThreadsThreadIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosIdCommentsCommentIdRepliesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.videos)[':id']['comments'][':commentId']['replies']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/videos/:id/comments/:commentId/replies', keyArgs] as const
}

export function getApiV1VideosIdCommentsCommentIdRepliesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.videos)[':id']['comments'][':commentId']['replies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.videos)[':id']['comments'][':commentId']['replies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.videos)[':id']['comments'][':commentId']['replies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdCommentsCommentIdRepliesQueryKey>
  >({
    queryKey: getApiV1VideosIdCommentsCommentIdRepliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos[':id'].comments[':commentId'].replies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosIdCommentsCommentIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.videos)[':id']['comments'][':commentId']['replies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.videos)[':id']['comments'][':commentId']['replies']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.videos)[':id']['comments'][':commentId']['replies']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosIdCommentsCommentIdRepliesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideosIdCommentsCommentIdRepliesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1VideosCommentsQueryKey(
  args: InferRequestType<typeof client.api.v1.videos.comments.$get>,
) {
  return ['api', '/api/v1/videos/comments', args] as const
}

export function getApiV1VideosCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.videos.comments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.comments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosCommentsQueryKey>
  >({
    queryKey: getApiV1VideosCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.videos.comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideosComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.videos.comments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.comments.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideosCommentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VideosCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1VideosIdCommentsCommentIdMutationKey() {
  return ['api', '/api/v1/videos/:id/comments/:commentId', 'POST'] as const
}

export function getPostApiV1VideosIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.videos[':id'].comments[':commentId'].$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdCommentsCommentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosIdCommentsCommentIdMutationKey() {
  return ['api', '/api/v1/videos/:id/comments/:commentId', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].comments[':commentId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1VideosIdCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosIdCommentsCommentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdCommentsCommentIdApproveMutationKey() {
  return ['api', '/api/v1/videos/:id/comments/:commentId/approve', 'POST'] as const
}

export function getPostApiV1VideosIdCommentsCommentIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.videos)[':id']['comments'][':commentId']['approve']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.videos)[':id']['comments'][':commentId']['approve']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdCommentsCommentIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['comments'][':commentId']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].comments[':commentId'].approve.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideosIdCommentsCommentIdApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.videos)[':id']['comments'][':commentId']['approve']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['comments'][':commentId']['approve']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdCommentsCommentIdApproveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1VideosIdRateMutationKey() {
  return ['api', '/api/v1/videos/:id/rate', 'PUT'] as const
}

export function getPutApiV1VideosIdRateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['rate']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['rate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdRateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.videos)[':id']['rate']['$put']>) {
      return parseResponse(client.api.v1.videos[':id'].rate.$put(args, options))
    },
  })
}

export function createPutApiV1VideosIdRate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['rate']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['rate']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1VideosIdRateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosIdHlsMutationKey() {
  return ['api', '/api/v1/videos/:id/hls', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdHlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdHlsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].hls.$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideosIdHls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosIdHlsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideosIdWebVideosMutationKey() {
  return ['api', '/api/v1/videos/:id/web-videos', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdWebVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['web-videos']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['web-videos']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdWebVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['web-videos']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos[':id']['web-videos'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1VideosIdWebVideos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['web-videos']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['web-videos']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1VideosIdWebVideosMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideosIdTranscodingMutationKey() {
  return ['api', '/api/v1/videos/:id/transcoding', 'POST'] as const
}

export function getPostApiV1VideosIdTranscodingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdTranscodingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].transcoding.$post(args, options))
    },
  })
}

export function createPostApiV1VideosIdTranscoding<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideosIdTranscodingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1SearchVideosQueryKey(
  args: InferRequestType<typeof client.api.v1.search.videos.$get>,
) {
  return ['api', '/api/v1/search/videos', args] as const
}

export function getApiV1SearchVideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.search.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.videos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchVideosQueryKey>
  >({
    queryKey: getApiV1SearchVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.search.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1SearchVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.search.videos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.videos.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SearchVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SearchVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SearchVideoChannelsQueryKey(
  args: InferRequestType<(typeof client.api.v1.search)['video-channels']['$get']>,
) {
  return ['api', '/api/v1/search/video-channels', args] as const
}

export function getApiV1SearchVideoChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.search)['video-channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.search)['video-channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.search)['video-channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchVideoChannelsQueryKey>
  >({
    queryKey: getApiV1SearchVideoChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.search['video-channels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SearchVideoChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.search)['video-channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.search)['video-channels']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.search)['video-channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SearchVideoChannelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SearchVideoChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1SearchVideoPlaylistsQueryKey(
  args: InferRequestType<(typeof client.api.v1.search)['video-playlists']['$get']>,
) {
  return ['api', '/api/v1/search/video-playlists', args] as const
}

export function getApiV1SearchVideoPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.search)['video-playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.search)['video-playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.search)['video-playlists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchVideoPlaylistsQueryKey>
  >({
    queryKey: getApiV1SearchVideoPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.search['video-playlists'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SearchVideoPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.search)['video-playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.search)['video-playlists']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.search)['video-playlists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SearchVideoPlaylistsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SearchVideoPlaylistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1BlocklistStatusQueryKey(
  args: InferRequestType<typeof client.api.v1.blocklist.status.$get>,
) {
  return ['api', '/api/v1/blocklist/status', args] as const
}

export function getApiV1BlocklistStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.blocklist.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BlocklistStatusQueryKey>
  >({
    queryKey: getApiV1BlocklistStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.blocklist.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BlocklistStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.blocklist.status.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.status.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1BlocklistStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BlocklistStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1UsersMeBlocklistAccountsQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.blocklist.accounts.$get>,
) {
  return ['api', '/api/v1/users/me/blocklist/accounts', args] as const
}

export function getApiV1UsersMeBlocklistAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.accounts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.blocklist.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.accounts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeBlocklistAccountsQueryKey>
  >({
    queryKey: getApiV1UsersMeBlocklistAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.blocklist.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeBlocklistAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.accounts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.blocklist.accounts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.accounts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeBlocklistAccountsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeBlocklistAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersMeBlocklistAccountsMutationKey() {
  return ['api', '/api/v1/users/me/blocklist/accounts', 'POST'] as const
}

export function getPostApiV1UsersMeBlocklistAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.accounts.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.users.me.blocklist.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeBlocklistAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.users.me.blocklist.accounts.$post>,
    ) {
      return parseResponse(client.api.v1.users.me.blocklist.accounts.$post(args, options))
    },
  })
}

export function createPostApiV1UsersMeBlocklistAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.accounts.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.users.me.blocklist.accounts.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersMeBlocklistAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1UsersMeBlocklistAccountsAccountNameMutationKey() {
  return ['api', '/api/v1/users/me/blocklist/accounts/:accountName', 'DELETE'] as const
}

export function getDeleteApiV1UsersMeBlocklistAccountsAccountNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.me.blocklist.accounts)[':accountName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.me.blocklist.accounts)[':accountName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersMeBlocklistAccountsAccountNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.me.blocklist.accounts)[':accountName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.me.blocklist.accounts[':accountName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1UsersMeBlocklistAccountsAccountName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users.me.blocklist.accounts)[':accountName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.me.blocklist.accounts)[':accountName']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersMeBlocklistAccountsAccountNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersMeBlocklistServersQueryKey(
  args: InferRequestType<typeof client.api.v1.users.me.blocklist.servers.$get>,
) {
  return ['api', '/api/v1/users/me/blocklist/servers', args] as const
}

export function getApiV1UsersMeBlocklistServersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.servers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.me.blocklist.servers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.servers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeBlocklistServersQueryKey>
  >({
    queryKey: getApiV1UsersMeBlocklistServersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.blocklist.servers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersMeBlocklistServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.servers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.me.blocklist.servers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.servers.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersMeBlocklistServersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersMeBlocklistServersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersMeBlocklistServersMutationKey() {
  return ['api', '/api/v1/users/me/blocklist/servers', 'POST'] as const
}

export function getPostApiV1UsersMeBlocklistServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.servers.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.users.me.blocklist.servers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeBlocklistServersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.users.me.blocklist.servers.$post>,
    ) {
      return parseResponse(client.api.v1.users.me.blocklist.servers.$post(args, options))
    },
  })
}

export function createPostApiV1UsersMeBlocklistServers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.users.me.blocklist.servers.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.users.me.blocklist.servers.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersMeBlocklistServersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1UsersMeBlocklistServersHostMutationKey() {
  return ['api', '/api/v1/users/me/blocklist/servers/:host', 'DELETE'] as const
}

export function getDeleteApiV1UsersMeBlocklistServersHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.users.me.blocklist.servers)[':host']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.me.blocklist.servers)[':host']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersMeBlocklistServersHostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users.me.blocklist.servers)[':host']['$delete']>,
    ) {
      return parseResponse(client.api.v1.users.me.blocklist.servers[':host'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1UsersMeBlocklistServersHost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.users.me.blocklist.servers)[':host']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users.me.blocklist.servers)[':host']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersMeBlocklistServersHostMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ServerBlocklistAccountsQueryKey(
  args: InferRequestType<typeof client.api.v1.server.blocklist.accounts.$get>,
) {
  return ['api', '/api/v1/server/blocklist/accounts', args] as const
}

export function getApiV1ServerBlocklistAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.server.blocklist.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerBlocklistAccountsQueryKey>
  >({
    queryKey: getApiV1ServerBlocklistAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server.blocklist.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerBlocklistAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.server.blocklist.accounts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerBlocklistAccountsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ServerBlocklistAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ServerBlocklistAccountsMutationKey() {
  return ['api', '/api/v1/server/blocklist/accounts', 'POST'] as const
}

export function getPostApiV1ServerBlocklistAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.server.blocklist.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerBlocklistAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.blocklist.accounts.$post>) {
      return parseResponse(client.api.v1.server.blocklist.accounts.$post(args, options))
    },
  })
}

export function createPostApiV1ServerBlocklistAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.server.blocklist.accounts.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ServerBlocklistAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ServerBlocklistAccountsAccountNameMutationKey() {
  return ['api', '/api/v1/server/blocklist/accounts/:accountName', 'DELETE'] as const
}

export function getDeleteApiV1ServerBlocklistAccountsAccountNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerBlocklistAccountsAccountNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.server.blocklist.accounts[':accountName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1ServerBlocklistAccountsAccountName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ServerBlocklistAccountsAccountNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ServerBlocklistServersQueryKey(
  args: InferRequestType<typeof client.api.v1.server.blocklist.servers.$get>,
) {
  return ['api', '/api/v1/server/blocklist/servers', args] as const
}

export function getApiV1ServerBlocklistServersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.server.blocklist.servers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerBlocklistServersQueryKey>
  >({
    queryKey: getApiV1ServerBlocklistServersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server.blocklist.servers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerBlocklistServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.server.blocklist.servers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerBlocklistServersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ServerBlocklistServersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ServerBlocklistServersMutationKey() {
  return ['api', '/api/v1/server/blocklist/servers', 'POST'] as const
}

export function getPostApiV1ServerBlocklistServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.server.blocklist.servers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerBlocklistServersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.blocklist.servers.$post>) {
      return parseResponse(client.api.v1.server.blocklist.servers.$post(args, options))
    },
  })
}

export function createPostApiV1ServerBlocklistServers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.server.blocklist.servers.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ServerBlocklistServersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ServerBlocklistServersHostMutationKey() {
  return ['api', '/api/v1/server/blocklist/servers/:host', 'DELETE'] as const
}

export function getDeleteApiV1ServerBlocklistServersHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerBlocklistServersHostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>,
    ) {
      return parseResponse(client.api.v1.server.blocklist.servers[':host'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1ServerBlocklistServersHost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ServerBlocklistServersHostMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ServerBlocklistSubscriptionsQueryKey(
  args: InferRequestType<typeof client.api.v1.server.blocklist.subscriptions.$get>,
) {
  return ['api', '/api/v1/server/blocklist/subscriptions', args] as const
}

export function getApiV1ServerBlocklistSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.server.blocklist.subscriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.server.blocklist.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.server.blocklist.subscriptions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerBlocklistSubscriptionsQueryKey>
  >({
    queryKey: getApiV1ServerBlocklistSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server.blocklist.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerBlocklistSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.server.blocklist.subscriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.server.blocklist.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.blocklist.subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerBlocklistSubscriptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ServerBlocklistSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ServerBlocklistSubscriptionsMutationKey() {
  return ['api', '/api/v1/server/blocklist/subscriptions', 'POST'] as const
}

export function getPostApiV1ServerBlocklistSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.server.blocklist.subscriptions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.server.blocklist.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerBlocklistSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.server.blocklist.subscriptions.$post>,
    ) {
      return parseResponse(client.api.v1.server.blocklist.subscriptions.$post(args, options))
    },
  })
}

export function createPostApiV1ServerBlocklistSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.blocklist.subscriptions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.server.blocklist.subscriptions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ServerBlocklistSubscriptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ServerBlocklistSubscriptionsIdMutationKey() {
  return ['api', '/api/v1/server/blocklist/subscriptions/:id', 'DELETE'] as const
}

export function getDeleteApiV1ServerBlocklistSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.server.blocklist.subscriptions)[':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.blocklist.subscriptions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerBlocklistSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.server.blocklist.subscriptions)[':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.server.blocklist.subscriptions[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1ServerBlocklistSubscriptionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.server.blocklist.subscriptions)[':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.blocklist.subscriptions)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ServerBlocklistSubscriptionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ServerBlocklistPublicLogQueryKey(
  args: InferRequestType<(typeof client.api.v1.server.blocklist)['public-log']['$get']>,
) {
  return ['api', '/api/v1/server/blocklist/public-log', args] as const
}

export function getApiV1ServerBlocklistPublicLogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.server.blocklist)['public-log']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.server.blocklist)['public-log']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.server.blocklist)['public-log']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerBlocklistPublicLogQueryKey>
  >({
    queryKey: getApiV1ServerBlocklistPublicLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server.blocklist['public-log'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerBlocklistPublicLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.server.blocklist)['public-log']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.server.blocklist)['public-log']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.server.blocklist)['public-log']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerBlocklistPublicLogQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ServerBlocklistPublicLogQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ServerRedundancyHostMutationKey() {
  return ['api', '/api/v1/server/redundancy/:host', 'PUT'] as const
}

export function getPutApiV1ServerRedundancyHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.server.redundancy)[':host']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.redundancy)[':host']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ServerRedundancyHostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.redundancy)[':host']['$put']>,
    ) {
      return parseResponse(client.api.v1.server.redundancy[':host'].$put(args, options))
    },
  })
}

export function createPutApiV1ServerRedundancyHost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.server.redundancy)[':host']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.redundancy)[':host']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1ServerRedundancyHostMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ServerRedundancyVideosQueryKey(
  args: InferRequestType<typeof client.api.v1.server.redundancy.videos.$get>,
) {
  return ['api', '/api/v1/server/redundancy/videos', args] as const
}

export function getApiV1ServerRedundancyVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.server.redundancy.videos.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerRedundancyVideosQueryKey>
  >({
    queryKey: getApiV1ServerRedundancyVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server.redundancy.videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerRedundancyVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.server.redundancy.videos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerRedundancyVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ServerRedundancyVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ServerRedundancyVideosMutationKey() {
  return ['api', '/api/v1/server/redundancy/videos', 'POST'] as const
}

export function getPostApiV1ServerRedundancyVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.server.redundancy.videos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerRedundancyVideosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.redundancy.videos.$post>) {
      return parseResponse(client.api.v1.server.redundancy.videos.$post(args, options))
    },
  })
}

export function createPostApiV1ServerRedundancyVideos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.server.redundancy.videos.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ServerRedundancyVideosMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ServerRedundancyVideosRedundancyIdMutationKey() {
  return ['api', '/api/v1/server/redundancy/videos/:redundancyId', 'DELETE'] as const
}

export function getDeleteApiV1ServerRedundancyVideosRedundancyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerRedundancyVideosRedundancyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.server.redundancy.videos[':redundancyId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1ServerRedundancyVideosRedundancyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ServerRedundancyVideosRedundancyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ServerStatsQueryKey() {
  return ['api', '/api/v1/server/stats'] as const
}

export function getApiV1ServerStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerStatsQueryKey>
  >({
    queryKey: getApiV1ServerStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server.stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.stats.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerStatsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ServerStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ServerContactMutationKey() {
  return ['api', '/api/v1/server/contact', 'POST'] as const
}

export function getPostApiV1ServerContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.contact.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.server.contact.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerContactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.contact.$post>) {
      return parseResponse(client.api.v1.server.contact.$post(args, options))
    },
  })
}

export function createPostApiV1ServerContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.contact.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.server.contact.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ServerContactMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ServerDebugQueryKey() {
  return ['api', '/api/v1/server/debug'] as const
}

export function getApiV1ServerDebugQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.debug.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.debug.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerDebugQueryKey>
  >({
    queryKey: getApiV1ServerDebugQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server.debug.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerDebug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.debug.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.debug.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerDebugQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ServerDebugQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ServerDebugRunCommandMutationKey() {
  return ['api', '/api/v1/server/debug/run-command', 'POST'] as const
}

export function getPostApiV1ServerDebugRunCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.server.debug)['run-command']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.debug)['run-command']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerDebugRunCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.debug)['run-command']['$post']>,
    ) {
      return parseResponse(client.api.v1.server.debug['run-command'].$post(args, options))
    },
  })
}

export function createPostApiV1ServerDebugRunCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.server.debug)['run-command']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.debug)['run-command']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ServerDebugRunCommandMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ServerLogsClientMutationKey() {
  return ['api', '/api/v1/server/logs/client', 'POST'] as const
}

export function getPostApiV1ServerLogsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.logs.client.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.server.logs.client.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerLogsClientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.logs.client.$post>) {
      return parseResponse(client.api.v1.server.logs.client.$post(args, options))
    },
  })
}

export function createPostApiV1ServerLogsClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.server.logs.client.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.server.logs.client.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ServerLogsClientMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ServerLogsQueryKey() {
  return ['api', '/api/v1/server/logs'] as const
}

export function getApiV1ServerLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.logs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerLogsQueryKey>
  >({
    queryKey: getApiV1ServerLogsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server.logs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.logs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerLogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ServerLogsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ServerAuditLogsQueryKey(
  args: InferRequestType<(typeof client.api.v1.server)['audit-logs']['$get']>,
) {
  return ['api', '/api/v1/server/audit-logs', args] as const
}

export function getApiV1ServerAuditLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.server)['audit-logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.server)['audit-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.server)['audit-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerAuditLogsQueryKey>
  >({
    queryKey: getApiV1ServerAuditLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.server['audit-logs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ServerAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.server)['audit-logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.server)['audit-logs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.server)['audit-logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ServerAuditLogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ServerAuditLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1PluginsQueryKey(args: InferRequestType<typeof client.api.v1.plugins.$get>) {
  return ['api', '/api/v1/plugins', args] as const
}

export function getApiV1PluginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.plugins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PluginsQueryKey>
  >({
    queryKey: getApiV1PluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.plugins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Plugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.plugins.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PluginsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PluginsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1PluginsAvailableQueryKey(
  args: InferRequestType<typeof client.api.v1.plugins.available.$get>,
) {
  return ['api', '/api/v1/plugins/available', args] as const
}

export function getApiV1PluginsAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.available.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.plugins.available.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.available.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PluginsAvailableQueryKey>
  >({
    queryKey: getApiV1PluginsAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.plugins.available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PluginsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.available.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.plugins.available.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.available.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PluginsAvailableQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PluginsAvailableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1PluginsInstallMutationKey() {
  return ['api', '/api/v1/plugins/install', 'POST'] as const
}

export function getPostApiV1PluginsInstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.install.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.plugins.install.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PluginsInstallMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.plugins.install.$post>) {
      return parseResponse(client.api.v1.plugins.install.$post(args, options))
    },
  })
}

export function createPostApiV1PluginsInstall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.plugins.install.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.plugins.install.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1PluginsInstallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1PluginsUpdateMutationKey() {
  return ['api', '/api/v1/plugins/update', 'POST'] as const
}

export function getPostApiV1PluginsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.update.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.plugins.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PluginsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.plugins.update.$post>) {
      return parseResponse(client.api.v1.plugins.update.$post(args, options))
    },
  })
}

export function createPostApiV1PluginsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.update.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.plugins.update.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1PluginsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1PluginsUninstallMutationKey() {
  return ['api', '/api/v1/plugins/uninstall', 'POST'] as const
}

export function getPostApiV1PluginsUninstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.uninstall.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.plugins.uninstall.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PluginsUninstallMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.plugins.uninstall.$post>) {
      return parseResponse(client.api.v1.plugins.uninstall.$post(args, options))
    },
  })
}

export function createPostApiV1PluginsUninstall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.plugins.uninstall.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.plugins.uninstall.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1PluginsUninstallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1PluginsNpmNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['$get']>,
) {
  return ['api', '/api/v1/plugins/:npmName', args] as const
}

export function getApiV1PluginsNpmNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PluginsNpmNameQueryKey>
  >({
    queryKey: getApiV1PluginsNpmNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.plugins[':npmName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PluginsNpmName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.plugins)[':npmName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PluginsNpmNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PluginsNpmNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1PluginsNpmNameSettingsMutationKey() {
  return ['api', '/api/v1/plugins/:npmName/settings', 'PUT'] as const
}

export function getPutApiV1PluginsNpmNameSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PluginsNpmNameSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>,
    ) {
      return parseResponse(client.api.v1.plugins[':npmName'].settings.$put(args, options))
    },
  })
}

export function createPutApiV1PluginsNpmNameSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1PluginsNpmNameSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1PluginsNpmNamePublicSettingsQueryKey(
  args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>,
) {
  return ['api', '/api/v1/plugins/:npmName/public-settings', args] as const
}

export function getApiV1PluginsNpmNamePublicSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PluginsNpmNamePublicSettingsQueryKey>
  >({
    queryKey: getApiV1PluginsNpmNamePublicSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.plugins[':npmName']['public-settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PluginsNpmNamePublicSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PluginsNpmNamePublicSettingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PluginsNpmNamePublicSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1PluginsNpmNameRegisteredSettingsQueryKey(
  args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>,
) {
  return ['api', '/api/v1/plugins/:npmName/registered-settings', args] as const
}

export function getApiV1PluginsNpmNameRegisteredSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PluginsNpmNameRegisteredSettingsQueryKey>
  >({
    queryKey: getApiV1PluginsNpmNameRegisteredSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.plugins[':npmName']['registered-settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PluginsNpmNameRegisteredSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PluginsNpmNameRegisteredSettingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PluginsNpmNameRegisteredSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1MetricsPlaybackMutationKey() {
  return ['api', '/api/v1/metrics/playback', 'POST'] as const
}

export function getPostApiV1MetricsPlaybackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metrics.playback.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.metrics.playback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MetricsPlaybackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.metrics.playback.$post>) {
      return parseResponse(client.api.v1.metrics.playback.$post(args, options))
    },
  })
}

export function createPostApiV1MetricsPlayback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.metrics.playback.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.metrics.playback.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1MetricsPlaybackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersRegistrationTokensGenerateMutationKey() {
  return ['api', '/api/v1/runners/registration-tokens/generate', 'POST'] as const
}

export function getPostApiV1RunnersRegistrationTokensGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.runners)['registration-tokens']['generate']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersRegistrationTokensGenerateMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.api.v1.runners['registration-tokens'].generate.$post(undefined, options),
      )
    },
  })
}

export function createPostApiV1RunnersRegistrationTokensGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.runners)['registration-tokens']['generate']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1RunnersRegistrationTokensGenerateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1RunnersRegistrationTokensRegistrationTokenIdMutationKey() {
  return ['api', '/api/v1/runners/registration-tokens/:registrationTokenId', 'DELETE'] as const
}

export function getDeleteApiV1RunnersRegistrationTokensRegistrationTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.runners)['registration-tokens'][':registrationTokenId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.runners)['registration-tokens'][':registrationTokenId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RunnersRegistrationTokensRegistrationTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.runners)['registration-tokens'][':registrationTokenId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.runners['registration-tokens'][':registrationTokenId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1RunnersRegistrationTokensRegistrationTokenId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.runners)['registration-tokens'][':registrationTokenId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.runners)['registration-tokens'][':registrationTokenId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV1RunnersRegistrationTokensRegistrationTokenIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1RunnersRegistrationTokensQueryKey(
  args: InferRequestType<(typeof client.api.v1.runners)['registration-tokens']['$get']>,
) {
  return ['api', '/api/v1/runners/registration-tokens', args] as const
}

export function getApiV1RunnersRegistrationTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.runners)['registration-tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.runners)['registration-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.runners)['registration-tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RunnersRegistrationTokensQueryKey>
  >({
    queryKey: getApiV1RunnersRegistrationTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.runners['registration-tokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1RunnersRegistrationTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.runners)['registration-tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.runners)['registration-tokens']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.runners)['registration-tokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RunnersRegistrationTokensQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1RunnersRegistrationTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1RunnersRegisterMutationKey() {
  return ['api', '/api/v1/runners/register', 'POST'] as const
}

export function getPostApiV1RunnersRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.runners.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.runners.register.$post>) {
      return parseResponse(client.api.v1.runners.register.$post(args, options))
    },
  })
}

export function createPostApiV1RunnersRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.runners.register.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1RunnersRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersUnregisterMutationKey() {
  return ['api', '/api/v1/runners/unregister', 'POST'] as const
}

export function getPostApiV1RunnersUnregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.unregister.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.runners.unregister.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersUnregisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.runners.unregister.$post>) {
      return parseResponse(client.api.v1.runners.unregister.$post(args, options))
    },
  })
}

export function createPostApiV1RunnersUnregister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.runners.unregister.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.runners.unregister.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1RunnersUnregisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1RunnersRunnerIdMutationKey() {
  return ['api', '/api/v1/runners/:runnerId', 'DELETE'] as const
}

export function getDeleteApiV1RunnersRunnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.runners)[':runnerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.runners)[':runnerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RunnersRunnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.runners)[':runnerId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.runners[':runnerId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1RunnersRunnerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.runners)[':runnerId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.runners)[':runnerId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1RunnersRunnerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1RunnersQueryKey(args: InferRequestType<typeof client.api.v1.runners.$get>) {
  return ['api', '/api/v1/runners', args] as const
}

export function getApiV1RunnersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.runners.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RunnersQueryKey>
  >({
    queryKey: getApiV1RunnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.runners.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Runners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.runners.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RunnersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RunnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1RunnersJobsRequestMutationKey() {
  return ['api', '/api/v1/runners/jobs/request', 'POST'] as const
}

export function getPostApiV1RunnersJobsRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.jobs.request.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.runners.jobs.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersJobsRequestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.runners.jobs.request.$post>) {
      return parseResponse(client.api.v1.runners.jobs.request.$post(args, options))
    },
  })
}

export function createPostApiV1RunnersJobsRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.runners.jobs.request.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.runners.jobs.request.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1RunnersJobsRequestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDAcceptMutationKey() {
  return ['api', '/api/v1/runners/jobs/:jobUUID/accept', 'POST'] as const
}

export function getPostApiV1RunnersJobsJobUUIDAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersJobsJobUUIDAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['accept']['$post']>,
    ) {
      return parseResponse(client.api.v1.runners.jobs[':jobUUID'].accept.$post(args, options))
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['accept']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['accept']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1RunnersJobsJobUUIDAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDAbortMutationKey() {
  return ['api', '/api/v1/runners/jobs/:jobUUID/abort', 'POST'] as const
}

export function getPostApiV1RunnersJobsJobUUIDAbortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['abort']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['abort']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersJobsJobUUIDAbortMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['abort']['$post']>,
    ) {
      return parseResponse(client.api.v1.runners.jobs[':jobUUID'].abort.$post(args, options))
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDAbort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['abort']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['abort']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1RunnersJobsJobUUIDAbortMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDUpdateMutationKey() {
  return ['api', '/api/v1/runners/jobs/:jobUUID/update', 'POST'] as const
}

export function getPostApiV1RunnersJobsJobUUIDUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['update']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersJobsJobUUIDUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['update']['$post']>,
    ) {
      return parseResponse(client.api.v1.runners.jobs[':jobUUID'].update.$post(args, options))
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['update']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['update']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1RunnersJobsJobUUIDUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDErrorMutationKey() {
  return ['api', '/api/v1/runners/jobs/:jobUUID/error', 'POST'] as const
}

export function getPostApiV1RunnersJobsJobUUIDErrorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['error']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['error']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersJobsJobUUIDErrorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['error']['$post']>,
    ) {
      return parseResponse(client.api.v1.runners.jobs[':jobUUID'].error.$post(args, options))
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDError<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['error']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['error']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1RunnersJobsJobUUIDErrorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDSuccessMutationKey() {
  return ['api', '/api/v1/runners/jobs/:jobUUID/success', 'POST'] as const
}

export function getPostApiV1RunnersJobsJobUUIDSuccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['success']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['success']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersJobsJobUUIDSuccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['success']['$post']>,
    ) {
      return parseResponse(client.api.v1.runners.jobs[':jobUUID'].success.$post(args, options))
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDSuccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['success']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['success']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1RunnersJobsJobUUIDSuccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudioMutationKey() {
  return [
    'api',
    '/api/v1/runners/jobs/:jobUUID/files/videos/:videoIdOrUUID/max-quality/audio',
    'POST',
  ] as const
}

export function getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['max-quality']['audio']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['max-quality']['audio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['max-quality']['audio']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.runners.jobs[':jobUUID'].files.videos[':videoIdOrUUID'][
          'max-quality'
        ].audio.$post(args, options),
      )
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['max-quality']['audio']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['max-quality']['audio']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudioMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityMutationKey() {
  return [
    'api',
    '/api/v1/runners/jobs/:jobUUID/files/videos/:videoIdOrUUID/max-quality',
    'POST',
  ] as const
}

export function getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['max-quality']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['max-quality']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['max-quality']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.runners.jobs[':jobUUID'].files.videos[':videoIdOrUUID']['max-quality'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQuality<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['max-quality']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['max-quality']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQualityMutationKey() {
  return [
    'api',
    '/api/v1/runners/jobs/:jobUUID/files/videos/:videoIdOrUUID/thumbnails/max-quality',
    'POST',
  ] as const
}

export function getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQualityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['thumbnails']['max-quality']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['thumbnails']['max-quality']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQualityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['thumbnails']['max-quality']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.runners.jobs[':jobUUID'].files.videos[':videoIdOrUUID'].thumbnails[
          'max-quality'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQuality<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['thumbnails']['max-quality']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['thumbnails']['max-quality']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQualityMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQualityMutationKey() {
  return [
    'api',
    '/api/v1/runners/jobs/:jobUUID/files/videos/:videoIdOrUUID/previews/max-quality',
    'POST',
  ] as const
}

export function getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQualityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['previews']['max-quality']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['previews']['max-quality']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQualityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['previews']['max-quality']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.runners.jobs[':jobUUID'].files.videos[':videoIdOrUUID'].previews[
          'max-quality'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQuality<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['previews']['max-quality']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['previews']['max-quality']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQualityMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilenameMutationKey() {
  return [
    'api',
    '/api/v1/runners/jobs/:jobUUID/files/videos/:videoIdOrUUID/studio/task-files/:filename',
    'POST',
  ] as const
}

export function getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['studio']['task-files'][':filename']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['studio']['task-files'][':filename']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilenameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['studio']['task-files'][':filename']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.runners.jobs[':jobUUID'].files.videos[':videoIdOrUUID'].studio['task-files'][
          ':filename'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilename<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['studio']['task-files'][':filename']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.runners.jobs)[':jobUUID']['files']['videos'][':videoIdOrUUID']['studio']['task-files'][':filename']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilenameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RunnersJobsJobUUIDCancelMutationKey() {
  return ['api', '/api/v1/runners/jobs/:jobUUID/cancel', 'POST'] as const
}

export function getPostApiV1RunnersJobsJobUUIDCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['cancel']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RunnersJobsJobUUIDCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.v1.runners.jobs[':jobUUID'].cancel.$post(args, options))
    },
  })
}

export function createPostApiV1RunnersJobsJobUUIDCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['cancel']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['cancel']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1RunnersJobsJobUUIDCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1RunnersJobsJobUUIDMutationKey() {
  return ['api', '/api/v1/runners/jobs/:jobUUID', 'DELETE'] as const
}

export function getDeleteApiV1RunnersJobsJobUUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RunnersJobsJobUUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['$delete']>,
    ) {
      return parseResponse(client.api.v1.runners.jobs[':jobUUID'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1RunnersJobsJobUUID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.runners.jobs)[':jobUUID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.runners.jobs)[':jobUUID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1RunnersJobsJobUUIDMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1RunnersJobsQueryKey(
  args: InferRequestType<typeof client.api.v1.runners.jobs.$get>,
) {
  return ['api', '/api/v1/runners/jobs', args] as const
}

export function getApiV1RunnersJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.runners.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RunnersJobsQueryKey>
  >({
    queryKey: getApiV1RunnersJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.runners.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1RunnersJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.runners.jobs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.runners.jobs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RunnersJobsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RunnersJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$get']
  >,
) {
  return ['api', '/api/v1/automatic-tags/policies/accounts/:accountName/comments', args] as const
}

export function getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsQueryKey>
  >({
    queryKey: getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['automatic-tags'].policies.accounts[':accountName'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AutomaticTagsPoliciesAccountsAccountNameComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsMutationKey() {
  return ['api', '/api/v1/automatic-tags/policies/accounts/:accountName/comments', 'PUT'] as const
}

export function getPutApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1['automatic-tags'].policies.accounts[':accountName'].comments.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1AutomaticTagsPoliciesAccountsAccountNameComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['automatic-tags']['policies']['accounts'][':accountName']['comments']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AutomaticTagsAccountsAccountNameAvailableQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['automatic-tags']['accounts'][':accountName']['available']['$get']
  >,
) {
  return ['api', '/api/v1/automatic-tags/accounts/:accountName/available', args] as const
}

export function getApiV1AutomaticTagsAccountsAccountNameAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['automatic-tags']['accounts'][':accountName']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['automatic-tags']['accounts'][':accountName']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['automatic-tags']['accounts'][':accountName']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutomaticTagsAccountsAccountNameAvailableQueryKey>
  >({
    queryKey: getApiV1AutomaticTagsAccountsAccountNameAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['automatic-tags'].accounts[':accountName'].available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AutomaticTagsAccountsAccountNameAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['automatic-tags']['accounts'][':accountName']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['automatic-tags']['accounts'][':accountName']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['automatic-tags']['accounts'][':accountName']['available']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AutomaticTagsAccountsAccountNameAvailableQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AutomaticTagsAccountsAccountNameAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AutomaticTagsServerAvailableQueryKey() {
  return ['api', '/api/v1/automatic-tags/server/available'] as const
}

export function getApiV1AutomaticTagsServerAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['automatic-tags']['server']['available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['automatic-tags']['server']['available']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutomaticTagsServerAvailableQueryKey>
  >({
    queryKey: getApiV1AutomaticTagsServerAvailableQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['automatic-tags'].server.available.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AutomaticTagsServerAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['automatic-tags']['server']['available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['automatic-tags']['server']['available']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AutomaticTagsServerAvailableQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AutomaticTagsServerAvailableQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AutomaticTagsPoliciesServerVideosQueryKey() {
  return ['api', '/api/v1/automatic-tags/policies/server/videos'] as const
}

export function getApiV1AutomaticTagsPoliciesServerVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['automatic-tags']['policies']['server']['videos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['automatic-tags']['policies']['server']['videos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutomaticTagsPoliciesServerVideosQueryKey>
  >({
    queryKey: getApiV1AutomaticTagsPoliciesServerVideosQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['automatic-tags'].policies.server.videos.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AutomaticTagsPoliciesServerVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['automatic-tags']['policies']['server']['videos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['automatic-tags']['policies']['server']['videos']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AutomaticTagsPoliciesServerVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AutomaticTagsPoliciesServerVideosQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1AutomaticTagsPoliciesServerVideosMutationKey() {
  return ['api', '/api/v1/automatic-tags/policies/server/videos', 'PUT'] as const
}

export function getPutApiV1AutomaticTagsPoliciesServerVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['automatic-tags']['policies']['server']['videos']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['automatic-tags']['policies']['server']['videos']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AutomaticTagsPoliciesServerVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['automatic-tags']['policies']['server']['videos']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1['automatic-tags'].policies.server.videos.$put(args, options),
      )
    },
  })
}

export function createPutApiV1AutomaticTagsPoliciesServerVideos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['automatic-tags']['policies']['server']['videos']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['automatic-tags']['policies']['server']['videos']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1AutomaticTagsPoliciesServerVideosMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1WatchedWordsAccountsAccountNameListsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$get']
  >,
) {
  return ['api', '/api/v1/watched-words/accounts/:accountName/lists', args] as const
}

export function getApiV1WatchedWordsAccountsAccountNameListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchedWordsAccountsAccountNameListsQueryKey>
  >({
    queryKey: getApiV1WatchedWordsAccountsAccountNameListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['watched-words'].accounts[':accountName'].lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1WatchedWordsAccountsAccountNameLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1WatchedWordsAccountsAccountNameListsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1WatchedWordsAccountsAccountNameListsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1WatchedWordsAccountsAccountNameListsMutationKey() {
  return ['api', '/api/v1/watched-words/accounts/:accountName/lists', 'POST'] as const
}

export function getPostApiV1WatchedWordsAccountsAccountNameListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1WatchedWordsAccountsAccountNameListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['watched-words'].accounts[':accountName'].lists.$post(args, options),
      )
    },
  })
}

export function createPostApiV1WatchedWordsAccountsAccountNameLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1WatchedWordsAccountsAccountNameListsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1WatchedWordsAccountsAccountNameListsListIdMutationKey() {
  return ['api', '/api/v1/watched-words/accounts/:accountName/lists/:listId', 'PUT'] as const
}

export function getPutApiV1WatchedWordsAccountsAccountNameListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists'][':listId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists'][':listId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1WatchedWordsAccountsAccountNameListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists'][':listId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1['watched-words'].accounts[':accountName'].lists[':listId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiV1WatchedWordsAccountsAccountNameListsListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists'][':listId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists'][':listId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1WatchedWordsAccountsAccountNameListsListIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1WatchedWordsAccountsAccountNameListsListIdMutationKey() {
  return ['api', '/api/v1/watched-words/accounts/:accountName/lists/:listId', 'DELETE'] as const
}

export function getDeleteApiV1WatchedWordsAccountsAccountNameListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists'][':listId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists'][':listId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1WatchedWordsAccountsAccountNameListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists'][':listId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['watched-words'].accounts[':accountName'].lists[':listId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV1WatchedWordsAccountsAccountNameListsListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists'][':listId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['watched-words']['accounts'][':accountName']['lists'][':listId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV1WatchedWordsAccountsAccountNameListsListIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1WatchedWordsServerListsQueryKey() {
  return ['api', '/api/v1/watched-words/server/lists'] as const
}

export function getApiV1WatchedWordsServerListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['watched-words']['server']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['watched-words']['server']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchedWordsServerListsQueryKey>
  >({
    queryKey: getApiV1WatchedWordsServerListsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['watched-words'].server.lists.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1WatchedWordsServerLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['watched-words']['server']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['watched-words']['server']['lists']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1WatchedWordsServerListsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1WatchedWordsServerListsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1WatchedWordsServerListsMutationKey() {
  return ['api', '/api/v1/watched-words/server/lists', 'POST'] as const
}

export function getPostApiV1WatchedWordsServerListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['watched-words']['server']['lists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['watched-words']['server']['lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1WatchedWordsServerListsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['watched-words']['server']['lists']['$post']>,
    ) {
      return parseResponse(client.api.v1['watched-words'].server.lists.$post(args, options))
    },
  })
}

export function createPostApiV1WatchedWordsServerLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['watched-words']['server']['lists']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['watched-words']['server']['lists']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1WatchedWordsServerListsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1WatchedWordsServerListsListIdMutationKey() {
  return ['api', '/api/v1/watched-words/server/lists/:listId', 'PUT'] as const
}

export function getPutApiV1WatchedWordsServerListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['watched-words']['server']['lists'][':listId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['watched-words']['server']['lists'][':listId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1WatchedWordsServerListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['watched-words']['server']['lists'][':listId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1['watched-words'].server.lists[':listId'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1WatchedWordsServerListsListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['watched-words']['server']['lists'][':listId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['watched-words']['server']['lists'][':listId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1WatchedWordsServerListsListIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1WatchedWordsServerListsListIdMutationKey() {
  return ['api', '/api/v1/watched-words/server/lists/:listId', 'DELETE'] as const
}

export function getDeleteApiV1WatchedWordsServerListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['watched-words']['server']['lists'][':listId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['watched-words']['server']['lists'][':listId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1WatchedWordsServerListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['watched-words']['server']['lists'][':listId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['watched-words'].server.lists[':listId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1WatchedWordsServerListsListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['watched-words']['server']['lists'][':listId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['watched-words']['server']['lists'][':listId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1WatchedWordsServerListsListIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1WatchedWordsAccountsAccountNameSubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$get']
  >,
) {
  return ['api', '/api/v1/watched-words/accounts/:accountName/subscriptions', args] as const
}

export function getApiV1WatchedWordsAccountsAccountNameSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchedWordsAccountsAccountNameSubscriptionsQueryKey>
  >({
    queryKey: getApiV1WatchedWordsAccountsAccountNameSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['watched-words'].accounts[':accountName'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1WatchedWordsAccountsAccountNameSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1WatchedWordsAccountsAccountNameSubscriptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1WatchedWordsAccountsAccountNameSubscriptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1WatchedWordsAccountsAccountNameSubscriptionsMutationKey() {
  return ['api', '/api/v1/watched-words/accounts/:accountName/subscriptions', 'POST'] as const
}

export function getPostApiV1WatchedWordsAccountsAccountNameSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1WatchedWordsAccountsAccountNameSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['watched-words'].accounts[':accountName'].subscriptions.$post(args, options),
      )
    },
  })
}

export function createPostApiV1WatchedWordsAccountsAccountNameSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1WatchedWordsAccountsAccountNameSubscriptionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1WatchedWordsAccountsAccountNameSubscriptionsIdMutationKey() {
  return ['api', '/api/v1/watched-words/accounts/:accountName/subscriptions/:id', 'DELETE'] as const
}

export function getDeleteApiV1WatchedWordsAccountsAccountNameSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1WatchedWordsAccountsAccountNameSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['watched-words'].accounts[':accountName'].subscriptions[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV1WatchedWordsAccountsAccountNameSubscriptionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['watched-words']['accounts'][':accountName']['subscriptions'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV1WatchedWordsAccountsAccountNameSubscriptionsIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1WatchedWordsServerSubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['watched-words']['server']['subscriptions']['$get']
  >,
) {
  return ['api', '/api/v1/watched-words/server/subscriptions', args] as const
}

export function getApiV1WatchedWordsServerSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['watched-words']['server']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['watched-words']['server']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['watched-words']['server']['subscriptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchedWordsServerSubscriptionsQueryKey>
  >({
    queryKey: getApiV1WatchedWordsServerSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['watched-words'].server.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1WatchedWordsServerSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['watched-words']['server']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['watched-words']['server']['subscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['watched-words']['server']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1WatchedWordsServerSubscriptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1WatchedWordsServerSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1WatchedWordsServerSubscriptionsMutationKey() {
  return ['api', '/api/v1/watched-words/server/subscriptions', 'POST'] as const
}

export function getPostApiV1WatchedWordsServerSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['watched-words']['server']['subscriptions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['watched-words']['server']['subscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1WatchedWordsServerSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['watched-words']['server']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(client.api.v1['watched-words'].server.subscriptions.$post(args, options))
    },
  })
}

export function createPostApiV1WatchedWordsServerSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['watched-words']['server']['subscriptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['watched-words']['server']['subscriptions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1WatchedWordsServerSubscriptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1WatchedWordsServerSubscriptionsIdMutationKey() {
  return ['api', '/api/v1/watched-words/server/subscriptions/:id', 'DELETE'] as const
}

export function getDeleteApiV1WatchedWordsServerSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['watched-words']['server']['subscriptions'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['watched-words']['server']['subscriptions'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1WatchedWordsServerSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['watched-words']['server']['subscriptions'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['watched-words'].server.subscriptions[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1WatchedWordsServerSubscriptionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['watched-words']['server']['subscriptions'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['watched-words']['server']['subscriptions'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1WatchedWordsServerSubscriptionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ClientConfigUpdateLanguageMutationKey() {
  return ['api', '/api/v1/client-config/update-language', 'POST'] as const
}

export function getPostApiV1ClientConfigUpdateLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-config']['update-language']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['client-config']['update-language']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClientConfigUpdateLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['client-config']['update-language']['$post']>,
    ) {
      return parseResponse(client.api.v1['client-config']['update-language'].$post(args, options))
    },
  })
}

export function createPostApiV1ClientConfigUpdateLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1)['client-config']['update-language']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['client-config']['update-language']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ClientConfigUpdateLanguageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ClientConfigUpdateInterfaceLanguageMutationKey() {
  return ['api', '/api/v1/client-config/update-interface-language', 'POST'] as const
}

export function getPostApiV1ClientConfigUpdateInterfaceLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['client-config']['update-interface-language']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['client-config']['update-interface-language']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClientConfigUpdateInterfaceLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['client-config']['update-interface-language']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['client-config']['update-interface-language'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1ClientConfigUpdateInterfaceLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['client-config']['update-interface-language']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['client-config']['update-interface-language']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ClientConfigUpdateInterfaceLanguageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1VideoChannelsChannelHandleCollaboratorsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['$get']
  >,
) {
  return ['api', '/api/v1/video-channels/:channelHandle/collaborators', args] as const
}

export function getApiV1VideoChannelsChannelHandleCollaboratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleCollaboratorsQueryKey>
  >({
    queryKey: getApiV1VideoChannelsChannelHandleCollaboratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].collaborators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1VideoChannelsChannelHandleCollaborators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleCollaboratorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1VideoChannelsChannelHandleCollaboratorsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelsChannelHandleCollaboratorsInviteMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/collaborators/invite', 'POST'] as const
}

export function getPostApiV1VideoChannelsChannelHandleCollaboratorsInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['invite']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['invite']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsChannelHandleCollaboratorsInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['invite']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].collaborators.invite.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoChannelsChannelHandleCollaboratorsInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['invite']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators']['invite']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1VideoChannelsChannelHandleCollaboratorsInviteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAcceptMutationKey() {
  return [
    'api',
    '/api/v1/video-channels/:channelHandle/collaborators/:collaboratorId/accept',
    'POST',
  ] as const
}

export function getPostApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['accept']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['accept']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].collaborators[
          ':collaboratorId'
        ].accept.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['accept']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['accept']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAcceptMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRejectMutationKey() {
  return [
    'api',
    '/api/v1/video-channels/:channelHandle/collaborators/:collaboratorId/reject',
    'POST',
  ] as const
}

export function getPostApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['reject']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['reject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].collaborators[
          ':collaboratorId'
        ].reject.$post(args, options),
      )
    },
  })
}

export function createPostApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['reject']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['reject']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRejectMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdMutationKey() {
  return [
    'api',
    '/api/v1/video-channels/:channelHandle/collaborators/:collaboratorId',
    'DELETE',
  ] as const
}

export function getDeleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].collaborators[':collaboratorId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['collaborators'][':collaboratorId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
