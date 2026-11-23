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

export function getMagneticFieldKey() {
  return ['magnetic_field'] as const
}

export function getMagneticFieldQueryKey(
  args: InferRequestType<typeof client.magnetic_field.$get>,
) {
  return ['magnetic_field', '/magnetic_field', args] as const
}

export function getMagneticFieldQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.magnetic_field.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMagneticFieldQueryKey>
  >({
    queryKey: getMagneticFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.magnetic_field.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMagneticField<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.magnetic_field.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMagneticFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMagneticFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMagneticField<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.magnetic_field.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMagneticFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMagneticFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
