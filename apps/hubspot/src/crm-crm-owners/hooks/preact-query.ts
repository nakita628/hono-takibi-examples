import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmOwners202609QueryKey(
  args: InferRequestType<(typeof client.crm.owners)['2026-09']['$get']>,
) {
  return ['crm', '/crm/owners/2026-09', args] as const
}

export function getCrmOwners202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.owners)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmOwners202609QueryKey>
  >({
    queryKey: getCrmOwners202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.owners['2026-09'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCrmOwners202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.owners)['2026-09']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmOwners202609QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCrmOwners202609QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCrmOwners202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.owners)['2026-09']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmOwners202609QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCrmOwners202609QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCrmOwners202609OwnerIdQueryKey(
  args: InferRequestType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>,
) {
  return ['crm', '/crm/owners/2026-09/:ownerId', args] as const
}

export function getCrmOwners202609OwnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmOwners202609OwnerIdQueryKey>
  >({
    queryKey: getCrmOwners202609OwnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.owners['2026-09'][':ownerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmOwners202609OwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmOwners202609OwnerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmOwners202609OwnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmOwners202609OwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmOwners202609OwnerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmOwners202609OwnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
