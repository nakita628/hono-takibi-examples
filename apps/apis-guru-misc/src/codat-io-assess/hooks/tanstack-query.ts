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

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getDataKey() {
  return ['data'] as const
}

export function getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/reports/enhancedBalanceSheet/accounts', args] as const
}

export function getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].reports.enhancedBalanceSheet.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdReportsEnhancedBalanceSheetAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryKey>
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
      ...getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdReportsEnhancedBalanceSheetAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryKey>
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
      ...getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/reports/enhancedCashFlow/transactions', args] as const
}

export function getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].reports.enhancedCashFlow.transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdReportsEnhancedCashFlowTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryKey>
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
      ...getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdReportsEnhancedCashFlowTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryKey>
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
      ...getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdReportsEnhancedInvoicesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/reports/enhancedInvoices', args] as const
}

export function getCompaniesCompanyIdReportsEnhancedInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsEnhancedInvoicesQueryKey>
  >({
    queryKey: getCompaniesCompanyIdReportsEnhancedInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].reports.enhancedInvoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdReportsEnhancedInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdReportsEnhancedInvoicesQueryKey>
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
      ...getCompaniesCompanyIdReportsEnhancedInvoicesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdReportsEnhancedInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdReportsEnhancedInvoicesQueryKey>
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
      ...getCompaniesCompanyIdReportsEnhancedInvoicesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/reports/enhancedProfitAndLoss/accounts',
    args,
  ] as const
}

export function getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].reports.enhancedProfitAndLoss.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdReportsEnhancedProfitAndLossAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryKey>
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
      ...getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdReportsEnhancedProfitAndLossAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryKey>
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
      ...getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataAssessAccountsCategoriesQueryKey() {
  return ['data', '/data/assess/accounts/categories'] as const
}

export function getDataAssessAccountsCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataAssessAccountsCategoriesQueryKey>
  >({
    queryKey: getDataAssessAccountsCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.data.assess.accounts.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataAssessAccountsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataAssessAccountsCategoriesQueryKey>
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
      ...getDataAssessAccountsCategoriesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataAssessAccountsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataAssessAccountsCategoriesQueryKey>
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
      ...getDataAssessAccountsCategoriesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/assess/dataTypes/:dataType/dataIntegrity/details',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryKey>
  >({
    queryKey: getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].assess.dataTypes[
          ':dataType'
        ].dataIntegrity.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryKey
        >
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
      ...getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryKey
        >
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
      ...getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/assess/dataTypes/:dataType/dataIntegrity/status',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryKey>
  >({
    queryKey: getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].assess.dataTypes[':dataType'].dataIntegrity.status.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryKey
        >
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
      ...getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryKey
        >
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
      ...getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/assess/dataTypes/:dataType/dataIntegrity/summaries',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryKey
    >
  >({
    queryKey: getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].assess.dataTypes[
          ':dataType'
        ].dataIntegrity.summaries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryKey
        >
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
      ...getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryKey
        >
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
      ...getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdAssessExcelQueryKey(
  args: InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>,
) {
  return ['data', '/data/companies/:companyId/assess/excel', args] as const
}

export function getDataCompaniesCompanyIdAssessExcelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataCompaniesCompanyIdAssessExcelQueryKey>
  >({
    queryKey: getDataCompaniesCompanyIdAssessExcelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].assess.excel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdAssessExcel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataCompaniesCompanyIdAssessExcelQueryKey>
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
      ...getDataCompaniesCompanyIdAssessExcelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdAssessExcel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataCompaniesCompanyIdAssessExcelQueryKey>
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
      ...getDataCompaniesCompanyIdAssessExcelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDataCompaniesCompanyIdAssessExcelMutationKey() {
  return ['data', '/data/companies/:companyId/assess/excel', 'POST'] as const
}

export function getPostDataCompaniesCompanyIdAssessExcelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataCompaniesCompanyIdAssessExcelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.data.companies)[':companyId']['assess']['excel']['$post']
      >,
    ) {
      return parseResponse(client.data.companies[':companyId'].assess.excel.$post(args, options))
    },
  })
}

export function usePostDataCompaniesCompanyIdAssessExcel<
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
                ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataCompaniesCompanyIdAssessExcelMutationOptions<
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

export function getDataCompaniesCompanyIdAssessExcelDownloadQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
  >,
) {
  return ['data', '/data/companies/:companyId/assess/excel/download', args] as const
}

export function getDataCompaniesCompanyIdAssessExcelDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataCompaniesCompanyIdAssessExcelDownloadQueryKey>
  >({
    queryKey: getDataCompaniesCompanyIdAssessExcelDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].assess.excel.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdAssessExcelDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataCompaniesCompanyIdAssessExcelDownloadQueryKey>
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
      ...getDataCompaniesCompanyIdAssessExcelDownloadQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdAssessExcelDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataCompaniesCompanyIdAssessExcelDownloadQueryKey>
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
      ...getDataCompaniesCompanyIdAssessExcelDownloadQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDataCompaniesCompanyIdAssessExcelDownloadMutationKey() {
  return ['data', '/data/companies/:companyId/assess/excel/download', 'POST'] as const
}

export function getPostDataCompaniesCompanyIdAssessExcelDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDataCompaniesCompanyIdAssessExcelDownloadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$post']
      >,
    ) {
      return parseResponse(
        client.data.companies[':companyId'].assess.excel.download.$post(args, options),
      )
    },
  })
}

export function usePostDataCompaniesCompanyIdAssessExcelDownload<
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
                ReturnType<
                  (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataCompaniesCompanyIdAssessExcelDownloadMutationOptions<
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

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/accountingMetrics/marketing',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.accountingMetrics.marketing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/accounts/categories',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.accounts.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesMutationKey() {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/accounts/categories',
    'PATCH',
  ] as const
}

export function getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$patch']
      >,
    ) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.accounts.categories.$patch(args, options),
      )
    },
  })
}

export function usePatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories<
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
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesMutationOptions<
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

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/accounts/:accountId/categories',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[':connectionId'].assess.accounts[
          ':accountId'
        ].categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesMutationKey() {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/accounts/:accountId/categories',
    'PATCH',
  ] as const
}

export function getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$patch']
      >,
    ) {
      return parseResponse(
        client.data.companies[':companyId'].connections[':connectionId'].assess.accounts[
          ':accountId'
        ].categories.$patch(args, options),
      )
    },
  })
}

export function usePatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories<
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
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesMutationOptions<
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

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/customerRetention',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.commerceMetrics.customerRetention.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/lifetimeValue',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.commerceMetrics.lifetimeValue.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/orders',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.commerceMetrics.orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/refunds',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.commerceMetrics.refunds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/revenue',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.commerceMetrics.revenue.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/enhancedBalanceSheet',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.enhancedBalanceSheet.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/enhancedProfitAndLoss',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.enhancedProfitAndLoss.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/financialMetrics',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryKey
    >
  >({
    queryKey: getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.financialMetrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/subscriptions/mrr',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryKey
    >
  >({
    queryKey: getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.subscriptions.mrr.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/subscriptions/process',
    args,
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryKey
    >
  >({
    queryKey:
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.subscriptions.process.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryKey
        >
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
      ...getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
