import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2AccountsKey(args: InferRequestType<typeof client.v2.accounts.$get>) {
  return ['v2', '/v2/accounts', args] as const
}

export function useGetV2Accounts<TError = unknown>(
  args: InferRequestType<typeof client.v2.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Accounts<TError = unknown>(
  args: InferRequestType<typeof client.v2.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AccountsKey() {
  return ['v2', '/v2/accounts', 'POST'] as const
}

export function usePostV2Accounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.accounts.$post> }) =>
        parseResponse(client.v2.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AccountsAccountIdKey(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['$get']>,
) {
  return ['v2', '/v2/accounts/:accountId', args] as const
}

export function useGetV2AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>
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
        ? getGetV2AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>
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
        ? getGetV2AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AccountsAccountIdBalancesKey(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>,
) {
  return ['v2', '/v2/accounts/:accountId/balances', args] as const
}

export function useGetV2AccountsAccountIdBalances<TError = unknown>(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
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
        ? getGetV2AccountsAccountIdBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.accounts[':accountId'].balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AccountsAccountIdBalances<TError = unknown>(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
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
        ? getGetV2AccountsAccountIdBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.accounts[':accountId'].balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AccountsAccountIdBalancesAssetKey(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>,
) {
  return ['v2', '/v2/accounts/:accountId/balances/:asset', args] as const
}

export function useGetV2AccountsAccountIdBalancesAsset<TError = unknown>(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>
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
        ? getGetV2AccountsAccountIdBalancesAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.accounts[':accountId'].balances[':asset'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AccountsAccountIdBalancesAsset<TError = unknown>(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>
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
        ? getGetV2AccountsAccountIdBalancesAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.accounts[':accountId'].balances[':asset'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersKey(args: InferRequestType<typeof client.v2.customers.$get>) {
  return ['v2', '/v2/customers', args] as const
}

export function useGetV2Customers<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Customers<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomersKey() {
  return ['v2', '/v2/customers', 'POST'] as const
}

export function usePostV2Customers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.customers.$post> }) =>
        parseResponse(client.v2.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersRequirementsKey(
  args: InferRequestType<typeof client.v2.customers.requirements.$get>,
) {
  return ['v2', '/v2/customers/requirements', args] as const
}

export function useGetV2CustomersRequirements<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.requirements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>>
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
        ? getGetV2CustomersRequirementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.requirements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersRequirements<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.requirements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>>
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
        ? getGetV2CustomersRequirementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.requirements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.requirements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
) {
  return ['v2', '/v2/customers/:customerId', args] as const
}

export function useGetV2CustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
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
        ? getGetV2CustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
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
        ? getGetV2CustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2CustomersCustomerIdKey() {
  return ['v2', '/v2/customers/:customerId', 'PUT'] as const
}

export function usePutV2CustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers)[':customerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.customers)[':customerId']['$put']> },
      ) => parseResponse(client.v2.customers[':customerId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CustomersCustomerIdKey() {
  return ['v2', '/v2/customers/:customerId', 'DELETE'] as const
}

export function useDeleteV2CustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']> },
      ) => parseResponse(client.v2.customers[':customerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DepositDestinationsKey(
  args: InferRequestType<(typeof client.v2)['deposit-destinations']['$get']>,
) {
  return ['v2', '/v2/deposit-destinations', args] as const
}

export function useGetV2DepositDestinations<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['deposit-destinations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>
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
        ? getGetV2DepositDestinationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['deposit-destinations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DepositDestinations<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['deposit-destinations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>
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
        ? getGetV2DepositDestinationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['deposit-destinations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DepositDestinationsKey() {
  return ['v2', '/v2/deposit-destinations', 'POST'] as const
}

export function usePostV2DepositDestinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['deposit-destinations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['deposit-destinations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DepositDestinationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['deposit-destinations']['$post']> },
      ) => parseResponse(client.v2['deposit-destinations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DepositDestinationsDepositDestinationIdKey(
  args: InferRequestType<
    (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
  >,
) {
  return ['v2', '/v2/deposit-destinations/:depositDestinationId', args] as const
}

export function useGetV2DepositDestinationsDepositDestinationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
              >
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
        ? getGetV2DepositDestinationsDepositDestinationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['deposit-destinations'][':depositDestinationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DepositDestinationsDepositDestinationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
              >
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
        ? getGetV2DepositDestinationsDepositDestinationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['deposit-destinations'][':depositDestinationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2TransfersKey(args: InferRequestType<typeof client.v2.transfers.$get>) {
  return ['v2', '/v2/transfers', args] as const
}

export function useGetV2Transfers<TError = unknown>(
  args: InferRequestType<typeof client.v2.transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Transfers<TError = unknown>(
  args: InferRequestType<typeof client.v2.transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TransfersKey() {
  return ['v2', '/v2/transfers', 'POST'] as const
}

export function usePostV2Transfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.transfers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.transfers.$post> }) =>
        parseResponse(client.v2.transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TransfersTransferIdKey(
  args: InferRequestType<(typeof client.v2.transfers)[':transferId']['$get']>,
) {
  return ['v2', '/v2/transfers/:transferId', args] as const
}

export function useGetV2TransfersTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.transfers)[':transferId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>
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
        ? getGetV2TransfersTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.transfers[':transferId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TransfersTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.transfers)[':transferId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>
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
        ? getGetV2TransfersTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.transfers[':transferId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TransfersTransferIdExecuteKey() {
  return ['v2', '/v2/transfers/:transferId/execute', 'POST'] as const
}

export function usePostV2TransfersTransferIdExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TransfersTransferIdExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>
        },
      ) => parseResponse(client.v2.transfers[':transferId'].execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TransfersTransferIdTravelRuleKey() {
  return ['v2', '/v2/transfers/:transferId/travel-rule', 'POST'] as const
}

export function usePostV2TransfersTransferIdTravelRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TransfersTransferIdTravelRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>
        },
      ) =>
        parseResponse(client.v2.transfers[':transferId']['travel-rule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentSessionsKey(
  args: InferRequestType<(typeof client.v2)['payment-sessions']['$get']>,
) {
  return ['v2', '/v2/payment-sessions', args] as const
}

export function useGetV2PaymentSessions<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>>
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
        ? getGetV2PaymentSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['payment-sessions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessions<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>>
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
        ? getGetV2PaymentSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['payment-sessions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentSessionsKey() {
  return ['v2', '/v2/payment-sessions', 'POST'] as const
}

export function usePostV2PaymentSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-sessions']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['payment-sessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['payment-sessions']['$post']> },
      ) => parseResponse(client.v2['payment-sessions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentSessionsPaymentSessionIdKey(
  args: InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId', args] as const
}

export function useGetV2PaymentSessionsPaymentSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>>
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
        ? getGetV2PaymentSessionsPaymentSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['payment-sessions'][':paymentSessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessionsPaymentSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>>
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
        ? getGetV2PaymentSessionsPaymentSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['payment-sessions'][':paymentSessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentSessionsPaymentSessionIdCancelKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/cancel', 'POST'] as const
}

export function usePostV2PaymentSessionsPaymentSessionIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentSessionsPaymentSessionIdCancelKey()
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
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
  >,
) {
  return [
    'v2',
    '/v2/payment-sessions/:paymentSessionId/authorizations/wallet/options',
    args,
  ] as const
}

export function useGetV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations.wallet.options.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations.wallet.options.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsWalletKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations/wallet', 'POST'] as const
}

export function usePostV2PaymentSessionsPaymentSessionIdAuthorizationsWallet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentSessionsPaymentSessionIdAuthorizationsWalletKey()
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
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations.wallet.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsX402Key() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations/x402', 'POST'] as const
}

export function usePostV2PaymentSessionsPaymentSessionIdAuthorizationsX402<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['x402']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['x402']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentSessionsPaymentSessionIdAuthorizationsX402Key()
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
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['x402']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations.x402.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations/coinbase', 'POST'] as const
}

export function usePostV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['coinbase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['coinbase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseKey()
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
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['coinbase']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations.coinbase.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2PaymentSessionsPaymentSessionIdAuthorizationsMandateKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations/mandate', 'POST'] as const
}

export function usePostV2PaymentSessionsPaymentSessionIdAuthorizationsMandate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['mandate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['mandate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentSessionsPaymentSessionIdAuthorizationsMandateKey()
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
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['mandate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations.mandate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentSessionsPaymentSessionIdAuthorizationsKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/authorizations', args] as const
}

export function useGetV2PaymentSessionsPaymentSessionIdAuthorizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdAuthorizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessionsPaymentSessionIdAuthorizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdAuthorizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/payment-sessions/:paymentSessionId/authorizations/:authorizationId',
    args,
  ] as const
}

export function useGetV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations[
            ':authorizationId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].authorizations[
            ':authorizationId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2PaymentSessionsPaymentSessionIdCapturesKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/captures', args] as const
}

export function useGetV2PaymentSessionsPaymentSessionIdCaptures<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdCapturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].captures.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessionsPaymentSessionIdCaptures<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdCapturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].captures.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentSessionsPaymentSessionIdCapturesKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/captures', 'POST'] as const
}

