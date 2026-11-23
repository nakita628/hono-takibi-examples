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

export function getGetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsKey(
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

export function useGetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsKey(args)
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
                (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
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
          client.companies[':companyId'].connections[
            ':connectionId'
          ].connectionInfo.bankFeedAccounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsKey(args)
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
                (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$get']
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
          client.companies[':companyId'].connections[
            ':connectionId'
          ].connectionInfo.bankFeedAccounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/connectionInfo/bankFeedAccounts',
    'PUT',
  ] as const
}

export function usePutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsKey()
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
            (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts']['$put']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].connections[
            ':connectionId'
          ].connectionInfo.bankFeedAccounts.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountIdKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/connectionInfo/bankFeedAccounts/:accountId',
    'PATCH',
  ] as const
}

export function usePatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts'][':accountId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountIdKey()
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
            (typeof client.companies)[':companyId']['connections'][':connectionId']['connectionInfo']['bankFeedAccounts'][':accountId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].connections[
            ':connectionId'
          ].connectionInfo.bankFeedAccounts[':accountId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsKey(
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

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsKey(
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
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
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
          client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
            ':accountId'
          ].bankTransactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsKey(
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
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
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
          client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
            ':accountId'
          ].bankTransactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsKey(
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

export function useGetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsKey(
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
                (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
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
          client.companies[':companyId'].connections[':connectionId'].options.bankAccounts[
            ':accountId'
          ].bankTransactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsKey(
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
                (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
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
          client.companies[':companyId'].connections[':connectionId'].options.bankAccounts[
            ':accountId'
          ].bankTransactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/bankAccounts/:accountId/bankTransactions',
    'POST',
  ] as const
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':accountId']['bankTransactions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsKey()
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
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':accountId']['bankTransactions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].push.bankAccounts[
            ':accountId'
          ].bankTransactions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
