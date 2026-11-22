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

export function getInfo_0JsonKey() {
  return ['info.0.json'] as const
}

export function getComicIdKey() {
  return ['{comicId}'] as const
}

export function getInfo0JsonQueryKey() {
  return ['info.0.json', '/info.0.json'] as const
}

export function getInfo0JsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfo0JsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['info.0.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfo0Json<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['info.0.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['info.0.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['info.0.json']['$get']>>>
            >
          >,
          ReturnType<typeof getInfo0JsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['info.0.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfo0JsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfo0JsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['info.0.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComicIdInfo0JsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':comicId']['info.0.json']['$get']>>,
) {
  return [':comicId', '/:comicId/info.0.json', toValue(args)] as const
}

export function getComicIdInfo0JsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':comicId']['info.0.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComicIdInfo0JsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':comicId']['info.0.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComicIdInfo0Json<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':comicId']['info.0.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':comicId']['info.0.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':comicId']['info.0.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':comicId']['info.0.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getComicIdInfo0JsonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':comicId']['info.0.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComicIdInfo0JsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComicIdInfo0JsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':comicId']['info.0.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