export function usePostV2PaymentSessionsPaymentSessionIdCaptures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentSessionsPaymentSessionIdCapturesKey()
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
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].captures.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentSessionsPaymentSessionIdCapturesCaptureIdKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/captures/:captureId', args] as const
}

export function useGetV2PaymentSessionsPaymentSessionIdCapturesCaptureId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdCapturesCaptureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].captures[':captureId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessionsPaymentSessionIdCapturesCaptureId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdCapturesCaptureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].captures[':captureId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2PaymentSessionsPaymentSessionIdVoidsKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/voids', args] as const
}

export function useGetV2PaymentSessionsPaymentSessionIdVoids<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdVoidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].voids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessionsPaymentSessionIdVoids<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdVoidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].voids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentSessionsPaymentSessionIdVoidsKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/voids', 'POST'] as const
}

export function usePostV2PaymentSessionsPaymentSessionIdVoids<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentSessionsPaymentSessionIdVoidsKey()
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
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].voids.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentSessionsPaymentSessionIdVoidsVoidIdKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/voids/:voidId', args] as const
}

export function useGetV2PaymentSessionsPaymentSessionIdVoidsVoidId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdVoidsVoidIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].voids[':voidId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessionsPaymentSessionIdVoidsVoidId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdVoidsVoidIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].voids[':voidId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2PaymentSessionsPaymentSessionIdRefundsKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/refunds', args] as const
}

export function useGetV2PaymentSessionsPaymentSessionIdRefunds<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].refunds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessionsPaymentSessionIdRefunds<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].refunds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentSessionsPaymentSessionIdRefundsKey() {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/refunds', 'POST'] as const
}

export function usePostV2PaymentSessionsPaymentSessionIdRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentSessionsPaymentSessionIdRefundsKey()
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
            (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].refunds.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentSessionsPaymentSessionIdRefundsRefundIdKey(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
  >,
) {
  return ['v2', '/v2/payment-sessions/:paymentSessionId/refunds/:refundId', args] as const
}

