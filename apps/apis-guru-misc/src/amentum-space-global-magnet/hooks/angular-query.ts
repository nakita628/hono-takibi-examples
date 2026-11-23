import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectMagneticField<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.magnetic_field.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMagneticFieldQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
