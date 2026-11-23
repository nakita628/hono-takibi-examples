import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSimilarityKey() {
  return ['similarity'] as const
}

export function getSongKey() {
  return ['song'] as const
}

export function getPostSimilarityByContentKey() {
  return ['similarity', '/similarity/by_content', 'POST'] as const
}

export function usePostSimilarityByContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_content.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.similarity.by_content.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimilarityByContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.similarity.by_content.$post> },
      ) => parseResponse(client.similarity.by_content.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSimilarityBySongKey(
  args: InferRequestType<typeof client.similarity.by_song.$get>,
) {
  return ['similarity', '/similarity/by_song', args] as const
}

export function useGetSimilarityBySong<TError = unknown>(
  args: InferRequestType<typeof client.similarity.by_song.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimilarityBySongKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.similarity.by_song.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimilarityBySong<TError = unknown>(
  args: InferRequestType<typeof client.similarity.by_song.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSimilarityBySongKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarity.by_song.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.similarity.by_song.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSongSearchKey(args: InferRequestType<typeof client.song.search.$get>) {
  return ['song', '/song/search', args] as const
}

export function useGetSongSearch<TError = unknown>(
  args: InferRequestType<typeof client.song.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSongSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.song.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSongSearch<TError = unknown>(
  args: InferRequestType<typeof client.song.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSongSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.song.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.song.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
