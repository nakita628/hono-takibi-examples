import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getDataKey() {
  return ['data'] as const
}

export function getGetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/reports/enhancedBalanceSheet/accounts', args] as const
}

export function useGetCompaniesCompanyIdReportsEnhancedBalanceSheetAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsKey(args)
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
                (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
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
          client.companies[':companyId'].reports.enhancedBalanceSheet.accounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdReportsEnhancedBalanceSheetAccounts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsKey(args)
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
                (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
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
          client.companies[':companyId'].reports.enhancedBalanceSheet.accounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/reports/enhancedCashFlow/transactions', args] as const
}

export function useGetCompaniesCompanyIdReportsEnhancedCashFlowTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsKey(args)
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
                (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
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
          client.companies[':companyId'].reports.enhancedCashFlow.transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdReportsEnhancedCashFlowTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsKey(args)
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
                (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
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
          client.companies[':companyId'].reports.enhancedCashFlow.transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdReportsEnhancedInvoicesKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/reports/enhancedInvoices', args] as const
}

export function useGetCompaniesCompanyIdReportsEnhancedInvoices<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdReportsEnhancedInvoicesKey(args)
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
                (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
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
          client.companies[':companyId'].reports.enhancedInvoices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdReportsEnhancedInvoices<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdReportsEnhancedInvoicesKey(args)
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
                (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
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
          client.companies[':companyId'].reports.enhancedInvoices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsKey(
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

export function useGetCompaniesCompanyIdReportsEnhancedProfitAndLossAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsKey(args)
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
                (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
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
          client.companies[':companyId'].reports.enhancedProfitAndLoss.accounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdReportsEnhancedProfitAndLossAccounts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsKey(args)
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
                (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
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
          client.companies[':companyId'].reports.enhancedProfitAndLoss.accounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataAssessAccountsCategoriesKey() {
  return ['data', '/data/assess/accounts/categories'] as const
}

export function useGetDataAssessAccountsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>
        >
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
        ? getGetDataAssessAccountsCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.data.assess.accounts.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataAssessAccountsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>
        >
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
        ? getGetDataAssessAccountsCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.data.assess.accounts.categories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.data.assess.accounts.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsKey(
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

export function useGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsKey(args)
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
                (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
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
          client.data.companies[':companyId'].assess.dataTypes[
            ':dataType'
          ].dataIntegrity.details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsKey(args)
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
                (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
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
          client.data.companies[':companyId'].assess.dataTypes[
            ':dataType'
          ].dataIntegrity.details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusKey(
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

export function useGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusKey(args)
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
                (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
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
          client.data.companies[':companyId'].assess.dataTypes[
            ':dataType'
          ].dataIntegrity.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusKey(args)
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
                (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
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
          client.data.companies[':companyId'].assess.dataTypes[
            ':dataType'
          ].dataIntegrity.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesKey(
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

export function useGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesKey(args)
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
                (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
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
          client.data.companies[':companyId'].assess.dataTypes[
            ':dataType'
          ].dataIntegrity.summaries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesKey(args)
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
                (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
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
          client.data.companies[':companyId'].assess.dataTypes[
            ':dataType'
          ].dataIntegrity.summaries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdAssessExcelKey(
  args: InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>,
) {
  return ['data', '/data/companies/:companyId/assess/excel', args] as const
}

export function useGetDataCompaniesCompanyIdAssessExcel<TError = unknown>(
  args: InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
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
        ? getGetDataCompaniesCompanyIdAssessExcelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.data.companies[':companyId'].assess.excel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdAssessExcel<TError = unknown>(
  args: InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
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
        ? getGetDataCompaniesCompanyIdAssessExcelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.data.companies[':companyId'].assess.excel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataCompaniesCompanyIdAssessExcelKey() {
  return ['data', '/data/companies/:companyId/assess/excel', 'POST'] as const
}

export function usePostDataCompaniesCompanyIdAssessExcel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataCompaniesCompanyIdAssessExcelKey()
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
            (typeof client.data.companies)[':companyId']['assess']['excel']['$post']
          >
        },
      ) =>
        parseResponse(client.data.companies[':companyId'].assess.excel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdAssessExcelDownloadKey(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
  >,
) {
  return ['data', '/data/companies/:companyId/assess/excel/download', args] as const
}

export function useGetDataCompaniesCompanyIdAssessExcelDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdAssessExcelDownloadKey(args)
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
                (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
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
          client.data.companies[':companyId'].assess.excel.download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdAssessExcelDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdAssessExcelDownloadKey(args)
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
                (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
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
          client.data.companies[':companyId'].assess.excel.download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDataCompaniesCompanyIdAssessExcelDownloadKey() {
  return ['data', '/data/companies/:companyId/assess/excel/download', 'POST'] as const
}

export function usePostDataCompaniesCompanyIdAssessExcelDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataCompaniesCompanyIdAssessExcelDownloadKey()
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
            (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$post']
          >
        },
      ) =>
        parseResponse(
          client.data.companies[':companyId'].assess.excel.download.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingKey(
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.accountingMetrics.marketing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingKey(
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.accountingMetrics.marketing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.accounts.categories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.accounts.categories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesKey() {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/accounts/categories',
    'PATCH',
  ] as const
}

export function usePatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesKey()
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
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.accounts.categories.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesKey(
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
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
          client.data.companies[':companyId'].connections[':connectionId'].assess.accounts[
            ':accountId'
          ].categories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesKey(
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
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
          client.data.companies[':companyId'].connections[':connectionId'].assess.accounts[
            ':accountId'
          ].categories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesKey() {
  return [
    'data',
    '/data/companies/:companyId/connections/:connectionId/assess/accounts/:accountId/categories',
    'PATCH',
  ] as const
}

export function usePatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesKey()
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
            (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.data.companies[':companyId'].connections[':connectionId'].assess.accounts[
            ':accountId'
          ].categories.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionKey(
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.customerRetention.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionKey(
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.customerRetention.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueKey(
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.lifetimeValue.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueKey(
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.lifetimeValue.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.orders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.orders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.refunds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.refunds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.revenue.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.commerceMetrics.revenue.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.enhancedBalanceSheet.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.enhancedBalanceSheet.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.enhancedProfitAndLoss.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.enhancedProfitAndLoss.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.financialMetrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.financialMetrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.subscriptions.mrr.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.subscriptions.mrr.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessKey(
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

export function useGetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.subscriptions.process.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessKey(args)
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
                (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
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
          client.data.companies[':companyId'].connections[
            ':connectionId'
          ].assess.subscriptions.process.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
