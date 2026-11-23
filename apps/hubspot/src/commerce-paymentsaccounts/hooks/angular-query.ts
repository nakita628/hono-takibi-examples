import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCommerceKey() {
  return ['commerce'] as const
}

export function getCommercePaymentAccounts202609StatusQueryKey() {
  return ['commerce', '/commerce/payment-accounts/2026-09/status'] as const
}

export function getCommercePaymentAccounts202609StatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.commerce)['payment-accounts']['2026-09']['status']['$get']>
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
            ReturnType<(typeof client.commerce)['payment-accounts']['2026-09']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommercePaymentAccounts202609StatusQueryKey>
  >({
    queryKey: getCommercePaymentAccounts202609StatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.commerce['payment-accounts']['2026-09'].status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCommercePaymentAccounts202609Status<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.commerce)['payment-accounts']['2026-09']['status']['$get']>
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
                  (typeof client.commerce)['payment-accounts']['2026-09']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommercePaymentAccounts202609StatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCommercePaymentAccounts202609StatusQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}
