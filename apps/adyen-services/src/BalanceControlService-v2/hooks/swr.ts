import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBalanceOverviewKey() {
  return ['balanceOverview'] as const
}

export function getBalanceTransfersKey() {
  return ['balanceTransfers'] as const
}

export function getGetBalanceOverviewCompaniesCompanyAccountCodeBalancesKey(
  args: InferRequestType<
    (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
  >,
) {
  return [
    'balanceOverview',
    '/balanceOverview/companies/:companyAccountCode/balances',
    args,
  ] as const
}

export function useGetBalanceOverviewCompaniesCompanyAccountCodeBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
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
        ? getGetBalanceOverviewCompaniesCompanyAccountCodeBalancesKey(args)
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
                (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
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
          client.balanceOverview.companies[':companyAccountCode'].balances.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceOverviewCompaniesCompanyAccountCodeBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
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
        ? getGetBalanceOverviewCompaniesCompanyAccountCodeBalancesKey(args)
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
                (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
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
          client.balanceOverview.companies[':companyAccountCode'].balances.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBalanceOverviewMerchantsMerchantAccountCodeBalancesKey(
  args: InferRequestType<
    (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
  >,
) {
  return [
    'balanceOverview',
    '/balanceOverview/merchants/:merchantAccountCode/balances',
    args,
  ] as const
}

export function useGetBalanceOverviewMerchantsMerchantAccountCodeBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
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
        ? getGetBalanceOverviewMerchantsMerchantAccountCodeBalancesKey(args)
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
                (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
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
          client.balanceOverview.merchants[':merchantAccountCode'].balances.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceOverviewMerchantsMerchantAccountCodeBalances<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
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
        ? getGetBalanceOverviewMerchantsMerchantAccountCodeBalancesKey(args)
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
                (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
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
          client.balanceOverview.merchants[':merchantAccountCode'].balances.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBalanceTransfersKey() {
  return ['balanceTransfers', '/balanceTransfers', 'POST'] as const
}

export function usePostBalanceTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balanceTransfers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.balanceTransfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBalanceTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.balanceTransfers.$post> }) =>
        parseResponse(client.balanceTransfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
