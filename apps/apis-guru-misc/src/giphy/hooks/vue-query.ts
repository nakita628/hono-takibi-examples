import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGifsKey() {
  return ['gifs'] as const
}

export function getStickersKey() {
  return ['stickers'] as const
}

export function getGifsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.$get>>) {
  return ['gifs', '/gifs', toValue(args)] as const
}

export function getGifsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGifsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gifs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGifs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
          ReturnType<typeof getGifsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGifsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGifsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gifs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGifsRandomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.random.$get>>,
) {
  return ['gifs', '/gifs/random', toValue(args)] as const
}

export function getGifsRandomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.random.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGifsRandomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gifs.random.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGifsRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.random.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>
          >,
          ReturnType<typeof getGifsRandomQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.random.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGifsRandomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGifsRandomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gifs.random.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGifsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.search.$get>>,
) {
  return ['gifs', '/gifs/search', toValue(args)] as const
}

export function getGifsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGifsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gifs.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGifsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>
          >,
          ReturnType<typeof getGifsSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGifsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGifsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gifs.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGifsTranslateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.translate.$get>>,
) {
  return ['gifs', '/gifs/translate', toValue(args)] as const
}

export function getGifsTranslateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.translate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGifsTranslateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gifs.translate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGifsTranslate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.translate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
          >,
          ReturnType<typeof getGifsTranslateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.translate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGifsTranslateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGifsTranslateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gifs.translate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGifsTrendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.trending.$get>>,
) {
  return ['gifs', '/gifs/trending', toValue(args)] as const
}

export function getGifsTrendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.trending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGifsTrendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gifs.trending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGifsTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gifs.trending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
          >,
          ReturnType<typeof getGifsTrendingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gifs.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGifsTrendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGifsTrendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gifs.trending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGifsGifIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gifs)[':gifId']['$get']>>,
) {
  return ['gifs', '/gifs/:gifId', toValue(args)] as const
}

export function getGifsGifIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gifs)[':gifId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGifsGifIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gifs[':gifId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGifsGifId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gifs)[':gifId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>
            >
          >,
          ReturnType<typeof getGifsGifIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.gifs)[':gifId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGifsGifIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGifsGifIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gifs[':gifId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStickersRandomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.random.$get>>,
) {
  return ['stickers', '/stickers/random', toValue(args)] as const
}

export function getStickersRandomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.random.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStickersRandomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stickers.random.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStickersRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.random.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>
            >
          >,
          ReturnType<typeof getStickersRandomQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStickersRandomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStickersRandomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stickers.random.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStickersSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.search.$get>>,
) {
  return ['stickers', '/stickers/search', toValue(args)] as const
}

export function getStickersSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStickersSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stickers.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStickersSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>
            >
          >,
          ReturnType<typeof getStickersSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStickersSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStickersSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stickers.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStickersTranslateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.translate.$get>>,
) {
  return ['stickers', '/stickers/translate', toValue(args)] as const
}

export function getStickersTranslateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.translate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStickersTranslateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stickers.translate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStickersTranslate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.translate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>
            >
          >,
          ReturnType<typeof getStickersTranslateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.translate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStickersTranslateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStickersTranslateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stickers.translate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStickersTrendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.trending.$get>>,
) {
  return ['stickers', '/stickers/trending', toValue(args)] as const
}

export function getStickersTrendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.trending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStickersTrendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stickers.trending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStickersTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stickers.trending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>
            >
          >,
          ReturnType<typeof getStickersTrendingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stickers.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStickersTrendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStickersTrendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stickers.trending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
