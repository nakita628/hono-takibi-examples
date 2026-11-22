import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKeyKey() {
  return ['{api_key}'] as const
}

export function getGetApiKeyBalanceTransfersKey(
  args: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>,
) {
  return [':api_key', '/:api_key/balance-transfers', args] as const
}

export function useGetApiKeyBalanceTransfers<TError = unknown>(
  args: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKeyBalanceTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':api_key']['balance-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeyBalanceTransfers<TError = unknown>(
  args: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKeyBalanceTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':api_key']['balance-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeyBalanceTransfersKey() {
  return [':api_key', '/:api_key/balance-transfers', 'POST'] as const
}

export function usePostApiKeyBalanceTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['balance-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':api_key']['balance-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeyBalanceTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':api_key']['balance-transfers']['$post']> },
      ) => parseResponse(client[':api_key']['balance-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeyCreditTransfersKey(
  args: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>,
) {
  return [':api_key', '/:api_key/credit-transfers', args] as const
}

export function useGetApiKeyCreditTransfers<TError = unknown>(
  args: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKeyCreditTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':api_key']['credit-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeyCreditTransfers<TError = unknown>(
  args: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKeyCreditTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':api_key']['credit-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeyCreditTransfersKey() {
  return [':api_key', '/:api_key/credit-transfers', 'POST'] as const
}

export function usePostApiKeyCreditTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['credit-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':api_key']['credit-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeyCreditTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':api_key']['credit-transfers']['$post']> },
      ) => parseResponse(client[':api_key']['credit-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeySubaccountsKey(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>,
) {
  return [':api_key', '/:api_key/subaccounts', args] as const
}

export function useGetApiKeySubaccounts<TError = unknown>(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKeySubaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':api_key'].subaccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeySubaccounts<TError = unknown>(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKeySubaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':api_key'].subaccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeySubaccountsKey() {
  return [':api_key', '/:api_key/subaccounts', 'POST'] as const
}

export function usePostApiKeySubaccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['subaccounts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':api_key']['subaccounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeySubaccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':api_key']['subaccounts']['$post']> },
      ) => parseResponse(client[':api_key'].subaccounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeySubaccountsSubaccountKeyKey(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>,
) {
  return [':api_key', '/:api_key/subaccounts/:subaccount_key', args] as const
}

export function useGetApiKeySubaccountsSubaccountKey<TError = unknown>(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKeySubaccountsSubaccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':api_key'].subaccounts[':subaccount_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeySubaccountsSubaccountKey<TError = unknown>(
  args: InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKeySubaccountsSubaccountKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':api_key'].subaccounts[':subaccount_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiKeySubaccountsSubaccountKeyKey() {
  return [':api_key', '/:api_key/subaccounts/:subaccount_key', 'PATCH'] as const
}

export function usePatchApiKeySubaccountsSubaccountKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)[':api_key']['subaccounts'][':subaccount_key']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiKeySubaccountsSubaccountKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':api_key']['subaccounts'][':subaccount_key']['$patch']
          >
        },
      ) =>
        parseResponse(client[':api_key'].subaccounts[':subaccount_key'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeyTransferNumberKey() {
  return [':api_key', '/:api_key/transfer-number', 'POST'] as const
}

export function usePostApiKeyTransferNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':api_key']['transfer-number']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':api_key']['transfer-number']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeyTransferNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':api_key']['transfer-number']['$post']> },
      ) => parseResponse(client[':api_key']['transfer-number'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
