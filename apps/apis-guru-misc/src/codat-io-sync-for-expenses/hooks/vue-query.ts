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

export function getCompaniesCompanyIdSyncExpensesConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/config', toValue(args)] as const
}

export function getCompaniesCompanyIdSyncExpensesConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdSyncExpensesConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdSyncExpensesConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']>
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdSyncExpensesConfigQueryKey>
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
              (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdSyncExpensesConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].sync.expenses.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCompaniesCompanyIdSyncExpensesConfig<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdSyncExpensesConfigMutationOptions<
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

export function usePostCompaniesCompanyIdSyncExpensesConnectionsPartnerExpense<
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
    getPostCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseMutationOptions<
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

export function usePostCompaniesCompanyIdSyncExpensesDataExpenseTransactions<
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
    getPostCompaniesCompanyIdSyncExpensesDataExpenseTransactionsMutationOptions<
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

export function getCompaniesCompanyIdSyncExpensesMappingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/sync/expenses/mappingOptions', toValue(args)] as const
}

export function getCompaniesCompanyIdSyncExpensesMappingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdSyncExpensesMappingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.mappingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdSyncExpensesMappingOptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdSyncExpensesMappingOptionsQueryKey>
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
              (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesMappingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdSyncExpensesMappingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].sync.expenses.mappingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCompaniesCompanyIdSyncExpensesSyncs<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdSyncExpensesSyncsMutationOptions<
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

export function getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/lastSuccessful/status',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs.lastSuccessful.status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryKey>
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
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].sync.expenses.syncs.lastSuccessful.status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/latest/status',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs.latest.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdSyncExpensesSyncsLatestStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryKey>
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
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdSyncExpensesSyncsLatestStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].sync.expenses.syncs.latest.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/list/status',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs.list.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdSyncExpensesSyncsListStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryKey>
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
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdSyncExpensesSyncsListStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].sync.expenses.syncs.list.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/:syncId/status',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs[':syncId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdSyncExpensesSyncsSyncIdStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryKey>
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
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].sync.expenses.syncs[':syncId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/:syncId/transactions',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryKey>
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
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/sync/expenses/syncs/:syncId/transactions/:transactionId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions[
          ':transactionId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
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
                    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryKey
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
              (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions[
            ':transactionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachments<
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
    getPostCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsMutationOptions<
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
