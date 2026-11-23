import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ParentChannelsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['channels']['$get']>,
) {
  return ['v1', '/v1/:parent/channels', args] as const
}

export function getV1ParentChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['channels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['channels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentChannelsQueryKey>
  >({
    queryKey: getV1ParentChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['channels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['channels']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentChannelsQueryKey>
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
    return { ...getV1ParentChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ParentPlatformsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['platforms']['$get']>,
) {
  return ['v1', '/v1/:parent/platforms', args] as const
}

export function getV1ParentPlatformsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['platforms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['platforms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['platforms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentPlatformsQueryKey>
  >({
    queryKey: getV1ParentPlatformsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].platforms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentPlatforms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['platforms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['platforms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['platforms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentPlatformsQueryKey>
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
    return { ...getV1ParentPlatformsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ParentReleasesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['releases']['$get']>,
) {
  return ['v1', '/v1/:parent/releases', args] as const
}

export function getV1ParentReleasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['releases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['releases']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentReleasesQueryKey>
  >({
    queryKey: getV1ParentReleasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].releases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentReleases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['releases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['releases']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['releases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentReleasesQueryKey>
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
    return { ...getV1ParentReleasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ParentVersionsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>,
) {
  return ['v1', '/v1/:parent/versions', args] as const
}

export function getV1ParentVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentVersionsQueryKey>
  >({
    queryKey: getV1ParentVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentVersionsQueryKey>
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
    return { ...getV1ParentVersionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
