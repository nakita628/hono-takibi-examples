import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createV1Agreements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.agreements.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1AgreementsQueryKey>
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
    return { ...getV1AgreementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
