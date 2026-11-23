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

export function getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/accountTransactions',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.accountTransactions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.accountTransactions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/accountTransactions/:accountTransactionId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.accountTransactions[
          ':accountTransactionId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.accountTransactions[
            ':accountTransactionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bankAccounts',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bankAccounts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataBankAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.bankAccounts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bankAccounts/:accountId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
          ':accountId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
            ':accountId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bankAccounts/:accountId/bankTransactions',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
          ':accountId'
        ].bankTransactions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
            ':accountId'
          ].bankTransactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bills[
          ':billId'
        ].attachments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.bills[
            ':billId'
          ].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments/:attachmentId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bills[
          ':billId'
        ].attachments[':attachmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.bills[
            ':billId'
          ].attachments[':attachmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments/:attachmentId/download',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bills[
          ':billId'
        ].attachments[':attachmentId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.bills[
            ':billId'
          ].attachments[':attachmentId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.customers[
          ':customerId'
        ].attachments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.customers[
            ':customerId'
          ].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments/:attachmentId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.customers[
          ':customerId'
        ].attachments[':attachmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.customers[
            ':customerId'
          ].attachments[':attachmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments/:attachmentId/download',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.customers[
          ':customerId'
        ].attachments[':attachmentId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.customers[
            ':customerId'
          ].attachments[':attachmentId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directCosts',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directCosts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataDirectCosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.directCosts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directCosts[
          ':directCostId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.directCosts[
            ':directCostId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directCosts[
          ':directCostId'
        ].attachments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.directCosts[
            ':directCostId'
          ].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments/:attachmentId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directCosts[
          ':directCostId'
        ].attachments[':attachmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.directCosts[
            ':directCostId'
          ].attachments[':attachmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments/:attachmentId/download',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directCosts[
          ':directCostId'
        ].attachments[':attachmentId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.directCosts[
            ':directCostId'
          ].attachments[':attachmentId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directIncomes',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directIncomes.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.directIncomes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
          ':directIncomeId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
            ':directIncomeId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
          ':directIncomeId'
        ].attachments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
            ':directIncomeId'
          ].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments/:attachmentId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
          ':directIncomeId'
        ].attachments[':attachmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
            ':directIncomeId'
          ].attachments[':attachmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments/:attachmentId/download',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
          ':directIncomeId'
        ].attachments[':attachmentId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
            ':directIncomeId'
          ].attachments[':attachmentId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.invoices[
          ':invoiceId'
        ].attachments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.invoices[
            ':invoiceId'
          ].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments/:attachmentId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.invoices[
          ':invoiceId'
        ].attachments[':attachmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.invoices[
            ':invoiceId'
          ].attachments[':attachmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments/:attachmentId/download',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.invoices[
          ':invoiceId'
        ].attachments[':attachmentId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.invoices[
            ':invoiceId'
          ].attachments[':attachmentId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.suppliers[
          ':supplierId'
        ].attachments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.suppliers[
            ':supplierId'
          ].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments/:attachmentId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.suppliers[
          ':supplierId'
        ].attachments[':attachmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.suppliers[
            ':supplierId'
          ].attachments[':attachmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments/:attachmentId/download',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.suppliers[
          ':supplierId'
        ].attachments[':attachmentId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.suppliers[
            ':supplierId'
          ].attachments[':attachmentId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/transfers',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.transfers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.transfers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/transfers/:transferId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.transfers[
          ':transferId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data.transfers[
            ':transferId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/bankAccounts',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.bankAccounts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.bankAccounts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/bankAccounts/:accountId/bankTransactions',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.bankAccounts[
          ':accountId'
        ].bankTransactions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.bankAccounts[
            ':accountId'
          ].bankTransactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/billCreditNotes',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.billCreditNotes.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.billCreditNotes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/billPayments',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.billPayments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsBillPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.billPayments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/bills',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.bills.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsBills<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.bills.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/chartOfAccounts',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.chartOfAccounts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.chartOfAccounts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/creditNotes',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.creditNotes.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.creditNotes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/customers',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.customers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.customers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/directCosts',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.directCosts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.directCosts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/directIncomes',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.directIncomes.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.directIncomes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/invoices',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.invoices.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.invoices.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/items',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.items.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.items.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/journalEntries',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.journalEntries.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.journalEntries.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/journals',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.journals.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsJournals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.journals.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/payments',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.payments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.payments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/purchaseOrders',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.purchaseOrders.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.purchaseOrders.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/suppliers',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.suppliers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.suppliers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/transfers',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.transfers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdOptionsTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].options.transfers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushAccountsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/accounts',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['accounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['accounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['accounts']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.accounts.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushAccounts<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['accounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['accounts']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushAccountsMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/bankAccounts',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.bankAccounts.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushBankAccounts<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsMutationOptions<
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
      Extract<
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

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/bankAccounts/:bankAccountId',
    'PUT',
  ] as const
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':bankAccountId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':bankAccountId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':bankAccountId']['$put']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.bankAccounts[
          ':bankAccountId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':bankAccountId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':bankAccountId']['$put']
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
    getPutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/billCreditNotes',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.billCreditNotes.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotes<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesMutationOptions<
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

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/billCreditNotes/:billCreditNoteId',
    'PUT',
  ] as const
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes'][':billCreditNoteId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes'][':billCreditNoteId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes'][':billCreditNoteId']['$put']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.billCreditNotes[
          ':billCreditNoteId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes'][':billCreditNoteId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes'][':billCreditNoteId']['$put']
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
    getPutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/billPayments',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.billPayments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushBillPayments<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsMutationOptions<
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

export function getDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/billPayments/:billPaymentId',
    'DELETE',
  ] as const
}

