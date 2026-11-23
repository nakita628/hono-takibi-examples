import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCommerceKey() {
  return ['commerce'] as const
}

export function getCommercePaymentAccounts202609StatusQueryKey() {
  return ['commerce', '/commerce/payment-accounts/2026-09/status'] as const
}

export function getCommercePaymentAccounts202609StatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCommercePaymentAccounts202609StatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.commerce['payment-accounts']['2026-09'].status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommercePaymentAccounts202609Status<
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
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getCommercePaymentAccounts202609StatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: getCommercePaymentAccounts202609StatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.commerce['payment-accounts']['2026-09'].status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
