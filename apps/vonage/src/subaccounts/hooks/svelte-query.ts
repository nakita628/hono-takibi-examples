import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createApiKeyBalanceTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiKeyBalanceTransfersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiKeyBalanceTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKeyBalanceTransfersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiKeyCreditTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiKeyCreditTransfersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiKeyCreditTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKeyCreditTransfersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiKeySubaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeySubaccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiKeySubaccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKeySubaccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiKeySubaccountsSubaccountKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiKeySubaccountsSubaccountKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchApiKeySubaccountsSubaccountKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiKeySubaccountsSubaccountKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiKeyTransferNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKeyTransferNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
