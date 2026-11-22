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

export function getApiKeyKey() {
  return ['{api_key}'] as const
}

export function getApiKeyBalanceTransfersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>
  >,
) {
  return [':api_key', '/:api_key/balance-transfers', toValue(args)] as const
}

export function getApiKeyBalanceTransfersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeyBalanceTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':api_key']['balance-transfers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeyBalanceTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiKeyBalanceTransfersQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeyBalanceTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeyBalanceTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':api_key']['balance-transfers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiKeyBalanceTransfersMutationKey() {
  return [':api_key', '/:api_key/balance-transfers', 'POST'] as const
}

export function getPostApiKeyBalanceTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':api_key']['balance-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeyBalanceTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$post']>,
    ) {
      return parseResponse(client[':api_key']['balance-transfers'].$post(args, options))
    },
  })
}

export function usePostApiKeyBalanceTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':api_key']['balance-transfers']['$post']>,
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
  const mutationDefaults = getPostApiKeyBalanceTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getApiKeyCreditTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>>,
) {
  return [':api_key', '/:api_key/credit-transfers', toValue(args)] as const
}

export function getApiKeyCreditTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeyCreditTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':api_key']['credit-transfers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeyCreditTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiKeyCreditTransfersQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeyCreditTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeyCreditTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':api_key']['credit-transfers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiKeyCreditTransfersMutationKey() {
  return [':api_key', '/:api_key/credit-transfers', 'POST'] as const
}

export function getPostApiKeyCreditTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':api_key']['credit-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeyCreditTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$post']>,
    ) {
      return parseResponse(client[':api_key']['credit-transfers'].$post(args, options))
    },
  })
}

export function usePostApiKeyCreditTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':api_key']['credit-transfers']['$post']>,
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
  const mutationDefaults = getPostApiKeyCreditTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getApiKeySubaccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>>,
) {
  return [':api_key', '/:api_key/subaccounts', toValue(args)] as const
}

export function getApiKeySubaccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeySubaccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':api_key'].subaccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeySubaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiKeySubaccountsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeySubaccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeySubaccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':api_key'].subaccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiKeySubaccountsMutationKey() {
  return [':api_key', '/:api_key/subaccounts', 'POST'] as const
}

export function getPostApiKeySubaccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':api_key']['subaccounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeySubaccountsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':api_key']['subaccounts']['$post']>) {
      return parseResponse(client[':api_key'].subaccounts.$post(args, options))
    },
  })
}

export function usePostApiKeySubaccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':api_key']['subaccounts']['$post']>,
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
  const mutationDefaults = getPostApiKeySubaccountsMutationOptions<TError, TOnMutateResult>(
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

export function getApiKeySubaccountsSubaccountKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>
  >,
) {
  return [':api_key', '/:api_key/subaccounts/:subaccount_key', toValue(args)] as const
}

export function getApiKeySubaccountsSubaccountKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeySubaccountsSubaccountKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':api_key'].subaccounts[':subaccount_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeySubaccountsSubaccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiKeySubaccountsSubaccountKeyQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeySubaccountsSubaccountKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeySubaccountsSubaccountKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':api_key'].subaccounts[':subaccount_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiKeySubaccountsSubaccountKeyMutationKey() {
  return [':api_key', '/:api_key/subaccounts/:subaccount_key', 'PATCH'] as const
}

export function getPatchApiKeySubaccountsSubaccountKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiKeySubaccountsSubaccountKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':api_key']['subaccounts'][':subaccount_key']['$patch']
      >,
    ) {
      return parseResponse(client[':api_key'].subaccounts[':subaccount_key'].$patch(args, options))
    },
  })
}

export function usePatchApiKeySubaccountsSubaccountKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':api_key']['subaccounts'][':subaccount_key']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$patch']>,
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
  const mutationDefaults = getPatchApiKeySubaccountsSubaccountKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiKeyTransferNumberMutationKey() {
  return [':api_key', '/:api_key/transfer-number', 'POST'] as const
}

export function getPostApiKeyTransferNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['transfer-number']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':api_key']['transfer-number']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeyTransferNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':api_key']['transfer-number']['$post']>,
    ) {
      return parseResponse(client[':api_key']['transfer-number'].$post(args, options))
    },
  })
}

export function usePostApiKeyTransferNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':api_key']['transfer-number']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':api_key']['transfer-number']['$post']>,
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
  const mutationDefaults = getPostApiKeyTransferNumberMutationOptions<TError, TOnMutateResult>(
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
