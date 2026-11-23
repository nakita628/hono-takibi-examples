import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKeyKey() {
  return ['{api_key}'] as const
}

export function getApiKeyBalanceTransfersQueryKey(
  args: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>,
) {
  return [':api_key', '/:api_key/balance-transfers', args] as const
}

export function getApiKeyBalanceTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiKeyBalanceTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':api_key']['balance-transfers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiKeyBalanceTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiKeyBalanceTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiKeyBalanceTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiKeyBalanceTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>,
) {
  return [':api_key', '/:api_key/credit-transfers', args] as const
}

export function getApiKeyCreditTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiKeyCreditTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':api_key']['credit-transfers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiKeyCreditTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiKeyCreditTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiKeyCreditTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiKeyCreditTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>,
) {
  return [':api_key', '/:api_key/subaccounts', args] as const
}

export function getApiKeySubaccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiKeySubaccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':api_key'].subaccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiKeySubaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiKeySubaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiKeySubaccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiKeySubaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiKeySubaccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>,
) {
  return [':api_key', '/:api_key/subaccounts/:subaccount_key', args] as const
}

export function getApiKeySubaccountsSubaccountKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiKeySubaccountsSubaccountKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':api_key'].subaccounts[':subaccount_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiKeySubaccountsSubaccountKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiKeySubaccountsSubaccountKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiKeySubaccountsSubaccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiKeySubaccountsSubaccountKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiKeySubaccountsSubaccountKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
