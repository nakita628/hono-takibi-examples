import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createCrmOwners202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.owners)['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.owners)['2026-09']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCrmOwners202609QueryKey>
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
    return { ...getCrmOwners202609QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createCrmOwners202609OwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCrmOwners202609OwnerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
