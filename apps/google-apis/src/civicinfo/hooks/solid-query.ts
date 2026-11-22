import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCivicinfoKey() {
  return ['civicinfo'] as const
}

export function getCivicinfoV2DivisionsQueryKey(
  args: InferRequestType<typeof client.civicinfo.v2.divisions.$get>,
) {
  return ['civicinfo', '/civicinfo/v2/divisions', args] as const
}

export function getCivicinfoV2DivisionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.civicinfo.v2.divisions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCivicinfoV2DivisionsQueryKey>
  >({
    queryKey: getCivicinfoV2DivisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.civicinfo.v2.divisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCivicinfoV2Divisions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.civicinfo.v2.divisions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCivicinfoV2DivisionsQueryKey>
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
      ...getCivicinfoV2DivisionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCivicinfoV2ElectionsQueryKey(
  args: InferRequestType<typeof client.civicinfo.v2.elections.$get>,
) {
  return ['civicinfo', '/civicinfo/v2/elections', args] as const
}

export function getCivicinfoV2ElectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.civicinfo.v2.elections.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCivicinfoV2ElectionsQueryKey>
  >({
    queryKey: getCivicinfoV2ElectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.civicinfo.v2.elections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCivicinfoV2Elections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.civicinfo.v2.elections.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCivicinfoV2ElectionsQueryKey>
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
      ...getCivicinfoV2ElectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCivicinfoV2RepresentativesQueryKey(
  args: InferRequestType<typeof client.civicinfo.v2.representatives.$get>,
) {
  return ['civicinfo', '/civicinfo/v2/representatives', args] as const
}

export function getCivicinfoV2RepresentativesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.civicinfo.v2.representatives.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCivicinfoV2RepresentativesQueryKey>
  >({
    queryKey: getCivicinfoV2RepresentativesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.civicinfo.v2.representatives.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCivicinfoV2Representatives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.civicinfo.v2.representatives.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCivicinfoV2RepresentativesQueryKey>
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
      ...getCivicinfoV2RepresentativesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCivicinfoV2RepresentativesOcdIdQueryKey(
  args: InferRequestType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>,
) {
  return ['civicinfo', '/civicinfo/v2/representatives/:ocdId', args] as const
}

export function getCivicinfoV2RepresentativesOcdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCivicinfoV2RepresentativesOcdIdQueryKey>
  >({
    queryKey: getCivicinfoV2RepresentativesOcdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.civicinfo.v2.representatives[':ocdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCivicinfoV2RepresentativesOcdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCivicinfoV2RepresentativesOcdIdQueryKey>
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
      ...getCivicinfoV2RepresentativesOcdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCivicinfoV2VoterinfoQueryKey(
  args: InferRequestType<typeof client.civicinfo.v2.voterinfo.$get>,
) {
  return ['civicinfo', '/civicinfo/v2/voterinfo', args] as const
}

export function getCivicinfoV2VoterinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.civicinfo.v2.voterinfo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCivicinfoV2VoterinfoQueryKey>
  >({
    queryKey: getCivicinfoV2VoterinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.civicinfo.v2.voterinfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCivicinfoV2Voterinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.civicinfo.v2.voterinfo.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCivicinfoV2VoterinfoQueryKey>
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
      ...getCivicinfoV2VoterinfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
