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

export function getBalanceOverviewKey() {
  return ['balanceOverview'] as const
}

export function getBalanceTransfersKey() {
  return ['balanceTransfers'] as const
}

export function getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryKey(
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

export function getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryKey>
  >({
    queryKey: getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceOverview.companies[':companyAccountCode'].balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBalanceOverviewCompaniesCompanyAccountCodeBalances<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryKey>
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
      ...getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceOverviewCompaniesCompanyAccountCodeBalances<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryKey>
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
      ...getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryKey(
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

export function getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryKey>
  >({
    queryKey: getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceOverview.merchants[':merchantAccountCode'].balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBalanceOverviewMerchantsMerchantAccountCodeBalances<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryKey>
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
      ...getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceOverviewMerchantsMerchantAccountCodeBalances<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryKey>
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
      ...getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBalanceTransfersMutationKey() {
  return ['balanceTransfers', '/balanceTransfers', 'POST'] as const
}

export function getPostBalanceTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balanceTransfers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.balanceTransfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBalanceTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.balanceTransfers.$post>) {
      return parseResponse(client.balanceTransfers.$post(args, options))
    },
  })
}

export function usePostBalanceTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.balanceTransfers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.balanceTransfers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBalanceTransfersMutationOptions<TError, TOnMutateResult>(
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
