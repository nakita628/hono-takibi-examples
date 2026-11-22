import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetzipcodeinfoKey() {
  return ['getzipcodeinfo'] as const
}

export function getGetzipcodeinfoQueryKey(
  args: InferRequestType<typeof client.getzipcodeinfo.$get>,
) {
  return ['getzipcodeinfo', '/getzipcodeinfo', args] as const
}

export function getGetzipcodeinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getzipcodeinfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getzipcodeinfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getzipcodeinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetzipcodeinfoQueryKey>
  >({
    queryKey: getGetzipcodeinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getzipcodeinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetzipcodeinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getzipcodeinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getzipcodeinfo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getzipcodeinfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetzipcodeinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetzipcodeinfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
