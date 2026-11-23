import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmObjectLibrary202609EnablementQueryKey() {
  return ['crm', '/crm/object-library/2026-09/enablement'] as const
}

export function getCrmObjectLibrary202609EnablementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm)['object-library']['2026-09']['enablement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm)['object-library']['2026-09']['enablement']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjectLibrary202609EnablementQueryKey>
  >({
    queryKey: getCrmObjectLibrary202609EnablementQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['object-library']['2026-09'].enablement.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmObjectLibrary202609Enablement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm)['object-library']['2026-09']['enablement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm)['object-library']['2026-09']['enablement']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjectLibrary202609EnablementQueryKey>
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
      ...getCrmObjectLibrary202609EnablementQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCrmObjectLibrary202609EnablementObjectTypeIdQueryKey(
  args: InferRequestType<
    (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
  >,
) {
  return ['crm', '/crm/object-library/2026-09/enablement/:objectTypeId', args] as const
}

export function getCrmObjectLibrary202609EnablementObjectTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjectLibrary202609EnablementObjectTypeIdQueryKey>
  >({
    queryKey: getCrmObjectLibrary202609EnablementObjectTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['object-library']['2026-09'].enablement[':objectTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmObjectLibrary202609EnablementObjectTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjectLibrary202609EnablementObjectTypeIdQueryKey>
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
      ...getCrmObjectLibrary202609EnablementObjectTypeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
