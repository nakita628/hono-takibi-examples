import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGifsKey() {
  return ['gifs'] as const
}

export function getStickersKey() {
  return ['stickers'] as const
}

export function getGifsQueryKey(args: InferRequestType<typeof client.gifs.$get>) {
  return ['gifs', '/gifs', args] as const
}

export function getGifsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gifs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGifsQueryKey>
  >({
    queryKey: getGifsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gifs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGifs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gifs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getGifsQueryKey>
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
    return { ...getGifsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGifsRandomQueryKey(args: InferRequestType<typeof client.gifs.random.$get>) {
  return ['gifs', '/gifs/random', args] as const
}

export function getGifsRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gifs.random.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGifsRandomQueryKey>
  >({
    queryKey: getGifsRandomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gifs.random.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGifsRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gifs.random.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGifsRandomQueryKey>
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
    return { ...getGifsRandomQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGifsSearchQueryKey(args: InferRequestType<typeof client.gifs.search.$get>) {
  return ['gifs', '/gifs/search', args] as const
}

export function getGifsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gifs.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGifsSearchQueryKey>
  >({
    queryKey: getGifsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gifs.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGifsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gifs.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGifsSearchQueryKey>
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
    return { ...getGifsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGifsTranslateQueryKey(
  args: InferRequestType<typeof client.gifs.translate.$get>,
) {
  return ['gifs', '/gifs/translate', args] as const
}

export function getGifsTranslateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gifs.translate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGifsTranslateQueryKey>
  >({
    queryKey: getGifsTranslateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gifs.translate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGifsTranslate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gifs.translate.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGifsTranslateQueryKey>
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
    return { ...getGifsTranslateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGifsTrendingQueryKey(args: InferRequestType<typeof client.gifs.trending.$get>) {
  return ['gifs', '/gifs/trending', args] as const
}

export function getGifsTrendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gifs.trending.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGifsTrendingQueryKey>
  >({
    queryKey: getGifsTrendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gifs.trending.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGifsTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gifs.trending.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGifsTrendingQueryKey>
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
    return { ...getGifsTrendingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGifsGifIdQueryKey(
  args: InferRequestType<(typeof client.gifs)[':gifId']['$get']>,
) {
  return ['gifs', '/gifs/:gifId', args] as const
}

export function getGifsGifIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.gifs)[':gifId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGifsGifIdQueryKey>
  >({
    queryKey: getGifsGifIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gifs[':gifId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGifsGifId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gifs)[':gifId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGifsGifIdQueryKey>
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
    return { ...getGifsGifIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStickersRandomQueryKey(
  args: InferRequestType<typeof client.stickers.random.$get>,
) {
  return ['stickers', '/stickers/random', args] as const
}

export function getStickersRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stickers.random.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStickersRandomQueryKey>
  >({
    queryKey: getStickersRandomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stickers.random.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStickersRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stickers.random.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStickersRandomQueryKey>
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
    return { ...getStickersRandomQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStickersSearchQueryKey(
  args: InferRequestType<typeof client.stickers.search.$get>,
) {
  return ['stickers', '/stickers/search', args] as const
}

export function getStickersSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stickers.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStickersSearchQueryKey>
  >({
    queryKey: getStickersSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stickers.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStickersSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stickers.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStickersSearchQueryKey>
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
    return { ...getStickersSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStickersTranslateQueryKey(
  args: InferRequestType<typeof client.stickers.translate.$get>,
) {
  return ['stickers', '/stickers/translate', args] as const
}

export function getStickersTranslateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stickers.translate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStickersTranslateQueryKey>
  >({
    queryKey: getStickersTranslateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stickers.translate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStickersTranslate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stickers.translate.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStickersTranslateQueryKey>
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
    return { ...getStickersTranslateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStickersTrendingQueryKey(
  args: InferRequestType<typeof client.stickers.trending.$get>,
) {
  return ['stickers', '/stickers/trending', args] as const
}

export function getStickersTrendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stickers.trending.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStickersTrendingQueryKey>
  >({
    queryKey: getStickersTrendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stickers.trending.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStickersTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stickers.trending.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStickersTrendingQueryKey>
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
    return { ...getStickersTrendingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
