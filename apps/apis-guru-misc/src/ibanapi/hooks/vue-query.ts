import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getBalanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBalanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
          >,
          ReturnType<typeof getBalanceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBalanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.balance.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValidateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.validate.$get>>,
) {
  return ['validate', '/validate', toValue(args)] as const
}

export function getValidateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.validate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.validate.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.validate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
          >,
          ReturnType<typeof getValidateQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.validate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValidateBasicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['validate-basic']['$get']>>,
) {
  return ['validate-basic', '/validate-basic', toValue(args)] as const
}

export function getValidateBasicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['validate-basic']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValidateBasicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['validate-basic'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValidateBasic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-basic']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['validate-basic']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-basic']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-basic']['$get']>>>
            >
          >,
          ReturnType<typeof getValidateBasicQueryKey>
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
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-basic']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValidateBasicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValidateBasicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['validate-basic'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
