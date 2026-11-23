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

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getDataKey() {
  return ['data'] as const
}

export function getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/reports/enhancedBalanceSheet/accounts',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].reports.enhancedBalanceSheet.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryKey>
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
              (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].reports.enhancedBalanceSheet.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/reports/enhancedCashFlow/transactions',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].reports.enhancedCashFlow.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryKey>
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
              (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].reports.enhancedCashFlow.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdReportsEnhancedInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/reports/enhancedInvoices', toValue(args)] as const
}

export function getCompaniesCompanyIdReportsEnhancedInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdReportsEnhancedInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].reports.enhancedInvoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']>
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
                    (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdReportsEnhancedInvoicesQueryKey>
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
              (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsEnhancedInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdReportsEnhancedInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].reports.enhancedInvoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/reports/enhancedProfitAndLoss/accounts',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].reports.enhancedProfitAndLoss.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryKey>
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
              (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].reports.enhancedProfitAndLoss.accounts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDataAssessAccountsCategoriesQueryKey() {
  return ['data', '/data/assess/accounts/categories'] as const
}

export function getDataAssessAccountsCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDataAssessAccountsCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.assess.accounts.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>
              >
            >
          >,
          ReturnType<typeof getDataAssessAccountsCategoriesQueryKey>
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
          Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataAssessAccountsCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDataAssessAccountsCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.data.assess.accounts.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/assess/dataTypes/:dataType/dataIntegrity/details',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].assess.dataTypes[
          ':dataType'
        ].dataIntegrity.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
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
                    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
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
                    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryKey
          >
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
              (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].assess.dataTypes[
            ':dataType'
          ].dataIntegrity.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/assess/dataTypes/:dataType/dataIntegrity/status',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].assess.dataTypes[':dataType'].dataIntegrity.status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
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
                    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
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
                    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryKey
          >
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
              (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].assess.dataTypes[
            ':dataType'
          ].dataIntegrity.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/assess/dataTypes/:dataType/dataIntegrity/summaries',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].assess.dataTypes[
          ':dataType'
        ].dataIntegrity.summaries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
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
                    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
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
                    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].assess.dataTypes[
            ':dataType'
          ].dataIntegrity.summaries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdAssessExcelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
  >,
) {
  return ['data', '/data/companies/:companyId/assess/excel', toValue(args)] as const
}

export function getDataCompaniesCompanyIdAssessExcelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataCompaniesCompanyIdAssessExcelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].assess.excel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
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
                    (typeof client.data.companies)[':companyId']['assess']['excel']['$get']
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
                    (typeof client.data.companies)[':companyId']['assess']['excel']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataCompaniesCompanyIdAssessExcelQueryKey>
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
            ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataCompaniesCompanyIdAssessExcelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataCompaniesCompanyIdAssessExcelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].assess.excel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.data.companies)[':companyId']['assess']['excel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.data.companies)[':companyId']['assess']['excel']['$post']
          >,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
    >
  >,
) {
  return ['data', '/data/companies/:companyId/assess/excel/download', toValue(args)] as const
}

export function getDataCompaniesCompanyIdAssessExcelDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataCompaniesCompanyIdAssessExcelDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].assess.excel.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
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
                    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
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
                    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataCompaniesCompanyIdAssessExcelDownloadQueryKey>
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
              (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataCompaniesCompanyIdAssessExcelDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataCompaniesCompanyIdAssessExcelDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].assess.excel.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/accountingMetrics/marketing',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.accountingMetrics.marketing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.accountingMetrics.marketing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/accounts/categories',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.accounts.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.accounts.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/accounts/:accountId/categories',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[':connectionId'].assess.accounts[
          ':accountId'
        ].categories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[':connectionId'].assess.accounts[
            ':accountId'
          ].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/customerRetention',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.commerceMetrics.customerRetention.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.customerRetention.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/lifetimeValue',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.commerceMetrics.lifetimeValue.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.lifetimeValue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/orders',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.commerceMetrics.orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/refunds',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.commerceMetrics.refunds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.refunds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/commerceMetrics/revenue',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.commerceMetrics.revenue.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.revenue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/enhancedBalanceSheet',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.enhancedBalanceSheet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.enhancedBalanceSheet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/enhancedProfitAndLoss',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.enhancedProfitAndLoss.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.enhancedProfitAndLoss.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/financialMetrics',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.financialMetrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.financialMetrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/subscriptions/mrr',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.subscriptions.mrr.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.subscriptions.mrr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
    >
  >,
) {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/subscriptions/process',
    toValue(args),
  ] as const
}

export function getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.companies[':companyId'].connections[
          ':connectionId'
        ].assess.subscriptions.process.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
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
                    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.subscriptions.process.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