export function getDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments'][':billPaymentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments'][':billPaymentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments'][':billPaymentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.billPayments[
          ':billPaymentId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments'][':billPaymentId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments'][':billPaymentId']['$delete']
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
    getDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBillsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/bills',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBillsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushBillsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.bills.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushBills<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills']['$post']
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
  const mutationDefaults = getPostCompaniesCompanyIdConnectionsConnectionIdPushBillsMutationOptions<
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

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/bills/:billId',
    'PUT',
  ] as const
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$put']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.bills[':billId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$put']
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
    getPutCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdMutationOptions<
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

export function getDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/bills/:billId',
    'DELETE',
  ] as const
}

export function getDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$delete']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.bills[':billId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$delete']
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
    getDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/bills/:billId/attachments',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['attachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['attachments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['attachments']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.bills[
          ':billId'
        ].attachments.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachments<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['attachments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['attachments']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/creditNotes',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.creditNotes.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushCreditNotes<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesMutationOptions<
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

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/creditNotes/:creditNoteId',
    'PUT',
  ] as const
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes'][':creditNoteId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes'][':creditNoteId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes'][':creditNoteId']['$put']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.creditNotes[
          ':creditNoteId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes'][':creditNoteId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes'][':creditNoteId']['$put']
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
    getPutCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushCustomersMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/customers',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushCustomersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.customers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushCustomers<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushCustomersMutationOptions<
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

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/customers/:customerId',
    'PUT',
  ] as const
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers'][':customerId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers'][':customerId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers'][':customerId']['$put']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.customers[
          ':customerId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers'][':customerId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers'][':customerId']['$put']
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
    getPutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/directCosts',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.directCosts.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushDirectCosts<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/directCosts/:directCostId/attachment',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts'][':directCostId']['attachment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts'][':directCostId']['attachment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts'][':directCostId']['attachment']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.directCosts[
          ':directCostId'
        ].attachment.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachment<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts'][':directCostId']['attachment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts'][':directCostId']['attachment']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/directIncomes',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.directIncomes.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomes<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/directIncomes/:directIncomeId/attachment',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes'][':directIncomeId']['attachment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes'][':directIncomeId']['attachment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes'][':directIncomeId']['attachment']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.directIncomes[
          ':directIncomeId'
        ].attachment.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachment<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes'][':directIncomeId']['attachment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes'][':directIncomeId']['attachment']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/invoices',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.invoices.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushInvoices<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesMutationOptions<
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

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/invoices/:invoiceId',
    'PUT',
  ] as const
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$put']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.invoices[
          ':invoiceId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$put']
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
    getPutCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdMutationOptions<
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

export function getDeleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/invoices/:invoiceId',
    'DELETE',
  ] as const
}

