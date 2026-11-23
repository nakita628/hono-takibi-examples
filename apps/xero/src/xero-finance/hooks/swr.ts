import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBankStatementsPlusKey() {
  return ['BankStatementsPlus'] as const
}

export function getCashValidationKey() {
  return ['CashValidation'] as const
}

export function getFinancialStatementsKey() {
  return ['FinancialStatements'] as const
}

export function getGetCashValidationKey(args: InferRequestType<typeof client.CashValidation.$get>) {
  const { header: _, ...keyArgs } = args
  return ['CashValidation', '/CashValidation', keyArgs] as const
}

export function useGetCashValidation<TError = unknown>(
  args: InferRequestType<typeof client.CashValidation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCashValidationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.CashValidation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCashValidation<TError = unknown>(
  args: InferRequestType<typeof client.CashValidation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCashValidationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.CashValidation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFinancialStatementsBalanceSheetKey(
  args: InferRequestType<typeof client.FinancialStatements.BalanceSheet.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/BalanceSheet', keyArgs] as const
}

export function useGetFinancialStatementsBalanceSheet<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.BalanceSheet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>
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
        ? getGetFinancialStatementsBalanceSheetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FinancialStatements.BalanceSheet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFinancialStatementsBalanceSheet<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.BalanceSheet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>
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
        ? getGetFinancialStatementsBalanceSheetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FinancialStatements.BalanceSheet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFinancialStatementsCashflowKey(
  args: InferRequestType<typeof client.FinancialStatements.Cashflow.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/Cashflow', keyArgs] as const
}

export function useGetFinancialStatementsCashflow<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.Cashflow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>>
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
        ? getGetFinancialStatementsCashflowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FinancialStatements.Cashflow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFinancialStatementsCashflow<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.Cashflow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>>
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
        ? getGetFinancialStatementsCashflowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FinancialStatements.Cashflow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFinancialStatementsProfitAndLossKey(
  args: InferRequestType<typeof client.FinancialStatements.ProfitAndLoss.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/ProfitAndLoss', keyArgs] as const
}

export function useGetFinancialStatementsProfitAndLoss<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.ProfitAndLoss.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
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
        ? getGetFinancialStatementsProfitAndLossKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FinancialStatements.ProfitAndLoss.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFinancialStatementsProfitAndLoss<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.ProfitAndLoss.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
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
        ? getGetFinancialStatementsProfitAndLossKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FinancialStatements.ProfitAndLoss.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFinancialStatementsTrialBalanceKey(
  args: InferRequestType<typeof client.FinancialStatements.TrialBalance.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/TrialBalance', keyArgs] as const
}

export function useGetFinancialStatementsTrialBalance<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.TrialBalance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>
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
        ? getGetFinancialStatementsTrialBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FinancialStatements.TrialBalance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFinancialStatementsTrialBalance<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.TrialBalance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>
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
        ? getGetFinancialStatementsTrialBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FinancialStatements.TrialBalance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFinancialStatementsContactsRevenueKey(
  args: InferRequestType<typeof client.FinancialStatements.contacts.revenue.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/contacts/revenue', keyArgs] as const
}

export function useGetFinancialStatementsContactsRevenue<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.contacts.revenue.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
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
        ? getGetFinancialStatementsContactsRevenueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.FinancialStatements.contacts.revenue.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFinancialStatementsContactsRevenue<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.contacts.revenue.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
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
        ? getGetFinancialStatementsContactsRevenueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.FinancialStatements.contacts.revenue.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFinancialStatementsContactsExpenseKey(
  args: InferRequestType<typeof client.FinancialStatements.contacts.expense.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/contacts/expense', keyArgs] as const
}

export function useGetFinancialStatementsContactsExpense<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.contacts.expense.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
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
        ? getGetFinancialStatementsContactsExpenseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.FinancialStatements.contacts.expense.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFinancialStatementsContactsExpense<TError = unknown>(
  args: InferRequestType<typeof client.FinancialStatements.contacts.expense.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
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
        ? getGetFinancialStatementsContactsExpenseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.FinancialStatements.contacts.expense.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBankStatementsPlusStatementsKey(
  args: InferRequestType<typeof client.BankStatementsPlus.statements.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankStatementsPlus', '/BankStatementsPlus/statements', keyArgs] as const
}

export function useGetBankStatementsPlusStatements<TError = unknown>(
  args: InferRequestType<typeof client.BankStatementsPlus.statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>
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
        ? getGetBankStatementsPlusStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BankStatementsPlus.statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankStatementsPlusStatements<TError = unknown>(
  args: InferRequestType<typeof client.BankStatementsPlus.statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>
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
        ? getGetBankStatementsPlusStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BankStatementsPlus.statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
