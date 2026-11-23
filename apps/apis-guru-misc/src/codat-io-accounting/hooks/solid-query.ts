import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/accountTransactions',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.accountTransactions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactions<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryKey
          >
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/accountTransactions/:accountTransactionId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.accountTransactions[
          ':accountTransactionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bankAccounts',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bankAccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataBankAccounts<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bankAccounts/:accountId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
          ':accountId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryKey
          >
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactions<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bills[
          ':billId'
        ].attachments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachments<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments/:attachmentId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bills[
          ':billId'
        ].attachments[':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments/:attachmentId/download',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.bills[
          ':billId'
        ].attachments[':attachmentId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownload<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.customers[
          ':customerId'
        ].attachments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachments<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments/:attachmentId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.customers[
          ':customerId'
        ].attachments[':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments/:attachmentId/download',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.customers[
          ':customerId'
        ].attachments[':attachmentId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownload<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directCosts',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directCosts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataDirectCosts<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directCosts[
          ':directCostId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directCosts[
          ':directCostId'
        ].attachments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachments<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments/:attachmentId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directCosts[
          ':directCostId'
        ].attachments[':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments/:attachmentId/download',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directCosts[
          ':directCostId'
        ].attachments[':attachmentId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownload<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directIncomes',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directIncomes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomes<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
          ':directIncomeId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
          ':directIncomeId'
        ].attachments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachments<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments/:attachmentId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
          ':directIncomeId'
        ].attachments[':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments/:attachmentId/download',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
          ':directIncomeId'
        ].attachments[':attachmentId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownload<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.invoices[
          ':invoiceId'
        ].attachments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachments<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments/:attachmentId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.invoices[
          ':invoiceId'
        ].attachments[':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments/:attachmentId/download',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.invoices[
          ':invoiceId'
        ].attachments[':attachmentId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownload<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.suppliers[
          ':supplierId'
        ].attachments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachments<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments/:attachmentId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.suppliers[
          ':supplierId'
        ].attachments[':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments/:attachmentId/download',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.suppliers[
          ':supplierId'
        ].attachments[':attachmentId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownload<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/transfers',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.transfers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataTransfers<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/transfers/:transferId',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data.transfers[
          ':transferId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryKey
          >
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
      ...getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/bankAccounts',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.bankAccounts.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccounts<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactions<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/billCreditNotes',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.billCreditNotes.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotes<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryKey
          >
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/billPayments',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.billPayments.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsBillPayments<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/bills',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.bills.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsBills<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/chartOfAccounts',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.chartOfAccounts.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccounts<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryKey
          >
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/creditNotes',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.creditNotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotes<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/customers',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsCustomers<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/directCosts',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.directCosts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCosts<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/directIncomes',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.directIncomes.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomes<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryKey
          >
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/invoices',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsInvoices<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/items',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsItems<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/journalEntries',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.journalEntries.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntries<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryKey
          >
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/journals',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.journals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsJournals<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/payments',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsPayments<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/purchaseOrders',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.purchaseOrders.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrders<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryKey
          >
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/suppliers',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.suppliers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliers<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/options/transfers',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].options.transfers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdOptionsTransfers<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushAccountsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushBillPayments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushBills<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushBillsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushCreditNotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushCustomers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushCustomersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCosts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushInvoices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushItemsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushJournalEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushJournals<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushJournalsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushPayments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushPaymentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushSuppliers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdConnectionsConnectionIdPushTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCompaniesCompanyIdConnectionsConnectionIdPushTransfersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataAccountsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/accounts', args] as const
}

export function getCompaniesCompanyIdDataAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataAccountsQueryKey>
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
      ...getCompaniesCompanyIdDataAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataAccountsAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/accounts/:accountId', args] as const
}

export function getCompaniesCompanyIdDataAccountsAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.accounts[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataAccountsAccountId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataAccountsAccountIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataBankAccountsAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/bankAccounts/:accountId', args] as const
}

export function getCompaniesCompanyIdDataBankAccountsAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataBankAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.bankAccounts[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataBankAccountsAccountId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataBankAccountsAccountIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/bankAccounts/:accountId/transactions',
    args,
  ] as const
}

export function getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.bankAccounts[':accountId'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataBankAccountsAccountIdTransactions<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataBillCreditNotesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/billCreditNotes', args] as const
}

export function getCompaniesCompanyIdDataBillCreditNotesQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataBillCreditNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.billCreditNotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataBillCreditNotes<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataBillCreditNotesQueryKey>
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
      ...getCompaniesCompanyIdDataBillCreditNotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/billCreditNotes/:billCreditNoteId',
    args,
  ] as const
}

export function getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.billCreditNotes[':billCreditNoteId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataBillCreditNotesBillCreditNoteId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataBillPaymentsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['billPayments']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/billPayments', args] as const
}

export function getCompaniesCompanyIdDataBillPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['billPayments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['billPayments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataBillPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.billPayments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataBillPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['billPayments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['billPayments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataBillPaymentsQueryKey>
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
      ...getCompaniesCompanyIdDataBillPaymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataBillPaymentsBillPaymentIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/billPayments/:billPaymentId', args] as const
}

export function getCompaniesCompanyIdDataBillPaymentsBillPaymentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataBillPaymentsBillPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.billPayments[':billPaymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataBillPaymentsBillPaymentId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataBillPaymentsBillPaymentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataBillsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['bills']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/bills', args] as const
}

export function getCompaniesCompanyIdDataBillsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['bills']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['bills']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataBillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.bills.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataBills<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['bills']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.companies)[':companyId']['data']['bills']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataBillsQueryKey>
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
      ...getCompaniesCompanyIdDataBillsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataBillsBillIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/bills/:billId', args] as const
}

export function getCompaniesCompanyIdDataBillsBillIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataBillsBillIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.bills[':billId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataBillsBillId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataBillsBillIdQueryKey>
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
      ...getCompaniesCompanyIdDataBillsBillIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataCreditNotesQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/creditNotes', args] as const
}

export function getCompaniesCompanyIdDataCreditNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataCreditNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.creditNotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataCreditNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['creditNotes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataCreditNotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataCreditNotesCreditNoteIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/creditNotes/:creditNoteId', args] as const
}

export function getCompaniesCompanyIdDataCreditNotesCreditNoteIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataCreditNotesCreditNoteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.creditNotes[':creditNoteId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataCreditNotesCreditNoteId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataCreditNotesCreditNoteIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataCustomersQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['customers']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/customers', args] as const
}

export function getCompaniesCompanyIdDataCustomersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['customers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataCustomersQueryKey>
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
      ...getCompaniesCompanyIdDataCustomersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataCustomersCustomerIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/customers/:customerId', args] as const
}

export function getCompaniesCompanyIdDataCustomersCustomerIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataCustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.customers[':customerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataCustomersCustomerId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataCustomersCustomerIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataFinancialsBalanceSheetQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/financials/balanceSheet', args] as const
}

export function getCompaniesCompanyIdDataFinancialsBalanceSheetQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataFinancialsBalanceSheetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.financials.balanceSheet.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataFinancialsBalanceSheet<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataFinancialsBalanceSheetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataFinancialsCashFlowStatementQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/financials/cashFlowStatement', args] as const
}

export function getCompaniesCompanyIdDataFinancialsCashFlowStatementQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataFinancialsCashFlowStatementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.financials.cashFlowStatement.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataFinancialsCashFlowStatement<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataFinancialsCashFlowStatementQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataFinancialsProfitAndLossQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/financials/profitAndLoss', args] as const
}

export function getCompaniesCompanyIdDataFinancialsProfitAndLossQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataFinancialsProfitAndLossQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.financials.profitAndLoss.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataFinancialsProfitAndLoss<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataFinancialsProfitAndLossQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataInfoQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/info', args] as const
}

export function getCompaniesCompanyIdDataInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdDataInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompaniesCompanyIdDataInfoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataInvoicesQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/invoices', args] as const
}

export function getCompaniesCompanyIdDataInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataInvoicesQueryKey>
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
      ...getCompaniesCompanyIdDataInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataInvoicesInvoiceIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/invoices/:invoiceId', args] as const
}

export function getCompaniesCompanyIdDataInvoicesInvoiceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataInvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.invoices[':invoiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataInvoicesInvoiceId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataInvoicesInvoiceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataInvoicesInvoiceIdPdfQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/invoices/:invoiceId/pdf', args] as const
}

export function getCompaniesCompanyIdDataInvoicesInvoiceIdPdfQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataInvoicesInvoiceIdPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.invoices[':invoiceId'].pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataInvoicesInvoiceIdPdf<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataInvoicesInvoiceIdPdfQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataItemsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['items']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/items', args] as const
}

export function getCompaniesCompanyIdDataItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.companies)[':companyId']['data']['items']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataItemsQueryKey>
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
      ...getCompaniesCompanyIdDataItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataItemsItemIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/items/:itemId', args] as const
}

export function getCompaniesCompanyIdDataItemsItemIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataItemsItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.items[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataItemsItemId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataItemsItemIdQueryKey>
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
      ...getCompaniesCompanyIdDataItemsItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataJournalEntriesQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['journalEntries']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/journalEntries', args] as const
}

export function getCompaniesCompanyIdDataJournalEntriesQueryOptions<
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
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['journalEntries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataJournalEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.journalEntries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataJournalEntries<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['journalEntries']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataJournalEntriesQueryKey>
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
      ...getCompaniesCompanyIdDataJournalEntriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataJournalEntriesJournalEntryIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/journalEntries/:journalEntryId', args] as const
}

export function getCompaniesCompanyIdDataJournalEntriesJournalEntryIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataJournalEntriesJournalEntryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.journalEntries[':journalEntryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataJournalEntriesJournalEntryId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataJournalEntriesJournalEntryIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataJournalsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['journals']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/journals', args] as const
}

export function getCompaniesCompanyIdDataJournalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['journals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['journals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataJournalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.journals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataJournals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['journals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.companies)[':companyId']['data']['journals']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataJournalsQueryKey>
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
      ...getCompaniesCompanyIdDataJournalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataJournalsJournalIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/journals/:journalId', args] as const
}

export function getCompaniesCompanyIdDataJournalsJournalIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataJournalsJournalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.journals[':journalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataJournalsJournalId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataJournalsJournalIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataPaymentMethodsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['paymentMethods']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/paymentMethods', args] as const
}

