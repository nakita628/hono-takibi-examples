import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getCashValidationQueryKey(
  args: InferRequestType<typeof client.CashValidation.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['CashValidation', '/CashValidation', keyArgs] as const
}

export function getCashValidationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.CashValidation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCashValidationQueryKey>
  >({
    queryKey: getCashValidationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.CashValidation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCashValidation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.CashValidation.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCashValidationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCashValidationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFinancialStatementsBalanceSheetQueryKey(
  args: InferRequestType<typeof client.FinancialStatements.BalanceSheet.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/BalanceSheet', keyArgs] as const
}

export function getFinancialStatementsBalanceSheetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.FinancialStatements.BalanceSheet.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsBalanceSheetQueryKey>
  >({
    queryKey: getFinancialStatementsBalanceSheetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.FinancialStatements.BalanceSheet.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFinancialStatementsBalanceSheet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.FinancialStatements.BalanceSheet.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFinancialStatementsBalanceSheetQueryKey>
        >
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
      ...getFinancialStatementsBalanceSheetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFinancialStatementsCashflowQueryKey(
  args: InferRequestType<typeof client.FinancialStatements.Cashflow.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/Cashflow', keyArgs] as const
}

export function getFinancialStatementsCashflowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.FinancialStatements.Cashflow.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsCashflowQueryKey>
  >({
    queryKey: getFinancialStatementsCashflowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.FinancialStatements.Cashflow.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFinancialStatementsCashflow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.FinancialStatements.Cashflow.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFinancialStatementsCashflowQueryKey>
        >
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
      ...getFinancialStatementsCashflowQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFinancialStatementsProfitAndLossQueryKey(
  args: InferRequestType<typeof client.FinancialStatements.ProfitAndLoss.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/ProfitAndLoss', keyArgs] as const
}

export function getFinancialStatementsProfitAndLossQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.FinancialStatements.ProfitAndLoss.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsProfitAndLossQueryKey>
  >({
    queryKey: getFinancialStatementsProfitAndLossQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.FinancialStatements.ProfitAndLoss.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFinancialStatementsProfitAndLoss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.FinancialStatements.ProfitAndLoss.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFinancialStatementsProfitAndLossQueryKey>
        >
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
      ...getFinancialStatementsProfitAndLossQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFinancialStatementsTrialBalanceQueryKey(
  args: InferRequestType<typeof client.FinancialStatements.TrialBalance.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/TrialBalance', keyArgs] as const
}

export function getFinancialStatementsTrialBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.FinancialStatements.TrialBalance.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsTrialBalanceQueryKey>
  >({
    queryKey: getFinancialStatementsTrialBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.FinancialStatements.TrialBalance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFinancialStatementsTrialBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.FinancialStatements.TrialBalance.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFinancialStatementsTrialBalanceQueryKey>
        >
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
      ...getFinancialStatementsTrialBalanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFinancialStatementsContactsRevenueQueryKey(
  args: InferRequestType<typeof client.FinancialStatements.contacts.revenue.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/contacts/revenue', keyArgs] as const
}

export function getFinancialStatementsContactsRevenueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.FinancialStatements.contacts.revenue.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsContactsRevenueQueryKey>
  >({
    queryKey: getFinancialStatementsContactsRevenueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.FinancialStatements.contacts.revenue.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFinancialStatementsContactsRevenue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.FinancialStatements.contacts.revenue.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFinancialStatementsContactsRevenueQueryKey>
        >
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
      ...getFinancialStatementsContactsRevenueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFinancialStatementsContactsExpenseQueryKey(
  args: InferRequestType<typeof client.FinancialStatements.contacts.expense.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FinancialStatements', '/FinancialStatements/contacts/expense', keyArgs] as const
}

export function getFinancialStatementsContactsExpenseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.FinancialStatements.contacts.expense.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsContactsExpenseQueryKey>
  >({
    queryKey: getFinancialStatementsContactsExpenseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.FinancialStatements.contacts.expense.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFinancialStatementsContactsExpense<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.FinancialStatements.contacts.expense.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFinancialStatementsContactsExpenseQueryKey>
        >
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
      ...getFinancialStatementsContactsExpenseQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBankStatementsPlusStatementsQueryKey(
  args: InferRequestType<typeof client.BankStatementsPlus.statements.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankStatementsPlus', '/BankStatementsPlus/statements', keyArgs] as const
}

export function getBankStatementsPlusStatementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.BankStatementsPlus.statements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankStatementsPlusStatementsQueryKey>
  >({
    queryKey: getBankStatementsPlusStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankStatementsPlus.statements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBankStatementsPlusStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.BankStatementsPlus.statements.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBankStatementsPlusStatementsQueryKey>
        >
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
      ...getBankStatementsPlusStatementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
