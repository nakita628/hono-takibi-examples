import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useBusinessUnitsPublic202609BusinessUnitsUserUserId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBusinessUnitsPublic202609BusinessUnitsUserUserId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