export function getCompaniesCompanyIdDataPaymentMethodsQueryOptions<
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
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['paymentMethods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.paymentMethods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataPaymentMethods<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['paymentMethods']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataPaymentMethodsQueryKey>
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
      ...getCompaniesCompanyIdDataPaymentMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/paymentMethods/:paymentMethodId', args] as const
}

export function getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.paymentMethods[':paymentMethodId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataPaymentMethodsPaymentMethodId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataPaymentsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['payments']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/payments', args] as const
}

export function getCompaniesCompanyIdDataPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.companies)[':companyId']['data']['payments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataPaymentsQueryKey>
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
      ...getCompaniesCompanyIdDataPaymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataPaymentsPaymentIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/payments/:paymentId', args] as const
}

export function getCompaniesCompanyIdDataPaymentsPaymentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataPaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.payments[':paymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataPaymentsPaymentId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataPaymentsPaymentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataPurchaseOrdersQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/purchaseOrders', args] as const
}

export function getCompaniesCompanyIdDataPurchaseOrdersQueryOptions<
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
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataPurchaseOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.purchaseOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataPurchaseOrders<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataPurchaseOrdersQueryKey>
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
      ...getCompaniesCompanyIdDataPurchaseOrdersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/purchaseOrders/:purchaseOrderId', args] as const
}

export function getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.purchaseOrders[':purchaseOrderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataSalesOrdersQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/salesOrders', args] as const
}

export function getCompaniesCompanyIdDataSalesOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataSalesOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.salesOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataSalesOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['salesOrders']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataSalesOrdersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataSalesOrdersSalesOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/salesOrders/:salesOrderId', args] as const
}

export function getCompaniesCompanyIdDataSalesOrdersSalesOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataSalesOrdersSalesOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.salesOrders[':salesOrderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataSalesOrdersSalesOrderId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataSalesOrdersSalesOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataSuppliersQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/suppliers', args] as const
}

export function getCompaniesCompanyIdDataSuppliersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataSuppliersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.suppliers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataSuppliers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['suppliers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataSuppliersQueryKey>
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
      ...getCompaniesCompanyIdDataSuppliersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataSuppliersSupplierIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/suppliers/:supplierId', args] as const
}

export function getCompaniesCompanyIdDataSuppliersSupplierIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataSuppliersSupplierIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.suppliers[':supplierId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataSuppliersSupplierId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataSuppliersSupplierIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataTaxRatesQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>,
) {
  return ['companies', '/companies/:companyId/data/taxRates', args] as const
}

export function getCompaniesCompanyIdDataTaxRatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataTaxRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.taxRates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataTaxRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdDataTaxRatesQueryKey>
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
      ...getCompaniesCompanyIdDataTaxRatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataTaxRatesTaxRateIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/taxRates/:taxRateId', args] as const
}

export function getCompaniesCompanyIdDataTaxRatesTaxRateIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataTaxRatesTaxRateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.taxRates[':taxRateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataTaxRatesTaxRateId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataTaxRatesTaxRateIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataTrackingCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['trackingCategories']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/data/trackingCategories', args] as const
}

export function getCompaniesCompanyIdDataTrackingCategoriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['trackingCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataTrackingCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.trackingCategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataTrackingCategories<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['trackingCategories']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataTrackingCategoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/data/trackingCategories/:trackingCategoryId',
    args,
  ] as const
}

export function getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].data.trackingCategories[':trackingCategoryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryId<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdReportsAgedCreditorQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/reports/agedCreditor', args] as const
}

export function getCompaniesCompanyIdReportsAgedCreditorQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdReportsAgedCreditorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].reports.agedCreditor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdReportsAgedCreditor<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdReportsAgedCreditorQueryKey>
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
      ...getCompaniesCompanyIdReportsAgedCreditorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdReportsAgedCreditorAvailableQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/reports/agedCreditor/available', args] as const
}

export function getCompaniesCompanyIdReportsAgedCreditorAvailableQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdReportsAgedCreditorAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].reports.agedCreditor.available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdReportsAgedCreditorAvailable<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdReportsAgedCreditorAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdReportsAgedDebtorQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']>,
) {
  return ['companies', '/companies/:companyId/reports/agedDebtor', args] as const
}

export function getCompaniesCompanyIdReportsAgedDebtorQueryOptions<
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
  args: InferRequestType<(typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdReportsAgedDebtorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].reports.agedDebtor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdReportsAgedDebtor<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCompaniesCompanyIdReportsAgedDebtorQueryKey>
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
      ...getCompaniesCompanyIdReportsAgedDebtorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdReportsAgedDebtorAvailableQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/reports/agedDebtor/available', args] as const
}

export function getCompaniesCompanyIdReportsAgedDebtorAvailableQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdReportsAgedDebtorAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].reports.agedDebtor.available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCompaniesCompanyIdReportsAgedDebtorAvailable<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCompaniesCompanyIdReportsAgedDebtorAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
