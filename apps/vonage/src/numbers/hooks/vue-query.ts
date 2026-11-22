import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.numbers.$get>>,
) {
  return ['account', '/account/numbers', toValue(args)] as const
}

export function getAccountNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.numbers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.numbers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>
            >
          >,
          ReturnType<typeof getAccountNumbersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNumberBuy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.buy.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.number.buy.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNumberBuyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostNumberCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.cancel.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.number.cancel.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNumberCancelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNumberSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.number.search.$get>>,
) {
  return ['number', '/number/search', toValue(args)] as const
}

export function getNumberSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.number.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumberSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.number.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumberSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.number.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
          >,
          ReturnType<typeof getNumberSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumberSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumberSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.number.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNumberUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.update.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.number.update.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNumberUpdateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