export function getDeleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.invoices[
          ':invoiceId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$delete']
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
    getDeleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/invoices/:invoiceId/attachment',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['attachment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['attachment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['attachment']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.invoices[
          ':invoiceId'
        ].attachment.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachment<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['attachment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['attachment']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushItemsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/items',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['items']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['items']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['items']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.items.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushItems<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['items']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['items']['$post']
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
  const mutationDefaults = getPostCompaniesCompanyIdConnectionsConnectionIdPushItemsMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/journalEntries',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.journalEntries.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushJournalEntries<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesMutationOptions<
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

export function getDeleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/journalEntries/:journalEntryId',
    'DELETE',
  ] as const
}

export function getDeleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries'][':journalEntryId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries'][':journalEntryId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries'][':journalEntryId']['$delete']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.journalEntries[
          ':journalEntryId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries'][':journalEntryId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries'][':journalEntryId']['$delete']
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
    getDeleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushJournalsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/journals',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushJournalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journals']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journals']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushJournalsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journals']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.journals.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushJournals<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journals']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journals']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushJournalsMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushPaymentsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/payments',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['payments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['payments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['payments']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.payments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushPayments<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['payments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['payments']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushPaymentsMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/purchaseOrders',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.purchaseOrders.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrders<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersMutationOptions<
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

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/purchaseOrders/:purchaseOrderId',
    'PUT',
  ] as const
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders'][':purchaseOrderId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders'][':purchaseOrderId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders'][':purchaseOrderId']['$put']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.purchaseOrders[
          ':purchaseOrderId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders'][':purchaseOrderId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders'][':purchaseOrderId']['$put']
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
    getPutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/suppliers',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.suppliers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushSuppliers<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersMutationOptions<
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

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/suppliers/:supplierId',
    'PUT',
  ] as const
}

