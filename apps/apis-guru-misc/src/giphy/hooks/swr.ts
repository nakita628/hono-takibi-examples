import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGifsKey() {
  return ['gifs'] as const
}

export function getStickersKey() {
  return ['stickers'] as const
}

export function getGetGifsKey(args: InferRequestType<typeof client.gifs.$get>) {
  return ['gifs', '/gifs', args] as const
}

export function useGetGifs<TError = unknown>(
  args: InferRequestType<typeof client.gifs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.gifs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGifs<TError = unknown>(
  args: InferRequestType<typeof client.gifs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.gifs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetGifsRandomKey(args: InferRequestType<typeof client.gifs.random.$get>) {
  return ['gifs', '/gifs/random', args] as const
}

export function useGetGifsRandom<TError = unknown>(
  args: InferRequestType<typeof client.gifs.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifs.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGifsRandom<TError = unknown>(
  args: InferRequestType<typeof client.gifs.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifs.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGifsSearchKey(args: InferRequestType<typeof client.gifs.search.$get>) {
  return ['gifs', '/gifs/search', args] as const
}

export function useGetGifsSearch<TError = unknown>(
  args: InferRequestType<typeof client.gifs.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifs.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGifsSearch<TError = unknown>(
  args: InferRequestType<typeof client.gifs.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifs.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGifsTranslateKey(args: InferRequestType<typeof client.gifs.translate.$get>) {
  return ['gifs', '/gifs/translate', args] as const
}

export function useGetGifsTranslate<TError = unknown>(
  args: InferRequestType<typeof client.gifs.translate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsTranslateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifs.translate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGifsTranslate<TError = unknown>(
  args: InferRequestType<typeof client.gifs.translate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsTranslateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifs.translate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGifsTrendingKey(args: InferRequestType<typeof client.gifs.trending.$get>) {
  return ['gifs', '/gifs/trending', args] as const
}

export function useGetGifsTrending<TError = unknown>(
  args: InferRequestType<typeof client.gifs.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsTrendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifs.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGifsTrending<TError = unknown>(
  args: InferRequestType<typeof client.gifs.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsTrendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifs.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGifsGifIdKey(args: InferRequestType<(typeof client.gifs)[':gifId']['$get']>) {
  return ['gifs', '/gifs/:gifId', args] as const
}

export function useGetGifsGifId<TError = unknown>(
  args: InferRequestType<(typeof client.gifs)[':gifId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsGifIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifs[':gifId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGifsGifId<TError = unknown>(
  args: InferRequestType<(typeof client.gifs)[':gifId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGifsGifIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gifs[':gifId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStickersRandomKey(
  args: InferRequestType<typeof client.stickers.random.$get>,
) {
  return ['stickers', '/stickers/random', args] as const
}

export function useGetStickersRandom<TError = unknown>(
  args: InferRequestType<typeof client.stickers.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStickersRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stickers.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStickersRandom<TError = unknown>(
  args: InferRequestType<typeof client.stickers.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStickersRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stickers.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStickersSearchKey(
  args: InferRequestType<typeof client.stickers.search.$get>,
) {
  return ['stickers', '/stickers/search', args] as const
}

export function useGetStickersSearch<TError = unknown>(
  args: InferRequestType<typeof client.stickers.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStickersSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stickers.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStickersSearch<TError = unknown>(
  args: InferRequestType<typeof client.stickers.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStickersSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stickers.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStickersTranslateKey(
  args: InferRequestType<typeof client.stickers.translate.$get>,
) {
  return ['stickers', '/stickers/translate', args] as const
}

export function useGetStickersTranslate<TError = unknown>(
  args: InferRequestType<typeof client.stickers.translate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStickersTranslateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stickers.translate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStickersTranslate<TError = unknown>(
  args: InferRequestType<typeof client.stickers.translate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStickersTranslateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stickers.translate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStickersTrendingKey(
  args: InferRequestType<typeof client.stickers.trending.$get>,
) {
  return ['stickers', '/stickers/trending', args] as const
}

export function useGetStickersTrending<TError = unknown>(
  args: InferRequestType<typeof client.stickers.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStickersTrendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stickers.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStickersTrending<TError = unknown>(
  args: InferRequestType<typeof client.stickers.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStickersTrendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stickers.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
