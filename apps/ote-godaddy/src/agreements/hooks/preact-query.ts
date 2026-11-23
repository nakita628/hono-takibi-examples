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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AgreementsQueryKey(args: InferRequestType<typeof client.v1.agreements.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/agreements', keyArgs] as const
}

export function getV1AgreementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.agreements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgreementsQueryKey>
  >({
    queryKey: getV1AgreementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agreements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Agreements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.agreements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgreementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AgreementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Agreements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.agreements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgreementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AgreementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
