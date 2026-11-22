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

export function getBalanceOverviewKey() {
  return ['balanceOverview'] as const
}

export function getBalanceTransfersKey() {
  return ['balanceTransfers'] as const
}

export function getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
    >
  >,
) {
  return [
    'balanceOverview',
    '/balanceOverview/companies/:companyAccountCode/balances',
    toValue(args),
  ] as const
}

export function getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceOverview.companies[':companyAccountCode'].balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceOverview.companies)[':companyAccountCode']['balances']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceOverviewCompaniesCompanyAccountCodeBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceOverview.companies[':companyAccountCode'].balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
    >
  >,
) {
  return [
    'balanceOverview',
    '/balanceOverview/merchants/:merchantAccountCode/balances',
    toValue(args),
  ] as const
}

export function getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceOverview.merchants[':merchantAccountCode'].balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceOverview.merchants)[':merchantAccountCode']['balances']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBalanceOverviewMerchantsMerchantAccountCodeBalancesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceOverview.merchants[':merchantAccountCode'].balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