export function getPutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers'][':supplierId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers'][':supplierId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers'][':supplierId']['$put']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.suppliers[
          ':supplierId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierId<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers'][':supplierId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers'][':supplierId']['$put']
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
    getPutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdMutationOptions<
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

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushTransfersMutationKey() {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/push/transfers',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdConnectionsConnectionIdPushTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['transfers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['transfers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdConnectionsConnectionIdPushTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['transfers']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].push.transfers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdConnectionsConnectionIdPushTransfers<
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['transfers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['transfers']['$post']
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
    getPostCompaniesCompanyIdConnectionsConnectionIdPushTransfersMutationOptions<
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

export function getCompaniesCompanyIdDataAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/accounts', toValue(args)] as const
}

export function getCompaniesCompanyIdDataAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataAccountsQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/data/accounts/:accountId', toValue(args)] as const
}

export function getCompaniesCompanyIdDataAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.accounts[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataAccountsAccountIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.accounts[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataBankAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/data/bankAccounts/:accountId', toValue(args)] as const
}

export function getCompaniesCompanyIdDataBankAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataBankAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.bankAccounts[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataBankAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataBankAccountsAccountIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataBankAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataBankAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.bankAccounts[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/bankAccounts/:accountId/transactions',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.bankAccounts[':accountId'].transactions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdDataBankAccountsAccountIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
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
                    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
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
                    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsQueryKey>
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
              (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.bankAccounts[':accountId'].transactions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataBillCreditNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/billCreditNotes', toValue(args)] as const
}

export function getCompaniesCompanyIdDataBillCreditNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataBillCreditNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.billCreditNotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataBillCreditNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']>
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
                    (typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']
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
                    (typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataBillCreditNotesQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataBillCreditNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataBillCreditNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.billCreditNotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/billCreditNotes/:billCreditNoteId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.billCreditNotes[':billCreditNoteId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdDataBillCreditNotesBillCreditNoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.billCreditNotes[':billCreditNoteId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataBillPaymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['billPayments']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/billPayments', toValue(args)] as const
}

export function getCompaniesCompanyIdDataBillPaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['billPayments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataBillPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.billPayments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataBillPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['billPayments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['billPayments']['$get']>
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
                    (typeof client.companies)[':companyId']['data']['billPayments']['$get']
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
                    (typeof client.companies)[':companyId']['data']['billPayments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataBillPaymentsQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['data']['billPayments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataBillPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataBillPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.billPayments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataBillPaymentsBillPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/billPayments/:billPaymentId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataBillPaymentsBillPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataBillPaymentsBillPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.billPayments[':billPaymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataBillPaymentsBillPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataBillPaymentsBillPaymentIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataBillPaymentsBillPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataBillPaymentsBillPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.billPayments[':billPaymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataBillsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['bills']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/bills', toValue(args)] as const
}

export function getCompaniesCompanyIdDataBillsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['bills']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataBillsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.bills.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataBills<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['bills']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['bills']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['bills']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['bills']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataBillsQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['bills']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataBillsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataBillsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.bills.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataBillsBillIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/bills/:billId', toValue(args)] as const
}

export function getCompaniesCompanyIdDataBillsBillIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataBillsBillIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.bills[':billId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataBillsBillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']>
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
                    (typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataBillsBillIdQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataBillsBillIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataBillsBillIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.bills[':billId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataCreditNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/creditNotes', toValue(args)] as const
}

export function getCompaniesCompanyIdDataCreditNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataCreditNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.creditNotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataCreditNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataCreditNotesQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataCreditNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataCreditNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.creditNotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataCreditNotesCreditNoteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/creditNotes/:creditNoteId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataCreditNotesCreditNoteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataCreditNotesCreditNoteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.creditNotes[':creditNoteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataCreditNotesCreditNoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataCreditNotesCreditNoteIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataCreditNotesCreditNoteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataCreditNotesCreditNoteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.creditNotes[':creditNoteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataCustomersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['customers']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/customers', toValue(args)] as const
}

export function getCompaniesCompanyIdDataCustomersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['customers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['customers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['customers']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['customers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataCustomersQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['customers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataCustomersCustomerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/data/customers/:customerId', toValue(args)] as const
}

export function getCompaniesCompanyIdDataCustomersCustomerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataCustomersCustomerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.customers[':customerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataCustomersCustomerIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataCustomersCustomerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataCustomersCustomerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.customers[':customerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataFinancialsBalanceSheetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/data/financials/balanceSheet', toValue(args)] as const
}

export function getCompaniesCompanyIdDataFinancialsBalanceSheetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataFinancialsBalanceSheetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.financials.balanceSheet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataFinancialsBalanceSheet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
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
                    (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
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
                    (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataFinancialsBalanceSheetQueryKey>
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
              (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataFinancialsBalanceSheetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataFinancialsBalanceSheetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.financials.balanceSheet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataFinancialsCashFlowStatementQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/financials/cashFlowStatement',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataFinancialsCashFlowStatementQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataFinancialsCashFlowStatementQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.financials.cashFlowStatement.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataFinancialsCashFlowStatement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
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
                    (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
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
                    (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataFinancialsCashFlowStatementQueryKey>
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
              (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataFinancialsCashFlowStatementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataFinancialsCashFlowStatementQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.financials.cashFlowStatement.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataFinancialsProfitAndLossQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/financials/profitAndLoss',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataFinancialsProfitAndLossQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataFinancialsProfitAndLossQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.financials.profitAndLoss.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataFinancialsProfitAndLoss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
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
                    (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
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
                    (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataFinancialsProfitAndLossQueryKey>
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
              (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataFinancialsProfitAndLossQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataFinancialsProfitAndLossQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.financials.profitAndLoss.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/info', toValue(args)] as const
}

export function getCompaniesCompanyIdDataInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdDataInfoMutationKey() {
  return ['companies', '/companies/:companyId/data/info', 'POST'] as const
}

export function getPostCompaniesCompanyIdDataInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['info']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdDataInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$post']>,
    ) {
      return parseResponse(client.companies[':companyId'].data.info.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdDataInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['info']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$post']>,
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
  const mutationDefaults = getPostCompaniesCompanyIdDataInfoMutationOptions<
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

export function getCompaniesCompanyIdDataInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/invoices', toValue(args)] as const
}

export function getCompaniesCompanyIdDataInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataInvoicesQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataInvoicesInvoiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/data/invoices/:invoiceId', toValue(args)] as const
}

export function getCompaniesCompanyIdDataInvoicesInvoiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataInvoicesInvoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.invoices[':invoiceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataInvoicesInvoiceIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataInvoicesInvoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataInvoicesInvoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.invoices[':invoiceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataInvoicesInvoiceIdPdfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/data/invoices/:invoiceId/pdf', toValue(args)] as const
}

export function getCompaniesCompanyIdDataInvoicesInvoiceIdPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataInvoicesInvoiceIdPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.invoices[':invoiceId'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataInvoicesInvoiceIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
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
                    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
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
                    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataInvoicesInvoiceIdPdfQueryKey>
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
              (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataInvoicesInvoiceIdPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataInvoicesInvoiceIdPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.invoices[':invoiceId'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['items']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/items', toValue(args)] as const
}

export function getCompaniesCompanyIdDataItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['items']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['items']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataItemsItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/items/:itemId', toValue(args)] as const
}

export function getCompaniesCompanyIdDataItemsItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataItemsItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.items[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataItemsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']>
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
                    (typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataItemsItemIdQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataItemsItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataItemsItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.items[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataJournalEntriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['journalEntries']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/journalEntries', toValue(args)] as const
}

export function getCompaniesCompanyIdDataJournalEntriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['journalEntries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataJournalEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.journalEntries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataJournalEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['data']['journalEntries']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['journalEntries']['$get']>
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
                    (typeof client.companies)[':companyId']['data']['journalEntries']['$get']
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
                    (typeof client.companies)[':companyId']['data']['journalEntries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataJournalEntriesQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['data']['journalEntries']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataJournalEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataJournalEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.journalEntries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataJournalEntriesJournalEntryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/journalEntries/:journalEntryId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataJournalEntriesJournalEntryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataJournalEntriesJournalEntryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.journalEntries[':journalEntryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataJournalEntriesJournalEntryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataJournalEntriesJournalEntryIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataJournalEntriesJournalEntryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataJournalEntriesJournalEntryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.journalEntries[':journalEntryId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataJournalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['journals']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/journals', toValue(args)] as const
}

export function getCompaniesCompanyIdDataJournalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['journals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataJournalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.journals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataJournals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['journals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['journals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['journals']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['journals']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataJournalsQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['journals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataJournalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataJournalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.journals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataJournalsJournalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/data/journals/:journalId', toValue(args)] as const
}

export function getCompaniesCompanyIdDataJournalsJournalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataJournalsJournalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.journals[':journalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataJournalsJournalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataJournalsJournalIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataJournalsJournalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataJournalsJournalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.journals[':journalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataPaymentMethodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['paymentMethods']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/paymentMethods', toValue(args)] as const
}

export function getCompaniesCompanyIdDataPaymentMethodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['paymentMethods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataPaymentMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.paymentMethods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['data']['paymentMethods']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['paymentMethods']['$get']>
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
                    (typeof client.companies)[':companyId']['data']['paymentMethods']['$get']
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
                    (typeof client.companies)[':companyId']['data']['paymentMethods']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataPaymentMethodsQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['data']['paymentMethods']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataPaymentMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.paymentMethods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/paymentMethods/:paymentMethodId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.paymentMethods[':paymentMethodId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataPaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.paymentMethods[':paymentMethodId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataPaymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['payments']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/payments', toValue(args)] as const
}

export function getCompaniesCompanyIdDataPaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['payments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['payments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['payments']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['payments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataPaymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataPaymentsPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/data/payments/:paymentId', toValue(args)] as const
}

export function getCompaniesCompanyIdDataPaymentsPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataPaymentsPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.payments[':paymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataPaymentsPaymentIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataPaymentsPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataPaymentsPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.payments[':paymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataPurchaseOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/purchaseOrders', toValue(args)] as const
}

export function getCompaniesCompanyIdDataPurchaseOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataPurchaseOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.purchaseOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataPurchaseOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']>
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
                    (typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']
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
                    (typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataPurchaseOrdersQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataPurchaseOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataPurchaseOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.purchaseOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/purchaseOrders/:purchaseOrderId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.purchaseOrders[':purchaseOrderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.purchaseOrders[':purchaseOrderId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataSalesOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/salesOrders', toValue(args)] as const
}

export function getCompaniesCompanyIdDataSalesOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataSalesOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.salesOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataSalesOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataSalesOrdersQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataSalesOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataSalesOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.salesOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataSalesOrdersSalesOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/salesOrders/:salesOrderId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataSalesOrdersSalesOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataSalesOrdersSalesOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.salesOrders[':salesOrderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataSalesOrdersSalesOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataSalesOrdersSalesOrderIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataSalesOrdersSalesOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataSalesOrdersSalesOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.salesOrders[':salesOrderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataSuppliersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/suppliers', toValue(args)] as const
}

export function getCompaniesCompanyIdDataSuppliersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataSuppliersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.suppliers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataSuppliers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataSuppliersQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataSuppliersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataSuppliersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.suppliers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataSuppliersSupplierIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/data/suppliers/:supplierId', toValue(args)] as const
}

export function getCompaniesCompanyIdDataSuppliersSupplierIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataSuppliersSupplierIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.suppliers[':supplierId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataSuppliersSupplierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataSuppliersSupplierIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataSuppliersSupplierIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataSuppliersSupplierIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.suppliers[':supplierId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataTaxRatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/taxRates', toValue(args)] as const
}

export function getCompaniesCompanyIdDataTaxRatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataTaxRatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.taxRates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataTaxRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>
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
                  ReturnType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataTaxRatesQueryKey>
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
          Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataTaxRatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataTaxRatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.taxRates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataTaxRatesTaxRateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/data/taxRates/:taxRateId', toValue(args)] as const
}

export function getCompaniesCompanyIdDataTaxRatesTaxRateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataTaxRatesTaxRateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.taxRates[':taxRateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataTaxRatesTaxRateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataTaxRatesTaxRateIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataTaxRatesTaxRateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataTaxRatesTaxRateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.taxRates[':taxRateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataTrackingCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['trackingCategories']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/data/trackingCategories', toValue(args)] as const
}

export function getCompaniesCompanyIdDataTrackingCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['trackingCategories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdDataTrackingCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.trackingCategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdDataTrackingCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['data']['trackingCategories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['data']['trackingCategories']['$get']>
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
                    (typeof client.companies)[':companyId']['data']['trackingCategories']['$get']
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
                    (typeof client.companies)[':companyId']['data']['trackingCategories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataTrackingCategoriesQueryKey>
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
              (typeof client.companies)[':companyId']['data']['trackingCategories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataTrackingCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdDataTrackingCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.trackingCategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/trackingCategories/:trackingCategoryId',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].data.trackingCategories[':trackingCategoryId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
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
                    (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdQueryKey>
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
              (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].data.trackingCategories[':trackingCategoryId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdReportsAgedCreditorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/reports/agedCreditor', toValue(args)] as const
}

export function getCompaniesCompanyIdReportsAgedCreditorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdReportsAgedCreditorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].reports.agedCreditor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdReportsAgedCreditor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']>
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
                    (typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdReportsAgedCreditorQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsAgedCreditorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdReportsAgedCreditorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].reports.agedCreditor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdReportsAgedCreditorAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/reports/agedCreditor/available',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdReportsAgedCreditorAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdReportsAgedCreditorAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].reports.agedCreditor.available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdReportsAgedCreditorAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdReportsAgedCreditorAvailableQueryKey>
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
              (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsAgedCreditorAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdReportsAgedCreditorAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].reports.agedCreditor.available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdReportsAgedDebtorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']>
  >,
) {
  return ['companies', '/companies/:companyId/reports/agedDebtor', toValue(args)] as const
}

export function getCompaniesCompanyIdReportsAgedDebtorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdReportsAgedDebtorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].reports.agedDebtor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdReportsAgedDebtor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']>
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
                    (typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdReportsAgedDebtorQueryKey>
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
            ReturnType<(typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsAgedDebtorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdReportsAgedDebtorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].reports.agedDebtor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdReportsAgedDebtorAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
    >
  >,
) {
  return ['companies', '/companies/:companyId/reports/agedDebtor/available', toValue(args)] as const
}

export function getCompaniesCompanyIdReportsAgedDebtorAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesCompanyIdReportsAgedDebtorAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].reports.agedDebtor.available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesCompanyIdReportsAgedDebtorAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
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
                    (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdReportsAgedDebtorAvailableQueryKey>
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
              (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdReportsAgedDebtorAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesCompanyIdReportsAgedDebtorAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].reports.agedDebtor.available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
