import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.CashValidation.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['CashValidation', '/CashValidation', keyArgs] as const
}

export function getCashValidationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.CashValidation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCashValidationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.CashValidation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCashValidation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.CashValidation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
          >,
          ReturnType<typeof getCashValidationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CashValidation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCashValidationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCashValidationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.CashValidation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFinancialStatementsBalanceSheetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.BalanceSheet.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['FinancialStatements', '/FinancialStatements/BalanceSheet', keyArgs] as const
}

export function getFinancialStatementsBalanceSheetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.BalanceSheet.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFinancialStatementsBalanceSheetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FinancialStatements.BalanceSheet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFinancialStatementsBalanceSheet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.BalanceSheet.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>
              >
            >
          >,
          ReturnType<typeof getFinancialStatementsBalanceSheetQueryKey>
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
          Awaited<ReturnType<typeof client.FinancialStatements.BalanceSheet.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsBalanceSheetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFinancialStatementsBalanceSheetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.FinancialStatements.BalanceSheet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFinancialStatementsCashflowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.Cashflow.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['FinancialStatements', '/FinancialStatements/Cashflow', keyArgs] as const
}

export function getFinancialStatementsCashflowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.Cashflow.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFinancialStatementsCashflowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FinancialStatements.Cashflow.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFinancialStatementsCashflow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.Cashflow.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>
              >
            >
          >,
          ReturnType<typeof getFinancialStatementsCashflowQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.Cashflow.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsCashflowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFinancialStatementsCashflowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.FinancialStatements.Cashflow.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFinancialStatementsProfitAndLossQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.ProfitAndLoss.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['FinancialStatements', '/FinancialStatements/ProfitAndLoss', keyArgs] as const
}

export function getFinancialStatementsProfitAndLossQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.ProfitAndLoss.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFinancialStatementsProfitAndLossQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FinancialStatements.ProfitAndLoss.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFinancialStatementsProfitAndLoss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.ProfitAndLoss.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
              >
            >
          >,
          ReturnType<typeof getFinancialStatementsProfitAndLossQueryKey>
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
          Awaited<ReturnType<typeof client.FinancialStatements.ProfitAndLoss.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsProfitAndLossQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFinancialStatementsProfitAndLossQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.FinancialStatements.ProfitAndLoss.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFinancialStatementsTrialBalanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.TrialBalance.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['FinancialStatements', '/FinancialStatements/TrialBalance', keyArgs] as const
}

export function getFinancialStatementsTrialBalanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.TrialBalance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFinancialStatementsTrialBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FinancialStatements.TrialBalance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFinancialStatementsTrialBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.TrialBalance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>
              >
            >
          >,
          ReturnType<typeof getFinancialStatementsTrialBalanceQueryKey>
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
          Awaited<ReturnType<typeof client.FinancialStatements.TrialBalance.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsTrialBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFinancialStatementsTrialBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.FinancialStatements.TrialBalance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFinancialStatementsContactsRevenueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.contacts.revenue.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['FinancialStatements', '/FinancialStatements/contacts/revenue', keyArgs] as const
}

export function getFinancialStatementsContactsRevenueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.contacts.revenue.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFinancialStatementsContactsRevenueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FinancialStatements.contacts.revenue.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFinancialStatementsContactsRevenue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.contacts.revenue.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
              >
            >
          >,
          ReturnType<typeof getFinancialStatementsContactsRevenueQueryKey>
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
          Awaited<ReturnType<typeof client.FinancialStatements.contacts.revenue.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsContactsRevenueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFinancialStatementsContactsRevenueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.FinancialStatements.contacts.revenue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFinancialStatementsContactsExpenseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.contacts.expense.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['FinancialStatements', '/FinancialStatements/contacts/expense', keyArgs] as const
}

export function getFinancialStatementsContactsExpenseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.contacts.expense.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFinancialStatementsContactsExpenseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FinancialStatements.contacts.expense.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFinancialStatementsContactsExpense<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FinancialStatements.contacts.expense.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
              >
            >
          >,
          ReturnType<typeof getFinancialStatementsContactsExpenseQueryKey>
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
          Awaited<ReturnType<typeof client.FinancialStatements.contacts.expense.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFinancialStatementsContactsExpenseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFinancialStatementsContactsExpenseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.FinancialStatements.contacts.expense.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBankStatementsPlusStatementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BankStatementsPlus.statements.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BankStatementsPlus', '/BankStatementsPlus/statements', keyArgs] as const
}

export function getBankStatementsPlusStatementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BankStatementsPlus.statements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankStatementsPlusStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankStatementsPlus.statements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankStatementsPlusStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BankStatementsPlus.statements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>
              >
            >
          >,
          ReturnType<typeof getBankStatementsPlusStatementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.BankStatementsPlus.statements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankStatementsPlusStatementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankStatementsPlusStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankStatementsPlus.statements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
