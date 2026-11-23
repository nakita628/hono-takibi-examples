import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBusinessUnitsKey() {
  return ['business-units'] as const
}

export function getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryKey(
  args: InferRequestType<
    (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
  >,
) {
  return [
    'business-units',
    '/business-units/public/2026-09/business-units/user/:userId',
    args,
  ] as const
}

export function getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryKey>
  >({
    queryKey: getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['business-units'].public['2026-09']['business-units'].user[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBusinessUnitsPublic202609BusinessUnitsUserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryKey>
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
      ...getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
