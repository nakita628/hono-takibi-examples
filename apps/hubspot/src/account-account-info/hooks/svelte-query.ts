import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountInfoKey() {
  return ['account-info'] as const
}

export function getAccountInfo202609ApiUsageDailyPrivateAppsQueryKey() {
  return ['account-info', '/account-info/2026-09/api-usage/daily/private-apps'] as const
}

export function getAccountInfo202609ApiUsageDailyPrivateAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['account-info']['2026-09']['api-usage']['daily']['private-apps']['$get']
          >
        >
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
            ReturnType<
              (typeof client)['account-info']['2026-09']['api-usage']['daily']['private-apps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInfo202609ApiUsageDailyPrivateAppsQueryKey>
  >({
    queryKey: getAccountInfo202609ApiUsageDailyPrivateAppsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['account-info']['2026-09']['api-usage'].daily['private-apps'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInfo202609ApiUsageDailyPrivateApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['account-info']['2026-09']['api-usage']['daily']['private-apps']['$get']
          >
        >
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
                ReturnType<
                  (typeof client)['account-info']['2026-09']['api-usage']['daily']['private-apps']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInfo202609ApiUsageDailyPrivateAppsQueryKey>
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
      ...getAccountInfo202609ApiUsageDailyPrivateAppsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountInfo202609DetailsQueryKey() {
  return ['account-info', '/account-info/2026-09/details'] as const
}

export function getAccountInfo202609DetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account-info']['2026-09']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account-info']['2026-09']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInfo202609DetailsQueryKey>
  >({
    queryKey: getAccountInfo202609DetailsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['account-info']['2026-09'].details.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInfo202609Details<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account-info']['2026-09']['details']['$get']>>
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
              Awaited<ReturnType<(typeof client)['account-info']['2026-09']['details']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInfo202609DetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountInfo202609DetailsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
