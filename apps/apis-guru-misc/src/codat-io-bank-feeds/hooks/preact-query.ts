import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/connectionInfo/bankFeedAccounts',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsQueryKey
    >
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[
          ':connectionId'
        ].connectionInfo.bankFeedAccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsQueryKey
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
      ...getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsQueryKey
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
      ...getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/connectionInfo/bankFeedAccounts',
    'PUT',
  ] as const
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$put']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[
          ':connectionId'
        ].connectionInfo.bankFeedAccounts.$put(args, options),
      )
    },
  })
}

export function usePutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts<
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
                  (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$put']
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
    getPutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsMutationOptions<
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

export function getPatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/connectionInfo/bankFeedAccounts/:accountId',
    'PATCH',
  ] as const
}

export function getPatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts'][':accountId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts'][':accountId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts'][':accountId']['$patch']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].connectionInfo.bankFeedAccounts[
          ':accountId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountId<
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
                  (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts'][':accountId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts'][':accountId']['$patch']
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
    getPatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountIdMutationOptions<
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

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bankAccounts/:accountId/bankTransactions',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryKey
    >
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
          ':accountId'
        ].bankTransactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryKey
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryKey
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/bankAccounts/:accountId/bankTransactions',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryKey
    >
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.bankAccounts[
          ':accountId'
        ].bankTransactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryKey
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryKey
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/bankAccounts/:accountId/bankTransactions',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':accountId']['bankTransactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':accountId']['bankTransactions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':accountId']['bankTransactions']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.bankAccounts[
          ':accountId'
        ].bankTransactions.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactions<
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
                  (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':accountId']['bankTransactions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':accountId']['bankTransactions']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsMutationOptions<
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
