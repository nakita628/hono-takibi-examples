import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMostemailedKey() {
  return ['mostemailed'] as const
}

export function getMostsharedKey() {
  return ['mostshared'] as const
}

export function getMostviewedKey() {
  return ['mostviewed'] as const
}

export function getMostemailedSectionTimePeriodJsonQueryKey(
  args: InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>,
) {
  return ['mostemailed', '/mostemailed/:section/:time-period.json', args] as const
}

export function getMostemailedSectionTimePeriodJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMostemailedSectionTimePeriodJsonQueryKey>
  >({
    queryKey: getMostemailedSectionTimePeriodJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mostemailed[':section'][':time-period.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMostemailedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mostemailed)[':section'][':time-period.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMostemailedSectionTimePeriodJsonQueryKey>
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
      ...getMostemailedSectionTimePeriodJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMostsharedSectionTimePeriodJsonQueryKey(
  args: InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
) {
  return ['mostshared', '/mostshared/:section/:time-period.json', args] as const
}

export function getMostsharedSectionTimePeriodJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMostsharedSectionTimePeriodJsonQueryKey>
  >({
    queryKey: getMostsharedSectionTimePeriodJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mostshared[':section'][':time-period.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMostsharedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMostsharedSectionTimePeriodJsonQueryKey>
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
      ...getMostsharedSectionTimePeriodJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMostviewedSectionTimePeriodJsonQueryKey(
  args: InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
) {
  return ['mostviewed', '/mostviewed/:section/:time-period.json', args] as const
}

export function getMostviewedSectionTimePeriodJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMostviewedSectionTimePeriodJsonQueryKey>
  >({
    queryKey: getMostviewedSectionTimePeriodJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mostviewed[':section'][':time-period.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMostviewedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMostviewedSectionTimePeriodJsonQueryKey>
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
      ...getMostviewedSectionTimePeriodJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
