import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsDomains202609QueryKey(
  args: InferRequestType<(typeof client.cms.domains)['2026-09']['$get']>,
) {
  return ['cms', '/cms/domains/2026-09', args] as const
}

export function getCmsDomains202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.domains)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsDomains202609QueryKey>
  >({
    queryKey: getCmsDomains202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.domains['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsDomains202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms.domains)['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsDomains202609QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCmsDomains202609QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCmsDomains202609DomainIdQueryKey(
  args: InferRequestType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>,
) {
  return ['cms', '/cms/domains/2026-09/:domainId', args] as const
}

export function getCmsDomains202609DomainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsDomains202609DomainIdQueryKey>
  >({
    queryKey: getCmsDomains202609DomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.domains['2026-09'][':domainId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsDomains202609DomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsDomains202609DomainIdQueryKey>
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
      ...getCmsDomains202609DomainIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
