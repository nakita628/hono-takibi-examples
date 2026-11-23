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

export function getGetCompaniesCompanyIdSyncExpensesConfigKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/config', args] as const
}

export function useGetCompaniesCompanyIdSyncExpensesConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesConfigKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
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
          client.companies[':companyId'].sync.expenses.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdSyncExpensesConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesConfigKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
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
          client.companies[':companyId'].sync.expenses.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdSyncExpensesConfigKey() {
  return ['companies', '/companies/:companyId/sync/expenses/config', 'POST'] as const
}

export function usePostCompaniesCompanyIdSyncExpensesConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['sync']['expenses']['config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdSyncExpensesConfigKey()
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
            (typeof client.companies)[':companyId']['sync']['expenses']['config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].sync.expenses.config.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseKey() {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/connections/partnerExpense',
    'POST',
  ] as const
}

export function usePostCompaniesCompanyIdSyncExpensesConnectionsPartnerExpense<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['connections']['partnerExpense']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseKey()
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
            (typeof client.companies)[':companyId']['sync']['expenses']['connections']['partnerExpense']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].sync.expenses.connections.partnerExpense.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdSyncExpensesDataExpenseTransactionsKey() {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/data/expense-transactions',
    'POST',
  ] as const
}

export function usePostCompaniesCompanyIdSyncExpensesDataExpenseTransactions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['data']['expense-transactions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdSyncExpensesDataExpenseTransactionsKey()
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
            (typeof client.companies)[':companyId']['sync']['expenses']['data']['expense-transactions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].sync.expenses.data['expense-transactions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdSyncExpensesMappingOptionsKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/mappingOptions', args] as const
}

export function useGetCompaniesCompanyIdSyncExpensesMappingOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesMappingOptionsKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
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
          client.companies[':companyId'].sync.expenses.mappingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdSyncExpensesMappingOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesMappingOptionsKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
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
          client.companies[':companyId'].sync.expenses.mappingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdSyncExpensesSyncsKey() {
  return ['companies', '/companies/:companyId/sync/expenses/syncs', 'POST'] as const
}

export function usePostCompaniesCompanyIdSyncExpensesSyncs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['sync']['expenses']['syncs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdSyncExpensesSyncsKey()
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
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['$post']
          >
        },
      ) =>
        parseResponse(client.companies[':companyId'].sync.expenses.syncs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusKey(
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

export function useGetCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs.lastSuccessful.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs.lastSuccessful.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdSyncExpensesSyncsLatestStatusKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/syncs/latest/status', args] as const
}

export function useGetCompaniesCompanyIdSyncExpensesSyncsLatestStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsLatestStatusKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs.latest.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdSyncExpensesSyncsLatestStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsLatestStatusKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs.latest.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdSyncExpensesSyncsListStatusKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/syncs/list/status', args] as const
}

export function useGetCompaniesCompanyIdSyncExpensesSyncsListStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsListStatusKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs.list.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdSyncExpensesSyncsListStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsListStatusKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs.list.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/syncs/:syncId/status', args] as const
}

export function useGetCompaniesCompanyIdSyncExpensesSyncsSyncIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs[':syncId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdSyncExpensesSyncsSyncIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs[':syncId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsKey(
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

export function useGetCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdKey(
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

export function useGetCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions[
            ':transactionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdKey(args)
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
                (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
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
          client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions[
            ':transactionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsKey() {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/:syncId/transactions/:transactionId/attachments',
    'POST',
  ] as const
}

export function usePostCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['attachments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsKey()
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
            (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['attachments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions[
            ':transactionId'
          ].attachments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
