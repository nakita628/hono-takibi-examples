import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCriticsKey() {
  return ['critics'] as const
}

export function getReviewsKey() {
  return ['reviews'] as const
}

export function getCriticsResourceTypeJsonQueryKey(
  args: InferRequestType<(typeof client.critics)[':resource-type.json']['$get']>,
) {
  return ['critics', '/critics/:resource-type.json', args] as const
}

export function getCriticsResourceTypeJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.critics)[':resource-type.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.critics)[':resource-type.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.critics)[':resource-type.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCriticsResourceTypeJsonQueryKey>
  >({
    queryKey: getCriticsResourceTypeJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.critics[':resource-type.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCriticsResourceTypeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.critics)[':resource-type.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.critics)[':resource-type.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.critics)[':resource-type.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCriticsResourceTypeJsonQueryKey>
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
      ...getCriticsResourceTypeJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReviewsSearchJsonQueryKey(
  args: InferRequestType<(typeof client.reviews)['search.json']['$get']>,
) {
  return ['reviews', '/reviews/search.json', args] as const
}

export function getReviewsSearchJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)['search.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reviews)['search.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)['search.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsSearchJsonQueryKey>
  >({
    queryKey: getReviewsSearchJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reviews['search.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReviewsSearchJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)['search.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reviews)['search.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reviews)['search.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsSearchJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewsSearchJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReviewsResourceTypeJsonQueryKey(
  args: InferRequestType<(typeof client.reviews)[':resource-type.json']['$get']>,
) {
  return ['reviews', '/reviews/:resource-type.json', args] as const
}

export function getReviewsResourceTypeJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reviews)[':resource-type.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reviews)[':resource-type.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reviews)[':resource-type.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsResourceTypeJsonQueryKey>
  >({
    queryKey: getReviewsResourceTypeJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reviews[':resource-type.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReviewsResourceTypeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reviews)[':resource-type.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reviews)[':resource-type.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reviews)[':resource-type.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsResourceTypeJsonQueryKey>
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
      ...getReviewsResourceTypeJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