export function useGetV2PaymentSessionsPaymentSessionIdRefundsRefundId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdRefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].refunds[':refundId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentSessionsPaymentSessionIdRefundsRefundId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
              >
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
        ? getGetV2PaymentSessionsPaymentSessionIdRefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-sessions'][':paymentSessionId'].refunds[':refundId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2MandatesKey(args: InferRequestType<typeof client.v2.mandates.$get>) {
  return ['v2', '/v2/mandates', args] as const
}

export function useGetV2Mandates<TError = unknown>(
  args: InferRequestType<typeof client.v2.mandates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2MandatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.mandates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Mandates<TError = unknown>(
  args: InferRequestType<typeof client.v2.mandates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2MandatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.mandates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2MandatesKey() {
  return ['v2', '/v2/mandates', 'POST'] as const
}

export function usePostV2Mandates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.mandates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.mandates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2MandatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.mandates.$post> }) =>
        parseResponse(client.v2.mandates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2MandatesMandateIdKey(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['$get']>,
) {
  return ['v2', '/v2/mandates/:mandateId', args] as const
}

export function useGetV2MandatesMandateId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>
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
        ? getGetV2MandatesMandateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.mandates[':mandateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MandatesMandateId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>
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
        ? getGetV2MandatesMandateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.mandates[':mandateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2MandatesMandateIdCancelKey() {
  return ['v2', '/v2/mandates/:mandateId/cancel', 'POST'] as const
}

export function usePostV2MandatesMandateIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2MandatesMandateIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.mandates)[':mandateId']['cancel']['$post']> },
      ) => parseResponse(client.v2.mandates[':mandateId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2MandatesMandateIdRevocationsKey(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>,
) {
  return ['v2', '/v2/mandates/:mandateId/revocations', args] as const
}

export function useGetV2MandatesMandateIdRevocations<TError = unknown>(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>>
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
        ? getGetV2MandatesMandateIdRevocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.mandates[':mandateId'].revocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MandatesMandateIdRevocations<TError = unknown>(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>>
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
        ? getGetV2MandatesMandateIdRevocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.mandates[':mandateId'].revocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MandatesMandateIdRevocationsRevocationIdKey(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/revocations/:revocationId', args] as const
}

export function useGetV2MandatesMandateIdRevocationsRevocationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
              >
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
        ? getGetV2MandatesMandateIdRevocationsRevocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.mandates[':mandateId'].revocations[':revocationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MandatesMandateIdRevocationsRevocationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
              >
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
        ? getGetV2MandatesMandateIdRevocationsRevocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.mandates[':mandateId'].revocations[':revocationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2MandatesMandateIdRevocationsWalletKey() {
  return ['v2', '/v2/mandates/:mandateId/revocations/wallet', 'POST'] as const
}

export function usePostV2MandatesMandateIdRevocationsWallet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2MandatesMandateIdRevocationsWalletKey()
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
            (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.mandates[':mandateId'].revocations.wallet.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2MandatesMandateIdRevocationsWalletOptionsKey(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/revocations/wallet/options', args] as const
}

export function useGetV2MandatesMandateIdRevocationsWalletOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
              >
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
        ? getGetV2MandatesMandateIdRevocationsWalletOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.mandates[':mandateId'].revocations.wallet.options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MandatesMandateIdRevocationsWalletOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
              >
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
        ? getGetV2MandatesMandateIdRevocationsWalletOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.mandates[':mandateId'].revocations.wallet.options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2MandatesMandateIdApprovalsKey(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>,
) {
  return ['v2', '/v2/mandates/:mandateId/approvals', args] as const
}

export function useGetV2MandatesMandateIdApprovals<TError = unknown>(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
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
        ? getGetV2MandatesMandateIdApprovalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.mandates[':mandateId'].approvals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MandatesMandateIdApprovals<TError = unknown>(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
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
        ? getGetV2MandatesMandateIdApprovalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.mandates[':mandateId'].approvals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MandatesMandateIdApprovalsApprovalIdKey(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/approvals/:approvalId', args] as const
}

export function useGetV2MandatesMandateIdApprovalsApprovalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
              >
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
        ? getGetV2MandatesMandateIdApprovalsApprovalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.mandates[':mandateId'].approvals[':approvalId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MandatesMandateIdApprovalsApprovalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
              >
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
        ? getGetV2MandatesMandateIdApprovalsApprovalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.mandates[':mandateId'].approvals[':approvalId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2MandatesMandateIdApprovalsWalletKey() {
  return ['v2', '/v2/mandates/:mandateId/approvals/wallet', 'POST'] as const
}

export function usePostV2MandatesMandateIdApprovalsWallet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2MandatesMandateIdApprovalsWalletKey()
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
            (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.mandates[':mandateId'].approvals.wallet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2MandatesMandateIdApprovalsWalletOptionsKey(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
  >,
) {
  return ['v2', '/v2/mandates/:mandateId/approvals/wallet/options', args] as const
}

export function useGetV2MandatesMandateIdApprovalsWalletOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
              >
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
        ? getGetV2MandatesMandateIdApprovalsWalletOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.mandates[':mandateId'].approvals.wallet.options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MandatesMandateIdApprovalsWalletOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
              >
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
        ? getGetV2MandatesMandateIdApprovalsWalletOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.mandates[':mandateId'].approvals.wallet.options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2TopUpLinksKey() {
  return ['v2', '/v2/top-up-links', 'POST'] as const
}

export function usePostV2TopUpLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['top-up-links']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['top-up-links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TopUpLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['top-up-links']['$post']> },
      ) => parseResponse(client.v2['top-up-links'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DisbursementsKey(
  args: InferRequestType<typeof client.v2.disbursements.$get>,
) {
  return ['v2', '/v2/disbursements', args] as const
}

export function useGetV2Disbursements<TError = unknown>(
  args: InferRequestType<typeof client.v2.disbursements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>>
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
        ? getGetV2DisbursementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.disbursements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Disbursements<TError = unknown>(
  args: InferRequestType<typeof client.v2.disbursements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>>
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
        ? getGetV2DisbursementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.disbursements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DisbursementsKey() {
  return ['v2', '/v2/disbursements', 'POST'] as const
}

export function usePostV2Disbursements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disbursements.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.disbursements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DisbursementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.disbursements.$post> }) =>
        parseResponse(client.v2.disbursements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DisbursementsDisbursementIdKey(
  args: InferRequestType<(typeof client.v2.disbursements)[':disbursementId']['$get']>,
) {
  return ['v2', '/v2/disbursements/:disbursementId', args] as const
}

export function useGetV2DisbursementsDisbursementId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.disbursements)[':disbursementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
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
        ? getGetV2DisbursementsDisbursementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.disbursements[':disbursementId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DisbursementsDisbursementId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.disbursements)[':disbursementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
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
        ? getGetV2DisbursementsDisbursementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disbursements)[':disbursementId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.disbursements[':disbursementId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EndUsersKey(
  args: InferRequestType<(typeof client.v2)['end-users']['$get']>,
) {
  return ['v2', '/v2/end-users', args] as const
}

export function useGetV2EndUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['end-users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2EndUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['end-users'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EndUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['end-users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2EndUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['end-users'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EndUsersKey() {
  return ['v2', '/v2/end-users', 'POST'] as const
}

export function usePostV2EndUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['end-users']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['end-users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EndUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['end-users']['$post']> },
      ) => parseResponse(client.v2['end-users'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EndUsersAuthValidateTokenKey() {
  return ['v2', '/v2/end-users/auth/validate-token', 'POST'] as const
}

export function usePostV2EndUsersAuthValidateToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EndUsersAuthValidateTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>
        },
      ) => parseResponse(client.v2['end-users'].auth['validate-token'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EndUsersUserIdKey(
  args: InferRequestType<(typeof client.v2)['end-users'][':userId']['$get']>,
) {
  return ['v2', '/v2/end-users/:userId', args] as const
}

export function useGetV2EndUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['end-users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>
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
        ? getGetV2EndUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['end-users'][':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EndUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['end-users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>
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
        ? getGetV2EndUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['end-users'][':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EndUsersLookupKey(
  args: InferRequestType<(typeof client.v2)['end-users']['lookup']['$get']>,
) {
  return ['v2', '/v2/end-users/lookup', args] as const
}

export function useGetV2EndUsersLookup<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['end-users']['lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>
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
        ? getGetV2EndUsersLookupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['end-users'].lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EndUsersLookup<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['end-users']['lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>
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
        ? getGetV2EndUsersLookupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['end-users']['lookup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['end-users'].lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EndUsersUserIdEvmKey() {
  return ['v2', '/v2/end-users/:userId/evm', 'POST'] as const
}

export function usePostV2EndUsersUserIdEvm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['evm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['end-users'][':userId']['evm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EndUsersUserIdEvmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['end-users'][':userId']['evm']['$post']> },
      ) => parseResponse(client.v2['end-users'][':userId'].evm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EndUsersUserIdEvmSmartAccountKey() {
  return ['v2', '/v2/end-users/:userId/evm-smart-account', 'POST'] as const
}

export function usePostV2EndUsersUserIdEvmSmartAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EndUsersUserIdEvmSmartAccountKey()
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
            (typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['end-users'][':userId']['evm-smart-account'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EndUsersUserIdSolanaKey() {
  return ['v2', '/v2/end-users/:userId/solana', 'POST'] as const
}

export function usePostV2EndUsersUserIdSolana<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['end-users'][':userId']['solana']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['end-users'][':userId']['solana']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EndUsersUserIdSolanaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['end-users'][':userId']['solana']['$post']> },
      ) => parseResponse(client.v2['end-users'][':userId'].solana.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EndUsersImportKey() {
  return ['v2', '/v2/end-users/import', 'POST'] as const
}

export function usePostV2EndUsersImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['end-users']['import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['end-users']['import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EndUsersImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['end-users']['import']['$post']> },
      ) => parseResponse(client.v2['end-users'].import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmbeddedWalletApiEvmBorrowProductsKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
  >,
) {
  return ['v2', '/v2/embedded-wallet-api/evm/borrow-products', args] as const
}

export function useGetV2EmbeddedWalletApiEvmBorrowProducts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEvmBorrowProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api'].evm['borrow-products'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmbeddedWalletApiEvmBorrowProducts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEvmBorrowProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api'].evm['borrow-products'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
  >,
) {
  return ['v2', '/v2/embedded-wallet-api/evm/borrow-products/:borrowProductId', args] as const
}

export function useGetV2EmbeddedWalletApiEvmBorrowProductsBorrowProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api'].evm['borrow-products'][':borrowProductId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmbeddedWalletApiEvmBorrowProductsBorrowProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api'].evm['borrow-products'][':borrowProductId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/evm/sign/transaction', 'POST'] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSignTransaction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['transaction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm.sign.transaction.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/evm/send/transaction', 'POST'] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSendTransaction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['send']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['send']['transaction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['send']['transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm.send.transaction.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/:address/send/:asset',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAsset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm'][':address']['send'][':asset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm'][':address']['send'][':asset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm'][':address']['send'][':asset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm[':address'].send[
            ':asset'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/evm/sign/message', 'POST'] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSignMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['message']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['message']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['message']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm.sign.message.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/evm/sign/typed-data', 'POST'] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['typed-data']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['typed-data']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['typed-data']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm.sign['typed-data'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmbeddedWalletApiEndUsersUserIdDelegationKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
  >,
) {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/delegation', args] as const
}

export function useGetV2EmbeddedWalletApiEndUsersUserIdDelegation<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEndUsersUserIdDelegationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmbeddedWalletApiEndUsersUserIdDelegation<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEndUsersUserIdDelegationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2EmbeddedWalletApiEndUsersUserIdDelegationKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/delegation', 'DELETE'] as const
}

export function useDeleteV2EmbeddedWalletApiEndUsersUserIdDelegation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmbeddedWalletApiEndUsersUserIdDelegationKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/delegation/revoke', 'POST'] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdDelegationRevoke<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['revoke']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.revoke.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
  >,
) {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation',
    args,
  ] as const
}

export function useGetV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].address[
            ':address'
          ].delegation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].address[
            ':address'
          ].delegation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].address[
            ':address'
          ].delegation.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation',
    'DELETE',
  ] as const
}

export function useDeleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].address[
            ':address'
          ].delegation.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation/revoke',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevoke<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['revoke']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].address[
            ':address'
          ].delegation.revoke.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/evm/eip7702/delegation', 'POST'] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmEip7702Delegation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['eip7702']['delegation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['eip7702']['delegation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['eip7702']['delegation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm.eip7702.delegation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
) {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/user-operations/:userOpHash',
    args,
  ] as const
}

export function useGetV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHash<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
            ':address'
          ]['user-operations'][':userOpHash'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHash<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
            ':address'
          ]['user-operations'][':userOpHash'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/send',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['send']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
            ':address'
          ].send.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsKey(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions',
    args,
  ] as const
}

export function useGetV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
            ':address'
          ]['borrow-positions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
              >
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
        ? getGetV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
            ':address'
          ]['borrow-positions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
            ':address'
          ]['borrow-positions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions/adjust',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjust<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['adjust']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['adjust']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['adjust']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
            ':address'
          ]['borrow-positions'].adjust.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions/close',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsClose<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['close']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['close']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['close']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
            ':address'
          ]['borrow-positions'].close.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageKey() {
  return ['v2', '/v2/embedded-wallet-api/end-users/:userId/solana/sign/message', 'POST'] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['message']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['message']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['message']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].solana.sign.message.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/solana/sign/transaction',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransaction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['transaction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].solana.sign.transaction.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/solana/sign/x402-payment',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402Payment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['x402-payment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['x402-payment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['x402-payment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].solana.sign[
            'x402-payment'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/solana/send/transaction',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransaction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['send']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['send']['transaction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['send']['transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].solana.send.transaction.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetKey() {
  return [
    'v2',
    '/v2/embedded-wallet-api/end-users/:userId/solana/:address/send/:asset',
    'POST',
  ] as const
}

export function usePostV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAsset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana'][':address']['send'][':asset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana'][':address']['send'][':asset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetKey()
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
            (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana'][':address']['send'][':asset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['embedded-wallet-api']['end-users'][':userId'].solana[':address'].send[
            ':asset'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EvmAccountsKey(args: InferRequestType<typeof client.v2.evm.accounts.$get>) {
  return ['v2', '/v2/evm/accounts', args] as const
}

export function useGetV2EvmAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v2.evm.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EvmAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.evm.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v2.evm.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EvmAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.evm.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EvmAccountsKey() {
  return ['v2', '/v2/evm/accounts', 'POST'] as const
}

export function usePostV2EvmAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.evm.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.evm.accounts.$post> }) =>
        parseResponse(client.v2.evm.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EvmAccountsAddressKey(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['$get']>,
) {
  return ['v2', '/v2/evm/accounts/:address', args] as const
}

export function useGetV2EvmAccountsAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>
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
        ? getGetV2EvmAccountsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.evm.accounts[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmAccountsAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>
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
        ? getGetV2EvmAccountsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.evm.accounts[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2EvmAccountsAddressKey() {
  return ['v2', '/v2/evm/accounts/:address', 'PUT'] as const
}

export function usePutV2EvmAccountsAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EvmAccountsAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.evm.accounts)[':address']['$put']> },
      ) => parseResponse(client.v2.evm.accounts[':address'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EvmAccountsByNameNameKey(
  args: InferRequestType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>,
) {
  return ['v2', '/v2/evm/accounts/by-name/:name', args] as const
}

export function useGetV2EvmAccountsByNameName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
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
        ? getGetV2EvmAccountsByNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.evm.accounts['by-name'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmAccountsByNameName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
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
        ? getGetV2EvmAccountsByNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.evm.accounts['by-name'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EvmAccountsAddressSendTransactionKey() {
  return ['v2', '/v2/evm/accounts/:address/send/transaction', 'POST'] as const
}

export function usePostV2EvmAccountsAddressSendTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['send']['transaction']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['send']['transaction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsAddressSendTransactionKey()
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
            (typeof client.v2.evm.accounts)[':address']['send']['transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm.accounts[':address'].send.transaction.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmAccountsAddressSignTransactionKey() {
  return ['v2', '/v2/evm/accounts/:address/sign/transaction', 'POST'] as const
}

export function usePostV2EvmAccountsAddressSignTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['sign']['transaction']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['transaction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsAddressSignTransactionKey()
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
            (typeof client.v2.evm.accounts)[':address']['sign']['transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm.accounts[':address'].sign.transaction.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmAccountsAddressSignKey() {
  return ['v2', '/v2/evm/accounts/:address/sign', 'POST'] as const
}

export function usePostV2EvmAccountsAddressSign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['sign']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsAddressSignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['$post']> },
      ) => parseResponse(client.v2.evm.accounts[':address'].sign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmAccountsAddressSignMessageKey() {
  return ['v2', '/v2/evm/accounts/:address/sign/message', 'POST'] as const
}

export function usePostV2EvmAccountsAddressSignMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsAddressSignMessageKey()
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
            (typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']
          >
        },
      ) => parseResponse(client.v2.evm.accounts[':address'].sign.message.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmAccountsAddressSignTypedDataKey() {
  return ['v2', '/v2/evm/accounts/:address/sign/typed-data', 'POST'] as const
}

export function usePostV2EvmAccountsAddressSignTypedData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['sign']['typed-data']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['typed-data']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsAddressSignTypedDataKey()
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
            (typeof client.v2.evm.accounts)[':address']['sign']['typed-data']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm.accounts[':address'].sign['typed-data'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmAccountsAddressEip7702DelegationKey() {
  return ['v2', '/v2/evm/accounts/:address/eip7702/delegation', 'POST'] as const
}

export function usePostV2EvmAccountsAddressEip7702Delegation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm.accounts)[':address']['eip7702']['delegation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['eip7702']['delegation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsAddressEip7702DelegationKey()
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
            (typeof client.v2.evm.accounts)[':address']['eip7702']['delegation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm.accounts[':address'].eip7702.delegation.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EvmEip7702DelegationOperationsDelegationOperationIdKey(
  args: InferRequestType<
    (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
  >,
) {
  return ['v2', '/v2/evm/eip7702/delegation-operations/:delegationOperationId', args] as const
}

export function useGetV2EvmEip7702DelegationOperationsDelegationOperationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
              >
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
        ? getGetV2EvmEip7702DelegationOperationsDelegationOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.evm.eip7702['delegation-operations'][':delegationOperationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmEip7702DelegationOperationsDelegationOperationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
              >
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
        ? getGetV2EvmEip7702DelegationOperationsDelegationOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.evm.eip7702['delegation-operations'][':delegationOperationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2EvmSmartAccountsKey(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['$get']>,
) {
  return ['v2', '/v2/evm/smart-accounts', args] as const
}

export function useGetV2EvmSmartAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>
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
        ? getGetV2EvmSmartAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.evm['smart-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmSmartAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>
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
        ? getGetV2EvmSmartAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.evm['smart-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EvmSmartAccountsKey() {
  return ['v2', '/v2/evm/smart-accounts', 'POST'] as const
}

export function usePostV2EvmSmartAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm)['smart-accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmSmartAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.evm)['smart-accounts']['$post']> },
      ) => parseResponse(client.v2.evm['smart-accounts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EvmSmartAccountsByNameNameKey(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>,
) {
  return ['v2', '/v2/evm/smart-accounts/by-name/:name', args] as const
}

export function useGetV2EvmSmartAccountsByNameName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>
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
        ? getGetV2EvmSmartAccountsByNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.evm['smart-accounts']['by-name'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmSmartAccountsByNameName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>
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
        ? getGetV2EvmSmartAccountsByNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.evm['smart-accounts']['by-name'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EvmAccountsImportKey() {
  return ['v2', '/v2/evm/accounts/import', 'POST'] as const
}

export function usePostV2EvmAccountsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.accounts.import.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.evm.accounts.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.evm.accounts.import.$post> },
      ) => parseResponse(client.v2.evm.accounts.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmAccountsAddressExportKey() {
  return ['v2', '/v2/evm/accounts/:address/export', 'POST'] as const
}

export function usePostV2EvmAccountsAddressExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm.accounts)[':address']['export']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsAddressExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.evm.accounts)[':address']['export']['$post']>
        },
      ) => parseResponse(client.v2.evm.accounts[':address'].export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmAccountsExportByNameNameKey() {
  return ['v2', '/v2/evm/accounts/export/by-name/:name', 'POST'] as const
}

export function usePostV2EvmAccountsExportByNameName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsExportByNameNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>
        },
      ) =>
        parseResponse(client.v2.evm.accounts.export['by-name'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EvmSmartAccountsAddressKey(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>,
) {
  return ['v2', '/v2/evm/smart-accounts/:address', args] as const
}

export function useGetV2EvmSmartAccountsAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
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
        ? getGetV2EvmSmartAccountsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.evm['smart-accounts'][':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmSmartAccountsAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
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
        ? getGetV2EvmSmartAccountsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.evm['smart-accounts'][':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2EvmSmartAccountsAddressKey() {
  return ['v2', '/v2/evm/smart-accounts/:address', 'PUT'] as const
}

export function usePutV2EvmSmartAccountsAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.evm)['smart-accounts'][':address']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EvmSmartAccountsAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$put']> },
      ) => parseResponse(client.v2.evm['smart-accounts'][':address'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmSmartAccountsAddressUserOperationsKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/user-operations', 'POST'] as const
}

export function usePostV2EvmSmartAccountsAddressUserOperations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmSmartAccountsAddressUserOperationsKey()
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
            (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address']['user-operations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmSmartAccountsAddressUserOperationsPrepareAndSendKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/user-operations/prepare-and-send', 'POST'] as const
}

export function usePostV2EvmSmartAccountsAddressUserOperationsPrepareAndSend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['prepare-and-send']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['prepare-and-send']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmSmartAccountsAddressUserOperationsPrepareAndSendKey()
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
            (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['prepare-and-send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address']['user-operations']['prepare-and-send'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EvmSmartAccountsAddressUserOperationsUserOpHashKey(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
) {
  return ['v2', '/v2/evm/smart-accounts/:address/user-operations/:userOpHash', args] as const
}

export function useGetV2EvmSmartAccountsAddressUserOperationsUserOpHash<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
              >
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
        ? getGetV2EvmSmartAccountsAddressUserOperationsUserOpHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address']['user-operations'][':userOpHash'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmSmartAccountsAddressUserOperationsUserOpHash<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
              >
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
        ? getGetV2EvmSmartAccountsAddressUserOperationsUserOpHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address']['user-operations'][':userOpHash'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EvmSmartAccountsAddressUserOperationsUserOpHashSendKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/user-operations/:userOpHash/send', 'POST'] as const
}

export function usePostV2EvmSmartAccountsAddressUserOperationsUserOpHashSend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['send']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmSmartAccountsAddressUserOperationsUserOpHashSendKey()
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
            (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address']['user-operations'][':userOpHash'].send.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmSmartAccountsAddressSpendPermissionsKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/spend-permissions', 'POST'] as const
}

export function usePostV2EvmSmartAccountsAddressSpendPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmSmartAccountsAddressSpendPermissionsKey()
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
            (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address']['spend-permissions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EvmSmartAccountsAddressSpendPermissionsListKey(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
  >,
) {
  return ['v2', '/v2/evm/smart-accounts/:address/spend-permissions/list', args] as const
}

export function useGetV2EvmSmartAccountsAddressSpendPermissionsList<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
              >
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
        ? getGetV2EvmSmartAccountsAddressSpendPermissionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address']['spend-permissions'].list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmSmartAccountsAddressSpendPermissionsList<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
              >
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
        ? getGetV2EvmSmartAccountsAddressSpendPermissionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address']['spend-permissions'].list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EvmSmartAccountsAddressSpendPermissionsRevokeKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/spend-permissions/revoke', 'POST'] as const
}

export function usePostV2EvmSmartAccountsAddressSpendPermissionsRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmSmartAccountsAddressSpendPermissionsRevokeKey()
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
            (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address']['spend-permissions'].revoke.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2LendPositionsKey(
  args: InferRequestType<typeof client.v2.lend.positions.$get>,
) {
  return ['v2', '/v2/lend/positions', args] as const
}

export function useGetV2LendPositions<TError = unknown>(
  args: InferRequestType<typeof client.v2.lend.positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>>
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
        ? getGetV2LendPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.lend.positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LendPositions<TError = unknown>(
  args: InferRequestType<typeof client.v2.lend.positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>>
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
        ? getGetV2LendPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.positions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.lend.positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LendVaultsKey(args: InferRequestType<typeof client.v2.lend.vaults.$get>) {
  return ['v2', '/v2/lend/vaults', args] as const
}

export function useGetV2LendVaults<TError = unknown>(
  args: InferRequestType<typeof client.v2.lend.vaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LendVaultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.lend.vaults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LendVaults<TError = unknown>(
  args: InferRequestType<typeof client.v2.lend.vaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LendVaultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.lend.vaults.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.lend.vaults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LendVaultsVaultIdKey(
  args: InferRequestType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>,
) {
  return ['v2', '/v2/lend/vaults/:vaultId', args] as const
}

export function useGetV2LendVaultsVaultId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>
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
        ? getGetV2LendVaultsVaultIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.lend.vaults[':vaultId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LendVaultsVaultId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>
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
        ? getGetV2LendVaultsVaultIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.lend.vaults[':vaultId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EvmAccountsAddressLendRedeemFeesKey() {
  return ['v2', '/v2/evm/accounts/:address/lend/redeem-fees', 'POST'] as const
}

export function usePostV2EvmAccountsAddressLendRedeemFees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['lend']['redeem-fees']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['redeem-fees']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsAddressLendRedeemFeesKey()
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
            (typeof client.v2.evm.accounts)[':address']['lend']['redeem-fees']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm.accounts[':address'].lend['redeem-fees'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmSmartAccountsAddressLendRedeemFeesKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/lend/redeem-fees', 'POST'] as const
}

export function usePostV2EvmSmartAccountsAddressLendRedeemFees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['lend']['redeem-fees']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['lend']['redeem-fees']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmSmartAccountsAddressLendRedeemFeesKey()
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
            (typeof client.v2.evm)['smart-accounts'][':address']['lend']['redeem-fees']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address'].lend['redeem-fees'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmAccountsAddressLendDepositKey() {
  return ['v2', '/v2/evm/accounts/:address/lend/deposit', 'POST'] as const
}

export function usePostV2EvmAccountsAddressLendDeposit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsAddressLendDepositKey()
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
            (typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']
          >
        },
      ) => parseResponse(client.v2.evm.accounts[':address'].lend.deposit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmSmartAccountsAddressLendDepositKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/lend/deposit', 'POST'] as const
}

export function usePostV2EvmSmartAccountsAddressLendDeposit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['lend']['deposit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['lend']['deposit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmSmartAccountsAddressLendDepositKey()
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
            (typeof client.v2.evm)['smart-accounts'][':address']['lend']['deposit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address'].lend.deposit.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmAccountsAddressLendWithdrawKey() {
  return ['v2', '/v2/evm/accounts/:address/lend/withdraw', 'POST'] as const
}

export function usePostV2EvmAccountsAddressLendWithdraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmAccountsAddressLendWithdrawKey()
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
            (typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.evm.accounts[':address'].lend.withdraw.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EvmSmartAccountsAddressLendWithdrawKey() {
  return ['v2', '/v2/evm/smart-accounts/:address/lend/withdraw', 'POST'] as const
}

export function usePostV2EvmSmartAccountsAddressLendWithdraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.evm)['smart-accounts'][':address']['lend']['withdraw']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.evm)['smart-accounts'][':address']['lend']['withdraw']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmSmartAccountsAddressLendWithdrawKey()
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
            (typeof client.v2.evm)['smart-accounts'][':address']['lend']['withdraw']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.evm['smart-accounts'][':address'].lend.withdraw.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EvmSwapsQuoteKey(
  args: InferRequestType<typeof client.v2.evm.swaps.quote.$get>,
) {
  return ['v2', '/v2/evm/swaps/quote', args] as const
}

export function useGetV2EvmSwapsQuote<TError = unknown>(
  args: InferRequestType<typeof client.v2.evm.swaps.quote.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>>
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
        ? getGetV2EvmSwapsQuoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.evm.swaps.quote.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmSwapsQuote<TError = unknown>(
  args: InferRequestType<typeof client.v2.evm.swaps.quote.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>>
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
        ? getGetV2EvmSwapsQuoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.quote.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.evm.swaps.quote.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EvmSwapsKey() {
  return ['v2', '/v2/evm/swaps', 'POST'] as const
}

export function usePostV2EvmSwaps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.swaps.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.evm.swaps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmSwapsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.evm.swaps.$post> }) =>
        parseResponse(client.v2.evm.swaps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EvmTokenBalancesNetworkAddressKey(
  args: InferRequestType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>,
) {
  return ['v2', '/v2/evm/token-balances/:network/:address', args] as const
}

export function useGetV2EvmTokenBalancesNetworkAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
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
        ? getGetV2EvmTokenBalancesNetworkAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.evm['token-balances'][':network'][':address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EvmTokenBalancesNetworkAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
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
        ? getGetV2EvmTokenBalancesNetworkAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.evm['token-balances'][':network'][':address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EvmFaucetKey() {
  return ['v2', '/v2/evm/faucet', 'POST'] as const
}

export function usePostV2EvmFaucet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.evm.faucet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.evm.faucet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EvmFaucetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.evm.faucet.$post> }) =>
        parseResponse(client.v2.evm.faucet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PolicyEnginePoliciesKey(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies']['$get']>,
) {
  return ['v2', '/v2/policy-engine/policies', args] as const
}

export function useGetV2PolicyEnginePolicies<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
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
        ? getGetV2PolicyEnginePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['policy-engine'].policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PolicyEnginePolicies<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
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
        ? getGetV2PolicyEnginePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['policy-engine'].policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PolicyEnginePoliciesKey() {
  return ['v2', '/v2/policy-engine/policies', 'POST'] as const
}

export function usePostV2PolicyEnginePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['policy-engine']['policies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PolicyEnginePoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['policy-engine']['policies']['$post']> },
      ) => parseResponse(client.v2['policy-engine'].policies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2PolicyEngineSimulateKey() {
  return ['v2', '/v2/policy-engine/simulate', 'POST'] as const
}

export function usePostV2PolicyEngineSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['policy-engine']['simulate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['policy-engine']['simulate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PolicyEngineSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['policy-engine']['simulate']['$post']> },
      ) => parseResponse(client.v2['policy-engine'].simulate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PolicyEnginePoliciesPolicyIdKey(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>,
) {
  return ['v2', '/v2/policy-engine/policies/:policyId', args] as const
}

export function useGetV2PolicyEnginePoliciesPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>
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
        ? getGetV2PolicyEnginePoliciesPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['policy-engine'].policies[':policyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PolicyEnginePoliciesPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>
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
        ? getGetV2PolicyEnginePoliciesPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['policy-engine'].policies[':policyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2PolicyEnginePoliciesPolicyIdKey() {
  return ['v2', '/v2/policy-engine/policies/:policyId', 'PUT'] as const
}

export function usePutV2PolicyEnginePoliciesPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2PolicyEnginePoliciesPolicyIdKey()
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
            (typeof client.v2)['policy-engine']['policies'][':policyId']['$put']
          >
        },
      ) => parseResponse(client.v2['policy-engine'].policies[':policyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2PolicyEnginePoliciesPolicyIdKey() {
  return ['v2', '/v2/policy-engine/policies/:policyId', 'DELETE'] as const
}

export function useDeleteV2PolicyEnginePoliciesPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2PolicyEnginePoliciesPolicyIdKey()
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
            (typeof client.v2)['policy-engine']['policies'][':policyId']['$delete']
          >
        },
      ) =>
        parseResponse(client.v2['policy-engine'].policies[':policyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2PolicyEnginePoliciesPolicyIdPauseKey() {
  return ['v2', '/v2/policy-engine/policies/:policyId/pause', 'POST'] as const
}

export function usePostV2PolicyEnginePoliciesPolicyIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['policy-engine']['policies'][':policyId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PolicyEnginePoliciesPolicyIdPauseKey()
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
            (typeof client.v2)['policy-engine']['policies'][':policyId']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['policy-engine'].policies[':policyId'].pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2PolicyEnginePoliciesPolicyIdResumeKey() {
  return ['v2', '/v2/policy-engine/policies/:policyId/resume', 'POST'] as const
}

export function usePostV2PolicyEnginePoliciesPolicyIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['policy-engine']['policies'][':policyId']['resume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['policy-engine']['policies'][':policyId']['resume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PolicyEnginePoliciesPolicyIdResumeKey()
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
            (typeof client.v2)['policy-engine']['policies'][':policyId']['resume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['policy-engine'].policies[':policyId'].resume.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2SolanaAccountsKey(
  args: InferRequestType<typeof client.v2.solana.accounts.$get>,
) {
  return ['v2', '/v2/solana/accounts', args] as const
}

export function useGetV2SolanaAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v2.solana.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>>
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
        ? getGetV2SolanaAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.solana.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SolanaAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v2.solana.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>>
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
        ? getGetV2SolanaAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.solana.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SolanaAccountsKey() {
  return ['v2', '/v2/solana/accounts', 'POST'] as const
}

export function usePostV2SolanaAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.solana.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SolanaAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.solana.accounts.$post> }) =>
        parseResponse(client.v2.solana.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SolanaAccountsAddressKey(
  args: InferRequestType<(typeof client.v2.solana.accounts)[':address']['$get']>,
) {
  return ['v2', '/v2/solana/accounts/:address', args] as const
}

export function useGetV2SolanaAccountsAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v2.solana.accounts)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
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
        ? getGetV2SolanaAccountsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.solana.accounts[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SolanaAccountsAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v2.solana.accounts)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
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
        ? getGetV2SolanaAccountsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.solana.accounts[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2SolanaAccountsAddressKey() {
  return ['v2', '/v2/solana/accounts/:address', 'PUT'] as const
}

export function usePutV2SolanaAccountsAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.solana.accounts)[':address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2SolanaAccountsAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.solana.accounts)[':address']['$put']> },
      ) => parseResponse(client.v2.solana.accounts[':address'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SolanaAccountsByNameNameKey(
  args: InferRequestType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>,
) {
  return ['v2', '/v2/solana/accounts/by-name/:name', args] as const
}

export function useGetV2SolanaAccountsByNameName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
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
        ? getGetV2SolanaAccountsByNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.solana.accounts['by-name'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SolanaAccountsByNameName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
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
        ? getGetV2SolanaAccountsByNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.solana.accounts['by-name'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SolanaAccountsImportKey() {
  return ['v2', '/v2/solana/accounts/import', 'POST'] as const
}

export function usePostV2SolanaAccountsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.accounts.import.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.solana.accounts.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SolanaAccountsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.solana.accounts.import.$post> },
      ) => parseResponse(client.v2.solana.accounts.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SolanaAccountsAddressExportKey() {
  return ['v2', '/v2/solana/accounts/:address/export', 'POST'] as const
}

export function usePostV2SolanaAccountsAddressExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SolanaAccountsAddressExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>
        },
      ) => parseResponse(client.v2.solana.accounts[':address'].export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SolanaAccountsExportByNameNameKey() {
  return ['v2', '/v2/solana/accounts/export/by-name/:name', 'POST'] as const
}

export function usePostV2SolanaAccountsExportByNameName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SolanaAccountsExportByNameNameKey()
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
            (typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.solana.accounts.export['by-name'][':name'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SolanaAccountsAddressSignTransactionKey() {
  return ['v2', '/v2/solana/accounts/:address/sign/transaction', 'POST'] as const
}

export function usePostV2SolanaAccountsAddressSignTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.solana.accounts)[':address']['sign']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.solana.accounts)[':address']['sign']['transaction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SolanaAccountsAddressSignTransactionKey()
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
            (typeof client.v2.solana.accounts)[':address']['sign']['transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.solana.accounts[':address'].sign.transaction.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SolanaAccountsAddressSignMessageKey() {
  return ['v2', '/v2/solana/accounts/:address/sign/message', 'POST'] as const
}

export function usePostV2SolanaAccountsAddressSignMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.solana.accounts)[':address']['sign']['message']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.solana.accounts)[':address']['sign']['message']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SolanaAccountsAddressSignMessageKey()
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
            (typeof client.v2.solana.accounts)[':address']['sign']['message']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.solana.accounts[':address'].sign.message.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SolanaAccountsSendTransactionKey() {
  return ['v2', '/v2/solana/accounts/send/transaction', 'POST'] as const
}

export function usePostV2SolanaAccountsSendTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.solana.accounts.send.transaction.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.solana.accounts.send.transaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SolanaAccountsSendTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.solana.accounts.send.transaction.$post> },
      ) => parseResponse(client.v2.solana.accounts.send.transaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SolanaFaucetKey() {
  return ['v2', '/v2/solana/faucet', 'POST'] as const
}

export function usePostV2SolanaFaucet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.solana.faucet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.solana.faucet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SolanaFaucetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.solana.faucet.$post> }) =>
        parseResponse(client.v2.solana.faucet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SolanaTokenBalancesNetworkAddressKey(
  args: InferRequestType<
    (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
  >,
) {
  return ['v2', '/v2/solana/token-balances/:network/:address', args] as const
}

export function useGetV2SolanaTokenBalancesNetworkAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
              >
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
        ? getGetV2SolanaTokenBalancesNetworkAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.solana['token-balances'][':network'][':address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SolanaTokenBalancesNetworkAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
              >
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
        ? getGetV2SolanaTokenBalancesNetworkAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.solana['token-balances'][':network'][':address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2DataQueryRunKey() {
  return ['v2', '/v2/data/query/run', 'POST'] as const
}

export function usePostV2DataQueryRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.run.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.data.query.run.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DataQueryRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.data.query.run.$post> }) =>
        parseResponse(client.v2.data.query.run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DataQueryGrammarKey() {
  return ['v2', '/v2/data/query/grammar'] as const
}

export function useGetV2DataQueryGrammar<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DataQueryGrammarKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.data.query.grammar.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DataQueryGrammar<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DataQueryGrammarKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.grammar.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.data.query.grammar.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DataQuerySchemaKey(
  args: InferRequestType<typeof client.v2.data.query.schema.$get>,
) {
  return ['v2', '/v2/data/query/schema', args] as const
}

export function useGetV2DataQuerySchema<TError = unknown>(
  args: InferRequestType<typeof client.v2.data.query.schema.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>
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
        ? getGetV2DataQuerySchemaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.data.query.schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DataQuerySchema<TError = unknown>(
  args: InferRequestType<typeof client.v2.data.query.schema.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>
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
        ? getGetV2DataQuerySchemaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.data.query.schema.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.data.query.schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DataEvmTokenOwnershipNetworkAddressKey(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
  >,
) {
  return ['v2', '/v2/data/evm/token-ownership/:network/:address', args] as const
}

export function useGetV2DataEvmTokenOwnershipNetworkAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
              >
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
        ? getGetV2DataEvmTokenOwnershipNetworkAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.data.evm['token-ownership'][':network'][':address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DataEvmTokenOwnershipNetworkAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
              >
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
        ? getGetV2DataEvmTokenOwnershipNetworkAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.data.evm['token-ownership'][':network'][':address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2DataEvmTokenBalancesNetworkAddressKey(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
  >,
) {
  return ['v2', '/v2/data/evm/token-balances/:network/:address', args] as const
}

export function useGetV2DataEvmTokenBalancesNetworkAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
              >
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
        ? getGetV2DataEvmTokenBalancesNetworkAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.data.evm['token-balances'][':network'][':address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DataEvmTokenBalancesNetworkAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
              >
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
        ? getGetV2DataEvmTokenBalancesNetworkAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.data.evm['token-balances'][':network'][':address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2DataWebhooksSubscriptionsKey(
  args: InferRequestType<typeof client.v2.data.webhooks.subscriptions.$get>,
) {
  return ['v2', '/v2/data/webhooks/subscriptions', args] as const
}

export function useGetV2DataWebhooksSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.v2.data.webhooks.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>
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
        ? getGetV2DataWebhooksSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.data.webhooks.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DataWebhooksSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.v2.data.webhooks.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>
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
        ? getGetV2DataWebhooksSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.data.webhooks.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DataWebhooksSubscriptionsKey() {
  return ['v2', '/v2/data/webhooks/subscriptions', 'POST'] as const
}

export function usePostV2DataWebhooksSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.data.webhooks.subscriptions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.data.webhooks.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DataWebhooksSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.data.webhooks.subscriptions.$post> },
      ) => parseResponse(client.v2.data.webhooks.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DataWebhooksSubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['v2', '/v2/data/webhooks/subscriptions/:subscriptionId', args] as const
}

export function useGetV2DataWebhooksSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
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
        ? getGetV2DataWebhooksSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.data.webhooks.subscriptions[':subscriptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DataWebhooksSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
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
        ? getGetV2DataWebhooksSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.data.webhooks.subscriptions[':subscriptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2DataWebhooksSubscriptionsSubscriptionIdKey() {
  return ['v2', '/v2/data/webhooks/subscriptions/:subscriptionId', 'PUT'] as const
}

export function usePutV2DataWebhooksSubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DataWebhooksSubscriptionsSubscriptionIdKey()
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
            (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.data.webhooks.subscriptions[':subscriptionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2DataWebhooksSubscriptionsSubscriptionIdKey() {
  return ['v2', '/v2/data/webhooks/subscriptions/:subscriptionId', 'DELETE'] as const
}

export function useDeleteV2DataWebhooksSubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DataWebhooksSubscriptionsSubscriptionIdKey()
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
            (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.data.webhooks.subscriptions[':subscriptionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DataWebhooksSubscriptionsSubscriptionIdEventsKey(
  args: InferRequestType<
    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
  >,
) {
  return ['v2', '/v2/data/webhooks/subscriptions/:subscriptionId/events', args] as const
}

export function useGetV2DataWebhooksSubscriptionsSubscriptionIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
              >
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
        ? getGetV2DataWebhooksSubscriptionsSubscriptionIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.data.webhooks.subscriptions[':subscriptionId'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DataWebhooksSubscriptionsSubscriptionIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
              >
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
        ? getGetV2DataWebhooksSubscriptionsSubscriptionIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.data.webhooks.subscriptions[':subscriptionId'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2X402VerifyKey() {
  return ['v2', '/v2/x402/verify', 'POST'] as const
}

export function usePostV2X402Verify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.verify.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.x402.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2X402VerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.x402.verify.$post> }) =>
        parseResponse(client.v2.x402.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2X402SettleKey() {
  return ['v2', '/v2/x402/settle', 'POST'] as const
}

export function usePostV2X402Settle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.settle.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.x402.settle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2X402SettleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.x402.settle.$post> }) =>
        parseResponse(client.v2.x402.settle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2X402SupportedKey() {
  return ['v2', '/v2/x402/supported'] as const
}

export function useGetV2X402Supported<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2X402SupportedKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.x402.supported.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2X402Supported<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2X402SupportedKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.supported.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.x402.supported.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2X402DiscoveryResourcesKey(
  args: InferRequestType<typeof client.v2.x402.discovery.resources.$get>,
) {
  return ['v2', '/v2/x402/discovery/resources', args] as const
}

export function useGetV2X402DiscoveryResources<TError = unknown>(
  args: InferRequestType<typeof client.v2.x402.discovery.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>>
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
        ? getGetV2X402DiscoveryResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.x402.discovery.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2X402DiscoveryResources<TError = unknown>(
  args: InferRequestType<typeof client.v2.x402.discovery.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>>
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
        ? getGetV2X402DiscoveryResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.resources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.x402.discovery.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2X402DiscoveryMerchantKey(
  args: InferRequestType<typeof client.v2.x402.discovery.merchant.$get>,
) {
  return ['v2', '/v2/x402/discovery/merchant', args] as const
}

export function useGetV2X402DiscoveryMerchant<TError = unknown>(
  args: InferRequestType<typeof client.v2.x402.discovery.merchant.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>>
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
        ? getGetV2X402DiscoveryMerchantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.x402.discovery.merchant.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2X402DiscoveryMerchant<TError = unknown>(
  args: InferRequestType<typeof client.v2.x402.discovery.merchant.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>>
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
        ? getGetV2X402DiscoveryMerchantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.merchant.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.x402.discovery.merchant.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2X402DiscoverySearchKey(
  args: InferRequestType<typeof client.v2.x402.discovery.search.$get>,
) {
  return ['v2', '/v2/x402/discovery/search', args] as const
}

export function useGetV2X402DiscoverySearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.x402.discovery.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
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
        ? getGetV2X402DiscoverySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.x402.discovery.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2X402DiscoverySearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.x402.discovery.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
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
        ? getGetV2X402DiscoverySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.x402.discovery.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2X402DiscoveryMcpKey() {
  return ['v2', '/v2/x402/discovery/mcp', 'POST'] as const
}

export function usePostV2X402DiscoveryMcp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.mcp.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.x402.discovery.mcp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2X402DiscoveryMcpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.x402.discovery.mcp.$post> },
      ) => parseResponse(client.v2.x402.discovery.mcp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2X402DiscoveryBundlesKey() {
  return ['v2', '/v2/x402/discovery/bundles'] as const
}

export function useGetV2X402DiscoveryBundles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2X402DiscoveryBundlesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.x402.discovery.bundles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2X402DiscoveryBundles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2X402DiscoveryBundlesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.discovery.bundles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.x402.discovery.bundles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2X402DiscoveryBundlesBundleSlugKey(
  args: InferRequestType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>,
) {
  return ['v2', '/v2/x402/discovery/bundles/:bundleSlug', args] as const
}

export function useGetV2X402DiscoveryBundlesBundleSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>>
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
        ? getGetV2X402DiscoveryBundlesBundleSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.x402.discovery.bundles[':bundleSlug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2X402DiscoveryBundlesBundleSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>>
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
        ? getGetV2X402DiscoveryBundlesBundleSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.x402.discovery.bundles[':bundleSlug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2X402ValidateKey() {
  return ['v2', '/v2/x402/validate', 'POST'] as const
}

export function usePostV2X402Validate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.x402.validate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.x402.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2X402ValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.x402.validate.$post> }) =>
        parseResponse(client.v2.x402.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OnrampVerificationsKey() {
  return ['v2', '/v2/onramp/verifications', 'POST'] as const
}

export function usePostV2OnrampVerifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.verifications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.onramp.verifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnrampVerificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.onramp.verifications.$post> },
      ) => parseResponse(client.v2.onramp.verifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OnrampVerificationsVerificationIdSubmitKey() {
  return ['v2', '/v2/onramp/verifications/:verificationId/submit', 'POST'] as const
}

export function usePostV2OnrampVerificationsVerificationIdSubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.onramp.verifications)[':verificationId']['submit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.onramp.verifications)[':verificationId']['submit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnrampVerificationsVerificationIdSubmitKey()
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
            (typeof client.v2.onramp.verifications)[':verificationId']['submit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.onramp.verifications[':verificationId'].submit.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2OnrampOrdersKey() {
  return ['v2', '/v2/onramp/orders', 'POST'] as const
}

export function usePostV2OnrampOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.onramp.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnrampOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.onramp.orders.$post> }) =>
        parseResponse(client.v2.onramp.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2OnrampOrdersOrderIdKey(
  args: InferRequestType<(typeof client.v2.onramp.orders)[':orderId']['$get']>,
) {
  return ['v2', '/v2/onramp/orders/:orderId', args] as const
}

export function useGetV2OnrampOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.onramp.orders)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
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
        ? getGetV2OnrampOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.onramp.orders[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OnrampOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.onramp.orders)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
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
        ? getGetV2OnrampOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.onramp.orders)[':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.onramp.orders[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2OnrampSessionsKey() {
  return ['v2', '/v2/onramp/sessions', 'POST'] as const
}

export function usePostV2OnrampSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.onramp.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnrampSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.onramp.sessions.$post> }) =>
        parseResponse(client.v2.onramp.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OnrampMobileSessionsChallengesKey() {
  return ['v2', '/v2/onramp/mobile/sessions/challenges', 'POST'] as const
}

export function usePostV2OnrampMobileSessionsChallenges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.onramp.mobile.sessions.challenges.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.onramp.mobile.sessions.challenges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnrampMobileSessionsChallengesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v2.onramp.mobile.sessions.challenges.$post> },
      ) => parseResponse(client.v2.onramp.mobile.sessions.challenges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OnrampMobileSessionsKey() {
  return ['v2', '/v2/onramp/mobile/sessions', 'POST'] as const
}

export function usePostV2OnrampMobileSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.mobile.sessions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.onramp.mobile.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnrampMobileSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.onramp.mobile.sessions.$post> },
      ) => parseResponse(client.v2.onramp.mobile.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OnrampMobileAttestationChallengesKey() {
  return ['v2', '/v2/onramp/mobile/attestation/challenges', 'POST'] as const
}

export function usePostV2OnrampMobileAttestationChallenges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.onramp.mobile.attestation.challenges.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnrampMobileAttestationChallengesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v2.onramp.mobile.attestation.challenges.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2OnrampMobileAttestationRegistrationsKey() {
  return ['v2', '/v2/onramp/mobile/attestation/registrations', 'POST'] as const
}

export function usePostV2OnrampMobileAttestationRegistrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.onramp.mobile.attestation.registrations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.onramp.mobile.attestation.registrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnrampMobileAttestationRegistrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v2.onramp.mobile.attestation.registrations.$post>
        },
      ) =>
        parseResponse(client.v2.onramp.mobile.attestation.registrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OnrampLimitsKey() {
  return ['v2', '/v2/onramp/limits', 'POST'] as const
}

export function usePostV2OnrampLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.limits.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.onramp.limits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnrampLimitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.onramp.limits.$post> }) =>
        parseResponse(client.v2.onramp.limits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OnrampLimitsUpgradeKey() {
  return ['v2', '/v2/onramp/limits/upgrade', 'POST'] as const
}

export function usePostV2OnrampLimitsUpgrade<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.onramp.limits.upgrade.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.onramp.limits.upgrade.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnrampLimitsUpgradeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.onramp.limits.upgrade.$post> },
      ) => parseResponse(client.v2.onramp.limits.upgrade.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentMethodsKey(
  args: InferRequestType<(typeof client.v2)['payment-methods']['$get']>,
) {
  return ['v2', '/v2/payment-methods', args] as const
}

export function useGetV2PaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>>
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
        ? getGetV2PaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['payment-methods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>>
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
        ? getGetV2PaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-methods']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['payment-methods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PaymentMethodsPaymentMethodIdKey(
  args: InferRequestType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>,
) {
  return ['v2', '/v2/payment-methods/:paymentMethodId', args] as const
}

export function useGetV2PaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>>
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
        ? getGetV2PaymentMethodsPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['payment-methods'][':paymentMethodId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>>
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
        ? getGetV2PaymentMethodsPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['payment-methods'][':paymentMethodId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
