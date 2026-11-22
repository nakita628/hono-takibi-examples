import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBalanceKey() {
  return ['balance'] as const
}

export function getValidateKey() {
  return ['validate'] as const
}

export function getValidateBasicKey() {
  return ['validate-basic'] as const
}

export function getBalanceQueryKey() {
  return ['balance', '/balance'] as const
}

export function getBalanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBalanceQueryKey>
  >({
    queryKey: getBalanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.balance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBalanceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getValidateQueryKey(args: InferRequestType<typeof client.validate.$get>) {
  return ['validate', '/validate', args] as const
}

export function getValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.validate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getValidateQueryKey>
  >({
    queryKey: getValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.validate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.validate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getValidateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getValidateBasicQueryKey(
  args: InferRequestType<(typeof client)['validate-basic']['$get']>,
) {
  return ['validate-basic', '/validate-basic', args] as const
}

export function getValidateBasicQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-basic']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['validate-basic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-basic']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValidateBasicQueryKey>
  >({
    queryKey: getValidateBasicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['validate-basic'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createValidateBasic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-basic']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['validate-basic']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-basic']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getValidateBasicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getValidateBasicQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
