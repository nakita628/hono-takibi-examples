import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getInfo0JsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['info.0.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['info.0.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfo0JsonQueryKey>
  >({
    queryKey: getInfo0JsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['info.0.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInfo0Json<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['info.0.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['info.0.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfo0JsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfo0JsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getComicIdInfo0JsonQueryKey(
  args: InferRequestType<(typeof client)[':comicId']['info.0.json']['$get']>,
) {
  return [':comicId', '/:comicId/info.0.json', args] as const
}

export function getComicIdInfo0JsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':comicId']['info.0.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':comicId']['info.0.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getComicIdInfo0JsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':comicId']['info.0.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectComicIdInfo0Json<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':comicId']['info.0.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':comicId']['info.0.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getComicIdInfo0JsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
