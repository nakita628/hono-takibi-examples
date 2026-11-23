import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getCompaniesCompanyIdSyncExpensesConfigQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/config', args] as const
}

export function getCompaniesCompanyIdSyncExpensesConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesConfigQueryKey>
  >({
    queryKey: getCompaniesCompanyIdSyncExpensesConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCompaniesCompanyIdSyncExpensesConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdSyncExpensesConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdSyncExpensesConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCompaniesCompanyIdSyncExpensesConfigMutationKey() {
  return ['companies', '/companies/:companyId/sync/expenses/config', 'POST'] as const
}

export function getPostCompaniesCompanyIdSyncExpensesConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdSyncExpensesConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['sync']['expenses']['config']['$post']
      >,
    ) {
      return parseResponse(client.companies[':companyId'].sync.expenses.config.$post(args, options))
    },
  })
}

export function injectPostCompaniesCompanyIdSyncExpensesConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['sync']['expenses']['config']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompaniesCompanyIdSyncExpensesConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseMutationKey() {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/connections/partnerExpense',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['connections']['partnerExpense']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['connections']['partnerExpense']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['sync']['expenses']['connections']['partnerExpense']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.connections.partnerExpense.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostCompaniesCompanyIdSyncExpensesConnectionsPartnerExpense<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['connections']['partnerExpense']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['sync']['expenses']['connections']['partnerExpense']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCompaniesCompanyIdSyncExpensesDataExpenseTransactionsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/data/expense-transactions',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdSyncExpensesDataExpenseTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['data']['expense-transactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['data']['expense-transactions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdSyncExpensesDataExpenseTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['sync']['expenses']['data']['expense-transactions']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.data['expense-transactions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostCompaniesCompanyIdSyncExpensesDataExpenseTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['data']['expense-transactions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['sync']['expenses']['data']['expense-transactions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdSyncExpensesDataExpenseTransactionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCompaniesCompanyIdSyncExpensesMappingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/mappingOptions', args] as const
}

export function getCompaniesCompanyIdSyncExpensesMappingOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesMappingOptionsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdSyncExpensesMappingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.mappingOptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCompaniesCompanyIdSyncExpensesMappingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdSyncExpensesMappingOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdSyncExpensesMappingOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostCompaniesCompanyIdSyncExpensesSyncsMutationKey() {
  return ['companies', '/companies/:companyId/sync/expenses/syncs', 'POST'] as const
}

export function getPostCompaniesCompanyIdSyncExpensesSyncsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['sync']['expenses']['syncs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdSyncExpensesSyncsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['$post']
      >,
    ) {
      return parseResponse(client.companies[':companyId'].sync.expenses.syncs.$post(args, options))
    },
  })
}

export function injectPostCompaniesCompanyIdSyncExpensesSyncs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompaniesCompanyIdSyncExpensesSyncsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/lastSuccessful/status',
    args,
  ] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryKey>
  >({
    queryKey: getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs.lastSuccessful.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/syncs/latest/status', args] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryKey>
  >({
    queryKey: getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs.latest.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCompaniesCompanyIdSyncExpensesSyncsLatestStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/syncs/list/status', args] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryKey>
  >({
    queryKey: getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs.list.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCompaniesCompanyIdSyncExpensesSyncsListStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/syncs/:syncId/status', args] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryKey>
  >({
    queryKey: getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs[':syncId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCompaniesCompanyIdSyncExpensesSyncsSyncIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/:syncId/transactions',
    args,
  ] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/:syncId/transactions/:transactionId',
    args,
  ] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions[
          ':transactionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/:syncId/transactions/:transactionId/attachments',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['attachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['attachments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['attachments']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions[
          ':transactionId'
        ].attachments.$post(args, options),
      )
    },
  })
}

export function injectPostCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['attachments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['attachments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
