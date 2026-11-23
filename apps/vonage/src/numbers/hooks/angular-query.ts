import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getNumberKey() {
  return ['number'] as const
}

export function getAccountNumbersQueryKey(
  args: InferRequestType<typeof client.account.numbers.$get>,
) {
  return ['account', '/account/numbers', args] as const
}

export function getAccountNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.numbers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumbersQueryKey>
  >({
    queryKey: getAccountNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccountNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.numbers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountNumbersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostNumberBuyMutationKey() {
  return ['number', '/number/buy', 'POST'] as const
}

export function getPostNumberBuyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.buy.$post>>>>>,
    TError,
    InferRequestType<typeof client.number.buy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNumberBuyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.number.buy.$post>) {
      return parseResponse(client.number.buy.$post(args, options))
    },
  })
}

export function injectPostNumberBuy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.buy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.number.buy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNumberBuyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostNumberCancelMutationKey() {
  return ['number', '/number/cancel', 'POST'] as const
}

export function getPostNumberCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.number.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNumberCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.number.cancel.$post>) {
      return parseResponse(client.number.cancel.$post(args, options))
    },
  })
}

export function injectPostNumberCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.cancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.number.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNumberCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNumberSearchQueryKey(args: InferRequestType<typeof client.number.search.$get>) {
  return ['number', '/number/search', args] as const
}

export function getNumberSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.number.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumberSearchQueryKey>
  >({
    queryKey: getNumberSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.number.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumberSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.number.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumberSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumberSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostNumberUpdateMutationKey() {
  return ['number', '/number/update', 'POST'] as const
}

export function getPostNumberUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.number.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNumberUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.number.update.$post>) {
      return parseResponse(client.number.update.$post(args, options))
    },
  })
}

export function injectPostNumberUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.update.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.number.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNumberUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
