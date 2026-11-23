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

export function useGetzipcodeinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getzipcodeinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getzipcodeinfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetzipcodeinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetzipcodeinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getzipcodeinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getzipcodeinfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetzipcodeinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
